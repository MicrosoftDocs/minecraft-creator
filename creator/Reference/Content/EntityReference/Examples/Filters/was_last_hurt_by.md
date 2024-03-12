---
author: mammerla
ms.author: mikeam
title: Entity Documentation - was_last_hurt_by
description: "A reference document detailing the 'was_last_hurt_by' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - was_last_hurt_by

Tests if the subject is the last player who attacked the entity in the last 400 seconds, or the last mob to do so in the last 60 seconds.

## Parameters

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
| equals| (Default). Test for equality. |
| not| Test for inequality. |

### subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging entity involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| (Default.) The entity or object calling the test |
| target| The caller's current target. |

### value

| Options| Description |
|:-----------|:-----------|
| value| (Optional) true or false. |

## Example

### Full

```json
{ "test": "was_last_hurt_by", "subject": "self", "operator": "equals", "value": "true" }
```

### Short (using Defaults)

```json
{ "test": "was_last_hurt_by" }
```
