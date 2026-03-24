---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.breed"
description: "Describes the minecraft:behavior.breed ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.breed

Allows this mob to breed with other mobs.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Breedable (minecraft:breedable)](../EntityComponents/minecraftComponent_breedable.md)
> 

## Entity Breed Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Chicken: `3`, Frog: `4` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier applied to the mob when using this AI Goal. | Chicken: `1`, Goat: `0.6` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:behavior.breed": {
  "priority": 3,
  "speed_multiplier": 1
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.breed": {
  "priority": 4
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:behavior.breed": {
  "priority": 3,
  "speed_multiplier": 0.6
}
```
