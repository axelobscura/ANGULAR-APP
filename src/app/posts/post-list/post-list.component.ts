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
    totalPosts = 0;
    postsPerPage = 5;
    currentPage = 1;
    pageSizeOptions = [1, 2, 5, 10];
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {}

    ngOnInit() {
      this.isLoading = true;
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
      this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((postData: {posts: Post[], postCount: number}) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      });
    }

    onChangedPage(pageData: PageEvent) {
      this.isLoading = true;
      this.currentPage = pageData.pageIndex + 1;
      this.postsPerPage = pageData.pageSize;
      this. postsService.getPosts(this.postsPerPage, 1);
      console.log(pageData);
    }

    onDelete(postId: string) {
      this.postsService.deletePost(postId).subscribe(() => {
        this.postsService.getPosts(this.postsPerPage, this.currentPage);
      });
    }

    ngOnDestroy() {
      this.postsSub.unsubscribe();
    }
}
