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


## Item 26.0 Item v1 Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| components | {"minecraft:allow_off_hand":null,"minecraft:block_placer":null,"minecraft:bundle_interaction":null,"minecraft:can_destroy_in_creative":null,"minecraft:compostable":null,"minecraft:cooldown":null,"minecraft:damage":null,"minecraft:damage_absorption":null,"minecraft:digger":null,"minecraft:display_name":null,"minecraft:durability":null,"minecraft:durability_sensor":null,"minecraft:dyeable":null,"minecraft:enchantable":null,"minecraft:entity_placer":null,"minecraft:fire_resistant":null,"minecraft:food":null,"minecraft:fuel":null,"minecraft:glint":null,"minecraft:hand_equipped":null,"minecraft:hover_text_color":null,"minecraft:icon":null,"minecraft:interact_button":null,"minecraft:kinetic_weapon":null,"minecraft:liquid_clipped":null,"minecraft:max_stack_size":null,"minecraft:piercing_weapon":null,"minecraft:projectile":null,"minecraft:rarity":null,"minecraft:record":null,"minecraft:repairable":null,"minecraft:shooter":null,"minecraft:should_despawn":null,"minecraft:stacked_by_data":null,"minecraft:storage_item":null,"minecraft:storage_weight_limit":null,"minecraft:storage_weight_modifier":null,"minecraft:swing_duration":null,"minecraft:swing_sounds":null,"minecraft:tags":null,"minecraft:throwable":null,"minecraft:use_animation":null,"minecraft:use_modifiers":null,"minecraft:wearable":null} | [Components](#item-components) item | List of all components used in this item. | 
| description | *not set* | [Description](#item-description) item | Contains the required identifier for the item. May contain optional fields like menu_category. | 

### Item Components
List of all components used in this item.


#### Item Components Properties

**JSON path:** `components`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minecraft:allow_off_hand | *not set* | Boolean true/false | The allow_off_hand component determines whether the item can be placed in the off hand slot of the inventory. | 
| minecraft:allow_off_hand (Allow Off Hand) | *not set* | [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand) item |  | 
| minecraft:block_placer | *not set* | [Block Placer](#item-block-placer) item | Items with the block_placer component will place a block when used. | 
| minecraft:can_destroy_in_creative | *not set* | Boolean true/false | The can_destroy_in_creative component determines if the item can be used by a player to break blocks when in creative mode. | 
| minecraft:can_destroy_in_creative (Can Destroy In Creative) | *not set* | [Can Destroy In Creative (Can Destroy In Creative)](#can-destroy-in-creative-can-destroy-in-creative) item |  | 
| minecraft:cooldown | *not set* | [Cooldown](#item-cooldown) item | Adds a cooldown to the item so that, after performing an action of the specified "type", all items with a "minecraft:cooldown" component in the same "category" become unable to perform that same type of action for the number of seconds defined in "duration". | 
| minecraft:damage | *not set* | Integer number | The damage component determines how much extra damage the item does on attack. | 
| minecraft:damage (Damage) | *not set* | [Damage (Damage)](#damage-damage) item |  | 
| minecraft:digger | *not set* | [Digger](#item-digger) item | Digger item component specifies how quickly this item can dig specific blocks. | 
| minecraft:display_name | *not set* | [Display Name](#item-display-name) item | The display_name item component specifies the text shown whenever an item's name is displayed, like in hover text. | 
| minecraft:durability | *not set* | [Durability](#item-durability) item | The durability item component specifies how much damage the item takes before breaking, and allows the item to be combined to repair or augment them. | 
| minecraft:enchantable | *not set* | [Enchantable](#item-enchantable) item | The enchantable component specifies what enchantments can be applied to the item. Not all enchantments will have an effect on all item components. | 
| minecraft:entity_placer | *not set* | [Entity Placer](#item-entity-placer) item | The entity_placer item component specifies the blocks that the item can be placed on. | 
| minecraft:food | *not set* | [Food](#item-food) item | When an item has a food component, it becomes edible to the player. Must have the 'minecraft:use_duration' component in order to function properly. | 
| minecraft:fuel | *not set* | Decimal number | Fuel item component allows this item to be used as fuel in a furnace to 'cook' other items. | 
| minecraft:fuel (Fuel) | *not set* | [Fuel (Fuel)](#fuel-fuel) item |  | 
| minecraft:glint | *not set* | Boolean true/false | The glint component determines whether the item has the enchanted glint render effect on it. | 
| minecraft:glint (Glint) | *not set* | [Glint (Glint)](#glint-glint) item |  | 
| minecraft:hand_equipped | *not set* | Boolean true/false | The hand_equipped component determines if an item is rendered like a tool while it is in a player's hand. | 
| minecraft:hand_equipped (Hand Equipped) | *not set* | [Hand Equipped (Hand Equipped)](#hand-equipped-hand-equipped) item |  | 
| minecraft:hover_text_color | *not set* | String | The hover_text_color component specifies the color of the item name when the players hovers the cursor over the item. | 
| minecraft:hover_text_color (Hover Text Color) | *not set* | [Hover Text Color (Hover Text Color)](#hover-text-color-hover-text-color) item |  | 
| minecraft:icon | *not set* | String |  | 
| minecraft:icon (Icon) | *not set* | [Icon (Icon)](#icon-icon) item |  | 
| minecraft:interact_button | *not set* | Boolean true/false | This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button. | 
| minecraft:interact_button (as String) | *not set* | String |  | 
| minecraft:liquid_clipped | *not set* | Boolean true/false | The liquid_clipped component determines whether the item interacts with liquid blocks on use. | 
| minecraft:liquid_clipped (Liquid Clipped) | *not set* | [Liquid Clipped (Liquid Clipped)](#liquid-clipped-liquid-clipped) item |  | 
| minecraft:max_stack_size | *not set* | Integer number | The max_stack_size component specifies how many of the item can be stacked together. | 
| minecraft:max_stack_size (Max Stack Size) | *not set* | [Max Stack Size (Max Stack Size)](#max-stack-size-max-stack-size) item |  | 
| minecraft:projectile | *not set* | [Projectile](#item-projectile) item | Projectile items shoot out, like an arrow. | 
| minecraft:record | *not set* | [Record](#item-record) item | Record Item Component. Used by record items to play music. | 
| minecraft:repairable | *not set* | [Repairable](#item-repairable) item | The repairable item component specifies which items can be used to repair this item, along with how much durability is gained. | 
| minecraft:shooter | *not set* | [Shooter](#item-shooter) item | Shooter Item Component. | 
| minecraft:should_despawn | *not set* | Boolean true/false | Should_despawn component determines if the item should eventually despawn while floating in the world | 
| minecraft:should_despawn (Should Despawn) | *not set* | [Should Despawn (Should Despawn)](#should-despawn-should-despawn) item |  | 
| minecraft:stacked_by_data | *not set* | Boolean true/false | The stacked_by_data component determines whether the same items with different aux values can stack. Also defines whether the item entities can merge while floating in the world. | 
| minecraft:stacked_by_data (Stacked By Data) | *not set* | [Stacked By Data (Stacked By Data)](#stacked-by-data-stacked-by-data) item |  | 
| minecraft:tags | *not set* | [Tags](#item-tags) item | The tags component specifies which tags an item has on it. | 
| minecraft:throwable | *not set* | [Throwable](#item-throwable) item | Throwable items can be thrown by the player, such as a snowball. | 
| minecraft:use_animation | *not set* | String | Use_animation specifies which animation is played when the player uses the item. | 
| minecraft:use_animation (Use Animation) | *not set* | [Use Animation (Use Animation)](#use-animation-use-animation) item |  | 
| minecraft:use_modifiers | *not set* | [Use Modifiers](#item-use-modifiers) item | Modifies use behavior, including how long the item takes to use and the player's movement speed. | 
| minecraft:wearable | *not set* | [Wearable](#item-wearable) item | Wearable items can be worn by a player in the head, chest, legs, feet, or off-hand slots. | 

#### minecraft:cooldown

Adds a cooldown to the item so that, after performing an action of the specified "type", all items with a "minecraft:cooldown" component in the same "category" become unable to perform that same type of action for the number of seconds defined in "duration".

#### minecraft:interact_button

This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button. When set as true, default "Use Item" text will be displayed.


#### Allow Off Hand (Allow Off Hand)

##### Allow Off Hand Properties

**JSON path:** `components > minecraft:allow_off_hand`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| value | false | Boolean true/false | Determines whether the item can be placed in the off hand slot. | 

#### Item Block Placer
Sets the item as a placer item component for blocks. Items with this component will place a block when used.

> [!Note]
> This component can also be used instead of the minecraft:icon component to render the block this item will place as the icon.

> [!Note]
> This item requires a format version of at least 1.21.50.


##### Item Block Placer Properties

**JSON path:** `components > minecraft:block_placer`

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| aligned_placement | false | Boolean true/false | When true, block placement through this item is aligned while the interaction button is held down. |  | 
| block | *not set* | String | Defines the block that will be placed. | Red Shrub: `"minecraft:red_shrub"`, Shelf Mushroom: `"minecraft:shelf_mushroom"` | 
| replace_block_item | false | Boolean true/false | If true, the item will be registered as the item for this block. | Red Shrub: `true` | 
| use_on (Use On) | [] | Array of [Use On](#use-on) items | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. Value must have at most 256 items. |  | 
| use_on (as String) | *not set* | String |  |  | 
| use_on (as Object) | *not set* | Object |  |  | 

##### aligned_placement

When true, block placement through this item is aligned while the interaction button is held down. Supported from `format_version` 1.26.0 onward. This item requires a format version of at least 1.26.10.

##### replace_block_item

If true, the item will be registered as the item for this block. This item will be returned by default when the block is broken/picked. Note: the identifier for this item must match the block's identifier for this field to be valid. Defaults to false.


##### Use On

###### Use On Properties

**JSON path:** `components > minecraft:block_placer > use_on`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

#### Can Destroy In Creative (Can Destroy In Creative)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Item Cooldown
Adds a cooldown to an item, preventing it from being used again for a specified duration. Items sharing the same category will enter cooldown together when any one of them is used.

> [!Note]
> This item requires a format version of at least 1.20.10.


##### Item Cooldown Properties

**JSON path:** `components > minecraft:cooldown`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| category | *not set* | String | A string identifier that groups items together. When an item with a cooldown is used, all items sharing the same category also enter cooldown. | 
| duration | *not set* | Decimal number | The duration of time in seconds that items with the matching category will spend cooling down before becoming usable again. | 
| type | use | [Type](#type-choices) choices | The type of action that triggers the cooldown. Use 'use' for items consumed on use, or 'attack' for weapons. Default is 'use'. This item requires a format version of at least 1.21.130. | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| attack | Attack | |
| use | Use | |

#### Damage (Damage)

##### Damage Properties

**JSON path:** `components > minecraft:damage`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| value | 0 | Integer number | Specifies how much extra damage the item does, must be a positive number. | 

#### Item Digger
Configures an item as a digging tool, allowing it to break specific blocks faster than normal. Define which blocks are affected and the speed multiplier for each.

> [!Note]
> This item requires a format version of at least 1.20.30.


##### Item Digger Properties

**JSON path:** `components > minecraft:digger`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| destroy_speeds | [] | Array of [Destroy Speeds](#item-blockinfo) items | An array of objects that define which blocks this item can dig and at what speed. Each entry specifies a block (by ID or tag query) and a speed multiplier. | 
| use_efficiency | false | Boolean true/false | When true, the Efficiency enchantment will increase the dig speed of this item. Default is false. | 

##### Item BlockInfo
Associates a block type with a custom digging speed multiplier for the minecraft:digger component. Map blocks to speed values so pickaxes mine stone quickly, axes chop wood faster, and custom tools excel at specific materials. Enables tool specialization matching vanilla Minecraft conventions.


###### Item BlockInfo Properties

**JSON path:** `components > minecraft:digger > destroy_speeds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block (Block) | *not set* | [Block](#block) item | Block to be dug. | 
| block (as String) | *not set* | String |  | 
| block (Alternate 2) | *not set* | Object |  | 
| speed | *not set* | Integer number | Digging speed for the correlating block(s). | 

###### Block

###### Block Properties

**JSON path:** `components > minecraft:digger > destroy_speeds > block`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

#### Item Display Name
Sets the item display name within Minecraft: Bedrock Edition. This component may also be used to pull from the localization file by referencing a key from it.

> [!Note]
> This item requires a format version of at least 1.20.0.


##### Item Display Name Properties

**JSON path:** `components > minecraft:display_name`

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value |  | String | Name shown for an item. | Apple: `"item.apple.name"`, Breeze Rod: `"item.breeze_rod.name"`, Ominous Trial Key: `"item.ominous_trial_key.name"` | 

#### Item Durability
Sets how much damage the item can take before breaking, and allows the item to be combined at an anvil, grindstone, or crafting table.

> [!Note]
> This item requires a format version of at least 1.20.0.


##### Item Durability Properties

**JSON path:** `components > minecraft:durability`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| damage_chance | {"max":100,"min":100} | [Damage Chance](#block-intrange) item | Specifies the percentage chance of this item losing durability. | 
| max_durability | *not set* | Integer number | Max durability is the amount of damage that this item can take before breaking. This is a required parameter and has a minimum of 0. | 

##### damage_chance

Specifies the percentage chance of this item losing durability. Default is set to 100. Defined as an int range with min and max value.  Check that the limits imposed on the range (minimum, maximum and maximum distance between values) are respected.


##### Block IntRange

###### Block IntRange Properties

**JSON path:** `components > minecraft:durability > damage_chance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 

#### Item Enchantable
Determines what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.

> [!Note]
> The following enchantment slot types that can be set for the value of `slot`: sword, bow, pickaxe, armor_head, armor_torso, armor_legs, armor_feet.

> [!Note]
> This item requires a format version of at least 1.20.30.


##### Item Enchantable Properties

**JSON path:** `components > minecraft:enchantable`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| slot | *not set* | String | Specifies which types of enchantments can be applied. | 
| value | *not set* | Integer number | Specifies the value of the enchantment (minimum of 0). | 

##### slot

Specifies which types of enchantments can be applied. For example, `bow` would allow this item to be enchanted as if it were a bow. Value must match a regular expression pattern of "none|all|g_armor|armor_head|armor_torso|armor_feet|armor_legs|sword|bow|spear|crossbow|melee_spear|g_tool|hoe|shears|flintsteel|shield|g_digging|axe|pickaxe|shovel|fishing_rod|carrot_stick|elytra|cosmetic_head".


#### Item Entity Placer
Allows an item to place entities into the world. Additionally, in version 1.19.80 and above, the component allows the item to set the spawn type of a monster spawner.

> [!Note]
> This item requires a format version of at least 1.20.10.


##### Item Entity Placer Properties

**JSON path:** `components > minecraft:entity_placer`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| dispense_on (Dispense On) | [] | Array of [Dispense On](#dispense-on) items | List of block descriptors of the blocks that this item can be dispensed on. If left empty, all blocks will be allowed. | 
| dispense_on (as String) | *not set* | String |  | 
| dispense_on (as Object) | *not set* | Object |  | 
| entity |  | String | The entity to be placed in the world. Value must match a regular expression pattern of "^(?:\w+(?:\.\w+)*:(?=\w))?(?:\w+(?:\.\w+)*)(?:<((?:\w+(?:\.\w+)*:(?=\w))?\w+(?:\.\w+)*)*>)?$". | 
| use_on (Use On) | [] | Array of [Use On](#use-on) items | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. | 
| use_on (as String) | *not set* | String |  | 
| use_on (as Object) | *not set* | Object |  | 

##### Dispense On

###### Dispense On Properties

**JSON path:** `components > minecraft:entity_placer > dispense_on`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

#### Item Food
Sets the item as a food component, allowing it to be edible to the player.

> [!Note]
> This item requires a format version of at least 1.20.30.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Use Modifiers (minecraft:use_modifiers)](./minecraft_use_modifiers.md)
> 

##### Item Food Properties

**JSON path:** `components > minecraft:food`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| can_always_eat | false | Boolean true/false | If true you can always eat this item (even when not hungry). Default is set to false. | 
| nutrition | 0 | Integer number | Value that is added to the entity's nutrition when the item is used. Default is set to 0. | 
| saturation_modifier | 0.6000000238418579 | Decimal number | saturation_modifier is used in this formula: (nutrition * saturation_modifier * 2) when applying the saturation buff. Default is set to 0.6. | 
| using_converts_to | {} | String | When used, converts to the item specified by the string in this field. Default does not convert item. | 
| using_converts_to (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| remove_effects | *not set* | Array of strings | Deprecated - no longer in use. | 

##### remove_effects

Deprecated - no longer in use. Array of effect names to remove when eating this food. This property was deprecated and is no longer supported in newer versions. This property no longer works after format versions of at least 1.20.0. This property was available in versions 1.14 through 1.18 but has been removed in later versions.


#### Fuel (Fuel)

##### Fuel Properties

**JSON path:** `components > minecraft:fuel`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| duration | 0.05000000074505806 | Decimal number | Amount of time, in seconds, this fuel will cook items. Value must be >= 0.05000000074505806. | 

#### Glint (Glint)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Hand Equipped (Hand Equipped)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Hover Text Color (Hover Text Color)

Same structure as [Item Display Name](#item-display-name).


#### Icon (Icon)

##### Icon Properties

**JSON path:** `components > minecraft:icon`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| texture |  | Object | The key from the resource_pack/textures/item_texture.json 'texture_data' object associated with the texture file. | 

#### Liquid Clipped (Liquid Clipped)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Max Stack Size (Max Stack Size)

Same structure as [Damage (Damage)](#damage-damage).


#### Item Projectile
Defines an item as a projectile that can be shot from dispensers or used as ammunition with minecraft:shooter. When combined with minecraft:throwable, this component specifies which entity is spawned when the item is thrown.

> [!Note]
> This item requires a format version of at least 1.20.10.


##### Item Projectile Properties

**JSON path:** `components > minecraft:projectile`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minimum_critical_power | 0 | Decimal number | Specifies how long a player must charge a projectile for it to critically hit. | 
| projectile_entity | *not set* | String | Which entity is to be fired as a projectile. Value must match a regular expression pattern of "^(?:\w+(?:\.\w+)*:(?=\w))?(?:\w+(?:\.\w+)*)(?:<((?:\w+(?:\.\w+)*:(?=\w))?\w+(?:\.\w+)*)*>)?$". | 

#### Item Record
Used by record items to play music.

> [!Note]
> This item requires a format version of at least 1.20.10.


##### Item Record Properties

**JSON path:** `components > minecraft:record`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| comparator_signal | 1 | Integer number | Specifies signal strength for comparator blocks to use, from 1 - 13. | 
| duration | 0 | Decimal number | Specifies duration of sound event in seconds, float value. | 
| sound_event | undefined | [Sound Event](#sound-event-choices) choices | Sound event type: 13, cat, blocks, chirp, far, mall, mellohi, stal, strad, ward, 11, wait, pigstep, otherside, 5, relic. | 

### Sound Event choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| absorb_block | Absorb block | |
| activate | Activate | |
| add.chest | Add.chest | |
| admire | Admire | |
| agitated | Agitated | |
| ambient | Ambient | |
| ambient.aggressive | Ambient.aggressive | |
| ambient.baby | Ambient.baby | |
| ambient.basalt_deltas.additions | Ambient.basalt deltas.additions | |
| ambient.basalt_deltas.loop | Ambient.basalt deltas.loop | |
| ambient.basalt_deltas.mood | Ambient.basalt deltas.mood | |
| ambient.candle | Ambient.candle | |
| ambient.cave | Ambient.cave | |
| ambient.crimson_forest.additions | Ambient.crimson forest.additions | |
| ambient.crimson_forest.loop | Ambient.crimson forest.loop | |
| ambient.crimson_forest.mood | Ambient.crimson forest.mood | |
| ambient.in.air | Ambient.in.air | |
| ambient.in.raid | Ambient.in.raid | |
| ambient.in.water | Ambient.in.water | |
| ambient.nether_wastes.additions | Ambient.nether wastes.additions | |
| ambient.nether_wastes.loop | Ambient.nether wastes.loop | |
| ambient.nether_wastes.mood | Ambient.nether wastes.mood | |
| ambient.pollinate | Ambient.pollinate | |
| ambient.screamer | Ambient.screamer | |
| ambient.soulsand_valley.additions | Ambient.soulsand valley.additions | |
| ambient.soulsand_valley.loop | Ambient.soulsand valley.loop | |
| ambient.soulsand_valley.mood | Ambient.soulsand valley.mood | |
| ambient.tame | Ambient.tame | |
| ambient.underwater.enter | Ambient.underwater.enter | |
| ambient.underwater.exit | Ambient.underwater.exit | |
| ambient.warped_forest.additions | Ambient.warped forest.additions | |
| ambient.warped_forest.loop | Ambient.warped forest.loop | |
| ambient.warped_forest.mood | Ambient.warped forest.mood | |
| ambient.weather.the_end_light_flash | Ambient.weather.the end light flash | |
| ambient.worried | Ambient.worried | |
| angry | Angry | |
| apply_effect.bad_omen | Apply effect.bad omen | |
| apply_effect.raid_omen | Apply effect.raid omen | |
| apply_effect.trial_omen | Apply effect.trial omen | |
| armor | Armor | |
| armor.break_wolf | Armor.break wolf | |
| armor.crack_wolf | Armor.crack wolf | |
| armor.equip_chain | Armor.equip chain | |
| armor.equip_copper | Armor.equip copper | |
| armor.equip_diamond | Armor.equip diamond | |
| armor.equip_elytra | Armor.equip elytra | |
| armor.equip_generic | Armor.equip generic | |
| armor.equip_gold | Armor.equip gold | |
| armor.equip_iron | Armor.equip iron | |
| armor.equip_leather | Armor.equip leather | |
| armor.equip_netherite | Armor.equip netherite | |
| armor.equip_wolf | Armor.equip wolf | |
| armor.repair_wolf | Armor.repair wolf | |
| armor.unequip_generic | Armor.unequip generic | |
| armor.unequip_wolf | Armor.unequip wolf | |
| attach | Attach | |
| attack | Attack | |
| attack.critical | Attack.critical | |
| attack.nodamage | Attack.nodamage | |
| attack.strong | Attack.strong | |
| balloonpop | Balloonpop | |
| beacon.activate | Beacon.activate | |
| beacon.ambient | Beacon.ambient | |
| beacon.deactivate | Beacon.deactivate | |
| beacon.power | Beacon.power | |
| blast | Blast | |
| block.bamboo_sapling.place | Block.bamboo sapling.place | |
| block.barrel.close | Block.barrel.close | |
| block.barrel.open | Block.barrel.open | |
| block.beehive.drip | Block.beehive.drip | |
| block.beehive.enter | Block.beehive.enter | |
| block.beehive.exit | Block.beehive.exit | |
| block.beehive.shear | Block.beehive.shear | |
| block.beehive.work | Block.beehive.work | |
| block.bell.hit | Block.bell.hit | |
| block.blastfurnace.fire_crackle | Block.blastfurnace.fire crackle | |
| block.campfire.crackle | Block.campfire.crackle | |
| block.cartography_table.use | Block.cartography table.use | |
| block.click | Block.click | |
| block.click.fail | Block.click.fail | |
| block.composter.empty | Block.composter.empty | |
| block.composter.fill | Block.composter.fill | |
| block.composter.fill_success | Block.composter.fill success | |
| block.composter.ready | Block.composter.ready | |
| block.copper_bulb.turn_off | Block.copper bulb.turn off | |
| block.copper_bulb.turn_on | Block.copper bulb.turn on | |
| block.creaking_heart.trail | Block.creaking heart.trail | |
| block.decorated_pot.insert | Block.decorated pot.insert | |
| block.decorated_pot.insert_fail | Block.decorated pot.insert fail | |
| block.enchanting_table.use | Block.enchanting table.use | |
| block.end_portal.spawn | Block.end portal.spawn | |
| block.end_portal_frame.fill | Block.end portal frame.fill | |
| block.fletching_table.use | Block.fletching table.use | |
| block.frog_spawn.break | Block.frog spawn.break | |
| block.frog_spawn.hatch | Block.frog spawn.hatch | |
| block.furnace.lit | Block.furnace.lit | |
| block.grindstone.use | Block.grindstone.use | |
| block.loom.use | Block.loom.use | |
| block.scaffolding.climb | Block.scaffolding.climb | |
| block.sculk.spread | Block.sculk.spread | |
| block.sculk_catalyst.bloom | Block.sculk catalyst.bloom | |
| block.sculk_sensor.place | Block.sculk sensor.place | |
| block.sculk_shrieker.place | Block.sculk shrieker.place | |
| block.sculk_shrieker.shriek | Block.sculk shrieker.shriek | |
| block.sign.waxed_interact_fail | Block.sign.waxed interact fail | |
| block.smithing_table.use | Block.smithing table.use | |
| block.smoker.smoke | Block.smoker.smoke | |
| block.sniffer_egg.crack | Block.sniffer egg.crack | |
| block.sniffer_egg.hatch | Block.sniffer egg.hatch | |
| block.stonecutter.use | Block.stonecutter.use | |
| block.sweet_berry_bush.hurt | Block.sweet berry bush.hurt | |
| block.sweet_berry_bush.pick | Block.sweet berry bush.pick | |
| block.turtle_egg.attack | Block.turtle egg.attack | |
| block.turtle_egg.break | Block.turtle egg.break | |
| block.turtle_egg.crack | Block.turtle egg.crack | |
| block.turtle_egg.hatch | Block.turtle egg.hatch | |
| boost | Boost | |
| born | Born | |
| bottle.dragonbreath | Bottle.dragonbreath | |
| bottle.empty | Bottle.empty | |
| bottle.fill | Bottle.fill | |
| bounce | Bounce | |
| bow | Bow | |
| bow.hit | Bow.hit | |
| break | Break | |
| break.block | Break.block | |
| break_pot | Break pot | |
| breathe | Breathe | |
| breeze_wind_charge.burst | Breeze wind charge.burst | |
| brush | Brush | |
| brush_completed | Brush completed | |
| bubble.down | Bubble.down | |
| bubble.downinside | Bubble.downinside | |
| bubble.pop | Bubble.pop | |
| bubble.up | Bubble.up | |
| bubble.upinside | Bubble.upinside | |
| bucket.empty.fish | Bucket.empty.fish | |
| bucket.empty.land_animal | Bucket.empty.land animal | |
| bucket.empty.lava | Bucket.empty.lava | |
| bucket.empty.powder_snow | Bucket.empty.powder snow | |
| bucket.empty.water | Bucket.empty.water | |
| bucket.fill.fish | Bucket.fill.fish | |
| bucket.fill.land_animal | Bucket.fill.land animal | |
| bucket.fill.lava | Bucket.fill.lava | |
| bucket.fill.powder_snow | Bucket.fill.powder snow | |
| bucket.fill.water | Bucket.fill.water | |
| bullet.hit | Bullet.hit | |
| bundle.drop_contents | Bundle.drop contents | |
| bundle.insert | Bundle.insert | |
| bundle.insert_fail | Bundle.insert fail | |
| bundle.remove_one | Bundle.remove one | |
| burp | Burp | |
| button.click_off | Button.click off | |
| button.click_on | Button.click on | |
| cake.add_candle | Cake.add candle | |
| camera.take_picture | Camera.take picture | |
| cant_breed | Cant breed | |
| cast.spell | Cast.spell | |
| cauldron_drip.lava.pointed_dripstone | Cauldron drip.lava.pointed dripstone | |
| cauldron_drip.water.pointed_dripstone | Cauldron drip.water.pointed dripstone | |
| celebrate | Celebrate | |
| charge | Charge | |
| charge.sculk | Charge.sculk | |
| chest.closed | Chest.closed | |
| chest.open | Chest.open | |
| chime.amethyst_block | Chime.amethyst block | |
| chorusdeath | Chorusdeath | |
| chorusgrow | Chorusgrow | |
| close | Close | |
| close_long | Close long | |
| conduit.activate | Conduit.activate | |
| conduit.ambient | Conduit.ambient | |
| conduit.attack | Conduit.attack | |
| conduit.deactivate | Conduit.deactivate | |
| conduit.short | Conduit.short | |
| convert_mooshroom | Convert mooshroom | |
| convert_to_drowned | Convert to drowned | |
| convert_to_frog | Convert to frog | |
| convert_to_stray | Convert to stray | |
| converted_to_zombified | Converted to zombified | |
| copper.wax.off | Copper.wax.off | |
| copper.wax.on | Copper.wax.on | |
| crafter.craft | Crafter.craft | |
| crafter.disable_slot | Crafter.disable slot | |
| crafter.fail | Crafter.fail | |
| creaking_heart_spawn | Creaking heart spawn | |
| crossbow.loading.end | Crossbow.loading.end | |
| crossbow.loading.middle | Crossbow.loading.middle | |
| crossbow.loading.start | Crossbow.loading.start | |
| crossbow.quick_charge.end | Crossbow.quick charge.end | |
| crossbow.quick_charge.middle | Crossbow.quick charge.middle | |
| crossbow.quick_charge.start | Crossbow.quick charge.start | |
| crossbow.shoot | Crossbow.shoot | |
| dash_ready | Dash ready | |
| deactivate | Deactivate | |
| death | Death | |
| death.baby | Death.baby | |
| death.in.water | Death.in.water | |
| death.mid.volume | Death.mid.volume | |
| death.min.volume | Death.min.volume | |
| death.screamer | Death.screamer | |
| death.to.zombie | Death.to.zombie | |
| default | Default | |
| deny | Deny | |
| detach | Detach | |
| disappeared | Disappeared | |
| dismount | Dismount | |
| door.close | Door.close | |
| door.open | Door.open | |
| drink | Drink | |
| drink.honey | Drink.honey | |
| drink.milk | Drink.milk | |
| drip.lava.pointed_dripstone | Drip.lava.pointed dripstone | |
| drip.water.pointed_dripstone | Drip.water.pointed dripstone | |
| drop.slot | Drop.slot | |
| eat | Eat | |
| eject_block | Eject block | |
| elderguardian.curse | Elderguardian.curse | |
| elemconstruct.open | Elemconstruct.open | |
| enderchest.closed | Enderchest.closed | |
| enderchest.open | Enderchest.open | |
| explode | Explode | |
| extinguish.candle | Extinguish.candle | |
| extinguish.fire | Extinguish.fire | |
| fall | Fall | |
| fall.big | Fall.big | |
| fall.small | Fall.small | |
| fang | Fang | |
| fence_gate.close | Fence gate.close | |
| fence_gate.open | Fence gate.open | |
| fire | Fire | |
| fizz | Fizz | |
| flap | Flap | |
| flop | Flop | |
| fly | Fly | |
| freeze | Freeze | |
| fuse | Fuse | |
| gallop | Gallop | |
| geyser_continuous_eruption_active | Geyser continuous eruption active | |
| geyser_continuous_eruption_start | Geyser continuous eruption start | |
| geyser_eruption_active | Geyser eruption active | |
| geyser_eruption_start | Geyser eruption start | |
| glass | Glass | |
| glow_squid.ink_squirt | Glow squid.ink squirt | |
| glowstick.use | Glowstick.use | |
| growl | Growl | |
| haggle | Haggle | |
| haggle.idle | Haggle.idle | |
| haggle.no | Haggle.no | |
| haggle.yes | Haggle.yes | |
| heartbeat | Heartbeat | |
| heavy.step | Heavy.step | |
| hit | Hit | |
| horn_break | Horn break | |
| horn_call0 | Horn call0 | |
| horn_call1 | Horn call1 | |
| horn_call2 | Horn call2 | |
| horn_call3 | Horn call3 | |
| horn_call4 | Horn call4 | |
| horn_call5 | Horn call5 | |
| horn_call6 | Horn call6 | |
| horn_call7 | Horn call7 | |
| hurt | Hurt | |
| hurt.baby | Hurt.baby | |
| hurt.in.water | Hurt.in.water | |
| hurt.reduced | Hurt.reduced | |
| hurt.screamer | Hurt.screamer | |
| icebomb.hit | Icebomb.hit | |
| ignite | Ignite | |
| imitate.blaze | Imitate.blaze | |
| imitate.bogged | Imitate.bogged | |
| imitate.breeze | Imitate.breeze | |
| imitate.camel_husk | Imitate.camel husk | |
| imitate.cave_spider | Imitate.cave spider | |
| imitate.creaking | Imitate.creaking | |
| imitate.creeper | Imitate.creeper | |
| imitate.drowned | Imitate.drowned | |
| imitate.elder_guardian | Imitate.elder guardian | |
| imitate.ender_dragon | Imitate.ender dragon | |
| imitate.enderman | Imitate.enderman | |
| imitate.endermite | Imitate.endermite | |
| imitate.evocation_illager | Imitate.evocation illager | |
| imitate.ghast | Imitate.ghast | |
| imitate.guardian | Imitate.guardian | |
| imitate.happy_ghast | Imitate.happy ghast | |
| imitate.husk | Imitate.husk | |
| imitate.magma_cube | Imitate.magma cube | |
| imitate.parched | Imitate.parched | |
| imitate.phantom | Imitate.phantom | |
| imitate.pillager | Imitate.pillager | |
| imitate.polar_bear | Imitate.polar bear | |
| imitate.ravager | Imitate.ravager | |
| imitate.shulker | Imitate.shulker | |
| imitate.silverfish | Imitate.silverfish | |
| imitate.skeleton | Imitate.skeleton | |
| imitate.slime | Imitate.slime | |
| imitate.spider | Imitate.spider | |
| imitate.stray | Imitate.stray | |
| imitate.vex | Imitate.vex | |
| imitate.vindication_illager | Imitate.vindication illager | |
| imitate.warden | Imitate.warden | |
| imitate.witch | Imitate.witch | |
| imitate.wither | Imitate.wither | |
| imitate.wither_skeleton | Imitate.wither skeleton | |
| imitate.wolf | Imitate.wolf | |
| imitate.zoglin | Imitate.zoglin | |
| imitate.zombie | Imitate.zombie | |
| imitate.zombie_pigman | Imitate.zombie pigman | |
| imitate.zombie_villager | Imitate.zombie villager | |
| insert | Insert | |
| insert_enchanted | Insert enchanted | |
| irongolem.crack | Irongolem.crack | |
| irongolem.repair | Irongolem.repair | |
| item.book.put | Item.book.put | |
| item.copper_spear.attack_hit | Item.copper spear.attack hit | |
| item.copper_spear.attack_miss | Item.copper spear.attack miss | |
| item.copper_spear.use | Item.copper spear.use | |
| item.diamond_spear.attack_hit | Item.diamond spear.attack hit | |
| item.diamond_spear.attack_miss | Item.diamond spear.attack miss | |
| item.diamond_spear.use | Item.diamond spear.use | |
| item.enchant.lunge1 | Item.enchant.lunge1 | |
| item.enchant.lunge2 | Item.enchant.lunge2 | |
| item.enchant.lunge3 | Item.enchant.lunge3 | |
| item.fizz | Item.fizz | |
| item.golden_spear.attack_hit | Item.golden spear.attack hit | |
| item.golden_spear.attack_miss | Item.golden spear.attack miss | |
| item.golden_spear.use | Item.golden spear.use | |
| item.iron_spear.attack_hit | Item.iron spear.attack hit | |
| item.iron_spear.attack_miss | Item.iron spear.attack miss | |
| item.iron_spear.use | Item.iron spear.use | |
| item.netherite_spear.attack_hit | Item.netherite spear.attack hit | |
| item.netherite_spear.attack_miss | Item.netherite spear.attack miss | |
| item.netherite_spear.use | Item.netherite spear.use | |
| item.shield.block | Item.shield.block | |
| item.spear.attack_hit | Item.spear.attack hit | |
| item.spear.attack_miss | Item.spear.attack miss | |
| item.spear.use | Item.spear.use | |
| item.spyglass.stop_using | Item.spyglass.stop using | |
| item.spyglass.use | Item.spyglass.use | |
| item.stone_spear.attack_hit | Item.stone spear.attack hit | |
| item.stone_spear.attack_miss | Item.stone spear.attack miss | |
| item.stone_spear.use | Item.stone spear.use | |
| item.trident.hit | Item.trident.hit | |
| item.trident.hit_ground | Item.trident.hit ground | |
| item.trident.return | Item.trident.return | |
| item.trident.riptide_1 | Item.trident.riptide 1 | |
| item.trident.riptide_2 | Item.trident.riptide 2 | |
| item.trident.riptide_3 | Item.trident.riptide 3 | |
| item.trident.throw | Item.trident.throw | |
| item.trident.thunder | Item.trident.thunder | |
| item.use.on | Item.use.on | |
| item.wooden_spear.attack_hit | Item.wooden spear.attack hit | |
| item.wooden_spear.attack_miss | Item.wooden spear.attack miss | |
| item.wooden_spear.use | Item.wooden spear.use | |
| item_given | Item given | |
| item_taken | Item taken | |
| item_thrown | Item thrown | |
| jump | Jump | |
| jump.prevent | Jump.prevent | |
| jump_to_block | Jump to block | |
| land | Land | |
| large.blast | Large.blast | |
| launch | Launch | |
| lava | Lava | |
| lava.pop | Lava.pop | |
| lay_egg | Lay egg | |
| lay_spawn | Lay spawn | |
| lead.break | Lead.break | |
| lead.leash | Lead.leash | |
| lead.unleash | Lead.unleash | |
| leashknot.break | Leashknot.break | |
| leashknot.place | Leashknot.place | |
| levelup | Levelup | |
| listening | Listening | |
| listening_angry | Listening angry | |
| lodestone_compass.link_compass_to_lodestone | Lodestone compass.link compass to lodestone | |
| lt.reaction.bleach | Lt.reaction.bleach | |
| lt.reaction.epaste | Lt.reaction.epaste | |
| lt.reaction.epaste2 | Lt.reaction.epaste2 | |
| lt.reaction.fertilizer | Lt.reaction.fertilizer | |
| lt.reaction.fire | Lt.reaction.fire | |
| lt.reaction.fireball | Lt.reaction.fireball | |
| lt.reaction.icebomb | Lt.reaction.icebomb | |
| lt.reaction.mgsalt | Lt.reaction.mgsalt | |
| lt.reaction.miscexplosion | Lt.reaction.miscexplosion | |
| lt.reaction.miscfire | Lt.reaction.miscfire | |
| lt.reaction.miscmystical | Lt.reaction.miscmystical | |
| lt.reaction.miscmystical2 | Lt.reaction.miscmystical2 | |
| lt.reaction.product | Lt.reaction.product | |
| mace.heavy_smash_ground | Mace.heavy smash ground | |
| mace.smash_air | Mace.smash air | |
| mace.smash_ground | Mace.smash ground | |
| mad | Mad | |
| milk | Milk | |
| milk.screamer | Milk.screamer | |
| milk_suspiciously | Milk suspiciously | |
| mob.armadillo.brush | Mob.armadillo.brush | |
| mob.armadillo.scute_drop | Mob.armadillo.scute drop | |
| mob.armor_stand.place | Mob.armor stand.place | |
| mob.hoglin.converted_to_zombified | Mob.hoglin.converted to zombified | |
| mob.husk.convert_to_zombie | Mob.husk.convert to zombie | |
| mob.pig.death | Mob.pig.death | |
| mob.player.hurt_drown | Mob.player.hurt drown | |
| mob.player.hurt_freeze | Mob.player.hurt freeze | |
| mob.player.hurt_on_fire | Mob.player.hurt on fire | |
| mob.warning | Mob.warning | |
| mob.warning.baby | Mob.warning.baby | |
| mount | Mount | |
| multi_swap | Multi swap | |
| nearby_close | Nearby close | |
| nearby_closer | Nearby closer | |
| nearby_closest | Nearby closest | |
| note | Note | |
| note.bass | Note.bass | |
| ominous_bottle.end_use | Ominous bottle.end use | |
| ominous_item_spawner.about_to_spawn_item | Ominous item spawner.about to spawn item | |
| ominous_item_spawner.spawn_item | Ominous item spawner.spawn item | |
| ominous_item_spawner.spawn_item_begin | Ominous item spawner.spawn item begin | |
| open | Open | |
| open_long | Open long | |
| panic | Panic | |
| pant | Pant | |
| particle.soul_escape.loud | Particle.soul escape.loud | |
| particle.soul_escape.quiet | Particle.soul escape.quiet | |
| pause_growth | Pause growth | |
| pick_berries.cave_vines | Pick berries.cave vines | |
| pickup | Pickup | |
| pickup_enchanted | Pickup enchanted | |
| piston.in | Piston.in | |
| piston.out | Piston.out | |
| place | Place | |
| place_in_water | Place in water | |
| place_item | Place item | |
| plop | Plop | |
| pop | Pop | |
| portal | Portal | |
| portal.travel | Portal.travel | |
| potion.brewed | Potion.brewed | |
| power.off | Power.off | |
| power.off.sculk_sensor | Power.off.sculk sensor | |
| power.on | Power.on | |
| power.on.sculk_sensor | Power.on.sculk sensor | |
| pre_ram | Pre ram | |
| pre_ram.screamer | Pre ram.screamer | |
| prepare.attack | Prepare.attack | |
| prepare.summon | Prepare.summon | |
| prepare.wololo | Prepare.wololo | |
| presneeze | Presneeze | |
| pressure_plate.click_off | Pressure plate.click off | |
| pressure_plate.click_on | Pressure plate.click on | |
| pumpkin.carve | Pumpkin.carve | |
| purr | Purr | |
| purreow | Purreow | |
| pushed_by_player | Pushed by player | |
| raid.horn | Raid.horn | |
| ram_impact | Ram impact | |
| ram_impact.screamer | Ram impact.screamer | |
| random.anvil_use | Random.anvil use | |
| reappeared | Reappeared | |
| record.11 | Record.11 | |
| record.13 | Record.13 | |
| record.5 | Record.5 | |
| record.blocks | Record.blocks | |
| record.bounce | Record.bounce | |
| record.cat | Record.cat | |
| record.chirp | Record.chirp | |
| record.creator | Record.creator | |
| record.creator_music_box | Record.creator music box | |
| record.far | Record.far | |
| record.lava_chicken | Record.lava chicken | |
| record.mall | Record.mall | |
| record.mellohi | Record.mellohi | |
| record.null | Record.null | |
| record.otherside | Record.otherside | |
| record.pigstep | Record.pigstep | |
| record.precipice | Record.precipice | |
| record.relic | Record.relic | |
| record.stal | Record.stal | |
| record.strad | Record.strad | |
| record.tears | Record.tears | |
| record.wait | Record.wait | |
| record.ward | Record.ward | |
| reflect | Reflect | |
| remedy | Remedy | |
| reset_growth | Reset growth | |
| respawn_anchor.ambient | Respawn anchor.ambient | |
| respawn_anchor.charge | Respawn anchor.charge | |
| respawn_anchor.deplete | Respawn anchor.deplete | |
| respawn_anchor.set_spawn | Respawn anchor.set spawn | |
| retreat | Retreat | |
| roar | Roar | |
| saddle | Saddle | |
| saddle_in_water | Saddle in water | |
| scared | Scared | |
| scrape | Scrape | |
| screech | Screech | |
| shake | Shake | |
| shatter_pot | Shatter pot | |
| shear | Shear | |
| shoot | Shoot | |
| shulker.close | Shulker.close | |
| shulker.open | Shulker.open | |
| shulkerbox.closed | Shulkerbox.closed | |
| shulkerbox.open | Shulkerbox.open | |
| single_swap | Single swap | |
| sleep | Sleep | |
| slime_landing | Slime landing | |
| smithing_table.use | Smithing table.use | |
| sneeze | Sneeze | |
| sonic_boom | Sonic boom | |
| sonic_charge | Sonic charge | |
| sparkler.active | Sparkler.active | |
| sparkler.use | Sparkler.use | |
| spawn | Spawn | |
| splash | Splash | |
| sponge.absorb | Sponge.absorb | |
| squid.ink_squirt | Squid.ink squirt | |
| squish.big | Squish.big | |
| squish.small | Squish.small | |
| stare | Stare | |
| state_change | State change | |
| step | Step | |
| step.baby | Step.baby | |
| step_lava | Step lava | |
| step_sand | Step sand | |
| straw_bed.break_leave | Straw bed.break leave | |
| stun | Stun | |
| swim | Swim | |
| swoop | Swoop | |
| takeoff | Takeoff | |
| teleport | Teleport | |
| tempt | Tempt | |
| thorns | Thorns | |
| throw | Throw | |
| thunder | Thunder | |
| tilt_down.big_dripleaf | Tilt down.big dripleaf | |
| tilt_up.big_dripleaf | Tilt up.big dripleaf | |
| tongue | Tongue | |
| trapdoor.close | Trapdoor.close | |
| trapdoor.open | Trapdoor.open | |
| trial_spawner.ambient | Trial spawner.ambient | |
| trial_spawner.ambient_ominous | Trial spawner.ambient ominous | |
| trial_spawner.charge_activate | Trial spawner.charge activate | |
| trial_spawner.close_shutter | Trial spawner.close shutter | |
| trial_spawner.detect_player | Trial spawner.detect player | |
| trial_spawner.eject_item | Trial spawner.eject item | |
| trial_spawner.open_shutter | Trial spawner.open shutter | |
| trial_spawner.spawn_mob | Trial spawner.spawn mob | |
| tripod | Tripod | |
| twinkle | Twinkle | |
| ui.cartography_table.take_result | Ui.cartography table.take result | |
| ui.loom.take_result | Ui.loom.take result | |
| ui.stonecutter.take_result | Ui.stonecutter.take result | |
| undefined | Undefined | |
| unfect | Unfect | |
| unfreeze | Unfreeze | |
| unsaddle | Unsaddle | |
| vault.activate | Vault.activate | |
| vault.ambient | Vault.ambient | |
| vault.close_shutter | Vault.close shutter | |
| vault.deactivate | Vault.deactivate | |
| vault.eject_item | Vault.eject item | |
| vault.insert_item | Vault.insert item | |
| vault.insert_item_fail | Vault.insert item fail | |
| vault.open_shutter | Vault.open shutter | |
| vault.reject_rewarded_player | Vault.reject rewarded player | |
| warn | Warn | |
| water | Water | |
| whine | Whine | |
| wind_charge.burst | Wind charge.burst | |

#### Item Repairable
Defines the items that can be used to repair a defined item, and the amount of durability each item restores upon repair. Each entry needs to define a list of strings for 'items' that can be used for the repair and an optional 'repair_amount' for how much durability is repaired.

> [!Note]
> This item requires a format version of at least 1.20.10.


##### Item Repairable Properties

**JSON path:** `components > minecraft:repairable`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| repair_items | [] | String | List of repair item entries. Each entry needs to define a list of strings for `items` that can be used for the repair and an optional `repair_amount` for how much durability is gained. | 
| repair_items (Repair Items) | *not set* | [Repair Items (Repair Items)](#repair-items-repair-items) item |  | 

##### Repair Items (Repair Items)

###### Repair Items Properties

**JSON path:** `components > minecraft:repairable > repair_items`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| items | *not set* | String | Items that may be used to repair an item. | 
| items (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| repair_amount |  | Keyed set of strings | How much the item is repaired. | 
| repair_amount (as Named set of objects) | *not set* | Key/item pairs of [Repair Amount (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| repair_amount (as Decimal number) | *not set* | Decimal number |  | 

###### Legacy Molang Expression

###### Legacy Molang Expression Properties

**JSON path:** `components > minecraft:repairable > repair_items > repair_amount`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

#### Item Shooter
Compels an item to shoot projectiles, similarly to a bow or crossbow. Must have the minecraft:use_modifiers component in order to function properly.

> [!Note]
> Ammunition used by minecraft:shooter must have the minecraft:projectile component in order to function properly.

> [!Note]
> Items equipped with the shooter component will only sustain damage while shooting. Durability will remain unaffected if the item is used for melee attacks.

> [!Note]
> This item requires a format version of at least 1.20.10.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Projectile (minecraft:projectile)](./minecraft_projectile.md)
> 

##### Item Shooter Properties

**JSON path:** `components > minecraft:shooter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| ammunition | [] | Array of [Ammunition](#item-ammunition) items | A list of ammunition entries that define which items can be used as projectiles for this shooter. | 
| charge_on_draw | false | Boolean true/false | When true, the shooter begins charging when the player starts drawing, similar to a crossbow. Default is false. | 
| max_draw_duration | 0 | Decimal number | The maximum time in seconds that a player can draw the shooter before it automatically fires or reaches maximum power. Default is 0. | 
| scale_power_by_draw_duration | false | Boolean true/false | When true, the projectile's launch power increases based on how long the player holds the use button before releasing. Default is false. | 

##### ammunition

A list of ammunition entries that define which items can be used as projectiles for this shooter. Each entry specifies the item, whether to search the offhand, inventory, and whether to use in creative mode.


##### Item Ammunition
Configures this item as ammunition consumed by ranged weapons like bows and crossbows. Reference compatible shooter items and specify search behavior for inventory slots. When players use the associated weapon, this item is consumed and its projectile is launched.


###### Item Ammunition Properties

**JSON path:** `components > minecraft:shooter > ammunition`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| item | *not set* | String | Ammunition item description identifier. | 
| item (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| search_inventory | false | Boolean true/false | Can search inventory? Default is set to false. | 
| use_in_creative | false | Boolean true/false | Can use in creative mode? Default is set to false. | 
| use_offhand | false | Boolean true/false | Can use off-hand? Default is set to false. | 

#### Should Despawn (Should Despawn)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Stacked By Data (Stacked By Data)

Same structure as [Allow Off Hand (Allow Off Hand)](#allow-off-hand-allow-off-hand).


#### Item Tags
Determines which tags are included on a given item.

> [!Note]
> This item requires a format version of at least 1.20.50.


##### Item Tags Properties

**JSON path:** `components > minecraft:tags`

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| tags | [] | Array of strings | An array that can contain multiple item tags. | Apple: `["minecraft:is_food"]`, Shelf Mushroom: `["minecraft:mushrooms_for_stew"]` | 

#### Item Throwable
Makes an item throwable by the player, similar to a snowball or ender pearl. Use with minecraft:projectile to specify which entity is spawned when thrown.

> [!Note]
> Combine with minecraft:projectile to define the projectile entity. For charged throws (like tridents), set scale_power_by_draw_duration to true and configure min/max draw durations.

> [!Note]
> This item requires a format version of at least 1.20.10.


##### Item Throwable Properties

**JSON path:** `components > minecraft:throwable`

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| do_swing_animation | false | Boolean true/false | Determines whether the item should use the swing animation when thrown. Default is set to false. | Wind Charge: `true` | 
| launch_power_scale | 1 | Decimal number | The scale at which the power of the throw increases. Default is set to 1.0. | Wind Charge: `1.5` | 
| max_draw_duration | 0 | Decimal number | The maximum duration to draw a throwable item. Default is set to 0.0. |  | 
| max_launch_power | 1 | Decimal number | The maximum power to launch the throwable item. Default is set to 1.0. | Wind Charge: `1.5` | 
| min_draw_duration | 0 | Decimal number | The minimum duration to draw a throwable item. Default is set to 0.0. |  | 
| scale_power_by_draw_duration | false | Boolean true/false | Whether or not the power of the throw increases with duration charged. Default is set to false. |  | 

#### Use Animation (Use Animation)

##### Use Animation Properties

**JSON path:** `components > minecraft:use_animation`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| value | none | Object | Specifies which animation to play when the the item is used. | 

#### Item Use Modifiers
Determines how long an item takes to use in combination with components such as Shooter, Throwable, or Food.

> [!Note]
> Renamed from `chargeable` in 1.20.50 and available without an experimental toggle.

> [!Note]
> This item requires a format version of at least 1.20.50.


##### Item Use Modifiers Properties

**JSON path:** `components > minecraft:use_modifiers`

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| emit_vibrations | true | Boolean true/false | Whether vibrations are emitted when the item starts or stops being used. |  | 
| movement_modifier | *not set* | Decimal number | Multiplier applied to the player's movement speed while the item is in use. Value must be <= 1. | Apple: `0.35` | 
| start_sound | *not set* | [Start Sound](#sound-event-choices) choices | Sound played when the item starts being used. |  | 
| start_using | always | [Start Using](#start-using-choices) choices | When the player begins using the item. | Apple: `"always"` | 
| use_duration | 0 | Decimal number | Time, in seconds, that the item takes to use. | Apple: `1.6` | 

##### start_using

When the player begins using the item. Use `always` to start as soon as the use action is triggered (default), or `on_attack` to start using only when an attack input is received while the item is selected. This item requires a format version of at least 1.26.30.


### Start Using choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| always | Always | |
| if_first | If first | |

#### Item Wearable
Sets the wearable item component, which allows an item to be worn by a player in a specified equipment slot.

> [!Note]
> Valid equipment slots are: slot.armor.head, slot.armor.chest, slot.armor.legs, slot.armor.feet, slot.armor.body, and slot.weapon.offhand. When a non-hand armor slot is used, the max stack size is automatically set to 1.

> [!Note]
> Fixed in format version 1.26.30: when a non-hand slot is selected, `minecraft:wearable` no longer silently overrides an explicit `minecraft:max_stack_size` of 1. Custom items can again declare their own stack size alongside an armor slot without producing inconsistent behavior.

> [!Note]
> This item requires a format version of at least 1.20.30.


##### Item Wearable Properties

**JSON path:** `components > minecraft:wearable`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| hides_player_location | false | Boolean true/false | Determines whether the Player's location is hidden on Locator Maps and the Locator Bar when the wearable item is worn. Default is false. | 
| protection | 0 | Integer number | How much protection the wearable item provides. Default is set to 0. | 
| slot | *not set* | [Slot](#slot-choices) choices | Specifies where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. | 
| dispensable | *not set* | Boolean true/false |  | 

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

### Item Description
Contains the required identifier for the item. May contain optional fields like menu_category.


#### Item Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | Unique name for the item that must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla item. | 
| menu_category | {"category":"none","group":null,"is_hidden_in_commands":null} | [Menu Category](#item-menu-category) item | menu_category contains the creative group name and category for this item. | 

#### Item Menu Category
menu_category contains the creative group name and category for this item.


##### Item Menu Category Properties

**JSON path:** `description > menu_category`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| category | none | [Category](#category-choices) choices | Creative category where this item belongs. Defaults to "none". | 
| group | *not set* | String | The Creative Group that this item belongs to. | 
| is_hidden_in_commands | *not set* | Boolean true/false | Determines whether or not this item can be used with commands. Defaults to false. | 

##### group

The Creative Group that this item belongs to. Group name is limited to 256 characters. The name also must start with a namespace. Value must have at most 256 items. Value must match a regular expression pattern of "^(?:.)+:(?:.)+$".


### Category choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| construction | Construction | |
| equipment | Equipment | |
| items | Items | |
| nature | Nature | |
| none | None | |