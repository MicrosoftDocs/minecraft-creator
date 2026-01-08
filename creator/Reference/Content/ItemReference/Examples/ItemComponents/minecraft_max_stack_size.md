---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:max_stack_size"
description: "Describes the minecraft:max_stack_size item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:max_stack_size

Determines how many of an item can be stacked together.

## Alternate Simple Representations

This item can also be represented as a `Integer number`.


## Max Stack Size Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | 64 | Integer number | How many of an item that can be stacked together. |  | 

## Samples

#### [Beetroot Soup](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/beetroot_soup.json)


```json
"minecraft:max_stack_size": 1
```

#### [Honey Bottle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/honey_bottle.json)


```json
"minecraft:max_stack_size": 16
```

#### [Item Axe Turret Kit](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/axe_turret_kit.item.json)


```json
"minecraft:max_stack_size": {
  "value": 64
}
```

#### [Item Depleted Gray Shard](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/depleted_gray_shard.item.json)


```json
"minecraft:max_stack_size": 64
```
