const app = require("./app");
const dotenv = require('dotenv');

// config 

dotenv.config({path:"server/config/config.env"})


app.get("/user",(req,res)=>{
    res.send("user found")
})

app.listen(process.env.PORT,()=>{
    console.log("server is running")
})