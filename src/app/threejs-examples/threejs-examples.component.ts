import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';

import { GraphResult } from "./models";
import { graphData } from './data02';

@Component({
  selector: 'threejs-examples',
  templateUrl: 'threejs-examples.component.html'
})
export class ThreejsExamplesComponent implements AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef = {} as any;
  graphData: GraphResult = graphData;
  currentGraphData: GraphResult = graphData;
  ngAfterViewInit() {
    const geometries = [
      new THREE.BoxGeometry(Math.random() * 20, Math.random() * 20, Math.random() * 20),
      new THREE.ConeGeometry(Math.random() * 10, Math.random() * 20),
      new THREE.CylinderGeometry(Math.random() * 10, Math.random() * 10, Math.random() * 20),
      new THREE.DodecahedronGeometry(Math.random() * 10),
      new THREE.SphereGeometry(Math.random() * 10),
      new THREE.TorusGeometry(Math.random() * 10, Math.random() * 2),
      new THREE.TorusKnotGeometry(Math.random() * 10, Math.random() * 2),
      new THREE.CapsuleGeometry(Math.random() * 10, Math.random() * 5, Math.random() * 50)
    ];

    const newGeometries = {
      folder: new THREE.BoxGeometry(15, 15, 3),
      dataset: new THREE.CylinderGeometry( 10, 5, 10),
      job: new THREE.SphereGeometry(5)
    }
    const rootId = 1;
    // this.graphData.nodes = this.graphData.nodes.map((node, i) => ({ ...node, collapsed: i !== rootId, childLinks: [] }));
    
    // link parent/children
    const nodesById = Object['fromEntries'](this.graphData.nodes.map(node => [node.id, node]));
    // this.graphData.links.forEach(link => {
    //   const node = nodesById[link.source] || {childLinks: []}
    //   node.childLinks.push(link);
    // });
    console.log('\n\nthis.graphData.links: ', this.graphData.links, '\n\n\n');

    const getPrunedTree = () => {
      const visibleNodes = [];
      const visibleLinks = [];

      (function traverseTree(node = nodesById[rootId]) {
        const isAlreadyVisible = visibleNodes.some(inode => inode.id === node.id);
        if(!isAlreadyVisible) {
            visibleNodes.push(node);
        }
        if (node.collapsed) return;
        visibleLinks.push(...node.childLinks);
        const children = node.childLinks
          .map(link => ((typeof link.target) === 'object') ? link.target : nodesById[link.target]) // get child node
          .filter(node => !visibleNodes.some(inode => inode.id === node.id))
          children.forEach(traverseTree);
      })(); // IIFE

      return { nodes: visibleNodes, links: visibleLinks };
    };
    const colors = [
      0xff0000, // Red
      0x00ff00, // Green
      0x0000ff, // Blue
      0xff00ff, // Magenta
      0xffff00, // Yellow
      0x00ffff, // Cyan
      0xff8800, // Orange
      0x8800ff, // Purple
      0x0088ff, // Light Blue
      0xff0088, // Pink
      0x00ff88, // Light Green
      0x888888, // Gray
      0xff7f00, // Dark Orange
      0x7f00ff, // Violet
      0x00ff7f, // Spring Green
      0xff00aa, // Fuchsia
      0x00aa00, // Dark Green
      0x00aa88, // Teal
      0xaa0088, // Dark Purple
      0x880088  // Dark Magenta
    ];

    
    const myGraph = ForceGraph3D({
      controlType: "orbit",
    });
    const leGrap = myGraph(this.canvas?.nativeElement || {});
      // .linkWidth(5)
      // const tree = getPrunedTree();
      // console.log('Tree:\t', tree);
      leGrap.graphData(this.graphData)
      .linkDirectionalParticles(15)
      // .nodeColor((node: any) => { 
      //   return !node.childLinks?.length ? 'green' : node.collapsed ? 'red' : 'yellow';
      // })
      // .onNodeHover((node: any) =>{ return this.canvas?.nativeElement.style.cursor = node && node.childLinks.length ? 'pointer' : null; })
      .onNodeClick((node: any) => {

        if (node.type === 'folder') {
          const folder = node;
          let newGraph;
          let nodes, links;
          const childrenIds = folder.childrenIds || [];
          if(node.collapsed){
            // nodes = 
            nodes = this.currentGraphData.nodes.filter(inode => !childrenIds.some(id => (''+id) === (''+inode.id)));
            nodes.forEach(inode => (inode.show = true));
            
            //.forEach(inode => (node.show = true));
            this.currentGraphData.links.filter(link => {  
              if(link.target['type'] === 'folder' || link.source['type'] === 'folder') { return; }  
              return !((''+link.source['id']) === (''+folder.id))
            }).forEach(ilink => (ilink.show = true));            

          } else {
            
            nodes = this.graphData.nodes.filter(inode => childrenIds.some(id => (''+id) === (''+inode.id)));
            nodes = [...nodes, ...this.currentGraphData.nodes];
            nodes.forEach(inode => (inode.show = false));

            console.log('Before: ', this.currentGraphData.links);
            links = this.currentGraphData.links.filter(link => {  
              if(link.target['type'] === 'folder' && link.source['type'] === 'folder') { return; }
              return !childrenIds.some(id => (''+id) === link.target['id'])
              // return !((''+link.source['id']) === (''+node.id))
            });
            links.forEach(ilink => (ilink.show = false));
            console.log('After: ', links);

            // nodes = this.currentGraphData.nodes.filter(inode => !(node.childrenIds || []).some(id => (''+id) === (''+inode.id)));
            // links = this.currentGraphData.links.filter(link => {  
            //   if(link.target['type'] === 'folder' && link.source['type'] === 'folder') { return; }  
            //   return !((''+link.source['id']) === (''+node.id))
            // });


          }
          node.collapsed = !node.collapsed; // toggle collapse state
          
          newGraph = {
            nodes: this.currentGraphData.nodes.filter(inode => inode.show === false),
            links: this.currentGraphData.links.filter(ilink => ilink.show === false),
          }
          this.currentGraphData = newGraph;
          
          debugger;
          leGrap.graphData(newGraph)
          .nodeThreeObject((node) => {
            const { id } = node;        
            const group = new THREE.Group();
            const obj = new THREE.Mesh(
              newGeometries[node.type] || newGeometries.job,
              new THREE.MeshLambertMaterial({
                color: node.type === 'folder' ? 'blue' : 'orange', //node.color || Math.round(Math.random() * Math.pow(2, 24)),
                transparent: true,
                opacity: 0.9
              })
            );
            const text = new SpriteText(node.title);
            // sprite.material.depthWrite = false; // make sprite background transparent
            text.color = 'white';
            text.textHeight = 8;
            text['position'].set(0, 0, 20);
            group.add(text);
            group.add(obj);
            return group;
          });
        }
      })
      .nodeThreeObject((node) => {
        if(node.show === false){ 
          debugger;
          return null;
          
        }
        const { id } = node;        
        const group = new THREE.Group();
        const obj = new THREE.Mesh(
          newGeometries[node.type] || newGeometries.job,
          new THREE.MeshLambertMaterial({
            color: node.type === 'folder' ? 'blue' : 'orange',
            transparent: true,
            opacity: 0.9
          })
        );
        const text = new SpriteText(node.title);
        // sprite.material.depthWrite = false; // make sprite background transparent
        text.color = 'white';
        text.textHeight = 8;
        text['position'].set(0, 0, 20);
        group.add(text);
        group.add(obj);
        return group;
      })
      
      // .linkThreeObject(link => {
      //   // 2 (nodes) x 3 (r+g+b) bytes between [0, 1]
      //   // For example:
      //   // new Float32Array([
      //   //   1, 0, 0,  // source node: red
      //   //   0, 1, 0   // target node: green
      //   // ]);
      //   // const colors = new Float32Array([].concat(
      //   //   ...[link.source, link.target]
      //   //     .map(nodeColorScale)
      //   //     .map(d3.color)
      //   //     .map(({ r, g, b }) => [r, g, b].map(v => v / 255)
      //   //   )));

      //   const material = new THREE.LineBasicMaterial({ vertexColors: true });
      //   const geometry = new THREE.BufferGeometry();
      //   geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(2 * 3), 3));
      //   geometry.setAttribute('color', 
      //     // new THREE.BufferAttribute(colors, 3)
      //     'violet'
      //   );

      //   return new THREE.Line(geometry, material);
      // })
      // .graphData(this.graphData)
      .linkDirectionalParticles(2)
      .d3Force('link')
      .distance(link => 100);
  }

}