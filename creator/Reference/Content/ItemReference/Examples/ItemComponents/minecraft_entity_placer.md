---
author: v-josjones
ms.author: v-josjones
title: minecraft:entity_placer
ms.prod: gaming
---

# minecraft:entity_placer

`minecraft:entity_placer` sets the item as a Planter item component for Entities. Planter items are items that can be planted into another block.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|dispense_on|*not set* |List |List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.|
|entity |*not set* | String| The entity to be placed in the world.|
|use_on |*not set*  | List| List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.|

## Example

```json
"minecraft:entity_placer":{
    "dispense_on": "",
    "entity" : "minecraft:spider",
    "use_on" : "minecraft:web"
}
```
