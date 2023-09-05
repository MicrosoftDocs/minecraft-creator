---
author: mammerla
ms.author: mikeam
title: Entity Documentation - is_block
description: "A reference document detailing the 'is_block' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - is_block

Returns true when the block has the given name.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Required) Name of the block to look for. |

>[!Note]
> `is_block` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

### subject

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

## Example

### Full

```json
{ "test": "is_block", "subject": "self", "operator": "equals", "value": " " }
```

### Short (using Defaults)

```json
{ "test": "is_block", "value": "" }
```

## Vanilla entities examples

### Fox

```json
{ "test": "is_block", "subject": "block", "value": "minecraft:sweet_berry_bush" }
```

## Vanilla entities using `is_block`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
