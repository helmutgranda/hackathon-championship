import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent implements OnInit {

  name: String = "Emily";
  avatar: String = "/assets/user-pic.png";

  constructor(private accountService : AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getUserFresh().subscribe((data : User) => {
      this.name = data.first_name;
      this.avatar = data.avatar;
    });
  }

}
