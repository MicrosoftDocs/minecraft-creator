---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:ambient_sound_interval"
description: "Describes the minecraft:ambient_sound_interval entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:ambient_sound_interval

Delay for an entity playing its sound.


## Ambient Sound Interval Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event_name | ambient | String | Level sound event to be played as the ambient sound. | Allay: `"ambient"`, Bee: `"ambient.pollinate"`, Creaking: `"undefined"` | 
| event_names | *not set* | Array of [Event Names](#event-names-item-type) items | List of dynamic level sound events, with conditions for choosing between them. Evaluated in order, first one wins. If none evaluate to true, 'event_name' will take precedence. | Allay: `[{"event_name":"ambient.tame","condition":"query.is_using_item"},{"event_name":"ambient","condition":"!query.is_using_item"}]`, Warden: `[{"event_name":"angry","condition":"query.anger_level(this) >= 80"},{"event_name":"agitated","condition":"query.anger_level(this) >= 40"}]` | 
| range | 16 | Decimal number | Maximum time in seconds to randomly add to the ambient sound delay time. | Allay: `5`, Bee: `3`, Evocation Illager: `4` | 
| value | 8 | Decimal number | Minimum time in seconds before the entity plays its ambient sound again. | Allay: `5`, Bee: `2`, Fox: `80` | 

## Event Names item type
List of dynamic level sound events, with conditions for choosing between them. Evaluated in order, first one wins. If none evaluate to true, 'event_name' will take precedence.


#### Event Names Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| condition | *not set* | String | The condition that must be satisfied to select the given ambient sound |  | 
| event_name | *not set* | String | Level sound event to be played as the ambient sound |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:ambient_sound_interval": {
  "value": 5,
  "range": 5,
  "event_name": "ambient",
  "event_names": [
    {
      "event_name": "ambient.tame",
      "condition": "query.is_using_item"
    },
    {
      "event_name": "ambient",
      "condition": "!query.is_using_item"
    }
  ]
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:ambient_sound_interval": {}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/component_groups/look_for_food/minecraft:ambient_sound_interval/: 

```json
"minecraft:ambient_sound_interval": {
  "event_name": "ambient.pollinate",
  "range": 3,
  "value": 2
}
```

At /minecraft:entity/component_groups/default_sound/minecraft:ambient_sound_interval/: 

```json
"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "range": 0,
  "value": 0
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)

At /minecraft:entity/component_groups/minecraft:hostile/minecraft:ambient_sound_interval/: 

```json
"minecraft:ambient_sound_interval": {
  "event_name": "undefined"
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:ambient_sound_interval": {
  "value": 2,
  "range": 4,
  "event_name": "ambient.in.raid"
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)

At /minecraft:entity/component_groups/minecraft:fox_ambient_normal/minecraft:ambient_sound_interval/: 

```json
"minecraft:ambient_sound_interval": {
  "event_name": "ambient"
}
```

At /minecraft:entity/component_groups/minecraft:fox_ambient_sleep/minecraft:ambient_sound_interval/: 

```json
"minecraft:ambient_sound_interval": {
  "event_name": "sleep"
}
```

At /minecraft:entity/component_groups/minecraft:fox_ambient_night/minecraft:ambient_sound_interval/: 

```json
"minecraft:ambient_sound_interval": {
  "event_name": "screech",
  "value": 80,
  "range": 160
}
```

At /minecraft:entity/component_groups/minecraft:fox_ambient_defending_target/minecraft:ambient_sound_interval/: 

```json
"minecraft:ambient_sound_interval": {
  "event_name": "mad"
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)

At /minecraft:entity/component_groups/minecraft:adult_with_passengers/minecraft:ambient_sound_interval/: 

```json
"minecraft:ambient_sound_interval": {
  "value": 30
}
```

At /minecraft:entity/component_groups/minecraft:adult_without_passengers/minecraft:ambient_sound_interval/: 

```json
"minecraft:ambient_sound_interval": {
  "value": 5
}
```
