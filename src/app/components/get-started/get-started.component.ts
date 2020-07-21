import { Component } from '@angular/core';


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

  ngOnInit() {
  }
  
  onSubmit() {
    // Simply reset form for demo
    this.name = '';
    this.email = '';

    // Flip subscribed
    this.subscribed = !this.subscribed;
  }

}
