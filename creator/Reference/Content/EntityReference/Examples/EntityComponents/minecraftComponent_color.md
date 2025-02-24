---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:color"
description: "Describes the minecraft:color entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:color

Defines the entity's main color.

> [!Note]
> This attribute only works on vanilla entities that have predefined color values (sheep, llama, shulker).


## Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | 0 | Integer number | The Palette Color value of the entity. | Cat: `14`, Sheep: `12`, `15`, `7`, `8`, `6`, `11`, `3`, `9`, `1`, `4` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:color": {
  "value": 14
}
```

#### [Sheep](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sheep.json)

At /minecraft:entity/component_groups/minecraft:sheep_white/minecraft:color/: 

```json
"minecraft:color": {
  "value": 0
}
```

At /minecraft:entity/component_groups/minecraft:sheep_brown/minecraft:color/: 

```json
"minecraft:color": {
  "value": 12
}
```

At /minecraft:entity/component_groups/minecraft:sheep_black/minecraft:color/: 

```json
"minecraft:color": {
  "value": 15
}
```

At /minecraft:entity/component_groups/minecraft:sheep_gray/minecraft:color/: 

```json
"minecraft:color": {
  "value": 7
}
```

At /minecraft:entity/component_groups/minecraft:sheep_light_gray/minecraft:color/: 

```json
"minecraft:color": {
  "value": 8
}
```

At /minecraft:entity/component_groups/minecraft:sheep_pink/minecraft:color/: 

```json
"minecraft:color": {
  "value": 6
}
```

At /minecraft:entity/component_groups/minecraft:sheep_blue/minecraft:color/: 

```json
"minecraft:color": {
  "value": 11
}
```

At /minecraft:entity/component_groups/minecraft:sheep_light_blue/minecraft:color/: 

```json
"minecraft:color": {
  "value": 3
}
```

At /minecraft:entity/component_groups/minecraft:sheep_cyan/minecraft:color/: 

```json
"minecraft:color": {
  "value": 9
}
```

At /minecraft:entity/component_groups/minecraft:sheep_orange/minecraft:color/: 

```json
"minecraft:color": {
  "value": 1
}
```

At /minecraft:entity/component_groups/minecraft:sheep_yellow/minecraft:color/: 

```json
"minecraft:color": {
  "value": 4
}
```
