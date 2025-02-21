---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_towards_home_restriction"
description: "Describes the minecraft:behavior.move_towards_home_restriction ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_towards_home_restriction

Allows entities with a `minecraft:home` component to move towards their home position. 
		If `restriction_radius` is set, entities will be able to run this behavior only if outside of it.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Home (minecraft:home)](../EntityComponents/minecraftComponent_home.md)
> 

## Move Towards Home Restriction Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Bee: `9`, Elder Guardian: `5`, Wandering Trader: `6` | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the entity's speed when moving towards its restriction. | Elder Guardian: `1`, Wandering Trader: `0.6` | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.move_towards_home_restriction": {
  "priority": 9
}
```

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:behavior.move_towards_home_restriction": {
  "priority": 5,
  "speed_multiplier": 1
}
```

#### [Wandering Trader](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wandering_trader.json)


```json
"minecraft:behavior.move_towards_home_restriction": {
  "priority": 6,
  "speed_multiplier": 0.6
}
```
