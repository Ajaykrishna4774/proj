import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8082/user/Userportal/';

  constructor(private http: HttpClient) {
    this.http = http;
  }
  getAllUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'getAllUsers');
  }


  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'saveUser', user);
  }

  deleteUser(username: String): Observable<object> {
    return this.http.delete<User>(this.baseUrl + 'deleteUser/' + username);
  }

  find(username: String): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'findOneInAll6/' + username);
  }

  updateUser(username: String): Observable<object> {
    return this.http.put(this.baseUrl + 'updateUser/{username}', username);
  }
  findByUsernameAndPassword(username: String, password: String): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'findByUsernameAndPassword/' + username + '/' + password);

  }

  uploadFile(file: File, username: String): Observable<any> {

    let url = this.baseUrl + "uploadImage/" + username;



    const formdata: FormData = new FormData();



    formdata.append('file', file);



    return this.http.post(url, formdata);

  }

}
