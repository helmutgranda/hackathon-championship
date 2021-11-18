import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyrq-header',
  templateUrl: './lyrq-header.component.html',
  styleUrls: ['./lyrq-header.component.css']
})
export class LyrqHeaderComponent implements OnInit {

  avatar: String = "/assets/user-pic.png";
  showMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.showMenu = this.showMenu ? false : true;
  }
}
