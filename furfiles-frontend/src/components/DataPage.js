import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataPage = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('/api/files', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setFiles(res.data);
        };

        fetchFiles();
    }, []);

    return (
        <div>
            <h1>Data Page</h1>
            <ul>
                {files.map(file => (
                    <li key={file._id}>{file.filename}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataPage;

