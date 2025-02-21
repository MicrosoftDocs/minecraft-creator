---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:physics"
description: "Describes the minecraft:physics entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:physics

Defines physics properties of an actor, including if it is affected by gravity or if it collides with objects.


## Physics Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| has_collision | true | Boolean true/false | Whether or not the object collides with things. |  | 
| has_gravity | true | Boolean true/false | Whether or not the entity is affected by gravity. |  | 
| push_towards_closest_space | false | Boolean true/false | Whether or not the entity should be pushed towards the nearest open area when stuck inside a block. | Player: `true` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:physics": {
  "has_gravity": false
}
```

#### [Area Effect Cloud](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/area_effect_cloud.json)


```json
"minecraft:physics": {
  "has_collision": false
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:physics": {}
```

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:physics": {
  "has_gravity": false,
  "has_collision": false
}
```

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:physics": {
  "push_towards_closest_space": true
}
```
