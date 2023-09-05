---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:damage_over_time
description: "A reference document detailing the 'damage_over_time' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:damage_over_time

`minecraft:damage_over_time` applies a defined amount of damage to the entity at specified intervals.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| damage_per_hurt| 1| Integer| Amount of damage caused each hurt. |
|time_between_hurt| 0.0| Decimal| Time in seconds between damage. |

## Example

```json
"minecraft:damage_over_time":{
    "damage_per_hurt": 1,
    "time_between_hurt": 0.0
}
```

## Vanilla entities examples

### axolotl

```json
"minecraft:damage_over_time": {
    "damage_per_hurt": 1,
    "time_between_hurt": 0
}
```

## Vanilla entities using `minecraft:damage_over_time`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
