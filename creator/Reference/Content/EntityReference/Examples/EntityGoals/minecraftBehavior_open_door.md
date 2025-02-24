---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.open_door"
description: "Describes the minecraft:behavior.open_door ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.open_door

Allows the mob to open doors. Requires the mob to be able to path through doors, otherwise the mob won't even want to try opening them.


## Open Door Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| close_door_after | true | Boolean true/false | If true, the mob will close the door after opening it and going through it | Villager: `true` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager: `6` | 

## Samples

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
"minecraft:behavior.open_door": {
  "priority": 6,
  "close_door_after": true
}
```
