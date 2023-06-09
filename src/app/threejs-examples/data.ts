
const N = 300;
const gData = {
  nodes: [...Array(N).keys()].map(i => ({ id: i })),
  links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id - 1))
    }))
};
const reserve = [
    {
        "title": "Job 001",
        "id": 1,
        "folderName": "Folder001",
        "type": 'job',
        "color": "0xff0000"
    },
    {
        "title": "Dataset 001",
        "id": 2,
        "folderName": "Folder001",
        collaped: false,
        "type": 'dataset',
        "color": "0xff0000",
        status: 'warn'
    },
    {
        "title": "Job 002",
        "id": 3,
        "folderName": "Folder001",
        "type": 'job',
        "color": "0xff0000"
    },
    {
        "title": "Job 003",
        "id": 4,
        "folderName": "Folder001",
        "type": 'job',
        "color": "0xff0000"
    },

    // -------------------------

    {
        "title": "Job 004",
        "id": 5,
        "folderName": "Folder002",
        "type": 'job',
        "color": "0x00ff00"
    },
    {
        "title": "Dataset 002",
        "id": 6,
        "folderName": "Folder002",
        "type": 'dataset',
        "color": "0x00ff00"
    },
    {
        "title": "Job 005",
        "id": 7,
        "folderName": "Folder002",
        "type": 'job',
        "color": "0x00ff00"
    },
    {
        "title": "Job 006",
        "id": 8,
        "folderName": "Folder002",
        "type": 'job',
        "color": "0x00ff00"
    },

    // -------------------------

    {
        "title": "Job 007",
        "id": 9,
        "folderName": "Folder003",
        "type": 'job',
        "color": "0xff00ff"
    },
    {
        "title": "Dataset 003",
        "id": 10,
        "folderName": "Folder003",
        "type": 'dataset',
        "color": "0xff00ff"
    },
    {
        "title": "Job 008",
        "id": 11,
        "folderName": "Folder003",
        "type": 'job',
        "color": "0xff00ff"
    },

    // -------------------------


];
export const graphData = {
    "nodes": [
        {
            "title": "São Paulo",
            "id": 1,
            collaped: false
        },
        {
            "title": "Guarulhos",
            "id": 2
        },
        {
            "title": "Campinas",
            "id": 3
        },
        {
            "title": "São Bernardo do Campo",
            "id": 4
        },
        {
            "title": "Osasco",
            "id": 5
        },
        {
            "title": "Barueri",
            "id": 6
        },
        {
            "title": "Jundiaí",
            "id": 7
        },
        {
            "title": "Diadema",
            "id": 8
        },
        {
            "title": "Santana de Parnaíba",
            "id": 9
        },
        {
            "title": "Itupeva",
            "id": 10
        },
        {
            "title": "Santo André",
            "id": 11
        },
        {
            "title": "Mogi das Cruzes",
            "id": 12
        },
        {
            "title": "Suzano",
            "id": 13
        },
        {
            "title": "Taboão da Serra",
            "id": 14
        },
        {
            "title": "São Caetano do Sul",
            "id": 15
        },
        {
            "title": "Mauá",
            "id": 16
        },
        {
            "title": "Carapicuíba",
            "id": 17
        },
        {
            "title": "Cabreúva",
            "id": 18
        },
        {
            "title": "Biritiba-Mirim",
            "id": 19
        },
        {
            "title": "Poá",
            "id": 20
        },
        {
            "title": "Embu das Artes",
            "id": 21
        }
    ],
    "links": [
        {
            "source": 1,
            "target": 2
        },
        {
            "source": 1,
            "target": 2
        },
        {
            "source": 1,
            "target": 3
        },
        {
            "source": 1,
            "target": 4
        },
        {
            "source": 1,
            "target": 5
        },
        {
            "source": 1,
            "target": 11
        },
        {
            "source": 2,
            "target": 1
        },
        {
            "source": 2,
            "target": 11
        },
        {
            "source": 3,
            "target": 1
        },
        {
            "source": 3,
            "target": 7
        },
        {
            "source": 4,
            "target": 1
        },
        {
            "source": 4,
            "target": 8
        },
        {
            "source": 4,
            "target": 11
        },
        {
            "source": 5,
            "target": 1
        },
        {
            "source": 5,
            "target": 6
        },
        {
            "source": 6,
            "target": 5
        },
        {
            "source": 6,
            "target": 9
        },
        {
            "source": 7,
            "target": 3
        },
        {
            "source": 7,
            "target": 10
        },
        {
            "source": 8,
            "target": 4
        },
        {
            "source": 8,
            "target": 16
        },
        {
            "source": 9,
            "target": 6
        },
        {
            "source": 9,
            "target": 17
        },
        {
            "source": 10,
            "target": 7
        },
        {
            "source": 10,
            "target": 18
        },
        {
            "source": 11,
            "target": 4
        },
        {
            "source": 11,
            "target": 16
        },
        {
            "source": 12,
            "target": 2
        },
        {
            "source": 12,
            "target": 19
        },
        {
            "source": 13,
            "target": 12
        },
        {
            "source": 13,
            "target": 20
        },
        {
            "source": 14,
            "target": 21
        },
        {
            "source": 14,
            "target": 1
        },
        {
            "source": 15,
            "target": 1
        },
        {
            "source": 15,
            "target": 11
        }
    ]
}