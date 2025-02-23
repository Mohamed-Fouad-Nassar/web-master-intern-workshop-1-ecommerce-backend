// // See https://github.com/typicode/json-server#module
// const jsonServer = require("json-server");

// const server = jsonServer.create();

// // Uncomment to allow write operations
// const fs = require("fs");
// const path = require("path");
// const filePath = path.join("db.json");
// const data = fs.readFileSync(filePath, "utf-8");
// const db = JSON.parse(data);
// const router = jsonServer.router(db);

// // Comment out to allow write operations
// // const router = jsonServer.router("db.json");

// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// // Add this before server.use(router)
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//     "/blog/:resource/:id/show": "/:resource/:id",
//   })
// );
// server.use(router);
// server.listen(3000, () => {
//   console.log("JSON Server is running");
// });

// // Export the Server API
// module.exports = server;

// --------------------------------------------------------

// Import necessary modules
const jsonServer = require("json-server");
const jsonServerAuth = require("json-server-auth"); // Import json-server-auth
const fs = require("fs");
const path = require("path");

const server = jsonServer.create();

// Load the database file
const filePath = path.join("db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();

// Add default middlewares (like CORS, static files, etc.)
server.use(middlewares);

// Apply json-server-auth middleware before the router
server.db = router.db; // Required for json-server-auth to work properly
server.use(jsonServerAuth);

// Add URL rewriting rules
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    // "/blog/:resource/:id/show": "/:resource/:id",
  })
);

// Use the router for handling database routes
server.use(router);

// // Watch db.json for changes and reload
// fs.watch(filePath, () => {
//   console.log("Database file changed. Reloading...");
//   const newData = fs.readFileSync(filePath, "utf-8");
//   router.db.assign(JSON.parse(newData)); // Update database dynamically
// });

// Start the server
server.listen(3000, () => {
  console.log("JSON Server with Auth is running");
});

// Export the Server API
module.exports = server;
