---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:knockback_resistance
description: "A reference document detailing the 'knockback_resistance' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:knockback_resistance

`minecraft:knockback_resistance` compels an entity to resist being knocked backwards by a melee attack.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| value |*not set* | Float or object with value and max | The amount of knockback resistance that an entity has. |

## Example

```json
"minecraft:knockback_resistance": {
        "value": 0.6
      }
```

## Vanilla entities examples

### ender_dragon

```json
"minecraft:knockback_resistance": {
        "value": 100,
        "max": 100
      }
```

### warden

```json
"minecraft:knockback_resistance": {
        "value": 1.0
      }
```

## Vanilla entities using `minecraft:health`

- [armor_stand](../../../../Source/VanillaBehaviorPack_Snippets/entities/armor_stand.md)
- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
