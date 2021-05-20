import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor() {

    this.isLoggedIn = !!(localStorage.getItem('Employee'));

  }

  success: any;


  ngOnInit(): void {

    this.success = localStorage.getItem('Employee');
  }

}
