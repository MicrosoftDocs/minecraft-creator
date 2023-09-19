---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - is_missing_health
description: "A reference document detailing the 'is_missing_health' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - is_missing_health

Tests if the subject is not at full health.

## subject

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

### value

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| operator | equals | String | (Optional) The comparison to apply with 'value'.|
| value | true | Boolean | (Optional) true or false. |

## Examples

### Full

```json
{ "test": "is_missing_health", "subject": "self", "operator": "equals", "value": "true" }
```

### Short (using Defaults)

```json
{ "test": "is_missing_health" }
```
