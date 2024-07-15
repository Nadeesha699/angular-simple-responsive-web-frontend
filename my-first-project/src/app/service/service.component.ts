import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NavigationComponent,ContactComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
