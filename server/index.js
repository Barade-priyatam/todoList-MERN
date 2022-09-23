import express from "express";
import cors from 'cors';

import Connection from "./database/db.js";
import route from "./routes/route.js";

const app = express();

app.use(cors());

// to parse the body comming from frontend
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

app.use('/', route);
const PORT = 8000;

Connection();

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});