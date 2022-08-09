---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.scared
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.scared

`minecraft:behavior.scared` allows the a mob to become scared when the weather outside is thundering.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| sound_interval| 0| Integer| The interval in which a sound will play when active in a 1/delay chance to kick off. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.scared":{
    "sound_interval": 0
}
```