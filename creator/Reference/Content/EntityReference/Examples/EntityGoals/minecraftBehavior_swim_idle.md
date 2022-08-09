---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.swim_idle
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.swim_idle

`minecraft:behavior.swim_idle` allows the entity go idle, if swimming. Entity must be in water.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| idle_time| 5| Decimal| Amount of time (in seconds) to stay idle. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| success_rate| 0.1| Decimal| Percent chance this entity will go idle, 1.0 = 100%. |

## Example

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

## Vanilla entities examples

### fish

```json
"minecraft:behavior.swim_idle": {
    "priority": 5,
    "idle_time": 5.0,
    "success_rate": 0.1
}
```

## Vanilla entities using `minecraft:behavior.swim_idle`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
