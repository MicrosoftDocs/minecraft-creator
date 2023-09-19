---
author: mammerla
ms.author: mikeam
title: Entity Documentation - has_property
description: "A reference document detailing the 'has_property' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - has_property

Tests for the presence of a property of the subject entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| subject| self|String| (Optional) The subject of this filter test.|
| operator|equals |String | (Optional) The comparison to apply with 'value'.|
| value|*not set* |String | (Required) The property name to look for. |

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
{ "test": "has_property", "subject": "self", "operator": "equals", "value": "minecraft:can_climb" }
```

### Short (using Defaults)

```json
{ "test": "has_property", "value": "minecraft:can_climb" }
```

## Vanilla entity examples

No entities currently use `has_property`

## Vanilla entities using `has_property`

No entities currently use `has_property`
