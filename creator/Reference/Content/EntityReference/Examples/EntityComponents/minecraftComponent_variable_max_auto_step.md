---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:variable_max_auto_step"
description: "Describes the minecraft:variable_max_auto_step entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:variable_max_auto_step

Entities with this component will have a maximum auto step height that is different depending on whether they are on a block that prevents jumping. Incompatible with "runtime_identifier": "minecraft:horse".


## Variable Max Auto Step Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_value | 0.5625 | Decimal number | The maximum auto step height when on any other block. | Sulfur Cube: `0.5625` | 
| controlled_value | 0.5625 | Decimal number | The maximum auto step height when on any other block and controlled by the player. | Sulfur Cube: `0.5625` | 
| jump_prevented_value | 0.5625 | Decimal number | The maximum auto step height when on a block that prevents jumping. | Sulfur Cube: `0.5625` | 

## Samples

#### [Sulfur Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sulfur_cube.json)

At /minecraft:entity/component_groups/minecraft:sulfur_cube_ai/minecraft:variable_max_auto_step/: 

```json
"minecraft:variable_max_auto_step": {
  "base_value": 0.5625,
  "controlled_value": 0.5625,
  "jump_prevented_value": 0.5625
}
```

At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_with_block/minecraft:variable_max_auto_step/: 

```json
"minecraft:variable_max_auto_step": {
  "base_value": 0,
  "controlled_value": 0,
  "jump_prevented_value": 0
}
```
