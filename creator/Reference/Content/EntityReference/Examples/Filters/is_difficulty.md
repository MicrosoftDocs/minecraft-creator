---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - is_difficulty
ms.prod: gaming
---

# Entity Documentation - is_difficulty

Tests the current difficulty level of the game.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Required) The game's difficulty level to test |

### List of difficulty levels

Below is a list of difficulty levels that can be used for the `value` string.

| Options|
|:-----------|
| easy|
| hard|
| normal|
| peaceful|

>[!Note]
>`is_difficulty` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

### subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |

### operator

| Options| Description |
|:-----------|:-----------|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |

## Example

### Full

```json
{ "test": "is_difficulty", "subject": "self", "operator": "equals", "value": "normal" }
```

### Short (using Defaults)

```json
{ "test": "is_difficulty", "value": "normal" }
```

## Vanilla entities examples

### wither_skeleton

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wither_skeleton.json" range="436-449":::

## Vanilla entities using is_difficulty

- [arrow](../../../../Source/VanillaBehaviorPack_Snippets/entities/arrow.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
