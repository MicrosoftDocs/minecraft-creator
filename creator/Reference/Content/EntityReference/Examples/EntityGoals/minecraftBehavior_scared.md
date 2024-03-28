---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.scared
description: "A reference document detailing the 'behavior.scared' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.scared

`minecraft:behavior.scared` compels an entity to become scared when the weather outside is thundering.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| sound_interval| 0| Integer| The interval in which a sound will play when active in a 1/delay chance to kick off. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.scared":{
    "sound_interval": 0
}
```

## Vanilla entities examples

### panda

```json
"minecraft:behavior.scared": {
          "priority": 1,
          "sound_interval": 20
        }
```

## Vanilla entities using `minecraft:behavior.scared`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
