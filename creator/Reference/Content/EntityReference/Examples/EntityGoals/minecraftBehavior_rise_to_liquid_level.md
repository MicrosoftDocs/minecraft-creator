---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.rise_to_liquid_level
description: "A reference document detailing the 'behavior.rise_to_liquid_level' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.rise_to_liquid_level

`minecraft:behavior.rise_to_liquid_level` compels an entity to rise to the top of a liquid block if they are located in one or have spawned under a liquid block.

## Parameter

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|liquid_y_offset| 0.0| Decimal| Vertical offset from the liquid |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|rise_delta | 0.0| Decimal| Displacement for how much the entity will move up in the vertical axis.|
|sink_delta | 0.0| Decimal| Displacement for how much the entity will move down in the vertical axis|

## Example

```json
"minecraft:behavior.rise_to_liquid_level":{
    "priority": 0,
    "liquid_y_offset": 0.25,
    "rise_delta": 0.5,
    "sink_delta": 0.5
}
```

## Vanilla entities examples

### strider

```json
"minecraft:behavior.rise_to_liquid_level": {
        "priority": 0,
        "liquid_y_offset": 0.25,
        "rise_delta": 0.01,
        "sink_delta": 0.01
      }
```

## Vanilla entities using `minecraft:behavior.rise_to_liquid_level`

- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
