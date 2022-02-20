import { Component, OnInit } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import { User } from '../app/models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular-test00';
  users: User[] = [];
  name: any;
  p:number=1;

  constructor(private userData: UsersDataService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userData.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.users = this.users.filter((res: { name: string }) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
  key:string="id";
  reverse:boolean=false;

  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }
}
