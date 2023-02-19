const app = require("./app");
const dotenv = require('dotenv');
const cors = require('cors');
const connectDatabase = require('./config/database')

// Handling Uncaught Exception
 process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


app.use(cors())

// config 
dotenv.config();


// connect database 
connectDatabase();
 

const PORT =process.env.PORT || 4000;


//--------server running code 

const server = app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)
})



// Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });