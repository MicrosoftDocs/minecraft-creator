---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:redstone_conductivity"
description: "Describes the minecraft:redstone_conductivity block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:redstone_conductivity

The basic redstone properties of a block. If the component is not provided the default values are used.

> [!Note]
> This item requires a format version of at least 1.21.40.


## Block Redstone Conductivity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allows_wire_to_step_down | true | Boolean true/false | Specifies if redstone wire can stair-step downward on the block. | Block Black Concrete Stairs: `true` | 
| redstone_conductor | false | Boolean true/false | Specifies if the block can be powered by redstone. | Block Black Concrete Double Slab: `true` | 

## Samples

#### [Block Black Concrete Double Slab](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_double_slab.block.json)


```json
"minecraft:redstone_conductivity": {
  "redstone_conductor": true
}
```

#### [Block Black Concrete Slab](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_slab.block.json)


```json
"minecraft:redstone_conductivity": {
  "redstone_conductor": false
}
```

#### [Block Black Concrete Stairs](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_stairs.block.json)


```json
"minecraft:redstone_conductivity": {
  "redstone_conductor": false,
  "allows_wire_to_step_down": true
}
```
