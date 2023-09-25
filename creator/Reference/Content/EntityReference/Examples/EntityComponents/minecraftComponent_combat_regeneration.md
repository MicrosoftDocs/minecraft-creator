---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:combat_regeneration
description: "A reference document detailing the 'combat_regeneration' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:combat_regeneration

`minecraft:combat_regeneration`adds Regeneration I and removes Mining Fatigue from the entity that kills the Actor's attack target.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| regeneration_duration | 5 | Integer | The duration in seconds that the entity will gain Regeneration I. |
| apply_to_self | False | Boolean | Whether the entity will grant itself Combat Regeneration if it kills the target. |
| apply_to_family | False | Boolean | Whether the entity will grant mobs of the same type Combat Regeneration if they kill the target. |

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