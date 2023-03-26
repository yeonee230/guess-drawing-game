import express from "express";
import {join} from "path";

const PORT = 5005;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.get("/", (req, res) => res.render("home"));
const handleListening = () => console.log(`🔥 Server Listening! port : ${PORT}`);

app.listen(PORT, handleListening);
