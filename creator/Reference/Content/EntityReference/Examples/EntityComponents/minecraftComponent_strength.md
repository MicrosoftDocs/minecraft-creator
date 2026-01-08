---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:strength"
description: "Describes the minecraft:strength entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:strength

Defines the entity's strength to carry items.


## Strength Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | 5 | Integer number | The maximum strength of this entity | Frost Moose: `5` | 
| value | 1 | Integer number | The initial value of the strength | Frost Moose: `1`, `2`, `3`, `4`, `5` | 

## Samples

#### [Frost Moose](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/frost_moose.behavior.json)

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
