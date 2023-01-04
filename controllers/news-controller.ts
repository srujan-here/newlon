import News from "../model/news";
import express, { Request, Response } from "express";

export const getnews = async (req: Request, res: Response) => {
  let currnews;
  try {
    currnews = await News.find();
  } catch (err) {
    console.log(err);
  }
  if (!currnews) {
    res.status(404).json({ message: "no news found" });
  }

  console.log("gotta news");
  return res.status(200).json({ currnews });
};


export const postnews = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const newsblog = new News({
    title,
    description,
  });

  try {
    newsblog.save();
  } catch (err) {
    return console.log(err);
  }

   return res.status(201).json({message: "news created"});
};
