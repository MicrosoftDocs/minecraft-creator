---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:ravager_blocked
description: "A reference document detailing the 'ravager_blocked' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:ravager_blocked

`minecraft:ravager_blocked` defines the ravager's response to their melee attack being blocked.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| knockback_strength| 3.0| Decimal| The strength with which blocking entities should be knocked back |
| reaction_choices| *not set*| List| A list of weighted responses to the melee attack being blocked |

## Example

```json
"minecraft:ravager_blocked":{
    "knockback_strength": 3.0,
    "reaction_choices": []
}
```

## Vanilla entities examples

### ravager

```json
"minecraft:ravager_blocked": {
        "knockback_strength": 3.0,
        "reaction_choices": [
          {
            "weight": 1,
            "value": {
              "event": "minecraft:become_stunned",
              "target": "self"
            }
          },
          {
            // Default, large knockback case
            "weight": 1
          }
        ]
      }
```

## Vanilla entities using `minecraft:ravager_blocked`

- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
