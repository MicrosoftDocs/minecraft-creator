---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:liquid_detection
description: "A reference document detailing the 'liquid_detection' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:liquid_detection

`minecraft:liquid_detection` is an `Identifier String` component that defines how a block behaves when detecting liquid. Only one rule definition is allowed per liquid type. If multiple are specified, the first will be used and the rest will be ignored.

## Parameters

| Name| Type |Default Value| Description
:-----------|:-----------|:-----------|:-----------|
| can_contain_liquid | Boolean | false | Whether this block can contain the liquid`.` For example, if the liquid type is `water`, this means the block can be waterlogged. |
| liquid_type | String | water | The type of liquid this detection rule is for. Currently, `water` is the only supported liquid type. If this field is omitted, `water` will be the liquid type by default. |
| on_liquid_touches | String | blocking | How the block reacts to flowing water. Must be one of the following options: </br>"blocking" - The default value for this field. The block stops the liquid from flowing. </br>"broken" - The block is destroyed completely. </br>"popped" - The block is destroyed and its item is spawned.</br>"no_reaction" - The block is unaffected; visually, the liquid will flow through the block. |
| stops_liquid_flowing_from_direction | Array | *not set* | When a block contains a liquid, controls the directions in which the liquid can't flow out from the block. Also controls the directions in which a block can stop liquid flowing into it if `no_reaction` is set for the `on_liquid_touches` field. Can be a list of the following directions: "up", "down", "north", "south", "east", "west". The default is an empty list; this means that liquid can flow out of all directions by default. |



