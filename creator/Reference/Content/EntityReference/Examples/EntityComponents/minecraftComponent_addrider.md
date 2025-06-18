---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:addrider"
description: "Describes the minecraft:addrider entity component"
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
| entity_type | *not set* | String from a list of choices | Type of entity to acquire as a rider | Cave Spider: `"minecraft:skeleton"`, `"minecraft:stray"`, `"minecraft:bogged"`, `"minecraft:wither_skeleton"` | 
| spawn_event | *not set* | Minecraft Event Reference | Trigger event when a rider is acquired | Ravager: `"minecraft:spawn_for_raid"`, `"minecraft:spawn_as_illager_captain"`, Strider: `"minecraft:spawn_as_strider_jockey"`, `"minecraft:spawn_baby_strider_jockey"` | 

## Samples

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/component_groups/minecraft:spider_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:skeleton"
}
```

At /minecraft:entity/component_groups/minecraft:spider_stray_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:stray"
}
```

At /minecraft:entity/component_groups/minecraft:spider_bogged_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:bogged"
}
```

At /minecraft:entity/component_groups/minecraft:spider_wither_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:wither_skeleton"
}
```

#### [Ravager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ravager.json)

At /minecraft:entity/component_groups/minecraft:pillager_rider/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:pillager"
}
```

At /minecraft:entity/component_groups/minecraft:pillager_rider_for_raid/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:pillager",
  "spawn_event": "minecraft:spawn_for_raid"
}
```

At /minecraft:entity/component_groups/minecraft:evoker_rider_for_raid/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:evocation_illager",
  "spawn_event": "minecraft:spawn_for_raid"
}
```

At /minecraft:entity/component_groups/minecraft:pillager_captain_rider/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:pillager",
  "spawn_event": "minecraft:spawn_as_illager_captain"
}
```

At /minecraft:entity/component_groups/minecraft:vindicator_rider/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:vindicator"
}
```

At /minecraft:entity/component_groups/minecraft:vindicator_captain_rider/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:vindicator",
  "spawn_event": "minecraft:spawn_as_illager_captain"
}
```

#### [Strider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/strider.json)

At /minecraft:entity/component_groups/minecraft:strider_piglin_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:zombie_pigman",
  "spawn_event": "minecraft:spawn_as_strider_jockey"
}
```

At /minecraft:entity/component_groups/minecraft:strider_parent_jockey/minecraft:addrider/: 

```json
"minecraft:addrider": {
  "entity_type": "minecraft:strider",
  "spawn_event": "minecraft:spawn_baby_strider_jockey"
}
```
