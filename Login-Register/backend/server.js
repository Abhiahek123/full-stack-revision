import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
  console.log("MongoDB connected");
  
}).catch((error)=> {
  console.log("MongoDB connection error", error);
  
})
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
