---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:item"
description: "Describes the minecraft:item item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:item

Refers to the item definition, which includes the 'description' and 'components' sections of the file.


## Minecraft Item Item Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| components | *not set* | [Components](#components) item | List of all components used in this item. | 
| description | *not set* | [Description](#description) item | Contains the required identifier for the item. May contain optional fields like menu_category. | 

### Components
List of all components used in this item.


#### Components Properties

**JSON path:** `components`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minecraft:allow_off_hand | *not set* | Boolean true/false | The allow_off_hand component determines whether the item can be placed in the off hand slot of the inventory. | 
| minecraft:allow_off_hand (Allow Off Hand) | *not set* | [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand) item |  | 
| minecraft:block_placer | *not set* | [Block Placer](#block-placer) item | Items with the block_placer component will place a block when used. This component can also be used instead of the "minecraft:icon" component to render the referenced block as the item icon. | 
| minecraft:bundle_interaction | *not set* | [Bundle Interaction](#bundle-interaction) item | [EXPERIMENTAL] Adds bundle-specific interactions and tooltip to the item. Requires a "minecraft:storage_item" component. | 
| minecraft:can_destroy_in_creative | *not set* | Boolean true/false | The can_destroy_in_creative component determines if the item can be used by a player to break blocks when in creative mode. | 
| minecraft:can_destroy_in_creative (Can Destroy In Creative) | *not set* | [Can Destroy In Creative (Can Destroy In Creative)](#can-destroy-in-creative-can-destroy-in-creative) item |  | 
| minecraft:compostable | *not set* | [Compostable](#compostable) item | Specifies that an item is compostable and provides the chance of creating a composting layer in the composter | 
| minecraft:cooldown | *not set* | [Cooldown](#cooldown) item | After you use an item, all items specified with the same `cool down category` setting becomes unusable for the duration specified by the 'cool down time' setting in this component. | 
| minecraft:custom_components | *not set* | Object | Specifies an array of custom components defined in a script that should be added to this item. | 
| minecraft:damage | *not set* | Integer number | The damage component determines how much extra damage the item does on attack. | 
| minecraft:damage (Damage) | *not set* | [Damage (Damage)](#damage-damage) item |  | 
| minecraft:damage_absorption | *not set* | [Damage Absorption](#damage-absorption) item | It allows an item to absorb damage that would otherwise be dealt to its wearer. | 
| minecraft:digger | *not set* | [Digger](#digger) item | Digger item component specifies how quickly this item can dig specific blocks. | 
| minecraft:display_name | *not set* | [Display Name](#display-name) item | The display_name item component specifies the text shown whenever an item's name is displayed, like in hover text. | 
| minecraft:durability | *not set* | [Durability](#durability) item | The durability item component specifies how much damage the item takes before breaking, and allows the item to be combined to repair or augment them. | 
| minecraft:durability_sensor | *not set* | [Durability Sensor](#durability-sensor) item | Enables an item to emit effects when it receives damage. Because of this, the item also needs a `minecraft:durability` component. | 
| minecraft:dyeable | *not set* | [Dyeable](#dyeable) item | minecraft:dyeable | 
| minecraft:enchantable | *not set* | [Enchantable](#enchantable) item | The enchantable component specifies what enchantments can be applied to the item. Not all enchantments will have an effect on all item components. | 
| minecraft:entity_placer | *not set* | [Entity Placer](#entity-placer) item | The entity_placer item component specifies the blocks that the item can be placed on. | 
| minecraft:food | *not set* | [Food](#food) item | When an item has a food component, it becomes edible to the player. Must have the 'minecraft:use_duration' component in order to function properly. | 
| minecraft:fuel | *not set* | Decimal number | Fuel item component allows this item to be used as fuel in a furnace to 'cook' other items. | 
| minecraft:fuel (Fuel) | *not set* | [Fuel (Fuel)](#fuel-fuel) item |  | 
| minecraft:glint | *not set* | Boolean true/false | The glint component determines whether the item has the enchanted glint render effect on it. | 
| minecraft:glint (Glint) | *not set* | [Glint (Glint)](#glint-glint) item |  | 
| minecraft:hand_equipped | *not set* | Boolean true/false | The hand_equipped component determines if an item is rendered like a tool while it is in a player's hand. | 
| minecraft:hand_equipped (Hand Equipped) | *not set* | [Hand Equipped (Hand Equipped)](#hand-equipped-hand-equipped) item |  | 
| minecraft:hover_text_color | *not set* | String | The hover_text_color component specifies the color of the item name when the players hovers the cursor over the item. | 
| minecraft:hover_text_color (Hover Text Color) | *not set* | [Hover Text Color (Hover Text Color)](#hover-text-color-hover-text-color) item |  | 
| minecraft:icon | *not set* | String | Icon item component determines which icon graphic will be used to represent the item in the UI and elsewhere. | 
| minecraft:icon (Icon) | *not set* | [Icon (Icon)](#icon-icon) item |  | 
| minecraft:interact_button | *not set* | Boolean true/false | This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button. | 
| minecraft:interact_button (as String) | *not set* | String |  | 
| minecraft:liquid_clipped | *not set* | Boolean true/false | The liquid_clipped component determines whether the item interacts with liquid blocks on use. | 
| minecraft:liquid_clipped (Liquid Clipped) | *not set* | [Liquid Clipped (Liquid Clipped)](#liquid-clipped-liquid-clipped) item |  | 
| minecraft:max_stack_size | *not set* | Integer number | The max_stack_size component specifies how many of the item can be stacked together. | 
| minecraft:max_stack_size (Max Stack Size) | *not set* | [Max Stack Size (Max Stack Size)](#max-stack-size-max-stack-size) item |  | 
| minecraft:projectile | *not set* | [Projectile](#projectile) item | Projectile items shoot out, like an arrow. | 
| minecraft:rarity | *not set* | String | Specifies the base rarity and subsequently color of the item name when the player hovers the cursor over the item. | 
| minecraft:rarity (Rarity) | *not set* | [Rarity (Rarity)](#rarity-rarity) item |  | 
| minecraft:record | *not set* | [Record](#record) item | Record Item Component. Used by record items to play music. | 
| minecraft:repairable | *not set* | [Repairable](#repairable) item | The repairable item component specifies which items can be used to repair this item, along with how much durability is gained. | 
| minecraft:shooter | *not set* | [Shooter](#shooter) item | Shooter Item Component. | 
| minecraft:should_despawn | *not set* | Boolean true/false | Should_despawn component determines if the item should eventually despawn while floating in the world | 
| minecraft:should_despawn (Should Despawn) | *not set* | [Should Despawn (Should Despawn)](#should-despawn-should-despawn) item |  | 
| minecraft:stacked_by_data | *not set* | Boolean true/false | The stacked_by_data component determines whether the same items with different aux values can stack. Also defines whether the item entities can merge while floating in the world. | 
| minecraft:stacked_by_data (Stacked By Data) | *not set* | [Stacked By Data (Stacked By Data)](#stacked-by-data-stacked-by-data) item |  | 
| minecraft:storage_item | *not set* | [Storage Item](#storage-item) item | [EXPERIMENTAL] Storage Items can be used by other components to store other items within this item. | 
| minecraft:storage_weight_limit | *not set* | [Storage Weight Limit](#storage-weight-limit) item | Specifies the maximum weight limit that a storage item can hold | 
| minecraft:storage_weight_modifier | *not set* | [Storage Weight Modifier](#storage-weight-modifier) item | Specifies the maximum weight limit that a storage item can hold | 
| minecraft:tags | *not set* | [Tags](#tags) item | The tags component specifies which tags an item has on it. | 
| minecraft:throwable | *not set* | [Throwable](#throwable) item | Throwable items can be thrown by the player, such as a snowball. | 
| minecraft:use_animation | *not set* | String | Use_animation specifies which animation is played when the player uses the item. | 
| minecraft:use_animation (Use Animation) | *not set* | [Use Animation (Use Animation)](#use-animation-use-animation) item |  | 
| minecraft:use_modifiers | *not set* | [Use Modifiers](#use-modifiers) item | This component modifies use effects, including how long the item takes to use and the player's speed when used in combination with components like "shooter", "throwable", or "food". | 
| minecraft:wearable | *not set* | [Wearable](#wearable) item | Wearable items can be worn by a player in the head, chest, legs, feet, or off-hand slots. | 

#### minecraft:damage_absorption

It allows an item to absorb damage that would otherwise be dealt to its wearer. For this to happen, the item needs to be equipped in an armor slot. The absorbed damage reduces the item's durability, with any excess damage being ignored. Because of this, the item also needs a `minecraft:durability` component.

#### minecraft:interact_button

This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button. When set as true, default "Use Item" text will be displayed.


#### Allow Off Hand (Allow Off Hand)
Allow Off Hand.


##### Allow Off Hand Properties

**JSON path:** `components > minecraft:allow_off_hand`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| value | *not set* | Boolean true/false | Determines whether the item can be placed in the off hand slot. | 

#### Block Placer
Items with the block_placer component will place a block when used. 
This component can also be used instead of the "minecraft:icon" component to render the referenced block as the item icon.


##### Block Placer Properties

**JSON path:** `components > minecraft:block_placer`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block | *not set* | Object | Defines the block that will be placed. | 
| replace_block_item | *not set* | Boolean true/false | If true, the item will be registered as the item for this block. | 
| use_on (Use On) | *not set* | Array of [Use On](#use-on) items | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. | 
| use_on (as String) | *not set* | String |  | 
| use_on (as Object) | *not set* | Object |  | 

##### replace_block_item

If true, the item will be registered as the item for this block. This item will be returned by default when the block is broken/picked. Note: the identifier for this item must match the block's identifier for this field to be valid.


##### Use On
Use On


###### Use On Properties

**JSON path:** `components > minecraft:block_placer > use_on`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | String | name | 
| states | *not set* | Integer number | states | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags | *not set* | String | tags | 

#### Bundle Interaction
[EXPERIMENTAL] Adds bundle-specific interactions and tooltip to the item. Requires a "minecraft:storage_item" component.


##### Bundle Interaction Properties

**JSON path:** `components > minecraft:bundle_interaction`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| num_viewable_slots | *not set* | Integer number | The maximum number of slots in the bundle viewable by the plater. Can be from 1 to 64. Default is 12. Value must be >= 1. Value must be <= 64. | 

#### Can Destroy In Creative (Can Destroy In Creative)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Compostable
Specifies that an item is compostable and provides the chance of creating a composting layer in the composter.


##### Compostable Properties

**JSON path:** `components > minecraft:compostable`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| composting_chance | *not set* | Integer number | The chance of this item to create a layer upon composting with the composter. Valid value range is 1 - 100 inclusive Value must be >= 1. Value must be <= 100. | 

#### Cooldown
After you use an item, all items specified with the same `cool down category` setting becomes unusable for the duration specified by the 'cool down time' setting in this component.


##### Cooldown Properties

**JSON path:** `components > minecraft:cooldown`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| category | *not set* | String | The type of cool down for this item. All items with a cool down component with the same category are put on cool down when one is used. | 
| duration | *not set* | Decimal number | The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again. | 

#### Damage (Damage)
Damage


##### Damage Properties

**JSON path:** `components > minecraft:damage`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| value | *not set* | Integer number | Specifies how much extra damage the item does, must be a positive number. | 

#### Damage Absorption
It allows an item to absorb damage that would otherwise be dealt to its wearer. For this to happen, the item needs to be equipped in an armor slot. The absorbed damage reduces the item's durability, with any excess damage being ignored. Because of this, the item also needs a `minecraft:durability` component.


##### Damage Absorption Properties

**JSON path:** `components > minecraft:damage_absorption`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| absorbable_causes | *not set* | Array of strings | List of damage causes that can be absorbed by the item. By default, no damage cause is absorbed. Value must have at least 1 items. | 

#### Digger
Digger item component specifies how quickly this item can dig specific blocks.


##### Digger Properties

**JSON path:** `components > minecraft:digger`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| destroy_speeds | *not set* | Array of [Destroy Speeds](#destroy-speeds) items | A list of blocks to dig with correlating speeds of digging. | 
| use_efficiency | *not set* | Boolean true/false | Determines whether this item should be impacted if the efficiency enchantment is applied to it. | 

##### Destroy Speeds
V1 20 50 DiggerItemComponent BlockInfo.


###### V1 20 50 DiggerItemComponent BlockInfo Properties

**JSON path:** `components > minecraft:digger > destroy_speeds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block (Block) | *not set* | [Block](#block) item | Block to be dug. | 
| block (as String) | *not set* | String |  | 
| block (Alternate 2) | *not set* | Object |  | 
| speed | *not set* | Integer number | Digging speed for the correlating block(s). | 

###### Block
Block


###### Block Properties

**JSON path:** `components > minecraft:digger > destroy_speeds > block`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | String | name | 
| states | *not set* | Integer number | states | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags | *not set* | String | tags | 

#### Display Name
The display_name item component specifies the text shown whenever an item's name is displayed, like in hover text.


##### Display Name Properties

**JSON path:** `components > minecraft:display_name`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| value | *not set* | String | Name shown for an item. | 

#### Durability
The durability item component specifies how much damage the item takes before breaking, and allows the item to be combined to repair or augment them.


##### Durability Properties

**JSON path:** `components > minecraft:durability`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| damage_chance | *not set* | [Damage Chance](#damage-chance) item | Specifies the percentage chance of this item losing durability. Default is set to 100. Defined as an int range with min and max value. | 
| max_durability | *not set* | Integer number | Max durability is the amount of damage that this item can take before breaking. This is a required parameter and has a minimum of 0. | 

##### Damage Chance
IntRange


###### IntRange Properties

**JSON path:** `components > minecraft:durability > damage_chance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | *not set* | Integer number | max | 
| min | *not set* | Integer number | min | 

#### Durability Sensor
Enables an item to emit effects when it receives damage. Because of this, the item also needs a `minecraft:durability` component.


##### Durability Sensor Properties

**JSON path:** `components > minecraft:durability_sensor`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| durability_thresholds | *not set* | Array of [Durability Thresholds](#durability-thresholds) items | The list of both durability thresholds and effects emitted when each threshold is met. | 

##### durability_thresholds

The list of both durability thresholds and effects emitted when each threshold is met. When multiple thresholds are met, only the threshold with the lowest durability after applying the damage is considered. Value must have at least 1 items.


##### Durability Thresholds
Defines both the durability threshold, and the effects emitted when that threshold is met.


###### Durability Sensor Durability Threshold Properties

**JSON path:** `components > minecraft:durability_sensor > durability_thresholds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| durability | *not set* | Integer number | The effects are emitted when the item durability value is less than or equal to this value. | 
| particle_type | *not set* | String | Particle effect to emit when the threshold is met. | 
| sound_event | *not set* | String | Sound effect to emit when the threshold is met. | 

#### Dyeable
Dyeable


##### Dyeable Properties

**JSON path:** `components > minecraft:dyeable`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| default_color | *not set* | String | default_color | 
| default_color (as Array of numbers) | *not set* | Array of numbers |  | 

#### Enchantable
The enchantable component specifies what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.


##### Enchantable Properties

**JSON path:** `components > minecraft:enchantable`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| slot | *not set* | String | Specifies which types of enchantments can be applied. For example, `bow` would allow this item to be enchanted as if it were a bow. | 
| value | *not set* | Integer number | Specifies the value of the enchantment (minimum of 0). | 

#### Entity Placer
The entity_placer item component specifies the blocks that the item can be placed on.


##### Entity Placer Properties

**JSON path:** `components > minecraft:entity_placer`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| dispense_on (Dispense On) | *not set* | Array of [Dispense On](#dispense-on) items | List of block descriptors of the blocks that this item can be dispensed on. If left empty, all blocks will be allowed. | 
| dispense_on (as String) | *not set* | String |  | 
| dispense_on (as Object) | *not set* | Object |  | 
| entity | *not set* | String | The entity to be placed in the world. Value must match a regular expression pattern of "^(?:\w+(?:\.\w+)*:(?=\w))?(?:\w+(?:\.\w+)*)(?:<((?:\w+(?:\.\w+)*:(?=\w))?\w+(?:\.\w+)*)*>)?$". | 
| use_on (Use On) | *not set* | Array of [Use On](#use-on) items | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. | 
| use_on (as String) | *not set* | String |  | 
| use_on (as Object) | *not set* | Object |  | 

##### Dispense On
Dispense On.


###### Dispense On Properties

**JSON path:** `components > minecraft:entity_placer > dispense_on`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | String | name | 
| states | *not set* | Integer number | states | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags | *not set* | String | tags | 

#### Food
When an item has a food component, it becomes edible to the player. Must have the 'minecraft:use_duration' component in order to function properly.


##### Food Properties

**JSON path:** `components > minecraft:food`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| can_always_eat | *not set* | Boolean true/false | If true you can always eat this item (even when not hungry). Default is set to false. | 
| nutrition | *not set* | Integer number | Value that is added to the entity's nutrition when the item is used. Default is set to 0. | 
| saturation_modifier | *not set* | Decimal number | saturation_modifier is used in this formula: (nutrition * saturation_modifier * 2) when applying the saturation buff. Default is set to 0.6. | 
| using_converts_to | *not set* | String | When used, converts to the item specified by the string in this field. Default does not convert item. | 
| using_converts_to (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

#### Fuel (Fuel)
Fuel


##### Fuel Properties

**JSON path:** `components > minecraft:fuel`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| duration | *not set* | Decimal number | Amount of time, in seconds, this fuel will cook items. Value must be >= 0.05000000074505806. | 

#### Glint (Glint)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Hand Equipped (Hand Equipped)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Hover Text Color (Hover Text Color)

Same structure as [Display Name](#display-name).


#### Icon (Icon)
Icon


##### Icon Properties

**JSON path:** `components > minecraft:icon`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| textures | *not set* | Object | This map contains the different textures that can be used for the item's icon. | 

##### textures

This map contains the different textures that can be used for the item's icon. Default will contain the actual icon texture. Armor trim textures and palettes can be specified here too. The icon textures are the keys from the resource_pack/textures/item_texture.json 'texture_data' object associated with the texture file.


#### Liquid Clipped (Liquid Clipped)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Max Stack Size (Max Stack Size)

Same structure as [Damage (Damage)](#damage-damage).


#### Projectile
Projectile items shoot out, like an arrow.


##### Projectile Properties

**JSON path:** `components > minecraft:projectile`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minimum_critical_power | *not set* | Decimal number | Specifies how long a player must charge a projectile for it to critically hit. | 
| projectile_entity | *not set* | String | Which entity is to be fired as a projectile. Value must match a regular expression pattern of "^(?:\w+(?:\.\w+)*:(?=\w))?(?:\w+(?:\.\w+)*)(?:<((?:\w+(?:\.\w+)*:(?=\w))?\w+(?:\.\w+)*)*>)?$". | 

#### Rarity (Rarity)

Same structure as [Display Name](#display-name).


#### Record
Record Item Component. Used by record items to play music.


##### Record Properties

**JSON path:** `components > minecraft:record`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| comparator_signal | *not set* | Integer number | Specifies signal strength for comparator blocks to use, from 1 - 13. | 
| duration | *not set* | Decimal number | Specifies duration of sound event in seconds, float value. | 
| sound_event | *not set* | String | Sound event type: 13, cat, blocks, chirp, far, mall, mellohi, stal, strad, ward, 11, wait, pigstep, otherside, 5, relic. | 

#### Repairable
The repairable item component specifies which items can be used to repair this item, along with how much durability is gained.


##### Repairable Properties

**JSON path:** `components > minecraft:repairable`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| repair_items | *not set* | String | List of repair item entries. Each entry needs to define a list of strings for `items` that can be used for the repair and an optional `repair_amount` for how much durability is gained. | 
| repair_items (Repair Items) | *not set* | [Repair Items (Repair Items)](#repair-items-repair-items) item |  | 

##### Repair Items (Repair Items)
Repair Items.


###### Repair Items Properties

**JSON path:** `components > minecraft:repairable > repair_items`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| items | *not set* | String | Items that may be used to repair an item. | 
| items (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| repair_amount | *not set* | Keyed set of strings | How much the item is repaired. | 
| repair_amount (Repair Amount) | *not set* | Key/item pairs of [Repair Amount (Repair Amount)](#repair-amount-repair-amount) items |  | 
| repair_amount (as Decimal number) | *not set* | Decimal number |  | 

###### Repair Amount (Repair Amount)
Repair Amount.


###### Repair Amount Properties

**JSON path:** `components > minecraft:repairable > repair_items > repair_amount`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String | expression | 
| version | *not set* | Integer number | version | 

#### Shooter
Shooter Item Component.


##### Shooter Properties

**JSON path:** `components > minecraft:shooter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| ammunition | *not set* | Array of [Ammunition](#ammunition) items | Ammunition. | 
| charge_on_draw | *not set* | Boolean true/false | Charge on draw? Default is set to false. | 
| max_draw_duration | *not set* | Decimal number | Draw Duration. Default is set to 0. | 
| scale_power_by_draw_duration | *not set* | Boolean true/false | Scale power by draw duration? Default is set to false. | 

##### Ammunition
V1 20 50 ShooterItemComponent Ammunition.


###### V1 20 50 ShooterItemComponent Ammunition Properties

**JSON path:** `components > minecraft:shooter > ammunition`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| item | *not set* | String | Ammunition item description identifier. | 
| item (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| search_inventory | *not set* | Boolean true/false | Can search inventory? Default is set to false. | 
| use_in_creative | *not set* | Boolean true/false | Can use in creative mode? Default is set to false. | 
| use_offhand | *not set* | Boolean true/false | Can use off-hand? Default is set to false. | 

#### Should Despawn (Should Despawn)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Stacked By Data (Stacked By Data)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Storage Item
[EXPERIMENTAL] Storage Items can be used by other components to store other items within this item.


##### Storage Item Properties

**JSON path:** `components > minecraft:storage_item`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| allow_nested_storage_items | *not set* | Boolean true/false | Determines whether another Storage Item is allowed inside of this item. Default is true. | 
| allowed_items | *not set* | String | List of items that are exclusively allowed in this Storage Item. If empty all items are allowed. | 
| allowed_items (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| banned_items | *not set* | String | List of items that are not allowed in this Storage Item. | 
| banned_items (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| max_slots | *not set* | Integer number | The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64. Value must be <= 64. | 

#### Storage Weight Limit
Specifies the maximum weight limit that a storage item can hold.


##### Storage Weight Limit Properties

**JSON path:** `components > minecraft:storage_weight_limit`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max_weight_limit | *not set* | Integer number | The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64. Value must be <= 64. | 

#### Storage Weight Modifier
Specifies the maximum weight limit that a storage item can hold.


##### Storage Weight Modifier Properties

**JSON path:** `components > minecraft:storage_weight_modifier`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| weight_in_storage_item | *not set* | Integer number | The weight of this item when inside another Storage Item. Default is 4. 0 means item is not allowed in another Storage Item. | 

#### Tags
The tags component specifies which tags an item has on it.


##### Tags Properties

**JSON path:** `components > minecraft:tags`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| tags | *not set* | Array of strings | An array that can contain multiple item tags. | 

#### Throwable
Throwable items can be thrown by the player, such as a snowball.


##### Throwable Properties

**JSON path:** `components > minecraft:throwable`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| do_swing_animation | *not set* | Boolean true/false | Determines whether the item should use the swing animation when thrown. Default is set to false. | 
| launch_power_scale | *not set* | Decimal number | The scale at which the power of the throw increases. Default is set to 1.0. | 
| max_draw_duration | *not set* | Decimal number | The maximum duration to draw a throwable item. Default is set to 0.0. | 
| max_launch_power | *not set* | Decimal number | The maximum power to launch the throwable item. Default is set to 1.0. | 
| min_draw_duration | *not set* | Decimal number | The minimum duration to draw a throwable item. Default is set to 0.0. | 
| scale_power_by_draw_duration | *not set* | Boolean true/false | Whether or not the power of the throw increases with duration charged. Default is set to false. | 

#### Use Animation (Use Animation)

Same structure as [Display Name](#display-name).


#### Use Modifiers
This component modifies use effects, including how long the item takes to use and the player's speed when used in combination with components like "shooter", "throwable", or "food".


##### Use Modifiers Properties

**JSON path:** `components > minecraft:use_modifiers`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| movement_modifier | *not set* | Decimal number | Modifier value to scale the players movement speed when item is in use. Value must be <= 1. | 
| use_duration | *not set* | Decimal number | How long the item takes to use in seconds. | 

#### Wearable
Wearable items can be worn by a player in the head, chest, legs, feet, or off-hand slots.


##### Wearable Properties

**JSON path:** `components > minecraft:wearable`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| protection | *not set* | Integer number | How much protection the wearable item provides. Default is set to 0. | 
| slot | *not set* | String | Specifies where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. | 

### Description
Contains the required identifier for the item. May contain optional fields like menu_category.


#### Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | Unique name for the item that must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla item. | 
| menu_category | *not set* | [Menu Category](#menu-category) item | menu_category contains the creative group name and category for this item. | 

#### Menu Category
menu_category contains the creative group name and category for this item.


##### Menu Category Properties

**JSON path:** `description > menu_category`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| category | *not set* | String | Creative category where this item belongs. Defaults to "none". | 
| group | *not set* | String | The Creative Group that this item belongs to. Group name is limited to 256 characters. The name also must start with a namespace. Value must match a regular expression pattern of "^(?:.)+:(?:.)+$". | 
| is_hidden_in_commands | *not set* | Boolean true/false | Determines whether or not this item can be used with commands. Commands can use items by default if a category is set. | 