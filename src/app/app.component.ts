import { Component, OnInit } from '@angular/core';
import { freeApiService } from './services/freeapi-service';
import { Comments } from './classes/comments';
import { Posts } from './classes/Posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'getpostapi';
listcomments: Comments[] = [];
listpost: Posts[] = [];
objPosts: Posts|any;
  constructor(private freeApi:freeApiService){}


  ngOnInit(): void {
    this.freeApi.getcomments()
    .toPromise()
    .then((data:any) =>{
      if(data){
        this.listcomments = data;
      }
    })

    this.freeApi.getcommentsbyparameter()
    .toPromise()
    .then((data:any) =>{
      if(data){
        this.listpost = data;
      }
    })


    let opost = new Posts();

    opost.body = 'testbody';
    opost.title = 'testtitle';
    opost.userId = 5;
     
    this.freeApi.post(opost)
    .toPromise()
    .then((data:any) =>{
      if(data){
        this.objPosts = data;
      }
    })
  }


}
