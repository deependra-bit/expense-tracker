import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 export  const register = async(req,res)=>{
    try {
        const{fullName,email,password}=req.body;
        if(!fullName || !email || !password){
            return res.status(400).json({
                message:"All field are required.",
                success:false, 
            })
        };
        const user = await User.findOne({email});
         if(user){
            return res.status(400).json({
                message:"User already exixt with this email",
                success:false
            })
         };
         const hashedPassword= await bcrypt.hash(password,10);
          await User.create({
            fullName,    
            email,
            password:hashedPassword 
          });
          return res.status(201).json({
             message:"Account created successfully..",
              success:true
          })

    } catch (error) {
        console.log(error);
         return res.status(500).json({
    message: "Server Error: " + error.message,
    success: false
  });
    }
}

export const login=async(req,res)=>{
     try {
         const{email,password}= req.body;
          if( !email || !password){
            return res.status(400).json({
                message:"All field are required.",
                success:false
            })
        };
         const user = await User.findOne({email});
         if(!user){
            return res.status(400).json({
                message:"Incorrect Email or Password",
                success:false
            })
         };
        const isPasswordMatch = await bcrypt.compare( password, user.password);
              if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect Email or Password",
                success:false
            })
         };
         const tokenData={
             userId:user._id
         } 
         const token= await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
          return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpOnly:true,sameSite:'Lax'}).json({
            message:`Welcome back ${user.fullName}`,
            user:{
        _id:user._id,
        fullName:user.fullName,
        email:user.email
            },
            success:true
          })

     } catch (error) {
        console.log(error);
        
     }
}

export const logOut= async(req,res)=>{
     try {
        return  res.status(200).cookie("token","",{maxAge:0}).json({
            message:"User Logged out Successfully..",
            success:true
        })
     } catch (error) {
        console.log(error);
        
     }
}