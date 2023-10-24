---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:entity_placer
description: "A reference document detailing the 'entity_placer' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:entity_placer

`minecraft:entity_placer` allows an item to place entities into the world. Additionally, in version 1.19.80 and above, the component allows the item to set the spawn type of a monster spawner.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|dispense_on|*not set* |Array |List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.|
|entity |*not set* | JSON Object| The entity to be placed in the world.|
|use_on |*not set* | Array| List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed. See [Custom Item Use Priority](../ItemUsePriority.md) for more information on use behavior.|

## Example

```json
"minecraft:entity_placer":{
    "entity":"minecraft:spider",
    "dispense_on":["minecraft:web"],
    "use_on" :["minecraft:web"]
}
```
