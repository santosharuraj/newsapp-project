import axios from 'axios';

const url = "";
export const getNews = async(page, size = 5) => {
    try {
        return await axios.get(`${url}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log(error.message);
    }
}