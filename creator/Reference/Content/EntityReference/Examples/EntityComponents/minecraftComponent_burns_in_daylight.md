---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:burns_in_daylight"
description: "Describes the minecraft:burns_in_daylight entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:burns_in_daylight

.


## Entity Burns In Daylight Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| protection_slot | slot.armor.head | String |  | Zombie Horse: `"slot.armor.body"` | 

## Samples

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:burns_in_daylight": {}
```

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:burns_in_daylight": false
```

#### [Zombie Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_horse.json)


```json
"minecraft:burns_in_daylight": {
  "protection_slot": "slot.armor.body"
}
```
