import { Injectable } from '@angular/core';
@Injectable()
export class XSSService {
  constructor(){
    console.log('document.cookie: ', document.cookie)
  }
  cookie = document.cookie;
  posts = [
    {
      title: 'My interesting post', 
      content: `This is a post`
    }
  ];
}