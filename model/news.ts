import mongoose from "mongoose";

const Schema = mongoose.Schema

const newsschema = new Schema({
    title:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    }
})


export default mongoose.model('News',newsschema)

//api: c4d01dd2ad8c436f99fdbfa8cc934b9a