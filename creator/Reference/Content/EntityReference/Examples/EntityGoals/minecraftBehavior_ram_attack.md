---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.ram_attack"
description: "Describes the minecraft:behavior.ram_attack ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.ram_attack

Allows this entity to damage a target by using a running attack.


## Ram Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| baby_knockback_modifier | 0.333333 | Decimal number | The modifier to knockback that babies have. |  | 
| cooldown_range | *not set* | Range of integers | Minimum and maximum cooldown time-range (positive, in seconds) between each attempted ram attack. | Goat: `[30,300]`, `[5,15]` | 
| knockback_force | 5 | Decimal number | The force of the knockback of the ram attack. | Goat: `2.5` | 
| knockback_height | 0.1 | Decimal number | The height of the knockback of the ram attack. | Goat: `0.04` | 
| min_ram_distance | 4 | Integer number | The minimum distance at which the mob can start a ram attack. | Goat: `4` | 
| on_start | *not set* | Array of Minecraft Event Triggers | The event to trigger when attacking | Goat: `[{"event":"start_event","target":"self"}]` | 
| pre_ram_sound | *not set* | String | The sound to play when an entity is about to perform a ram attack. | Goat: `"pre_ram"`, `"pre_ram.screamer"` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Goat: `5` | 
| ram_distance | 7 | Integer number | The distance at which the mob start to run with ram speed. | Goat: `7` | 
| ram_impact_sound | *not set* | String | The sound to play when an entity is impacting on a ram attack. | Goat: `"ram_impact"`, `"ram_impact.screamer"` | 
| ram_speed | 2 | Decimal number | Sets the entity's speed when charging toward the target. | Goat: `1.8` | 
| run_speed | 1 | Decimal number | Sets the entity's speed when running toward the target. | Goat: `0.7` | 

## Samples

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)

At /minecraft:entity/component_groups/ram_default/minecraft:behavior.ram_attack/: 

```json
"minecraft:behavior.ram_attack": {
  "priority": 5,
  "run_speed": 0.7,
  "ram_speed": 1.8,
  "min_ram_distance": 4,
  "ram_distance": 7,
  "knockback_force": 2.5,
  "knockback_height": 0.04,
  "pre_ram_sound": "pre_ram",
  "ram_impact_sound": "ram_impact",
  "cooldown_range": [
    30,
    300
  ],
  "on_start": [
    {
      "event": "start_event",
      "target": "self"
    }
  ]
}
```

At /minecraft:entity/component_groups/ram_screamer/minecraft:behavior.ram_attack/: 

```json
"minecraft:behavior.ram_attack": {
  "priority": 5,
  "run_speed": 0.7,
  "ram_speed": 1.8,
  "min_ram_distance": 4,
  "ram_distance": 7,
  "knockback_force": 2.5,
  "knockback_height": 0.04,
  "pre_ram_sound": "pre_ram.screamer",
  "ram_impact_sound": "ram_impact.screamer",
  "cooldown_range": [
    5,
    15
  ],
  "on_start": [
    {
      "event": "start_event",
      "target": "self"
    }
  ]
}
```
