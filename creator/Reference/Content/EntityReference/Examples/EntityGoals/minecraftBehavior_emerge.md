---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.emerge
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.emerge

`minecraft:behavior.emerge` [EXPERIMENTAL BEHAVIOR] activates the "EMERGING" actor flag during the specified duration and triggers "on_done" at the end.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| cooldown_time| 0.50| Integer| Time in seconds the mob has to wait before using the goal again |
| duration| 5.00| Decimal| Goal duration in seconds |
| Trigger| on_done| | Trigger to be executed when the goal execution is about to end |


## Vanilla entities examples

### warden

```json
"minecraft:behavior.emerge": {
        "duration": 7.0,
        "on_done": {
           "event": "minecraft:emerged",
           "target": "self"
        }
}
```

## Vanilla entities using `emerge`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
