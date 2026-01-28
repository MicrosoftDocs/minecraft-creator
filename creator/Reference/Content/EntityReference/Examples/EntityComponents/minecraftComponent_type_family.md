---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:type_family"
description: "Describes the minecraft:type_family entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:type_family

Defines the family categories this entity belongs to. Type families are used by filters and other game systems to group entities (e.g., 'mob', 'monster', 'undead', 'zombie').


## Type Family Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| family | *not set* | [Family](#family-choices) choices | A set of tags that describe the categories of this entity. In addition to typically having a tag for the type of mob, entities frequently have additional type family tags that modify how the rest of the Minecraft world reacts to them. | Allay: `["allay","mob"]`, Armor Stand: `["armor_stand","inanimate","mob"]`, Bat: `["bat","mob"]` | 

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
