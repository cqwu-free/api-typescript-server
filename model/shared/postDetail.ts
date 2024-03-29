import {PostSummary } from './postSummary';
import {Todo} from './todo';
export class PostDetail extends PostSummary {
    price: number;
    currency: string;
    todos:Todo;
    img:string[];
    constructor(postData: any,todoData:any,postImgs:string[]) {
        super(postData);
        this.price=postData.price;
        this.currency=postData.currency;
        this.todos=todoData.map((item:any)=>new Todo(item));
        this.img=postImgs;
    }
}