---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:redstone_conductivity
description: "A reference document detailing the 'redstone_conductivity' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:redstone_conductivity

`minecraft:redstone_conductivity` specifies whether a block has redstone properties. If the component is not provided, the default values are used. 

Requires 1.21.30 format version and above. Experimental toggles required: Upcoming Creator Features (in format versions before **1.21.30**).

## Parameters

| Name| Type |Default Value| Description
:-----------:|:-----------:|:-----------:|:-----------:
| allows_wire_to_step_down | Boolean | True | Specifies if redstone wire can stair-step downward on the block. |
| redstone_conductor | Boolean | False | Specifies if the block can be powered by redstone.|

