---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:peek
ms.prod: gaming
---

# Entity Documentation - minecraft:peek

`minecraft:peek` defines the entity's 'peek' behavior, defining the events that should be called during it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| on_close| *not set*| JSON Object | Event to call when the entity is done peeking. |
| on_open| *not set*| JSON Object | Event to call when the entity starts peeking. |
| on_target_open| *not set*| JSON Object | Event to call when the entity's target entity starts peeking. |

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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/shulker.json" range="140-150":::

## Vanilla entities using `minecraft:peek`

- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)