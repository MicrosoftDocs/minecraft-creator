---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.lay_down
ms.prod: gaming
---

# minecraft:behavior.lay_down

`minecraft:behavior.lay_down` allows an entity randomly lay down for a period of time.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|interval| 120| Integer| A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal |
|random_stop_interval| 120| Integer| a random value in which the goal can use to pull out of the behavior. This is a 1/interval chance to play the sound |

## Example

```json
"minecraft:behavior.lay_down":{
    "priority": 4,
    "interval": 240,
    "random_stop_interval": 120,
}
```

## Vanilla entities examples

### panda

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/panda.json" range="135-139":::

## Vanilla entities using `minecraft:behavior.lay_down`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
