---
author: mammerla
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.move_towards_home_restriction
description: "A reference document detailing the 'behavior.move_towards_home_restriction' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.move_towards_home_restriction

`minecraft:behavior.move_towards_home_restriction` aallows entities with a `"minecraft:home"` component to move towards their home position. If `"restriction_radius"` is set, entities will be able to run this behavior only if outside of it.

## Parameter

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.0| Decimal| This multiplier modifies the entity's speed when moving towards its restriction. |

## Example

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 4,
    "speed_multiplier": 1.0
}
```

## Vanilla mob examples

### guardian

```json
"minecraft:behavior.move_towards_home_restriction": {
    "priority": 5,
    "speed_multiplier": 1.0
}

```

### Vanilla mobs using `move_towards_home_restriction`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [guardian](../../../../source/vanillabehaviorpack_snippets/entities/guardian.md)
