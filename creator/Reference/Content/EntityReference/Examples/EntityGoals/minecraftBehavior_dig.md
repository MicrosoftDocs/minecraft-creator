---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.dig
description: "A reference document detailing the 'behavior.dig' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.dig

`minecraft:behavior.dig` compels the entity to dig into the ground before despawning.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| allow_dig_when_named| false| Boolean| If true, this behavior can run when this entity is named. Otherwise not. |
| digs_in_daylight| false| Boolean| Indicates that the entity should start digging when it sees daylight |
| duration| 0.0| Decimal| Goal duration in seconds |
| idle_time| | Decimal| The minimum idle time in seconds between the last detected disturbance to the start of digging. |
| on_start| *not set* | Trigger| Event(s) to run when the goal starts. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| suspicion_is_disturbance| false| Boolean| If true, finding new suspicious locations count as disturbances that may delay the start of this goal. |
| vibration_is_disturbance| false| Boolean| If true, vibrations count as disturbances that may delay the start of this goal. |
| on_start| *not set* | Trigger| Event(s) to run when the goal starts. |

## Vanilla entities examples

### warden

```json
"minecraft:behavior.dig": {
    "priority": 1,
    "duration": 5.5,
    "idle_time": 60.0,
    "vibration_is_disturbance": true,
    "suspicion_is_disturbance": true,
    "digs_in_daylight": false
}
```

## Vanilla entities using `dig`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
