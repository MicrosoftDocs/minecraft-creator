---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - die
ms.prod: gaming
---

# Block Documentation - die

`die` is an Event Response that will kill a target.

## Extra Parameters

`die` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[target](../../../EntityReference/Examples/FilterList.md)| self| Minecraft Filter| The target context to execute against. |

## Example

```json
"die":{
    "target" : {"test": "random_chance", "value": "1"} //50% chance
}
```
