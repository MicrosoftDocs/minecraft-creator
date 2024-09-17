---
author: kakinnun
ms.author: kakinnun
title: 1.21 Update Notes
description: Update summary of Creator changes in Bedrock 1.21
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.21 Update Notes for Creators

Minecraft Bedrock has been updated to 1.21 and there are a number of changes of note for Add-On creators. The following features do not require experimental toggles.

## Blocks 
- **Transform pivot point** - We added an additional pivot point attribute to the block transformation component to facilitate rotation and scale operations. More information is available in the [minecraft:transformation](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_transformation.md) reference documentation.
- **UV Rotations** - This allows you to rotate the specified uv rect in 90 degree increments before applying it to a block face.

## Creator API

Another set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.11.0 release:**

- **HUD Show/Hide APIs**
  - ScreenDisplay
    - [getHiddenHudElements](../ScriptAPI/minecraft/server/ScreenDisplay.md#gethiddenhudelements)
    - [isForcedHidden](../ScriptAPI/minecraft/server/ScreenDisplay.md#isforcedhidden)
    - [resetHudElements](../ScriptAPI/minecraft/server/ScreenDisplay.md#resethudelements)
    - [setHudVisibility](../ScriptAPI/minecraft/server/ScreenDisplay.md#sethudvisibility)
    - [hideAllExcept](../ScriptAPI/minecraft/server/ScreenDisplay.md#hideallexcept)
  - [HudElement](../ScriptAPI/minecraft/server/HudElement.md)
  - [HudVisibility](../ScriptAPI/minecraft/server/HudVisibility.md)
- **Weather Before Event**
  - [WeatherChangeBeforeEvent](../ScriptAPI/minecraft/server/WeatherChangeBeforeEvent.md)
- **Enchantment APIs**
  - [ItemEnchantableComponent](../ScriptAPI/minecraft/server/ItemEnchantableComponent.md)
  - [Enchantment](../ScriptAPI/minecraft/server/Enchantment.md)
  - [EnchantmentSlot](../ScriptAPI/minecraft/server/EnchantmentSlot.md)
  - [EnchantmentType](../ScriptAPI/minecraft/server/EnchantmentType.md)
  - [EnchantmentTypes](../ScriptAPI/minecraft/server/EnchantmentTypes.md)
- **EntityQueryOptions**
  - EntityQueryOptions
    - [volume](../ScriptAPI/minecraft/server/EntityQueryOptions.md#volume)
- **Block TypeId**
  - Block
    - [setType](../ScriptAPI/minecraft/server/Block.md#settype)
    - [type](../ScriptAPI/minecraft/server/Block.md#type)
    - [typeId](../ScriptAPI/minecraft/server/Block.md#typeid)
    - [matches](../ScriptAPI/minecraft/server/Block.md#matches)
  - BlockType
    - [id](../ScriptAPI/minecraft/server/BlockType.md#id)
  - BlockTypes
    - [get](../ScriptAPI/minecraft/server/BlockTypes.md#get)
    - [getAll](../ScriptAPI/minecraft/server/BlockTypes.md#getall)
- **Game Rules APIs**
  - [GameRules](../ScriptAPI/minecraft/server/GameRules.md)
  - [GameRule](../ScriptAPI/minecraft/server/GameRule.md)
  - [GameRuleChangeAfterEvent](../ScriptAPI/minecraft/server/GameRuleChangeAfterEvent.md)
  - [GameRuleChangeAfterEventSignal](../ScriptAPI/minecraft/server/GameRuleChangeAfterEventSignal.md)
  - World
    - [gameRules](../ScriptAPI/minecraft/server/World.md#gamerules)
  - WorldAfterEvents
    - [gameRuleChange](../ScriptAPI/minecraft/server/WorldAfterEvents.md#gamerulechange)
- **Gamemode APIs**
  - Player
    - [setGameMode](../ScriptAPI/minecraft/server/Player.md#setgamemode)
    - [getGameMode](../ScriptAPI/minecraft/server/Player.md#getgamemode)
  - [PlayerGameModeChangeBeforeEvent](../ScriptAPI/minecraft/server/PlayerGameModeChangeBeforeEvent.md)
  - [PlayerGameModeChangeAfterEvent](../ScriptAPI/minecraft/server/PlayerGameModeChangeAfterEvent.md)
  - [PlayerGameModeChangeBeforeEventSignal](../ScriptAPI/minecraft/server/PlayerGameModeChangeBeforeEventSignal.md)
  - [PlayerGameModeChangeAfterEventSignal](../ScriptAPI/minecraft/server/PlayerGameModeChangeAfterEventSignal.md)
  - WorldAfterEvents
    - [playerGameModeChange](../ScriptAPI/minecraft/server/WorldAfterEvents.md#playergamemodechange)
  - WorldBeforeEvents
    - [playerGameModeChange](../ScriptAPI/minecraft/server/WorldBeforeEvents.md#playergamemodechange)
- **Block Volume APIs**
  - [ListBlockVolume](../ScriptAPI/minecraft/server/ListBlockVolume.md)
  - [BlockVolumeBase](../ScriptAPI/minecraft/server/BlockVolumeBase.md)
  - [BlockLocationIterator](../ScriptAPI/minecraft/server/BlockLocationIterator.md)
- **Color Component APIs**
  - [EntityColorComponent](../ScriptAPI/minecraft/server/EntityColorComponent.md)
  - [EntityColor2Component](../ScriptAPI/minecraft/server/EntityColor2Component.md)
  - [PaletteColor](../ScriptAPI/minecraft/server/PaletteColor.md)
- **EntityNavigation APIs**
  - [EntityNavigationClimbComponent](../ScriptAPI/minecraft/server/EntityNavigationClimbComponent.md)
  - [EntityNavigationComponent](../ScriptAPI/minecraft/server/EntityNavigationComponent.md)
  - [EntityNavigationFloatComponent](../ScriptAPI/minecraft/server/EntityNavigationFloatComponent.md)
  - [EntityNavigationFlyComponent](../ScriptAPI/minecraft/server/EntityNavigationFlyComponent.md)
  - [EntityNavigationGenericComponent](../ScriptAPI/minecraft/server/EntityNavigationGenericComponent.md)
  - [EntityNavigationHoverComponent](../ScriptAPI/minecraft/server/EntityNavigationHoverComponent.md)
  - [EntityNavigationWalkComponent](../ScriptAPI/minecraft/server/EntityNavigationWalkComponent.md)
- **Structure APIs**
  - Structure
    - [setBlockPermutation](../ScriptAPI/minecraft/server/Structure.md#setblockpermutation)
    - [saveToWorld](../ScriptAPI/minecraft/server/Structure.md#savetoworld)
    - [saveAs](../ScriptAPI/minecraft/server/Structure.md#saveas)
  - StructureManager
    - [createFromWorld](../ScriptAPI/minecraft/server/StructureManager.md#createfromworld)
    - [getWorldStructureIds](../ScriptAPI/minecraft/server/StructureManager.md#getworldstructureids)
- **EntityComponent APIs**
  - EntityComponent
    - [entity](../ScriptAPI/minecraft/server/EntityComponent.md#entity)
- **Item Cooldown APIs**
  - Player
    - [startItemCooldown](../ScriptAPI/minecraft/server/Player.md#startitemcooldown)
    - [getItemCooldown](../ScriptAPI/minecraft/server/Player.md#getitemcooldown)
- **Sound APIs**
  - Dimension
    - [playSound](../ScriptAPI/minecraft/server/Dimension.md#playsound)
- **Selected Slot (Inventory) APIs** 
  - Player
    - [selectedSlotIndex](../ScriptAPI/minecraft/server/Player.md#selectedslotindex)
- **Tameable / Mount APIs**
  - EntityTameMountComponent
    - [tame](../ScriptAPI/minecraft/server/EntityTameMountComponent.md#tame)
  - EntityAddRiderComponent
    - [entityType](../ScriptAPI/minecraft/server/EntityAddRiderComponent.md#entitytype)
    - [spawnEvent](../ScriptAPI/minecraft/server/EntityAddRiderComponent.md#spawnevent)
  - EntityRideableComponent
    - [crouchingSkipInteract](../ScriptAPI/minecraft/server/EntityRideableComponent.md#crouchingskipinteract)
    - [interactText](../ScriptAPI/minecraft/server/EntityRideableComponent.md#interacttext)
    - [controllingSeat](../ScriptAPI/minecraft/server/EntityRideableComponent.md#controllingseat)
    - [passengerMaxWidth](../ScriptAPI/minecraft/server/EntityRideableComponent.md#passengermaxwidth)
    - [pullInEntities](../ScriptAPI/minecraft/server/EntityRideableComponent.md#pullinentities)
    - [riderCanInteract](../ScriptAPI/minecraft/server/EntityRideableComponent.md#ridercaninteract)
    - [seatCount](../ScriptAPI/minecraft/server/EntityRideableComponent.md#seatcount)
    - [addRider](../ScriptAPI/minecraft/server/EntityRideableComponent.md#addrider)
    - [ejectRider](../ScriptAPI/minecraft/server/EntityRideableComponent.md#ejectrider)
    - [ejectRiders](../ScriptAPI/minecraft/server/EntityRideableComponent.md#ejectriders)
    - [getFamilyTypes](../ScriptAPI/minecraft/server/EntityRideableComponent.md#getfamilytypes)
    - [getRiders](../ScriptAPI/minecraft/server/EntityRideableComponent.md#getriders)
    - [getSeats](../ScriptAPI/minecraft/server/EntityRideableComponent.md#getseats)
  - Seat
    - [lockRiderRotation](../ScriptAPI/minecraft/server/Seat.md#lockriderrotation)
    - [maxRiderCount](../ScriptAPI/minecraft/server/Seat.md#maxridercount)
    - [minRiderCount](../ScriptAPI/minecraft/server/Seat.md#minridercount)
    - [position](../ScriptAPI/minecraft/server/Seat.md#position)
    - [seatRotation](../ScriptAPI/minecraft/server/Seat.md#seatrotation)    
    
Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.12.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

## What's Next

Looking ahead, here's what you can expect coming in future releases.
 
**Script API**

- Player Interact Events
- [Custom Components](../Documents/CustomComponents.md) - allows extending Blocks and Items with the power of scripting. This is currently in experimental and we expect this to be stable in a couple of releases.

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/en-us/sections/360001185332).
