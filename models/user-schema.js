import mongoose from 'mongoose';

const plantFormSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minimum:2,
        maximum:50,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        minimum:10,
        maximum:12,
    },
    walletAddress:{
        type:String,
        required:true,
        trim:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    }
})

const plantTreeForm = new mongoose.model("plan-tree-form",plantFormSchema);

export default plantTreeForm;