import { RequestHandler } from 'express'
import uuid from 'uuid/v4';
import { DataStore } from '../../data/data';
import { NewPost } from '../../interface/postInterface';
import { APIError, PublicInfo } from '../../model/shared/message';
export const apiCreatePost: RequestHandler = (req, res, next) => {


    const requireFields=['title','body'];
    const givenFields=Object.getOwnPropertyNames(req.body);
    if(!requireFields.every(field=>givenFields.includes(field))){
        return next(new APIError('Data missing','not all requied fields supplied',400))
    }
    const newPost: NewPost = {
        id: uuid(),
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body,
        price: req.body.price,
        currency: req.body.currency,
        img:[]
        
    };
    DataStore.posts.push(newPost);
    // res.json(newPost);
    res.json(new PublicInfo('post added',200,{post:newPost}));
};