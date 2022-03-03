import { Component, Input, SimpleChanges } from '@angular/core';
import { INavigationLink } from './models';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'tree-navigation',
  templateUrl: 'tree-navigation.component.html',
  styleUrls: ['tree-navigation.component.scss']
})
export class TreeNavigationComponent {

  @Input() links: INavigationLink[];

  treeControl = new NestedTreeControl<INavigationLink>(node => node.children);
  dataSource = new MatTreeNestedDataSource<INavigationLink>();

  constructor() { 
    this.dataSource.data = this.links;
   }

  hasChild = (_: number, node: INavigationLink) => !!node.children && node.children.length > 0;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.links.currentValue, this.dataSource.data);
    this.dataSource.data = changes.links?.currentValue ? changes.links.currentValue : this.dataSource.data;
}
}