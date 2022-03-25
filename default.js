import { data } from "./constant/data.js";
import news from "./model/news.js";
const DefaultData = async() => {

    try {
        await news.deleteMany({});
        await news.insertMany(data);
        // console.log("Data Inserted");
    } catch (error) {
        console.log(error.message);
    }
}

export default DefaultData;