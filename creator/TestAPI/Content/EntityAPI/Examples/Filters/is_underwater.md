---
author: v-josjones
ms.author: v-josjones
title: is_underwater
ms.prod: gaming
---

# is_underwater

Returns true when the subject entity is under water.

> [!IMPORTANT]
> An entity is considered underwater if it is completely submerged in water blocks.

## Parameters

> [!Note]
> `is_underwater` does **not** require any parameters to work properly. It can be used as a standalone filter.

`is_underwater` can also use `subject`, `operator` and `value` parameters.

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

### value

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |true |Boolean |(Optional) true or false. |

## Example

### Full

```json
{ "test": "is_underwater", "subject": "self", "operator": "equals", "value": "true"}
```

### Short (using Defaults)

```json
{ "test": "is_underwater" }
```

## Vanilla Mob examples

### stray

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/stray.json" range="29-50":::

### wolf

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/wolf.json" range="121-174":::

## Vanilla Mobs using `is_underwater`

- [husk](../../../../Source/VanilliaFilterPack/entities/husk.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)