---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:custom_hit_test"
description: "Describes the minecraft:custom_hit_test entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:custom_hit_test

List of hitboxes for melee and ranged hits against the entity.


## Custom Hit Test Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| hitboxes | *not set* | Array of [Hitboxes](#hitboxes) items | List of hitboxes for melee and ranged hits against the entity. | 

### Hitboxes

#### Hitbox Entry Properties

**JSON path:** `hitboxes`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| height | *not set* | Decimal number | Height of the hitbox. | 
| pivot | *not set* | x, y, z coordinate array | Pivot point of the hitbox. | 
| width | *not set* | Decimal number | Width of the hitbox. | 

## Samples
