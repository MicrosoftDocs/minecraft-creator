---
author: mammerla
ms.author: v-jimseaman
title: Entity Documentation - minecraft:heartbeat
ms.prod: gaming
---

# Entity Documentation - minecraft:heartbeat

`minecraft:heartbeat` defines the entity's heartbeat.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| interval| 1.00| Molang| A Molang expression defining the inter-beat interval in seconds. A value of zero or less means no heartbeat. |
| sound_event| heartbeat| String| Level sound event to be played as the heartbeat sound. |

## Example

```json
"minecraft:heartbeat": {
        "interval": "2.0 - math.clamp(query.anger_level / 80 * 1.5, 0, 1.5)"
      }
```

## Vanilla entities examples

### warden

```json
"minecraft:heartbeat": {
        "interval": "2.0 - math.clamp(query.anger_level / 80 * 1.5, 0, 1.5)"
      }
```

## Vanilla entities using `minecraft:heartbeat`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
