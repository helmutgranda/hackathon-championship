import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-experience-one',
  templateUrl: './learning-experience-one.component.html',
  styleUrls: ['./learning-experience-one.component.css']
})
export class LearningExperienceOneComponent implements OnInit {

  customFunction(){
    document.getElementById("hidden")!.style.display="block";
  }
  nextPage(){
    this.router.navigate(['/ev-result'])
  }
  previousPage(){
    this.router.navigate(['/login'])
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
