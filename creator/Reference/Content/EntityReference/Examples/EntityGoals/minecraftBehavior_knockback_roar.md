---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.knockback_roar"
description: "Describes the minecraft:behavior.knockback_roar ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.knockback_roar

Allows the mob to perform a damaging knockback that affects all nearby entities.


## Knockback Roar Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_time | 0.5 | Decimal number | The delay after which the knockback occurs (in seconds). | Ravager: `0.5` | 
| cooldown_time | 0.1 | Decimal number | Time (in seconds) the mob has to wait before using the goal again. | Ravager: `0.1` | 
| damage_filters | *not set* | Minecraft filter | The list of conditions another entity must meet to be a valid target to apply damage to. | Ravager: `{"test":"is_family","subject":"other","operator":"!=","value":"illager"}` | 
| duration | 1 | Decimal number | The max duration of the roar (in seconds). | Ravager: `1` | 
| knockback_damage | 6 | Integer number | The damage dealt by the knockback roar. | Ravager: `6` | 
| knockback_filters | *not set* | Minecraft filter | The list of conditions another entity must meet to be a valid target to apply knockback to. | Ravager: `{"test":"is_family","subject":"other","operator":"!=","value":"ravager"}` | 
| knockback_height_cap | 0.4 | Decimal number | The maximum height for vertical knockback. |  | 
| knockback_horizontal_strength | 4 | Integer number | The strength of the horizontal knockback. | Ravager: `3` | 
| knockback_range | 4 | Integer number | The radius (in blocks) of the knockback effect. | Ravager: `4` | 
| knockback_vertical_strength | 4 | Integer number | The strength of the vertical knockback. | Ravager: `3` | 
| on_roar_end | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event that is triggered when the roar ends. | Ravager: `{"event":"minecraft:end_roar"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Ravager: `1` | 

## Samples

#### [Ravager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ravager.json)


```json
"minecraft:behavior.knockback_roar": {
  "priority": 1,
  "duration": 1,
  "attack_time": 0.5,
  "knockback_damage": 6,
  "knockback_horizontal_strength": 3,
  "knockback_vertical_strength": 3,
  "knockback_range": 4,
  "knockback_filters": {
    "test": "is_family",
    "subject": "other",
    "operator": "!=",
    "value": "ravager"
  },
  "damage_filters": {
    "test": "is_family",
    "subject": "other",
    "operator": "!=",
    "value": "illager"
  },
  "on_roar_end": {
    "event": "minecraft:end_roar"
  },
  "cooldown_time": 0.1
}
```
