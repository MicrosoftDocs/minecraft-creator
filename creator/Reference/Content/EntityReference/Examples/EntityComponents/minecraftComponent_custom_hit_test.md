---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:custom_hit_test"
description: "Describes the minecraft:custom_hit_test entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:custom_hit_test

List of hitboxes for melee and ranged hits against the entity.


## Custom Hit Test Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| hitboxes | *not set* | Array of strings | Comma seperated list of hitboxes. | Hoglin: `[{"width":1,"height":0.85,"pivot":[0,0.5,0]}]`, `[{"width":2,"height":1.75,"pivot":[0,1,0]}]` | 

## Samples

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)

At /minecraft:entity/component_groups/minecraft:hoglin_baby/minecraft:custom_hit_test/: 

```json
"minecraft:custom_hit_test": {
  "hitboxes": [
    {
      "width": 1,
      "height": 0.85,
      "pivot": [
        0,
        0.5,
        0
      ]
    }
  ]
}
```

At /minecraft:entity/component_groups/minecraft:hoglin_adult/minecraft:custom_hit_test/: 

```json
"minecraft:custom_hit_test": {
  "hitboxes": [
    {
      "width": 2,
      "height": 1.75,
      "pivot": [
        0,
        1,
        0
      ]
    }
  ]
}
```
