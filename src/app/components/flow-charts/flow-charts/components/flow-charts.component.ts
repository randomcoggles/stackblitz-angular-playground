import { Component } from '@angular/core';
import * as shape from 'd3-shape';
import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';
import { nodes, clusters, links } from './data';
import { Subject } from 'rxjs';

@Component({
  selector: 'flow-charts',
  templateUrl: 'flow-charts.component.html',
  styleUrls: ['flow-charts.component.scss']
})
export class FlowChartsComponent {

  name = 'NGX-Graph Demo';

  nodes: Node[] = nodes;//.reverse();
  clusters: ClusterNode[] = clusters;

  links: Edge[] = links;
  // layout="dagre"
  layout: string | Layout = 'dagre';//'dagreCluster';

  layoutSettings = {
    marginX: 20,
    marginY: 20,
    edgePadding: 50,
    rankPadding: 100,
    ranker: 'network-simplex',
    nodePadding: 50,
    multigraph: true,
    compound: true,
    orientation: 'TB'
  };

  layouts: any[] = [
    {
      label: 'Dagre',
      value: 'dagre',
    },
    {
      label: 'Dagre Cluster',
      value: 'dagreCluster',
      isClustered: true,
    },
    {
      label: 'Cola Force Directed',
      value: 'colaForceDirected',
      isClustered: true,
    },
    {
      label: 'D3 Force Directed',
      value: 'd3ForceDirected',
    },
  ];


  // line interpolation
  curveType: string = 'Bundle';
  curve: any = shape.curveLinear;
  interpolationTypes = [
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before'
  ];

  draggingEnabled: boolean = true;
  panningEnabled: boolean = true;
  zoomEnabled: boolean = true;

  zoomSpeed: number = 0.1;
  minZoomLevel: number = 0.1;
  maxZoomLevel: number = 4.0;
  panOnZoom: boolean = true;

  autoZoom: boolean = false;
  autoCenter: boolean = false;

  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();
  isAddingNewNode = false;

  ngOnInit() {
    this.setInterpolationType(this.curveType);
  }

  setInterpolationType(curveType) {
    this.curveType = curveType;
    if (curveType === 'Bundle') {
      this.curve = shape.curveBundle.beta(1);
    }
    if (curveType === 'Cardinal') {
      this.curve = shape.curveCardinal;
    }
    if (curveType === 'Catmull Rom') {
      this.curve = shape.curveCatmullRom;
    }
    if (curveType === 'Linear') {
      this.curve = shape.curveLinear;
    }
    if (curveType === 'Monotone X') {
      this.curve = shape.curveMonotoneX;
    }
    if (curveType === 'Monotone Y') {
      this.curve = shape.curveMonotoneY;
    }
    if (curveType === 'Natural') {
      this.curve = shape.curveNatural;
    }
    if (curveType === 'Step') {
      this.curve = shape.curveStep;
    }
    if (curveType === 'Step After') {
      this.curve = shape.curveStepAfter;
    }
    if (curveType === 'Step Before') {
      this.curve = shape.curveStepBefore;
    }
  }

  setLayout(layoutName: string): void {
    const layout = this.layouts.find(l => l.value === layoutName);
    this.layout = layoutName;
    if (!layout.isClustered) {
      this.clusters = undefined;
    } else {
      this.clusters = clusters;
    }
  }

  nodeClicked($event, node?) {
  }

  addNode($event, node?) {
    this.isAddingNewNode = true;
    const parentNode = this.nodes.find(currentNode => currentNode.id === node?.id);
    if (!parentNode) { return; }

    const newNode = {
      "id": '' + (this.nodes.length + 1),
      "label": "New Element",
      "meta": {
        "parent": parentNode.id,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "linkLabel": "Aller à l'idée principale",
        "forceDimensions": false
      },
    };

    node.children = node.children || [];
    node.children.push(newNode);
    this.nodes.push(newNode);

    const newLink = {
      id: `link-${this.nodes.length + 1}`,
      source: parentNode.id,
      target: newNode.id,
      label: newNode.meta.linkLabel || ''
    };
    this.links.push(newLink)

    // this.links = this.nodes.filter(node => node.meta?.parent).map((node, index) => {
    //   return {
    //     id: `link-${index}`,
    //     source: node.meta.parent,
    //     target: node.id,
    //     label: node.meta.linkLabel || ''
    //   };
    // })
    this.update$.next(true);

  }

  removeChildren(node) {
    if(node.children?.length){
      node.children.forEach(cnode => {this.removeNode(null, cnode)});
    }
  }

  findChildren(node){
    const children = this.nodes.filter(node => node.meta?.parent === node.id).map(cnode => {
      return this.findChildren(cnode).flat(Infinity)
    });
    console.log('children: ', children);
    return children.flat(Infinity);
  }

  removeNode($event, node?) {    
    const nodeIndex = this.nodes.findIndex(currentNode => currentNode.id === node?.id);
    const nodeExists = nodeIndex >= 0;
    if (!nodeExists) { return; }
    // const findChildren = node => {
    //   const children = this.nodes.filter(node => node.meta?.parent === node.id).map(cnode => {
    //     return findChildren(cnode).flat(Infinity)
    //   });
    //   return children.flat(Infinity);
    // }
    this.removeChildren(node);
    
    this.nodes.splice(nodeIndex, 1);

    // (node.children || []).forEach(node => )
    // this.findChildren(node).forEach(inode => this.removeNode(inode));
    // if (nodeIndex >= 0) {
    //   this.nodes.splice(nodeIndex, 1);
    // }

    const source = node.meta.parent;
    const target = node.id;
    const linkIndex = this.links.findIndex(currentLink => currentLink.source === source && currentLink.target == target);

    if (linkIndex >= 0) {
      this.links.splice(linkIndex, 1);
    }

    this.update$.next(true);
  }
}