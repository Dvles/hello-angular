const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());
server.use(middlewares);

// Use the router
server.use('/api', router);

// Set up the server to run on port 3000
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
