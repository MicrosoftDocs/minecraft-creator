---
author: v-josjones
ms.author: v-josjones
title: is_game_rule
ms.prod: gaming
---

# is_game_rule

Tests whether a named game rule is active.

## Parameters


|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|domain |*not set* |String |(Required) The Game Rule to test |

### List of Game Rules

Below are a list of game rules that can be used for the `value` string.



`is_game_rule` can also use `subject` , `operator` and `value` parameters but they are optional.

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
{ "test": "is_game_rule", "subject": "self", "operator": "equals", "value": "normal" }
```

### Short (using Defaults)

```json
{ "test": "is_game_rule", "value": "normal" }
```

## Vanilla example

### ender_pearl

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/ender_pearl.json" range="63-72":::

## Vanilla entities using `is_game_rule`

- [Ender Pearl](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_pearl.md)
- [TNT Minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)