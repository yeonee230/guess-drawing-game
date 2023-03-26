import express from "express";

const PORT = 5005;
const app = express();

const handleListening = () => console.log(`🔥 Server Listening! port : ${PORT}`);

app.listen(PORT, handleListening);