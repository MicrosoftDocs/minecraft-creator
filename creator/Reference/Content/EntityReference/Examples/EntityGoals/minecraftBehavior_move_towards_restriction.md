---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.move_towards_restriction
description: "A reference document detailing the 'behavior.move_towards_restriction' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.move_towards_restriction

`minecraft:behavior.move_towards_restriction` compels a mobs to move toward a pre-defined area that the mob should be restricted to.

## Parameter

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.0| Decimal| This multiplier modifies the entity's speed when moving towards its restriction. |

## Example

```json
"minecraft:behavior.move_towards_restriction": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```
