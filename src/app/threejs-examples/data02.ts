import { GraphNode, GraphResult } from "./models";

export const graphData = (function () {
    const graphData: GraphResult = {
        "nodes": [
            {
                "title": "Job 001",
                "id": 1,
                "folderName": "Folder001",
                "type": "job",
                "color": "0xff0000"
            },
            {
                "title": "Dataset 001",
                "id": 2,
                "folderName": "Folder001",
                "collaped": false,
                "type": "dataset",
                "color": "0xff0000",
                "status": "warn"
            },
            {
                "title": "Job 002",
                "id": 3,
                "folderName": "Folder001",
                "type": "job",
                "color": "0xff0000"
            },
            {
                "title": "Job 003",
                "id": 4,
                "folderName": "Folder001",
                "type": "job",
                "color": "0xff0000"
            },
            {
                "title": "Job 004",
                "id": 5,
                "folderName": "Folder002",
                "type": "job",
                "color": "0x00ff00"
            },
            {
                "title": "Dataset 002",
                "id": 6,
                "folderName": "Folder002",
                "type": "dataset",
                "color": "0x00ff00"
            },
            {
                "title": "Job 005",
                "id": 7,
                "folderName": "Folder002",
                "type": "job",
                "color": "0x00ff00"
            },
            {
                "title": "Job 006",
                "id": 8,
                "folderName": "Folder002",
                "type": "job",
                "color": "0x00ff00"
            },
            {
                "title": "Job 007",
                "id": 9,
                "folderName": "Folder003",
                "type": "job",
                "color": "0xff00ff"
            },
            {
                "title": "Dataset 003",
                "id": 10,
                "folderName": "Folder003",
                "type": "dataset",
                "color": "0xff00ff"
            },
            {
                "title": "Job 008",
                "id": 11,
                "folderName": "Folder003",
                "type": "job",
                "color": "0xff00ff"
            },
            {
                "title": "Folder001",
                "id": "folder-0",
                "type": "folder",
                "color": "pink",
                "childrenIds": [
                    '1',
                    '2',
                    '3',
                    '4'
                ]
            },
            {
                "title": "Folder002",
                "id": "folder-1",
                "type": "folder",
                "color": "cyan",
                "childrenIds": [
                    '5',
                    '6',
                    '7',
                    '8'
                ]
            },
            {
                "title": "Folder003",
                "id": "folder-2",
                "type": "folder",
                "color": "red",
                "childrenIds": [
                    '9',
                    '10',
                    '11'
                ]
            }
        ],
        "links": [
            {
                "source": 'folder-0',
                "target": 'folder-1'
            },
            {
                "source": 'folder-1',
                "target": 'folder-2'
            },
            // ------------------------
            {
                "source": "folder-0",
                "target": 1
            },
            {
                "source": "folder-0",
                "target": 2
            },
            {
                "source": "folder-0",
                "target": 3
            },
            {
                "source": "folder-0",
                "target": 4
            },
            {
                "source": "folder-1",
                "target": 5
            },
            {
                "source": "folder-1",
                "target": 6
            },
            {
                "source": "folder-1",
                "target": 7
            },
            {
                "source": "folder-1",
                "target": 8
            },
            {
                "source": "folder-2",
                "target": 9
            },
            {
                "source": "folder-2",
                "target": 10
            },
            {
                "source": "folder-2",
                "target": 11
            },
            // ------------------------
            {
                "source": 1,
                "target": 2
            },
            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 4
            },
            // ------------
            {
                "source": 3,
                "target": 6
            },
            // ------------
            {
                "source": 5,
                "target": 6
            },
            {
                "source": 6,
                "target": 7
            },
            {
                "source": 6,
                "target": 8
            },
        ]
    }
    // const folderNames = new Set(graphData.nodes.map(node => node.folderName));//.map(folder => folder);
    // const folderNodes = [...folderNames].map((folderName, i) => {
    //     const node: GraphNode = {
    //         title: folderName,
    //         id: `folder-${i}`, 
    //         type: 'folder',
    //         color: 'brown',
    //         childrenIds: []
    //     };
    //     return node
    // });
    // folderNodes.forEach(node => {
    //     const folderName = node.title;
    //     // debugger;
    //     const firtsNode = graphData.nodes.find(gnode => gnode.folderName === folderName);
    //     node.childrenIds = graphData.nodes.filter(gnode => gnode.folderName === folderName).map(gnode => gnode.id);
    //     node.color = (firtsNode[0] || { color: 'red' }).color;
    // })
    // graphData.nodes = [...graphData.nodes, ...folderNodes];
    const links = graphData.nodes.filter(node => node.type === 'folder').map(node => {
        const children = graphData.nodes.filter(gnode => gnode.folderName === node.title);//.map(gnode => gnode.id);
        const links = children.map(gnode => ({ source: node.id, target: gnode.id }));
        return links
    });

    // console.log('folderNames:', folderNames, folderNodes, '\n', graphData.nodes);
    return graphData
})()