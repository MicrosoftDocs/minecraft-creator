---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:pushable"
description: "Describes the minecraft:pushable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:pushable

Defines what can push an entity between other entities and pistons.


## Pushable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| is_pushable | true | Boolean true/false | Whether the entity can be pushed by other entities. | Allay: `true` | 
| is_pushable_by_piston | true | Boolean true/false | Whether the entity can be pushed by pistons safely. | Allay: `true` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:pushable": {
  "is_pushable": true,
  "is_pushable_by_piston": true
}
```

#### [Armor Stand](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json)


```json
"minecraft:pushable": {
  "is_pushable": false,
  "is_pushable_by_piston": true
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)

At /minecraft:entity/component_groups/minecraft:immobile/minecraft:pushable/: 

```json
"minecraft:pushable": {
  "is_pushable": false,
  "is_pushable_by_piston": false
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:pushable": {}
```
