---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:horse.jump_strength
description: "A reference document detailing the 'jump_strength' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:jump_strength

`minecraft:horse.jump_strength` determines the jump height for a horse or similar entity, like a donkey.

## Parameters

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| value| *not set**| Integer or [range]| Value of jump strength the entity has when spawned. |

### value

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| range_min| *not set*| Integer| Defines the minimum strength level. |
| range_max| *not set*| Integer| Defines the maximum strength level. |

## Example

```json
"minecraft:horse.jump_strength": {
        "value": {
          "range_min": 0.4,
          "range_max": 1.0
        }
      }
```

## Vanilla entities examples

### donkey

```json
"minecraft:horse.jump_strength": {
        "value": 0.5
      }
```

### horse

```json
"minecraft:horse.jump_strength": {
        "value": {
          "range_min": 0.4,
          "range_max": 1.0
        }
      }
```

### mule

```json
"minecraft:horse.jump_strength": {
        "value": 0.5
      }
```

## Vanilla entities using `minecraft:horse.jump_strength`

- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
