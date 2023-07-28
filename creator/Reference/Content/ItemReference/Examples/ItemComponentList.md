---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - Item Component List
ms.prod: gaming
description: The list of all components available for Item Components.
---

# Item Documentation - Item Components

Below is a list of all the available Item Components within Minecraft: Bedrock Edition for use with Item JSON files.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[minecraft:armor](ItemComponents/minecraft_armor.md)|*not set* |  JSON Object| The armor item component determines the amount of protection you have in your armor item.|
|[minecraft:block_placer](ItemComponents/minecraft_block_placer.md)|*not set* | JSON Object|  Block Placer item component. Items with this component will place a block when used. Experimental toggles required: Holiday Creator Features (in format versions before 1.20.10). |
|[minecraft:can_destroy_in_creative](ItemComponents/minecraft_can_destroy_in_creative.md)|*not set* | JSON Object| Determines if the item will break blocks in Creative Mode while swinging.|
|[minecraft:chargeable](ItemComponents/minecraft_chargeable.md)|*not set* | JSON Object| Allows an item to be used over a duration.|
|[minecraft:cooldown](ItemComponents/minecraft_cooldown.md)|*not set* | JSON Object| Cool down time for a component. After use, all items in a specified 'cool down category' become unusable for a determined amount of time defined in the component. In format versions before 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:digger](ItemComponents/minecraft_digger.md)|*not set* | JSON Object|  Digger item. Component put on items that dig.|
|[minecraft:display_name](ItemComponents/minecraft_display_name.md)|*not set* | JSON Object|  Defines the text shown when an item name is shown, such as hover text. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle. |
|[minecraft:durability](ItemComponents/minecraft_durability.md)|*not set* |JSON Object|  Determines how much damage the item can take before breaking, and allows the item to be combined in crafting. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:entity_placer](ItemComponents/minecraft_entity_placer.md)|*not set* | JSON Object|  Allows the item to place specified entities into the world. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:foil](ItemComponents/minecraft_foil.md)|*not set* | JSON Object|  When an item has a foil component, it gains a shimmery glint to its appearance.|
|[minecraft:food](ItemComponents/minecraft_food.md)|*not set* | JSON Object|  When an item has a food component, it becomes edible to the player.|
|[minecraft:fuel](ItemComponents/minecraft_fuel.md)|*not set* |  JSON Object| Allows the item to be used as fuel in a furnace to 'cook' other items. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:hover_text_color](ItemComponents/minecraft_hover_text_color.md)|*not set* |  JSON Object| Determines the color of the item name when hovering over it.|
|[minecraft:icon](ItemComponents/minecraft_icon.md)|*not set* | JSON Object| Determines the icon to represent the item in the UI and elsewhere. In format versions before 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:item_storage](ItemComponents/minecraft_item_storage.md)|*not set* | JSON Object| Used for storing items within an item's user data.|
|[minecraft:knockback_resistance](ItemComponents/minecraft_knockback_resistance.md)|*not set* | JSON Object| Sets the knockback resistance item component, deetermining the amount of  knockback resistance that the item has.|
|[minecraft:max_stack_size](ItemComponents/minecraft_max_stack_size.md)|*not set* | JSON Object| Determines how many of the item can be stacked.|
|[minecraft:on_use](ItemComponents/minecraft_on_use.md)|*not set* | JSON Object|  The on_use item component allows you to receive an event when the item is used.|
|[minecraft:on_use_on](ItemComponents/minecraft_on_use_on.md)|*not set*| JSON Object | The on_use_on item component allows you to receive an event when the item is used on a block in the world|
|[minecraft:projectile](ItemComponents/minecraft_projectile.md)|*not set* | JSON Object| Projectile item component. Projectile items shoot out, like an arrow. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:record](ItemComponents/minecraft_record.md)|*not set* | JSON Object|  The icon item component determines the icon to represent the item in the UI and elsewhere. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:render_offsets](ItemComponents/minecraft_render_offsets.md)|*not set* | JSON Object|  Render offsets component: optional values can be given to offset the way the item is rendered.|
|[minecraft:repairable](ItemComponents/minecraft_repairable.md)|*not set* | JSON Object|  Repairable item component: Determines which items can be used to repair a defined item, as well as the amount of durability specified items will repair. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:shooter](ItemComponents/minecraft_shooter.md)|*not set* | JSON Object|  Shooter Item Component. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:throwable](ItemComponents/minecraft_throwable.md)|*not set* | JSON Object|  Throwable item component. Throwable items, such as a snowball. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.|
|[minecraft:weapon](ItemComponents/minecraft_weapon.md)|*not set* |  JSON Object| Weapon Item Component. Added to every weapon item such as axe, sword, trident, bow, crossbow.|
|[minecraft:wearable](ItemComponents/minecraft_wearable.md)|*not set* | JSON Object| Determines where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. Experimental toggles required: Holiday Creator Features.|
