---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:mob_effect_immunity"
description: "Describes the minecraft:mob_effect_immunity entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:mob_effect_immunity

Entities with this component will have an immunity to the provided mob effects.


## Mob Effect Immunity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| mob_effects | *not set* | Array of strings | List of names of effects the entity is immune to. | Nautilus: `["poison"]`, Parched: `["weakness"]`, Silverfish: `["infested"]` | 

## Samples

#### [Nautilus](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/nautilus.json)


```json
"minecraft:mob_effect_immunity": {
  "mob_effects": [
    "poison"
  ]
}
```

#### [Parched](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json)


```json
"minecraft:mob_effect_immunity": {
  "mob_effects": [
    "weakness"
  ]
}
```

#### [Silverfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/silverfish.json)


```json
"minecraft:mob_effect_immunity": {
  "mob_effects": [
    "infested"
  ]
}
```

#### [Slime](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/slime.json)


```json
"minecraft:mob_effect_immunity": {
  "mob_effects": [
    "oozing"
  ]
}
```
