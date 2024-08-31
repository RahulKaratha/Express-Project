const express= require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const app=express();
const dotenv= require("dotenv").config();

connectDb();
const port= process.env.PORT||3000;

app.use(express.json());

app.use("/api/contacts",require("./routes/contactroutes"));
app.use("/api/users",require("./routes/userRoutes"));

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);

});
