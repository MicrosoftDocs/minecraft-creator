---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.swim_up_for_breath
description: "A reference document detailing the 'behavior.swim_up_for_breath' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.swim_up_for_breath

`minecraft:behavior.swim_up_for_breath` allows the mob to try to move to air once it is close to running out of its total breathable supply. Requires `minecraft:breathable`.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| material_type | water | String | The material the mob is traveling in. An air block will only be considered valid to move to with a block of this material below it. Options are: "water", "lava", or "any". |
| search_height | 16 | Integer | The height (in blocks) above the mob's current position that it will search for a valid air block to move to. If a valid block cannot be found, the mob will move to the position this many blocks above it. | 
| search_radius | 4 | Integer | The radius (in blocks) around the mob's current position that it will search for a valid air block to move to. |
| speed_mod | 1.40 | Decimal | Movement speed multiplier of the mob when using this Goal. |
