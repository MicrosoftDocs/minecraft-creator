---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:behavior.ramAttack
ms.prod: gaming
---

# minecraft:behavior.ram_attack

This component allows the mob to search for a random target and, if a direct path exists between the mob and the target, it will perform a charge. If the attack hits, the target will be knocked back based on the mob's speed.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| ramAttack | True | Boolean | Allows this mob to damage a target by using a ram attack. |
| ramDistance |*not set* | Integer | The distance in blocks at which the mob will start to ram its target. |
| minRamDistance |*not set* | Integer | The minimum distance in blocks at which the mob can start a ram attack. |
| knockbackForce |*not set* | Decimal | The force of the knockback of the ram's attack. |
| babyKnockbackModifier |*not set* | Decimal | The modifier to knockback for baby mobs. |
| knockbackHeight |*not set* | Integer | The height in blocks of the knockback of the ram attack. |
| runSpeed |*not set* | Decimal | Sets the mob's speed when running toward the target. |
| ramSpeed |*not set* | Decimal | Sets the mob's speed when performing a ram attack toward the target. |
| preRamSound |*not set* | String | The sound to play when the mob is about to perform a ram attack. |
| ramImpactSound |*not set* | String | The sound to play when the mob hits the target with a ram attack .|
| trigger |*not set* | String | The event to trigger when attacking. |
| coolDownTimeRange |*not set* | Integer | The minimum and maximum cooldown time-range in seconds between each attempted ram attack. |

## Example

```json
"minecraft:behavior.ram_attack":{
    "ramAttack": true,
    "ramDistance": 5,
    "minRamDistance": 2.0,
    "knockbackForce": 10.0,
    "babyKnockbackModifier": 4,
    "knockbackHeight": 6,
    "runSpeed": [5, 10],
    "ramSpeed": ,
    "preRamSound": ,
    "ramImpactSound": ,
    "trigger": ,
    "coolDownTimeRange": ,
}
```

## Vanilla Mob examples

### Goat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/goat.json"

## Vanilla Mobs using `ramAttack`

- [goat](Source/VanilliaBehaviorPack_Snippets/entities/goat.json)