import express from 'express';
import Connection from './connection/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import route from './routes/route.js';
import cors from 'cors';
import bodyparser from 'body-parser';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ extended: true }));
app.use("/", route);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${username}:${password}@cluster0.lbwfm.mongodb.net/INSHORT?retryWrites=true&w=majority`

Connection(process.env.MONGODB_URI || URL);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
}
DefaultData();
app.listen(PORT, () => {
    console.log("Port is listening");
})