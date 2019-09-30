import { Component , OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
    /* posts = [
      {title: 'Post uno', content: 'Post uno contenido'},
      {title: 'Post dos', content: 'Post dos contenido'},
      {title: 'Post tres', content: 'Post tres contenido'},
    ]; */

    posts: Post[] = [];
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {}

    ngOnInit() {
      this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    }

    ngOnDestroy() {
      this.postsSub.unsubscribe();
    }
}
