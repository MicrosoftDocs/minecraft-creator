---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:type_family"
description: "Describes the minecraft:type_family entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:type_family

Defines the families this entity belongs to.


## Type Family Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| family | *not set* | [Family](#family-choices) choices | A set of tags that describe the categories of this entity. In addition to typically having a tag for the type of mob, entities frequently have additional type family tags that modify how the rest of the Minecraft world reacts to them. Value must have at least 2 items. | Allay: `["allay","mob"]`, Armadillo: `["armadillo","mob"]`, Armor Stand: `["armor_stand","inanimate","mob"]` | 

### Family choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| mob | Mob | |
| inanimate | Inanimate | |
| aquatic | Aquatic | |
| monster | Monster | |
| undead | Undead | |
| skeleton | Skeleton | |
| arthropod | Arthropod | |
| zombie | Zombie | |
| lightweight | Lightweight | |
| fish | Fish | |
| player | Player | |

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:type_family": {
  "family": [
    "allay",
    "mob"
  ]
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:type_family": {
  "family": [
    "armadillo",
    "mob"
  ]
}
```

#### [Armor Stand](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json)


```json
"minecraft:type_family": {
  "family": [
    "armor_stand",
    "inanimate",
    "mob"
  ]
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:type_family": {
  "family": [
    "aquatic",
    "axolotl",
    "mob"
  ]
}
```

#### [Bat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json)


```json
"minecraft:type_family": {
  "family": [
    "bat",
    "mob"
  ]
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:type_family": {
  "family": [
    "blaze",
    "monster",
    "mob"
  ]
}
```

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)


```json
"minecraft:type_family": {
  "family": [
    "boat",
    "inanimate"
  ]
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:type_family": {
  "family": [
    "bogged",
    "skeleton",
    "monster",
    "mob",
    "undead"
  ]
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:type_family": {
  "family": [
    "breeze",
    "monster",
    "mob"
  ]
}
```

#### [Breeze Wind Charge Projectile](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze_wind_charge_projectile.json)


```json
"minecraft:type_family": {
  "family": [
    "wind_charge",
    "wind_charge_projectile"
  ]
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:type_family": {
  "family": [
    "camel",
    "mob"
  ]
}
```

#### [Camel Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel_husk.json)


```json
"minecraft:type_family": {
  "family": [
    "camel",
    "mob",
    "undead"
  ]
}
```
