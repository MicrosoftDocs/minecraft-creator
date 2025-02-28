---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:is_baby"
description: "Describes the minecraft:is_baby entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:is_baby

Sets that this entity is a baby. This is used to set the is_baby value for use in query functions like Molang and Filters.


## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:is_baby": {}
```

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/play_schedule_villager/minecraft:behavior.play/friend_types/0/filters/all_of/1/: 

```json
"minecraft:is_baby": {"test":"is_baby","subject":"other","operator":"==","value":true}
```
