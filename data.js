var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "foyer",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 3.0190245703703873,
          "pitch": 0.4876480257201692,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 1.0708398574283287,
          "pitch": 0.2734512622083791,
          "rotation": 0,
          "target": "2-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "living",
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
          "yaw": -1.4286946896589185,
          "pitch": 0.3114454386151415,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-passage",
      "name": "passage",
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
          "yaw": -0.05102897045628829,
          "pitch": 0.27863910151594595,
          "rotation": 0,
          "target": "7-passage-2"
        },
        {
          "yaw": 0.6075479169279241,
          "pitch": 0.24901377503956112,
          "rotation": 0,
          "target": "9-kitchen"
        },
        {
          "yaw": 1.6557666700707205,
          "pitch": 0.16406634504624407,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 0.9382191763875891,
          "pitch": -0.9630493142489147,
          "rotation": 0,
          "target": "4-stair"
        },
        {
          "yaw": 3.1059997658613847,
          "pitch": 0.23133804937527458,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -1.2654688937699916,
          "pitch": 0.3356038911582431,
          "rotation": 0,
          "target": "5-f-living"
        },
        {
          "yaw": -1.4500627971789761,
          "pitch": 0.1739723939621598,
          "rotation": 0,
          "target": "6-patio-f-living"
        },
        {
          "yaw": -0.1780758135983369,
          "pitch": 0.15410604628076996,
          "rotation": 0,
          "target": "8-patio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "dining",
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
          "yaw": 1.3796634959640652,
          "pitch": 0.3480637059152478,
          "rotation": 0,
          "target": "2-passage"
        },
        {
          "yaw": 1.7730887793642225,
          "pitch": 0.18336961375239014,
          "rotation": 0,
          "target": "5-f-living"
        },
        {
          "yaw": 2.093665407757168,
          "pitch": -0.7348508633733211,
          "rotation": 0,
          "target": "4-stair"
        },
        {
          "yaw": 2.4255032195272985,
          "pitch": 0.23326806963205016,
          "rotation": 0,
          "target": "7-passage-2"
        },
        {
          "yaw": 0.7939605248877193,
          "pitch": 0.2069002043675532,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-stair",
      "name": "stair",
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
          "yaw": -1.2486566942707409,
          "pitch": 1.2610454517026355,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 1.4202922016402049,
          "pitch": 0.9125260478754615,
          "rotation": 0,
          "target": "7-passage-2"
        },
        {
          "yaw": 0.5560538985998917,
          "pitch": 0.657878423211967,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-f-living",
      "name": "f living",
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
          "yaw": 2.002849075151609,
          "pitch": 0.34704602899369696,
          "rotation": 0,
          "target": "6-patio-f-living"
        },
        {
          "yaw": -0.9607421527924203,
          "pitch": 0.041239160191434365,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -0.4027703513606884,
          "pitch": 0.2283822312582373,
          "rotation": 0,
          "target": "2-passage"
        },
        {
          "yaw": -1.6095583930944848,
          "pitch": 0.255597067912813,
          "rotation": 0,
          "target": "7-passage-2"
        },
        {
          "yaw": -1.179247001345617,
          "pitch": -0.4730903445341106,
          "rotation": 0,
          "target": "4-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-patio-f-living",
      "name": "patio f living",
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
          "yaw": -2.2472075043150355,
          "pitch": 0.3579544176991334,
          "rotation": 0,
          "target": "5-f-living"
        },
        {
          "yaw": -2.2939081623511726,
          "pitch": 0.14254755297648458,
          "rotation": 0,
          "target": "2-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-passage-2",
      "name": "passage 2",
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
          "yaw": -1.6255958226184983,
          "pitch": 0.2792290862268132,
          "rotation": 0,
          "target": "9-kitchen"
        },
        {
          "yaw": -0.6460862271936101,
          "pitch": 0.2785996890399822,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -0.9352667986233083,
          "pitch": -0.5005568761434809,
          "rotation": 0,
          "target": "4-stair"
        },
        {
          "yaw": -0.23714236731636262,
          "pitch": 0.31054075962860495,
          "rotation": 0,
          "target": "2-passage"
        },
        {
          "yaw": -0.21789123055732595,
          "pitch": 0.10048479453947579,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.0612739283907775,
          "pitch": 0.3799522702148579,
          "rotation": 0,
          "target": "5-f-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-patio-2",
      "name": "patio 2",
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
          "yaw": 2.460495160302722,
          "pitch": 0.36075483927712426,
          "rotation": 0,
          "target": "7-passage-2"
        },
        {
          "yaw": 2.6063100899680096,
          "pitch": 0.06851199991645274,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kitchen",
      "name": "kitchen",
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
          "yaw": 0.688539383685022,
          "pitch": 0.18585378900695382,
          "rotation": 0,
          "target": "2-passage"
        },
        {
          "yaw": 1.1006719662647662,
          "pitch": 0.18780379243772138,
          "rotation": 0,
          "target": "5-f-living"
        },
        {
          "yaw": 1.7229566069975375,
          "pitch": 0.3063594731504775,
          "rotation": 0,
          "target": "7-passage-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Nafsal Keeriyad",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
