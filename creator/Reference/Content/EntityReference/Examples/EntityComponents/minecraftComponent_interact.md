---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:interact"
description: "Describes the minecraft:interact entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:interact

Defines interactions with this entity.


## Interact Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 0 | Decimal number | Time in seconds before this entity can be interacted with again. |  | 
| cooldown_after_being_attacked | 0 | Decimal number | Time in seconds before this entity can be interacted with after being attacked. |  | 
| drop_item_slot | *not set* | String | The entity's slot to remove and drop the item from, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'. |  | 
| drop_item_y_offset | 0 | Decimal number | Will offset the item drop position this amount in the y direction. Requires "drop_item_slot" to be specified. |  | 
| equip_item_slot | *not set* | String | The entity's slot to equip the item to, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'. |  | 
| health_amount | 0 | Integer number | The amount of health this entity will recover or lose when interacting with this item. Negative values will harm the entity. |  | 
| hurt_item | 0 | Integer number | The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. |  | 
| interact_text | *not set* | String | Text to show when the player is able to interact in this way with this entity when playing with touch-screen controls. |  | 
| interactions (Interactions) | *not set* | Array of [Interactions](#interactions) items | The list of interactions for this entity. |  | 
| interactions (Alternate 1) | *not set* | Object |  |  | 

## Interactions

#### Interactions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| give_item | false | Boolean true/false | If true, the player can give items to the entity during interaction. | Allay: `true` | 
| hurt_item | *not set* | Decimal number |  |  | 
| interact_text | *not set* | String |  | Allay: `"action.interact.allay"` | 
| on_interact | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when the interaction occurs. Can be a string event name or an object with filters. | Allay: `{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"is_sneak_held","subject":"other","value":false}]}}` | 
| particle_on_start | *not set* | Array of [Particle On Start](#particle-on-start) items | Particle effect that will be triggered at the start of the interaction. |  | 
| particle_on_start | *not set* | [Particle On Start](#particle-on-start) item |  |  | 
| play_sounds | *not set* | String | List of sounds to play when the interaction occurs. |  | 
| play_sounds | *not set* | String |  |  | 
| repair_entity_item | *not set* | Array of [Repair Entity Item](#repair-entity-item) items | Allows to repair one of the entity's items. |  | 
| spawn_entities | *not set* | String | List of entities to spawn when the interaction occurs. |  | 
| spawn_items | *not set* | Array of [Spawn Items](#spawn-items) items | Loot table with items to drop on the ground upon successful interaction. |  | 
| spawn_items | *not set* | [Spawn Items](#spawn-items) item |  |  | 
| swing | false | Boolean true/false | If true, the player will do the 'swing' animation when interacting with this entity. |  | 
| swing | false | Boolean true/false | If true, the player will do the 'swing' animation when interacting with this entity. |  | 
| take_item | false | Boolean true/false | If true, the player can take items from the entity during interaction. | Allay: `true` | 
| transform_to_item | *not set* | String | The item used will transform to this item upon successful interaction. Format: itemName:auxValue |  | 
| use_item | false | Boolean true/false | If true, the interaction will use an item. |  | 
| use_item | false | Boolean true/false | If true, the interaction will use an item. |  | 
| vibration | entity_interact | String | Vibration to emit when the interaction occurs. Admitted values are none (no vibration emitted), shear, entity_die, entity_act, entity_interact. |  | 

## Particle On Start
Particle effect that will be triggered at the start of the interaction.


#### Particle On Start Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| particle_offset_towards_interactor | false | Boolean true/false | Whether or not the particle will appear closer to who performed the interaction. |  | 
| particle_type | *not set* | String | The type of particle that will be spawned. |  | 
| particle_y_offset | 0 | Decimal number | Will offset the particle this amount in the y direction. |  | 

## Repair Entity Item
Allows to repair one of the entity's items.


#### Repair Entity Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| amount | *not set* | Integer number | How much of the item durability should be restored upon interaction. |  | 
| slot | *not set* | Integer number | The entity's slot containing the item to be repaired. Inventory slots are denoted by positive numbers. Armor slots are denoted by 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and 'slot.armor.body'. |  | 

## Spawn Items
Loot table with items to drop on the ground upon successful interaction.


#### Spawn Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| table | *not set* | String | File path, relative to the Behavior Pack's path, to the loot table file. |  | 
| y_offset | 1 | Decimal number | Will offset the items spawn position this amount in the y direction. |  | 

## Samples
