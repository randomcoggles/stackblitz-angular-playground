import { Component, AfterViewInit } from '@angular/core';
import { XSSService } from './xss.service';


@Component({
  selector: 'xss-posts-component',
  template: `
    <h1>XSS Posts Works!</h1>

    <ul id="posts2">
      <li *ngFor="let post of xSSService.posts">
      {{post.title}}

      <div>{{post.content}}</div>
      </li>
    </ul>

    <ul id="posts">
      <li *ngFor="let post of xSSService.posts">
      {{post.title}}

      <div>{{post.title}}</div>
      </li>
    </ul>

  `,
  styles: [

    `#posts{padding: 1em; box-shadow: 1px 1px 10px}`
    
  ]
})
export class XSSPostsComponent implements AfterViewInit {

  constructor(public readonly  xSSService: XSSService) {

    console.log('...document.cookie: ', document.cookie);
  }

  ngAfterViewInit() {
    const postHTML = this.xSSService.posts.map(post => {
      const li = `<li>
      <h3>${post.title}</h3>
      <div>${post.content}</div>
      </li>`;
      return li
    }).join('');
    console.log(postHTML)
    document.getElementById('posts').innerHTML = postHTML;
  }


}
