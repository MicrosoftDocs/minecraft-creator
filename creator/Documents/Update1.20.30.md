---
author: kakinnun
ms.author: kakinnun
title: 1.20.30 Update Notes
description: Update summary of Creator changes in Bedrock 1.20.30
ms.service: minecraft-bedrock-edition
ms.date: 09/19/2023
---
# Minecraft Bedrock 1.20.30 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20.30 and there are a number of changes of note for creators. This release includes features that were planned for 1.20.20. The following features do not require experimental toggles.

## Commands

The [/camera command](../Documents/CameraCommandIntroduction.md) gives creators control over custom camera. This release focuses on the ```minecraft:free``` camera preset. Learn how to use this preset here: [Camera Command Tutorial - Free Camera Preset](../Documents/CameraSystem/CameraPresetFree.md)

Additional presets and more camera capabilities are planned for the future.

The [/scriptevent command](../Commands/commands/scriptevent.md) provides a bridge between script and command logic.

The [/recipe command](../Commands/commands/recipe.md) allows for locking and unlocking of individual Vanilla recipes. The ```recipesunlock``` game rule was added to limit crafting to unlocked recipes. It can be set through the [/gamerule command](../Commands/commands/gamerule.md).

## Blocks

**Block Traits**

[Block Traits](../Reference/Content/BlockReference/Examples/BlockTraits.md) are intended as a shortcut for creators to add Vanilla BlockStates and setter functions to data-driven blocks.

For example:

- By using the ```minecraft:placement_direction``` trait to set the ```minecraft:cardinal_direction``` state, you can create a custom furnace block that will orient so the front is facing the player.

- By using the ```minecraft:placement_position``` trait to set the ```minecraft:block_face``` (the face the block was placed on) and ```minecraft:vertical_half``` (if a block was placed on the top or bottom) states, you can easily create blocks that behave like slabs or trapdoors.

## World Gen

**Random Seed** 
Marketplace maps can now specify map templates to allow for random world seeds. 

See: [Create A World Template](../Documents/CreateAWorldTemplate.md).

**Custom Feature Placement**
Several feature placement rules have released to give creators more world-gen capability. This allows creators to attach their custom features to a biome, and to define the rules by which those features are placed. 

See: [Introduction to Features](../Reference/Content/FeaturesReference/Examples/FeaturesIntroduction.md).

- [aggregate_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftAggregate_feature.md) 
- [cave_carver_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftCave_carver_feature.md) 
- [fossil_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftFossil_feature.md) 
- [geode_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftGeode_feature.md) 
- [growing_plant_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftGrowing_plant_feature.md) 
- [multiface_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftMultiface_feature.md)
- [nether_cave_carver_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftNether_cave_carver_feature.md)
- [ore_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftOre_feature.md)
- [partially_exposed_blob_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftPartially_Exposed_blob_feature.md) 
- [scatter_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftScatter_feature.md)
- [search_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftSearch_feature.md)  
- [sequence_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftSequence_feature.md) 
- [single_block_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftSingle_block_feature.md)  
- [snap_to_surface_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftSnap_to_surface_feature.md) 
- [structure_template_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftStructure_template_feature.md)  
- [surface_relative_threshold_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftSurface_Relative_threshold_feature.md) 
- [tree_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftTree_feature.md) 
- [underwater_cave_carver_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftUnderwater_cave_carver_feature.md)  
- [vegetation_patch_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftVegetation_patch_feature.md) 
- [weighted_random_feature](../Reference/Content/FeaturesReference/Examples/Features/minecraftWeighted_random_feature.md) 


## Holiday Creator Features

Several Item Components have released and are now available without using the Holiday Creator Features experiment toggle.

- [wearable](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_wearable.md)
- [digger](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_digger.md)
- [food](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_food.md)
- [damage](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_damage.md)
- [use_animation](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_use_animation.md)
- [use_modifiers](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_use_modifiers.md)
- [allow_off_hand](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_allow_off_hand.md)
- [should_despawn](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_should_despawn.md)
- [liquid_clipped](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_liquid_clipped.md)
- [hand_equipped](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_hand_equipped.md)
- [glint](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_glint.md) (previously known as foil)
- [stacked_by_data](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_stacked_by_data.md)
- [enchantable](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_enchantable.md)

## Creator API

Another set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.5.0 release:**

- **Projectile Hit Events**
  - [ProjectileHitBlockAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ProjectileHitBlockAfterEvent.md)
  - [ProjectileHitBlockAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ProjectileHitBlockAfterEventSignal.md)
  - [ProjectileHitEntityAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ProjectileHitEntityAfterEvent.md)
  - [ProjectileHitEntityAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ProjectileHitEntityAfterEventSignal.md)
  - [BlockHitInformation](../PriorScriptAPI/minecraft/server-1xx/BlockHitInformation.md)
  - [EntityHitInformation](../PriorScriptAPI/minecraft/server-1xx/EntityHitInformation.md)
- **Spawn Particles APIs**
  - Dimension
    - [spawnParticle](../PriorScriptAPI/minecraft/server-1xx/Dimension.md#spawnparticle)
  - MolangVariableMap
    - [setColorRBG](../PriorScriptAPI/minecraft/server-1xx/MolangVariableMap.md#setcolorrgb)
    - [setColorRBGA](../PriorScriptAPI/minecraft/server-1xx/MolangVariableMap.md#setcolorrgba)
    - [setSpeedAndDirection](../PriorScriptAPI/minecraft/server-1xx/MolangVariableMap.md#setspeedanddirection)
    - [setVector3](../PriorScriptAPI/minecraft/server-1xx/MolangVariableMap.md#setvector3)
    - [setFloat](../PriorScriptAPI/minecraft/server-1xx/MolangVariableMap.md#setfloat)
  - [RGBA](../PriorScriptAPI/minecraft/server-1xx/RGBA.md)
- **Entity Trigger Event API**
  - Entity
    - [triggerEvent](../PriorScriptAPI/minecraft/server-1xx/Entity.md#triggerevent)
- **Player Equipment API**
  - EquipmentSlot
    - [Mainhand](../PriorScriptAPI/minecraft/server-1xx/EquipmentSlot.md#mainhand)
    - [Offhand](../PriorScriptAPI/minecraft/server-1xx/EquipmentSlot.md#offhand)
    - [Head](../PriorScriptAPI/minecraft/server-1xx/EquipmentSlot.md#head)
    - [Chest](../PriorScriptAPI/minecraft/server-1xx/EquipmentSlot.md#chest)
    - [Legs](../PriorScriptAPI/minecraft/server-1xx/EquipmentSlot.md#legs)
    - [Feet](../PriorScriptAPI/minecraft/server-1xx/EquipmentSlot.md#feet)
  - EntityEquipmentEquippableComponent
    - [setEquipment](../PriorScriptAPI/minecraft/server-1xx/EntityEquippableComponent.md#setequipment)
    - [getEquipment](../PriorScriptAPI/minecraft/server-1xx/EntityEquippableComponent.md#getequipment)


**APIs included in the @minecraft/server version 1.4.0 release:**

- **Scoreboard Management Create/Read/Update/Delete**
  - [Scoreboard](../PriorScriptAPI/minecraft/server-1xx/Scoreboard.md)
  - [ScoreboardObjective](../PriorScriptAPI/minecraft/server-1xx/ScoreboardObjective.md)
  - [ScoreboardObjectiveDisplayOptions](../PriorScriptAPI/minecraft/server-1xx/ScoreboardObjectiveDisplayOptions.md)
  - [ScoreboardScoreInfo](../PriorScriptAPI/minecraft/server-1xx/ScoreboardScoreInfo.md)
  - World
    - [scoreboard](../PriorScriptAPI/minecraft/server-1xx/World.md#scoreboard)
  - Entity
    - [scoreboardIdentity](../PriorScriptAPI/minecraft/server-1xx/Entity.md#scoreboardidentity)
- **Reading/updating scores for specific ScoreboardIdentitys**
  - [ScoreboardIdentity](../PriorScriptAPI/minecraft/server-1xx/ScoreboardIdentity.md)
  - [ScoreboardIdentityType](../PriorScriptAPI/minecraft/server-1xx/ScoreboardIdentityType.md)
- **Time APIs**
  - World
    - [getTimeOfDay](../PriorScriptAPI/minecraft/server-1xx/World.md#gettimeofday)
    - [setTimeOfDay](../PriorScriptAPI/minecraft/server-1xx/World.md#settimeofday)
    - [getDay](../PriorScriptAPI/minecraft/server-1xx/World.md#getday)
    - [getAbsoluteTime](../PriorScriptAPI/minecraft/server-1xx/World.md#getabsolutetime)
    - [setAbsoluteTime](../PriorScriptAPI/minecraft/server-1xx/World.md#setabsolutetime)
  - [TimeOfDay](../PriorScriptAPI/minecraft/server-1xx/TimeOfDay.md)
 - **Entity Damage Events**
  - [EntityHitBlockAfterEvent](../PriorScriptAPI/minecraft/server-1xx/EntityHitBlockAfterEvent.md)
  - [EntityHitBlockAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/EntityHitBlockAfterEventSignal.md)
  - [EntityHitEntityAfterEvent](../PriorScriptAPI/minecraft/server-1xx/EntityHitEntityAfterEvent.md)
  - [EntityHitEntityAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/EntityHitEntityAfterEventSignal.md)
  - [EntityHurtAfterEvent](../PriorScriptAPI/minecraft/server-1xx/EntityHurtAfterEvent.md)
  - [EntityHurtAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/EntityHurtAfterEventSignal.md)
  - [EntityDieAfterEvent](../PriorScriptAPI/minecraft/server-1xx/EntityDieAfterEvent.md)
  - [EntityDieAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/EntityDieAfterEventSignal.md)
  - WorldAfterEvents
    - [entityHitBlock](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#entityhitblock)
    - [entityHitEntity](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#entityhitentity)
    - [entityHurt](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#entityhurt)
    - [entityDie](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#entitydie)
- **Lore**
  - ItemStack
    - [getLore](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#getlore)
    - [setLore](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#setlore)
- **Item Use Events**
  - [ItemUseBeforeEvent](../PriorScriptAPI/minecraft/server-1xx/ItemUseBeforeEvent.md) - Fires before an item is used
  - [ItemUseBeforeEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemUseBeforeEventSignal.md)
  - [ItemUseOnBeforeEvent](../PriorScriptAPI/minecraft/server-1xx/ItemUseOnBeforeEvent.md) - Fires before an item is used on a block
  - [ItemUseOnBeforeEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemUseOnBeforeEventSignal.md)
  - [ItemUseAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ItemUseAfterEvent.md) - Fires after an item is used
  - [ItemUseAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemUseAfterEventSignal.md)
  - [ItemUseOnAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ItemUseOnAfterEvent.md) - Fires after an item is used on a block
  - [ItemUseOnAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemUseOnAfterEventSignal.md)
  - [ItemStartUseOnAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ItemStartUseOnAfterEvent.md) - Fires when a new block is placed
  - [ItemStartUseOnAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemStartUseOnAfterEventSignal.md)
  - [ItemStopUseOnAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ItemStopUseOnAfterEvent.md) - Fires when the player stops placing blocks
  - [ItemStopUseOnAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemStopUseOnAfterEventSignal.md)
  - [ItemCompleteUseAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ItemCompleteUseAfterEvent.md) - Fires when an item activates (e.g. finished eating, crossbow drawn)
  - [ItemCompleteUseAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemCompleteUseAfterEventSignal.md)
  - [ItemReleaseUseAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ItemReleaseUseAfterEvent.md) - Fires when an item is released (e.g. cancel eating, release bow)
  - [ItemReleaseUseAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemReleaseUseAfterEventSignal.md)
  - [ItemStopUseAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ItemStopUseAfterEvent.md) - Fires when an item stops being used. This always fires after a ItemReleaseUseAfterEvent or ItemCompleteUseAfterEvent.
  - [ItemStopUseAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemStopUseAfterEventSignal.md)
  - [ItemStartUseAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ItemStartUseAfterEvent.md) - Fires when an item starts being used. This always fires first. (e.g. eating, drawing bow)
  - [ItemStartUseAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ItemStartUseAfterEventSignal.md)
  - WorldBeforeEvents
    - [itemUse](../PriorScriptAPI/minecraft/server-1xx/WorldBeforeEvents.md#itemuse)
    - [itemUseOn](../PriorScriptAPI/minecraft/server-1xx/WorldBeforeEvents.md#itemuseon)
  - WorldAfterEvents
    - [itemUse](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#itemuse)
    - [itemUseOn](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#itemuseon)
    - [itemCompleteUse](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#itemcompleteuse)
    - [itemReleaseUse](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#itemreleaseuse)
    - [itemStopUse](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#itemstopuse)
    - [itemStartUse](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#itemstartuse)
- **Script-Command Bridge**
  - [/scriptevent command](../Commands/commands/scriptevent.md)
  - [ScriptEventCommandMessageAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ScriptEventCommandMessageAfterEvent.md)
  - [ScriptEventCommandMessageAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ScriptEventCommandMessageAfterEventSignal.md)
  - [ScriptEventSource](../PriorScriptAPI/minecraft/server-1xx/ScriptEventSource.md)
  - SystemAfterEvents
    - [scriptEventReceive](../PriorScriptAPI/minecraft/server-1xx/SystemAfterEvents.md#scripteventreceive)
- **Spawn Point APIs**
  - World
    - [setDefaultSpawnLocation](../PriorScriptAPI/minecraft/server-1xx/World.md#setdefaultspawnlocation)
    - [getDefaultSpawnLocation](../PriorScriptAPI/minecraft/server-1xx/World.md#getdefaultspawnlocation)
  - Player
    - [setSpawnPoint](../PriorScriptAPI/minecraft/server-1xx/Player.md#setspawnpoint)
    - [getSpawnPoint](../PriorScriptAPI/minecraft/server-1xx/Player.md#getspawnpoint)
- **Entity health changed event**
  - [EntityHealthChangedAfterEvent](../PriorScriptAPI/minecraft/server-1xx/EntityHealthChangedAfterEvent.md)
  - [EntityHealthChangedAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/EntityHealthChangedAfterEventSignal.md)
  - WorldAfterEvents
    - [entityHealthChanged](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#entityhealthchanged)
- **Raycasting APIs - Get Entities / Get Block**
  - Dimension
    - [getEntitiesFromRay](../PriorScriptAPI/minecraft/server-1xx/Dimension.md#getentitiesfromray)
    - [getBlockFromRay](../PriorScriptAPI/minecraft/server-1xx/Dimension.md#getblockfromray)
  - Entity
    - [getEntitiesFromViewDirection](../PriorScriptAPI/minecraft/server-1xx/Entity.md#getentitiesfromviewdirection)
    - [getBlockFromViewDirection](../PriorScriptAPI/minecraft/server-1xx/Entity.md#getblockfromviewdirection)
  - [EntityRaycastHit](../PriorScriptAPI/minecraft/server-1xx/EntityRaycastHit.md)
  - [EntityRaycastOptions](../PriorScriptAPI/minecraft/server-1xx/EntityRaycastOptions.md)
  - [BlockRaycastHit](../PriorScriptAPI/minecraft/server-1xx/BlockRaycastHit.md)
  - [BlockRaycastOptions](../PriorScriptAPI/minecraft/server-1xx/BlockRaycastOptions.md)
- **Screen Display API**
  - [ScreenDisplay](../PriorScriptAPI/minecraft/server-1xx/ScreenDisplay.md)
  - [TitleDisplayOptions](../PriorScriptAPI/minecraft/server-1xx/TitleDisplayOptions.md)
  - Player
    - [onScreenDisplay](../PriorScriptAPI/minecraft/server-1xx/Player.md#onscreendisplay)
- **More Block Events**
  - [PressurePlatePushAfterEvent](../PriorScriptAPI/minecraft/server-1xx/PressurePlatePushAfterEvent.md)
  - [PressurePlatePushAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/PressurePlatePushAfterEventSignal.md)
  - [PressurePlatePopAfterEvent](../PriorScriptAPI/minecraft/server-1xx/PressurePlatePopAfterEvent.md)
  - [PressurePlatePopAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/PressurePlatePopAfterEventSignal.md)
  - [TripWireTripAfterEvent](../PriorScriptAPI/minecraft/server-1xx/TripWireTripAfterEvent.md)
  - [TripWireTripAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/TripWireTripAfterEventSignal.md)
  - [TargetBlockHitAfterEvent](../PriorScriptAPI/minecraft/server-1xx/TargetBlockHitAfterEvent.md)
  - [TargetBlockHitAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/TargetBlockHitAfterEventSignal.md)
- **Object isValid() methods, added to the following classes:**
  - Block
  - Container
  - Effect
  - ScreenDisplay
  - ScoreboardObjective
  - Entity
    - Player
    - SimulatedPlayer
  - ContainerSlot (class still in beta)
  - Component
    - EntityAttributeComponent
    - BlockLiquidContainerComponent (class still in beta)
    - ECSScriptActorComponent (class still in beta)
    - EntityComponent
    - ItemComponent
  
Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.6.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

## What's Next

Looking ahead, here's what you can expect coming in future releases.

**Camel and Sniffer Components**

When the Camel and Sniffer were introduced in 1.20 they utilized a few components that weren't available to creators. These components will be released for creators to use in an upcoming release.

**Camera**

Camera scripting APIs are currently experimental but will be moving to stable in an upcoming release.

**Creator API**

Additional scripting APIs are planned to move to stable in an upcoming release:
- Camera
- Moon Phase
- Entity is* Properties
- Entity Rotation
- ItemStack
- More Block Events
- Set Weather
- Entity Lifetime Events
- Block isAir/isLiquid
- Entity Properties
- Player Experience/Level
- Player Dimension Changed Events

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/sections/360001185332).
