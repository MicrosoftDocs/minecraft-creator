---
author: v-josjones
ms.author: v-josjones
title: minecraft:admire_item
ms.prod: gaming
---

# minecraft:admire_item

`minecraft:admire_item` allows an entity to

Causes the mob to ignore attackable targets for a given duration.

## Parameters

|Name |Default Value  |TypeSS  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|cooldown_after_being_attacked| 0| Integer|  Duration, in seconds, for which mob won't admire items if it was hurt |
|duration| 10| Integer|  Duration, in seconds, that the mob is pacified. |

## Example

```json
"minecraft:admire_item":{
    "cooldown_after_being_attacked": 5,
    "duration":10,
}
```

## Vanilla entities examples

### piglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/piglin.json" range="424-427":::

## Vanilla entities using `minecraft:admire_item`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
