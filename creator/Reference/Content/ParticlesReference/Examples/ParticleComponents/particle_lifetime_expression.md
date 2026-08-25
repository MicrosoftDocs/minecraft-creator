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

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expiration_expression | 0 | Molang | When the expression is non-zero, the particle expires. Can be a number or Molang expression. | 
| expiration_expression (as Named set of objects) | *not set* | Key/item pairs of [Expiration Expression (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| expiration_expression (as Decimal number) | *not set* | Decimal number |  | 
| max_lifetime | *not set* | Molang | The maximum lifetime of the particle in seconds. Can be a number or Molang expression. | 
| max_lifetime (as Named set of objects) | *not set* | Key/item pairs of [Max Lifetime (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| max_lifetime (as Decimal number) | *not set* | Decimal number |  | 

### Legacy Molang Expression

#### Legacy Molang Expression Properties

**JSON path:** `expiration_expression`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 