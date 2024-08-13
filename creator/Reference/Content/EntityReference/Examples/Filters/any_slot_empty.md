---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - any_slot_empty
description: "A reference document detailing the 'any_slot_empty' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - any_slot_empty

Returns true when the designated equipment location for the subject entity has any empty slot.

## subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging entity involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test. |
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

(Optional) The equipment location to test.

|Options|
|:-----------|
| any|
| armor|
| body|
| feet|
| hand|
| head|
| inventory|
| leg|
| torso|

## Examples

### Full

```json
{ "test": "any_slot_empty", "subject": "self", "operator": "equals", "value": "any" }
```

### Short (using Defaults)

```json
{ "test": "any_slot_empty" }
```
