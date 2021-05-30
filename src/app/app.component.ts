import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    {title: "Заголовок1", text: "Текст1", id: 1},
    {title: "Заголовок2", text: "Много текста!", id: 2}
  ];

  public newPost(post:Post): void {
    this.posts.push(post);
  }
  ngOnInit(): void {
    setTimeout(()=>{
      console.log(this.posts[0].title = "CHANGE!")},5000)
  }
}
