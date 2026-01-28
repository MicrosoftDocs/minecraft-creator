---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:seed"
description: "Describes the minecraft:seed item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:seed

Sets the item as a seed that can be planted to grow crops. When used on valid ground, the seed will place the specified crop block.

> [!Note]
> This item requires a format version of at least 1.10.0.


## Seed Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| crop_result | *not set* | String | The block identifier that will be placed when the seed is planted (e.g., 'wheat', 'beetroot', 'cave_vines'). | Beetroot Seeds: `"beetroot"`, Glow Berries: `"cave_vines"` | 
| plant_at | *not set* | Array of strings | Array of block identifiers that this seed can be planted on or attached to. If not specified, standard farmland rules apply. | Glow Berries: `["cave_vines","cave_vines_head_with_berries"]` | 
| plant_at_any_solid_surface | false | Boolean true/false | Deprecated - no longer in use. If true, the seed can be planted on any solid surface, not just farmland or specified blocks. This property was deprecated and removed in versions after 1.18. This property no longer works after format versions of at least 1.19.0. This item requires a format version of at least 1.16.0. This property was available in versions 1.16.0 through 1.18.x for items like glow berries, but has been removed in later versions. | Glow Berries: `true` | 
| plant_at_face | *not set* | String from a list of choices | Deprecated - no longer in use. The face of a block where this seed can be planted. Values: 'UP' for top of blocks (normal crops), 'DOWN' for bottom (hanging plants like glow berries). This property was deprecated and removed in versions after 1.18. This property no longer works after format versions of at least 1.19.0. This item requires a format version of at least 1.16.0. This property was available in versions 1.16.0 through 1.18.x for items like glow berries, but has been removed in later versions. | Glow Berries: `"DOWN"` | 

## Samples

#### [Beetroot Seeds](vanilla_data/behavior_packs/vanilla/items/beetroot_seeds.json)


```json
"minecraft:seed": {
  "crop_result": "beetroot"
}
```

#### [Glow Berries](vanilla_data/behavior_packs/vanilla_1.17.0/items/glow_berries.json)


```json
"minecraft:seed": {
  "crop_result": "cave_vines",
  "plant_at": [
    "cave_vines",
    "cave_vines_head_with_berries"
  ],
  "plant_at_any_solid_surface": true,
  "plant_at_face": "DOWN"
}
```
