import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/observable';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/internal/Observable';
//import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';

//definimmos las cabeceras de las peticiones
const cudOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private usersUrl: string = '/api/users';

  constructor(private http: HttpClient) {}

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(users => console.log('getUsers')),
      catchError(this.handleError)
    );
  }

  getUser (id: string | number) : Observable<User> {
    const url = `${this.usersUrl}/${id}`; //Las comillas inversas permiten interpolar variables La / permite concatenar
    return this.http.get<User>(url).pipe(
     tap(users => console.log(`getUsers`)),
     catchError(this.handleError)
    ); 
  }


  addUser (user:User) : Observable<User>{
    const newUser = Object.assign({}, user);
    const id = typeof user === 'number' ?  user : user.id;
    const url = `${this.usersUrl}/${id}`;
    return this.http.post<User>(this.usersUrl, newUser, cudOptions).pipe(
      tap(users => console.log(`getUsers`)),
      catchError(this.handleError)
    );
  }

  updateUser (user:User): Observable<User>{
    return this.http.put(this.usersUrl, user, cudOptions).pipe(
      tap(users => console.log(`getUsers`)),
      catchError(this.handleError)
    );
  }

  deleteUser (user:User | number) : Observable<User>{
    const newUser = Object.assign({}, user);
    return this.http.post<User>(this.usersUrl, newUser,cudOptions).pipe(
      tap(users => console.log(`getUsers`)),
      catchError(this.handleError)
    );
  }



  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}


