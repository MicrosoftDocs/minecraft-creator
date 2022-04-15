---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - has_silk_touch
ms.prod: gaming
---

## has_silk_touch

Tests if the subject is holding an item with silk touch.

| Type| Name| Default| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| operator| equals| (Optional) The comparison to apply with 'value'.<br/>| Options| Description |
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


 |
| String| subject| self| (Optional) The subject of this filter test.<br/>| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |


 |
| Boolean| value| true| (Optional) true or false. |


**Examples**

**Full..**
```
{ "test": "has_silk_touch", "subject": "self", "operator": "equals", "value": "true" }
```

**Short (using Defaults)..**
```
{ "test": "has_silk_touch" }
```

## Vanilla entities examples

### bee
```
{
    "test": "has_silk_touch",
    "subject": "other",
    "value": false
}
```


## Vanilla entities using Filter `has_silk_touch`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
