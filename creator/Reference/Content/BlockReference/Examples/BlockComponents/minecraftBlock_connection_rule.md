---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:connection_rule"
description: "Describes the minecraft:connection_rule block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:connection_rule

Defines whether other blocks such as fences, walls, bars, and glass panes are allowed to connect to this block.

> [!Note]
> Lets a custom block control whether other blocks with connection behavior (fences, walls, bars, glass panes) may visually connect to it. Released alongside the new `minecraft:has_fence_connections` VanillaBlockTag.

> [!Note]
> Available without the Upcoming Creator Features experimental toggle for block format versions 1.26.0 or higher.

> [!Note]
> This item requires a format version of at least 1.21.130.


## Block Connection Rule Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| accepts_connections_from | all | [Accepts Connections From](#accepts-connections-from-choices) choices | The type of block allowed to connect to this block. Note that the "only_fences" option allows connections from all Vanilla fences excluding NetherBrick. | Block Red Shrub: `"none"` | 
| enabled_directions | [south, north, east, west] | [Enabled Directions](#enabled-directions-choices) choices | The cardinal directions that connection is enabled for. Note that if "none" is specified for "accepts_connections_from", this field will not be used. |  | 

### Accepts Connections From choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| all | All | |
| none | None | |
| only_fences | Only fences | |

### Enabled Directions choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| east | East | |
| north | North | |
| south | South | |
| west | West | |

## Samples

#### [Block Red Shrub](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/red_shrub.block.json)


```json
"minecraft:connection_rule": {
  "accepts_connections_from": "none"
}
```
