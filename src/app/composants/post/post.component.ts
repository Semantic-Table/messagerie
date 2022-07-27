import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../modeles/message";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() message: Message;
  constructor() {
    this.message = new Message('','')
  }

  ngOnInit(): void {
  }

}
