import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoatingModule } from './app-roating/app-roating.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoginComponent } from './login/login.component';


import { SwiperModule } from 'angular2-useful-swiper';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownDirective } from './dropdown.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoatingModule,
    NoopAnimationsModule,
    MaterialModule,
    CarouselModule.forRoot(),
    SwiperModule,
    BsDropdownModule.forRoot()
    
  ],
   exports: [DropdownDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
