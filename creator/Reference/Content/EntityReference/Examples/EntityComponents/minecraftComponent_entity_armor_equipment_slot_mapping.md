---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:entity_armor_equipment_slot_mapping"
description: "Describes the minecraft:entity_armor_equipment_slot_mapping entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:entity_armor_equipment_slot_mapping

It defines to which armor slot an item equipped to 'minecraft:equippable''s second slot should be equipped to. It is automatically applied to all entities for worlds with a version greater than or equal to 1.21.10. For older worlds, 'slot.armor.torso' will be used. It is strongly advised not to explicitly use this component, as no backwards compatibility for it will be provided.


## Entity Armor Equipment Slot Mapping Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| armor_slot | *not set* | String | The armor slot an item equipped to 'minecraft:equippable''s second slot should be equipped to. It defaults to 'slot.armor.torso' for entities with a format version prior to 1.21.10, and to 'slot.armor.body' otherwise. |  | 