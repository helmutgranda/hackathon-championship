import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-experience-one',
  templateUrl: './learning-experience-one.component.html',
  styleUrls: ['./learning-experience-one.component.css']
})
export class LearningExperienceOneComponent implements OnInit {

  customfunction() {
    console.log("called");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
