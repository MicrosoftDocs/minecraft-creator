---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:ambient_sound_interval"
description: "Describes the minecraft:ambient_sound_interval entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:ambient_sound_interval

Delay for an entity playing its sound.


## Ambient Sound Interval Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event_name | ambient | String | Level sound event to be played as the ambient sound. | Allay: `"ambient"` | 
| event_names | *not set* | Array of [Event Names](#event-names) items | List of dynamic level sound events, with conditions for choosing between them. Evaluated in order, first one wins. If none evaluate to true, 'event_name' will take precedence. | Allay: `[{"condition":"query.is_using_item","event_name":"ambient.tame"},{"condition":"!query.is_using_item","event_name":"ambient"}]`, Breeze: `[{"condition":"!query.is_on_ground","event_name":"ambient.in.air"}]` | 
| range | 16 | Decimal number | Maximum time in seconds to randomly add to the ambient sound delay time. |  | 
| value | 8 | Decimal number | Minimum time in seconds before the entity plays its ambient sound again. |  | 

### Event Names
List of dynamic level sound events, with conditions for choosing between them. Evaluated in order, first one wins. If none evaluate to true, 'event_name' will take precedence.


#### Event Names Properties

**JSON path:** `event_names`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| condition | *not set* | String | The condition that must be satisfied to select the given ambient sound | 
| event_name | *not set* | String | Level sound event to be played as the ambient sound | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "query.is_using_item",
      "event_name": "ambient.tame"
    },
    {
      "condition": "!query.is_using_item",
      "event_name": "ambient"
    }
  ],
  "range": 5,
  "value": 5
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "!query.is_on_ground",
      "event_name": "ambient.in.air"
    }
  ],
  "range": 16,
  "value": 8
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "query.is_baby",
      "event_name": "ambient.baby"
    }
  ],
  "range": 16,
  "value": 6
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "query.head_is_in_water",
      "event_name": "ambient.in.water"
    }
  ],
  "range": 16,
  "value": 6
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "query.head_is_in_water",
      "event_name": "ambient.in.water"
    }
  ],
  "range": 16,
  "value": 8
}
```
