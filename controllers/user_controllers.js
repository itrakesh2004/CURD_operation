const User=require('../models/userModel.js')

exports.home=(req,res) => {
    res.end("hello world");
}

exports.createUser =async(req,res) => {
    //extract info

    try{
        const{name,email}=req.body;

        if(!name || !email){
            throw new Error("Name and Email are required")
        }

        const userExits = User.findOne({email})

        if(userExit){
            throw new Error("user already exists")
        }

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success:true,
            message:"user created Succesfully",
            user
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            success:false,
            message:"error.message"
        })
    }
}

exports.getUser = async(req,res) => {
    try{
        const users = await User.find({})

        res.status(200).json({
            success:true,
            users
        })

    }catch(error){
        console.log(error);
        res.status(404).json({
            success:false,
            message:"error.message"
        })
    }
}
exports.editUser = async(req,res) => {
    try{
        const user =await user.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            success:true,
            message:"user upadated succesfully"
        })

    }catch(error){
        res.status(404).json({
            success:false,
            message:"error.message"
        })
    }
}

exports.deleteUser= async(req,res) => {
    try{
        // ahi jo body thi data lo to req.body write
        // ahi jo url thi data lo to req.params.id
        const userId=req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:"user deleteing"
        })
    }catch(error){  
        console.log(error);
        res.status(404).json({
        success:false,
        message:"error.message"
    })

    }
}