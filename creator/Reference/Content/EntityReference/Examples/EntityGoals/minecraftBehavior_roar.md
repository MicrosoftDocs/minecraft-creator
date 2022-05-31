---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.roar
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.roar

`minecraft:behavior.roar` [EXPERIMENTAL BEHAVIOR] plays the provided sound and activates the "ROARING" actor flag during the specified duration.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| duration| 0.0| decimal| Goal duration in seconds |

## Vanilla entities examples

### warden

```json
"minecraft:behavior.roar": {
  "priority": 2,
  "duration": 4.2
},
```

## Vanilla entities using `roar`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
