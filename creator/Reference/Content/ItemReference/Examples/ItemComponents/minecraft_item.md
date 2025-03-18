---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:item"
description: "Describes the minecraft:item item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:item

Item definition includes the "description" and "components" sections.


## Minecraft Item Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| components | *not set* | [Components](#components-item-type) item | List of all components used in this item. |  | 
| description | *not set* | Object | Contains the required identifier for the item. May contain optional fields like menu_category. |  | 

## Components item type
List of all components used in this item.


#### Components Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:allow_off_hand | *not set* | Object | The allow_off_hand component determines whether the item can be placed in the off hand slot of the inventory. |  | 
| minecraft:block_placer | *not set* | [Block Placer](#block-placer-item-type) item | Items with the block_placer component will place a block when used. <br>This component can also be used instead of the "minecraft:icon" component to render the referenced block as the item icon. |  | 
| minecraft:bundle_interaction | *not set* | [Bundle Interaction](#bundle-interaction-item-type) item | [EXPERIMENTAL] Adds bundle-specific interactions and tooltip to the item. Requires a "minecraft:storage_item" component. |  | 
| minecraft:can_destroy_in_creative | *not set* | Object | The can_destroy_in_creative component determines if the item can be used by a player to break blocks when in creative mode. |  | 
| minecraft:compostable | *not set* | [Compostable](#compostable-item-type) item | Specifies that an item is compostable and provides the chance of creating a composting layer in the composter |  | 
| minecraft:cooldown | *not set* | [Cooldown](#cooldown-item-type) item | After you use an item, all items specified with the same `cool down category` setting becomes unusable for the duration specified by the 'cool down time' setting in this component. |  | 
| minecraft:custom_components | *not set* | Object | Specifies an array of custom components defined in a script that should be added to this item. |  | 
| minecraft:damage | *not set* | Object | The damage component determines how much extra damage the item does on attack. |  | 
| minecraft:damage_absorption | *not set* | [Damage Absorption](#damage-absorption-item-type) item | It allows an item to absorb damage that would otherwise be dealt to its wearer. For this to happen, the item needs to be equipped in an armor slot. The absorbed damage reduces the item's durability, with any excess damage being ignored. Because of this, the item also needs a `minecraft:durability` component. |  | 
| minecraft:digger | *not set* | [Digger](#digger-item-type) item | Digger item component specifies how quickly this item can dig specific blocks. |  | 
| minecraft:display_name | *not set* | [Display Name](#display-name-item-type) item | The display_name item component specifies the text shown whenever an item's name is displayed, like in hover text. |  | 
| minecraft:durability | *not set* | [Durability](#durability-item-type) item | The durability item component specifies how much damage the item takes before breaking, and allows the item to be combined to repair or augment them. |  | 
| minecraft:durability_sensor | *not set* | [Durability Sensor](#durability-sensor-item-type) item | Enables an item to emit effects when it receives damage. Because of this, the item also needs a `minecraft:durability` component. |  | 
| minecraft:dyeable | *not set* | [Dyeable](#dyeable-item-type) item | minecraft:dyeable |  | 
| minecraft:enchantable | *not set* | [Enchantable](#enchantable-item-type) item | The enchantable component specifies what enchantments can be applied to the item. Not all enchantments will have an effect on all item components. |  | 
| minecraft:entity_placer | *not set* | [Entity Placer](#entity-placer-item-type) item | The entity_placer item component specifies the blocks that the item can be placed on. |  | 
| minecraft:food | *not set* | [Food](#food-item-type) item | When an item has a food component, it becomes edible to the player. Must have the 'minecraft:use_duration' component in order to function properly. |  | 
| minecraft:fuel | *not set* | Object | Fuel item component allows this item to be used as fuel in a furnace to 'cook' other items. |  | 
| minecraft:glint | *not set* | Object | The glint component determines whether the item has the enchanted glint render effect on it. |  | 
| minecraft:hand_equipped | *not set* | Object | The hand_equipped component determines if an item is rendered like a tool while it is in a player's hand. |  | 
| minecraft:hover_text_color | *not set* | Object | The hover_text_color component specifies the color of the item name when the players hovers the cursor over the item. |  | 
| minecraft:icon | *not set* | Object | Icon item component determines which icon graphic will be used to represent the item in the UI and elsewhere. |  | 
| minecraft:interact_button | *not set* | Object | This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button. When set as true, default "Use Item" text will be displayed. |  | 
| minecraft:liquid_clipped | *not set* | Object | The liquid_clipped component determines whether the item interacts with liquid blocks on use. |  | 
| minecraft:max_stack_size | *not set* | Object | The max_stack_size component specifies how many of the item can be stacked together. |  | 
| minecraft:projectile | *not set* | [Projectile](#projectile-item-type) item | Projectile items shoot out, like an arrow. |  | 
| minecraft:rarity | *not set* | Object | Specifies the base rarity and subsequently color of the item name when the player hovers the cursor over the item. |  | 
| minecraft:record | *not set* | [Record](#record-item-type) item | Record Item Component. Used by record items to play music. |  | 
| minecraft:repairable | *not set* | [Repairable](#repairable-item-type) item | The repairable item component specifies which items can be used to repair this item, along with how much durability is gained. |  | 
| minecraft:shooter | *not set* | [Shooter](#shooter-item-type) item | Shooter Item Component. |  | 
| minecraft:should_despawn | *not set* | Object | Should_despawn component determines if the item should eventually despawn while floating in the world |  | 
| minecraft:stacked_by_data | *not set* | Object | The stacked_by_data component determines whether the same items with different aux values can stack. Also defines whether the item entities can merge while floating in the world. |  | 
| minecraft:storage_item | *not set* | [Storage Item](#storage-item-item-type) item | [EXPERIMENTAL] Storage Items can be used by other components to store other items within this item. |  | 
| minecraft:storage_weight_limit | *not set* | [Storage Weight Limit](#storage-weight-limit-item-type) item | Specifies the maximum weight limit that a storage item can hold |  | 
| minecraft:storage_weight_modifier | *not set* | [Storage Weight Modifier](#storage-weight-modifier-item-type) item | Specifies the maximum weight limit that a storage item can hold |  | 
| minecraft:tags | *not set* | Object | The tags component specifies which tags an item has on it. |  | 
| minecraft:throwable | *not set* | [Throwable](#throwable-item-type) item | Throwable items can be thrown by the player, such as a snowball. |  | 
| minecraft:use_animation | *not set* | Object | Use_animation specifies which animation is played when the player uses the item. |  | 
| minecraft:use_modifiers | *not set* | [Use Modifiers](#use-modifiers-item-type) item | This component modifies use effects, including how long the item takes to use and the player's speed when used in combination with components like "shooter", "throwable", or "food". |  | 
| minecraft:wearable | *not set* | [Wearable](#wearable-item-type) item | Wearable items can be worn by a player in the head, chest, legs, feet, or off-hand slots. |  | 

## Block Placer item type
Items with the block_placer component will place a block when used. 
This component can also be used instead of the "minecraft:icon" component to render the referenced block as the item icon.


#### Block Placer Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block | *not set* | Object | Defines the block that will be placed. |  | 
| replace_block_item | *not set* | Boolean true/false | If true, the item will be registered as the item for this block. This item will be returned by default when the block is broken/picked. Note: the identifier for this item must match the block's identifier for this field to be valid. |  | 
| use_on | *not set* | Array of objects | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. |  | 

## Bundle Interaction item type
[EXPERIMENTAL] Adds bundle-specific interactions and tooltip to the item. Requires a "minecraft:storage_item" component.


#### Bundle Interaction Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_viewable_slots | *not set* | Integer number | The maximum number of slots in the bundle viewable by the plater. Can be from 1 to 64. Default is 12. |  | 

## Compostable item type
Specifies that an item is compostable and provides the chance of creating a composting layer in the composter.


#### Compostable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| composting_chance | *not set* | Integer number | The chance of this item to create a layer upon composting with the composter. Valid value range is 1 - 100 inclusive |  | 

## Cooldown item type
After you use an item, all items specified with the same `cool down category` setting becomes unusable for the duration specified by the 'cool down time' setting in this component.


#### Cooldown Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| category | *not set* | String | The type of cool down for this item. All items with a cool down component with the same category are put on cool down when one is used. |  | 
| duration | *not set* | Decimal number | The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again. |  | 

## Damage Absorption item type
It allows an item to absorb damage that would otherwise be dealt to its wearer. For this to happen, the item needs to be equipped in an armor slot. The absorbed damage reduces the item's durability, with any excess damage being ignored. Because of this, the item also needs a `minecraft:durability` component.


#### Damage Absorption Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| absorbable_causes | *not set* | Array of objects | List of damage causes that can be absorbed by the item. By default, no damage cause is absorbed. |  | 

## Digger item type
Digger item component specifies how quickly this item can dig specific blocks.


#### Digger Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| destroy_speeds | *not set* | Array of objects | A list of blocks to dig with correlating speeds of digging. |  | 
| use_efficiency | *not set* | Boolean true/false | Determines whether this item should be impacted if the efficiency enchantment is applied to it. |  | 

## Display Name item type
The display_name item component specifies the text shown whenever an item's name is displayed, like in hover text.


#### Display Name Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | String | Name shown for an item. |  | 

## Durability item type
The durability item component specifies how much damage the item takes before breaking, and allows the item to be combined to repair or augment them.


#### Durability Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage_chance | *not set* | Object | Specifies the percentage chance of this item losing durability. Default is set to 100. Defined as an int range with min and max value. |  | 
| max_durability | *not set* | Integer number | Max durability is the amount of damage that this item can take before breaking. This is a required parameter and has a minimum of 0. |  | 

## Durability Sensor item type
Enables an item to emit effects when it receives damage. Because of this, the item also needs a `minecraft:durability` component.


#### Durability Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| durability_thresholds | *not set* | Array of objects | The list of both durability thresholds and effects emitted when each threshold is met. When multiple thresholds are met, only the threshold with the lowest durability after applying the damage is considered. |  | 

## Dyeable item type
Dyeable


#### Dyeable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| default_color | *not set* | Object | default_color |  | 

## Enchantable item type
The enchantable component specifies what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.


#### Enchantable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| slot | *not set* | String | Specifies which types of enchantments can be applied. For example, `bow` would allow this item to be enchanted as if it were a bow. |  | 
| value | *not set* | Integer number | Specifies the value of the enchantment (minimum of 0). |  | 

## Entity Placer item type
The entity_placer item component specifies the blocks that the item can be placed on.


#### Entity Placer Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| dispense_on | *not set* | Array of objects | List of block descriptors of the blocks that this item can be dispensed on. If left empty, all blocks will be allowed. |  | 
| entity | *not set* | String | The entity to be placed in the world. |  | 
| use_on | *not set* | Array of objects | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. |  | 

## Food item type
When an item has a food component, it becomes edible to the player. Must have the 'minecraft:use_duration' component in order to function properly.


#### Food Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_always_eat | *not set* | Boolean true/false | If true you can always eat this item (even when not hungry). Default is set to false. |  | 
| nutrition | *not set* | Integer number | Value that is added to the entity's nutrition when the item is used. Default is set to 0. |  | 
| saturation_modifier | *not set* | Decimal number | saturation_modifier is used in this formula: (nutrition * saturation_modifier * 2) when applying the saturation buff. Default is set to 0.6. |  | 
| using_converts_to | *not set* | Object | When used, converts to the item specified by the string in this field. Default does not convert item. |  | 

## Projectile item type
Projectile items shoot out, like an arrow.


#### Projectile Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minimum_critical_power | *not set* | Decimal number | Specifies how long a player must charge a projectile for it to critically hit. |  | 
| projectile_entity | *not set* | String | Which entity is to be fired as a projectile. |  | 

## Record item type
Record Item Component. Used by record items to play music.


#### Record Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| comparator_signal | *not set* | Integer number | Specifies signal strength for comparator blocks to use, from 1 - 13. |  | 
| duration | *not set* | Decimal number | Specifies duration of sound event in seconds, float value. |  | 
| sound_event | *not set* | String | Sound event type: 13, cat, blocks, chirp, far, mall, mellohi, stal, strad, ward, 11, wait, pigstep, otherside, 5, relic. |  | 

## Repairable item type
The repairable item component specifies which items can be used to repair this item, along with how much durability is gained.


#### Repairable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| repair_items | *not set* | Array of objects | List of repair item entries. Each entry needs to define a list of strings for `items` that can be used for the repair and an optional `repair_amount` for how much durability is gained. |  | 

## Shooter item type
Shooter Item Component.


#### Shooter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ammunition | *not set* | Array of objects | Ammunition. |  | 
| charge_on_draw | *not set* | Boolean true/false | Charge on draw? Default is set to false. |  | 
| max_draw_duration | *not set* | Decimal number | Draw Duration. Default is set to 0. |  | 
| scale_power_by_draw_duration | *not set* | Boolean true/false | Scale power by draw duration? Default is set to false. |  | 

## Storage Item item type
[EXPERIMENTAL] Storage Items can be used by other components to store other items within this item.


#### Storage Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_nested_storage_items | *not set* | Boolean true/false | Determines whether another Storage Item is allowed inside of this item. Default is true. |  | 
| allowed_items | *not set* | Array of objects | List of items that are exclusively allowed in this Storage Item. If empty all items are allowed. |  | 
| banned_items | *not set* | Array of objects | List of items that are not allowed in this Storage Item. |  | 
| max_slots | *not set* | Integer number | The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64. |  | 

## Storage Weight Limit item type
Specifies the maximum weight limit that a storage item can hold.


#### Storage Weight Limit Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_weight_limit | *not set* | Integer number | The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64. |  | 

## Storage Weight Modifier item type
Specifies the maximum weight limit that a storage item can hold.


#### Storage Weight Modifier Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| weight_in_storage_item | *not set* | Integer number | The weight of this item when inside another Storage Item. Default is 4. 0 means item is not allowed in another Storage Item. |  | 

## Throwable item type
Throwable items can be thrown by the player, such as a snowball.


#### Throwable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| do_swing_animation | *not set* | Boolean true/false | Determines whether the item should use the swing animation when thrown. Default is set to false. |  | 
| launch_power_scale | *not set* | Decimal number | The scale at which the power of the throw increases. Default is set to 1.0. |  | 
| max_draw_duration | *not set* | Decimal number | The maximum duration to draw a throwable item. Default is set to 0.0. |  | 
| max_launch_power | *not set* | Decimal number | The maximum power to launch the throwable item. Default is set to 1.0. |  | 
| min_draw_duration | *not set* | Decimal number | The minimum duration to draw a throwable item. Default is set to 0.0. |  | 
| scale_power_by_draw_duration | *not set* | Boolean true/false | Whether or not the power of the throw increases with duration charged. Default is set to false. |  | 

## Use Modifiers item type
This component modifies use effects, including how long the item takes to use and the player's speed when used in combination with components like "shooter", "throwable", or "food".


#### Use Modifiers Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| movement_modifier | *not set* | Decimal number | Modifier value to scale the players movement speed when item is in use. |  | 
| use_duration | *not set* | Decimal number | How long the item takes to use in seconds. |  | 

## Wearable item type
Wearable items can be worn by a player in the head, chest, legs, feet, or off-hand slots.


#### Wearable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| protection | *not set* | Integer number | How much protection the wearable item provides. Default is set to 0. |  | 
| slot | *not set* | String | Specifies where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. |  | 