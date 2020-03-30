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
import { ButtonsModule, CardsModule } from 'angular-bootstrap-md';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SkillsComponent } from './components/skills/skills/skills.component';
import { ContactsComponent } from './components/contacts/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMyselfComponent,
    TimelineComponent,
    MyProjectsComponent,
    SkillsComponent,
    ContactsComponent,
    FooterComponent
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
    CardsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
