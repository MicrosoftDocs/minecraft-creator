---
author: kakinnun
ms.author: kakinnun
title: 1.20.30 Update Notes
description: Update summary of Creator changes in Bedrock 1.20.30
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.20.30 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20.30 and there are a number of changes of note for add-on creators. This release includes features that were planned for 1.20.20. The following features do not require experimental toggles.

## Commands

The [/camera command](../Documents/CameraCommandIntroduction.md) gives creators control over custom camera. This release focuses on the ```minecraft:free``` camera preset. Learn how to use this preset here: [Camera Command Tutorial - Free Camera Preset](../Documents/CameraTutorialFreeCameraPreset.md)

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
  - [ProjectileHitBlockAfterEvent](../ScriptAPI/minecraft/server/ProjectileHitBlockAfterEvent.md)
  - [ProjectileHitBlockAfterEventSignal](../ScriptAPI/minecraft/server/ProjectileHitBlockAfterEventSignal.md)
  - [ProjectileHitEntityAfterEvent](../ScriptAPI/minecraft/server/ProjectileHitEntityAfterEvent.md)
  - [ProjectileHitEntityAfterEventSignal](../ScriptAPI/minecraft/server/ProjectileHitEntityAfterEventSignal.md)
  - [BlockHitInformation](../ScriptAPI/minecraft/server/BlockHitInformation.md)
  - [EntityHitInformation](../ScriptAPI/minecraft/server/EntityHitInformation.md)
- **Spawn Particles APIs**
  - Dimension
    - [spawnParticle](../ScriptAPI/minecraft/server/Dimension.md#spawnparticle)
  - MolangVariableMap
    - [setColorRBG](../ScriptAPI/minecraft/server/MolangVariableMap.md#setcolorrgb)
    - [setColorRBGA](../ScriptAPI/minecraft/server/MolangVariableMap.md#setcolorrgba)
    - [setSpeedAndDirection](../ScriptAPI/minecraft/server/MolangVariableMap.md#setspeedanddirection)
    - [setVector3](../ScriptAPI/minecraft/server/MolangVariableMap.md#setvector3)
    - [setFloat](../ScriptAPI/minecraft/server/MolangVariableMap.md#setfloat)
  - [RGBA](../ScriptAPI/minecraft/server/RGBA.md)
- **Entity Trigger Event API**
  - Entity
    - [triggerEvent](../ScriptAPI/minecraft/server/Entity.md#triggerevent)
- **Player Equipment API**
  - EquipmentSlot
    - [Mainhand](../ScriptAPI/minecraft/server/EquipmentSlot.md#mainhand)
    - [Offhand](../ScriptAPI/minecraft/server/EquipmentSlot.md#offhand)
    - [Head](../ScriptAPI/minecraft/server/EquipmentSlot.md#head)
    - [Chest](../ScriptAPI/minecraft/server/EquipmentSlot.md#chest)
    - [Legs](../ScriptAPI/minecraft/server/EquipmentSlot.md#legs)
    - [Feet](../ScriptAPI/minecraft/server/EquipmentSlot.md#feet)
  - EntityEquipmentEquippableComponent
    - [setEquipment](../ScriptAPI/minecraft/server/EntityEquippableComponent.md#setequipment)
    - [getEquipment](../ScriptAPI/minecraft/server/EntityEquippableComponent.md#getequipment)


**APIs included in the @minecraft/server version 1.4.0 release:**

- **Scoreboard Management Create/Read/Update/Delete**
  - [Scoreboard](../ScriptAPI/minecraft/server/Scoreboard.md)
  - [ScoreboardObjective](../ScriptAPI/minecraft/server/ScoreboardObjective.md)
  - [ScoreboardObjectiveDisplayOptions](../ScriptAPI/minecraft/server/ScoreboardObjectiveDisplayOptions.md)
  - [ScoreboardScoreInfo](../ScriptAPI/minecraft/server/ScoreboardScoreInfo.md)
  - World
    - [scoreboard](../ScriptAPI/minecraft/server/World.md#scoreboard)
  - Entity
    - [scoreboardIdentity](../ScriptAPI/minecraft/server/Entity.md#scoreboardidentity)
- **Reading/updating scores for specific ScoreboardIdentitys**
  - [ScoreboardIdentity](../ScriptAPI/minecraft/server/ScoreboardIdentity.md)
  - [ScoreboardIdentityType](../ScriptAPI/minecraft/server/ScoreboardIdentityType.md)
- **Time APIs**
  - World
    - [getTimeOfDay](../ScriptAPI/minecraft/server/World.md#gettimeofday)
    - [setTimeOfDay](../ScriptAPI/minecraft/server/World.md#settimeofday)
    - [getDay](../ScriptAPI/minecraft/server/World.md#getday)
    - [getAbsoluteTime](../ScriptAPI/minecraft/server/World.md#getabsolutetime)
    - [setAbsoluteTime](../ScriptAPI/minecraft/server/World.md#setabsolutetime)
  - [TimeOfDay](../ScriptAPI/minecraft/server/TimeOfDay.md)
 - **Entity Damage Events**
  - [EntityHitBlockAfterEvent](../ScriptAPI/minecraft/server/EntityHitBlockAfterEvent.md)
  - [EntityHitBlockAfterEventSignal](../ScriptAPI/minecraft/server/EntityHitBlockAfterEventSignal.md)
  - [EntityHitEntityAfterEvent](../ScriptAPI/minecraft/server/EntityHitEntityAfterEvent.md)
  - [EntityHitEntityAfterEventSignal](../ScriptAPI/minecraft/server/EntityHitEntityAfterEventSignal.md)
  - [EntityHurtAfterEvent](../ScriptAPI/minecraft/server/EntityHurtAfterEvent.md)
  - [EntityHurtAfterEventSignal](../ScriptAPI/minecraft/server/EntityHurtAfterEventSignal.md)
  - [EntityDieAfterEvent](../ScriptAPI/minecraft/server/EntityDieAfterEvent.md)
  - [EntityDieAfterEventSignal](../ScriptAPI/minecraft/server/EntityDieAfterEventSignal.md)
  - WorldAfterEvents
    - [entityHitBlock](../ScriptAPI/minecraft/server/WorldAfterEvents.md#entityhitblock)
    - [entityHitEntity](../ScriptAPI/minecraft/server/WorldAfterEvents.md#entityhitentity)
    - [entityHurt](../ScriptAPI/minecraft/server/WorldAfterEvents.md#entityhurt)
    - [entityDie](../ScriptAPI/minecraft/server/WorldAfterEvents.md#entitydie)
- **Lore**
  - ItemStack
    - [getLore](../ScriptAPI/minecraft/server/ItemStack.md#getlore)
    - [setLore](../ScriptAPI/minecraft/server/ItemStack.md#setlore)
- **Item Use Events**
  - [ItemUseBeforeEvent](../ScriptAPI/minecraft/server/ItemUseBeforeEvent.md) - Fires before an item is used
  - [ItemUseBeforeEventSignal](../ScriptAPI/minecraft/server/ItemUseBeforeEventSignal.md)
  - [ItemUseOnBeforeEvent](../ScriptAPI/minecraft/server/ItemUseOnBeforeEvent.md) - Fires before an item is used on a block
  - [ItemUseOnBeforeEventSignal](../ScriptAPI/minecraft/server/ItemUseOnBeforeEventSignal.md)
  - [ItemUseAfterEvent](../ScriptAPI/minecraft/server/ItemUseAfterEvent.md) - Fires after an item is used
  - [ItemUseAfterEventSignal](../ScriptAPI/minecraft/server/ItemUseAfterEventSignal.md)
  - [ItemUseOnAfterEvent](../ScriptAPI/minecraft/server/ItemUseOnAfterEvent.md) - Fires after an item is used on a block
  - [ItemUseOnAfterEventSignal](../ScriptAPI/minecraft/server/ItemUseOnAfterEventSignal.md)
  - [ItemStartUseOnAfterEvent](../ScriptAPI/minecraft/server/ItemStartUseOnAfterEvent.md) - Fires when a new block is placed
  - [ItemStartUseOnAfterEventSignal](../ScriptAPI/minecraft/server/ItemStartUseOnAfterEventSignal.md)
  - [ItemStopUseOnAfterEvent](../ScriptAPI/minecraft/server/ItemStopUseOnAfterEvent.md) - Fires when the player stops placing blocks
  - [ItemStopUseOnAfterEventSignal](../ScriptAPI/minecraft/server/ItemStopUseOnAfterEventSignal.md)
  - [ItemCompleteUseAfterEvent](../ScriptAPI/minecraft/server/ItemCompleteUseAfterEvent.md) - Fires when an item activates (e.g. finished eating, crossbow drawn)
  - [ItemCompleteUseAfterEventSignal](../ScriptAPI/minecraft/server/ItemCompleteUseAfterEventSignal.md)
  - [ItemReleaseUseAfterEvent](../ScriptAPI/minecraft/server/ItemReleaseUseAfterEvent.md) - Fires when an item is released (e.g. cancel eating, release bow)
  - [ItemReleaseUseAfterEventSignal](../ScriptAPI/minecraft/server/ItemReleaseUseAfterEventSignal.md)
  - [ItemStopUseAfterEvent](../ScriptAPI/minecraft/server/ItemStopUseAfterEvent.md) - Fires when an item stops being used. This always fires after a ItemReleaseUseAfterEvent or ItemCompleteUseAfterEvent.
  - [ItemStopUseAfterEventSignal](../ScriptAPI/minecraft/server/ItemStopUseAfterEventSignal.md)
  - [ItemStartUseAfterEvent](../ScriptAPI/minecraft/server/ItemStartUseAfterEvent.md) - Fires when an item starts being used. This always fires first. (e.g. eating, drawing bow)
  - [ItemStartUseAfterEventSignal](../ScriptAPI/minecraft/server/ItemStartUseAfterEventSignal.md)
  - WorldBeforeEvents
    - [itemUse](../ScriptAPI/minecraft/server/WorldBeforeEvents.md#itemuse)
    - [itemUseOn](../ScriptAPI/minecraft/server/WorldBeforeEvents.md#itemuseon)
  - WorldAfterEvents
    - [itemUse](../ScriptAPI/minecraft/server/WorldAfterEvents.md#itemuse)
    - [itemUseOn](../ScriptAPI/minecraft/server/WorldAfterEvents.md#itemuseon)
    - [itemCompleteUse](../ScriptAPI/minecraft/server/WorldAfterEvents.md#itemcompleteuse)
    - [itemReleaseUse](../ScriptAPI/minecraft/server/WorldAfterEvents.md#itemreleaseuse)
    - [itemStopUse](../ScriptAPI/minecraft/server/WorldAfterEvents.md#itemstopuse)
    - [itemStartUse](../ScriptAPI/minecraft/server/WorldAfterEvents.md#itemstartuse)
- **Script-Command Bridge**
  - [/scriptevent command](../Commands/commands/scriptevent.md)
  - [ScriptEventCommandMessageAfterEvent](../ScriptAPI/minecraft/server/ScriptEventCommandMessageAfterEvent.md)
  - [ScriptEventCommandMessageAfterEventSignal](../ScriptAPI/minecraft/server/ScriptEventCommandMessageAfterEventSignal.md)
  - [ScriptEventSource](../ScriptAPI/minecraft/server/ScriptEventSource.md)
  - SystemAfterEvents
    - [scriptEventReceive](../ScriptAPI/minecraft/server/SystemAfterEvents.md#scripteventreceive)
- **Spawn Point APIs**
  - World
    - [setDefaultSpawnLocation](../ScriptAPI/minecraft/server/World.md#setdefaultspawnlocation)
    - [getDefaultSpawnLocation](../ScriptAPI/minecraft/server/World.md#getdefaultspawnlocation)
  - Player
    - [setSpawnPoint](../ScriptAPI/minecraft/server/Player.md#setspawnpoint)
    - [getSpawnPoint](../ScriptAPI/minecraft/server/Player.md#getspawnpoint)
- **Entity health changed event**
  - [EntityHealthChangedAfterEvent](../ScriptAPI/minecraft/server/EntityHealthChangedAfterEvent.md)
  - [EntityHealthChangedAfterEventSignal](../ScriptAPI/minecraft/server/EntityHealthChangedAfterEventSignal.md)
  - WorldAfterEvents
    - [entityHealthChanged](../ScriptAPI/minecraft/server/WorldAfterEvents.md#entityhealthchanged)
- **Raycasting APIs - Get Entities / Get Block**
  - Dimension
    - [getEntitiesFromRay](../ScriptAPI/minecraft/server/Dimension.md#getentitiesfromray)
    - [getBlockFromRay](../ScriptAPI/minecraft/server/Dimension.md#getblockfromray)
  - Entity
    - [getEntitiesFromViewDirection](../ScriptAPI/minecraft/server/Entity.md#getentitiesfromviewdirection)
    - [getBlockFromViewDirection](../ScriptAPI/minecraft/server/Entity.md#getblockfromviewdirection)
  - [EntityRaycastHit](../ScriptAPI/minecraft/server/EntityRaycastHit.md)
  - [EntityRaycastOptions](../ScriptAPI/minecraft/server/EntityRaycastOptions.md)
  - [BlockRaycastHit](../ScriptAPI/minecraft/server/BlockRaycastHit.md)
  - [BlockRaycastOptions](../ScriptAPI/minecraft/server/BlockRaycastOptions.md)
- **Screen Display API**
  - [ScreenDisplay](../ScriptAPI/minecraft/server/ScreenDisplay.md)
  - [TitleDisplayOptions](../ScriptAPI/minecraft/server/TitleDisplayOptions.md)
  - Player
    - [onScreenDisplay](../ScriptAPI/minecraft/server/Player.md#onscreendisplay)
- **More Block Events**
  - [PressurePlatePushAfterEvent](../ScriptAPI/minecraft/server/PressurePlatePushAfterEvent.md)
  - [PressurePlatePushAfterEventSignal](../ScriptAPI/minecraft/server/PressurePlatePushAfterEventSignal.md)
  - [PressurePlatePopAfterEvent](../ScriptAPI/minecraft/server/PressurePlatePopAfterEvent.md)
  - [PressurePlatePopAfterEventSignal](../ScriptAPI/minecraft/server/PressurePlatePopAfterEventSignal.md)
  - [TripWireTripAfterEvent](../ScriptAPI/minecraft/server/TripWireTripAfterEvent.md)
  - [TripWireTripAfterEventSignal](../ScriptAPI/minecraft/server/TripWireTripAfterEventSignal.md)
  - [TargetBlockHitAfterEvent](../ScriptAPI/minecraft/server/TargetBlockHitAfterEvent.md)
  - [TargetBlockHitAfterEventSignal](../ScriptAPI/minecraft/server/TargetBlockHitAfterEventSignal.md)
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

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/en-us/sections/360001185332).