---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:precipitation_interactions"
description: "Describes the minecraft:precipitation_interactions block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:precipitation_interactions

Determines interactions the block will have with different precipitations. Three possible values: obrain, obstruct_rain_accumulate_snow and none.


## Block Precipitation Interactions Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| precipitation_behavior | accumulate snow | [Precipitation Behavior](#precipitation-behavior-choices) choices | What behavior should the block have. Possible values: obrain, obstruct_rain_accumulate_snow, snowlogging, and none | 

### Precipitation Behavior choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| none | None | |
| obstruct_rain | Obstruct rain | |
| obstruct_rain_accumulate_snow | Obstruct rain accumulate snow | |
| snowlogging | Snowlogging | |