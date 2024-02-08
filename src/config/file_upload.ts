import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import crypto from "crypto";
import path from "path";
import mongoose from "mongoose";
import gridfsstream from "gridfs-stream";
import { options } from "./db_options";
import { GridFSBucket } from "mongodb";
import dotenv from "dotenv";
import { Response } from "express";

dotenv.config(require("find-config")(".env"));

/**
 * create storage engine
 */
const dburl: any = process.env.DATABASE_URL;
const bucketName = "uploads";

export const storage = new GridFsStorage({
  url: dburl,
  file: async (req, file) => {
    return await new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err != null) {
          reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename,
          bucketName,
        };
        resolve(fileInfo);
      });
    });
  },
});

export const upload = multer({ storage });

const connect = mongoose.createConnection(dburl, options);

export let gfs: gridfsstream.Grid;
export let gridfsBucket: GridFSBucket;
connect.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(connect.db, {
    bucketName,
  });

  gfs = gridfsstream(connect.db, mongoose.mongo);
  gfs.collection(bucketName);
});

export function displayImage(res: Response, file: any): void {
  const readstream = gridfsBucket.openDownloadStream(file._id);
  readstream.pipe(res);
}
