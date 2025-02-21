---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:variant"
description: "Describes the minecraft:variant entity component"
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
| value | 0 | Integer number | The Id of the variant. By convention, 0 is the Id of the base entity/default appearance. | Axolotl: `1`, `2`, `3`, `4` | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)

At /minecraft:entity/component_groups/axolotl_lucy/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 0
}
```

At /minecraft:entity/component_groups/axolotl_cyan/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 1
}
```

At /minecraft:entity/component_groups/axolotl_gold/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 2
}
```

At /minecraft:entity/component_groups/axolotl_wild/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 3
}
```

At /minecraft:entity/component_groups/axolotl_blue/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 4
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)

At /minecraft:entity/component_groups/minecraft:cat_calico/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 5
}
```

At /minecraft:entity/component_groups/minecraft:cat_persian/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 6
}
```

At /minecraft:entity/component_groups/minecraft:cat_ragdoll/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 7
}
```

At /minecraft:entity/component_groups/minecraft:cat_tabby/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 8
}
```

At /minecraft:entity/component_groups/minecraft:cat_black/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 9
}
```

At /minecraft:entity/component_groups/minecraft:cat_jellie/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 10
}
```

#### [Shulker](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/shulker.json)

At /minecraft:entity/component_groups/minecraft:shulker_light_blue/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 12
}
```

At /minecraft:entity/component_groups/minecraft:shulker_magenta/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 13
}
```

At /minecraft:entity/component_groups/minecraft:shulker_orange/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 14
}
```

At /minecraft:entity/component_groups/minecraft:shulker_undyed/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 16
}
```

At /minecraft:entity/component_groups/minecraft:shulker_white/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 15
}
```

At /minecraft:entity/component_groups/minecraft:shulker_yellow/minecraft:variant/: 

```json
"minecraft:variant": {
  "value": 11
}
```
