import {NestedTreeControl} from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { ITreeNode } from './models';
import { INavigationLink } from '../../shared/components/tree-navigation/models';
import links from '../../../assets/navigation-links.json';


const TREE_DATA: ITreeNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];



@Component({
  selector: 'tree-example',
  templateUrl: 'tree-example.component.html',
  styleUrls: ['tree-example.component.scss']
  })

export class TreeExampleComponent {

  links: INavigationLink[] = links;

  treeControl = new NestedTreeControl<INavigationLink>(node => node.children);
  dataSource = new MatTreeNestedDataSource<INavigationLink>();

  constructor() {
    this.dataSource.data = TREE_DATA;
    // console.log('--->>> ', links);


  }

  hasChild = (_: number, node: ITreeNode) => !!node.children && node.children.length > 0;

}
