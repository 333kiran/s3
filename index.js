import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import { connection } from "./database/db.js";
import router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/',router);

const PORT = process.env.PORT || 8081;

const Url = process.env.MONGODB_URI;
connection(Url);

app.listen(PORT,() => {
    console.info(`server is listening at port ${PORT}`);
});
