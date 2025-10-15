---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:group_size"
description: "Describes the minecraft:group_size entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:group_size

Keeps track of entity group size in the given radius.


## Group Size Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | The list of conditions that must be satisfied for other entities to be counted towards group size. | Hoglin: `{"all_of":[{"test":"has_component","operator":"!=","value":"minecraft:is_baby"},{"test":"is_family","value":"hoglin"}]}`, Piglin: `{"all_of":[{"test":"has_component","operator":"not","value":"minecraft:is_baby"},{"test":"is_family","value":"piglin"}]}` | 
| radius | 16 | Decimal number | Radius from center of entity. | Hoglin: `32` | 

## Samples

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:group_size": {
  "radius": 32,
  "filters": {
    "all_of": [
      {
        "test": "has_component",
        "operator": "!=",
        "value": "minecraft:is_baby"
      },
      {
        "test": "is_family",
        "value": "hoglin"
      }
    ]
  }
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:group_size": {
  "radius": 32,
  "filters": {
    "all_of": [
      {
        "test": "has_component",
        "operator": "not",
        "value": "minecraft:is_baby"
      },
      {
        "test": "is_family",
        "value": "piglin"
      }
    ]
  }
}
```
