import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  


  constructor() {
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.designation = "Software Engineer";
    this.user.address = "1000 ST City State";
    this.user.phone = ['123-123-123','456-456-456'];
  }



}
