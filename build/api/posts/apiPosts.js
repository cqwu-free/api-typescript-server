"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiCheckPostFilter_1 = require("./apiCheckPostFilter");
const apiGetPosts_1 = require("./apiGetPosts");
const apiGetPostDetail_1 = require("./apiGetPostDetail");
const apiCreatePost_1 = require("./apiCreatePost");
const apiDeletePost_1 = require("./apiDeletePost");
const apiUpdatePost_1 = require("./apiUpdatePost");
const apiUploadImage_1 = require("./apiUploadImage");
exports.postsRouter = express_1.Router();
exports.postsRouter.get('/', apiCheckPostFilter_1.apiCheckPostFilter, apiGetPosts_1.apiGetPosts);
exports.postsRouter.get("/", apiGetPosts_1.apiGetPosts);
exports.postsRouter.get("/:id", apiGetPostDetail_1.apiGetPostDetail);
exports.postsRouter.post("/", apiCreatePost_1.apiCreatePost);
exports.postsRouter.delete('/:id', apiDeletePost_1.apiDeletePost);
exports.postsRouter.put('/:id', apiUpdatePost_1.apiUpdatePost);
// 上传图片
exports.postsRouter.post("/:id/img", apiUploadImage_1.apiUploadImage);
