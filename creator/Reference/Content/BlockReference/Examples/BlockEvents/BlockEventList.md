---
author: mammerla
ms.author: v-jillheaden
title: Block Documentation - Block Event Responses List
ms.prod: gaming
---

# Block Documentation - Block Event Responses

Below is a list of all the available Block Event Responses within Minecraft: Bedrock Edition for use with [Block Triggers](../BlockTriggers/BlockTriggerList.md).

>[!IMPORTANT]
> Block Event Responses require the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Block Event Responses List

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[add_mob_effect](minecraftBlock_add_mob_effect.md)|*not set* | JSON Object| Apply mob effect to a target.|
|[damage](minecraftBlock_damage.md)|*not set* | JSON Object| Deals damage to the target.|
|[decrement_stack](minecraftBlock_decrement_stack.md)|*not set* | JSON Object|  Decrement item stack. |
|[die](minecraftBlock_die.md)|*not set* | JSON Object|  Kill target. If the target is self and this is run from a block then destroy the block.|
|[play_effect](minecraftBlock_play_effect.md)|*not set* | JSON Object| Spawns a particle effect relative to the target position.|
|[play_sound](minecraftBlock_play_sound.md)|*not set* | JSON Object| Play a sound relative to the target position. |
|[remove_mob_effect](minecraftBlock_remove_mob_effect.md)|*not set* | JSON Object| Removes mob effect from the target.|
|[run_command](minecraftBlock_run_command.md)|*not set* | JSON Object| Triggers a slash command or a list of slash commands.|
|[set_block](minecraftBlock_set_block.md)|*not set* | JSON Object| Sets this block to another block type.|
|[set_block_at_pos](minecraftBlock_set_block_at_pos.md)|*not set* | JSON Object| Sets a block relative to this block to another block type.|
|[set_block_property](minecraftBlock_set_block_property.md)|*not set* | JSON Object| Sets a block property on this block.|
|[spawn_loot](minecraftBlock_spawn_loot.md)|*not set* | JSON Object| Spawn loot from block.|
|[swing](minecraftBlock_swing.md)|*not set* | JSON Object|  Event causes the actor to swing. |
|[teleport](minecraftBlock_teleport.md)|*not set* | JSON Object|  Teleport a target randomly around destination point.|
|[transform_item](minecraftBlock_transform_item.md)|*not set* | JSON Object|  Transforms item into another item.|
