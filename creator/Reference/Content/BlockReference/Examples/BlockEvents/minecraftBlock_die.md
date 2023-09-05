---
author: mammerla
ms.author: mikeam
title: Block Documentation - die
description: "A reference document detailing the 'die' block event response"
ms.service: minecraft-bedrock-edition
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
