import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'; // Import HttpClientModule
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent // Khai báo AppComponent ở đây
  ],
  imports: [
    BrowserModule, // Import BrowserModule
    HttpClientModule, // Import HttpClientModule
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['your-api-domain.com'],
        disallowedRoutes: ['your-api-domain.com/auth/']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent] // Chỉ định component khởi động là AppComponent
})
export class AppModule { }
