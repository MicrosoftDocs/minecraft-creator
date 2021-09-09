---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.silverfish_wake_up_friends
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.silverfish_wake_up_friends

`minecraft:behavior.silverfish_wake_up_friends` allows an entity to alert other entities of the same family to leave a stone block.

> [!NOTE]
> This behavior can only be used by the `silverfish` entity type.
> This behavior requires `minecraft:behavior.silverfish_merge_with_stone` to be set.

## Example

```json
"minecraft:behavior.silverfish_wake_up_friends":{
    "priority": 2,
}
```

## Vanilla entities examples

### silverfish

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/silverfish.json" range="32-34":::

## Vanilla entities using `minecraft:behavior.silverfish_wake_up_friends`

- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
