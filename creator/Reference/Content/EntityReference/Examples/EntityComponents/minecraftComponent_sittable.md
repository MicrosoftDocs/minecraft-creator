---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:sittable"
description: "Describes the minecraft:sittable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:sittable

Defines the entity's 'sit' state.


## Sittable Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| sit_event | *not set* | Object | Event to run when the entity enters the 'sit' state. Can be an object with event and target properties, or a simple event string. | 
| sit_event (as String) | *not set* | String |  | 
| stand_event | *not set* | Object | Event to run when the entity exits the 'sit' state. Can be an object with event and target properties, or a simple event string. | 
| stand_event (as String) | *not set* | String |  | 

## Samples

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:sittable": {}
```
