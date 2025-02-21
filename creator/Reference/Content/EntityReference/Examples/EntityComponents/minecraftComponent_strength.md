---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:strength"
description: "Describes the minecraft:strength entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:strength

Defines the entity's strength to carry items.


## Strength Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | 5 | Integer number | The maximum strength of this entity | Llama: `5` | 
| value | 1 | Integer number | The initial value of the strength | Llama: `1`, `2`, `3`, `4`, `5` | 

## Samples

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)

At /minecraft:entity/component_groups/minecraft:strength_1/minecraft:strength/: 

```json
"minecraft:strength": {
  "value": 1,
  "max": 5
}
```

At /minecraft:entity/component_groups/minecraft:strength_2/minecraft:strength/: 

```json
"minecraft:strength": {
  "value": 2,
  "max": 5
}
```

At /minecraft:entity/component_groups/minecraft:strength_3/minecraft:strength/: 

```json
"minecraft:strength": {
  "value": 3,
  "max": 5
}
```

At /minecraft:entity/component_groups/minecraft:strength_4/minecraft:strength/: 

```json
"minecraft:strength": {
  "value": 4,
  "max": 5
}
```

At /minecraft:entity/component_groups/minecraft:strength_5/minecraft:strength/: 

```json
"minecraft:strength": {
  "value": 5,
  "max": 5
}
```
