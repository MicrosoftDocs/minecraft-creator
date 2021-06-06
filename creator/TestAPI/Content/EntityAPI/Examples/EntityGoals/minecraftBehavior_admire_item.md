---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.admire_item
ms.prod: gaming
---

# minecraft:behavior.admire_item

`minecraft:behavior.admire_item` allows an entity to admire an object they are holding.

>[!IMPORTANT]
> `minecraft:behavior.admire_item` requires the `minecraft:admire_item` component to be set within the entity definition as well.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|admire_item_sound|*not set* |String |The sound event to play when admiring the item |
|sound_interval|0 |Range ["range_min", "range_max"] |The range of time in seconds to randomly wait before playing the sound again. |

## Example

```json
"minecraft:behavior.admire_item":{
    "priority": 4,
    "admire_item_sound":"admire",
    "sound_interval": {
        "range_min": 0.0,
        "range_max": 5.0
    }
}
```

## Vanilla entities examples

### piglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/piglin.json" range="479-494":::

## Vanilla entities using `admire_item`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.json)
