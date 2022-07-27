import { Component, OnInit } from '@angular/core';
import {MessagerieService} from "../../services/messagerie.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public users : string[];

  constructor(private svc : MessagerieService) {
    this.users = []
    this.svc.messages.subscribe((e) => {
      this.users = e.map((e) => e.auteur)
      this.users = Array.from(new Set(this.users))
    })
  }



}
