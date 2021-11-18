import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private user: User | undefined;

  constructor(private http: HttpClient) { 
    this.http.get<User>("http://localhost:8080/user/1").subscribe((data : User) => this.user = {
      id : data.id,
      first_name : data.first_name,
      last_name : data.last_name,
      email: data.email,
      job_title: data.job_title,
      avatar : data.avatar,
      department : data.department,
      city: data.city,
      badges: data.badges,
      experience : data.experience,
      correct_answers : data.correct_answers,
      incorrect_answers : data.incorrect_answers,
      percent_completed : data.percent_completed,
      dealership : data.dealership,
      state: data.state,
      satisfied : data.satisfied
    },
    ((error : any) => console.log(error)),
    (() => console.log(this.user)));
  }

  getUser(){
    return this.user;
  }
}
