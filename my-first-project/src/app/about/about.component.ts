import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavigationComponent,ContactComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
