---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:movement.sway
description: "A reference document detailing the 'movement.sway' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:movement.sway

`minecraft:movement.sway` compels the entity to sway side to side giving the impression it is swimming.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the entity can turn per tick. |
| sway_amplitude| 0.05| Decimal| Strength of the sway movement. |
| sway_frequency| 0.5 | Decimal| Multiplier for the frequency of the sway movement. |

## Example

```json
"minecraft:movement.sway":{
    "max_turn": 30.0,
    "sway_amplitude": 0.05,
    "sway_frequency": 0.5
}
```

## Vanilla entities examples

### fish

```json
"minecraft:movement.sway": {
        "sway_amplitude": 0.0
      }
```

## Vanilla entities using `minecraft:movement.sway`

- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
