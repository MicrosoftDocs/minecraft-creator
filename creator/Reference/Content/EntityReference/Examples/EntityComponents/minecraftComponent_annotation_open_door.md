---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - minecraft:annotation.open_door
ms.prod: gaming
---

# Entity Documentation - minecraft:annotation.open_door

`minecraft:annotation.open_door` allows an entity to to open doors, assuming that that flags set up for the component to use in navigation.

>[!IMPORTANT]
> `minecraft:annotation.open_door` requires the entity's navigation component to have the parameter `can_open_doors` set to `true`.

## Example

```json
"minecraft:annotation.open_door":{
}
```

## Vanilla entities examples

### villager

```json
"minecraft:annotation.open_door": {
}
```

## Vanilla entities using `minecraft:annotation.open_door`

- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
