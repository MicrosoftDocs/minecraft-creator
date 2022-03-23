---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:raid_trigger
ms.prod: gaming
---

# Entity Documentation - minecraft:raid_trigger

`minecraft:raid_trigger` attempts to trigger a raid at the entity's location.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| triggered_event| *not set*| String | Event to run we attempt to trigger a raid on the village. |

## Example

```json
"minecraft:raid_trigger":{
    "triggered_event": "minecraft:prepare_for_war",
}
```

## Vanilla entities examples

### player

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/player.json" range="36-41":::

## Vanilla entities using `minecraft:raid_trigger`

- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)