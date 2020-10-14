import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-active',
  templateUrl: './header-active.component.html',
  styleUrls: ['./header-active.component.css']
})
export class HeaderActiveComponent implements OnInit {
  navbarOpen = false; 

  toggleNavbar () { 
    this.navbarOpen =! this.navbarOpen; 
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
