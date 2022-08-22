import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-load-iframe',
  templateUrl: './load-iframe.component.html',
  styleUrls: ['./load-iframe.component.scss']
})
export class LoadIframeComponent implements OnInit {
  urlSafe: SafeResourceUrl;
  // 'http://localhost:4200/sources/preview/dcf80554821d6a9101c6c5b69252d75e'
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:4200/sources/preview/dcf80554821d6a9101c6c5b69252d75e');
  }

}
