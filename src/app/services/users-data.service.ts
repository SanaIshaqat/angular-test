import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User}from "../models/users";


@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  url = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<User[]>(this.url);
  }
}
