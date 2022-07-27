import {Component, OnInit} from '@angular/core';
import {Message} from "../../modeles/message";
import {MessagerieService} from "../../services/messagerie.service";

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  public auteur: string;
  public texte: string;

  constructor(private svc : MessagerieService) {
    this.auteur = '';
    this.texte = '';
  }

  ngOnInit(): void {
  }

  ajouterMessage(form:Message) {
    const regex = /[a-z]/
    if (form.auteur.match(regex) && form.texte.match(regex)){
      this.svc.ajouterMessage(new Message(form.auteur,form.texte))
    }

  }
}
