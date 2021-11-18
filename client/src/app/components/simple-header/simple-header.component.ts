import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrls: ['./simple-header.component.css']
})
export class SimpleHeaderComponent implements OnInit {

  avatar: String = "/assets/user-pic.png";
  showMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.showMenu = this.showMenu ? false : true;
  }
}
