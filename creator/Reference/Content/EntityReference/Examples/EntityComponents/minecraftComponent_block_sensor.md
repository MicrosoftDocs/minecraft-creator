---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:block_sensor"
description: "Describes the minecraft:block_sensor entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:block_sensor

Fires off a specified event when a block in the block list is broken within the sensor range.


## Block Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| on_break | *not set* | Array of strings | List of blocks to watch for being broken to fire off a specified event. If a block is in multiple lists, multiple events will fire. | Bee: `[{"block_list":["minecraft:beehive","minecraft:bee_nest"],"on_block_broken":"hive_destroyed"}]`, Piglin: `[{"block_list":["minecraft:gold_block","minecraft:gilded_blackstone","minecraft:nether_gold_ore","minecraft:deepslate_gold_ore","minecraft:raw_gold_block","minecraft:gold_ore","minecraft:chest","minecraft:trapped_chest","minecraft:ender_chest","minecraft:barrel","minecraft:white_shulker_box","minecraft:orange_shulker_box","minecraft:magenta_shulker_box","minecraft:light_blue_shulker_box","minecraft:yellow_shulker_box","minecraft:lime_shulker_box","minecraft:pink_shulker_box","minecraft:gray_shulker_box","minecraft:light_gray_shulker_box","minecraft:cyan_shulker_box","minecraft:purple_shulker_box","minecraft:blue_shulker_box","minecraft:brown_shulker_box","minecraft:green_shulker_box","minecraft:red_shulker_box","minecraft:black_shulker_box","minecraft:undyed_shulker_box"],"on_block_broken":"important_block_destroyed_event"}]` | 
| sensor_radius | 16 | Decimal number | The maximum radial distance in which a specified block can be detected. The biggest radius is 32.0. | Bee: `16` | 
| sources | *not set* | Array of strings | List of sources that break the block to listen for. If none are specified, all block breaks will be detected. | Bee: `[{"test":"has_silk_touch","subject":"other","value":false}]` | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:block_sensor": {
  "sensor_radius": 16,
  "sources": [
    {
      "test": "has_silk_touch",
      "subject": "other",
      "value": false
    }
  ],
  "on_break": [
    {
      "block_list": [
        "minecraft:beehive",
        "minecraft:bee_nest"
      ],
      "on_block_broken": "hive_destroyed"
    }
  ]
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


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
        "minecraft:white_shulker_box",
        "minecraft:orange_shulker_box",
        "minecraft:magenta_shulker_box",
        "minecraft:light_blue_shulker_box",
        "minecraft:yellow_shulker_box",
        "minecraft:lime_shulker_box",
        "minecraft:pink_shulker_box",
        "minecraft:gray_shulker_box",
        "minecraft:light_gray_shulker_box",
        "minecraft:cyan_shulker_box",
        "minecraft:purple_shulker_box",
        "minecraft:blue_shulker_box",
        "minecraft:brown_shulker_box",
        "minecraft:green_shulker_box",
        "minecraft:red_shulker_box",
        "minecraft:black_shulker_box",
        "minecraft:undyed_shulker_box"
      ],
      "on_block_broken": "important_block_destroyed_event"
    }
  ]
}
```
