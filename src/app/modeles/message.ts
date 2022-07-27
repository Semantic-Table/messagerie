import {Time} from "@angular/common";

export class Message {

  private _auteur: string;
  private _date: Date;
  private _texte: string;

  constructor(auteur: string, texte: string) {
    this._auteur = auteur;
    this._date = new Date(Date.now());
    this._texte = texte;
  }

  get auteur(): string {
    return this._auteur;
  }

  set auteur(value: string) {
    this._auteur = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get texte(): string {
    return this._texte;
  }

  set texte(value: string) {
    this._texte = value;
  }
}


