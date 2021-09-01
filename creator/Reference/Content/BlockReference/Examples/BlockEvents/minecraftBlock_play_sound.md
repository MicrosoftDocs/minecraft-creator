---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - play_sound
ms.prod: gaming
---

# Block Documentation - play_sound

`play_sound` is an Event Response that will play a sound effect relative to the target position.

## Extra Parameters

`play_sound` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|sound|*not set* | String|  The name of the sound to play. |
|[target](../../../EntityReference/Examples/FilterList.md)| self| Minecraft Filter|  The target context to execute against. |

## Example

```json
"play_sound":{
    "sound" : "jumpscare",
    "target" : {"test": "random_chance", "value": "2"} //33%
}
```
