"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const message_1 = require("../../model/shared/message");
exports.apiDownloadImage = (req, res, next) => {
    const fileID = req.params.id;
    res.download(path_1.default.resolve("./", "public", "img", fileID), err => {
        if (err) {
            next(new message_1.APIError("Download Failed", " can not Download request file", 400));
        }
    });
};
