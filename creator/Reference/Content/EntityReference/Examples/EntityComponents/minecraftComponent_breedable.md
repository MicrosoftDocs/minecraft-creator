---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:breedable"
description: "Describes the minecraft:breedable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:breedable

Allows an entity to establish a way to get into the love state used for breeding.

> [!Note]
> This component is commonly used in conjunction with the 'minecraft:behavior.breed' component.


## Breedable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_sitting | false | Boolean true/false | If true, entities can breed while sitting |  | 
| blend_attributes | true | Boolean true/false | If true, the entities will blend their attributes in the offspring after they breed. For example, horses blend their health, movement, and jump_strength in their offspring. |  | 
| breed_cooldown | 60 | Decimal number | Time in seconds before the Entity can breed again. |  | 
| breed_items | *not set* | Array of strings | The list of items that can be used to get the entity into the 'love' state. | Chicken: `["wheat_seeds","beetroot_seeds","melon_seeds","pumpkin_seeds","pitcher_pod","torchflower_seeds"]`, Cow: `["wheat"]`, Fox: `["sweet_berries","glow_berries"]` | 
| breeds_with | *not set* | Array of [Breeds With](#breeds-with) items | The entity definitions that this entity can breed with. Can be a single object or an array. | Chicken: `{"minecraft:chicken":{}}`, Cow: `{"minecraft:cow":{}}`, Fox: `{"minecraft:fox":{}}` | 
| breeds_with (Alternate 1) | *not set* | [Breeds With](#breeds-with) item |  |  | 
| causes_pregnancy | false | Boolean true/false | If true, the entity will become pregnant instead of spawning a baby. | Frog: `true` | 
| deny_parents_variant | *not set* | [Deny Parents Variant](#deny-parents-variant) item | Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead. |  | 
| environment_requirements | *not set* | Array of [Environment Requirements](#environment-requirements) items | The list of nearby block requirements to get the entity into the 'love' state. |  | 
| extra_baby_chance | 0 | Percent Range | Chance that up to 16 babies will spawn. |  | 
| inherit_tamed | *not set* | Boolean true/false | If true, the babies will be automatically tamed if its parents are. |  | 
| love_filters | *not set* | Minecraft filter | The filters to run when attempting to fall in love. |  | 
| mutation_factor | *not set* | [Mutation Factor](#mutation-factor) item | Determines how likely the babies are to NOT inherit one of their parent's variances. |  | 
| require_full_health | false | Boolean true/false | If true, the entity needs to be at full health before it can breed. |  | 
| require_tame | true | Boolean true/false | If true, the entities need to be tamed first before they can breed. |  | 

## Breeds With

#### Breeds With Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| baby_type | *not set* | String | The entity definition of this entity's babies. |  | 
| breed_event | *not set* | String | Event to run when this entity breeds. Can be a simple event name string or a trigger object with event and optional filters. |  | 
| breed_event (Alternate 1) | *not set* | Object |  |  | 
| mate_type | *not set* | String from a list of choices | The entity definition that this entity can mate with. |  | 

## Deny Parents Variant

#### Deny Parents Variant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance | *not set* | Decimal number | The percentage chance of denying the parents' variant. |  | 
| max_variant | *not set* | String | The inclusive maximum of the variant range. |  | 
| min_variant | *not set* | String | The inclusive minimum of the variant range. |  | 

## Environment Requirements

#### Environment Requirements Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_types | *not set* | Array of strings | The block types required nearby for the entity to breed. |  | 
| count | *not set* | Integer number | The number of the required block types nearby for the entity to breed. |  | 
| radius | *not set* | Decimal number | How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16. |  | 

## Mutation Factor

#### Mutation Factor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Percent Range | The percentage chance of denying the parents' variant. |  | 
| extra_variant | *not set* | Percent Range | The percentage chance of a mutation on the entity's extra variant type. |  | 
| variant | *not set* | Percent Range | The percentage chance of a mutation on the entity's variant type. |  | 

## Samples

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "breeds_with": {
    "minecraft:chicken": {}
  },
  "breed_items": [
    "wheat_seeds",
    "beetroot_seeds",
    "melon_seeds",
    "pumpkin_seeds",
    "pitcher_pod",
    "torchflower_seeds"
  ]
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "breeds_with": {
    "minecraft:cow": {}
  },
  "breed_items": [
    "wheat"
  ]
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "breed_items": [
    "sweet_berries",
    "glow_berries"
  ],
  "breeds_with": {
    "minecraft:fox": {}
  }
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "causes_pregnancy": true,
  "breeds_with": {
    "minecraft:frog": {
      "event": "become_pregnant",
      "target": "self"
    }
  },
  "breed_items": [
    "slime_ball"
  ]
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "breed_items": [
    "wheat"
  ],
  "breeds_with": {
    "minecraft:goat": {}
  }
}
```
