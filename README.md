#Furfiles
#chatapp_api
#clinicalx_api

FurFiles

Python Backend API & Messaging Application

FurFiles is a Python-based backend application that provides APIs for user management, private messaging and group communication. The application is built with Flask and Flask-RESTful and uses MongoDB for data storage.

Features

* User creation, retrieval, updating and deletion
* Private messaging between users
* Group messaging through communication channels (“pots”)
* Create, join and leave group channels
* Retrieve conversations and messages
* Contact management
* RESTful API endpoints
* Cross-Origin Resource Sharing (CORS)
* Environment-based configuration for database credentials

Technologies

* Python
* Flask
* Flask-RESTful
* MongoDB
* PyMongo
* Flask-CORS
* python-dotenv
* Docker
* Jenkins
* Linux/Unix development environment

API Functionality

User Management

The API provides endpoints for:

* Creating users
* Retrieving individual users
* Retrieving all users
* Updating users
* Deleting users

Messaging

The messaging API supports:

* Private messages between users
* Group/channel messages
* Retrieving private conversations
* Retrieving group messages
* Creating communication channels
* Joining and leaving channels
* Managing contacts

Project Structure

FurFiles/
├── end_points/
│   ├── user_api.py
│   └── messenger_api.py
├── engine/
├── env/
├── api.py
├── Dockerfile
├── Jenkinsfile
├── README.md
└── __init__.py

Database

FurFiles uses MongoDB as its database. Database credentials are loaded through environment variables rather than being hard-coded into the application.

Development & Deployment

The project includes Docker and Jenkins configuration files, demonstrating exposure to containerisation and continuous integration/deployment workflows.

Learning Outcomes

This project strengthened my practical experience in:

* Python backend development
* REST API design and implementation
* Flask application development
* MongoDB database integration
* API endpoint organisation
* CRUD operations
* Environment-based configuration
* Containerisation
* CI/CD concepts
* Linux-based development

Future Improvements

Potential future improvements include:

* Automated unit and integration testing
* Authentication and authorisation
* API documentation
* Improved error handling
* Message validation and moderation
* Expanded deployment and monitoring capabilities


Author

Perpetual C. Stanley, D.V.M.

Veterinarian | AMR Researcher | Software Engineering & Data Enthusiast

GitHub: Tech-Doc
