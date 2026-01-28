---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:genetics"
description: "Describes the minecraft:genetics entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:genetics

Defines the way a mob's genes and alleles are passed on to its offspring, and how those traits manifest in the child. Compatible parent genes are crossed together, the alleles are handed down from the parents to the child, and any matching genetic variants fire off JSON events to modify the child and express the traits.


## Genetics Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| genes | *not set* | Array of [Genes](#genes) items | The list of genes that this entity has and will cross with a partner during breeding. | Goat: `[{"name":"goat_variant","use_simplified_breeding":true,"allele_range":{"range_min":1,"range_max":100},"genetic_variants":[{"main_allele":{"range_min":1,"range_max":2},"birth_event":{"event":"minecraft:born_screamer","target":"self"}},{"main_allele":{"range_min":3,"range_max":100},"birth_event":{"event":"minecraft:born_default","target":"self"}}]}]` | 
| mutation_rate | 0.03125 | Decimal number | Chance that an allele will be replaced with a random one instead of the parent's allele during birth. | Goat: `0.02` | 

## Genes
The list of genes that this entity has and will cross with a partner during breeding.


#### Genes Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allele_range | *not set* | Integer number | The range of positive integer allele values for this gene. Spawned mobs will have a random number in this range assigned to them. Can be a single integer or an object with range_min and range_max properties. |  | 
| allele_range (Alternate 1) | *not set* | [Allele Range](#allele-range) item |  |  | 
| genetic_variants | *not set* | Array of [Genetic Variants](#genetic-variants) items | The list of genetic variants for this gene. These check for particular allele combinations and fire events when all of them are satisfied. |  | 
| mutation_rate | -1 | Decimal number | If this value is non-negative, overrides the chance for this gene that an allele will be replaced with a random one instead of the parent's allele during birth. Non-negative values greater than `1` will be the same as the value `1`. |  | 
| name | *not set* | String | The name of the gene. |  | 
| use_simplified_breeding | *not set* | Boolean true/false | If true, mobs spawned from breeding will always inherit main alleles from parents' main alleles and hidden alleles from the hidden ones. |  | 

## Allele Range

#### Allele Range Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Integer number | Maximum allele value |  | 
| range_min | *not set* | Integer number | Minimum allele value |  | 

## Genetic Variants
The list of genetic variants for this gene. These check for particular allele combinations and fire events when all of them are satisfied.


#### Genetic Variants Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| birth_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when this mob is created and matches the allele conditions. |  | 
| both_allele | -1 | Integer number | If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with both. Can also be a range of integers. |  | 
| both_allele (Alternate 1) | *not set* | [Both Allele](#both-allele) item |  |  | 
| either_allele | -1 | Integer number | If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with either. Can also be a range of integers. |  | 
| either_allele (Alternate 1) | *not set* | [Either Allele](#either-allele) item |  |  | 
| hidden_allele | -1 | Integer number | If this value is non-negative, compare the mob's hidden allele with this value for a match. Can also be a range of integers. |  | 
| hidden_allele (Alternate 1) | *not set* | [Hidden Allele](#hidden-allele) item |  |  | 
| main_allele | -1 | Integer number | If this value is non-negative, compare the mob's main allele with this value for a match. Can also be a range of integers. |  | 
| main_allele (Alternate 1) | *not set* | [Main Allele](#main-allele) item |  |  | 

## Both Allele

#### Both Allele Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Integer number | Maximum allele value |  | 
| range_min | *not set* | Integer number | Minimum allele value |  | 

## Either Allele

#### Either Allele Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Integer number | Maximum allele value |  | 
| range_min | *not set* | Integer number | Minimum allele value |  | 

## Hidden Allele

#### Hidden Allele Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Integer number | Maximum allele value |  | 
| range_min | *not set* | Integer number | Minimum allele value |  | 

## Main Allele

#### Main Allele Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Integer number | Maximum allele value |  | 
| range_min | *not set* | Integer number | Minimum allele value |  | 

## Samples

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:genetics": {
  "mutation_rate": 0.02,
  "genes": [
    {
      "name": "goat_variant",
      "use_simplified_breeding": true,
      "allele_range": {
        "range_min": 1,
        "range_max": 100
      },
      "genetic_variants": [
        {
          "main_allele": {
            "range_min": 1,
            "range_max": 2
          },
          "birth_event": {
            "event": "minecraft:born_screamer",
            "target": "self"
          }
        },
        {
          "main_allele": {
            "range_min": 3,
            "range_max": 100
          },
          "birth_event": {
            "event": "minecraft:born_default",
            "target": "self"
          }
        }
      ]
    }
  ]
}
```
