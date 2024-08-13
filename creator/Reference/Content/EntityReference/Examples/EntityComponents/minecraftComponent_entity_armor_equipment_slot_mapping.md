---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:entity_armor_equipment_slot_mapping
description: "A reference document detailing the 'entity_armor_equipment_slot_mapping' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:entity_armor_equipment_slot_mapping

`minecraft:entity_armor_equipment_slot_mapping` specifies the armor slot where an item in the `minecraft:equippable` second slot should be equipped. It is automatically applied to all entities for worlds with a version greater than or equal to 1.21.10. For older worlds, `slot.armor.torso` will be used. It is strongly advised not to explicitly use this component, as no backwards compatibility for it will be provided.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| armor_slot | `slot.armor.torso` or `slot.armor.body` (1.21.10 or newer) | String | Specifies the armor slot where the armor should be equipped. It defaults to `slot.armor.torso` for entities with a format version prior to 1.21.10, and to `slot.armor.body` otherwise. |

