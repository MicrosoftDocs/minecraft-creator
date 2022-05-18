---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:combat_regeneration
ms.prod: gaming
---

# Entity Documentation - minecraft:combat_regeneration

`minecraft:combat_regeneration`gives Regeneration I and removes Mining Fatigue from the mob that kills the Actor's attack target.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| regeneration_duration | 5 | Integer | The duration in seconds that the mob will gain Regeneration I. |
| apply_to_self | False | Boolean | Whether the mob will grant itself Combat Regeneration if it kills the target. |
| apply_to_family | False | Boolean | Whether the mob will grant mobs of the same type Combat Regeneration if they kill the target. |

## Example

```json
"minecraft:combat_regeneration":{
    "regeneration_duration": 7,
    "apply_to_self": true,
    "apply_to_family": false
}
```

## Vanilla Mob examples

### axolotl

```json
"minecraft:combat_regeneration": {}
```

## Vanilla Mobs using `minecraft:combat_regeneration`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)