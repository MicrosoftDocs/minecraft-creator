---
author: mammerla
ms.author: mikeam
title: Entity Documentation - bool_property
description: "A reference document detailing the 'bool_property' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - bool_property

Returns true when the `bool` entity property matches the value provided.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| domain| *not set* |String | (Required) The property name to look for. |
| operator|equals |String | (Optional) The comparison to apply with 'value'.|
| value| true| Boolean | (Optional) true or false. |

### subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging entity involved with the interaction. |
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
{ "test": "bool_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "true" }
```

### Short (using Defaults)

```json
{ "test": "bool_property", "domain": "minecraft:can_climb" }
```

## Vanilla entity examples

No entities currently use `bool_property`

## Vanilla entities using `bool_property`

No entities currently use `bool_property`
