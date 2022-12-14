import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpenseEntryService {

  constructor(private http : HttpClient) { }


  add(data:any){
    return this.http.post('http://127.0.0.1:8000/api/add',data);
  }
  list(data:any){
    return this.http.post('http://127.0.0.1:8000/api/list',data).pipe( retry(3));
  }

  get(id:number){
    return this.http.get('http://127.0.0.1:8000/api/get/'+id);
  }
  update(data:any){
    return this.http.post('http://127.0.0.1:8000/api/update',data);
  }
  delete(id:any){
    return this.http.get('http://127.0.0.1:8000/api/delete/'+id);
  }
  categoryAdd(data:any){
    return this.http.post('http://127.0.0.1:8000/api/category/add',data);
  }
  categoryList(id:number){
    return this.http.get('http://127.0.0.1:8000/api/category/'+id);
  }
}
