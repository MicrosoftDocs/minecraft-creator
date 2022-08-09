---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.lay_down
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.lay_down

`minecraft:behavior.lay_down` allows an entity randomly lay down for a period of time.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|interval| 120| Integer| A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|random_stop_interval| 120| Integer| A random value to determine at what interval the AI goal can stop. This has a 1/interval chance to stop this goal.|

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
