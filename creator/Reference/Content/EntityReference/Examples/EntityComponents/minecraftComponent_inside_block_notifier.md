---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:inside_block_notifier
ms.prod: gaming
---

# Entity Documentation - minecraft:inside_block_notifier

`minecraft:inside_block_notifier` verifies whether the entity is inside any of the listed blocks.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| block_list| *not set*| List| List of blocks, with certain block states, that we are monitoring to see if the entity is inside. |

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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/boat.json" range="198-233":::

## Vanilla entities using `minecraft:inside_block_notifier`

- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)