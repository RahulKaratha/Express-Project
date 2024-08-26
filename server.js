const express= require("express");
const app=express();
const dotenv= require("dotenv").config();

const port= process.env.PORT||3000;

app.use(express.json());

app.use("/api/contacts",require("./routes/contactroutes"));

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);

});