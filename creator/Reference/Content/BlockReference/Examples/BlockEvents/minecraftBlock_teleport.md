---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - teleport
ms.prod: gaming
---

# Block Documentation - teleport

`teleport` is an Event Response that will teleport a target randomly around the destination point.

## Extra Parameters

`teleport` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|avoid_water| true| Boolean| Determines if the teleport avoids putting the target in water. |
|destination| [0.0, 0.0, 0.0]| Vector [a, b, c]| Origin destination of the teleport. |
|land_on_block| true| Boolean|  Determines if the teleport places the target on a block. |
|max_range| [8.0, 8.0, 8.0]| Vector [a, b, c]|  Max range the target can teleport relative to the origin destination. |
|[target](../../../EntityReference/Examples/FilterList.md)| self| Minecraft Filter|  The target context to execute against. |


## Example

```json
"teleport":{
    "avoid_water" : true,
    "destination" : [0.0, 0.0, 0.0],
    "land_on_block" : true,
    "max_range" : [8.0, 8.0, 8.0],
    "target" : { "test": "has_damage", "subject": "self", "operator": "equals", "value": "suffocating" }
}
```
