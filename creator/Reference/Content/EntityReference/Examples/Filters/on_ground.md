---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - on_ground
ms.prod: gaming
---

# Entity Documentation - on_ground

Returns true when the subject entity is on the ground.

## Parameters

> [!Note]
> `on_ground` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
>`on_ground` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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

## Examples

### Full

```json
{ "test": "on_ground", "subject": "self", "operator": "equals", "value": true}
```

### Short (using Defaults)

```json
{ "test": "on_ground" }
```

## Vanilla entities examples

### dolphin

```json
{
     "test": "on_ground",
    "operator": "==",
    "value": true
}
```

## Vanilla entities using `on_ground`

- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
