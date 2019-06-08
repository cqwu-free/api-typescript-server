import { RequestHandler } from "express";
import { PostFilter } from "../../model/shared/postFilter";
import { APIError } from "../../model/shared/message";

export const apiCheckPostFilter:RequestHandler=(req,res,next)=>{
    // console.log('apiCheckPostFilter',req.query);
    const filters=new PostFilter(req.query);
    // console.log(filter);
    for(const filter of Object.getOwnPropertyNames(req.query)){
        // console.log(filter);
        if(!filters.hasOwnProperty(filter)){
            next(new APIError('query string error','no such filter',400))
        }
    }
    next();
}