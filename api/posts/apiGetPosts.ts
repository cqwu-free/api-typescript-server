import { DataStore } from "../../data/data";
import { RequestHandler } from 'express';
import { PostSummary } from '../../model/shared/postSummary';
import { PostFilter } from "../../model/shared/postFilter";
export const apiGetPosts: RequestHandler = (req, res) => {
    const filters=new PostFilter(req.query);
    console.log('apiGet',filters);
    const filteredData=DataStore.posts.filter((item:any)=>{
        let condations=[
            filters.currency?item.currency==filters.currency:true
        ]
        return condations.every(value=>value==true);
    });
    res.json(filteredData.map((item: any) => new PostSummary(item)));
}
