const express = require("express");
const app = express();
const PORT = 5175;

app.listen(PORT,()=>{
    console.log(`Listening on Port : ${PORT}`);
});