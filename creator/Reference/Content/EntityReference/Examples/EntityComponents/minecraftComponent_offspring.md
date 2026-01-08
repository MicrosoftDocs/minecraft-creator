---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:offspring"
description: "Describes the minecraft:offspring entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:offspring

Defines the way an entity can create a born offspring.


## Offspring Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| blend_attributes | true | Boolean true/false | If true, the entities will blend their attributes in the offspring after they breed. |  | 
| deny_parents_variant | *not set* | Array of [Deny Parents Variant](#deny-parents-variant) items | Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead. |  | 
| inherit_tamed | true | Boolean true/false | If true, the babies will be automatically tamed if its parents are |  | 
| mutation_factor | *not set* | Array of [Mutation Factor](#mutation-factor) items | Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate. |  | 
| offspring_pairs | *not set* | Array of strings | The map of entity to offspring definitions that this entity can make offspring with. |  | 
| parent_centric_attribute_blending | *not set* | Array of strings | List of attributes that should benefit from parent centric attribute blending. For example, horses blend their health, movement, and jump_strength in their offspring. |  | 
| property_inheritance | *not set* | Array of strings | List of Entity Properties that should be inherited from the parent entities and potentially mutated. |  | 
| random_extra_variant_mutation_interval | 0 | Range of integers | Range used to determine random extra variant. |  | 
| random_variant_mutation_interval | 0 | Range of integers | Range used to determine random variant. |  | 

## Deny Parents Variant
Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead.


#### Deny Parents Variant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance | 0 | Decimal number | The percentage chance of denying the parents' variant. |  | 
| max_variant | 0 | Integer number | The inclusive maximum of the variant range. |  | 
| min_variant | 0 | Integer number | The inclusive minimum of the variant range. |  | 

## Mutation Factor
Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate.


#### Mutation Factor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | 0 | Decimal number | The percentage chance of the offspring getting its color as if spawned rather than inheriting color from its parents. |  | 
| extra_variant | 0 | Decimal number | The percentage chance of a mutation on the entity's extra variant type. |  | 
| variant | 0 | Decimal number | The percentage chance of a mutation on the entity's variant type. |  | 

## Samples
