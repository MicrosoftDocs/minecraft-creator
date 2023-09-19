---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:boss
description: "A reference document detailing the 'boss' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:boss

`minecraft:boss` defines the current state of the boss for updating the boss HUD.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| hud_range| 55| Integer| The max distance from the boss at which the boss's health bar appears on the screen. |
| name|*not set* | String| The name that displays above the boss's health bar. |
|should_darken_sky| Boolean| false| Whether the sky should darken in the presence of the boss. |

## Example

```json
"minecraft:boss":{
    "hud_range": 55,
    "name": "Spooky Boss!",
    "should_darken_sky": true
}
```

## Vanilla entities examples

### wither

```json
"minecraft:boss": {
    "should_darken_sky": true,
    "hud_range": 55
}
```

## Vanilla entities using `minecraft:boss`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
