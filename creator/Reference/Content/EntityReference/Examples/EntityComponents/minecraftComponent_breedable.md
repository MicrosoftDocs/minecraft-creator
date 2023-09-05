---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:breedable
description: "A reference document detailing the 'breedable' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:breedable

`minecraft:breedable` compels an entity to get into the `love` state used for breeding.

>[!IMPORTANT]
> `minecraft:breedable`requires the behavior [`minecraft:behavior.breed`](../EntityGoals/minecraftBehavior_breed.md) in order to breed.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|allow_sitting| false| Boolean| If true, entities can breed while sitting. |
|blend_attributes| true| Boolean| If true, entities will blend their attributes in their offspring. |
|breed_cooldown| 60| Decimal|  Time in seconds before the entity can breed again. |
|breed_items|*not set* | List| The list of items that can be used to get the entity into the 'love' state |
|[breeds_with](#breeds_with)|*not set* | List| The list of entity definitions that the entity can breed with.|
|causes_pregnancy| false| Boolean| If true, the entity will become pregnant instead of spawning a baby. |
|[deny_parents_variant](#deny_parents_variant)|*not set* | JSON Object|  Determines how likely it is that a baby of parents with the same variant will deny that variant and take a random variant within the given range instead.|
|[environment_requirements](#environment_requirements)|*not set* | List| The list of nearby block requirements to get the entity into the 'love' state.|
|extra_baby_chance| 0| Decimal| Chance between 0.0 and 1.0 that up to 16 babies will spawn, where 1.0 is 100%. |
|inherit_tamed| true| Boolean|  If true, babies of tamed parents will be automatically tamed. |
|[love_filters](../FilterList.md)|*not set* | Minecraft Filter| The filters to run when attempting to fall in love. |
|[mutation_factor](#mutation_factor)|*not set* | JSON Object|  Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number corresponding with a higher likelihood of mutation.|
|mutation_strategy| none| String| Strategy used for mutating variants and extra variants for offspring. Current valid alternatives are 'random' and 'none'.|
|parent_centric_attribute_blending | -- | List| [EXPERIMENTAL] List of attributes that should benefit from parent centric attribute blending. For example, horses blend their health, movement, and jump_strength in their offspring.|
|random_extra_variant_mutation_interval| 0| Range [a, b]| Range used to determine a random extra variant.|
|random_variant_mutation_interval| 0| Range [a, b]| Range used to determine a random variant.|
|require_full_health| false| Boolean|  If true, the entity needs to be at full health before it can breed. |
|require_tame| true| Boolean| If true, the entity needs to be tamed before it can breed. |

### breeds_with

`breeds_with` is a list defined by three parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|baby_type|*not set* | String| The entity definition of the entity's babies. |
|breed_event|*not set* | String| Event to run when the entity breeds. |
|mate_type|*not set* | String| The entity definition of the entity's mate. |

### deny_parents_variant

`deny_parents_variant` is a JSON Object defined by three parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|chance| 0| Decimal| The percentage chance of denying the parents' variant. |
|max_variant| 0| Integer| The inclusive maximum of the variant range. |
|min_variant| 0| Integer| The inclusive minimum of the variant range. |

### environment_requirements

`environment_requirements` is a list defined by three parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|blocks|*not set* | List| The block types required nearby for the entity to breed. |
|count|*not set* | Integer| The number of the required block types nearby for the entity to breed. |
|radius|*not set* | Decimal| How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16. |

### mutation_factor

`mutation_factor` is a list defined by three parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|color| 0| Decimal| The percentage chance of a mutation on the entity's color. |
|extra_baby_chance| 0| Decimal| Chance between 0.0 and 1.0 that up to 16 babies will spawn, where 1.0 is 100%. |
|extra_variant| 0| Decimal| The percentage chance of a mutation on the entity's extra variant type. |
|inherit_tamed| true|Boolean| If true, babies of tamed parents will be automatically tamed.|
|variant| 0| Decimal| The percentage chance of a mutation on the entity's variant type. |

## Example

```json
"minecraft:breedable":{
    "allow_sitting": false,
    "blend_attributes": false,
    "breed_cooldown": false,
    "breed_items": [
            "carrot",
            "bamboo"
          ],
    "breeds_with": {
            "mate_type": "minecraft:panda",
            "baby_type": "minecraft:panda",
            "breed_event": {
              "event": "minecraft:entity_born",
              "target": "baby"
            }
        },
    "deny_parents_variant": {
            "chance": 0.00098, // Roughly 1/1024
            "min_variant": 0,
            "max_variant": 1
          },
    "environment_requirements": {
            "blocks": "grass",
            "count": 10,
            "radius": 10.0
          },
    "causes_pregnancy": false,
    "extra_baby_chance": 0.0,
    "inherit_tamed": true,
    "love_filters": { "test": "has_damage", "subject": "self", "operator": "=", "value": false },
    "mutation_factor": {
            "color": 0.25,
            "extra_variant": 0.35,
            "variant": 0.5
          },
    "require_full_health": false,
    "require_tame": true
}
```

## Vanilla entities examples

### horse

```json
"minecraft:breedable":{
    "require_tame":true,
    "inherit_tamed":false,
    "breeds_with":[
        {
            "mate_type":"minecraft:horse",
            "baby_type":"minecraft:horse",
            "breed_event":{
                "event":"minecraft:entity_born",
                "target":"baby"
            }
        },
        {
            "mate_type":"minecraft:donkey",
            "baby_type":"minecraft:mule",
            "breed_event":{
                "event":"minecraft:entity_born",
                "target":"baby"
            }
        }
    ],
    "breed_items":[
        "golden_carrot",
        "golden_apple",
        "appleEnchanted"
    ]
}
```

### rabbit

```json
"minecraft:breedable": {
    "breed_items": [
        "golden_carrot",
        "carrot",
        "yellow_flower"
    ],
    "breeds_with": {
        "mate_type": "minecraft:rabbit",
        "baby_type": "minecraft:rabbit"
    },
    "require_tame": false,
    "mutation_factor": {
        "variant": 0.2
    }
}
```

## Vanilla entities using `minecraft:breedable`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md))
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
