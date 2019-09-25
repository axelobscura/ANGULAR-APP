import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
    /* posts = [
      {title: 'Post uno', content: 'Post uno contenido'},
      {title: 'Post dos', content: 'Post dos contenido'},
      {title: 'Post tres', content: 'Post tres contenido'},
    ]; */

    @Input() posts = [];
}
