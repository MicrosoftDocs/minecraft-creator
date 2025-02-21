---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.restrict_open_door"
description: "Describes the minecraft:behavior.restrict_open_door ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.restrict_open_door

Allows the mob to stay indoors during night time.


## Restrict Open Door Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager: `5` | 

## Samples

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
"minecraft:behavior.restrict_open_door": {
  "priority": 5
}
```
