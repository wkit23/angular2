import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { SuperpipePipe } from './superpipe.pipe';
import { SumpipePipe } from './sumpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserEditorComponent,
    SuperpipePipe,
    SumpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
