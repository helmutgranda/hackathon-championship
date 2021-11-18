import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  public userProfileName: string;
  public userRole: string;
  public userAddress: string;
  public userPhoneNumber: string;
  public userEmail: string;
  public userUsername: string;

  constructor() {
    //
    // this.getUserInformation().subscribe(user => {
    //
    // })

    this.userProfileName = "Emily Smith";
    this.userRole = "Dealer - Sales";
    this.userAddress = "XYZ Cadillac, 1224 Main Street, Austin TX 78890";
    this.userPhoneNumber = "(512) 788-1212";
    this.userEmail = "emily.smith@xyz.com";
    this.userUsername = "Anna.smith@gm.com";
  }

  ngOnInit(): void {
  }


  openProfileEditor(){
    console.log("Open edit profile clicked")
  }

  openEditInfoEditor(){

  }

}
