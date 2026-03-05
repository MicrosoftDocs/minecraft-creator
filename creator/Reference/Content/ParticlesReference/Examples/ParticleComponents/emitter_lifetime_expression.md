---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_lifetime_expression"
description: "Describes the minecraft:emitter_lifetime_expression particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_lifetime_expression

Controls when the emitter activates and expires using Molang expressions. The activation expression starts particle emission when it evaluates to non-zero, and the expiration expression stops it. This enables dynamic effects tied to entity state—like flames that only appear when an entity is on fire, or magic particles that pulse with the caster's mana.


## Client Particles Emitter Lifetime Expression Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| activation_expression | 1 | Molang | When the expression is non-zero, the emitter is activated. Can be a number or Molang expression. | 
| activation_expression (Activation Expression) | *not set* | Key/item pairs of [Activation Expression (Activation Expression)](#activation-expression-activation-expression) items |  | 
| activation_expression (as Decimal number) | *not set* | Decimal number |  | 
| expiration_expression | 0 | Molang | When the expression is non-zero, the emitter expires. Can be a number or Molang expression. | 
| expiration_expression (Expiration Expression) | *not set* | Key/item pairs of [Expiration Expression (Expiration Expression)](#expiration-expression-expiration-expression) items |  | 
| expiration_expression (as Decimal number) | *not set* | Decimal number |  | 

### Activation Expression (Activation Expression)

#### Activation Expression Properties

**JSON path:** `activation_expression`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Expiration Expression (Expiration Expression)

Same structure as [Activation Expression (Activation Expression)](#activation-expression-activation-expression).
