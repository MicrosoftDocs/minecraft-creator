---
author: v-josjones
ms.author: v-josjones
title: is_difficulty
ms.prod: gaming
---

# is_difficulty

Tests the current difficulty level of the game.

## Parameters


|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Required) The game's difficulty level to test |

### List of difficulty levels

Below are a list of difficulty levels that can be used for the `value` string.

| Options|
|:-----------|
| easy|  
| hard|  
| normal|  
| peaceful|  

`is_difficulty` can also use `subject` and `operator` parameters but they are optional.

### subject

| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |

### operator

| Options| Description |
|:-----------:|:-----------:|
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

## Vanilla Mob examples

### Mob 1

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/wither_skeleton.json" range="434-447":::

## Vanilla Mobs using is_difficulty

- [arrow](../../../../Source/VanillaBehaviorPack_Snippets/entities/arrow.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [cave spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [iron golem](../../../../Source/VanilliaFilterPack/entities/iron_golem.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wither skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)