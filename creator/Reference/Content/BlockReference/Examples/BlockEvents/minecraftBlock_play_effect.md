---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - play_effect
ms.prod: gaming
---

# Block Documentation - play_effect

`play_effect` is an Event Response that will spawn a particle effect relative to the target position.

## Extra Parameters

`play_effect` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|data| 0| Integer| Particle data value. |
|effect|*not set* | String| The name of the particle effect to create. |
|[target](../../../EntityReference/Examples/FilterList.md)| self| Minecraft Filter|  The target context to execute against. |

## Example

```json
"play_effect":{
    "delta" : 0,
    "effect" : "particle_sparks",
    "target" : {"test": "random_chance", "value": "3"} //25%
}
```
