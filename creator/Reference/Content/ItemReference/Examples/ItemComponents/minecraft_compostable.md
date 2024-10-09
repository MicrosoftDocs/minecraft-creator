---
author: iconicNurdle
ms.author: mikeam
title: Item Documentation - minecraft:compostable
description: "A reference document detailing the 'compostable' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:compostable

Items with the `minecraft:compostable` component are compostable in the composter block. The component has a required field that defines the chance of generating a layer of compost in the composter block when a compostable item is supplied to a composter block.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| composting_chance | 100 |Integer | The chance of this item generating a compost layer when supplied to the composter block. Valid values range from 1 - 100, inclusive. |

