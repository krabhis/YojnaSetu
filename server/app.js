import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const  app  = express();

app.use(cors(
//     {
//   origin: "http://localhost:3000", 
//   credentials: true              

// }
));

app.use(express.urlencoded({
    extended:false
}));

app.use(cookieParser());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("App is running");
});

export {app};
