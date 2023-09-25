---
author: mammerla
ms.author: mikeam
title: Entity Documentation - int_property
description: "A reference document detailing the 'int_property' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - int_property

Returns true when the `int` actor property matches the value provided.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| domain| self|String| (Required) The property name to look for. |
| operator|equals |String | (Optional) The comparison to apply with 'value'.|
| subject| self| String| (Optional) The subject of this filter test. |
| value|*not set* |Integer | (Required) An integer value. |

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

## Examples

### Full

```json
{ "test": "int_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "0" }
```

### Short (using Defaults)

```json
{ "test": "int_property", "domain": "minecraft:can_climb", "value": "0" }
```

## Vanilla entity examples

No entities currently use `int_property`

## Vanilla entities using `int_property`

No entities currently use `int_property`
