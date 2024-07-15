import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent,ContactComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
