---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:record"
description: "Describes the minecraft:record item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:record

Used by record items to play music.


## Item Components Record Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| comparator_signal | 1 | Integer number | Specifies signal strength for comparator blocks to use, from 1 - 13. | My Sword Singing: `1` | 
| duration | 0 | Decimal number | Specifies duration of sound event in seconds, float value. | My Sword Singing: `5` | 
| sound_event | undefined | String | Sound event type: 13, cat, blocks, chirp, far, mall, mellohi, stal, strad, ward, 11, wait, pigstep, otherside, 5, relic. | My Sword Singing: `"pre_ram.screamer"` | 

## Samples


```json
"minecraft:record": {
  "comparator_signal": 1,
  "duration": 5,
  "sound_event": "ambient.tame"
}
```

#### [My Sword Singing](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_singing.json)


```json
"minecraft:record": {
  "comparator_signal": 1,
  "duration": 5,
  "sound_event": "pre_ram.screamer"
}
```
