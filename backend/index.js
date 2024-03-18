import { Express } from "express";
import bodyParser from "body-parser";

//setup express app
const app = Express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello world");
    });
