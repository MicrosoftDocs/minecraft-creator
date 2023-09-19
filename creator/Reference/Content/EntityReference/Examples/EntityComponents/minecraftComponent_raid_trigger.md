---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:raid_trigger
description: "A reference document detailing the 'raid_trigger' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:raid_trigger

`minecraft:raid_trigger` attempts to trigger a raid at the entity's location.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| triggered_event| *not set*| String | Event to run when a raid is triggered. |

## Example

```json
"minecraft:raid_trigger":{
    "triggered_event": "minecraft:prepare_for_war",
}
```

## Vanilla entities examples

### player

```json
"minecraft:raid_trigger": {
        "minecraft:raid_trigger": {
          "triggered_event": {
            "event": "minecraft:remove_raid_trigger",
            "target": "self"
          }
        },
        "minecraft:spell_effects": {
          "remove_effects": "bad_omen"
        }
      }
```

## Vanilla entities using `minecraft:raid_trigger`

- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
