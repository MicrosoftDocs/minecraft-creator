---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.lay_down
description: "A reference document detailing the 'behavior.lay_down' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.lay_down

`minecraft:behavior.lay_down` compels an entity randomly lay down for a period of time.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|interval| 120| Integer| A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|random_stop_interval| 120| Integer| A random value to determine at what interval the AI goal can stop. This has a 1/interval chance to stop this goal.|

## Example

```json
"minecraft:behavior.lay_down":{
    "priority": 4,
    "interval": 240,
    "random_stop_interval": 120
}
```

## Vanilla entities examples

### panda

```json
"minecraft:behavior.lay_down": {
          "priority": 5,
          "interval": 400,
          "random_stop_interval": 2000
        }
```

## Vanilla entities using `minecraft:behavior.lay_down`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
