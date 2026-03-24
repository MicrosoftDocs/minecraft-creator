---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:custom_hit_test"
description: "Describes the minecraft:custom_hit_test entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:custom_hit_test

List of hitboxes for melee and ranged hits against the entity.


## Custom Hit Test Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| hitboxes | *not set* | Array of [Hitboxes](#hitboxes) items | List of hitboxes for melee and ranged hits against the entity. | Hoglin: `[{"width":1,"height":0.85,"pivot":[0,0.5,0]}]`, `[{"width":2,"height":1.75,"pivot":[0,1,0]}]`, Zoglin: `[{"height":1.75,"pivot":[0,1,0],"width":2}]`, `[{"height":0.85,"pivot":[0,0.5,0],"width":1}]` | 

### Hitboxes

#### Hitbox Entry Properties

**JSON path:** `hitboxes`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| height | *not set* | Decimal number | Height of the hitbox. | 
| pivot | *not set* | x, y, z coordinate array | Pivot point of the hitbox. | 
| width | *not set* | Decimal number | Width of the hitbox. | 

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

#### [Zoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zoglin.json)

At /minecraft:entity/component_groups/zoglin_adult/minecraft:custom_hit_test/: 

```json
"minecraft:custom_hit_test": {
  "hitboxes": [
    {
      "height": 1.75,
      "pivot": [
        0,
        1,
        0
      ],
      "width": 2
    }
  ]
}
```

At /minecraft:entity/component_groups/zoglin_baby/minecraft:custom_hit_test/: 

```json
"minecraft:custom_hit_test": {
  "hitboxes": [
    {
      "height": 0.85,
      "pivot": [
        0,
        0.5,
        0
      ],
      "width": 1
    }
  ]
}
```
