import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";

import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';

import { graphData } from "./folders-example-data";
import { GraphNode, GraphResult, Link } from "./models";

@Component({
    selector: 'folders-example',
    template: `<h3>Folders example</h3><div #canvas></div>`
})
export class FoldersExampleComponent implements AfterViewInit {

    @ViewChild('canvas') canvas: ElementRef = {} as any;
    graphData: GraphResult = graphData;
    currentGraphData: GraphResult = graphData;
    boxesCounter = 0;

    ngAfterViewInit() {
        const myGraph = ForceGraph3D({
            controlType: "orbit",
        });
        
        const links = this.graphData.nodes.filter(node => node.type === 'folder').map(node => {
            const childrenIds = node.childrenIds || [];
            node.children = this.graphData.nodes.filter(inode => childrenIds.some(id => (id+'' === '' + inode.id)));// (node.childrenIds || []).map(id => )
            const children = graphData.nodes.filter(gnode => gnode.folderName === node.title);//.map(gnode => gnode.id);
            const links: Link[] = children.map(gnode => ({ source: node.id, target: gnode.id, gType: 'ghost' }));
            return links
        });

        this.graphData.links = [...this.graphData.links, ...links.reduce((acc, val) => acc.concat(val), [])];
        const leGrap = myGraph(this.canvas?.nativeElement || {});
        leGrap.graphData(this.graphData)
            .nodeThreeObject((node) => {
                let geometry;
                const triangle = this.createTriangle();
                if (node.type === 'folder') {
                    const childrenCount = (node.childrenIds || []).length || 1;
                    const dims = {
                        width: childrenCount * 30,
                        height: childrenCount * 50,
                    };
                    geometry = new THREE.BoxGeometry(dims.width/**width */, dims.height, 10);
                    node.width = dims.width;
                    node.height = dims.height;
                } else {
                    geometry = new THREE.SphereGeometry(15);
                }

                const group = new THREE.Group();
                const obj = new THREE.Mesh(
                    geometry,
                    new THREE.MeshLambertMaterial({
                        color: node.type === 'folder' ? 'blue' : 'orange',
                        opacity: 0.9
                    })
                );
                const text = new SpriteText(node.title);
                text.color = 'white';
                text.textHeight = 8;
                text['position'].set(0, -20, 20);
                group.add(text);
                group.add(obj);
                
                if (node.type === 'folder') {
                    // triangle.set(0, 0, 20);
                    group.add(triangle);
                    text.textHeight = 18;                  
                    text['position'].set(0, node.height/2 + 20, 20);
                }


                node.fz = 10;
                if (node.type === 'folder') {

                    if (!this.boxesCounter) { this.boxesCounter = node.x || 0 }
                    node.fx = this.boxesCounter;
                    this.boxesCounter += 250;
                    node.fz = 0;
                }
                // node.fz = 15;
                return group;
            })
            .onNodeDrag((node: GraphNode)=>{               
                if (node['type'] === 'folder') {
                    console.log(node.id)
                    let coords = {x: node.x - (node.width / 2) , y: node.y}
                    node.children.forEach(inode => {
                        inode.fx = coords.x;                        
                        // inode.fy = inode.y; //Math.min(inode.y, coords.y + node.height);
                        inode.fz = 20;
                        coords.x += 30;
                    });
                    node.fz = 0;
                    // const children = nodes.filter(inode => inode.folderName === node.title);
                }
            })
            // .linkColor((link) => {
            //     if(link['gType'] === 'ghost'){
            //     const color = new THREE.Color('#f44336');
            //     console.log('\nGhost link: ', link);
            //     return color.getStyle();
            //     }

            //   })
            // .nodeRelPosition((node) => ({ x: newX, y: newY, z: newZ }))
            .linkDirectionalArrowLength(3.5)
            .linkDirectionalArrowRelPos(1)
            .linkDirectionalParticles(2)
            // .linkCurvature(0.25)
            .linkWidth(3)
            .d3Force('link')
            .distance(link =>{                
                if(link['gType'] === 'ghost'){
                    link['color'] = 'green';
                    return 70;
                }
                 return 100
            });

        const nodes = this.graphData.nodes;
        
        const redraw = (nodes, time) => {
            setTimeout(()=>{
                nodes.filter(node => node.type === 'folder').forEach(node => {
                    const x = node.x;
                    const children = nodes.filter(inode => inode.folderName === node.title);
                    let coords = {x: node.x, y: node.y}
                    console.log(node.title, '  -> ', coords);
                    children.forEach(inode => {
                        const diff = inode.x - x;
                        inode.fx = coords.x;
                        coords.x += 10;
                    });
                });
            }, time);
        }
        redraw(nodes, 500);
        redraw(nodes, 2000);
        redraw(nodes, 4000);

    }

    private redrawGraph(nodes, timers: number[] = [1]){
        const redraw = (nodes, time) => {
            return new Promise((resolve, reject) =>{
                setTimeout(() => {
                    nodes.filter(node => node.type === 'folder').forEach(node => {
                        const x = node.x;
                        const children = nodes.filter(inode => inode.folderName === node.title);
                        let coords = {x: node.x, y: node.y}
                        console.log(node.title, '  -> ', coords);
                        children.forEach(inode => {
                            const diff = inode.x - x;
                            // console.log('diff: ', diff, x, inode.x, inode)
                            inode.fx = coords.x;
                            coords.x += 10;
                        });
                        console.log(node.title, '  -> ', coords);
                    });
                    resolve(true);                    
                }, time);
            })
        }

        timers.forEach(number => {
            redraw(nodes, number).then()
        })

    }

    private createTriangle() {// Create a triangle geometry
        
        // Define the vertices of the triangle
        // const vertex1 = new THREE.Vector3(0, 0, 0);
        // const vertex2 = new THREE.Vector3(1, 0, 0);
        // const vertex3 = new THREE.Vector3(0.5, 1, 0);
        // const geometry = new THREE.Triangle(vertex1, vertex2, vertex3);
        
        // // Add the vertices to the geometry
        // // geometry.vertices.push(vertex1, vertex2, vertex3);
        
        // // Define the faces of the triangle
        // // const face = new THREE.Face3(0, 1, 2);
        
        // // // Add the face to the geometry
        // // geometry.faces.push(face);
        
        // // Compute face normals and vertex normals for shading
        // // geometry.computeFaceNormals();
        // // geometry.computeVertexNormals();
        
        // // Create a mesh using the geometry
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const mesh = new THREE.Mesh(geometry, material);
        // return mesh;
        let vertices = new Float32Array([
            -1.0, -1.0, 1.0,    // vertex 1
            1.0, -1.0, 1.0,     // vertex 2
            1.0, 1.0, 1.0,      // vertex 3
        ]);
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        const material = new THREE.MeshBasicMaterial({ color: 'red' });
        const mesh = new THREE.Mesh(geometry, material);
        return mesh

    }

}