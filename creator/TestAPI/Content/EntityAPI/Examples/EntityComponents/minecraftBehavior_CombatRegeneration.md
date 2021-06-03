---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:behavior.ramAttack
ms.prod: gaming
---

# Name of Behavior

This component gives Regeneration I and removes Mining Fatigue from the mob that kills the Actor's attack target.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| regeneration_duration | 5 | Integer | The duration in seconds that the mob will gain Regeneration I. |
| apply_to_self | False | Boolean | Whether the mob will grant itself Combat Regeneration if it kills the target. |
| apply_to_family | False | Boolean | Whether the mob will grant mobs of the same type Combat Regeneration if they kill the target. |

## Example

```json
"minecraft:behavior.CombatRegeneration":{
    "regeneration_duration": 7,
    "apply_to_self": true,
    "apply_to_family": false,
}
```

## Vanilla Mob examples

### Goat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/axolotl.json"

## Vanilla Mobs using `ramAttack`

- [axolotl](Source/VanilliaBehaviorPack_Snippets/entities/axolotl.json)