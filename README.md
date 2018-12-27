# Test-INDT
This test consists on development of an backend application using nodejs and an client using only HTML, CSS and Javascript.

# Backend

### Structure
```
|──src
|   ├── config              # App configuration files
|   ├── database            # Setup mongoose to connect with mlab
│   ├── models              # Models from database
│   ├── routes.js           # Define routes and middlewares here
│   └── signals             # Callback scope to identify shutdown api by signal
├── tests                   # Testing
├── package.json            # Contains script and dependecies necessaries to project
└── app.js                  # App starting point
```
### Run
- `npm install` install dependencies
- `npm run dev` run in development mode
- `npm run prod` run in production mode

# Frontend

### Structure
