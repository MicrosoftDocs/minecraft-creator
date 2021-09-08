---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - has_ability
ms.prod: gaming
---

# Entity Documentation - has_ability

Returns true when the subject entity has the named ability.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value | *not set* |String |The Ability type to test. The following abilities are usable to test for:|

- flyspeed
- flying
- instabuild
- invulnerable
- lightning
- mayfly
- mute
- noclip
- walkspeed
- worldbuilder

> [!NOTE]
> `has_ability` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "has_ability", "subject": "self", "operator": "equals", "value": "instabuild" }
```

### Short

```json
{ "test": "has_ability", "value": "instabuild" }
```

## Vanilla entities examples

### Shulker

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/shulker.json" range="185-199":::

## Vanilla entities using `has_ability`

- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
