export class User {
    id : Number;
    first_name : String;
    last_name: String;
    email: String;
    job_title: String;
    avatar: String;
    department: String;
    city: String;
    badges: String[];
    experience: Number;
    correct_answers: Number;
    incorrect_answers: Number;
    percent_completed: Number;
    dealership: String;
    state: String;
    satisfied: Boolean;

    constructor(id : Number,first_name : String,last_name: String,email: String,job_title: String,avatar: String,department: String,city: String,badges: String[],experience: Number,correct_answers: Number,incorrect_answers: Number,percent_completed: Number,dealership: String,state: String,satisfied: Boolean){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.job_title = job_title;
        this.avatar = avatar;
        this.department = department;
        this.city = city;
        this.badges = badges;
        this.experience = experience;
        this.correct_answers = correct_answers;
        this.incorrect_answers = incorrect_answers;
        this.percent_completed = percent_completed;
        this.dealership = dealership;
        this.state = state;
        this.satisfied = satisfied;
    }
}
