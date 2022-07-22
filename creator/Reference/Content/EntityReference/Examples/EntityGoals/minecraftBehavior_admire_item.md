---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.admire_item
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.admire_item

`minecraft:behavior.admire_item` allows an entity to admire an object they are holding.

>[!IMPORTANT]
> `minecraft:behavior.admire_item` requires the `minecraft:admire_item` component to be set within the entity definition as well.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|admire_item_sound|*not set* |String |The sound event to play when admiring the item. |
|sound_interval|0 |Range ["range_min", "range_max"] |The range of time in seconds to randomly wait before playing the sound again. |
|on_admire_item_start|*not set* | ["event", "target"] |What happens when the entity starts admiring an item. |
|on_admire_item_stop|*not set* | ["event", "target"] |What happens when the entity stops admiring an item. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.admire_item":{
    "priority": 4,
    "admire_item_sound": "admire",
    "sound_interval": {
        "range_min": 0.0,
        "range_max": 5.0
    },
    "on_admire_item_start": {
        "event": "admire_item_started_event",
        "target": "self"
    },
    "on_admire_item_stop": {
        "event": "admire_item_stopped_event",
        "target": "self"
    }
}
```

## Vanilla entities examples

### piglin

```json
      "minecraft:behavior.admire_item": {
        "priority": 2,
        "admire_item_sound": "admire",
        "sound_interval": {
          "range_min": 2.0,
          "range_max": 5.0
        },
        "on_admire_item_start": {
          "event": "admire_item_started_event",
          "target": "self"
        },
        "on_admire_item_stop": {
          "event": "admire_item_stopped_event",
          "target": "self"
        }
      }
```

## Vanilla entities using `admire_item`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
