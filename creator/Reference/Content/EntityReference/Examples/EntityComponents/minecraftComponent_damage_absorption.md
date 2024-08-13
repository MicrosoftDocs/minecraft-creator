---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:damage_absorption
description: "A reference document detailing the 'damage_absorption' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:damage_absorption

`minecraft:damage_absorption` allows an item to absorb damage that would otherwise be dealt to its wearer. For this to happen, the item needs to be equipped in an armor slot. The absorbed damage reduces the item's durability, with any excess damage being ignored. Because of this, the item also needs a `minecraft:durability` component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| absorbable_causes | None | array | List of damage causes that can be absorbed by the item. By default, no damage cause is absorbed. |

