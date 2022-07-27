import { Component, OnInit } from '@angular/core';
import {MessagerieService} from "../../services/messagerie.service";
import {Message} from "../../modeles/message";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  public messages : Message[] = [];

  constructor(private svc : MessagerieService) {
    this.svc.messages.subscribe(e=>this.messages=e)
  }
}
