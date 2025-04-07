import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { JourneyComponent } from './journey/journey.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MissionComponent,
    GalleryComponent,
    ContactComponent,
    JourneyComponent,
    MessagesComponent,
    HomeComponent // Declare HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
