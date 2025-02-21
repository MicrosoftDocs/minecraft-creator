---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.pet_sleep_with_owner"
description: "Describes the minecraft:behavior.pet_sleep_with_owner ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.pet_sleep_with_owner

Allows the pet mob to move onto a bed with its owner while sleeping.

> [!Note]
> Requires a player to be set as the tame owner via taming (or the `tame` command, or the tame API on EntityTameableComponent) in order to work properly.

## Pet Sleep With Owner Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Cat: `1` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Cat: `2` | 
| search_height | 1 | Integer number | Height in blocks from the owner the pet can be to sleep with owner. | Cat: `10` | 
| search_radius | *not set* | Decimal number |  | Cat: `10` | 
| search_range | 0 | Integer number | The distance in blocks from the owner the pet can be to sleep with owner. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Cat: `1.2` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.pet_sleep_with_owner": {
  "priority": 2,
  "speed_multiplier": 1.2,
  "search_radius": 10,
  "search_height": 10,
  "goal_radius": 1
}
```
