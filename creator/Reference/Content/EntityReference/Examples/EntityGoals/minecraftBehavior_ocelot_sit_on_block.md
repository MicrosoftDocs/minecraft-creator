---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.ocelot_sit_on_block
description: "A reference document detailing the 'behavior.ocelot_sit_on_block' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.ocelot_sit_on_block

`minecraft:behavior.ocelot_sit_on_block` compels an entity to sit in place, similar to the ocelot entity animation pose.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.ocelot_sit_on_block":{
    "priority": 4,
    "speed_multiplier": 1.0
}
```

## Vanilla entities examples

### ocelot

```json
"minecraft:behavior.ocelot_sit_on_block": {
          "priority": 6,
          "speed_multiplier": 1.0
        }
```

## Vanilla entities using `minecraft:behavior.ocelot_sit_on_block`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
