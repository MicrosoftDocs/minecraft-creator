---
author: JimSeaman42
ms.author: mikeam
title: Block Documentation - damage
description: "A reference document detailing the 'damage' block event response"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - damage

`damage` is an event response that applies damage to a target.

## Extra Parameters

`damage` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|amount| 0| Integer| The amount of damage to deal. |
| mob_amount| 0 | Integer| The amount of damage to deal if held by an entity. |
|target| self| Minecraft Filter|  The target context to execute against. |
|[type](../../../EntityReference/Examples/Filters/has_damage.md#list-of-damage-types)|*not set* | String| The type of damage to deal. |

## Example

```json
"damage":{
    "amount" : 1,
    "target" : {"test": "player"},
    "type" : "lava"
}
```
