import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evacademy-header',
  templateUrl: './evacademy-header.component.html',
  styleUrls: ['./evacademy-header.component.css']
})
export class EvacademyHeaderComponent implements OnInit {

  avatar: String = "/assets/user-pic.png";

  constructor() { }

  ngOnInit(): void {
  }

}
