const express = require("express");
// Bring in products from backend/data
const products = require("./data/products");

// Initialized Express by bringing it in as, "app".
const app = express();

// Creates a route to the homepage. Sends response to client in the frontend sphere.
app.get("/", (req, res) => {
	res.send("API is running....");
});

// Creates an api route to products. A response will GET a json array of products.
app.get("/api/products", (req, res) => {
	res.json(products);
});

// Creates a route to product by id.	
// import product by id; For each product, that is equal to product by id, 
// find product by request, params, by id.
// A response will FETCH an single json object of const product, by id.
app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

app.listen(5000, console.log("Server is running on port 5000."));


// NEXT STEP:
// Once you finally set up your server,
// set up your frontend to GET/FETCH information from
// the backend.

// Install Axios dependency in frontend directory.
// Axios is a HTTP library.  We use it to make requests
// to our backend.  An alternative to use is the FETCH API.
// Axios, to me, is much easier and powerful.
