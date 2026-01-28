---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:collision_box"
description: "Describes the minecraft:collision_box entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:collision_box

Sets the width and height of the Entity's collision box.


## Collision Box Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| height | 1 | Decimal number | Height of the collision box in blocks. A negative value will be assumed to be 0. | Allay: `0.6`, Armor Stand: `1.975`, Arrow: `0.25` | 
| width | 1 | Decimal number | Width of the collision box in blocks. A negative value will be assumed to be 0. Min value is -100000000.000000 Max value is 100000000.000000 | Allay: `0.35`, Armor Stand: `0.5`, Arrow: `0.25` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:collision_box": {
  "width": 0.35,
  "height": 0.6
}
```

#### [Armor Stand](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json)


```json
"minecraft:collision_box": {
  "width": 0.5,
  "height": 1.975
}
```

#### [Arrow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/arrow.json)


```json
"minecraft:collision_box": {
  "width": 0.25,
  "height": 0.25
}
```

#### [Bat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json)


```json
"minecraft:collision_box": {
  "width": 0.5,
  "height": 0.9
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:collision_box": {
  "width": 0.5,
  "height": 1.8
}
```
