---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:is_collidable"
description: "Describes the minecraft:is_collidable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:is_collidable

Allows other mobs to have vertical and horizontal collisions with this mob. For a collision to occur, both mobs must have a "minecraft:collision_box" component. This component can only be used on mobs and enables collisions exclusively between mobs.
Please note that this type of collision is unreliable for moving collidable mobs. It is recommended to use this component only in scenarios where the collidable mob remains stationary.
Collidable behavior is closely related to stackable behavior. While the "minecraft:is_collidable" component governs how other mobs interact with the component's owner, the "minecraft:is_stackable" component describes how an entity interacts with others of its own kind.


## Samples

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)


```json
"minecraft:is_collidable": {}
```
