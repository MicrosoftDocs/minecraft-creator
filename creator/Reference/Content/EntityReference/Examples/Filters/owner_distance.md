---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - owner_distance
description: "A reference document detailing the 'owner_distance' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - owner_distance

Tests the distance between the subject and its owner. Returns false if there is no owner.

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
| value | *not set* | Decimal | A floating point value. |

## Examples

### Full

```json
{ "test": "owner_distance", "subject": "self", "operator": "equals", "value": 0.00}
```

### Short (using Defaults)

```json
{ "test": "owner_distance", "value": "0.00" }
```
