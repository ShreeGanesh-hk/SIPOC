import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [HttpErrorHandler,
    MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
