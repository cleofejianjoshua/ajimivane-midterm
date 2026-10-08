import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first'); //for testing

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => { 
          console.log(`Running on port ${PORT}`);
      });
  })
  .catch(err => console.log("Connection Failed:", err));