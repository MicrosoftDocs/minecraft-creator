---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:destructible_by_explosion"
description: "Describes the minecraft:destructible_by_explosion block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:destructible_by_explosion

Describes the destructible by explosion properties for this block. If set to true, the block will have the default explosion resistance. If set to false, this block is indestructible by explosion. If the component is omitted, the block will have the default explosion resistance.

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Destructible By Explosion Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| explosion_resistance | 0 | Decimal number | Sets the explosion resistance for the block. Greater values result in greater resistance to explosions. The scale will be different for different explosion power levels. A negative value or 0 means it will easily explode; larger numbers increase level of resistance. | Block Fabricator: `15`, Block Gray Ore: `96`, Block Palm Leave: `1.3` | 

## Samples

#### [Example](Example)


```json
"minecraft:destructible_by_explosion": true
```

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 15
}
```

#### [Block Gray Ore](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/gray_ore.block.json)


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 96
}
```

#### [Block Palm Leave](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/palm_leave.block.json)


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 1.3
}
```

#### [Block White Sand](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/white_sand.block.json)


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 1.1
}
```

#### [Block Orange Ore](https://github.com/microsoft/minecraft-samples/tree/main/custom_features/basic_orange_ore/behavior_packs/basic_orange_ore/blocks/orange_ore.block.json)


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 30
}
```

#### [Apple Block](https://github.com/microsoft/minecraft-samples/tree/main/custom_features/example_feature_set/behavior_packs/example_feature_set/blocks/apple_block.json)


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 2.9
}
```
