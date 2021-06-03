---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:behavior.ramAttack
ms.prod: gaming
---

# Name of Behavior

This component allows the mob to play dead when attacked by other entities. When playing dead, other entities will not target this mob.

## Parameters



|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| playDead | True | Boolean | Allows this mob to pretend to be dead to avoid being targeted by attackers. |
| duration | 1.0 | Decimal | The amount of time in seconds that the mob will remain playing dead. |
| randomStartChance | 1.0 | Decimal | The likelihood that the mob will start to play dead upon taking damage. |
| useBelowHeath | 0 | Integer | The amount of health at which the mob will start to play dead. |
| randomDamageRange | [0, 0] | Integer | The range of damage that may cause the mob to start playing dead. Damage taken below the minimum value will never cause the mob to start playing dead. Damage taken above the maximum value will always cause the mob to start playing dead. |
| damageCauses | | String | The list of Entity Damage Sources that will cause this mob to start playing dead. |
| applyRegen | False | Boolean | Whether the mob will receive the effect of CombatRegeneration while playing dead. |
| filter | | String | The list of other triggers that are required for the mob to start playing dead. |

## Example

```json
"minecraft:behavior.jumpToBlock":{
    "playDead": true,
    "duration": 10,
    "randomStartChance": ,
    "useBelowHeath": 5,
    "randomDamageRange": [2, 5],
    "damageCauses": ,
    "applyRegen": true,
    "filter": ,
}
```

## Vanilla Mob examples

### Goat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/axolotl.json"

## Vanilla Mobs using `ramAttack`

- [axolotl](Source/VanilliaBehaviorPack_Snippets/entities/axolotl.json)