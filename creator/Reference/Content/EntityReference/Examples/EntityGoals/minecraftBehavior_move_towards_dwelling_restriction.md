---
author: mammerla
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.move_towards_dwelling_restriction
description: "A reference document detailing the 'behavior.move_towards_dwelling_restriction' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.move_towards_dwelling_restriction

`minecraft:behavior.move_towards_dwelling_restriction` allows entities with the `"minecraft:dweller"` component to move toward their village area that the entity should be restricted to.

## Parameter

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.0| Decimal| This multiplier modifies the entity's speed when moving towards its restriction. |

## Example

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 4,
    "speed_multiplier": 1.0
}

```

## Vanilla mob examples

### iron_golem

```json
"minecraft:behavior.move_towards_dwelling_restriction": {
    "priority": 4,
    "speed_multiplier": 1
}
```

### Vanilla mobs using `move_towards_dwelling_restriction`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [villager_v2](../../../../source/vanillabehaviorpack_snippets/entities/villager_v2.md)
