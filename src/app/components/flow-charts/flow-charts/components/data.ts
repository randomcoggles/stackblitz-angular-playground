import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';
// https://www.startechup.com/blog/5-steps-of-software-development
// TODO: Create a real node
export const simpleNodes = [
    {
        id: '00',
        label: 'SOFTWARE DEVELOPEMENT CYCLE',
    children: [{
        id: '01',
        label: '1. Planning and requirements gathering',
        "meta": {
            "parent": "00",
            subtitle: 'Requirements Gathering/Analysis',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        },
        children: [
            {
                id: '01.01',
                label: '1. Aspect de planification 001',
                "meta": {
                    "parent": "01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    linkLabel: 'Aller à l\'idée principale'
                }
            }, {
                id: '01.02',
                label: '2. Aspect de planification 001',
                "meta": {
                    "parent": "01",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    linkLabel: 'Aller à l\'idée principale'
                }
            }
        ]

    }, {
        id: '02',
        label: '2. Conception',
        "meta": {
            "parent": "00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        },
        children: [
            {
                id: '02.01',
                label: '1. Aspect de Conception 01',
                "meta": {
                    "parent": "02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    linkLabel: 'Aller à Conception'
                }
            }, {
                id: '02.02',
                label: '2. Aspect de Conception 02',
                "meta": {
                    "parent": "02",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    linkLabel: 'Aller à Conception'
                }
            }
        ]
    }, 
    {
        id: '03',
        label: '3. Développer',
        "meta": {
            "parent": "00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        },
        children: [{
            id: '03.01',
            label: '1. Aspect de Développer 01',
            "meta": {
                "parent": "03",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                linkLabel: 'Aller à Développer'
            }
        }, {
            id: '03.02',
            label: '1. Aspect de Développer 02',
            "meta": {
                "parent": "03",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                linkLabel: 'Aller à Développer'
            }
        }]
    }, {
        id: '04',
        label: '4. Essais et assurance de la qualité',
        "meta": {
            "parent": "00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        }
    }, {
        id: '05',
        label: '5. Déploiement',
        "meta": {
            "parent": "00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        }
    }]
}]
;
export const nodes: Node[] = [
    {
        id: '00',
        label: 'SOFTWARE DEVELOPEMENT CYCLE'
    }, {
        id: '01',
        label: '1. Planning and requirements gathering',
        "meta": {
            "parent": "00",
            subtitle: 'Requirements Gathering/Analysis',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        }
    }, {
        id: '01.01',
        label: '1. Aspect de planification 001',
        "meta": {
            "parent": "01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        }
    }, {
        id: '01.02',
        label: '2. Aspect de planification 002',
        "meta": {
            "parent": "01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        }
    }, {
        id: '02',
        label: '2. Conception',
        "meta": {
            "parent": "00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        }
    }, {
        id: '02.01',
        label: '1. Aspect de Conception 01',
        "meta": {
            "parent": "02",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à Conception'
        }
    }, {
        id: '02.02',
        label: '2. Aspect de Conception 02',
        "meta": {
            "parent": "02",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à Conception'
        }
    }, {
        id: '03',
        label: '3. Développer',
        "meta": {
            "parent": "00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        }
    }, {
        id: '03.01',
        label: '1. Aspect de Développer 01',
        "meta": {
            "parent": "03",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à Développer'
        }
    }, {
        id: '03.02',
        label: '2. Aspect de Développer 02',
        "meta": {
            "parent": "03",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à Développer'
        }
    }, {
        id: '04',
        label: '4. Essais et assurance de la qualité',
        "meta": {
            "parent": "00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        }
    }, {
        id: '05',
        label: '5. Déploiement',
        "meta": {
            "parent": "00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            linkLabel: 'Aller à l\'idée principale'
        }
    }
];

export const clusters: ClusterNode[] = [
    {
        id: 'third',
        label: 'C',
        childNodeIds: ['c1', 'c2']
    }
]

export const links: Edge[] = nodes.filter(node => node.meta?.parent).map((node, index) => {
    const link = {
        id: `link-${index}`,
        source: node.meta.parent,
        target: node.id,
        label: node.meta.linkLabel || ''
    };
    return link;
})
// debugger;
console.log('Links: ', links);

