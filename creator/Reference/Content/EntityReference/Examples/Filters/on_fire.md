---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - on_fire
description: "A reference document detailing the 'on_fire' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - on_fire

Tests if the subject is on fire.

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
|value |true |Boolean |(Optional) true or false. |

## Examples

### Full

```json
{ "test": "on_fire", "subject": "self", "operator": "equals", "value": true}
```

### Short (using Defaults)

```json
{ "test": "on_fire" }
```
