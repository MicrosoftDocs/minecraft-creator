---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:breedable"
description: "Describes the minecraft:breedable entity component"
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
| allow_sitting | false | Boolean true/false | If true, entities can breed while sitting | Cat: `true` | 
| blend_attributes | true | Boolean true/false | If true, the entities will blend their attributes in the offspring after they breed. For example, horses blend their health, movement, and jump_strength in their offspring. |  | 
| breed_cooldown | 60 | Decimal number | Time in seconds before the Entity can breed again. |  | 
| breed_items | *not set* | Array of strings | The list of items that can be used to get the entity into the 'love' state. | Armadillo: `["spider_eye"]`, Axolotl: `"tropical_fish_bucket"`, Bee: `["minecraft:poppy","minecraft:blue_orchid","minecraft:allium","minecraft:azure_bluet","minecraft:red_tulip","minecraft:orange_tulip","minecraft:white_tulip","minecraft:pink_tulip","minecraft:oxeye_daisy","minecraft:cornflower","minecraft:lily_of_the_valley","minecraft:dandelion","minecraft:wither_rose","minecraft:sunflower","minecraft:lilac","minecraft:rose_bush","minecraft:peony","minecraft:flowering_azalea","minecraft:azalea_leaves_flowered","minecraft:mangrove_propagule","minecraft:pitcher_plant","minecraft:torchflower","minecraft:cherry_leaves","minecraft:pink_petals","minecraft:wildflowers","minecraft:cactus_flower"]` | 
| breeds_with | *not set* | Array of [Breeds With](#breeds-with-item-type) items | The list of entity definitions that this entity can breed with. | Armadillo: `[{"mate_type":"minecraft:armadillo","baby_type":"minecraft:armadillo","breed_event":{"event":"minecraft:entity_born","target":"baby"}}]`, Axolotl: `{"mate_type":"minecraft:axolotl","baby_type":"minecraft:axolotl","breed_event":{"event":"minecraft:entity_born","target":"baby"}}`, Bee: `{"mate_type":"minecraft:bee","baby_type":"minecraft:bee","breed_event":{"event":"minecraft:entity_born","target":"baby"}}` | 
| causes_pregnancy | false | Boolean true/false | If true, the entity will become pregnant instead of spawning a baby. |  | 
| combine_parent_colors | *not set* | String |  |  | 
| deny_parents_variant | *not set* | [Deny Parents Variant](#deny-parents-variant-item-type) item | Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead. |  | 
| environment_requirements | *not set* | Array of [Environment Requirements](#environment-requirements-item-type) items | The list of nearby block requirements to get the entity into the 'love' state. |  | 
| extra_baby_chance | 0 | Percent Range | Chance that up to 16 babies will spawn. |  | 
| inherit_tamed | true | Boolean true/false | If true, the babies will be automatically tamed if its parents are. |  | 
| love_filters | *not set* | Minecraft filter | The filters to run when attempting to fall in love. |  | 
| mutation_factor | *not set* | [Mutation Factor](#mutation-factor-item-type) item | Determines how likely the babies are to NOT inherit one of their parent's variances. |  | 
| mutation_strategy | none | String | Strategy used for mutating variants and extra variants for offspring. Current valid alternatives are 'random' and 'none'. |  | 
| parent_centric_attribute_blending | *not set* | Array of strings | [EXPERIMENTAL] List of attributes that should benefit from parent centric attribute blending. For example, horses blend their health, movement, and jump_strength in their offspring. |  | 
| property_inheritance | *not set* | Array of strings | List of Entity Properties that should be inherited from the parent entities and potentially mutated. |  | 
| random_extra_variant_mutation_interval | 0 | Range of integers | Range used to determine random extra variant. |  | 
| random_variant_mutation_interval | 0 | Range of integers | Range used to determine random variant. |  | 
| require_full_health | false | Boolean true/false | If true, the entity needs to be at full health before it can breed. |  | 
| require_tame | true | Boolean true/false | If true, the entities need to be tamed first before they can breed. |  | 
| transform_to_item | *not set* | String | The breed item used will transform to this item upon successful interaction. Format: itemName:auxValue |  | 

## Breeds With item type
The list of entity definitions that this entity can breed with.


#### Breeds With Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| baby_type | *not set* | String | The entity definition of this entity's babies. |  | 
| breed_event | *not set* | String from a list of choices | Event to run when this entity breeds. |  | 
| mate_type | *not set* | String from a list of choices | The inclusive minimum of the variant range. |  | 

## Deny Parents Variant item type
Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead.


#### Deny Parents Variant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance | 0 | Decimal number | The percentage chance of denying the parents' variant. |  | 
| max_variant | 0 | String | The inclusive maximum of the variant range. |  | 
| min_variant | 0 | String | The inclusive minimum of the variant range. |  | 

## Environment Requirements item type
The list of nearby block requirements to get the entity into the 'love' state.


#### Environment Requirements Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_types | *not set* | Array of strings | The block types required nearby for the entity to breed. |  | 
| blocks | *not set* | Array of strings | The block types required nearby for the entity to breed. |  | 
| count | 1 | Integer number | The number of the required block types nearby for the entity to breed. |  | 
| radius | 5 | Decimal number | How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16. |  | 

## Mutation Factor item type
Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate.


#### Mutation Factor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | 0 | Percent Range | The percentage chance of denying the parents' variant. |  | 
| extra_variant | 0 | Percent Range | The percentage chance of a mutation on the entity's extra variant type. |  | 
| variant | 0 | Percent Range | The percentage chance of a mutation on the entity's variant type. |  | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:breedable": {
  "love_filters": {
    "test": "enum_property",
    "domain": "minecraft:armadillo_state",
    "value": "unrolled"
  },
  "require_tame": false,
  "breeds_with": [
    {
      "mate_type": "minecraft:armadillo",
      "baby_type": "minecraft:armadillo",
      "breed_event": {
        "event": "minecraft:entity_born",
        "target": "baby"
      }
    }
  ],
  "breed_items": [
    "spider_eye"
  ]
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "breed_items": "tropical_fish_bucket",
  "transform_to_item": "water_bucket:0",
  "breeds_with": {
    "mate_type": "minecraft:axolotl",
    "baby_type": "minecraft:axolotl",
    "breed_event": {
      "event": "minecraft:entity_born",
      "target": "baby"
    }
  },
  "mutation_factor": {
    "variant": 0.00083
  }
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "breeds_with": {
    "mate_type": "minecraft:bee",
    "baby_type": "minecraft:bee",
    "breed_event": {
      "event": "minecraft:entity_born",
      "target": "baby"
    }
  },
  "breed_items": [
    "minecraft:poppy",
    "minecraft:blue_orchid",
    "minecraft:allium",
    "minecraft:azure_bluet",
    "minecraft:red_tulip",
    "minecraft:orange_tulip",
    "minecraft:white_tulip",
    "minecraft:pink_tulip",
    "minecraft:oxeye_daisy",
    "minecraft:cornflower",
    "minecraft:lily_of_the_valley",
    "minecraft:dandelion",
    "minecraft:wither_rose",
    "minecraft:sunflower",
    "minecraft:lilac",
    "minecraft:rose_bush",
    "minecraft:peony",
    "minecraft:flowering_azalea",
    "minecraft:azalea_leaves_flowered",
    "minecraft:mangrove_propagule",
    "minecraft:pitcher_plant",
    "minecraft:torchflower",
    "minecraft:cherry_leaves",
    "minecraft:pink_petals",
    "minecraft:wildflowers",
    "minecraft:cactus_flower"
  ]
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "breeds_with": [
    {
      "mate_type": "minecraft:camel",
      "baby_type": "minecraft:camel",
      "breed_event": {
        "event": "minecraft:entity_born",
        "target": "baby"
      }
    }
  ],
  "breed_items": [
    "cactus"
  ]
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:breedable": {
  "require_tame": true,
  "require_full_health": true,
  "allow_sitting": true,
  "combine_parent_colors": true,
  "breeds_with": {
    "mate_type": "minecraft:cat",
    "baby_type": "minecraft:cat",
    "breed_event": {
      "event": "minecraft:entity_born",
      "target": "baby"
    }
  },
  "breed_items": [
    "fish",
    "salmon"
  ]
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "breeds_with": {
    "mate_type": "minecraft:chicken",
    "baby_type": "minecraft:chicken",
    "breed_event": {
      "event": "minecraft:entity_born",
      "target": "baby"
    }
  },
  "breed_items": [
    "wheat_seeds",
    "beetroot_seeds",
    "melon_seeds",
    "pumpkin_seeds",
    "pitcher_pod",
    "torchflower_seeds"
  ],
  "property_inheritance": {
    "minecraft:climate_variant": {}
  }
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "breed_items": "wheat",
  "breeds_with": {
    "mate_type": "minecraft:cow",
    "baby_type": "minecraft:cow",
    "breed_event": {
      "event": "minecraft:entity_born",
      "target": "baby"
    }
  },
  "property_inheritance": {
    "minecraft:climate_variant": {}
  }
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:breedable": {
  "parent_centric_attribute_blending": [
    "minecraft:health"
  ],
  "require_tame": true,
  "inherit_tamed": false,
  "breeds_with": [
    {
      "mate_type": "minecraft:donkey",
      "baby_type": "minecraft:donkey",
      "breed_event": {
        "event": "minecraft:entity_born",
        "target": "baby"
      }
    },
    {
      "mate_type": "minecraft:horse",
      "baby_type": "minecraft:mule",
      "breed_event": {
        "event": "minecraft:entity_born",
        "target": "baby"
      }
    }
  ],
  "breed_items": [
    "golden_carrot",
    "golden_apple",
    "appleEnchanted"
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
    "mate_type": "minecraft:fox",
    "baby_type": "minecraft:fox",
    "breed_event": {
      "event": "minecraft:entity_born",
      "target": "baby"
    }
  }
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "causes_pregnancy": true,
  "breeds_with": {
    "mate_type": "minecraft:frog",
    "baby_type": "minecraft:tadpole",
    "breed_event": {
      "event": "become_pregnant"
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
  "breed_items": "wheat",
  "breeds_with": {
    "mate_type": "minecraft:goat",
    "baby_type": "minecraft:goat",
    "breed_event": {
      "event": "minecraft:entity_born",
      "target": "baby"
    }
  },
  "mutation_factor": {
    "variant": 0
  }
}
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:breedable": {
  "require_tame": false,
  "love_filters": {
    "test": "has_component",
    "subject": "self",
    "operator": "not",
    "value": "minecraft:attack_cooldown"
  },
  "breeds_with": {
    "mate_type": "minecraft:hoglin",
    "baby_type": "minecraft:hoglin",
    "breed_event": {
      "event": "minecraft:entity_born",
      "target": "baby"
    }
  },
  "breed_items": [
    "crimson_fungus"
  ]
}
```
