import { RequestHandler } from "express";
import multer from 'multer';
import path from 'path';
import uuid from 'uuid/v4';
export function getFileUploader(env: string): RequestHandler {
    switch (env) {
        case "development":
            const fileID = uuid();
            const fileStore = multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, path.resolve('./', 'public', 'img'));
                },
                filename: function (req, file, cb) {
                    cb(null, fileID + path.extname(file.originalname));
                }
            });
            return multer({ storage: fileStore }).single("file");
        case "production":
            return (req, res, next) => {
                next();
            }
        default:
            return (req, res, next) => {
                next();
            }
    }
}