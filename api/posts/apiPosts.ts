import {Router} from 'express';
import { apiCheckPostFilter } from './apiCheckPostFilter';
import { apiGetPosts } from './apiGetPosts';
import { apiGetPostDetail } from './apiGetPostDetail';
import { apiCreatePost } from './apiCreatePost';
import { apiDeletePost } from './apiDeletePost';
import { apiUpdatePost } from './apiUpdatePost';
import { apiUploadImage } from './apiUploadImage';
export let postsRouter=Router();
postsRouter.get('/',apiCheckPostFilter,apiGetPosts);
postsRouter.get("/", apiGetPosts)
postsRouter.get("/:id", apiGetPostDetail)
postsRouter.post("/", apiCreatePost);
postsRouter.delete('/:id', apiDeletePost);
postsRouter.put('/:id', apiUpdatePost);
// 上传图片
postsRouter.post("/:id/img", apiUploadImage);