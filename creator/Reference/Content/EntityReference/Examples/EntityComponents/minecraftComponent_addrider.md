---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:addrider"
description: "Describes the minecraft:addrider entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:addrider

Adds a rider to the entity.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Rideable (minecraft:rideable)](../EntityComponents/minecraftComponent_rideable.md)
> 

## Add Rider Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| entity_type | *not set* | String from a list of choices | Type of entity to acquire as a rider |  | 
| riders | [] | [Riders](#entity-rider-data) item | List of riders to be added to the entity. Can only spawn as many riders as "minecraft:rideable" has "seat_count". | Cave Spider: `[{"entity_type":"minecraft:skeleton"}]`, `[{"entity_type":"minecraft:stray"}]` | 
| spawn_event | *not set* | Minecraft Event Reference | Trigger event when a rider is acquired |  | 

## Entity Rider Data
List of riders to be added to the entity. Must have no more riders than "minecraft:rideable" has "seat_count".


#### Entity Rider Data Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| entity_type | *not set* | String | The entity type that will be riding this entity. |  | 
| spawn_event |  | String | The spawn event that will be used when the riding entity is created. |  | 

## Samples

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/component_groups/minecraft:spider_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:skeleton"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:spider_stray_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:stray"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:spider_bogged_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:bogged"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:spider_parched_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:parched"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:spider_wither_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:wither_skeleton"
    }
  ]
}
```

#### [Strider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/strider.json)

At /minecraft:entity/component_groups/minecraft:strider_piglin_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:zombie_pigman",
      "spawn_event": "minecraft:spawn_as_strider_jockey"
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:strider_parent_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:strider",
      "spawn_event": "minecraft:spawn_baby_strider_jockey"
    }
  ]
}
```
