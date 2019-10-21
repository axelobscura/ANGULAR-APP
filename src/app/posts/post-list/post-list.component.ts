import { Component , OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';
import { PageEvent } from '@angular/material';
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
    isLoading = false;
    totalPosts = 10;
    postsPerPage = 5;
    pageSizeOptions = [1, 2, 5, 10];
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {}

    ngOnInit() {
      this.isLoading = true;
      this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
    }

    onChangedPage(pageData: PageEvent) {
      console.log(pageData);
    }

    onDelete(postId: string){
      this.postsService.deletePost(postId);
    }

    ngOnDestroy() {
      this.postsSub.unsubscribe();
    }
}
