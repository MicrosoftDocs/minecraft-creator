---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - has_nametag
ms.prod: gaming
---

# Entity Documentation - has_nametag

Returns true when the subject entity contains the named component.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String | (Required) The component name to look for |

### Nested Table

> [!NOTE]
> `has_nametag` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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

## Examples

### Full

```json
{ "test": "has_nametag", "subject": "self", "operator": "equals", "value": "minecraft:explode" }
```

### Short (using Defaults)

```json
{ "test": "has_nametag", "value": "minecraft:explode" }
```

## Vanilla entities examples

### zombie pigman



## Vanilla entities using `has_nametag`

