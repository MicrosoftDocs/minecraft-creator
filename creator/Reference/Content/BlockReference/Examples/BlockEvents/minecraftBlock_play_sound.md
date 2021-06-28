---
author: v-josjones
ms.author: v-josjones
title: play_sound
ms.prod: gaming
---

# play_sound

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
    "origin": [-8.0, 0.0, -8.0],
    "size": [16.0,16.0,16.0],
}
```
