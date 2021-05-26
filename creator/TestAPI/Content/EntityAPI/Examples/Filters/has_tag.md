---
author: v-josjones
ms.author: v-josjones
title: has_tag
ms.prod: gaming
---

# has_tag

Returns true if the subject entity has the tag provided.

## Parameters

> [!Note]
> `has_tag` does **not** require any parameters to work properly. It can be used as a standalone filter.

`has_tag` can also use `subject`, `operator` and `value` parameters.

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

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Optional) true or false. |

## Example

### Full

```json
{ "test": "has_tag", "subject": "self", "operator": "equals", "value": "" }
```

### Short (using Defaults)

```json
{ "test": "has_tag" }
```

## Vanilla Mob examples

No mobs currently use `has_tag`

## Vanilla Mobs using `has_tag`

No mobs currently use `has_tag`