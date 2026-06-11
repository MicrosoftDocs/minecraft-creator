---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:pool_element_feature"
description: "Describes the minecraft:pool_element_feature jigsaw json"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:pool_element_feature

Pool element that places a Feature (from the Features Reference) as part of a Jigsaw Structure, instead of placing a structure template. Useful for inserting procedurally generated decorations such as trees, plants, or ore patches into jigsaw layouts.


## Feature Pool Element Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| element_type | *not set* | [Element Type](#element-type-choices) choices | Must be 'minecraft:feature_pool_element' for this element variant. | 
| feature | *not set* | String | Identifier of the Feature to place when this element is chosen. Example: 'minecraft:eyeblossom_feature'. | 
| projection | rigid | [Projection](#projection-choices) choices | How the feature projects onto terrain. | 

### Element Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:feature_pool_element | Feature Pool Element | |

### Projection choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| rigid | Rigid | Placed without height adjustment.|
| terrain_matching | Terrain Matching | Placed relative to terrain height.|