import mongoose from "mongoose";

const Connection = async(URL) => {


    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connection successfull");
    } catch (error) {
        console.log(error.message);
    }
}

export default Connection;