import { Component } from '@angular/core';
import { User } from './user';

const userList = [
  new User("Jack 1", 25, "CC", 15, 120),
  new User("Jack 2", 35, "CC", 25, 110),
  new User("Jack 3", 45, "CC", 35, 100),
  new User("Jack 4", 55, "CC", 45, 90),
  new User("Jack 5", 65, "CC", 55, 80)
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = "NOOO NOOO"; 
  selectedUser:User;
  users:Array<User>;

  constructor() {
    this.selectedUser = userList[0];
    this.users = userList;
  }

  onCheckAge() {
    if(this.selectedUser.isOld()) {
      alert("You're not entitled");
    }
    else {
      alert("You're too young");
    }
  }

  onCheckBMI() {
    alert("Your BMI: " + this.selectedUser.getBMI());
  }

  onDeleteUser(index:number) {
    this.users.splice(index, 1);
  }

  onAddUser() {
    let newUser:any = {};
    newUser.name = prompt("name");
    newUser.password = prompt("password");
    newUser.age = prompt("age");
    newUser.weight = prompt("weight");
    newUser.height = prompt("height");
    
    this.users.push(new User(
      newUser.name,
      newUser.age,
      newUser.password,
      newUser.height,
      newUser.weight
    ));
  }
}
