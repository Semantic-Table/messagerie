import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './composants/title/title.component';
import { UserComponent } from './composants/user/user.component';
import { MessageComponent } from './composants/message/message.component';
import { AddMessageComponent } from './composants/add-message/add-message.component';
import { PostComponent } from './composants/post/post.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    UserComponent,
    MessageComponent,
    AddMessageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
