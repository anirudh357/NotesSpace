import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection= async (URL)=>{
    try {
        // mongodb+srv://anirudhsharma3578:<password>@cluster0.w4qe5vq.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}
export default connection;