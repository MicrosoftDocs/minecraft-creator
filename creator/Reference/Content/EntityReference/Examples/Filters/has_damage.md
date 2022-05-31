---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - has_damage
ms.prod: gaming
---

# Entity Documentation - has_damage

Returns true when the subject entity receives the named damage type.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String | The Damage type to test|

### List of Damage Types

Below is a list of damage types that can be used for the `value` string.

| Options| Description |
|:-----------|:-----------|
| anvil|  |
| attack|  |
| block_explosion|  |
| contact|  |
| drowning|  |
| entity_explosion|  |
| fall|  |
| falling_block|  |
| fatal| Any damage which kills the subject |
| fire|  |
| fire_tick|  |
| fly_into_wall|  |
| lava|  |
| magic|  |
| none|  |
| override|  |
| piston|  |
| projectile|  |
| sonic_boom|  |
| stalactite|  |
| stalagmite|  |
| starve|  |
| suffocation|  |
| suicide|  |
| thorns|  |
| void|  |
| wither|  |

> [!NOTE]
> `has_damage` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "has_damage", "subject": "self", "operator": "equals", "value": "fatal" }
```

### Short (using Defaults)

```json
{ "test": "has_damage", "value": "fatal" }
```

## Vanilla entities examples

### pillager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pillager.json" range="112-127":::

### villager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager.json" range="382-406":::

## Vanilla entities using `has_damage`

- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
