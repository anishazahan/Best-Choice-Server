const app = require("./app");
const dotenv = require('dotenv');
const cors = require('cors');
const connectDatabase = require('./config/database')

app.use(cors())

// config 
dotenv.config();


// connect database 
connectDatabase();
 

const PORT =process.env.PORT || 4000;


// const port = process.env;
// console.log(port.PORT);

app.listen(process.env.PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)
})