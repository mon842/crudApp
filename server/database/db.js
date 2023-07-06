import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const Connection= async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@crud-app.huocvil.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("database connection established");
    } 
    catch (error) {
        console.log("error while creating connection", error);
    }
}

export default Connection;