---
author: mammerla
ms.author: mikeam
title: Entity Documentation - is_baby
description: "A reference document detailing the 'is_baby' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - is_baby

Returns `true` when the subject entity is a baby.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Required) Name of the block to look for. |
|operator| equals| String| (Optional) The comparison to apply with 'value'.|
|subject| self| String| (Optional) The subject of this filter test.|
|value| true|Boolean|  (Optional) true or false. |

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

## Examples

### Full

```json
{ "test": "is_baby", "subject": "self", "operator": "equals", "value": "true" }
```

### Short (using Defaults)

```json
{ "test": "is_baby" }
```

## Vanilla entities examples

### Fox

```json
{ "test": "is_block", "subject": "block", "value": "minecraft:sweet_berry_bush" }
```
