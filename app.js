import express from "express";
import cors from "cors";
import config from "./config/index.js";
import dotenv from 'dotenv';

import CustomError from "./utils/customError.js";
import errorHandler from './controllers/error.controller.js';


dotenv.config();


const app = express();

app.use(cors({
  origin: config.cors.origin,
  credentials: config.cors.credentials,
  methods: config.cors.methods,
}));
app.use(express.json());

import productRoutes from "./routes/getProducts.routes.js";

app.use(config.api.prefix, productRoutes);


app.use((req, res, next) => {

  const err = new CustomError(`can't find this route ${req.originalUrl} on server`, 404);

  next(err)
})

app.use(errorHandler)

export default app;