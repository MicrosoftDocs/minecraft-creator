---
author: v-josjones
ms.author: v-josjones
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

### on_break

`on_break` is a list defined by two parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|block_list| *not set* | List| List of blocks that will trigger the senor.|
|on_block_broken|*not set* | String|  Event to run when a block breaks|

## Example

```json
"minecraft:block_sensor":{
    "sensor_radius": 25.0,
    "on_break": [
                {
                    "block_list": [
                        "minecraft:wool", "minecraft:dirt"
                        ],
                    "on_block_broken": "minecraft:block_broken"
                }
                ]
}
```

## Vanilla entities examples

### piglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/piglin.json" range="212-231":::

## Vanilla entities using `minecraft:block_sensor`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
