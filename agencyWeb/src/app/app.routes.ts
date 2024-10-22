import {provideRouter, RouterModule, Routes, withDebugTracing} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {ServicesComponent} from './components/services/services.component';
import {BlogComponent} from './components/blog/blog.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
];


