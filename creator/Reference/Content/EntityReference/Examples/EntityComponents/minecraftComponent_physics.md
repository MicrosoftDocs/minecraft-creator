---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:physics"
description: "Describes the minecraft:physics entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:physics

Defines physics properties of an actor, including if it is affected by gravity or if it collides with objects.


## Physics Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| has_collision | true | Boolean true/false | Whether or not the entity collides with things. |  | 
| has_gravity | true | Boolean true/false | Whether or not the entity is affected by gravity. |  | 
| push_towards_closest_space | false | Boolean true/false | Whether or not the entity should be pushed towards the nearest open area when stuck inside a block. |  | 

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

#### [Armor Stand](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json)


```json
"minecraft:physics": {}
```
