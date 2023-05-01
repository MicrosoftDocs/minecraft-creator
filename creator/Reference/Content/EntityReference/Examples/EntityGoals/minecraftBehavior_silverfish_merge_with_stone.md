---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.silverfish_merge_with_stone
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.silverfish_merge_with_stone

`minecraft:behavior.silverfish_merge_with_stone` compels an entity to enter a stone block.

> [!NOTE]
> This behavior can only be used by the `silverfish` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.silverfish_merge_with_stone":{
    "priority": 2
}
```

## Vanilla entities examples

### silverfish

```json
"minecraft:behavior.silverfish_merge_with_stone": {
    "priority": 5
}
```

## Vanilla entities using `minecraft:behavior.silverfish_merge_with_stone`

- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
