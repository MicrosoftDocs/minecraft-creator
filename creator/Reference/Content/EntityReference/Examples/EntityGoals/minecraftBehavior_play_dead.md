---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:behavior.play_dead
ms.prod: gaming
---

# minecraft:behavior.play_dead

`minecraft:behavior.play_dead` allows the mob to play dead when attacked by other entities. When playing dead, other entities will not target this mob.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| play_dead | True | Boolean | Allows this mob to pretend to be dead to avoid being targeted by attackers. |
| duration | 1.0 | Decimal | The amount of time in seconds that the mob will remain playing dead. |
| random_start_chance | 1.0 | Decimal | The likelihood that the mob will start to play dead upon taking damage. |
| force_below_heath | 0 | Integer | The amount of health at which the mob will start to play dead. |
| random_damage_range | [0 , 0] | Integer | The range of damage that may cause the mob to start playing dead. Damage taken below the minimum value will never cause the mob to start playing dead. Damage taken above the maximum value will always cause the mob to start playing dead. |
| damage_sources | *not set* | String | The list of Entity Damage Sources that will cause this mob to start playing dead. |
| apply_regeneration | false | Boolean | Whether the mob will receive the effect of CombatRegeneration while playing dead. |
| filter | *not set* | String | The list of other triggers that are required for the mob to start playing dead. |

## Example

```json
"minecraft:behavior.play_dead":{
    "play_dead": true,
    "duration": 10,
    "random_start_chance": ,
    "force_below_heath": 5,
    "random_damage_range": [2, 5],
    "damage_sources": "entity_attack",
    "apply_regeneration_": true
}
```

## Vanilla Mob examples

### axolotl

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/axolotl.json" range="211-228":::

## Vanilla Mobs using `minecraft:behavior.play_dead`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
