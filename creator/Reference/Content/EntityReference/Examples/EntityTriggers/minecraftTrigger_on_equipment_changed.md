---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_equipment_changed"
description: "Describes the minecraft:on_equipment_changed entity trigger"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_equipment_changed

Allows to specify events to execute when equipment is set in the entity's default equipment slots. Doesn't apply to "minecraft:inventory", use "minecraft:equippable" instead.


## Entity On Equipment Changed Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| slots | [] | Array of [Slots](#entity-onequipmentchangedslotentrydescriptor) items | A list of slot-specific events to execute when the entity's equipment changes in those slots. | 

### Entity OnEquipmentChangedSlotEntryDescriptor

#### Entity OnEquipmentChangedSlotEntryDescriptor Properties

**JSON path:** `slots`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| on_equip |  | String | Event to execute when the slot is changed to a non-empty item. | 
| on_unequip |  | String | Event to execute when the slot is changed to an empty item. | 
| slot | slot.weapon.mainhand | [Slot](#slot-choices) choices | The equipment slot to monitor for changes. | 

### Slot choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| slot.armor.body | Slot.armor.body | |
| slot.armor.chest | Slot.armor.chest | |
| slot.armor.feet | Slot.armor.feet | |
| slot.armor.head | Slot.armor.head | |
| slot.armor.legs | Slot.armor.legs | |
| slot.weapon.mainhand | Slot.weapon.mainhand | |
| slot.weapon.offhand | Slot.weapon.offhand | |