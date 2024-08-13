---
author: kakinnun
ms.author: kakinnun
title: 1.21.20 Update Notes
description: Update summary of Creator changes in Bedrock 1.21.20
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.21.20 Update Notes for Creators

Minecraft Bedrock has been updated to 1.21.20 and there are a number of changes of note for Add-On creators. The following features do not require experimental toggles.

## Blocks

- **Block Custom Components** - Scripting APIs to handle the block event scenarios that were originally part of "Holiday Creator Features".
  - [random_tick](../ScriptAPI/minecraft/server/BlockCustomComponent.md#onrandomtick)
  - [on_step_on](../ScriptAPI/minecraft/server/BlockCustomComponent.md#onstepon)
  - [on_player_interact](../ScriptAPI/minecraft/server/BlockCustomComponent.md#onplayerinteract)
  - [queued_tick](../ScriptAPI/minecraft/server/BlockCustomComponent.md#ontick)
  - [on_step_off](../ScriptAPI/minecraft/server/BlockCustomComponent.md#onstepoff)
  - [on_player_destroyed](../ScriptAPI/minecraft/server/BlockCustomComponent.md#onplayerdestroy)
  - [on_fall_on](../ScriptAPI/minecraft/server/BlockCustomComponent.md#onentityfallon)
  - [on_player_placing](../ScriptAPI/minecraft/server/BlockCustomComponent.md#beforeonplayerplace)
  - [on_placed](../ScriptAPI/minecraft/server/BlockCustomComponent.md#onplace)

- item_display_transforms is a new control for minecraft:geometry. This controls the way a block is visually represented in the UI, on the player, and floating on the ground. It exists inside minecraft:geometry, and requires format_version 1.21.20.

## Entities

- minecraft:behavior.swim_up_for_breath is a newly exposed AI goal component, which allows a mob to try to move to a location where it can breathe air once it is close to running out of its breathable supply.
  - In Vanilla, this is used by the Dolphin.
  - Any custom content built off of the Vanilla dolphin at or above version 1.21.20 will need to manually add this component to enable this AI behavior
- behavior.teleport_to_owner is a goal, which allows an entity to teleport to its owner.
  - This goal is designed for emergency situations where "behavior.follow_owner" could be too slow or too low priority
  - The "filters" field allows defining the conditions for teleportation using entity filters
  - The "cooldown" field allows defining how often the entity should attempt to teleport
- owner_distance is a new entity filter which checks the distance of an entity from its owner.
- wind_burst_on_hit is a new subcomponent for Projectiles which creates a wind burst upon collision with an entity or block before being removed from the world

## Items

- **Item Custom Components** - Scripting APIs to handle the item event scenarios that were originally part of "Holiday Creator Features".
  - [on_use](../ScriptAPI/minecraft/server/ItemCustomComponent.md#onuse)
  - [on_use_on](../ScriptAPI/minecraft/server/ItemCustomComponent.md#onuseon)
  - [on_mine_block](../ScriptAPI/minecraft/server/ItemCustomComponent.md#onmineblock)
  - [on_complete_use](../ScriptAPI/minecraft/server/ItemCustomComponent.md#oncompleteuse)
  - [on_consume](../ScriptAPI/minecraft/server/ItemCustomComponent.md#onconsume)
  - [on_hit_entity](../ScriptAPI/minecraft/server/ItemCustomComponent.md#onhitentity)

- **Slot body armor for entities** - Modify the interact component of the mob to equip them by putting armor in the mob's body slot.
- **damage_absorption** - When added along with durability and wearable to a custom item, that item will take damage when in the armor slot and not the player or entity. Does not work for items in hand.
- **durability_sensor** - By adding a damage_sensor component to any entity that will wear your custom armor, it will protect them from taking damage when that armor is worn. Doing this means the armor itself will also be undamaged.
- **damage_sensor** - Allows creators to set the sounds and particles that are emitted when items are damaged.

## Features (world decorations)

- **[scatter_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftScatter_feature.md)** - now has a "distribution" field like "minecraft:feature_rules" to define the scattering settings in format_version 1.21.10 and above.

## Molang

- **query.state_time** - Returns the time in seconds spent in the current animation controller state (inclusive of blend time).
  
## Creator API

Another set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.12.0 release:**

- **Tameable / Mount APIs**
  - EntityTamableComponent
    - [getTameItems](../ScriptAPI/minecraft/server/EntityTameableComponent.md#gettameitems)
    - [tame](../ScriptAPI/minecraft/server/EntityTameableComponent.md#tame)
    - [tamedToPlayer](../ScriptAPI/minecraft/server/EntityTameableComponent.md#tamedtoplayer)
    - [tamedToPlayerId](../ScriptAPI/minecraft/server/EntityTameableComponent.md#tamedtoplayerid)
    - [isTamed](../ScriptAPI/minecraft/server/EntityTameableComponent.md#istamed)
  - EntityTameMountComponent
    - [isTamed](../ScriptAPI/minecraft/server/EntityTameMountComponent.md#istamed)
    - [isTamedToPlayer](../ScriptAPI/minecraft/server/EntityTameMountComponent.md#istamedtoplayer)
    - [tamedToPlayer](../ScriptAPI/minecraft/server/EntityTameMountComponent.md#tamedtoplayer)
    - [tamedToPlayerId](../ScriptAPI/minecraft/server/EntityTameMountComponent.md#tamedtoplayerid)
    - [tameToPlayer](../ScriptAPI/minecraft/server/EntityTameMountComponent.md#tametoplayer)
- **PlayerInputPermission APIs**
  - [PlayerInputPermissions](../ScriptAPI/minecraft/server/PlayerInputPermissions.md)
  - Player
    - [inputPermissions](../ScriptAPI/minecraft/server/Player.md#inputpermissions)
  - [InputPermissionCategory](../ScriptAPI/minecraft/server/InputPermissionCategory.md)
  - [PlayerInputPermissionCategoryChangeAfterEvent](../ScriptAPI/minecraft/server/PlayerInputPermissionCategoryChangeAfterEvent.md)
  - [PlayerInputPermissionCategoryChangeAfterEventSignal](../ScriptAPI/minecraft/server/PlayerInputPermissionCategoryChangeAfterEventSignal.md)
  - WorldAfterEvents
    - [playerInputPermissionCategoryChange](../ScriptAPI/minecraft/server/WorldAfterEvents.md#playerinputpermissioncategorychange)
- **Block Explode After Event APIs**
  - [BlockExplodeAfterEvent](../ScriptAPI/minecraft/server/BlockExplodeAfterEvent.md)
  - [BlockExplodeAfterEventSignal](../ScriptAPI/minecraft/server/BlockExplodeAfterEventSignal.md)
  - WorldAfterEvents
    - [blockExplode](../ScriptAPI/minecraft/server/WorldAfterEvents.md#blockexplode)
- **Game Rule: "Days Played"**
  - GameRule
    - [showDaysPlayed](../ScriptAPI/minecraft/server/GameRule.md#showdaysplayed)
- **Enchantment Types**
  - EnchantmentTypes
    - [getAll](../ScriptAPI/minecraft/server/EnchantmentTypes.md#getall)
- **Entity Raycast Options**
  - EntityRaycastOptions
    - [ignoreBlockCollision](../ScriptAPI/minecraft/server/EntityRaycastOptions.md#ignoreblockcollision)
    - [includeLiquidBlocks](../ScriptAPI/minecraft/server/EntityRaycastOptions.md#includeliquidblocks)
    - [includePassableBlocks](../ScriptAPI/minecraft/server/EntityRaycastOptions.md#includepassableblocks)
  - EntityHitBlockAfterEvent
    - [hitBlockPermutation](../ScriptAPI/minecraft/server/EntityHitBlockAfterEvent.md#hitblockpermutation)
- **Entity Movement APIs**
  - [EntityLavaMovementComponent](../ScriptAPI/minecraft/server/EntityLavaMovementComponent.md)
  - [EntityUnderwaterMovementComponent](../ScriptAPI/minecraft/server/EntityUnderwaterMovementComponent.md)
  - [EntityMovementGlideComponent](../ScriptAPI/minecraft/server/EntityMovementGlideComponent.md)
  - [EntityMovementSwayComponent](../ScriptAPI/minecraft/server/EntityMovementSwayComponent.md)
  - [EntityMovementComponent](../ScriptAPI/minecraft/server/EntityMovementComponent.md)
- **EntityAgeableComponent APIs**
  - EntityAgeableComponent
    - [duration](../ScriptAPI/minecraft/server/EntityAgeableComponent.md#duration)
    - [growUp](../ScriptAPI/minecraft/server/EntityAgeableComponent.md#growup)
    - [transformToItem](../ScriptAPI/minecraft/server/EntityAgeableComponent.md#transformtoitem)
    - [getDropItems](../ScriptAPI/minecraft/server/EntityAgeableComponent.md#getdropitems)
    - [getFeedItems](../ScriptAPI/minecraft/server/EntityAgeableComponent.md#getfeeditems)
- **Job System APIs**
  - System
    - [runJob](../ScriptAPI/minecraft/server/System.md#runjob)
    - [clearJob](../ScriptAPI/minecraft/server/System.md#clearjob)
    - [waitTicks](../ScriptAPI/minecraft/server/System.md#waitticks)

**APIs included in the @minecraft/server-ui version 1.2.0 release:**

- **Server UI**
  - ModalFormData
    - [submitButton](../ScriptAPI/minecraft/server-ui/ModalFormData.md#submitbutton)

**APIs included in the @minecraft/server version 1.13.0 release:**

- **BlockPermutation Tags**
  - BlockPermutation
    - [getTags](../ScriptAPI/minecraft/server/BlockPermutation.md#gettags)
    - [hasTag](../ScriptAPI/minecraft/server/BlockPermutation.md#hastag)
- **getTopMostBlock**
  - Dimension
    - [getTopmostBlock](../ScriptAPI/minecraft/server/Dimension.md#gettopmostblock)
  - [VectorXZ](../ScriptAPI/minecraft/server/VectorXZ.md)

Beta APIs will continue to be developed behind the Beta API experimental flag. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

## What's Next

Looking ahead, here's what you can expect coming in future releases.

### Camera

- 3rd Person Preset - currently in experimental, this will add another camera preset type for use with the camera command and APIs.
- Focus Target - A new parameter allowing the Free Cam to track an entity.
- Aim Assist - A feature that allows for Aim Assist to improve usability in Custom Camera scenarios.

### Blocks

- Destructible_by_mining - This will allow creators to set the tool tiers for vanilla and custom blocks.
- Redstone properties and components - This will allow for access to customize Redstone connectivity.

### Script API

- Player Interact Events

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/en-us/sections/360001185332).
