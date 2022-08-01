import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user = new Subject<any>();
  public isAdmin = new BehaviorSubject<boolean>(false);
  constructor(private http : HttpClient) { }


  login(data:object)
  {
    return this.http.post('http://127.0.0.1:8000/api/login',data)
  }

  register(data:object)
  {
    return this.http.post('http://127.0.0.1:8000/api/register',data)
  }

  logout()
  {
    this.user.unsubscribe()
  }

}
