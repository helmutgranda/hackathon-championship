import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ev-academy-charging',
  templateUrl: './ev-academy-charging.component.html',
  styleUrls: ['./ev-academy-charging.component.css']
})


export class EvAcademyChargingComponent implements OnInit {

  voted: Boolean = false;
  

  goNext() {
    this.router.navigate(['/ev-academy-amperage'])
  }

  hasVotedMethod(val:Boolean) {
    this.voted = val;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

