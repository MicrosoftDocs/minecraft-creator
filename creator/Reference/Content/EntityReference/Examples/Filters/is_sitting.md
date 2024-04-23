---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - is_sitting
description: "A reference document detailing the 'is_sitting' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - is_sitting

Tests if the subject is sitting.

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

## operator

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
{ "test": "is_sitting", "subject": "self", "operator": "equals", "value": true}
```

### Short (using Defaults)

```json
{ "test": "is_sitting" }
```
