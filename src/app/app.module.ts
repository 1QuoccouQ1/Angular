import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Khai báo AppComponent ở đây
  ],
  imports: [
    BrowserModule, // Import BrowserModule
    HttpClientModule // Import HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Chỉ định component khởi động là AppComponent
})
export class AppModule { }
