---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:underwater_movement
description: "A reference document detailing the 'underwater_movement' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:underwater_movement

`minecraft:underwater_movement` defines the speed with which an entity can move through water.

## Parameters

|Name |Default Value  |Type  |Description  |
|:-----------|:-----------|:-----------|:-----------|
| value| *not set*| Decimal| Movement speed of the entity under water. |

## Example

```json
"minecraft:underwater_movement": {
        "value": 0.15
      }
```

## Vanilla entities examples

### frog

```json
"minecraft:underwater_movement": {
        "value": 0.15
      }
```

## Vanilla entities using `minecraft:water_movement`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [frog](../../../../Source/VanillaBehaviorPack_Snippets/entities/frog.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [tadpole](../../../../Source/VanillaBehaviorPack_Snippets/entities/tadpole.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
