---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - has_silk_touch
ms.prod: gaming
---

# Entity Documentation - has_silk_touch

Tests if the subject is holding an item with silk touch.

## Parameters
| Name| Default| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| operator| equals| String| (Optional) The comparison to apply with 'value'. See Comparator Parameters below. | 
| subject| self| String | (Optional) The subject of this filter test.| 
| subject| self|  String |(Optional) The subject of this filter test. See Subject Parameters below.|
| value| true | Boolean| (Optional) true or false. |


### Comparator Parameters
Options| Description |
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

### Subject Parameters
| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |

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


