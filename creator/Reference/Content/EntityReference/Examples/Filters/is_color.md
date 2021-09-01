---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - is_color
ms.prod: gaming
---

# Entity Documentation - is_color

Returns true if the subject entity is of the named color.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Required) The Palette Color to test |

### List of colors

Below is a list of color types that can be used for the `value` string.

| Options|
|:-----------|
| black|
| blue|
| brown|
| cyan|
| gray|
| green|
| light_blue|
| light_green|
| magenta|
| orange|
| pink|
| purple|
| red|
| silver|
| white|
| yellow|

>[!Note]
> `is_color` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

### subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
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
{ "test": "is_color", "subject": "self", "operator": "equals", "value": "white" }
```

### Short (using Defaults)

```json
{ "test": "is_color", "value": "white" }
```

## Vanilla entities examples

### evocation_illager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/evocation_illager.json" range="191-196":::

## Vanilla entities using is_color

- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
