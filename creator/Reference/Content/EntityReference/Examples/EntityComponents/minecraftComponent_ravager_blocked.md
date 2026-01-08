---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:ravager_blocked"
description: "Describes the minecraft:ravager_blocked entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:ravager_blocked

Defines the ravager's response to their melee attack being blocked.


## Ravager Blocked Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| knockback_strength | 3 | Decimal number | The strength with which blocking entities should be knocked back | Ravager: `3` | 
| reaction_choices | [ ] | Array of strings | A list of weighted responses to the melee attack being blocked | Ravager: `[{"weight":1,"value":{"event":"minecraft:become_stunned","target":"self"}},{"weight":1}]` | 

## Samples

#### [Ravager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ravager.json)


```json
"minecraft:ravager_blocked": {
  "knockback_strength": 3,
  "reaction_choices": [
    {
      "weight": 1,
      "value": {
        "event": "minecraft:become_stunned",
        "target": "self"
      }
    },
    {
      "weight": 1
    }
  ]
}
```
