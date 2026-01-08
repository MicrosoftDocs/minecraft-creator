---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:rideable"
description: "Describes the minecraft:rideable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:rideable

This entity can be ridden.


## Rideable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| controlling_seat | 0 | Integer number | The seat that designates the driver of the entity. Entities with the "minecraft:behavior.controlled_by_player" goal ignore this field and give control to any player in any seat. |  | 
| crouching_skip_interact | true | Boolean true/false | If true, this entity can't be interacted with if the entity interacting with it is crouching. | Camel: `true` | 
| dismount_mode | default | [Dismount Mode](#dismount-mode-choices) choices | Defines where riders are placed when dismounting this entity:<br>- "default", riders are placed on a valid ground position around the entity, or at the center of the entity's collision box if none is found.<br>- "on_top_center", riders are placed at the center of the top of the entity's collision box. | Happy Ghast: `"on_top_center"` | 
| family_types | *not set* | Array of strings | List of entities that can ride this entity. | Camel: `["player"]`, Camel Husk: `["player","parched","husk_rider"]`, Cat: `["baby_zombie","baby_husk"]` | 
| interact_text | *not set* | String | The text to display when the player can interact with the entity when playing with touch-screen controls. | Camel: `"action.interact.ride.horse"`, Donkey: `"action.interact.mount"`, Minecart: `"action.interact.ride.minecart"` | 
| on_rider_enter_event | *not set* | Minecraft Event Reference | Event to execute on the owner entity when an entity starts riding it. This item requires a format version of at least undefined. | Happy Ghast: `"minecraft:on_passenger_mount"`, Nautilus: `"minecraft:on_mount"`, Zombie Nautilus: `"minecraft:on_drowned_mount"`, `"minecraft:on_player_mount"` | 
| on_rider_exit_event | *not set* | Minecraft Event Reference | Event to execute on the owner entity when an entity stops riding it. This item requires a format version of at least undefined. | Happy Ghast: `"minecraft:on_passenger_dismount"`, Nautilus: `"minecraft:on_dismount"`, Zombie Nautilus: `"minecraft:on_drowned_dismount"`, `"minecraft:on_player_dismount"` | 
| passenger_max_width | 0 | Decimal number | The max width a mob can have to be a rider. A value of 0 ignores this parameter. |  | 
| priority | *not set* | Integer number | This field may exist in old data but isn't used by "minecraft:rideable". |  | 
| pull_in_entities | false | Boolean true/false | If true, this entity will pull entities matching the specified "family_types" into any available seats. Entities that are leashed will only be pulled in if their distance to their leash holder is less than the "hard_distance" defined in their own "minecraft:leashable" component. | Camel: `true` | 
| rider_can_interact | false | Boolean true/false | If true, this entity will be picked when looked at by the rider. |  | 
| seat_count | 1 | Integer number | The number of entities that can ride this entity at the same time. | Camel: `2`, Cat: `1`, Happy Ghast: `4` | 
| seats | *not set* | Array of [Seats](#seats) items | The list of positions and number of riders for each position for entities riding this entity. | Camel: `[{"min_rider_count":0,"max_rider_count":2,"position":[0,1.905,0.5]},{"min_rider_count":1,"max_rider_count":2,"position":[0,1.905,-0.5]}]`, Cat: `{"position":[0,0.35,0]}`, Chicken: `{"position":[0,0.48,0]}` | 
| seats (Alternate 1) | *not set* | Object |  |  | 
| pulls_in_entities | *not set* | Boolean true/false |  |  | 

### Dismount Mode choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| default | Default | |
| on_top_center | On Top Center | |

## Seats

#### Seats Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| camera_relax_distance_smoothing | *not set* | String |  |  | 
| lock_rider_rotation | 0 | Molang | Angle in degrees to rotate the rider by. Can be a number or a Molang expression. |  | 
| rotate_rider_by | 0 | Molang | Offset to rotate riders by. Can be a number or a Molang expression. |  | 
| third_person_camera_radius | *not set* | String |  |  | 

## Samples

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:rideable": {
  "seat_count": 2,
  "crouching_skip_interact": true,
  "pull_in_entities": true,
  "family_types": [
    "player"
  ],
  "interact_text": "action.interact.ride.horse",
  "seats": [
    {
      "min_rider_count": 0,
      "max_rider_count": 2,
      "position": [
        0,
        1.905,
        0.5
      ]
    },
    {
      "min_rider_count": 1,
      "max_rider_count": 2,
      "position": [
        0,
        1.905,
        -0.5
      ]
    }
  ]
}
```

#### [Camel Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel_husk.json)


```json
"minecraft:rideable": {
  "seat_count": 2,
  "crouching_skip_interact": true,
  "family_types": [
    "player",
    "parched",
    "husk_rider"
  ],
  "interact_text": "action.interact.ride.horse",
  "seats": [
    {
      "min_rider_count": 0,
      "max_rider_count": 2,
      "position": [
        0,
        1.905,
        0.5
      ]
    },
    {
      "min_rider_count": 1,
      "max_rider_count": 2,
      "position": [
        0,
        1.905,
        -0.5
      ]
    }
  ]
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "baby_zombie",
    "baby_husk"
  ],
  "seats": {
    "position": [
      0,
      0.35,
      0
    ]
  }
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "baby_zombie",
    "baby_husk"
  ],
  "seats": {
    "position": [
      0,
      0.48,
      0
    ]
  }
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)

At /minecraft:entity/component_groups/minecraft:cow_baby/minecraft:rideable/: 

```json
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "baby_zombie",
    "baby_husk"
  ],
  "seats": {
    "position": [
      0,
      1,
      0
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:cow_adult/minecraft:rideable/: 

```json
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "baby_zombie",
    "baby_husk"
  ],
  "seats": {
    "position": [
      0,
      1.15,
      0
    ]
  }
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)

At /minecraft:entity/component_groups/minecraft:donkey_wild/minecraft:rideable/: 

```json
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "player",
    "baby_zombie",
    "baby_husk"
  ],
  "interact_text": "action.interact.mount",
  "seats": {
    "position": [
      0,
      0.925,
      -0.2
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:donkey_tamed/minecraft:rideable/: 

```json
"minecraft:rideable": {
  "seat_count": 1,
  "crouching_skip_interact": true,
  "family_types": [
    "player"
  ],
  "interact_text": "action.interact.ride.horse",
  "seats": {
    "position": [
      0,
      0.925,
      -0.2
    ]
  }
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:rideable": {
  "seat_count": 4,
  "family_types": [
    "player"
  ],
  "dismount_mode": "on_top_center",
  "on_rider_enter_event": "minecraft:on_passenger_mount",
  "on_rider_exit_event": "minecraft:on_passenger_dismount",
  "interact_text": "action.interact.ride.horse",
  "seats": [
    {
      "min_rider_count": 0,
      "max_rider_count": 4,
      "position": [
        0,
        3.8,
        1.7
      ],
      "third_person_camera_radius": 8,
      "camera_relax_distance_smoothing": 6
    },
    {
      "min_rider_count": 1,
      "max_rider_count": 4,
      "position": [
        -1.7,
        3.8,
        0
      ],
      "third_person_camera_radius": 8,
      "camera_relax_distance_smoothing": 6
    },
    {
      "min_rider_count": 2,
      "max_rider_count": 4,
      "position": [
        0,
        3.8,
        -1.7
      ],
      "third_person_camera_radius": 8,
      "camera_relax_distance_smoothing": 6
    },
    {
      "min_rider_count": 3,
      "max_rider_count": 4,
      "position": [
        1.7,
        3.8,
        0
      ],
      "third_person_camera_radius": 8,
      "camera_relax_distance_smoothing": 6
    }
  ]
}
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:rideable": {
  "seat_count": 3,
  "family_types": [
    "piglin"
  ],
  "seats": [
    {
      "position": [
        0,
        1.125,
        -0.3
      ],
      "lock_rider_rotation": 0
    },
    {
      "position": [
        0,
        2.625,
        -0.3
      ],
      "lock_rider_rotation": 0
    },
    {
      "position": [
        0,
        4.125,
        -0.3
      ],
      "lock_rider_rotation": 0
    }
  ]
}
```

#### [Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/horse.json)

At /minecraft:entity/component_groups/minecraft:horse_wild/minecraft:rideable/: 

```json
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "player",
    "baby_zombie",
    "baby_husk"
  ],
  "interact_text": "action.interact.mount",
  "seats": {
    "position": [
      0,
      1.1,
      -0.2
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:horse_tamed/minecraft:rideable/: 

```json
"minecraft:rideable": {
  "seat_count": 1,
  "crouching_skip_interact": true,
  "family_types": [
    "player"
  ],
  "interact_text": "action.interact.ride.horse",
  "seats": {
    "position": [
      0,
      1.1,
      -0.2
    ]
  }
}
```
