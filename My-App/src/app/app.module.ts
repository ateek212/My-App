import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderbarComponent } from './layout/headerbar/headerbar.component';
import { FooterbarComponent } from './layout/footerbar/footerbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderbarComponent,
    FooterbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
