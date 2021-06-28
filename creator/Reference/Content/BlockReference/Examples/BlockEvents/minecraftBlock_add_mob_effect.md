---
author: v-josjones
ms.author: v-josjones
title: add_mob_effect
ms.prod: gaming
---

# add_mob_effect

`add_mob_effect` is an Event Response that applies a mob effect to a target.

## Extra Parameters

`add_mob_effect` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|amplifier| 0| Integer|  The amplifier for the mob effect. |
|duration| 0.0| Decimal|  The duration of the mob effect. |
|effect|*not set* | String|  The mob effect to apply. |
|target| self| Minecraft Filter| The target context to execute against. |

## Example

```json
"add_mob_effect":{
    "origin": [-8.0, 0.0, -8.0],
    "size": [16.0,16.0,16.0],
}
```
