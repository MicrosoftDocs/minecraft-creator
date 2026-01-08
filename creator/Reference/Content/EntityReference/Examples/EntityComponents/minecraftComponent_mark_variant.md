---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:mark_variant"
description: "Describes the minecraft:mark_variant entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:mark_variant

Mark Variant is typically used as an additional per-type way (besides `variant`) to express a different visual form of the same mob.


## Mark Variant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | 0 | Integer number | The Id of the mark_variant. By convention, 0 is the Id of the base entity. | Bee: `1`, Horse: `2`, `3`, `4` | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:mark_variant": {
  "value": 1
}
```

#### [Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/horse.json)

At /minecraft:entity/component_groups/minecraft:markings_none/minecraft:mark_variant/: 

```json
"minecraft:mark_variant": {
  "value": 0
}
```

At /minecraft:entity/component_groups/minecraft:markings_white_fields/minecraft:mark_variant/: 

```json
"minecraft:mark_variant": {
  "value": 2
}
```

At /minecraft:entity/component_groups/minecraft:markings_white_dots/minecraft:mark_variant/: 

```json
"minecraft:mark_variant": {
  "value": 3
}
```

At /minecraft:entity/component_groups/minecraft:markings_black_dots/minecraft:mark_variant/: 

```json
"minecraft:mark_variant": {
  "value": 4
}
```

#### [Tropicalfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/tropicalfish.json)

At /minecraft:entity/component_groups/minecraft:tropicalfish_variant_pattern_6/minecraft:mark_variant/: 

```json
"minecraft:mark_variant": {
  "value": 5
}
```

#### [Zombie Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_villager_v2.json)

At /minecraft:entity/component_groups/taiga_villager/minecraft:mark_variant/: 

```json
"minecraft:mark_variant": {
  "value": 6
}
```
