import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Posts } from "../classes/Posts";
@Injectable()
export class freeApiService{
  
    constructor(private http:HttpClient){}


    getcomments(): Observable<any>{
     return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    }

    getcommentsbyparameter(): Observable<any>{
       let params1 = new HttpParams().set('userId',"1");
       return this.http.get("https://jsonplaceholder.typicode.com/posts",{params:params1})
    }

    post(opost:Posts):Observable<any>{
        return this.http.post("https://jsonplaceholder.typicode.com/posts", opost);
    }
}