import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import apiRoutes from "./routes/index.js"; // Main routes file


const  app  = express();

app.use(cors(
//     {
// //   origin: "http://localhost:5173", 
// //   credentials: true              

// }
));

app.use(express.urlencoded({
    extended:false
}));

app.use(cookieParser());
app.use(express.json());

app.use("/api", apiRoutes); 


app.get("/",(req,res)=>{
    res.send("App is running");
});

export {app};
