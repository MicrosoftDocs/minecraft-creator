---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:friction_modifier"
description: "Describes the minecraft:friction_modifier entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:friction_modifier

Defines how much friction affects this entity.

> [!Note]
> In format version 1.26.20, the component's behavior was corrected to match its description: higher values cause more friction (0.0 = no friction, 1.0 = regular, 2.0 = double). It now affects ground friction only (no longer partially affecting air or liquid drag) and works correctly on players and other client-predicted entities. Add `minecraft:uses_legacy_friction` to opt back into the legacy behavior; entities authored against format versions older than 1.26.20 receive it automatically.


## Friction Modifier Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| value | 1 | Decimal number | The higher the number, the more friction affects this entity. A value of 1.0 means regular friction, while 2.0 means twice as much. | 