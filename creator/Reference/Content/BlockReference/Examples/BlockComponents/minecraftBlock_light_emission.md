---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:light_emission"
description: "Describes the minecraft:light_emission block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:light_emission

The amount of light this block will emit in a range of 0-15. Higher value means more light will be emitted. Reference values: torch (14), glowstone (15), redstone torch (7), soul torch (10). Monsters cannot spawn on blocks with light level 8 or higher.

> [!Note]
> In format version 1.26.20, validation strictly enforces that the value must be an integer between 0 and 15 inclusive; out-of-range values are rejected at load time.

## Alternate Simple Representations

This item can also be represented as a `Integer number`.


## Samples

#### Block Fabricator


```json
"minecraft:light_emission": 7
```

#### Block Gray Ore


```json
"minecraft:light_emission": 15
```
