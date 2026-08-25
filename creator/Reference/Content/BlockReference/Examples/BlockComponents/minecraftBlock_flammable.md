---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:flammable"
description: "Describes the minecraft:flammable block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:flammable

Describes the flammable properties for this block. If set to true, default values are used (catch: 5, destroy: 20). Note that the default value of lava_flammable is false for backwards compatibility. If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Flammable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| catch_chance_modifier | 5 | Integer number | A modifier affecting the chance that this block will catch flame when next to a fire. | Block Black Wool Double Slab: `30` | 
| destroy_chance_modifier | 20 | Integer number | A modifier affecting the chance that this block will be destroyed by flames when on fire. | Block Black Wool Double Slab: `60` | 
| lava_flammable | false | Boolean true/false | Whether the block can be ignited by adjacent lava. | Block Black Wool Double Slab: `"always"` | 

### catch_chance_modifier

A modifier affecting the chance that this block will catch flame when next to a fire. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire. For a "catch_chance_modifier" greater than 0, the fire will continue to burn until the block is destroyed (or it will burn forever if the "destroy_chance_modifier" is 0). If the "catch_chance_modifier" is 0, and the block is directly ignited, the fire will eventually burn out without destroying the block (or it will have a chance to be destroyed if "destroy_chance_modifier" is greater than 0). The default value of 5 is the same as that of Planks.

### destroy_chance_modifier

A modifier affecting the chance that this block will be destroyed by flames when on fire. Values are greater than or equal to 0, with a higher number meaning more likely to be destroyed by fire. For a "destroy_chance_modifier" of 0, the block will never be destroyed by fire, and the fire will burn forever if the "catch_chance_modifier" is greater than 0. The default value of 20 is the same as that of Planks.

### lava_flammable

Whether the block can be ignited by adjacent lava. Defaults to false for backwards compatibility; set to true to allow lava to set the block on fire the way it does Planks and other vanilla flammable blocks. This item requires a format version of at least 1.26.30.


## Samples

#### Block Fabricator


```json
"minecraft:flammable": {
  "destroy_chance_modifier": 20,
  "catch_chance_modifier": 5
}
```

#### Block Leaf Pile


```json
"minecraft:flammable": {
  "destroy_chance_modifier": 100,
  "catch_chance_modifier": 100
}
```

#### [Block Black Wool Double Slab](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_wool_double_slab.block.json)


```json
"minecraft:flammable": {
  "catch_chance_modifier": 30,
  "destroy_chance_modifier": 60,
  "lava_flammable": "always"
}
```
