---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:annotation.break_door
description: "A reference document detailing the 'annotation.break_door' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:annotation.break_door

`minecraft:annotation.break_door` compels an entity to break doors, assuming that flags are set up for the component to use in navigation.

>[!IMPORTANT]
> `minecraft:annotation.break_door` requires the entity's navigation component to have the parameter `can_break_doors` set to `true`.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|break_time| 12.0| Decimal| The time in seconds required to break through doors. |
|min_difficulty| hard| String| The minimum difficulty that the world must be on for the entity to break doors. |

## Example

```json
"minecraft:annotation.break_door":{
    "break_time": 12.0,
    "min_difficulty": "hard"
}
```

## Vanilla entities examples

### vindicator

```json
"minecraft:annotation.break_door": {
    "break_time": 30,
    "min_difficulty": "normal"
}
```

## Vanilla entities using `minecraft:annotation.break_door`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
