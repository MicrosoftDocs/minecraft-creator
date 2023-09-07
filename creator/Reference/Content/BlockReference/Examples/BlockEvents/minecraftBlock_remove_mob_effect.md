---
author: mammerla
ms.author: mikeam
title: Block Documentation - remove_mob_effect
description: "A reference document detailing the 'remove_mob_effect' block event response"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - remove_mob_effect

`remove_mob_effect` is an Event Response that will remove a mob effect from a target.

## Extra Parameters

`remove_mob_effect` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|effect|*not set* | String|  The mob effect to remove. Use 'all' to remove all mob effects from target. |
|[target](../../../EntityReference/Examples/FilterList.md)| self| Minecraft Filter|  The target context to execute against. |

## Example

```json
"remove_mob_effect":{
    "effect" : "poison",
    "target" : "self"
}
```
