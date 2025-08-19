import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import  userRouter from "./routes/user.route.js"
import  expenseRouter from "./routes/expense.route.js"

 dotenv.config({});

 const app= express();
 const PORT=8000;

 // middleware
 app.use(express.json());
 app.use(urlencoded({extended:true}));
 app.use(cookieParser());
 
const corsOptions = {
  origin:[ "http://localhost:5173", 
  "expense-tracker-fa7x7r82h-deependra-bits-projects.vercel.app"],  // ✅ must match exactly
  credentials: true                  // ✅ lowercase 'credentials'
}

app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRouter);
app.use("/api/v1/expense", expenseRouter);



 app.listen(PORT,()=>{
    connectDB();
     console.log(`server is listening at port ${PORT}`);
     
 })
//mXgtCfECSDUydym6
//mongodb+srv://deependra7528:<db_password>@cluster0.ecvgfpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// _id:68713a1c221d61354a150266
// token:-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODcxM2ExYzIyMWQ2MTM1NGExNTAyNjYiLCJpYXQiOjE3NTIyNTExMDIsImV4cCI6MTc1MjMzNzUwMn0.vACzufYm0P-1_FmGgkFWBikKLv3r18vUSMVEPDHlldE