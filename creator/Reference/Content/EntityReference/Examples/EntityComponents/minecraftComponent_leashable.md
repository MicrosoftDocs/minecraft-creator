---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:leashable"
description: "Describes the minecraft:leashable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:leashable

Describes how this mob can be leashed to other items.


## Leashable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_be_stolen | false | Boolean true/false | If true, players can leash this entity even if it is already leashed to another mob. | Llama: `true` | 
| hard_distance | 6 | Integer number | Distance in blocks at which the leash stiffens, restricting movement. | Allay: `6` | 
| max_distance | *not set* | Integer number | Distance in blocks it which the leash breaks. | Allay: `10` | 
| on_leash | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when this entity is leashed. | Ocelot: `{"event":"minecraft:on_leash","target":"self"}` | 
| on_unleash | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when this entity is unleashed. | Ocelot: `{"event":"minecraft:on_unleash","target":"self"}` | 
| presets | *not set* | Array of [Presets](#presets-item-type) items | Defines how this entity behaves when leashed to another entity. A preset is selected upon leashing and remains until the entity is leashed to something else. The first preset whose "filter" conditions are met will be applied; if none match, a default configuration is used instead. |  | 
| soft_distance | 4 | Integer number | Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it. | Allay: `4` | 

## Presets item type
Defines how this entity behaves when leashed to another entity. A preset is selected upon leashing and remains until the entity is leashed to something else. The first preset whose "filter" conditions are met will be applied; if none match, a default configuration is used instead.


#### Presets Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filter | *not set* | Minecraft filter | Conditions that must be met for this preset to be applied. These conditions are only evaluated upon leashing. |  | 
| hard_distance | 6 | Decimal number | Distance in blocks at which the leash stiffens, restricting movement. |  | 
| max_distance | 10 | Decimal number | Distance in blocks at which the leash breaks. |  | 
| soft_distance | 4 | Decimal number | Distance in blocks at which the "spring" effect starts acting to keep this entity close to the entity that leashed it. |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:leashable": {
  "soft_distance": 4,
  "hard_distance": 6,
  "max_distance": 10
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:leashable": {}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:leashable": {
  "soft_distance": 4,
  "hard_distance": 6,
  "max_distance": 10,
  "can_be_stolen": true
}
```

#### [Ocelot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ocelot.json)


```json
"minecraft:leashable": {
  "soft_distance": 4,
  "hard_distance": 6,
  "max_distance": 10,
  "on_leash": {
    "event": "minecraft:on_leash",
    "target": "self"
  },
  "on_unleash": {
    "event": "minecraft:on_unleash",
    "target": "self"
  }
}
```
