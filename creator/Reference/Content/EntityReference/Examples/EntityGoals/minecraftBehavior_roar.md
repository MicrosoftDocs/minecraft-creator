---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.roar
description: "A reference document detailing the 'behavior.roar' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.roar

`minecraft:behavior.roar` compels this entity to roar at another entity based on data in `minecraft:anger_level`. When the anger threshold specified in `minecraft:anger_level` has been reached, this entity will roar for the specified amount of time, look at the other entity, apply anger boost towards it, and finally target it.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| duration| 0.0| decimal| The amount of time to roar for. |

## Vanilla entities examples

### warden

```json
"minecraft:behavior.roar": {
  "priority": 2,
  "duration": 4.2
}
```

## Vanilla entities using `roar`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
