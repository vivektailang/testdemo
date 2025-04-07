import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { JourneyComponent } from './journey/journey.component';
import { MessagesComponent } from './messages/messages.component';
import { AppComponent } from './app.component'; // Import AppComponent
import { HomeComponent } from './home/home.component'; // Import HomeComponent

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'app', component: AppComponent }, // Use AppComponent for home route
  { path: 'about', component: AboutComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'journey', component: JourneyComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
