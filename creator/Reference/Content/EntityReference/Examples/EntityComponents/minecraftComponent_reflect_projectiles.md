---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:reflect_projectiles"
description: "Describes the minecraft:reflect_projectiles entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:reflect_projectiles

[EXPERIMENTAL] Allows an entity to reflect projectiles.


## Reflect Projectiles Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| azimuth_angle | 0 | String | [EXPERIMENTAL] A Molang expression defining the angle in degrees to add to the projectile's y axis rotation. | Breeze: `"180.0 + Math.random(-20.0, 20.0)"` | 
| elevation_angle | 0 | String | [EXPERIMENTAL] A Molang expression defining the angle in degrees to add to the projectile's x axis rotation. |  | 
| reflected_projectiles | *not set* | Array of strings | [EXPERIMENTAL] An array of strings defining the types of projectiles that are reflected when they hit the entity. | Breeze: `["xp_bottle","thrown_trident","shulker_bullet","dragon_fireball","arrow","snowball","egg","fireball","splash_potion","ender_pearl","wither_skull","wither_skull_dangerous","small_fireball","lingering_potion","llama_spit","fireworks_rocket","fishing_hook"]` | 
| reflection_scale | 1 | String | [EXPERIMENTAL] A Molang expression defining the velocity scaling of the reflected projectile. Values below 1 decrease the projectile's velocity, and values above 1 increase it. | Breeze: `"0.5"` | 
| reflection_sound | reflect | String | [EXPERIMENTAL] A string defining the name of the sound event to be played when a projectile is reflected. "reflect" unless specified. |  | 

## Samples

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:reflect_projectiles": {
  "reflected_projectiles": [
    "xp_bottle",
    "thrown_trident",
    "shulker_bullet",
    "dragon_fireball",
    "arrow",
    "snowball",
    "egg",
    "fireball",
    "splash_potion",
    "ender_pearl",
    "wither_skull",
    "wither_skull_dangerous",
    "small_fireball",
    "lingering_potion",
    "llama_spit",
    "fireworks_rocket",
    "fishing_hook"
  ],
  "azimuth_angle": "180.0 + Math.random(-20.0, 20.0)",
  "reflection_scale": "0.5"
}
```
