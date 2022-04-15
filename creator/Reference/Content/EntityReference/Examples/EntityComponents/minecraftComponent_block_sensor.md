---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:block_sensor
ms.prod: gaming
---

# Entity Documentation - minecraft:block_sensor

`minecraft:block_sensor` will fire off a specified event when a block in the block list is broken within the sensor range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|on_break |*not set* | List| List of blocks to watch for being broken to fire off a specified event. If a block is in multiple lists, multiple events will fire.|
|sensor_radius |16.0 | Decimal | The maximum radial distance in which a specified block can be detected. The biggest radius is 32.0. |
| sources| []| List | List of sources that break the block to listen for. If none are specified, all block breaks will be detected. |

### on_break

`on_break` is a list defined by two parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|block_list| *not set* | List| List of blocks that will trigger the senor.|
|on_block_broken|*not set* | String|  Event to run when a block breaks|

## Example

```json
"minecraft:block_sensor": {
    "sensor_radius": 16,
    "on_break": [
        {
            "block_list": [
                "minecraft:gold_block"
            ],
            "on_block_broken": "important_block_destroyed_event"
        }
    ]
}
```

## Vanilla entities examples

### piglin

```json
"minecraft:block_sensor": {
    "sensor_radius": 16,
    "on_break": [
        {
            "block_list": [
                "minecraft:gold_block",
                "minecraft:gilded_blackstone",
                "minecraft:nether_gold_ore",
                "minecraft:deepslate_gold_ore",
                "minecraft:raw_gold_block",
                "minecraft:gold_ore",
                "minecraft:chest",
                "minecraft:trapped_chest",
                "minecraft:ender_chest",
                "minecraft:barrel",
                "minecraft:shulker_box",
                "minecraft:undyed_shulker_box"
            ],
            "on_block_broken": "important_block_destroyed_event"
        }
    ]
}
```

## Vanilla entities using `minecraft:block_sensor`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
