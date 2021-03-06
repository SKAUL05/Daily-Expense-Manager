import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  transact: any;

  constructor(private http:Http) { }

  registerUser(user){
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/users/register', user, {headers: headers})
    .map(res =>res.json());
  }

  registerTransact(transact) {
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/users/transact', transact, {headers: headers})
      .map(res =>res.json());
  }
  registerAccount(account) {
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/users/account', account, {headers: headers})
      .map(res =>res.json());
  }
  authenticateUser(user){
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/users/authenticate', user, {headers: headers})
    .map(res =>res.json());
  }

  getProfile(){
    let headers =new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('/users/profile', {headers: headers})
    .map(res =>res.json());
  }
  getTransactions(){
    let headers =new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('/users/transact1', {headers: headers})
      .map(res =>res.json());
  }
  getAccounts(){
    let headers =new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('/users/account1', {headers: headers})
      .map(res =>res.json());
  }
  deleteTransact(id) {
    return this.http.delete('/users/transact/' + id)
      .map(res => res.json());
  }
  deleteAccountss(id) {
    return this.http.delete('/users/account/' + id)
      .map(res => res.json());
  }
  editTransact(id) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('/users/transact/' + id)
      .map(res => res.json());
  }
  update(id, upDatedContact) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    console.log('in update' + id);
    return this.http.put('/users/transact/' + id, upDatedContact, headers).map(res => res.json());
  }


  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  loadToken()
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
   return tokenNotExpired('id_token');
 }


  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
