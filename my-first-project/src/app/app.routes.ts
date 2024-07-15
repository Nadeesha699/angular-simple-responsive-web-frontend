
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PageNotFoundsComponent } from './page-not-founds/page-not-founds.component';

export const routes: Routes = [
  { "path": 'home', component: HomeComponent, title: "Home" },
  { "path": '', redirectTo: '/home', title: "Home", pathMatch: "full" },
  { "path": 'about', component: AboutComponent, title: "About" },
  { path: 'service', component: ServiceComponent, title: "Service" },
  { path: '**', component: PageNotFoundsComponent, title: "Not Found" }
];

export class AppRoutingModule { }

// ng generate component PageNotFounds --skip-tests










