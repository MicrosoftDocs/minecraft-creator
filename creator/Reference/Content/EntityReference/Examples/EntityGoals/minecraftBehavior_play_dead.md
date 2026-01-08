---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.play_dead"
description: "Describes the minecraft:behavior.play_dead ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.play_dead

Allows this entity to pretend to be dead to avoid being targeted by attackers.


## Play Dead Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| apply_regeneration | false | Boolean true/false | Whether the mob will receive the regeneration effect while playing dead. | Axolotl: `true` | 
| damage_sources | all | Array of strings | The list of Entity Damage Sources that will cause this mob to play dead. | Axolotl: `["contact","entity_attack","entity_explosion","magic","projectile","thorns","wither"]` | 
| duration | 1 | Decimal number | The amount of time the mob will remain playing dead (in seconds). | Axolotl: `10` | 
| filters | *not set* | Minecraft filter | The list of other triggers that are required for the mob to activate play dead | Axolotl: `{"test":"in_water","operator":"==","value":true}` | 
| force_below_health | 0 | Integer number | The amount of health at which damage will cause the mob to play dead. | Axolotl: `8` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| random_damage_range | *not set* | Range of integers | The range of damage that may cause the goal to start depending on randomness. Damage taken below the min will never cause the goal to start. Damage taken above the max will always cause the goal to start. | Axolotl: `[0,2]` | 
| random_start_chance | 1 | Decimal number | The likelihood of this goal starting upon taking damage. | Axolotl: `0.33` | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.play_dead": {
  "priority": 0,
  "duration": 10,
  "force_below_health": 8,
  "random_start_chance": 0.33,
  "random_damage_range": [
    0,
    2
  ],
  "damage_sources": [
    "contact",
    "entity_attack",
    "entity_explosion",
    "magic",
    "projectile",
    "thorns",
    "wither"
  ],
  "apply_regeneration": true,
  "filters": {
    "test": "in_water",
    "operator": "==",
    "value": true
  }
}
```
