import express, { Request, Response } from "express";
import { getnews, postnews } from "../controllers/news-controller";
import axios from "axios";

const newsroute = express.Router();

newsroute.get('/',getnews)
newsroute.post('/',postnews)



export default newsroute