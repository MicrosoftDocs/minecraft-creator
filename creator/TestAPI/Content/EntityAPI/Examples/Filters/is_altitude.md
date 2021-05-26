---
author: v-josjones
ms.author: v-josjones
title: is_altitude
ms.prod: gaming
---

# is_altitude

Tests the current altitude against a provided value.

0 = bedrock elevation.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Integer |(Required) The altitude value to compare with. |

`is_altitude` can also use `subject` and `operator` parameters but they are optional.

### subject

| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |

### operator

| Options| Description |
|:-----------:|:-----------:|
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
{ "test": "is_altitude", "subject": "self", "operator": "equals", "value": "0" }
```

### Short (using Defaults)

```json
{ "test": "is_altitude", "value": "0" }
```

## Vanilla Mob examples

No mobs currently use `is_altitude`.

## Vanilla Mobs using `is_altitude`

No mobs currently use `is_altitude`.
