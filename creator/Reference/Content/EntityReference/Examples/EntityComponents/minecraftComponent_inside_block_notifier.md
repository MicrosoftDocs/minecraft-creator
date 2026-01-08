---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:inside_block_notifier"
description: "Describes the minecraft:inside_block_notifier entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:inside_block_notifier

Verifies whether the entity is inside any of the listed blocks.


## Inside Block Notifier Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_list | *not set* | Array of [Block List](#block-list) items | List of blocks, with certain block states, that we are monitoring to see if the entity is inside. | Boat: `[{"block":{"name":"minecraft:bubble_column","states":{"drag_down":true}},"entered_block_event":{"event":"minecraft:entered_bubble_column_down","target":"self"},"exited_block_event":{"event":"minecraft:exited_bubble_column","target":"self"}},{"block":{"name":"minecraft:bubble_column","states":{"drag_down":false}},"entered_block_event":{"event":"minecraft:entered_bubble_column_up","target":"self"},"exited_block_event":{"event":"minecraft:exited_bubble_column","target":"self"}}]` | 

## Block List

#### Block Entry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block | *not set* | [Block](#block) item | The block to monitor, including name and optional states. |  | 
| entered_block_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when the entity enters the block. |  | 
| exited_block_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when the entity exits the block. |  | 

## Block

#### Block Descriptor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | String | The block identifier. |  | 
| states | *not set* | Keyed collection of boolean values | Block states to match. |  | 

## Samples

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)


```json
"minecraft:inside_block_notifier": {
  "block_list": [
    {
      "block": {
        "name": "minecraft:bubble_column",
        "states": {
          "drag_down": true
        }
      },
      "entered_block_event": {
        "event": "minecraft:entered_bubble_column_down",
        "target": "self"
      },
      "exited_block_event": {
        "event": "minecraft:exited_bubble_column",
        "target": "self"
      }
    },
    {
      "block": {
        "name": "minecraft:bubble_column",
        "states": {
          "drag_down": false
        }
      },
      "entered_block_event": {
        "event": "minecraft:entered_bubble_column_up",
        "target": "self"
      },
      "exited_block_event": {
        "event": "minecraft:exited_bubble_column",
        "target": "self"
      }
    }
  ]
}
```
