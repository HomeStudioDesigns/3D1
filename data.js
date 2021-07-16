var APP_DATA = {
  "scenes": [
    {
      "id": "0-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08628439634277818,
          "pitch": 0.1670105591009463,
          "rotation": 0,
          "target": "1-dining-table"
        },
        {
          "yaw": -1.7310886359964481,
          "pitch": 0.5347713941843502,
          "rotation": 0,
          "target": "4-wash-counter"
        },
        {
          "yaw": -1.5578262030453125,
          "pitch": 0.11746789700056581,
          "rotation": 0,
          "target": "2-kitchen-view_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-table",
      "name": "Dining Table",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.652915994746385,
          "pitch": 0.2809792062350702,
          "rotation": 0,
          "target": "4-wash-counter"
        },
        {
          "yaw": 3.134587763151817,
          "pitch": 0.34646494182647203,
          "rotation": 0,
          "target": "0-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-view_02",
      "name": "Kitchen View_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0679661622170205,
          "pitch": 0.14828827757776608,
          "rotation": 0,
          "target": "5-work-area"
        },
        {
          "yaw": 2.7561491257194533,
          "pitch": 0.22484062983638253,
          "rotation": 0,
          "target": "3-kitchen-view_01"
        },
        {
          "yaw": 1.9697749619954825,
          "pitch": 0.24576945098153757,
          "rotation": 0,
          "target": "4-wash-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-view_01",
      "name": "Kitchen View_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1122235175778208,
          "pitch": 0.33515656390588333,
          "rotation": 0,
          "target": "5-work-area"
        },
        {
          "yaw": 0.546854258148894,
          "pitch": 0.2686123658213422,
          "rotation": 0,
          "target": "2-kitchen-view_02"
        },
        {
          "yaw": 1.4683797978882893,
          "pitch": 0.3385178994915279,
          "rotation": 0,
          "target": "4-wash-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wash-counter",
      "name": "Wash Counter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6163032282049414,
          "pitch": 0.11163811197498674,
          "rotation": 0,
          "target": "1-dining-table"
        },
        {
          "yaw": 1.6467120467068135,
          "pitch": 0.5306747935463854,
          "rotation": 0,
          "target": "0-dining-room"
        },
        {
          "yaw": -1.3369982671406149,
          "pitch": 0.13695438778809788,
          "rotation": 0,
          "target": "2-kitchen-view_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2241251474090706,
          "pitch": 0.21553123262949647,
          "rotation": 0,
          "target": "3-kitchen-view_01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project 360",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
