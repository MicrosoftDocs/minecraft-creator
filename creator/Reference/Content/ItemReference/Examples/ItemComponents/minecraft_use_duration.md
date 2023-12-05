---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:use_modifiers
description: "A reference document detailing the 'use modifiers' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:use_modifiers

`minecraft:use_modifiers` modifies use effects including how long an item takes to use and player speed when determined in combination with components such as Shooter, Throwable, or Food.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| movement_modifier| | Float| Modifier value by which to scale player movement speed when the item is in use.|
| use_duration| | Float| How long, in seconds, the item takes to use. |
