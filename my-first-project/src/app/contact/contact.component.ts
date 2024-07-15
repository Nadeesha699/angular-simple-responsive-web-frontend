import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  name = new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z'\\- ]+$")]);
  emails = new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]);
  subject = new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z'\\- ]+$")]);
  message = new FormControl('',Validators.required);

  email = "nadeesharuwandima@gmail.com";
  ftitle = "@developed by nadeesha ruwandima";

  onSubmit(myForm:NgForm) {
    
    if(this.name.valid && this.emails.valid && this.subject.valid && this.message.valid){
       alert("success")
    }

  }
}
