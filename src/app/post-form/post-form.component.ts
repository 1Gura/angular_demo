import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput', {static: false}) public titleInput: ElementRef | undefined;
  public title: string = "";
  public text: string = "";

  constructor() {
  }

  ngOnInit(): void {

  }

  public addPost(): void {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.newPost.emit(post);
      this.title = this.text = '';
    }
  }

  public setFocus(): void {
    this.titleInput?.nativeElement.focus();
  }
}
