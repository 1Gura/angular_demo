import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  @Input() public post: Post = {text: "", title: ""};
  @ContentChild('info', {static: true}) infoRef: ElementRef | undefined;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.infoRef)
  }
}
