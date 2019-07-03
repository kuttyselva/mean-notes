import { Post } from './post.model';
import {Subject} from 'rxjs';
export class PostService {
    private posts: Post[] = [];
    private postUpdated=new Subject<Post[]>();
    getPosts() {
        return this.posts;
    }
    addPost({title,content}){
        const post:Post={title:title,content:content};
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
    }
    getUpdated(){
        return this.postUpdated.asObservable();
    }
}