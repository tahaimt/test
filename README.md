# Instructions
## Layout
The project comprises of a backend and a frontend module. Backend files are placed inside the root directory and frontend code files are placed inside \<root\>/src. However, all commands below should be executed from the root directory.

- Errors are handled on the api route and an action appropriate message is served to the ui with error code, which is then shown to the user. Similarly, errors are also handled on all redux actions.
- API code is run outside of the main thread to improve route availability during expensive computations.
- Input validation is performed at both levels ie. frontend & backend.

Note: All commands were tested on the following versions of Node, npm and yarn on Windows 10 and macOS Catalina 10.15.2

|         | Windows |  macOS |
|---------|---------|--------|
|    Node |   12.6.0| 12.14.1|
|     npm |    6.9.0|  6.13.4|
|    yarn |   1.19.1|  1.21.1|

## Download Dependencies

1. Install Nodejs (and npm or yarn) as admin or root, preferably the versions above.
2. Execute one of the following commands
   `npm install`
      OR
   `yarn`
   
## App (for your convinience, frontend files are already built and served from express)

1. Navigate to root directory
2. Execute the following command
   `npm start`
3. Navigate to the URL displayed in console

****

## Frontend

1. Open another shell/terminal
2. Navigate to root directory
3. Execute the following command
   `npm run dev-ui`

****

## Tests (VS Code config is included, select Start Debugging or Run without Debugging from Debug menu option to run tests automatically )

Integation tests are included for the backend, while unit tests are included for both backend and frontend. I wanted to add a few puppeteer tests for smoke testing but couldn't due to time constraints.

Install Jest globally (optional)

   `npm install -g Jest`

## Execute Test Suite

You can execute tests by running one of the following commands from the root.

- Jest
	
	OR 
    
- npm test

## To scale to 4 processes (the route defined in the api does use a worker to execute code in nonblocking fashion, this however increases number of listeners)

Execute the following to start a cluster

1. Install pm2 package globally (with npm or yarn) as admin or root

   `npm install -g pm2`
   
2. Execute the following command from root

   `pm2 start server.js -i 4`

To stop the cluster, execute the following command

   `pm2 stop server.js -i 4`

## Build UI after making changes, and to serve with Express

   `npm run build`
