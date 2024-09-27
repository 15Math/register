import registerModel from '../models/registerModel.js';

const emailExists = async (req,res,next)=>{
    const {userEmail} = req.body;
    const exists = await registerModel.emailExists(userEmail);
    if(exists){
        return res.status(400).json({message:"Já existe uma conta com este email!"})
    }
    
    next();

    
}

export default {
    emailExists
}