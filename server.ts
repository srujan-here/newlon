import express, { Request, Response } from "express";
import mongoose from "mongoose";
import newsroute from "./routes/news-route";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/srujan", newsroute);

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://srujan:2zEpm2FGZRGqGWKN@cluster0.2rzdg3e.mongodb.net/News?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("the server is connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/tenet", (req: Request, res: Response) => {
  res.send("hai srujan");
});


axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c4d01dd2ad8c436f99fdbfa8cc934b9a')
.then((res)=>{
 const artic= res.data;
 console.log(artic.articles);
}).catch((err)=>{
  console.log(err)
})



app.listen(3000, () => {
  console.log("hai srujan");
});

//2zEpm2FGZRGqGWKN

//mongodb+srv://srujan:<password>@cluster0.2rzdg3e.mongodb.net/?retryWrites=true&w=majority