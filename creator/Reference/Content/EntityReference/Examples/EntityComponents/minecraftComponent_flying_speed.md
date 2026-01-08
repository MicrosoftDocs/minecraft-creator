---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:flying_speed"
description: "Describes the minecraft:flying_speed entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:flying_speed

Speed in Blocks that this entity flies at.


## Flying Speed Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | 0.02 | Decimal number | Flying speed in blocks per tick. | Allay: `0.1`, Bee: `0.15`, Ender Dragon: `0.6` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:flying_speed": {
  "value": 0.1
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:flying_speed": {
  "value": 0.15
}
```

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:flying_speed": {
  "value": 0.6
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)

At /minecraft:entity/component_groups/minecraft:baby/minecraft:flying_speed/: 

```json
"minecraft:flying_speed": {
  "value": 0.0833333
}
```

At /minecraft:entity/component_groups/minecraft:adult_mobile/minecraft:flying_speed/: 

```json
"minecraft:flying_speed": {
  "value": 0.016
}
```

At /minecraft:entity/component_groups/minecraft:adult_immobile/minecraft:flying_speed/: 

```json
"minecraft:flying_speed": {
  "value": 0
}
```
