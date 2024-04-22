---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - has_damaged_equipment
description: "A reference document detailing the 'has_damaged_equipment' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - has_damaged_equipment

Returns true when the subject entity receives the named damage type.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|domain|any |String | Tests for the presence of a damaged named item in the designated slot of a given entity.|

'Domain' options include:
- any
- armor
- feet
- hand
- head
- inventory
- leg
- torso

## Subject

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

## Example

### Full

```json
{ "test": "has_damaged_equipment", "subject": "self", "domain": "any", "operator": "equals", "value": "dirt" }
```

### Short (using Defaults)

```json
{ "test": "has_damaged_equipment", "value": "dirt" }
```
