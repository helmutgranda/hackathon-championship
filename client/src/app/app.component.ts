import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NavigationComponent} from "./navigation/navigation.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import { Router, NavigationEnd } from '@angular/router';
import { AccountService } from './account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'client';

  @ViewChild(NavigationComponent, {static:false})
  private navComponent!: NavigationComponent;
  public url: any;

  constructor(private observer: BreakpointObserver, private router: Router, private accountService: AccountService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    })

  ngAfterViewInit(){
    // this.observer.observe([Breakpoints.XSmall, Breakpoints.Medium]).subscribe((res) => {
    //   if(res.breakpoints[Breakpoints.XSmall]){
    //     this.navComponent.collapseSideNav();
    //   } else if (res.breakpoints[Breakpoints.Medium]) {
    //     this.navComponent.expandSideNav();
    //   }
    // });
  }


  sideNavToggle(event: any) {
    // this.navComponent.sideNavToggle();

  }



}

