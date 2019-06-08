"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const data_1 = require("../../data/data");
const message_1 = require("../../model/shared/message");
exports.apiCreatePost = (req, res, next) => {
    const requireFields = ['title', 'body'];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requireFields.every(field => givenFields.includes(field))) {
        return next(new message_1.APIError('Data missing', 'not all requied fields supplied', 400));
    }
    const newPost = {
        id: v4_1.default(),
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body,
        price: req.body.price,
        currency: req.body.currency,
        img: []
    };
    data_1.DataStore.posts.push(newPost);
    // res.json(newPost);
    res.json(new message_1.PublicInfo('post added', 200, { post: newPost }));
};
