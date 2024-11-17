const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your JSON file
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Add custom routes or middleware (optional)
server.use((req, res, next) => {
    console.log(`Request Type: ${req.method} | URL: ${req.url}`);
    next();
});

// Use the router
server.use(router);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});