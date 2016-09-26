import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "NOOO NOOO"; 
  user:User;

  constructor() {
    this.user = new User();
    this.user.name = "BAKA";
    this.user.age = 3;
    this.user.weight = 65;
    this.user.height = 1.8;
  }

  onCheckAge() {
    if(this.user.isOld()) {
      alert("You're not entitled");
    }
    else {
      alert("You're too young");
    }
  }

  onCheckBMI() {
    alert("Your BMI: " + this.user.getBMI());
  }
}
