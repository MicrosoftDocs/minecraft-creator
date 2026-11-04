---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:block_entity"
description: "Describes the minecraft:block_entity block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:block_entity

Adds per-instance metadata for this block.


## Block Entity Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| container | *not set* | [Container](#block-container) item | Adds a container to this block. | 
| dynamic_properties | false | Boolean true/false | Dynamic-properties can store and retrieve variables on a block via scripting, more at https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockdynamicpropertiescomponent. | 

### Block Container

#### Block Container Properties

**JSON path:** `container`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| show_ui_on_interaction | true | Boolean true/false | Determines whether interacting with this block opens its container UI. Defaults to true. When false, normal block interaction events can run instead. | 
| slot_count | *not set* | Integer number | Sets the number of slots in the container. Value must be >= 1. Value must be <= 54. | 
| title | *not set* | String | Optional container title, stored as a language file key or raw text. Must be nonempty and at most 256 characters. Value must have at least 1 items. Value must have at most 256 items. | 