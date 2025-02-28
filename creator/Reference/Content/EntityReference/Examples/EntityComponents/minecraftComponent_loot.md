---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:loot"
description: "Describes the minecraft:loot entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:loot

Sets the loot table for what items this entity drops upon death.

> [!Note]
> Requires a loot table to be used when dropping items upon death.


## Loot Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| table | *not set* | String | The path to the loot table, relative to the Behavior Pack's root. | Armor Stand: `"loot_tables/entities/armor_stand.json"`, Blaze: `"loot_tables/entities/blaze.json"`, Boat: `"loot_tables/entities/boat.json"` | 

## Samples

#### [Armor Stand](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/armor_stand.json"
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/blaze.json"
}
```

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/boat.json"
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/bogged.json"
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/breeze.json"
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/cat.json"
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/spider.json"
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/chicken.json"
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/cow.json"
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/creeper.json"
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/dolphin.json"
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:loot": {
  "table": "loot_tables/entities/horse.json"
}
```
