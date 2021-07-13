---
author: v-josjones
ms.author: v-josjones
title: damage
ms.prod: gaming
---

# damage

`damage` is an Event Response that applies damage to a target.

## Extra Parameters

`damage` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|amount| 0| Integer|  The amount of damage to deal. |
|[target](../../../EntityReference/Examples/FilterList.md)| self| Minecraft Filter|  The target context to execute against. |
|[type](../../../EntityReference/Examples/Filters/has_damage.md#list-of-damage-types)|*not set* | String| The type of damage to deal. |

## Example

```json
"damage":{
    "amount" : 1,
    "target" : {"test": "in_lava"},
    "type" : "lava"
}
```
