---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.emerge
description: "A reference document detailing the 'behavior.emerge' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.emerge

`minecraft:behavior.emerge` activates the "EMERGING" entity flag during the specified duration and triggers "on_done" at the end.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| cooldown_time| 0.50| Integer| Time in seconds the mob has to wait before using the goal again |
| duration| 5.00| Decimal| Goal duration in seconds |
| on_done| *not set* | Trigger to be executed when the goal execution is about to end |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

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
