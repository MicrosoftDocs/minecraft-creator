---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:behavior.ram_attack
ms.prod: gaming
---

# minecraft:behavior.ram_attack

`minecraft:behavior.ram_attack` allows the mob to search for a random target and, if a direct path exists between the mob and the target, it will perform a charge. If the attack hits, the target will be knocked back based on the mob's speed.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| ram_distance | 7 | Integer | The distance in blocks at which the mob will start to ram its target. |
| min_ram_distance | 4 | Integer | The minimum distance in blocks at which the mob can start a ram attack. |
| knockback_force | 5.0 | Decimal | The force of the knockback of the ram's attack. |
| baby_knockback_modifier | 4 | Integer | The modifier to knockback for baby mobs. |
| knockback_height | 0.1 | Decimal | The height in blocks of the knockback of the ram attack. |
| run_speed | 1.0 | Decimal | Sets the mob's speed when running toward the target. |
| ram_speed | 2.0 | Decimal | Sets the mob's speed when performing a ram attack toward the target. |
| pre_ram_sound | *not set* | String | The sound to play when the mob is about to perform a ram attack. |
| ram_impact_sound | *not set* | String | The sound to play when the mob hits the target with a ram attack .|
| trigger | *not set* | String | The event to trigger when attacking. |
| cooldown_range | [10.0, 20.0] | Decimal | The minimum and maximum cooldown time-range in seconds between each attempted ram attack. |

## Example

```json
"minecraft:behavior.ram_attack":{
    "ram_distance": 5,
    "min_ram_distance": 2.0,
    "knockback_force": 10.0,
    "baby_knockback_modifier": 4,
    "knockback_height": 0.1,
    "run_speed": 1.0,
    "ram_speed": 2.0 ,
    "pre_ram_sound": "pre_ram",
    "ram_impact_sound": "ram_impact" ,
    "cooldown_range": [10.0, 20.0] 
}
```

## Vanilla Mob examples

### goat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/goat.json" range="144-164":::

## Vanilla Mobs using `minecraft:behavior.ram_attack`

- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
