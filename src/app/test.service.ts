import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestService {
   private subject =new Subject<any>();

  setMessage(){
    this.subject.next();
  }
  getMessage():Observable<any>{
    return this.subject.asObservable();
  }
}
