const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const config = require("../config");
const routes = require("./routes/index")
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(fileUpload());


app.use("/api/uploads", express.static(process.cwd() + "/uploads"));


app.use("/api", routes);


const PORT = config.port;

app.listen(PORT, ()=>{
    console.log(PORT);
})