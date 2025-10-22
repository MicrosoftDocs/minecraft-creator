---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:spawn_entity"
description: "Describes the minecraft:spawn_entity entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:spawn_entity

Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).


## Spawn Entity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| entities | *not set* | [Entities](#entities) item |  | Armadillo: `{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"mob.armadillo.scute_drop","spawn_item":"armadillo_scute"}`, Chicken: `[{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"plop","spawn_item":"egg","filters":[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"temperate"}]},{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"plop","spawn_item":"brown_egg","filters":[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"warm"}]},{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"plop","spawn_item":"blue_egg","filters":[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"cold"}]}]`, Copper Golem: `{"min_wait_time":0,"max_wait_time":0,"spawn_item":"poppy","filters":{"test":"bool_property","domain":"minecraft:has_flower","value":true}}` | 
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
| filters | *not set* | Array of [Filters](#filters) items |  |  | 
| max_wait_time | *not set* | Decimal number |  | Armadillo: `600` | 
| min_wait_time | *not set* | Decimal number |  | Armadillo: `300` | 
| num_to_spawn | *not set* | Decimal number |  |  | 
| should_leash | *not set* | String |  |  | 
| single_use | *not set* | String |  |  | 
| spawn_entity | *not set* | String |  |  | 
| spawn_event | *not set* | String |  |  | 
| spawn_item | *not set* | String |  | Armadillo: `"armadillo_scute"` | 
| spawn_sound | *not set* | String |  | Armadillo: `"mob.armadillo.scute_drop"` | 

## Filters

#### Filters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | *not set* | String |  | Chicken: `"=="` | 
| subject | *not set* | String |  | Chicken: `"self"` | 
| test | *not set* | String |  | Chicken: `"rider_count"` | 
| value | *not set* | Decimal number |  | Chicken: `0` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:spawn_entity": {
  "entities": {
    "min_wait_time": 300,
    "max_wait_time": 600,
    "spawn_sound": "mob.armadillo.scute_drop",
    "spawn_item": "armadillo_scute"
  }
}
```

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

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)


```json
"minecraft:spawn_entity": {
  "entities": {
    "min_wait_time": 0,
    "max_wait_time": 0,
    "spawn_item": "poppy",
    "filters": {
      "test": "bool_property",
      "domain": "minecraft:has_flower",
      "value": true
    }
  }
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
    "spawn_event": "minecraft:spawn_adult"
  }
}
```

#### [Ocelot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ocelot.json)


```json
"minecraft:spawn_entity": {
  "entities": {
    "filters": [
      {
        "test": "random_chance",
        "value": 7
      }
    ],
    "min_wait_time": 0,
    "max_wait_time": 0,
    "num_to_spawn": 2,
    "single_use": true,
    "spawn_entity": "minecraft:ocelot",
    "spawn_event": "minecraft:entity_born",
    "spawn_method": "born",
    "spawn_sound": ""
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

#### [Wandering Trader](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wandering_trader.json)


```json
"minecraft:spawn_entity": {
  "entities": [
    {
      "min_wait_time": 0,
      "max_wait_time": 0,
      "spawn_entity": "trader_llama",
      "spawn_event": "minecraft:from_wandering_trader",
      "single_use": true,
      "num_to_spawn": 2,
      "should_leash": true
    }
  ]
}
```

#### [Dream Turkey](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/chill_dreams/1_dream_turkey/behavior_packs/mamm_cds/entities/dream_turkey.json)


```json
"minecraft:spawn_entity": {
  "entities": {
    "min_wait_time": 300,
    "max_wait_time": 600,
    "spawn_sound": "plop",
    "spawn_item": "egg",
    "filters": {
      "test": "rider_count",
      "subject": "self",
      "operator": "==",
      "value": 0
    }
  }
}
```

#### [Memory Jar](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/chill_dreams/complete/behavior_packs/mamm_cds/entities/memory_jar.json)


```json
"minecraft:spawn_entity": {
  "entities": {
    "min_wait_time": 300,
    "max_wait_time": 600,
    "spawn_sound": "place",
    "spawn_item": "egg"
  }
}
```
