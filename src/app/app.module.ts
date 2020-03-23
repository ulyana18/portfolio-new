import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMyselfComponent } from './components/about-myself/about-myself/about-myself.component';
import { TimelineComponent } from './components/timeline/timeline/timeline.component';
import { MatCardModule } from '@angular/material/card';
import { MyProjectsComponent } from './components/my-projects/my-projects/my-projects.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
// MDB Angular Pro
import { ButtonsModule, CardsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMyselfComponent,
    TimelineComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSidenavModule,
    FontAwesomeModule,
    MatCardModule,
    CarouselModule,
    WavesModule,
    ButtonsModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
