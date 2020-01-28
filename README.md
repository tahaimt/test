# Instructions

## Download Dependencies

1. Install Nodejs (and npm)
2. Execute the following command
   `npm install`

## Backend

1. Navigate to root directory
2. Execute the following command
   `npm start`
Note: provide relative path to server.js as per your OS

****

## Frontend

1. Open another shell/terminal
2. Navigate to root directory
3. Execute the following command
   `npm run dev-ui`

****

## Tests

Install Jest globally

   `npm install -g Jest`

## Execute Test Suite

You can execute tests by running one of the following commands from the root.

- Jest
	
	OR 
    
- npm test

## To scale

Execute the following

   `pm2 start app.js -i 4`

## Build UI after making changes to serve with Express

   `npm run build`