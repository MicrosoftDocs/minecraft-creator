---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - in_water
ms.prod: gaming
---

# Entity Documentation - in_water

Returns true when the subject entity is in water.

## Parameters

> [!Note]
> `in_water` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
> `in_water` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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

### value

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |true |Boolean |(Optional) true or false. |

## Example

### Full

```json
{ "test": "in_water", "subject": "self", "operator": "equals", "value": true }
```

### Short (using Defaults)

```json
{ "test": "in_water" }
```

## Vanilla entities examples

### axolotl

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/axolotl.json" range="119":::

### ocelot

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ocelot.json" range="200-231":::

## Vanilla entities using `in_water`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
