import { DataStore } from "../../data/data";
import { RequestHandler } from 'express';
import { PostDetail } from '../../model/shared/postDetail';

export const apiGetPostDetail: RequestHandler = (req, res, next) => {
    const selectedPost = DataStore.posts.find((element: any) =>
        element.id == req.params.id);
    if (selectedPost) {
        const selectedTodos = DataStore.todos.filter(
            (item: any) => item.postId == req.params.id
        );
        const imgURLs=selectedPost.img.map(
            (item:string)=>{
                if(req.app.get('env')=='development'){
                    return 'http://localhost:8091/static/'+item;
                }else{
                    return 'http://www.baidu.com/static/'+item;
                }
            }
        )
        res.json(new PostDetail(selectedPost, selectedTodos,imgURLs));
    } else {
        res.status(404).json({ status: 'failed', message: 'post not found' });
    }
}