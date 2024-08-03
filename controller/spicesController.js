const farmDetails = require("../models/farmDeatils");
const processDetails = require("../models/process");
const spicesDetails = require("../models/spicesDeatils")

const createProcess = async (req,res) =>{
    try{
        const {title , type , date  , Location,spiceId } = req.body || {};

        const proc = await processDetails.create({
            title,
            date,
            Location,
            type
        });
        
        const spiceDetail = await spicesDetails.findOne({_id:spiceId},{
            $push:{
                process:proc._id
            }
        });

        return res.status(200).json({success:true,data:spiceDetail})

    }catch(err){
        return res.status(500).json({
            success:true,
            message:"Something went wrong..."
         })
    }
}


const createSpice = async (req,res) =>{
    try{
        const {farmId,spicesName,fertilizersUsed,Type} = req.body || {}

        if(!farmId || !spicesName || !fertilizersUsed || !Type) return res.status(404).json({success:false,message:"Missing require field"});
        const spice =  await spicesDetails.create({
            spicesName,
            fertilizersUsed,
            Type
        })

        const farm = await farmDetails.findOne({_id:farmId},{
            $push:{
                spices:spice._id
            }
        })

      return res.status(200).json({success:true,data:farm});
       
    }catch(err){
        return res.status(500).json({
            success:true,
            message:"Something went wrong..."
         })
    }
}

const createFarm = async (req,res) =>{
   try{
       const {farmName , ownerName } = req.body || {}
       // data validation 

       if(!farmName || !ownerFarm) return res.status(404).json({success:true,message:"Missing Required Filed"});

       const farm = await farmDetails.create({
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


const getSpiceDetails = async (req,res) =>{
    try{
        
        const {spiceId} = req.body || {}
        if(!spiceId) return res.status(404).json({success:false,message:"Missing require filed"});

        const spiceById = await spicesDetails.findOne({_id:spiceId});

         return res.status(200).json({success:true,data:spiceById});

    }catch(err){
        return res.status(500).json({
            success:true,
            message:"Something went wrong..."
         })
    }
}


const updateProcess = async (req,res) =>{
    try{

    }catch(err){

    }
}

module.exports = {getSpiceDetails,createFarm,createProcess,createSpice}