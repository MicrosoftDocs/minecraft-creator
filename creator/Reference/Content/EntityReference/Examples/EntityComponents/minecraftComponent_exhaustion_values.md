---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:exhaustion_values"
description: "Describes the minecraft:exhaustion_values entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:exhaustion_values

Defines how much exhaustion each player action should take.


## Entity Exhaustion Values Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack | 0.10000000149011612 | Decimal number | Amount of exhaustion applied when attacking. | Player: `0.1` | 
| damage | 0.10000000149011612 | Decimal number | Amount of exhaustion applied when taking damage. | Player: `0.1` | 
| heal | 6 | Decimal number | Amount of exhaustion applied when healed through food regeneration. | Player: `6` | 
| jump | 0.05000000074505806 | Decimal number | Amount of exhaustion applied when jumping. | Player: `0.05` | 
| lunge | 4 | Decimal number | Amount of exhaustion applied when triggering the Lunge enchantment, multiplied by the enchantment level. This item requires a format version of at least 1.21.130. | Player: `4` | 
| mine | 0.004999999888241291 | Decimal number | Amount of exhaustion applied when mining. | Player: `0.005` | 
| sprint | 0.009999999776482582 | Decimal number | Amount of exhaustion applied when sprinting. | Player: `0.1` | 
| sprint_jump | 0.20000000298023224 | Decimal number | Amount of exhaustion applied when sprint jumping. | Player: `0.2` | 
| swim | 0.009999999776482582 | Decimal number | Amount of exhaustion applied when swimming. | Player: `0.01` | 
| walk | 0 | Decimal number | Amount of exhaustion applied when walking. |  | 

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:exhaustion_values": {
  "sprint": 0.1,
  "jump": 0.05,
  "attack": 0.1,
  "damage": 0.1,
  "heal": 6,
  "lunge": 4,
  "sprint_jump": 0.2,
  "mine": 0.005,
  "swim": 0.01,
  "walk": 0
}
```
