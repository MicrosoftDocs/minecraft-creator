---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.move_towards_home_restriction
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_towards_home_restriction

`minecraft:behavior.move_towards_home_restriction` allows mobs with the home component to move toward their pre-defined area that the mob should be restricted to.

## Parameter

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
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
