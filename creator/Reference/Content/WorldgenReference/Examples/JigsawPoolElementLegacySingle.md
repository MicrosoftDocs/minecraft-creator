---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:pool_element_legacy_single"
description: "Describes the minecraft:pool_element_legacy_single jigsaw json"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:pool_element_legacy_single

Variant of single_pool_element used for legacy-format structure files. Same field set as Single Pool Element; differs only in how the underlying structure file is interpreted.


## Legacy Single Pool Element Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| element_type | *not set* | [Element Type](#element-type-choices) choices | Must be 'minecraft:legacy_single_pool_element' for this element variant. | 
| location | *not set* | String | Path to the structure template file, relative to the behavior pack's structures folder. | 
| processors | *not set* | String | Identifier of the processor list to apply to this element, or an inline processor configuration. Optional. | 
| processors (as Object) | *not set* | Object | Inline processor configuration. | 
| projection | rigid | [Projection](#projection-choices) choices | How the element projects onto terrain. | 

### Element Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:legacy_single_pool_element | Legacy Single Pool Element | |

### Projection choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| rigid | Rigid | Placed without height adjustment.|
| terrain_matching | Terrain Matching | Placed relative to terrain height; blocks adjust along the Y axis to match the ground.|