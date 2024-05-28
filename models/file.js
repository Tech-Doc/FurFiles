const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    permissions: { type: String, enum: ['private', 'public'], default: 'private' },
});

const File = mongoose.model('File', fileSchema);
module.exports = File;

