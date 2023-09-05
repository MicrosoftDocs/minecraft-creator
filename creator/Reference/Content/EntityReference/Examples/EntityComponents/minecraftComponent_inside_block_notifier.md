---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:inside_block_notifier
description: "A reference document detailing the 'inside_block_notifier' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:inside_block_notifier

`minecraft:inside_block_notifier` verifies whether the entity is inside any of the listed blocks.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| block_list| *not set*| List| List of blocks, with certain block states, that are monitored to see if the entity is inside. |

## Example

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
          }
        ]
      }
    }
```

## Vanilla entities examples

### boat

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

## Vanilla entities using `minecraft:inside_block_notifier`

- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
