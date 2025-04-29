---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:scale"
description: "Describes the minecraft:scale entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:scale

Sets the entity's visual size.


## Scale Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | 1 | Decimal number | The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger. | Armadillo: `0.6`, Axolotl: `0.5`, Camel: `0.45` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:scale": {
  "value": 0.6
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:scale": {
  "value": 0.5
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:scale": {
  "value": 0.45
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)

At /minecraft:entity/component_groups/minecraft:cat_baby/minecraft:scale/: 

```json
"minecraft:scale": {
  "value": 0.4
}
```

At /minecraft:entity/component_groups/minecraft:cat_adult/minecraft:scale/: 

```json
"minecraft:scale": {
  "value": 0.8
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:scale": {
  "value": 0.65
}
```

#### [Fish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fish.json)


```json
"minecraft:scale": {
  "value": 1
}
```

#### [Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ghast.json)


```json
"minecraft:scale": {
  "value": 4.5
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)

At /minecraft:entity/component_groups/minecraft:adult/minecraft:scale/: 

```json
"minecraft:scale": {
  "value": 3.999
}
```

At /minecraft:entity/component_groups/minecraft:baby/minecraft:scale/: 

```json
"minecraft:scale": {
  "value": 1.999
}
```

#### [Pufferfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pufferfish.json)


```json
"minecraft:scale": {
  "value": 1.2
}
```

#### [Salmon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/salmon.json)

At /minecraft:entity/component_groups/scale_large/minecraft:scale/: 

```json
"minecraft:scale": {
  "value": 1.5
}
```
