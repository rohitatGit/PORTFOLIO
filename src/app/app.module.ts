import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileModule } from './user-profile/user-profile.module'
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserProfileModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
