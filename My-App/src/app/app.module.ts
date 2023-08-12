import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { HeaderbarComponent } from './shared/layout/headerbar/headerbar.component';
import { FooterbarComponent } from './shared/layout/footerbar/footerbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './shared/Materials/app.materials.module';
import { DashboardsComponent } from './roots/dashboards/dashboards.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderbarComponent,
    FooterbarComponent,
    DashboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
