import {router} from "./src/routes/routes";
import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',router)


mongoose.connect('mongodb://mughees605:mughees1996@ds117093.mlab.com:17093/user-management')
app.listen(port,() => {
    console.log(port)
})