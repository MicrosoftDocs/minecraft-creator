---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:body_rotation_axis_aligned"
description: "Describes the minecraft:body_rotation_axis_aligned entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:body_rotation_axis_aligned

Causes the entity's body to automatically rotate to align with the nearest cardinal direction based on its current facing direction.
Combining this with the "minecraft:body_rotation_blocked" component will cause the entity to align to the nearest cardinal direction and remain fixed in that orientation, regardless of future changes in its facing direction.


## Samples

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:body_rotation_axis_aligned": {}
```
