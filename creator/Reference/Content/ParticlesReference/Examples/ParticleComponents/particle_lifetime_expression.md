---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_lifetime_expression"
description: "Describes the minecraft:particle_lifetime_expression particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_lifetime_expression

Controls individual particle lifetimes using Molang expressions. The max_lifetime sets the absolute duration limit, while expiration_expression can terminate particles early when conditions are met (like leaving a certain area). Enables dynamic particle populations that respond to game state beyond simple time-based expiration.


## Client Particles Particle Lifetime Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expiration_expression | 0 | Molang | When the expression is non-zero, the particle expires. Can be a number or Molang expression. |  | 
| expiration_expression (Alternate 1) | *not set* | Key/item pairs of [Expiration Expression](#expiration-expression) items |  |  | 
| expiration_expression (Alternate 2) | *not set* | Decimal number |  |  | 
| max_lifetime | *not set* | Molang | The maximum lifetime of the particle in seconds. Can be a number or Molang expression. |  | 
| max_lifetime (Alternate 1) | *not set* | Key/item pairs of [Max Lifetime](#max-lifetime) items |  |  | 
| max_lifetime (Alternate 2) | *not set* | Decimal number |  |  | 

## Expiration Expression

#### Expiration Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Max Lifetime

#### Max Lifetime Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 