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

> [!Note]
> In format version 1.26.30, the `snow_log_no_collision` value for `precipitation_behavior` was renamed to `snowlogging` (the legacy value still parses but is deprecated). Snow logging itself requires `format_version` 1.21.120 or newer.

> [!Note]
> The `snow_log_no_collision` value for `precipitation_behavior` (which lets custom blocks be covered by snow) was first added in 1.26.20 under the Upcoming Creator Features experiment, then renamed to `snowlogging` in 1.26.30.

> [!Note]
> This item requires a format version of at least 1.21.120.


## Block Precipitation Interactions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| precipitation_behavior | accumulate snow | [Precipitation Behavior](#precipitation-behavior-choices) choices | What behavior should the block have. Possible values: obrain, obstruct_rain_accumulate_snow, snowlogging, and none | Block Red Shrub: `"snowlogging"`, Shelf Mushroom Block: `"none"` | 

### Precipitation Behavior choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| none | None | |
| obstruct_rain | Obstruct rain | |
| obstruct_rain_accumulate_snow | Obstruct rain accumulate snow | |
| snowlogging | Snowlogging | |

## Samples

#### [Block Red Shrub](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/red_shrub.block.json)


```json
"minecraft:precipitation_interactions": {
  "precipitation_behavior": "snowlogging"
}
```

#### [Shelf Mushroom Block](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/shelf_mushroom_block.json)


```json
"minecraft:precipitation_interactions": {
  "precipitation_behavior": "none"
}
```
