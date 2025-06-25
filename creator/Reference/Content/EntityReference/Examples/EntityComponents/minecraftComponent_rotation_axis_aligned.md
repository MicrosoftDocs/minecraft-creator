---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:rotation_axis_aligned"
description: "Describes the minecraft:rotation_axis_aligned entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:rotation_axis_aligned

Causes the entity to automatically rotate to align with the nearest cardinal direction based on its current facing direction.
Combining this with the "minecraft:body_rotation_blocked" component will cause the entity's body to align with the nearest cardinal direction and remain fixed in that orientation, regardless of changes in its facing direction.


## Samples

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:rotation_axis_aligned": {}
```
