---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:peek
description: "A reference document detailing the 'peek' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:peek

`minecraft:peek` defines the entity's 'peek' behavior, and the events that should be called during it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| on_close| *not set*| JSON Object | Event to initiate when the entity is done peeking. |
| on_open| *not set*| JSON Object | Event to initiate when the entity starts peeking. |
| on_target_open| *not set*| JSON Object | Event to initiate when the entity's target entity starts peeking. |

## Example

```json
"minecraft:peek": {
  "on_close": {
    "event": "minecraft:stop_peeping"
  },
  "on_open": {
    "event": "minecraft:start_peeping"
  },
  "on_target_open": {
    "event": "minecraft:ive_been_spotted"
  }
}
```

## Vanilla entities examples

### shulker

```json
"minecraft:peek": {
        "on_open": {
          "event": "minecraft:on_open"
        },
        "on_close": {
          "event": "minecraft:on_close"
        },
        "on_target_open": {
          "event": "minecraft:on_open"
        }
      }
```

## Vanilla entities using `minecraft:peek`

- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
