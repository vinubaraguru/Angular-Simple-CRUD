import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonService {

  constructor(private http: Http) { }

    getListOfPersons():Observable<any>{
    return Observable.create(observer=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('User-Agent', 'googlebot');
        this.http.get('https://tekdi-challenges.appspot.com/api/People',
        {
          headers: headers
        })
        .subscribe(response=>{
          let result = response.json();
          observer.next(result);
          observer.complete();
          }, (error: any) => {
            observer.error(error);
          })
    })
  }

  createNewPerson(formData):Observable<any>{
    return Observable.create(observer=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('User-Agent', 'googlebot');
      let body = {
        name: formData.name,
        email: formData.email,
        dob: formData.dob,
        country: formData.country,
        avatar: formData.avatarUrl
      }
        this.http.post('https://tekdi-challenges.appspot.com/api/People',body,
        {
          headers: headers
        })
        .subscribe(response=>{
          let result = response.json();
          observer.next(result);
          observer.complete();
          }, (error: any) => {
            observer.error(error);
          })
    })
  }

  getPerson(id): Observable<any> {
    return Observable.create(observer => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('User-Agent', 'googlebot');
      this.http.get('https://tekdi-challenges.appspot.com/api/People/'+id,
        {
          headers: headers
        })
        .subscribe(response => {
          let result = response.json();
          observer.next(result);
          observer.complete();
        }, (error: any) => {
          observer.error(error);
        })
    })
  }

  updatePerson(formData,id):Observable<any>{
    return Observable.create(observer => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('User-Agent', 'googlebot');
      let body = {
        name: formData.name,
        email: formData.email,
        dob: formData.dob,
        country: formData.country,
        avatar: formData.avatarUrl
      }
      this.http.patch('https://tekdi-challenges.appspot.com/api/People/' +id, body,
        {
          headers: headers
        })
        .subscribe(response => {
          let result = response.json();
          observer.next(result);
          observer.complete();
        }, (error: any) => {
          observer.error(error);
        })
    })
  }
}
