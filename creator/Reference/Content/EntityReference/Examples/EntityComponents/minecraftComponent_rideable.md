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
| crouching_skip_interact | true | Boolean true/false | If true, this entity can't be interacted with if the entity interacting with it is crouching. | Llama: `true` | 
| dismount_mode | default | [Dismount Mode](#dismount-mode-choices) choices | Defines where riders are placed when dismounting this entity: - "default", riders are placed on a valid ground position around the entity, or at the center of the entity's collision box if none is found. | Cushion: `"on_top_center"` | 
| family_types | *not set* | Array of strings | List of entities that can ride this entity. | Chicken: `["baby_undead"]`, Llama: `["player"]` | 
| interact_text | *not set* | String | The text to display when the player can interact with the entity when playing with touch-screen controls. | Cushion: `"action.interact.ride.cushion"`, Llama: `"action.interact.mount"`, `"action.interact.ride.horse"` | 
| on_rider_enter_event | *not set* | Minecraft Event Reference | Event to execute on the owner entity when an entity starts riding it. This item requires a format version of at least 1.21.80. |  | 
| on_rider_exit_event | *not set* | Minecraft Event Reference | Event to execute on the owner entity when an entity stops riding it. This item requires a format version of at least 1.21.80. |  | 
| passenger_max_width | 0 | Decimal number | The max width a mob can have to be a rider. A value of 0 ignores this parameter. |  | 
| priority | *not set* | Integer number | This field may exist in old data but isn't used by "minecraft:rideable". |  | 
| pull_in_entities | false | Boolean true/false | If true, this entity will pull entities matching the specified "family_types" into any available seats. | Minecart: `true` | 
| rider_can_interact | false | Boolean true/false | If true, this entity will be picked when looked at by the rider. |  | 
| seat_count | 1 | Integer number | The number of entities that can ride this entity at the same time. | Chicken: `1` | 
| seats | *not set* | Array of [Seats](#seats) items | The list of positions and number of riders for each position for entities riding this entity. | Chicken: `{"position":[0,0.48,0]}`, Cow: `{"position":[0,1,0]}`, `{"position":[0,1.15,0]}` | 
| seats (as Object) | *not set* | Object |  |  | 
| pulls_in_entities | *not set* | Boolean true/false |  |  | 

### dismount_mode

Defines where riders are placed when dismounting this entity: - "default", riders are placed on a valid ground position around the entity, or at the center of the entity's collision box if none is found. - "on_top_center", riders are placed at the center of the top of the entity's collision box. This item requires a format version of at least 1.21.80.

### pull_in_entities

If true, this entity will pull entities matching the specified "family_types" into any available seats. Entities that are leashed will only be pulled in if their distance to their leash holder is less than the "hard_distance" defined in their own "minecraft:leashable" component.


### Dismount Mode choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| default | Default | |
| on_top_center | On Top Center | |

### Seats

#### Seats Properties

**JSON path:** `seats`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| camera_relax_distance_smoothing | *not set* | Decimal number | Adds springiness to camera movement when the camera moves back to its radius after being pushed closer to the player by an obstacle. This item requires a format version of at least 1.21.80. | 
| lock_rider_rotation | 0 | Molang | Angle in degrees to rotate the rider by. Can be a number or a Molang expression. | 
| rotate_rider_by | 0 | Molang | Offset to rotate riders by. Can be a number or a Molang expression. | 
| third_person_camera_radius | *not set* | Decimal number | Camera radius to use for this seat when in third person or third person front camera. | 

#### third_person_camera_radius

Camera radius to use for this seat when in third person or third person front camera. Overrides the default third-person camera distance for riders in this seat. This item requires a format version of at least 1.21.80.


## Samples

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "baby_undead"
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
    "baby_undead"
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
    "baby_undead"
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

#### [Cushion](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cushion.json)


```json
"minecraft:rideable": {
  "seat_count": 1,
  "interact_text": "action.interact.ride.cushion",
  "dismount_mode": "on_top_center",
  "seats": {
    "position": [
      0,
      0.1875,
      0
    ],
    "rotate_rider_by": -90
  }
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)

At /minecraft:entity/component_groups/minecraft:llama_wild/minecraft:rideable/: 

```json
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "player"
  ],
  "interact_text": "action.interact.mount",
  "seats": {
    "position": [
      0,
      1.17,
      -0.3
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:llama_tamed/minecraft:rideable/: 

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
      1.17,
      -0.3
    ]
  }
}
```

#### [Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/minecart.json)


```json
"minecraft:rideable": {
  "interact_text": "action.interact.ride.minecart",
  "pull_in_entities": true,
  "seat_count": 1,
  "seats": {
    "position": [
      0,
      -0.2,
      0
    ]
  }
}
```
