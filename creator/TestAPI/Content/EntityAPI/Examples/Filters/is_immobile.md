---
author: v-josjones
ms.author: v-josjones
title: is_immobile
ms.prod: gaming
---

# is_immobile

Returns true if the subject entity is immobile. An entity is immobile if it lacks AI goals, has just changed dimensions or if it is a mob and has no health.

## Parameters

> [!Note]
> `is_immobile` does **not** require any parameters to work properly. It can be used as a standalone filter.

`is_immobile` can also use `subject`, `operator` and `value` parameters.


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

### value

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |true |Boolean |(Optional) true or false. |

## Example

### Full

```json
{ "test": "is_immobile", "subject": "self", "operator": "equals", "value": "true" }
```

### Short (using Defaults)

```json
{ "test": "is_immobile" }
```

## Vanilla Mob examples

No mobs currently use `is_immobile`.

## Vanilla Mobs using `is_immobile`

No mobs currently use `is_immobile`.
