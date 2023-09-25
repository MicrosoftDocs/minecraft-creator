---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:variable_max_auto_step
description: "A reference document detailing the 'variable_max_auto_step' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:variable_max_auto_step

`minecraft:variable_max_auto_step`
Allows entities have a maximum auto step height that is different depending on whether they are on a block that prevents jumping. Incompatible with "runtime_identifier": "minecraft:horse".

## Parameters

|Name |Default Value  |Type  |Description  |
|:-----------|:-----------|:-----------|:-----------|
| base_value| 0.5625| Decimal| The maximum auto step height when on any other block. |
| controlled_value| 0.5625| Decimal| The maximum auto step height when on any other block and controlled by the player. |
| jump_prevented_value| 0.5625| Decimal| The maximum auto step height when on a block that prevents jumping.|
