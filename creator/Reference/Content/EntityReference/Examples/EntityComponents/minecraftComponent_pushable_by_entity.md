---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:pushable_by_entity"
description: "Describes the minecraft:pushable_by_entity entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:pushable_by_entity

Allows an entity to be pushed by other entities.


## Entity Pushable By Entity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| presets | [] | Array of [Presets](#entity-pushablebyentitypreset) items | Defines how this entity behaves when pushed by another entity. The first preset whose "filter" conditions are met will be applied; if none match, a default configuration is used instead. | Boat: `[{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"sulfur_cube"},{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","operator":"not","value":"none"},{"test":"is_controlling_passenger_family","subject":"self","value":"player"}]},"push_mode":"none"},{"push_mode":"legacy_boat","strength_multiplier":0.1,"min_distance":0.55,"push_scale_self":0.5,"push_scale_other":0.25}]` | 

### Entity PushableByEntityPreset

#### Entity PushableByEntityPreset Properties

**JSON path:** `presets`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that must be met for this preset to be applied. | 
| filters (Alternate 1) | *not set* | Object |  | 
| kick_distance_threshold | 1.2999999523162842 | Decimal number | Maximum horizontal distance at which another entity can kick this entity. Only used when push_mode is "ball". | 
| kick_speed_scale | 2 | Decimal number | Multiplier applied to the pushing entity's movement speed to determine kick force. Only used when push_mode is "ball". | 
| max_kick_speed | 0.5 | Decimal number | Maximum speed the ball can be kicked at, regardless of how fast the pushing entity is moving. Only used when push_mode is "ball". | 
| min_distance | 0.009999999776482582 | Decimal number | Minimum distance between two entities for push forces to be applied. Entities closer than this will not push each other. | 
| min_kick_speed | 0 | Decimal number | Minimum speed the ball will be kicked at, regardless of how slowly the pushing entity is moving. Only used when push_mode is "ball". | 
| play_sound_cooldown_in_seconds | 0.20000000298023224 | Decimal number | Cooldown in seconds between sounds. A lower number results in more sounds. | 
| play_sound_impulse_threshold | 0.20000000298023224 | Decimal number | Minimum change of velocity needed to trigger the push sound. A lower value means higher sensitivity. | 
| push_mode | default | [Push Mode](#push-mode-choices) choices | Defines the type of push vector calculation applied to the entity: - "default": Standard push calculation used by most entities. | 
| push_scale_other | 1 | Decimal number | Scales how much push force this entity applies to the other entity when colliding. A value of 1.0 applies full force, 0.5 applies half. | 
| push_scale_self | 1 | Decimal number | Scales how much this entity pushes itself away when colliding with another entity. A value of 1.0 applies full force, 0.5 applies half. | 
| strength_multiplier | 0.05000000074505806 | Decimal number | Multiplier applied to the push strength. Higher values result in stronger pushes. | 
| vertical_kick_multiplier | 0.30000001192092896 | Decimal number | Multiplier for the upward force applied when the ball is kicked while on the ground. A value of 0 keeps the ball flat. Only used when push_mode is "ball". | 

#### push_mode

Defines the type of push vector calculation applied to the entity: - "default": Standard push calculation used by most entities. - "legacy_boat": Legacy push calculation historically used by boats. Includes dampened forces and sneak-based cancellation. - "legacy_minecart": Legacy push calculation historically used by minecarts. Includes alignment-based collision handling and velocity averaging.- "ball": Push calculation for ball-like entities. The ball is kicked in the direction of the pushing entity's movement, with force based on their movement speed.


#### Filters

##### Filters Properties

**JSON path:** `presets > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Push Mode choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| ball | Ball | |
| default | Default | |
| legacy_boat | Legacy boat | |
| legacy_minecart | Legacy minecart | |

## Samples

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)


```json
"minecraft:pushable_by_entity": {
  "presets": [
    {
      "filters": {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "sulfur_cube"
          },
          {
            "test": "enum_property",
            "subject": "other",
            "domain": "minecraft:sulfur_cube_archetype",
            "operator": "not",
            "value": "none"
          },
          {
            "test": "is_controlling_passenger_family",
            "subject": "self",
            "value": "player"
          }
        ]
      },
      "push_mode": "none"
    },
    {
      "push_mode": "legacy_boat",
      "strength_multiplier": 0.1,
      "min_distance": 0.55,
      "push_scale_self": 0.5,
      "push_scale_other": 0.25
    }
  ]
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:pushable_by_entity": {}
```

#### [Chest Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chest_minecart.json)


```json
"minecraft:pushable_by_entity": {
  "presets": [
    {
      "push_mode": "legacy_minecart",
      "strength_multiplier": 0.1,
      "min_distance": 0.01,
      "push_scale_self": 0.5,
      "push_scale_other": 0.25
    }
  ]
}
```
