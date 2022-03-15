---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - has_container_open
ms.prod: gaming
---

# Entity Documentation - has_container_open

Returns true when the subject Player entity has opened a container.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |true |Boolean |  (Optional) true or false. |

> [!NOTE]
> `has_container_open` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "has_container_open", "subject": "self", "operator": "equals", "value": true }
```

### Short (using Defaults)

```json
{ "test": "has_container_open" }
```

## Vanilla entities examples

### piglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/piglin.json" range="380-389":::

## Vanilla entities using `has_container_open`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
