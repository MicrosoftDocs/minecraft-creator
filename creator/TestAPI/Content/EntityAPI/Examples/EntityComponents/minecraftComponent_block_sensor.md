---
author: v-josjones
ms.author: v-josjones
title: minecraft:block_sensor
ms.prod: gaming
---

# minecraft:block_sensor

`minecraft:block_sensor` will fire off a specified event when a block in the block list is broken within the sensor range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|sensor_radius |*not set* | Decimal  |radius from entity in order to check for when block is broken|
|on_break |*not set* | List| blocks that will trigger the component when broken and what event will trigger.|

### on_break

`on_break` is a list defined by two parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|block_list| *not set* | List| list of blocks that will trigger the senor.|
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
