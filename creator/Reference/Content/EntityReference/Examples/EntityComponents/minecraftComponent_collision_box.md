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


## Entity Collision Box Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| height | 1.7999999523162842 | Decimal number | Height of the collision box in blocks. A negative value will be assumed to be 0. Value must be >= -100000000. Value must be <= 100000000. | Allay: `0.6`, Armor Stand: `1.975`, Arrow: `0.25` | 
| width | 0.6000000238418579 | Decimal number | Width and Depth of the collision box in blocks. A negative value will be assumed to be 0. Value must be >= -100000000. Value must be <= 100000000. | Allay: `0.35`, Armor Stand: `0.5`, Arrow: `0.25` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:collision_box": {
  "height": 0.6,
  "width": 0.35
}
```

#### [Armor Stand](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json)


```json
"minecraft:collision_box": {
  "height": 1.975,
  "width": 0.5
}
```

#### [Arrow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/arrow.json)


```json
"minecraft:collision_box": {
  "height": 0.25,
  "width": 0.25
}
```

#### [Bat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json)


```json
"minecraft:collision_box": {
  "height": 0.9,
  "width": 0.5
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:collision_box": {
  "height": 1.8,
  "width": 0.5
}
```
