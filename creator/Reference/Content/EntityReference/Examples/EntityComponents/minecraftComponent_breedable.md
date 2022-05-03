---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:breedable
ms.prod: gaming
---

# Entity Documentation - minecraft:breedable

`minecraft:breedable` allows an entity to establish a way to get into the `love` state used for breeding.

>[!IMPORTANT]
> `minecraft:breedable`requires the behavior [`minecraft:behavior.breed`](../EntityGoals/minecraftBehavior_breed.md) in order to allow entities to breed.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|allow_sitting| false| Boolean| If true, entities can breed while sitting |
|blend_attributes| true| Boolean| If true, the entities will blend their attributes in the offspring after they breed. For example, horses blend their health, movement, and jump_strength in their offspring. |
|breed_cooldown| 60| Decimal|  Time in seconds before the Entity can breed again. |
|breed_items|*not set* | List| The list of items that can be used to get the entity into the 'love' state |
|[breeds_with](#breeds_with)|*not set* | List| The list of entity definitions that this entity can breed with.|
|causes_pregnancy| false| Boolean| If true, the entity will become pregnant instead of spawning a baby. |
|[deny_parents_variant](#deny_parents_variant)|*not set* | JSON Object|  Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead.|
|[environment_requirements](#environment_requirements)|*not set* | List| The list of nearby block requirements to get the entity into the 'love' state.|
|extra_baby_chance| 0| Decimal| Chance that up to 16 babies will spawn between 0.0 and 1.0, where 1.0 is 100%. |
|inherit_tamed| true| Boolean|  If true, the babies will be automatically tamed if its parents are |
|[love_filters](../FilterList.md)|*not set* | Minecraft Filter|  The filters to run when attempting to fall in love. |
|[mutation_factor](#mutation_factor)|*not set* | JSON Object|  Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate.|
|require_full_health| false| Boolean|  If true, the entity needs to be at full health before it can breed. |
|require_tame| true| Boolean| If true, the entities need to be tamed first before they can breed. |

### breeds_with

`breeds_with` is a list defined by three parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|baby_type|*not set* | String| The entity definition of this entity's babies. |
|breed_event|*not set* | String| Event to run when this entity breeds. |
|mate_type|*not set* | String| The entity definition of this entity's mate. |

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
|extra_variant| 0| Decimal| The percentage chance of a mutation on the entity's extra variant type. |
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
