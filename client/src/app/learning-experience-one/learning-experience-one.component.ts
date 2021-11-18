import { Component, OnInit } from '@angular/core';

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
    window.location.href="./ev-academy-charging";
  }
  previousPage(){
    window.location.href="./login";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
