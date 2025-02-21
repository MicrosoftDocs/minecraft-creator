---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:boss"
description: "Describes the minecraft:boss entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:boss

Defines the current state of the boss for updating the boss HUD.


## Boss Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| hud_range | 55 | Integer number | The max distance from the boss at which the boss's health bar is present on the players screen. | Ender Dragon: `125`, Wither: `55` | 
| name | 55 | String | The name that will be displayed above the boss's health bar. |  | 
| should_darken_sky | false | Boolean true/false | Whether the sky should darken in the presence of the boss. | Wither: `true` | 

## Samples

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:boss": {
  "should_darken_sky": false,
  "hud_range": 125
}
```

#### [Wither](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither.json)


```json
"minecraft:boss": {
  "should_darken_sky": true,
  "hud_range": 55
}
```
