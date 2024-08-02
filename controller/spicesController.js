const farmDetails = require("../models/farmDeatils")

const createProcess = (req,res) =>{
    try{
        const {title , type , date  , Location,farmId,spiceId } = req.body || {}

    }catch(err){
        return res.status(500).json({
            success:true,
            message:"Something went wrong..."
         })
    }
}


const createSpice = (req,res) =>{
    try{

    }catch(err){
        return res.status(500).json({
            success:true,
            message:"Something went wrong..."
         })
    }
}

const createFarm = (req,res) =>{
   try{
       const {farmName , ownerName } = req.body || {}
       // data validation 

       if(!farmName || !ownerFarm) return res.status(404).json({success:true,message:"Missing Required Filed"});

       const farm = farmDetails.create({
        farmName,
        ownerName
       })

       if(!farm) return res.status(500).json({success:false,message:"Something went wrong while creating farm"});

       return res.status(200).json({
        success:true,
        data:farm
       })

   }catch(err){
     return res.status(500).json({
        success:false,
        message:"Something went wrong..."
     })
   }
}


const getSpiceDetails = (req,res) =>{
    try{

    }catch(err){
        return res.status(500).json({
            success:true,
            message:"Something went wrong..."
         })
    }
}