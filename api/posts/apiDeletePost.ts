import { DataStore } from "../../data/data";
import { RequestHandler } from 'express';
import { PublicInfo, APIError } from "../../model/shared/message";
export const apiDeletePost: RequestHandler = (req, res) => {
    const postIndex=DataStore.posts.findIndex((item:any)=>
    item.id==req.params.id);
    if(postIndex>-1){
        DataStore.posts.splice(postIndex,1);
        // res.status(200).json({status:"success",message:'delete success'});
        res.json(new PublicInfo('post delete',200));
    }else{
        // res.status(404).json({status:"failed",message:'delete failed'});
        res.json(new APIError('Validation Error','post delete',400));
        
    }
}
