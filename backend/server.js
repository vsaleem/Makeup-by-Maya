import express from "express";
// Bring in dotenv and configure database
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// OPTIONAL: Allows colors to change in console.
import colors from "colors";

/////////////////////////////////////////////////////////////

// Set up environment config variable
dotenv.config();

// Invoke database connection
connectDB();

// Initialized Express by bringing it in as, "app".
const app = express();

app.use(express.json());

app.use((req, res, next) => {
	console.log(
		`'HELLO! USER HAS MADE REQUEST TO URL.' ${req.originalUrl}`.yellow.bold
			.underline
	);
	next();
});

// Creates a route to the homepage. Sends response to client in the frontend sphere.
app.get("/", (req, res) => {
	res.send("API is running.............");
});

// Creates an api route to products. A response will GET a json array of products.
// app.get("/api/products", (req, res) => {
// 	res.json(products);
// });

// Creates a route to product by id.
// import product by id; For each product, that is equal to product by id,
// find product by request, params, by id.
// A response will FETCH an single json object of const product, by id.
// app.get("/api/products/:id", (req, res) => {
// 	const product = products.find((p) => p._id === req.params.id);
// 	res.json(product);
// });

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);

app.use(errorHandler);

// Add access PORT
const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}.`.rainbow
			.bgBrightWhite.underline.bold
	)
);

// NEXT STEP:
// Once you finally set up your server,
// set up your frontend to GET/FETCH information from
// the backend.

// Install Axios dependency in frontend directory.
// Axios is a HTTP library.  We use it to make requests
// to our backend.  An alternative to use is the FETCH API.
// Axios, to me, is much easier and powerful.
