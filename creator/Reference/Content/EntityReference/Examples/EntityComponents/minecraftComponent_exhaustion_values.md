---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:exhaustion_values"
description: "Describes the minecraft:exhaustion_values entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:exhaustion_values

Defines how much exhaustion each player action should take.


## Exhaustion Values Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack | 0.1 | Decimal number | Amount of exhaustion applied when attacking. | Player: `0.1` | 
| damage | 0.1 | Decimal number | Amount of exhaustion applied when taking damage. | Player: `0.1` | 
| heal | 6 | Decimal number | Amount of exhaustion applied when healed through food regeneration. | Player: `6` | 
| jump | 0.05 | Decimal number | Amount of exhaustion applied when jumping. | Player: `0.05` | 
| lunge | 4 | Decimal number | Amount of exhaustion applied when triggering the lunge enchantment, multiplied by the enchantment level. | Player: `4` | 
| mine | 0.005 | Decimal number | Amount of exhaustion applied when mining. | Player: `0.005` | 
| sprint | 0.01 | Decimal number | Amount of exhaustion applied when sprinting. | Player: `0.1` | 
| sprint_jump | 0.2 | Decimal number | Amount of exhaustion applied when sprint jumping. | Player: `0.2` | 
| swim | 0.01 | Decimal number | Amount of exhaustion applied when swimming. | Player: `0.01` | 
| walk | 0 | Decimal number | Amount of exhaustion applied when walking. |  | 

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:exhaustion_values": {
  "heal": 6,
  "jump": 0.05,
  "sprint_jump": 0.2,
  "mine": 0.005,
  "attack": 0.1,
  "damage": 0.1,
  "walk": 0,
  "sprint": 0.1,
  "swim": 0.01,
  "lunge": 4
}
```
