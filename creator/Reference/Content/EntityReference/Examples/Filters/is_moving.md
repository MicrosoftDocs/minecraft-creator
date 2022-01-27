---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - is_moving
ms.prod: gaming
---

# Entity Documentation - is_moving

Returns true if the subject entity is moving.

## Parameters

> [!Note]
> `is_moving` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
> `is_moving` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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
{ "test": "is_moving", "subject": "self", "operator": "equals", "value": true }
```

### Short (using Defaults)

```json
{ "test": "is_moving" }
```

## Vanilla entities examples

### boat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/boat.json" range="187-194":::

### tnt_minecart

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/tnt_minecart.json" range="138-147":::

## Vanilla entities using `is_moving`

- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
- [chest_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/chest_minecart.md)
- [command_block_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/command_block_minecart.md)
- [hopper_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/hopper_minecart.md)
- [minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/minecart.md)
- [tnt_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)
