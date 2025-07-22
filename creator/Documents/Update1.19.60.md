---
author: kakinnun
ms.author: kakinnun
title: 1.19.60 Update Notes
description: Update summary of Creator changes in Bedrock 1.19.60
ms.service: minecraft-bedrock-edition
ms.date: 02/07/2023
---
# Minecraft Bedrock 1.19.60 Update Notes for Creators

Minecraft Bedrock has been updated to 1.19.60 and there are a number of changes of note for creators.

## Holiday Creator Features ##

We continue to work on bringing the Holiday Creator Features out of experimental. Our current focus is on block components. The following block components are now available outside of the experimental toggle in 1.19.60.

- [PlacementFilter](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_placement_filter.md)
- [SelectionBox](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_selection_box.md)
- [DisplayName](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_display_name.md)

## Particle Effects ##

- Added support for mixed color blending on [particle effects](./ParticleEffects.md).

## Molang ##

- Added new Molang *is_local_player* to allow detection of the current player.

## Components ##

Some existing entity components have new capability that may be helpful to creators.

- [Minecraft:shooter](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_shooter.md) component – expanded to define multiple projectiles that can specify different projectile definitions and condition filters. Exposed more fields to shooter component to allow for more projectile customization such as throw power, sounds, and whether the attack is a magic attack.
- [has_equipment](../Reference/Content/EntityReference/Examples/Filters/has_equipment.md) filter - Added "inventory" as a possible "domain" value which allows to check for items stored in the entities' inventory.
- [interact](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_interact.md) component - Added an "equip_item_slot" field.
  - If set, an item held by the player will be equipped to the specified slot upon successful interaction.
  - If an item is already present in the specified slot, it will be moved to the player's inventory
  - Equipping an item removes it from the player's inventory, unless the player is in Creative Mode.

## Documentation ##
We've added additional reference documentation on commands. [Check it out!](../Commands/index.yml)

## Creator API ##

A reminder that a limited number of APIs were released out of experimental in [1.19.50](Update1.19.50.md). There are no new APIs leaving experimental in 1.19.60 but there are a number of new APIs behind experimental.

The following APIs have been added to the Beta API experiment. To use these, you need to enable the Beta APIs experimental toggle.

**Updated scoreboard APIs allow for score read/write**

- [Scoreboard](../PriorScriptAPI/minecraft/server-1xx/Scoreboard.md)
  - [setScore](../PriorScriptAPI/minecraft/server-1xx/Sc
  oreboard.md#setscore)(ScoreboardObjective, ScoreboardIdentity, Number)
  - [getScore](../PriorScriptAPI/minecraft/server-1xx/Scoreboard.md#getscore)(ScoreboardObjective, ScoreboardIdentity)
- [ScoreboardObjective](../PriorScriptAPI/minecraft/server-1xx/ScoreboardObjective.md)
  - [setScore](../PriorScriptAPI/minecraft/server-1xx/ScoreboardObjective.md#setscore)(ScoreboardIdentity, Number)
  - [getScore](../PriorScriptAPI/minecraft/server-1xx/ScoreboardObjective.md#getscore)(ScoreboardIdentity)
  - [removeParticipant](../PriorScriptAPI/minecraft/server-1xx/ScoreboardObjective.md#removeparticipant)(ScoreboardIdentity)
- [ScoreboardIdentity](../PriorScriptAPI/minecraft/server-1xx/ScoreboardIdentity.md)
  - [setScore](../PriorScriptAPI/minecraft/server-1xx/ScoreboardIdentity.md#setscore)(ScoreboardObjective, Number)
  - [getScore](../PriorScriptAPI/minecraft/server-1xx/ScoreboardIdentity.md#getscore)(ScoreboardObjective)
  - [removeFromObjective](../PriorScriptAPI/minecraft/server-1xx/ScoreboardIdentity.md#removefromobjective)(ScoreboardObjective)

**EntityHurt event**

- Added read-only property damageSource: EntityDamageSource - Gets information about the damage source.

- [EntityDamageSource](../PriorScriptAPI/minecraft/server-1xx/EntityDamageSource.md)
  - Added property [cause](../PriorScriptAPI/minecraft/server-1xx/EntityDamageSource.md#cause): EntityDamageCause - Gets the damage cause
  - Added property [damagingEntity](../PriorScriptAPI/minecraft/server-1xx/EntityDamageSource.md#damagingentity)?: Entity - Gets the damaging Entity
  - Added property [damagingProjectile](../PriorScriptAPI/minecraft/server-1xx/EntityDamageSource.md#damagingprojectile)?: Entity - Gets the damaging projectile Entity
  - Added function [applyDamage](../PriorScriptAPI/minecraft/server-1xx/Entity.md#applydamage)(amount: number, source?: EntityDamageSource): boolean - Applies damage to the Entity and returns the result of the operation

**Fill Blocks APIs**

- Added function [dimension.fillBlocks](../PriorScriptAPI/minecraft/server-1xx/Dimension.md#fillblocks)(begin: BlockLocation, end: BlockLocation, block: BlockPermutation | BlockType, options?: BlockFillOptions): number
  - Fills an area between begin and end with block of type block. Returns number of blocks placed
- Added new interface [BlockFillOptions](../PriorScriptAPI/minecraft/server-1xx/BlockFillOptions.md) with member matchingBlock?: BlockPermutation | BlockType
  - Used with fillBlocks to apply additional options, such as only filling blocks matching matchingBlock

**Experience/Level APIs on Player**

Additional functions and properties added to the [Player](../PriorScriptAPI/minecraft/server-1xx/Player.md) Class to manage experience and levels.

- Added function [addLevels](../PriorScriptAPI/minecraft/server-1xx/Player.md#addlevels)(amount: number): number - Adds/Removes level to/from the Player and returns the current level of the Player
- Added function [addExperience](../PriorScriptAPI/minecraft/server-1xx/Player.md#addexperience)(amount: number): number - Adds/Removes experience to/from the Player and returns the current experience of the Player
- Added function [resetLevel](../PriorScriptAPI/minecraft/server-1xx/Player.md#resetlevel)(): void - Resets the level of the Player
- Added function [getTotalXp](../PriorScriptAPI/minecraft/server-1xx/Player.md#gettotalxp)(): number - Gets the total experience of the Player
- Added read-only property [level](../PriorScriptAPI/minecraft/server-1xx/Player.md#level) - Gets the level of the Player
- Added read-only property [xpEarnedAtCurrentLevel](../PriorScriptAPI/minecraft/server-1xx/Player.md#xpearnedatcurrentlevel) - Gets the experience earned at the current level of the Player
- Added read-only property [totalXpNeededForNextLevel](../PriorScriptAPI/minecraft/server-1xx/Player.md#totalxpneededfornextlevel) - Gets the total experience required for the current level of the Player

**Effects and fire improvements**

Additional APIs added to [Entity](../PriorScriptAPI/minecraft/server-1xx/Entity.md) Class to manage effects and fire status.

- Added method [getEffects](../PriorScriptAPI/minecraft/server-1xx/Entity.md#geteffects) which returns an array of all active effects on the entity
- Added method [setOnFire](../PriorScriptAPI/minecraft/server-1xx/Entity.md#setonfire)(seconds: number, useEffects?: boolean = true): boolean) which sets an entity on fire (if it is not in water or rain).
- Added method [extinguishFire](../PriorScriptAPI/minecraft/server-1xx/Entity.md#extinguishfire)(useEffects?: boolean = true): void which extinguishes the fire.

**Send messages to JavaScript from commands with the /scriptevent command**

- Added /scriptevent command as part of the Beta APIs experiment. This is what will trigger system.events.scriptEventReceive events (see below)
  - Usage: /scriptevent <messsageId: string> [message: ???]
  - messageId must be namespaced, use of the minecraft namespace is invalid (e.g. "/scriptevent give:coal", "/scriptevent my_scripts:spawn_sheep")
  - message is optional, with a max length of 256 characters
- [events.scriptEventReceive](../PriorScriptAPI/minecraft/server-1xx/SystemAfterEvents.md#scripteventreceive)
  - Added system event events.scriptEventReceive
  - Added read-only property id: String- The namespaced ID of the event
  - Added read-only property message: String- The content of the message the event was sent with
  - Added read-only property sourceBlock: Block- The command block that triggered/executed the command call if applicable, otherwise undefined
  - Added read-only property sourceEntity: Entity- The player/entity that executed the command call if applicable, otherwise undefined
  - Added read-only property initiator: Entity- The player that caused an NPC to execute the command call if applicable, otherwise undefined
  - Added read-only property sourceType: MessageSourceType- The type of source the event was triggered by
  - subscribe()can filter by valid namespace string using the ScriptEventMessageFilterOptions class

- [ScriptEventMessageFilterOptions](../PriorScriptAPI/minecraft/server-1xx/ScriptEventMessageFilterOptions.md)
  - Added ScriptEventMessageFilterOptions class
  - Added [property](../PriorScriptAPI/minecraft/server-1xx/ScriptEventMessageFilterOptions.md#properties) namespaces: string[]- An array of namespaces to filter on

**Other miscellaneous improvements:**

- [Block](../PriorScriptAPI/minecraft/server-1xx/Block.md)
  - Added function [getRedstonePower()](../PriorScriptAPI/minecraft/server-1xx/Block.md#getredstonepower): number - Gets the Redstone signal strength of the Block if it is part of a circuit, otherwise returns undefined.
- [Simulated Player](../ScriptAPI/minecraft/server-gametest/SimulatedPlayer.md)
  - Added property [isSprinting](../ScriptAPI/minecraft/server-gametest/SimulatedPlayer.md#issprinting) - Used to get or set if the sprinting state of the simulated player is set to true.

Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.1.0-beta. Read more about [script versioning](ScriptVersioning.md).

Looking ahead to upcoming releases, we are looking to release our next set of APIs out of experimental, potentially including read-only block and entity APIs.

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).
