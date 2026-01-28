---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:spawn_entity"
description: "Describes the minecraft:spawn_entity entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:spawn_entity

Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).


## Spawn Entity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| entities | *not set* | Array of [Entities](#entities) items |  | Chicken: `[{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"plop","spawn_item":"egg","filters":[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"temperate"}]},{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"plop","spawn_item":"brown_egg","filters":[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"warm"}]},{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"plop","spawn_item":"blue_egg","filters":[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"cold"}]}]`, Drowned: `{"min_wait_time":0,"max_wait_time":0,"num_to_spawn":1,"single_use":true,"spawn_entity":"minecraft:zombie_nautilus","spawn_event":"minecraft:entity_spawned"}`, Sniffer: `{"min_wait_time":0,"max_wait_time":0,"spawn_sound":"plop","spawn_item":"sniffer_egg","spawn_item_event":{"event":"on_egg_spawned","target":"self"},"single_use":true}` | 
| filters | *not set* | Minecraft filter | If present, the specified entity will only spawn if the filter evaluates to true. |  | 
| max_wait_time | 600 | Integer number | Maximum amount of time to randomly wait in seconds before another entity is spawned. |  | 
| min_wait_time | 300 | Integer number | Minimum amount of time to randomly wait in seconds before another entity is spawned. |  | 
| num_to_spawn | 1 | Integer number | The number of entities of this type to spawn each time that this triggers. |  | 
| should_leash | false | Boolean true/false | If true, this the spawned entity will be leashed to the parent. |  | 
| single_use | false | Boolean true/false | If true, this component will only ever spawn the specified entity once. |  | 
| spawn_entity | *not set* | String | Identifier of the entity to spawn, leave empty to spawn the item defined by "spawn_item" instead. |  | 
| spawn_event | minecraft:entity_born | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call on the spawned entity when it spawns. |  | 
| spawn_item | egg | String | Item identifier of the item to spawn. |  | 
| spawn_item_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call on this entity when the item is spawned. |  | 
| spawn_method | born | String | Method to use to spawn the entity. |  | 
| spawn_sound | plop | String | Identifier of the sound effect to play when the entity is spawned. |  | 

## Entities

#### Entities Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | String |  | Chicken: `[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"temperate"}]` | 
| max_wait_time | *not set* | Decimal number |  | Chicken: `600` | 
| min_wait_time | *not set* | Decimal number |  | Chicken: `300` | 
| spawn_item | *not set* | String |  | Chicken: `"egg"` | 
| spawn_sound | *not set* | String |  | Chicken: `"plop"` | 

## Samples

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:spawn_entity": {
  "entities": [
    {
      "min_wait_time": 300,
      "max_wait_time": 600,
      "spawn_sound": "plop",
      "spawn_item": "egg",
      "filters": [
        {
          "test": "rider_count",
          "subject": "self",
          "operator": "==",
          "value": 0
        },
        {
          "test": "enum_property",
          "subject": "self",
          "domain": "minecraft:climate_variant",
          "value": "temperate"
        }
      ]
    },
    {
      "min_wait_time": 300,
      "max_wait_time": 600,
      "spawn_sound": "plop",
      "spawn_item": "brown_egg",
      "filters": [
        {
          "test": "rider_count",
          "subject": "self",
          "operator": "==",
          "value": 0
        },
        {
          "test": "enum_property",
          "subject": "self",
          "domain": "minecraft:climate_variant",
          "value": "warm"
        }
      ]
    },
    {
      "min_wait_time": 300,
      "max_wait_time": 600,
      "spawn_sound": "plop",
      "spawn_item": "blue_egg",
      "filters": [
        {
          "test": "rider_count",
          "subject": "self",
          "operator": "==",
          "value": 0
        },
        {
          "test": "enum_property",
          "subject": "self",
          "domain": "minecraft:climate_variant",
          "value": "cold"
        }
      ]
    }
  ]
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:spawn_entity": {
  "entities": {
    "min_wait_time": 0,
    "max_wait_time": 0,
    "num_to_spawn": 1,
    "single_use": true,
    "spawn_entity": "minecraft:zombie_nautilus",
    "spawn_event": "minecraft:entity_spawned"
  }
}
```

#### [Sniffer](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json)


```json
"minecraft:spawn_entity": {
  "entities": {
    "min_wait_time": 0,
    "max_wait_time": 0,
    "spawn_sound": "plop",
    "spawn_item": "sniffer_egg",
    "spawn_item_event": {
      "event": "on_egg_spawned",
      "target": "self"
    },
    "single_use": true
  }
}
```
