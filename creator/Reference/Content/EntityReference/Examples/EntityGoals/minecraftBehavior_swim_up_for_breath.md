---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.swim_up_for_breath"
description: "Describes the minecraft:behavior.swim_up_for_breath ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.swim_up_for_breath

Allows the mob to try to move to air once it is close to running out of its total breathable supply. Requires "minecraft:breathable".


## Swim Up For Breath Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_type | water | String | The material the mob is traveling in. An air block will only be considered valid to move to with a block of this material below it. Options are: "water", "lava", or "any". |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Dolphin: `1` | 
| search_height | 16 | Integer number | The height (in blocks) above the mob's current position that it will search for a valid air block to move to. If a valid block cannot be found, the mob will move to the position this many blocks above it. |  | 
| search_radius | 4 | Integer number | The radius (in blocks) around the mob's current position that it will search for a valid air block to move to. |  | 
| speed_mod | 1.4 | Decimal number | Movement speed multiplier of the mob when using this Goal. |  | 

## Samples

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:behavior.swim_up_for_breath": {
  "priority": 1
}
```
