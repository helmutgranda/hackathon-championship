import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-ev-academy-charging',
  templateUrl: './ev-academy-charging.component.html',
  styleUrls: ['./ev-academy-charging.component.css']
})


export class EvAcademyChargingComponent implements OnInit {

  voted: Boolean = false;

  hasVotedMethod(val:Boolean) {
    this.voted = val;
    console.log(this.voted)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

