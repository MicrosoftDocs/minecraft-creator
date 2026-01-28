---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:variant"
description: "Describes the minecraft:variant entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:variant

Variant is typically used as a per-type way to express a different visual form of the same mob. For example, for cats, variant is a number that defines the breed of cat.

> [!Note]
> This behavior is a requirement for setting up multiple types of variants for an entity.


## Variant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | 0 | Integer number | The Id of the variant. By convention, 0 is the Id of the base entity/default appearance. | Fox: `1`, Frog: `2`, Llama: `3` | 

## Samples

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)

At /minecraft:entity/component_groups/minecraft:fox_red/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 0
}
```

At /minecraft:entity/component_groups/minecraft:fox_arctic/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 1
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)

At /minecraft:entity/component_groups/warm_frog/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 2
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)

At /minecraft:entity/component_groups/minecraft:llama_gray/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 3
}
```

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)

At /minecraft:entity/component_groups/minecraft:slime_large/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 4
}
```
