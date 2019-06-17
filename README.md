
This poc consists on development of an backend application using nodejs and an client using only HTML, CSS and Javascript.

# Backend

### Structure
```
|──src
|   ├── config              # App configuration files
|   ├── database            # Setup mongoose to connect with mlab
│   ├── models              # Models from database
│   ├── routes.js           # Define routes and middlewares here
│   └── signals             # Callback scope to identify shutdown api by signal
├── tests                   # Tests
├── package.json            # Contains script and dependecies necessaries to project
└── app.js                  # App starting point
```
### Run
- `npm install` install dependencies
- `npm run dev` run in development mode

# Frontend

### Structure
```
├── assets                  # Folder with css, imgs and others
|──src
|   ├── constants           # Generic constants from app
|   ├── services            # Services to all endpoints
|   └── templates           # Templates for components or generic views.
|   └── utils               # Contains generic methods like handleData.
├── dist                    # Contain min files genereted by webpack
├── index.html              # Index from aplication
├── package.json            # Contains script and dependecies necessaries to project
└── webpack.config          # Setup and compile files necessaries to app.
```
### Run
- `npm install` install dependencies
- `npm run server` run in development mode

