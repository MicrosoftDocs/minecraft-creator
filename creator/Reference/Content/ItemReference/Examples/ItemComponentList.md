---
author: mammerla
ms.author: mikeam
title: "Item Components Documentation - Item Components"
description: "A reference document describing all current Item Components"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Item Components Documentation

| Item Components | Description |
|:-----|:----------|
| [minecraft:allow_off_hand](./ItemComponents/minecraft_allow_off_hand.md)| The allow_off_hand component determines whether the item can be placed in the off hand slot of the inventory. |
| [minecraft:block_placer](./ItemComponents/minecraft_block_placer.md)| Sets the item as a planter item component for blocks. |
| [minecraft:bundle_interaction](./ItemComponents/minecraft_bundle_interaction.md)| Enables the bundle-specific interaction scheme and tooltip for an item. |
| [minecraft:can_destroy_in_creative](./ItemComponents/minecraft_can_destroy_in_creative.md)| The can_destroy_in_creative component determines if the item can be used by a player to break blocks when in creative mode. |
| [minecraft:compostable](./ItemComponents/minecraft_compostable.md)| Specifies that an item is compostable and provides the chance of creating a composting layer in the composter |
| [minecraft:cooldown](./ItemComponents/minecraft_cooldown.md)| Adds a cooldown to an item, preventing it from being used again for a specified duration. |
| [minecraft:damage](./ItemComponents/minecraft_damage.md)| The damage component determines how much extra damage the item does on attack. |
| [minecraft:damage_absorption](./ItemComponents/minecraft_damage_absorption.md)| It allows an item to absorb damage that would otherwise be dealt to its wearer. |
| [minecraft:digger](./ItemComponents/minecraft_digger.md)| Configures an item as a digging tool, allowing it to break specific blocks faster than normal. |
| [minecraft:display_name](./ItemComponents/minecraft_display_name.md)| Sets the item display name within Minecraft: Bedrock Edition. |
| [minecraft:durability](./ItemComponents/minecraft_durability.md)| Sets how much damage the item can take before breaking, and allows the item to be combined at an anvil, grindstone, or crafting table. |
| [minecraft:durability_sensor](./ItemComponents/minecraft_durability_sensor.md)| Enables an item to emit effects when it receives damage. |
| [minecraft:durability_sensor durability_threshold](./ItemComponents/minecraft_durability_sensor_durability_threshold.md)| Defines both the durability threshold, and the effects emitted when that threshold is met. |
| [minecraft:dyeable](./ItemComponents/minecraft_dyeable.md)| enables custom items to be dyed in cauldrons. |
| [minecraft:enchantable](./ItemComponents/minecraft_enchantable.md)| Determines what enchantments can be applied to the item. |
| [minecraft:entity_placer](./ItemComponents/minecraft_entity_placer.md)| Allows an item to place entities into the world. |
| [minecraft:fire_resistant](./ItemComponents/minecraft_fire_resistant.md)| Determines whether the item is immune to burning when dropped in fire or lava. |
| [minecraft:food](./ItemComponents/minecraft_food.md)| Sets the item as a food component, allowing it to be edible to the player. |
| [minecraft:fuel](./ItemComponents/minecraft_fuel.md)| Allows this item to be used as fuel in a furnace to 'cook' other items. |
| [minecraft:glint](./ItemComponents/minecraft_glint.md)| Determines whether the item has the enchanted glint render effect on it. |
| [minecraft:hand_equipped](./ItemComponents/minecraft_hand_equipped.md)| The hand_equipped component determines if an item is rendered like a tool while it is in a player's hand. |
| [minecraft:hover_text_color](./ItemComponents/minecraft_hover_text_color.md)| Determines the color of the item name when hovering over it. |
| [minecraft:icon](./ItemComponents/minecraft_icon.md)| Determines the icon to represent the item in the UI and elsewhere. |
| [minecraft:interact_button](./ItemComponents/minecraft_interact_button.md)| A boolean or string that determines if the interact button is shown in touch controls, and what text is displayed on the button. |
| [Minecraft Item Item](./ItemComponents/minecraft_item.md)| Refers to the item definition, which includes the 'description' and 'components' sections of the file. |
| [minecraft:kinetic_weapon](./ItemComponents/minecraft_kinetic_weapon.md)| Allows an item to deal kinetic damage and its effects. |
| [minecraft:kinetic_weapon kinetic_effect_conditions](./ItemComponents/minecraft_kinetic_weapon_kinetic_effect_conditions.md)| Conditions that need to be satisfied for a specific effect of a kinetic weapon to be applied. |
| [minecraft:liquid_clipped](./ItemComponents/minecraft_liquid_clipped.md)| The liquid_clipped component determines whether the item interacts with liquid blocks on use. |
| [minecraft:max_stack_size](./ItemComponents/minecraft_max_stack_size.md)| Determines how many of an item can be stacked together. |
| [minecraft:piercing_weapon](./ItemComponents/minecraft_piercing_weapon.md)| Allows an item to deal damage to all entities detected in a straight line along the user's view vector. |
| [minecraft:projectile](./ItemComponents/minecraft_projectile.md)| Defines an item as a projectile that can be shot from dispensers or used as ammunition with minecraft:shooter. |
| [minecraft:rarity](./ItemComponents/minecraft_rarity.md)| Specifies the base rarity and subsequently color of the item name when the player hovers the cursor over the item. |
| [minecraft:record](./ItemComponents/minecraft_record.md)| Used by record items to play music. |
| [minecraft:repairable](./ItemComponents/minecraft_repairable.md)| Defines the items that can be used to repair a defined item, and the amount of durability each item restores upon repair. |
| [minecraft:seed](./ItemComponents/minecraft_seed.md)| Sets the item as a seed that can be planted to grow crops. |
| [minecraft:shooter](./ItemComponents/minecraft_shooter.md)| Compels an item to shoot projectiles, similarly to a bow or crossbow. |
| [minecraft:should_despawn](./ItemComponents/minecraft_should_despawn.md)| Should_despawn component determines if the item should eventually despawn while floating in the world |
| [minecraft:stacked_by_data](./ItemComponents/minecraft_stacked_by_data.md)| The stacked_by_data component determines whether the same items with different aux values can stack. |
| [minecraft:storage_item](./ItemComponents/minecraft_storage_item.md)| Enables an item to store data of the dynamic container associated with it. |
| [minecraft:storage_weight_limit](./ItemComponents/minecraft_storage_weight_limit.md)| Specifies the maximum weight limit that a storage item can hold |
| [minecraft:storage_weight_modifier](./ItemComponents/minecraft_storage_weight_modifier.md)| Specifies the maximum weight limit that a storage item can hold |
| [minecraft:swing_duration](./ItemComponents/minecraft_swing_duration.md)| Duration, in seconds, of the item's swing animation played when mining or attacking. |
| [minecraft:swing_sounds](./ItemComponents/minecraft_swing_sounds.md)| Overrides the swing sounds emitted by the user. |
| [minecraft:tags](./ItemComponents/minecraft_tags.md)| Determines which tags are included on a given item |
| [minecraft:throwable](./ItemComponents/minecraft_throwable.md)| Makes an item throwable by the player, similar to a snowball or ender pearl. |
| [minecraft:use_animation](./ItemComponents/minecraft_use_animation.md)| Use_animation specifies which animation is played when the player uses the item. |
| [minecraft:use_modifiers](./ItemComponents/minecraft_use_modifiers.md)| Determines how long an item takes to use in combination with components such as Shooter, Throwable, or Food. |
| [minecraft:wearable](./ItemComponents/minecraft_wearable.md)| Sets the wearable item component, which allows an item to be worn by a player in a specified equipment slot. |

## Internal/Deprecated Components
These components are either deprecated or internal to Minecraft and not usable in custom content.

| Item Components | Description |
|:-----|:----------|
| [chargeable](./ItemComponents/minecraft_chargeable.md)| Event trigger for when the item has completed its use duration. |
| [custom_components](./ItemComponents/minecraft_custom_components.md)| Specifies an array of custom components defined in a script that should be added to this item. |
| [render_offsets](./ItemComponents/minecraft_render_offsets.md)| Render offsets component: optional values can be given to offset the way the item is rendered. |
| [use_duration](./ItemComponents/minecraft_use_duration.md)| This component determines how long the item takes to use when used in combination with components like "shooter", "throwable", or "food". |
| [weapon](./ItemComponents/minecraft_weapon.md)| Deprecated weapon item component. |