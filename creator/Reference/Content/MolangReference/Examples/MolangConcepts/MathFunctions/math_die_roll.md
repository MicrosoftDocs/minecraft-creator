---
author: mammerla
ms.author: mikeam
title: "Molang Documentation - minecraft:math_die_roll"
description: "Describes the minecraft:math_die_roll molang"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Documentation - minecraft:math_die_roll

returns the sum of 'num' random numbers, each with a value from low to high`.  Note: the generated random numbers are not integers like normal dice.  For that, use `math.die_roll_integer`.

> [!Note]
> The difference between `math.die_roll` and `math.die_roll_integer` is that the former uses floating point and can return non-integer numbers; the latter works only with integers. If you're really trying to simulate actual dice, use `math.die_roll_integer`.
