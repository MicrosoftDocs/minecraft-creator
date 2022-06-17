---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.dragonscanning
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.dragonscanning

`minecraft:behavior.dragonscanning` allows an entity to look around for a player to attack while in perch mode.

> [!NOTE]
> This behavior can only be used by the `ender_dragon` entity type.

## Example

```json
"minecraft:behavior.dragonscanning":{
    "priority": 3,
}
```

## Vanilla entities examples

### ender_dragon

```json
"minecraft:behavior.dragonscanning": {
          "priority": 2
        }
```

## Vanilla entities using `minecraft:behavior.dragonscanning`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
