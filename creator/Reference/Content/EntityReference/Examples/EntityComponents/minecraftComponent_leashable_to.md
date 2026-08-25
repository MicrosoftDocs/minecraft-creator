---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:leashable_to"
description: "Describes the minecraft:leashable_to entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:leashable_to

Allows players to leash entities to this entity, retrieve entities already leashed to it, or free them using shears. For the last interaction to work, the leashed entities must have "can_be_cut" set to true in their "minecraft:leashable" component.

> [!Note]
> This item requires a format version of at least 1.21.90.


## Leashable To Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| can_retrieve_from | false | Boolean true/false | Allows players to retrieve entities that are leashed to this entity. | 
| unleash_on_removal | true | Boolean true/false | If true, all entities leashed to this entity are automatically unleashed when this component is removed. Defaults to true. This item requires a format version of at least 1.26.30. | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:leashable_to": {}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:leashable_to": {
  "unleash_on_removal": false
}
```
