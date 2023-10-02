---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - Item Component List
description: The list of all components available for Item Components.
ms.service: minecraft-bedrock-edition
---

# Item Documentation - Item Components

Below is a list of all the available Item Components within Minecraft: Bedrock Edition for use with Item JSON files.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[description](ItemComponents/description_component.md)|*not set* |  JSON Object| A list of characters representing an item. The description MUST contain an identifier; other fields are optional.|
|[menu_category](ItemComponents/menu_category_component.md)|*not set* |  JSON Object| Defines the creative group name and menu category of an item.|
|[minecraft:allow_off_hand](ItemComponents/minecraft_allow_off_hand.md)|*not set* |  JSON Object| Determine whether an item can be placed in the off-hand slot of the inventory.|
|[minecraft:block_placer](ItemComponents/minecraft_block_placer.md)|*not set* | JSON Object|  Block Placer item component. Items with this component will place a block when used. Experimental toggles required: Holiday Creator Features (in format versions before 1.20.10). |
|[minecraft:can_destroy_in_creative](ItemComponents/minecraft_can_destroy_in_creative.md)|*not set* | JSON Object| Determines if the item will break blocks in Creative Mode while swinging.|
|[minecraft:chargeable](ItemComponents/minecraft_chargeable.md)|*not set* | JSON Object| Allows an item to be used over a duration.|
|[minecraft:cooldown](ItemComponents/minecraft_cooldown.md)|*not set* | JSON Object| Cool down time for a component. After use, all items in a specified 'cool down category' become unusable for a determined amount of time defined in the component. In format versions before 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:damage](ItemComponents/minecraft_damage.md)|*not set* | JSON Object| Determines how much extra damage the item does on attack.|
|[minecraft:digger](ItemComponents/minecraft_digger.md)|*not set* | JSON Object|  Digger item. Component put on items that dig.|
|[minecraft:display_name](ItemComponents/minecraft_display_name.md)|*not set* | JSON Object| Defines the text shown when an item name is shown, such as hover text. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle. |
|[minecraft:durability](ItemComponents/minecraft_durability.md)|*not set* |JSON Object| Determines how much damage the item can take before breaking, and allows the item to be combined in crafting. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:enchantable](ItemComponents/minecraft_enchantable.md)|*not set* |JSON Object| Determines what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.|
|[minecraft:entity_placer](ItemComponents/minecraft_entity_placer.md)|*not set* | JSON Object|  Allows the item to place specified entities into the world. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:food](ItemComponents/minecraft_food.md)|*not set* | JSON Object|  When an item has a food component, it becomes edible to the player.|
|[minecraft:fuel](ItemComponents/minecraft_fuel.md)|*not set* |  JSON Object| Allows the item to be used as fuel in a furnace to 'cook' other items. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:glint](ItemComponents/minecraft_glint.md)|*not set* | JSON Object| Determines whether the item has the enchanted glint render effect on it.|
|[minecraft:hand_equipped](ItemComponents/minecraft_hand_equipped.md)|*not set* | JSON Object| Determines if an item is rendered like a tool while in hand.|
|[minecraft:hover_text_color](ItemComponents/minecraft_hover_text_color.md)|*not set* |  JSON Object| Determines the color of the item name when hovering over it.|
|[minecraft:icon](ItemComponents/minecraft_icon.md)|*not set* | JSON Object| Determines the icon to represent the item in the UI and elsewhere. In format versions before 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:interact_button](ItemComponents/minecraft_interact_button.md)|*not set* | JSON Object| This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button. When set to 'true', default 'Use Item' text will be used.|
|[minecraft:item](ItemComponents/minecraft_item.md)|*not set* | JSON Object| A definition of the item, including the 'description' and 'components' sections of the item file.|
|[minecraft:liquid_clipped](ItemComponents/minecraft_liquid_clipped.md)|*not set* | JSON Object| Determines whether an item interacts with liquid blocks on use.|
|[minecraft:max_stack_size](ItemComponents/minecraft_max_stack_size.md)|*not set* | JSON Object| Determines how many of the item can be stacked.|
|[minecraft:on_use](ItemComponents/minecraft_on_use.md)|*not set* | JSON Object|  The on_use item component allows you to receive an event when the item is used.|
|[minecraft:on_use_on](ItemComponents/minecraft_on_use_on.md)|*not set*| JSON Object | The on_use_on item component allows you to receive an event when the item is used on a block in the world|
|[minecraft:projectile](ItemComponents/minecraft_projectile.md)|*not set* | JSON Object| Projectile item component. Projectile items shoot out, like an arrow. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:record](ItemComponents/minecraft_record.md)|*not set* | JSON Object|  The record item component allows the item to play a sound when used in a jukebox. |
|[minecraft:render_offsets](ItemComponents/minecraft_render_offsets.md)|*not set* | JSON Object|  Render offsets component: optional values can be given to offset the way the item is rendered.|
|[minecraft:repairable](ItemComponents/minecraft_repairable.md)|*not set* | JSON Object|  Repairable item component: Determines which items can be used to repair a defined item, as well as the amount of durability specified items will repair. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:shooter](ItemComponents/minecraft_shooter.md)|*not set* | JSON Object|  Shooter Item Component. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:should_despawn](ItemComponents/minecraft_should_despawn.md)|*not set* | JSON Object| Determines whether an item should eventually despawn while floating in the world.|
|[minecraft:stacked_by_data](ItemComponents/minecraft_stacked_by_data.md)|*not set* | JSON Object| Determines if the same item with different aux values can stack. Additionally, defines whether the item actors can merge while floating in the world.|
|[minecraft:throwable](ItemComponents/minecraft_throwable.md)|*not set* | JSON Object|  Throwable item component. Throwable items, such as a snowball. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:use_animation](ItemComponents/minecraft_use_animation.md)|*not set* | JSON Object| Determines which animation plays when using an item.|
|[minecraft:use_duration](ItemComponents/minecraft_use_duration.md)|*not set* | JSON Object| Determines how long an item takes to use in combination with components such as shooter, throwable, or food.|
|[minecraft:weapon](ItemComponents/minecraft_weapon.md)|*not set* |  JSON Object| Weapon Item Component. Added to every weapon item such as axe, sword, trident, bow, crossbow.|
|[minecraft:wearable](ItemComponents/minecraft_wearable.md)|*not set* | JSON Object| Determines where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. Experimental toggles required: Holiday Creator Features.|
