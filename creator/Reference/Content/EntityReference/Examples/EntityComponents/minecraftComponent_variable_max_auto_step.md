---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:variable_max_auto_step"
description: "Describes the minecraft:variable_max_auto_step entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:variable_max_auto_step

Entities with this component will have a maximum auto step height that is different depending on whether they are on a block that prevents jumping. Incompatible with "runtime_identifier": "minecraft:horse".


## Variable Max Auto Step Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_value | 0.5625 | Decimal number | The maximum auto step height when on any other block. | Camel: `1.5625`, Creaking: `1.0625` | 
| controlled_value | 0.5625 | Decimal number | The maximum auto step height when on any other block and controlled by the player. | Camel: `1.5625` | 
| jump_prevented_value | 0.5625 | Decimal number | The maximum auto step height when on a block that prevents jumping. | Camel: `0.5625` | 

## Samples

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:variable_max_auto_step": {
  "base_value": 1.5625,
  "controlled_value": 1.5625,
  "jump_prevented_value": 0.5625
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)


```json
"minecraft:variable_max_auto_step": {
  "base_value": 1.0625,
  "jump_prevented_value": 0.5625
}
```
