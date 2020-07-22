import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {

  constructor() { }

  name: '';
  email: '';
  subscribed: boolean = false;

  onSubmit(form: NgForm) {

    if (form.valid) {

      // Simply reset form for demo
      this.name = '';
      this.email = '';

      // Flip subscribed
      this.subscribed = !this.subscribed;

      // Don't actually subscribe for the demo
      console.log("Don't worry, this is only a demo, you're not subscribed to anything.");
    } 

    console.log('Form values: ', form.value);
  }

}
