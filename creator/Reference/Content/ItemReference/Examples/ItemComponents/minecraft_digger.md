---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:digger
description: "A reference document detailing the 'digger' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:digger

`minecraft:digger` allows a creator to determine how quickly an item can dig specific blocks.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| destroy_speeds| *not set*| Array| A list of blocks to dig, with correlating speeds of digging.|
| use_efficiency| *not set*| Boolean| Determines whether the item should be impacted if the `efficiency` enchant is applied to it.|
