---
author: mammerla
ms.author: v-jimseaman
title: Entity Documentation - actor_health
ms.prod: gaming
---

# Entity Documentation - all_slots_empty

Returns true when the designated equipment location for the subject entity is completely empty.

### subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
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
| feet|
| hand|
| head|
| inventory|
| leg|
| torso|

## Examples

### Full

```json
{ "test": "all_slots_empty", "subject": "self", "operator": "equals", "value": "any" }
```

### Short (using Defaults)

```json
{ "test": "all_slots_empty" }
```
