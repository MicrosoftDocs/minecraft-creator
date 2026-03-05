---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:equipment"
description: "Describes the minecraft:equipment entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:equipment

Sets the Equipment table to use for this Entity.


## Equipment Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| slot_drop_chance | *not set* | Array of strings | A list of slots with the chance to drop an equipped item from that slot. Can be an array of slot name strings or an array of objects with slot and drop_chance properties. | 
| slot_drop_chance (Slot Drop Chance Item) | *not set* | Array of [Slot Drop Chance (Slot Drop Chance Item)](#slot-drop-chance-slot-drop-chance-item) items |  | 
| table | *not set* | String | The file path to the equipment table, relative to the behavior pack's root. | 

### Slot Drop Chance (Slot Drop Chance Item)

#### Slot Drop Chance Item Properties

**JSON path:** `slot_drop_chance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| drop_chance | *not set* | Decimal number | The chance to drop the equipped item (0.0 to 1.0). | 
| slot | *not set* | String | The equipment slot name. | 

## Samples
