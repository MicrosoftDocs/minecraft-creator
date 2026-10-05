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


## Entity Rideable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| controlling_seat | 0 | Integer number | The seat that designates the driver of the entity. Entities with the "minecraft:behavior.controlled_by_player" goal ignore this field and give control to any player in any seat. |  | 
| crouching_skip_interact | true | Boolean true/false | If true, this entity can't be interacted with if the entity interacting with it is crouching. | Llama: `true` | 
| dismount_mode | default | [Dismount Mode](#dismount-mode-choices) choices | Defines where riders are placed when dismounting this entity: - "default", riders are placed on a valid ground position around the entity, or at the center of the entity's collision box if none is found. | Cushion: `"on_top_center"` | 
| family_types | [] | Array of strings | List of entities that can ride this entity. | Chicken: `["baby_undead"]`, Llama: `["player"]` | 
| interact_text |  | String | The text to display when the player can interact with the entity when playing with touch-screen controls. | Cushion: `"action.interact.ride.cushion"`, Llama: `"action.interact.mount"`, `"action.interact.ride.horse"` | 
| on_rider_enter_event |  | Minecraft Event Reference | Event to execute on the owner entity when an entity starts riding it. This item requires a format version of at least 1.21.80. |  | 
| on_rider_exit_event |  | Minecraft Event Reference | Event to execute on the owner entity when an entity stops riding it. This item requires a format version of at least 1.21.80. |  | 
| passenger_max_width | 0 | Decimal number | The max width a mob can have to be a rider. A value of 0 ignores this parameter. |  | 
| priority | *not set* | Integer number | This field may exist in old data but isn't used by "minecraft:rideable". |  | 
| pull_in_entities | false | Boolean true/false | If true, this entity will pull entities matching the specified "family_types" into any available seats. | Minecart: `true` | 
| rider_can_interact | false | Boolean true/false | If true, this entity will be picked when looked at by the rider. |  | 
| seat_count | 1 | Integer number | The number of entities that can ride this entity at the same time. | Chicken: `1` | 
| seats (Entity SeatDescription) | [] | Array of [Seats](#entity-seatdescription) items | The list of positions and number of riders for each position for entities riding this entity. | Chicken: `{"position":[0,0.48,0]}`, Cow: `{"position":[0,1,0]}`, `{"position":[0,1.15,0]}` | 
| seats (as Object) | *not set* | Object |  |  | 
| pulls_in_entities | *not set* | Boolean true/false |  |  | 

### dismount_mode

Defines where riders are placed when dismounting this entity: - "default", riders are placed on a valid ground position around the entity, or at the center of the entity's collision box if none is found. - "on_top_center", riders are placed at the center of the top of the entity's collision box. - "look_direction", riders are placed at the center of the top neighboring block in the riders look direction on a block that is not lava. This item requires a format version of at least 1.21.80.

### pull_in_entities

If true, this entity will pull entities matching the specified "family_types" into any available seats. Entities that are leashed will only be pulled in if their distance to their leash holder is less than the "hard_distance" defined in their own "minecraft:leashable" component.


### Dismount Mode choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| default | Default | |
| on_top_center | On Top Center | |
| look_direction | Look direction | |

### Entity SeatDescription

#### Entity SeatDescription Properties

**JSON path:** `seats`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| camera_relax_distance_smoothing | *not set* | Decimal number | When the camera relaxes to the full distance after being pushed by an obstacle, this value can override the default movement. | 
| lock_rider_rotation | 181 | Decimal number | Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit. | 
| max_rider_count | *not set* | Integer number | Defines the maximum number of riders that can be riding this entity for this seat to be valid. | 
| min_rider_count | 0 | Integer number | Defines the minimum number of riders that need to be riding this entity before this seat can be used. | 
| position | [0, 0, 0] | Array of numbers | Position of this seat relative to this entity's position. | 
| position (Position) | *not set* | [Position (Position)](#position-position) item |  | 
| rotate_rider_by | 0 | Keyed set of strings | Offset to rotate riders by. | 
| rotate_rider_by (as Named set of objects) | *not set* | Key/item pairs of [Rotate Rider By (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| rotate_rider_by (as Decimal number) | *not set* | Decimal number |  | 
| third_person_camera_radius | *not set* | Decimal number | A different radius that the third_person and third_person_front cameras should use for the player is in this seat. Negative values are ignored. Value must be >= 1. Value must be <= 64. | 

#### camera_relax_distance_smoothing

When the camera relaxes to the full distance after being pushed by an obstacle, this value can override the default movement. This value describes the stiffness of the spring that pushes the camera back out. Negative values are ignored. Value must be >= 1. Value must be <= 32.


#### Position (Position)

##### Position Properties

**JSON path:** `seats > position`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

#### Legacy Molang Expression

##### Legacy Molang Expression Properties

**JSON path:** `seats > rotate_rider_by`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

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
  "seats": [
    {
      "position": [
        0,
        0.0625,
        0
      ],
      "rotate_rider_by": -90
    }
  ]
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
  "seats": [
    {
      "position": [
        0,
        1.17,
        -0.3
      ]
    }
  ]
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
  "seats": [
    {
      "position": [
        0,
        1.17,
        -0.3
      ]
    }
  ]
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
