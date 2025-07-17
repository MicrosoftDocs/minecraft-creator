---
author: mammerla
ms.author: mikeam
title: "Item Components Documentation - Item Components"
description: "A reference document describing all current Item Components"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Item Components Documentation

| Item Components | Description |
|:-----|:----------|
| [minecraft:allow_off_hand](Item Component/minecraft_allow_off_hand.md)| The allow_off_hand component determines whether the item can be placed in the off hand slot of the inventory. |
| [minecraft:block_placer](Item Component/minecraft_block_placer.md)| Sets the item as a planter item component for blocks. |
| [minecraft:bundle_interaction](Item Component/minecraft_bundle_interaction.md)| Enables the bundle-specific interaction scheme and tooltip for an item. |
| [minecraft:can_destroy_in_creative](Item Component/minecraft_can_destroy_in_creative.md)| The can_destroy_in_creative component determines if the item can be used by a player to break blocks when in creative mode. |
| [minecraft:compostable](Item Component/minecraft_compostable.md)| Specifies that an item is compostable and provides the chance of creating a composting layer in the composter |
| [minecraft:cooldown](Item Component/minecraft_cooldown.md)| The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again. |
| [minecraft:custom_components](Item Component/minecraft_custom_components.md)| Specifies an array of custom components defined in a script that should be added to this item. |
| [minecraft:damage](Item Component/minecraft_damage.md)| The damage component determines how much extra damage the item does on attack. |
| [minecraft:damage_absorption](Item Component/minecraft_damage_absorption.md)| It allows an item to absorb damage that would otherwise be dealt to its wearer. |
| [minecraft:digger](Item Component/minecraft_digger.md)| Allows a creator to determine how quickly an item can dig specific blocks. |
| [minecraft:display_name](Item Component/minecraft_display_name.md)| Sets the item display name within Minecraft: Bedrock Edition. |
| [minecraft:durability](Item Component/minecraft_durability.md)| Sets how much damage the item can take before breaking, and allows the item to be combined at an anvil, grindstone, or crafting table. |
| [minecraft:durability_sensor](Item Component/minecraft_durability_sensor.md)| Enables an item to emit effects when it receives damage. |
| [minecraft:durability_sensor durability_threshold](Item Component/minecraft_durability_sensor_durability_threshold.md)| Defines both the durability threshold, and the effects emitted when that threshold is met. |
| [minecraft:dyeable](Item Component/minecraft_dyeable.md)| enables custom items to be dyed in cauldrons. |
| [minecraft:enchantable](Item Component/minecraft_enchantable.md)| Determines what enchantments can be applied to the item. |
| [minecraft:entity_placer](Item Component/minecraft_entity_placer.md)| Allows an item to place entities into the world. |
| [minecraft:food](Item Component/minecraft_food.md)| Sets the item as a food component, allowing it to be edible to the player. |
| [minecraft:fuel](Item Component/minecraft_fuel.md)| Allows this item to be used as fuel in a furnace to 'cook' other items. |
| [minecraft:glint](Item Component/minecraft_glint.md)| Determines whether the item has the enchanted glint render effect on it. |
| [minecraft:hand_equipped](Item Component/minecraft_hand_equipped.md)| The hand_equipped component determines if an item is rendered like a tool while it is in a player's hand. |
| [minecraft:hover_text_color](Item Component/minecraft_hover_text_color.md)| Determines the color of the item name when hovering over it. |
| [minecraft:icon](Item Component/minecraft_icon.md)| Determines the icon to represent the item in the UI and elsewhere. |
| [minecraft:interact_button](Item Component/minecraft_interact_button.md)| A boolean or string that determines if the interact button is shown in touch controls, and what text is displayed on the button. |
| [Minecraft Item Item](Item Component/minecraft_item.md)| Item definition includes the "description" and "components" sections. |
| [minecraft:liquid_clipped](Item Component/minecraft_liquid_clipped.md)| The liquid_clipped component determines whether the item interacts with liquid blocks on use. |
| [minecraft:max_stack_size](Item Component/minecraft_max_stack_size.md)| Determines how many of an item can be stacked together. |
| [minecraft:projectile](Item Component/minecraft_projectile.md)| Compels the item to shoot, similarly to an arrow. |
| [minecraft:rarity](Item Component/minecraft_rarity.md)| Specifies the base rarity and subsequently color of the item name when the player hovers the cursor over the item. |
| [minecraft:record](Item Component/minecraft_record.md)| Used by record items to play music. |
| [minecraft:repairable](Item Component/minecraft_repairable.md)| Defines the items that can be used to repair a defined item, and the amount of durability each item restores upon repair. |
| [minecraft:shooter](Item Component/minecraft_shooter.md)| Compels an item to shoot projectiles, similarly to a bow or crossbow. |
| [minecraft:should_despawn](Item Component/minecraft_should_despawn.md)| Should_despawn component determines if the item should eventually despawn while floating in the world |
| [minecraft:stacked_by_data](Item Component/minecraft_stacked_by_data.md)| The stacked_by_data component determines whether the same items with different aux values can stack. |
| [minecraft:storage_item](Item Component/minecraft_storage_item.md)| Enables an item to store data of the dynamic container associated with it. |
| [minecraft:storage_weight_limit](Item Component/minecraft_storage_weight_limit.md)| Specifies the maximum weight limit that a storage item can hold |
| [minecraft:storage_weight_modifier](Item Component/minecraft_storage_weight_modifier.md)| Specifies the maximum weight limit that a storage item can hold |
| [minecraft:tags](Item Component/minecraft_tags.md)| Determines which tags are included on a given item |
| [minecraft:throwable](Item Component/minecraft_throwable.md)| Sets the throwable item component. |
| [minecraft:use_animation](Item Component/minecraft_use_animation.md)| Use_animation specifies which animation is played when the player uses the item. |
| [minecraft:use_modifiers](Item Component/minecraft_use_modifiers.md)| Determines how long an item takes to use in combination with components such as Shooter, Throwable, or Food. |
| [minecraft:wearable](Item Component/minecraft_wearable.md)| Sets the wearable item component. |

## Internal/Deprecated Components
These components are either deprecated or internal to Minecraft and not usable in custom content.

| Item Components | Description |
|:-----|:----------|
| [chargeable](Item Component/minecraft_chargeable.md)| Event trigger for when the item has completed its use duration. |
| [render_offsets](Item Component/minecraft_render_offsets.md)| Render offsets component: optional values can be given to offset the way the item is rendered. |
| [use_duration](Item Component/minecraft_use_duration.md)| This component determines how long the item takes to use when used in combination with components like "shooter", "throwable", or "food". |
| [weapon](Item Component/minecraft_weapon.md)| Weapon Item Component. |