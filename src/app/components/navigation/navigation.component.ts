import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { AuthService } from '../../../coreauth/auth.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('nav') nav: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggle(nav: any): void {
    nav.checked = !nav.checked;
  }

}
