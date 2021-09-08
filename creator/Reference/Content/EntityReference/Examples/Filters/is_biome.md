---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - is_biome
ms.prod: gaming
---

# Entity Documentation - is_biome

Tests whether the Subject is currently in the named biome.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String | (Required) The Biome type to test|

### List of biomes

Below is a list of biome types that can be used for the `value` string.

| Options| Description |
|:-----------|:-----------|
| beach|  |
| desert|  |
| extreme_hills|  |
| flat|  |
| forest|  |
| ice|  |
| jungle|  |
| mesa|  |
| mushroom_island|  |
| ocean|  |
| plain|  |
| river|  |
| savanna|  |
| stone_beach|  |
| swamp|  |
| taiga|  |
| the_end|  |
| the_nether|  |

>[!Note]
>`is_biome` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "is_biome", "subject": "self", "operator": "equals", "value": "beach" }
```

### Short (using Defaults)

```json
{ "test": "is_biome", "value": "beach" }
```

## Vanilla entities examples

### cave_spider

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/cave_spider.json" range="285-287":::

## Vanilla entities using `is_biome`

- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [fishing_hook](../../../../Source/VanillaBehaviorPack_Snippets/entities/fishing_hook.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
