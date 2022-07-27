import {Injectable} from '@angular/core';
import {Message} from "../modeles/message";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {
  public messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);

  constructor() {

  }

  public ajouterMessage(message: Message): void {
    let tempTab: Message[] = this.messages.value
    tempTab.push(message)
    this.messages.next(tempTab)
  }

  public getMessages(): Message[] {
    return this.messages.value
  }
}
