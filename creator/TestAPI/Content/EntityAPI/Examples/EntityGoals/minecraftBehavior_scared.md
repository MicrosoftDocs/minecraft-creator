---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.scared
ms.prod: gaming
---

# minecraft:behavior.scared

`minecraft:behavior.scared` allows an entity to react and scared when a thunderstorm occurs.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|sound_interval| 0| Integer| The interval in which a sound will play when active in a 1/delay chance to kick off |

## Example

```json
"minecraft:behavior.scared":{
    "priority": 2,
    "sound_interval": 50
}
```

## Vanilla entities examples

### panda

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/panda.json" range="171-174":::

## Vanilla entities using `minecraft:behavior.scared`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
