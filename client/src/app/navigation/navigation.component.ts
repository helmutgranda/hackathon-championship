import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NavigationService} from "./navigation.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isExpanded = true;

  constructor(private router: Router,
              public navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  expandSideNav() {
    if(!this.isExpanded){
      this.navigationService.sidenavWidth = NavigationService.MAX_WIDTH;
      this.isExpanded = true;
    }
  }

  collapseSideNav(){
    if(this.isExpanded){
      this.navigationService.sidenavWidth = NavigationService.MIN_WIDTH;
      this.isExpanded = false;
    }
  }
  sideNavToggle(){
    if(this.isExpanded) {
      this.navigationService.sidenavWidth = NavigationService.MIN_WIDTH;
    } else {
      this.navigationService.sidenavWidth = NavigationService.MAX_WIDTH;
    }
    this.isExpanded = !this.isExpanded;
  }
}
