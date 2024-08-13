---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server Changelog
description: Changelog of the `@minecraft/server` module
---
# `@minecraft/server` Changelog

## Version Changes
- [1.15.0-beta](#1150-beta)
- [1.13.0](#1130)
- [1.12.0](#1120)
- [1.11.0](#1110)
- [1.10.0](#1100)
- [1.9.0](#190)
- [1.8.0](#180)
- [1.7.0](#170)
- [1.6.0](#160)
- [1.5.0](#150)
- [1.4.0](#140)
- [1.3.0](#130)
- [1.2.0](#120)
- [1.1.0](#110)
- [1.0.0](#100)

## 1.15.0-beta
#### Added *[`BiomeType`](BiomeType.md)*
#### Added *[`BiomeTypes`](BiomeTypes.md)*
#### Changed *[`Block`](Block.md)*
- Added property *[`isSolid`](Block.md#issolid)*
- Added property *[`isWaterlogged`](Block.md#iswaterlogged)*
- Added function *[`canPlace`](Block.md#canplace)*
- Changed function *[`getComponent`](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to *BlockComponentTypeMap[T] | undefined* (throws exceptions)
  - Changed argument `componentId` type from *string* to *T*
- Added function *[`getMapColor`](Block.md#getmapcolor)*
- Added function *[`getRedstonePower`](Block.md#getredstonepower)*
- Added function *[`setWaterlogged`](Block.md#setwaterlogged)*
- Added function *[`trySetPermutation`](Block.md#trysetpermutation)*
#### Added *[`BlockLavaContainerComponent`](BlockLavaContainerComponent.md)*
#### Added *[`BlockLiquidContainerComponent`](BlockLiquidContainerComponent.md)*
#### Added *[`BlockLocationIterator`](BlockLocationIterator.md)*
#### Added *[`BlockPotionContainerComponent`](BlockPotionContainerComponent.md)*
#### Added *[`BlockRecordPlayerComponent`](BlockRecordPlayerComponent.md)*
#### Added *[`BlockSnowContainerComponent`](BlockSnowContainerComponent.md)*
#### Changed *[`BlockType`](BlockType.md)*
- Added property *[`canBeWaterlogged`](BlockType.md#canbewaterlogged)*
#### Added *[`BlockVolume`](BlockVolume.md)*
#### Changed *[`BlockVolumeBase`](BlockVolumeBase.md)*
- Added function *[`getBlockLocationIterator`](BlockVolumeBase.md#getblocklocationiterator)*
- Added function *[`getBoundingBox`](BlockVolumeBase.md#getboundingbox)*
#### Added *[`BlockWaterContainerComponent`](BlockWaterContainerComponent.md)*
#### Added *[`BoundingBoxUtils`](BoundingBoxUtils.md)*
#### Changed *[`Camera`](Camera.md)*
- Changed function *[`setCamera`](Camera.md#setcamera)*
  - Changed argument `setOptions` type from [*CameraDefaultOptions*](CameraDefaultOptions.md) | [*CameraSetFacingOptions*](CameraSetFacingOptions.md) | [*CameraSetLocationOptions*](CameraSetLocationOptions.md) | [*CameraSetPosOptions*](CameraSetPosOptions.md) | [*CameraSetRotOptions*](CameraSetRotOptions.md) to [*CameraDefaultOptions*](CameraDefaultOptions.md) | [*CameraFixedBoomOptions*](CameraFixedBoomOptions.md) | [*CameraSetFacingOptions*](CameraSetFacingOptions.md) | [*CameraSetLocationOptions*](CameraSetLocationOptions.md) | [*CameraSetPosOptions*](CameraSetPosOptions.md) | [*CameraSetRotOptions*](CameraSetRotOptions.md)
#### Added *[`ChatSendAfterEvent`](ChatSendAfterEvent.md)*
#### Added *[`ChatSendAfterEventSignal`](ChatSendAfterEventSignal.md)*
#### Added *[`ChatSendBeforeEvent`](ChatSendBeforeEvent.md)*
#### Added *[`ChatSendBeforeEventSignal`](ChatSendBeforeEventSignal.md)*
#### Added *[`CompoundBlockVolume`](CompoundBlockVolume.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`containsBlock`](Dimension.md#containsblock)*
- Added function *[`fillBlocks`](Dimension.md#fillblocks)*
- Added function *[`findClosestBiome`](Dimension.md#findclosestbiome)*
- Added function *[`getBlockAbove`](Dimension.md#getblockabove)*
- Added function *[`getBlockBelow`](Dimension.md#getblockbelow)*
- Added function *[`getBlocks`](Dimension.md#getblocks)*
- Added function *[`getWeather`](Dimension.md#getweather)*
- Changed function *[`spawnEntity`](Dimension.md#spawnentity)*
  - Added argument `options`
#### Changed *[`Entity`](Entity.md)*
- Added property *[`target`](Entity.md#target)*
- Changed function *[`getComponent`](Entity.md#getcomponent)*
  - Changed return type from [*EntityComponent*](EntityComponent.md) to *EntityComponentTypeMap[T] | undefined*
  - Changed argument `componentId` type from *string* to *T*
#### Added *[`EntityBreathableComponent`](EntityBreathableComponent.md)*
#### Added *[`EntityIterator`](EntityIterator.md)*
#### Added *[`EntityNpcComponent`](EntityNpcComponent.md)*
#### Added *[`EntityTypeIterator`](EntityTypeIterator.md)*
#### Added *[`FilterGroup`](FilterGroup.md)*
#### Added *[`FluidContainer`](FluidContainer.md)*
#### Added *[`ItemPotionComponent`](ItemPotionComponent.md)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Added function *[`createPotion`](ItemStack.md#createpotion)*
- Changed function *[`getComponent`](ItemStack.md#getcomponent)*
  - Changed return type from [*ItemComponent*](ItemComponent.md) to *ItemComponentTypeMap[T] | undefined*
  - Changed argument `componentId` type from *string* to *T*
#### Added *[`MessageReceiveAfterEvent`](MessageReceiveAfterEvent.md)*
#### Changed *[`Player`](Player.md)*
- Added function *[`eatItem`](Player.md#eatitem)*
- Added function *[`isOp`](Player.md#isop)*
- Added function *[`postClientMessage`](Player.md#postclientmessage)*
- Added function *[`setOp`](Player.md#setop)*
- Added function *[`spawnParticle`](Player.md#spawnparticle)*
#### Added *[`PlayerCursorInventoryComponent`](PlayerCursorInventoryComponent.md)*
#### Added *[`PlayerEmoteAfterEvent`](PlayerEmoteAfterEvent.md)*
#### Added *[`PlayerEmoteAfterEventSignal`](PlayerEmoteAfterEventSignal.md)*
#### Changed *[`PlayerInteractWithBlockAfterEvent`](PlayerInteractWithBlockAfterEvent.md)*
- Added property *[`beforeItemStack`](PlayerInteractWithBlockAfterEvent.md#beforeitemstack)*
- Added property *[`isFirstEvent`](PlayerInteractWithBlockAfterEvent.md#isfirstevent)*
#### Changed *[`PlayerInteractWithBlockBeforeEvent`](PlayerInteractWithBlockBeforeEvent.md)*
- Added property *[`isFirstEvent`](PlayerInteractWithBlockBeforeEvent.md#isfirstevent)*
#### Changed *[`PlayerInteractWithEntityAfterEvent`](PlayerInteractWithEntityAfterEvent.md)*
- Added property *[`beforeItemStack`](PlayerInteractWithEntityAfterEvent.md#beforeitemstack)*
#### Added *[`PlayerIterator`](PlayerIterator.md)*
#### Added *[`PlayerPlaceBlockBeforeEvent`](PlayerPlaceBlockBeforeEvent.md)*
#### Added *[`PlayerPlaceBlockBeforeEventSignal`](PlayerPlaceBlockBeforeEventSignal.md)*
#### Added *[`PotionEffectType`](PotionEffectType.md)*
#### Added *[`PotionLiquidType`](PotionLiquidType.md)*
#### Added *[`PotionModifierType`](PotionModifierType.md)*
#### Added *[`Potions`](Potions.md)*
#### Added *[`ServerMessageAfterEventSignal`](ServerMessageAfterEventSignal.md)*
#### Changed *[`System`](System.md)*
- Added property *[`beforeEvents`](System.md#beforeevents)*
#### Added *[`SystemBeforeEvents`](SystemBeforeEvents.md)*
#### Added *[`WatchdogTerminateBeforeEvent`](WatchdogTerminateBeforeEvent.md)*
#### Added *[`WatchdogTerminateBeforeEventSignal`](WatchdogTerminateBeforeEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added property *[`isHardcore`](World.md#ishardcore)*
- Added function *[`broadcastClientMessage`](World.md#broadcastclientmessage)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`chatSend`](WorldAfterEvents.md#chatsend)*
- Added property *[`messageReceive`](WorldAfterEvents.md#messagereceive)*
- Added property *[`playerEmote`](WorldAfterEvents.md#playeremote)*
- Added property *[`playerInteractWithBlock`](WorldAfterEvents.md#playerinteractwithblock)*
- Added property *[`playerInteractWithEntity`](WorldAfterEvents.md#playerinteractwithentity)*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Added property *[`chatSend`](WorldBeforeEvents.md#chatsend)*
- Added property *[`playerInteractWithBlock`](WorldBeforeEvents.md#playerinteractwithblock)*
- Added property *[`playerInteractWithEntity`](WorldBeforeEvents.md#playerinteractwithentity)*
- Added property *[`playerPlaceBlock`](WorldBeforeEvents.md#playerplaceblock)*
#### Changed enum [`BlockComponentTypes`](BlockComponentTypes.md)
- Added value `LavaContainer`
- Added value `PotionContainer`
- Added value `RecordPlayer`
- Added value `SnowContainer`
- Added value `WaterContainer`
#### Added enum [`BlockVolumeIntersection`](BlockVolumeIntersection.md)
#### Added enum [`CompoundBlockVolumeAction`](CompoundBlockVolumeAction.md)
#### Added enum [`CompoundBlockVolumePositionRelativity`](CompoundBlockVolumePositionRelativity.md)
#### Added enum [`Difficulty`](Difficulty.md)
#### Changed enum [`EntityComponentTypes`](EntityComponentTypes.md)
- Added value `Breathable`
- Added value `CursorInventory`
- Added value `Npc`
#### Changed enum [`EquipmentSlot`](EquipmentSlot.md)
- Added value `Body`
#### Changed enum [`ItemComponentTypes`](ItemComponentTypes.md)
- Added value `Potion`
#### Added enum [`WatchdogTerminateReason`](WatchdogTerminateReason.md)
#### Added constant `TicksPerDay`
## 1.13.0
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`getTopmostBlock`](Dimension.md#gettopmostblock)*
#### Added *[`EntityLeashableComponent`](EntityLeashableComponent.md)*
#### Added *[`EntityStrengthComponent`](EntityStrengthComponent.md)*
#### Changed enum [`EntityComponentTypes`](EntityComponentTypes.md)
- Added value `Leashable`
- Added value `Strength`
## 1.12.0
#### Added *[`BlockComponentEntityFallOnEvent`](BlockComponentEntityFallOnEvent.md)*
#### Added *[`BlockComponentOnPlaceEvent`](BlockComponentOnPlaceEvent.md)*
#### Added *[`BlockComponentPlayerDestroyEvent`](BlockComponentPlayerDestroyEvent.md)*
#### Added *[`BlockComponentPlayerInteractEvent`](BlockComponentPlayerInteractEvent.md)*
#### Added *[`BlockComponentPlayerPlaceBeforeEvent`](BlockComponentPlayerPlaceBeforeEvent.md)*
#### Added *[`BlockComponentRandomTickEvent`](BlockComponentRandomTickEvent.md)*
#### Added *[`BlockComponentRegistry`](BlockComponentRegistry.md)*
#### Added *[`BlockComponentStepOffEvent`](BlockComponentStepOffEvent.md)*
#### Added *[`BlockComponentStepOnEvent`](BlockComponentStepOnEvent.md)*
#### Added *[`BlockComponentTickEvent`](BlockComponentTickEvent.md)*
#### Added *[`BlockExplodeAfterEvent`](BlockExplodeAfterEvent.md)*
#### Added *[`BlockExplodeAfterEventSignal`](BlockExplodeAfterEventSignal.md)*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added function *[`getTags`](BlockPermutation.md#gettags)*
- Added function *[`hasTag`](BlockPermutation.md#hastag)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`setBlockPermutation`](Dimension.md#setblockpermutation)*
- Added function *[`setBlockType`](Dimension.md#setblocktype)*
#### Changed *[`EnchantmentTypes`](EnchantmentTypes.md)*
- Added function *[`getAll`](EnchantmentTypes.md#getall)*
#### Added *[`EntityAgeableComponent`](EntityAgeableComponent.md)*
#### Added *[`EntityDefinitionFeedItem`](EntityDefinitionFeedItem.md)*
#### Changed *[`EntityHitBlockAfterEvent`](EntityHitBlockAfterEvent.md)*
- Added property *[`hitBlockPermutation`](EntityHitBlockAfterEvent.md#hitblockpermutation)*
#### Added *[`EntityLavaMovementComponent`](EntityLavaMovementComponent.md)*
#### Added *[`EntityMovementComponent`](EntityMovementComponent.md)*
#### Added *[`EntityMovementGlideComponent`](EntityMovementGlideComponent.md)*
#### Added *[`EntityMovementSwayComponent`](EntityMovementSwayComponent.md)*
#### Added *[`EntityTameableComponent`](EntityTameableComponent.md)*
#### Changed *[`EntityTameMountComponent`](EntityTameMountComponent.md)*
- Added property *[`isTamed`](EntityTameMountComponent.md#istamed)*
- Added property *[`isTamedToPlayer`](EntityTameMountComponent.md#istamedtoplayer)*
- Added property *[`tamedToPlayer`](EntityTameMountComponent.md#tamedtoplayer)*
- Added property *[`tamedToPlayerId`](EntityTameMountComponent.md#tamedtoplayerid)*
- Added function *[`tameToPlayer`](EntityTameMountComponent.md#tametoplayer)*
#### Added *[`EntityUnderwaterMovementComponent`](EntityUnderwaterMovementComponent.md)*
#### Changed *[`GameRules`](GameRules.md)*
- Added property *[`showDaysPlayed`](GameRules.md#showdaysplayed)*
#### Added *[`ItemCompleteUseEvent`](ItemCompleteUseEvent.md)*
#### Added *[`ItemComponentBeforeDurabilityDamageEvent`](ItemComponentBeforeDurabilityDamageEvent.md)*
#### Added *[`ItemComponentCompleteUseEvent`](ItemComponentCompleteUseEvent.md)*
#### Added *[`ItemComponentConsumeEvent`](ItemComponentConsumeEvent.md)*
#### Added *[`ItemComponentHitEntityEvent`](ItemComponentHitEntityEvent.md)*
#### Added *[`ItemComponentMineBlockEvent`](ItemComponentMineBlockEvent.md)*
#### Added *[`ItemComponentRegistry`](ItemComponentRegistry.md)*
#### Added *[`ItemComponentUseEvent`](ItemComponentUseEvent.md)*
#### Added *[`ItemComponentUseOnEvent`](ItemComponentUseOnEvent.md)*
#### Added *[`ItemTypes`](ItemTypes.md)*
#### Added *[`ItemUseOnEvent`](ItemUseOnEvent.md)*
#### Changed *[`Player`](Player.md)*
- Added property *[`inputPermissions`](Player.md#inputpermissions)*
#### Added *[`PlayerInputPermissionCategoryChangeAfterEvent`](PlayerInputPermissionCategoryChangeAfterEvent.md)*
#### Added *[`PlayerInputPermissionCategoryChangeAfterEventSignal`](PlayerInputPermissionCategoryChangeAfterEventSignal.md)*
#### Added *[`PlayerInputPermissions`](PlayerInputPermissions.md)*
#### Changed *[`System`](System.md)*
- Added function *[`clearJob`](System.md#clearjob)*
- Added function *[`runJob`](System.md#runjob)*
- Added function *[`waitTicks`](System.md#waitticks)*
#### Added *[`Trigger`](Trigger.md)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`blockExplode`](WorldAfterEvents.md#blockexplode)*
- Added property *[`playerInputPermissionCategoryChange`](WorldAfterEvents.md#playerinputpermissioncategorychange)*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Added property *[`worldInitialize`](WorldBeforeEvents.md#worldinitialize)*
#### Added *[`WorldInitializeBeforeEvent`](WorldInitializeBeforeEvent.md)*
#### Added *[`WorldInitializeBeforeEventSignal`](WorldInitializeBeforeEventSignal.md)*
#### Added enum [`CustomComponentNameErrorReason`](CustomComponentNameErrorReason.md)
#### Changed enum [`EntityComponentTypes`](EntityComponentTypes.md)
- Added value `Ageable`
- Added value `LavaMovement`
- Added value `Movement`
- Added value `MovementGlide`
- Added value `MovementSway`
- Added value `Tameable`
- Added value `UnderwaterMovement`
#### Changed enum [`GameRule`](GameRule.md)
- Added value `ShowDaysPlayed`
#### Added enum [`InputPermissionCategory`](InputPermissionCategory.md)
## 1.11.0
#### Changed *[`Block`](Block.md)*
- Added property *[`type`](Block.md#type)*
- Added property *[`typeId`](Block.md#typeid)*
- Added function *[`matches`](Block.md#matches)*
- Added function *[`setType`](Block.md#settype)*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added property *[`type`](BlockPermutation.md#type)*
#### Changed *[`BlockType`](BlockType.md)*
- Added property *[`id`](BlockType.md#id)*
#### Added *[`BlockTypes`](BlockTypes.md)*
#### Added *[`BlockVolumeBase`](BlockVolumeBase.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`playSound`](Dimension.md#playsound)*
#### Added *[`EnchantmentType`](EnchantmentType.md)*
#### Added *[`EnchantmentTypes`](EnchantmentTypes.md)*
#### Added *[`EntityAddRiderComponent`](EntityAddRiderComponent.md)*
#### Added *[`EntityColor2Component`](EntityColor2Component.md)*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Added property *[`entity`](EntityComponent.md#entity)*
#### Added *[`EntityNavigationClimbComponent`](EntityNavigationClimbComponent.md)*
#### Added *[`EntityNavigationComponent`](EntityNavigationComponent.md)*
#### Added *[`EntityNavigationFloatComponent`](EntityNavigationFloatComponent.md)*
#### Added *[`EntityNavigationFlyComponent`](EntityNavigationFlyComponent.md)*
#### Added *[`EntityNavigationGenericComponent`](EntityNavigationGenericComponent.md)*
#### Added *[`EntityNavigationHoverComponent`](EntityNavigationHoverComponent.md)*
#### Added *[`EntityNavigationWalkComponent`](EntityNavigationWalkComponent.md)*
#### Added *[`EntityRideableComponent`](EntityRideableComponent.md)*
#### Added *[`EntityRidingComponent`](EntityRidingComponent.md)*
#### Added *[`EntityTameMountComponent`](EntityTameMountComponent.md)*
#### Added *[`GameRuleChangeAfterEvent`](GameRuleChangeAfterEvent.md)*
#### Added *[`GameRuleChangeAfterEventSignal`](GameRuleChangeAfterEventSignal.md)*
#### Added *[`GameRules`](GameRules.md)*
#### Added *[`ItemEnchantableComponent`](ItemEnchantableComponent.md)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Added function *[`matches`](ItemStack.md#matches)*
#### Added *[`ListBlockVolume`](ListBlockVolume.md)*
#### Changed *[`Player`](Player.md)*
- Added property *[`selectedSlotIndex`](Player.md#selectedslotindex)*
- Added function *[`getGameMode`](Player.md#getgamemode)*
- Added function *[`getItemCooldown`](Player.md#getitemcooldown)*
- Added function *[`setGameMode`](Player.md#setgamemode)*
- Added function *[`startItemCooldown`](Player.md#startitemcooldown)*
#### Added *[`PlayerGameModeChangeAfterEvent`](PlayerGameModeChangeAfterEvent.md)*
#### Added *[`PlayerGameModeChangeAfterEventSignal`](PlayerGameModeChangeAfterEventSignal.md)*
#### Added *[`PlayerGameModeChangeBeforeEvent`](PlayerGameModeChangeBeforeEvent.md)*
#### Added *[`PlayerGameModeChangeBeforeEventSignal`](PlayerGameModeChangeBeforeEventSignal.md)*
#### Changed *[`ScreenDisplay`](ScreenDisplay.md)*
- Added function *[`getHiddenHudElements`](ScreenDisplay.md#gethiddenhudelements)*
- Added function *[`hideAllExcept`](ScreenDisplay.md#hideallexcept)*
- Added function *[`isForcedHidden`](ScreenDisplay.md#isforcedhidden)*
- Added function *[`resetHudElements`](ScreenDisplay.md#resethudelements)*
- Added function *[`setHudVisibility`](ScreenDisplay.md#sethudvisibility)*
#### Added *[`Seat`](Seat.md)*
#### Changed *[`Structure`](Structure.md)*
- Added function *[`saveAs`](Structure.md#saveas)*
- Added function *[`saveToWorld`](Structure.md#savetoworld)*
- Added function *[`setBlockPermutation`](Structure.md#setblockpermutation)*
#### Changed *[`StructureManager`](StructureManager.md)*
- Added function *[`createFromWorld`](StructureManager.md#createfromworld)*
- Added function *[`getWorldStructureIds`](StructureManager.md#getworldstructureids)*
#### Added *[`WeatherChangeBeforeEvent`](WeatherChangeBeforeEvent.md)*
#### Added *[`WeatherChangeBeforeEventSignal`](WeatherChangeBeforeEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added property *[`gameRules`](World.md#gamerules)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`gameRuleChange`](WorldAfterEvents.md#gamerulechange)*
- Added property *[`playerGameModeChange`](WorldAfterEvents.md#playergamemodechange)*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Added property *[`playerGameModeChange`](WorldBeforeEvents.md#playergamemodechange)*
- Added property *[`weatherChange`](WorldBeforeEvents.md#weatherchange)*
#### Added enum [`EnchantmentSlot`](EnchantmentSlot.md)
#### Changed enum [`EntityComponentTypes`](EntityComponentTypes.md)
- Added value `AddRider`
- Added value `Color2`
- Added value `NavigationClimb`
- Added value `NavigationFloat`
- Added value `NavigationFly`
- Added value `NavigationGeneric`
- Added value `NavigationHover`
- Added value `NavigationWalk`
- Added value `Rideable`
- Added value `Riding`
- Added value `TameMount`
#### Added enum [`GameRule`](GameRule.md)
#### Added enum [`HudElement`](HudElement.md)
#### Added enum [`HudVisibility`](HudVisibility.md)
#### Changed enum [`ItemComponentTypes`](ItemComponentTypes.md)
- Added value `Enchantable`
#### Added enum [`PaletteColor`](PaletteColor.md)
#### Added constant `HudElementsCount`
#### Added constant `HudVisibilityCount`
## 1.10.0
#### Changed *[`Block`](Block.md)*
- Added function *[`getItemStack`](Block.md#getitemstack)*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added function *[`getItemStack`](BlockPermutation.md#getitemstack)*
#### Added *[`EntityProjectileComponent`](EntityProjectileComponent.md)*
#### Added *[`EntityType`](EntityType.md)*
#### Added *[`EntityTypeFamilyComponent`](EntityTypeFamilyComponent.md)*
#### Added *[`EntityTypes`](EntityTypes.md)*
#### Added *[`ItemCooldownComponent`](ItemCooldownComponent.md)*
#### Changed *[`Player`](Player.md)*
- Added function *[`playMusic`](Player.md#playmusic)*
- Added function *[`queueMusic`](Player.md#queuemusic)*
- Added function *[`stopMusic`](Player.md#stopmusic)*
#### Added *[`Structure`](Structure.md)*
#### Added *[`StructureManager`](StructureManager.md)*
#### Changed *[`World`](World.md)*
- Added property *[`structureManager`](World.md#structuremanager)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`worldInitialize`](WorldAfterEvents.md#worldinitialize)*
#### Added *[`WorldInitializeAfterEvent`](WorldInitializeAfterEvent.md)*
#### Added *[`WorldInitializeAfterEventSignal`](WorldInitializeAfterEventSignal.md)*
#### Added enum [`BlockComponentTypes`](BlockComponentTypes.md)
#### Added enum [`EntityComponentTypes`](EntityComponentTypes.md)
#### Added enum [`ItemComponentTypes`](ItemComponentTypes.md)
#### Added enum [`StructureAnimationMode`](StructureAnimationMode.md)
#### Added enum [`StructureMirrorAxis`](StructureMirrorAxis.md)
#### Added enum [`StructureRotation`](StructureRotation.md)
#### Added enum [`StructureSaveMode`](StructureSaveMode.md)
## 1.9.0
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added function *[`getAllStates`](BlockPermutation.md#getallstates)*
#### Added *[`BlockPistonComponent`](BlockPistonComponent.md)*
#### Added *[`BlockSignComponent`](BlockSignComponent.md)*
#### Added *[`BlockStates`](BlockStates.md)*
#### Added *[`BlockStateType`](BlockStateType.md)*
#### Changed *[`Container`](Container.md)*
- Added function *[`getSlot`](Container.md#getslot)*
#### Added *[`ContainerSlot`](ContainerSlot.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`createExplosion`](Dimension.md#createexplosion)*
#### Added *[`DimensionType`](DimensionType.md)*
#### Added *[`DimensionTypes`](DimensionTypes.md)*
#### Added *[`EffectTypes`](EffectTypes.md)*
#### Changed *[`Entity`](Entity.md)*
- Added function *[`extinguishFire`](Entity.md#extinguishfire)*
- Added function *[`playAnimation`](Entity.md#playanimation)*
- Added function *[`setOnFire`](Entity.md#setonfire)*
#### Changed *[`EntityEquippableComponent`](EntityEquippableComponent.md)*
- Added function *[`getEquipmentSlot`](EntityEquippableComponent.md#getequipmentslot)*
#### Added *[`EntityOnFireComponent`](EntityOnFireComponent.md)*
#### Added *[`ItemDurabilityComponent`](ItemDurabilityComponent.md)*
#### Added *[`ItemFoodComponent`](ItemFoodComponent.md)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Added function *[`clearDynamicProperties`](ItemStack.md#cleardynamicproperties)*
- Added function *[`getDynamicProperty`](ItemStack.md#getdynamicproperty)*
- Added function *[`getDynamicPropertyIds`](ItemStack.md#getdynamicpropertyids)*
- Added function *[`getDynamicPropertyTotalByteCount`](ItemStack.md#getdynamicpropertytotalbytecount)*
- Added function *[`setDynamicProperty`](ItemStack.md#setdynamicproperty)*
#### Added *[`PistonActivateAfterEvent`](PistonActivateAfterEvent.md)*
#### Added *[`PistonActivateAfterEventSignal`](PistonActivateAfterEventSignal.md)*
#### Added *[`WeatherChangeAfterEvent`](WeatherChangeAfterEvent.md)*
#### Added *[`WeatherChangeAfterEventSignal`](WeatherChangeAfterEventSignal.md)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`effectAdd`](WorldAfterEvents.md#effectadd)*
- Added property *[`explosion`](WorldAfterEvents.md#explosion)*
- Added property *[`pistonActivate`](WorldAfterEvents.md#pistonactivate)*
- Added property *[`weatherChange`](WorldAfterEvents.md#weatherchange)*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Added property *[`effectAdd`](WorldBeforeEvents.md#effectadd)*
- Added property *[`explosion`](WorldBeforeEvents.md#explosion)*
#### Added enum [`BlockPistonState`](BlockPistonState.md)
#### Added enum [`DyeColor`](DyeColor.md)
#### Added enum [`SignSide`](SignSide.md)
## 1.8.0
#### Changed *[`Block`](Block.md)*
- Added function *[`getTags`](Block.md#gettags)*
- Added function *[`hasTag`](Block.md#hastag)*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added function *[`getState`](BlockPermutation.md#getstate)*
- Added function *[`withState`](BlockPermutation.md#withstate)*
#### Added *[`BlockType`](BlockType.md)*
#### Added *[`DataDrivenEntityTriggerAfterEvent`](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[`DataDrivenEntityTriggerAfterEventSignal`](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[`EffectAddAfterEvent`](EffectAddAfterEvent.md)*
#### Added *[`EffectAddAfterEventSignal`](EffectAddAfterEventSignal.md)*
#### Added *[`EffectAddBeforeEvent`](EffectAddBeforeEvent.md)*
#### Added *[`EffectAddBeforeEventSignal`](EffectAddBeforeEventSignal.md)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`dataDrivenEntityTrigger`](WorldAfterEvents.md#datadrivenentitytrigger)*
#### Added enum [`FluidType`](FluidType.md)
## 1.7.0
#### Changed version for module dependency `@minecraft/common` from `1.0.0` to `1.1.0`
#### Changed *[`Block`](Block.md)*
- Added function *[`above`](Block.md#above)*
- Added function *[`below`](Block.md#below)*
- Added function *[`bottomCenter`](Block.md#bottomcenter)*
- Added function *[`center`](Block.md#center)*
- Added function *[`east`](Block.md#east)*
- Added function *[`north`](Block.md#north)*
- Added function *[`offset`](Block.md#offset)*
- Added function *[`south`](Block.md#south)*
- Added function *[`west`](Block.md#west)*
#### Changed *[`Dimension`](Dimension.md)*
- Added property *[`heightRange`](Dimension.md#heightrange)*
#### Changed *[`Entity`](Entity.md)*
- Added function *[`clearDynamicProperties`](Entity.md#cleardynamicproperties)*
- Added function *[`getDynamicProperty`](Entity.md#getdynamicproperty)*
- Added function *[`getDynamicPropertyIds`](Entity.md#getdynamicpropertyids)*
- Added function *[`getDynamicPropertyTotalByteCount`](Entity.md#getdynamicpropertytotalbytecount)*
- Added function *[`matches`](Entity.md#matches)*
- Added function *[`remove`](Entity.md#remove)*
- Added function *[`setDynamicProperty`](Entity.md#setdynamicproperty)*
#### Added *[`ExplosionAfterEvent`](ExplosionAfterEvent.md)*
#### Added *[`ExplosionAfterEventSignal`](ExplosionAfterEventSignal.md)*
#### Added *[`ExplosionBeforeEvent`](ExplosionBeforeEvent.md)*
#### Added *[`ExplosionBeforeEventSignal`](ExplosionBeforeEventSignal.md)*
#### Added *[`PlayerInteractWithBlockAfterEvent`](PlayerInteractWithBlockAfterEvent.md)*
#### Added *[`PlayerInteractWithBlockAfterEventSignal`](PlayerInteractWithBlockAfterEventSignal.md)*
#### Added *[`PlayerInteractWithBlockBeforeEvent`](PlayerInteractWithBlockBeforeEvent.md)*
#### Added *[`PlayerInteractWithBlockBeforeEventSignal`](PlayerInteractWithBlockBeforeEventSignal.md)*
#### Added *[`PlayerInteractWithEntityAfterEvent`](PlayerInteractWithEntityAfterEvent.md)*
#### Added *[`PlayerInteractWithEntityAfterEventSignal`](PlayerInteractWithEntityAfterEventSignal.md)*
#### Added *[`PlayerInteractWithEntityBeforeEvent`](PlayerInteractWithEntityBeforeEvent.md)*
#### Added *[`PlayerInteractWithEntityBeforeEventSignal`](PlayerInteractWithEntityBeforeEventSignal.md)*
#### Added *[`PlayerLeaveBeforeEvent`](PlayerLeaveBeforeEvent.md)*
#### Added *[`PlayerLeaveBeforeEventSignal`](PlayerLeaveBeforeEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added function *[`clearDynamicProperties`](World.md#cleardynamicproperties)*
- Added function *[`getDynamicProperty`](World.md#getdynamicproperty)*
- Added function *[`getDynamicPropertyIds`](World.md#getdynamicpropertyids)*
- Added function *[`getDynamicPropertyTotalByteCount`](World.md#getdynamicpropertytotalbytecount)*
- Added function *[`getEntity`](World.md#getentity)*
- Added function *[`setDynamicProperty`](World.md#setdynamicproperty)*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Added property *[`playerLeave`](WorldBeforeEvents.md#playerleave)*
#### Added constant `TicksPerSecond`
## 1.6.0
#### Changed *[`Block`](Block.md)*
- Added property *[`isAir`](Block.md#isair)*
- Added property *[`isLiquid`](Block.md#isliquid)*
#### Added *[`Camera`](Camera.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`setWeather`](Dimension.md#setweather)*
#### Changed *[`Entity`](Entity.md)*
- Added property *[`isClimbing`](Entity.md#isclimbing)*
- Added property *[`isFalling`](Entity.md#isfalling)*
- Added property *[`isInWater`](Entity.md#isinwater)*
- Added property *[`isOnGround`](Entity.md#isonground)*
- Added property *[`isSleeping`](Entity.md#issleeping)*
- Added property *[`isSneaking`](Entity.md#issneaking)*
- Added property *[`isSprinting`](Entity.md#issprinting)*
- Added property *[`isSwimming`](Entity.md#isswimming)*
- Added function *[`getProperty`](Entity.md#getproperty)*
- Added function *[`getRotation`](Entity.md#getrotation)*
- Added function *[`resetProperty`](Entity.md#resetproperty)*
- Added function *[`setProperty`](Entity.md#setproperty)*
- Added function *[`setRotation`](Entity.md#setrotation)*
#### Added *[`EntityLoadAfterEvent`](EntityLoadAfterEvent.md)*
#### Added *[`EntityLoadAfterEventSignal`](EntityLoadAfterEventSignal.md)*
#### Added *[`EntityRemoveAfterEvent`](EntityRemoveAfterEvent.md)*
#### Added *[`EntityRemoveAfterEventSignal`](EntityRemoveAfterEventSignal.md)*
#### Added *[`EntityRemoveBeforeEvent`](EntityRemoveBeforeEvent.md)*
#### Added *[`EntityRemoveBeforeEventSignal`](EntityRemoveBeforeEventSignal.md)*
#### Added *[`EntitySpawnAfterEvent`](EntitySpawnAfterEvent.md)*
#### Added *[`EntitySpawnAfterEventSignal`](EntitySpawnAfterEventSignal.md)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Changed read-only flag for *[`amount`](ItemStack.md#amount)* from `true` to `false`
- Changed read-only flag for *[`keepOnDeath`](ItemStack.md#keepondeath)* from `true` to `false`
- Changed read-only flag for *[`lockMode`](ItemStack.md#lockmode)* from `true` to `false`
- Changed read-only flag for *[`nameTag`](ItemStack.md#nametag)* from `true` to `false`
- Added function *[`clone`](ItemStack.md#clone)*
- Added function *[`getCanDestroy`](ItemStack.md#getcandestroy)*
- Added function *[`getCanPlaceOn`](ItemStack.md#getcanplaceon)*
- Added function *[`getTags`](ItemStack.md#gettags)*
- Added function *[`hasTag`](ItemStack.md#hastag)*
- Added function *[`setCanDestroy`](ItemStack.md#setcandestroy)*
- Added function *[`setCanPlaceOn`](ItemStack.md#setcanplaceon)*
#### Changed *[`Player`](Player.md)*
- Added property *[`camera`](Player.md#camera)*
- Added property *[`isEmoting`](Player.md#isemoting)*
- Added property *[`isFlying`](Player.md#isflying)*
- Added property *[`isGliding`](Player.md#isgliding)*
- Added property *[`isJumping`](Player.md#isjumping)*
- Added property *[`level`](Player.md#level)*
- Added property *[`totalXpNeededForNextLevel`](Player.md#totalxpneededfornextlevel)*
- Added property *[`xpEarnedAtCurrentLevel`](Player.md#xpearnedatcurrentlevel)*
- Added function *[`addExperience`](Player.md#addexperience)*
- Added function *[`addLevels`](Player.md#addlevels)*
- Added function *[`getTotalXp`](Player.md#gettotalxp)*
- Added function *[`resetLevel`](Player.md#resetlevel)*
#### Added *[`PlayerBreakBlockAfterEvent`](PlayerBreakBlockAfterEvent.md)*
#### Added *[`PlayerBreakBlockAfterEventSignal`](PlayerBreakBlockAfterEventSignal.md)*
#### Added *[`PlayerBreakBlockBeforeEvent`](PlayerBreakBlockBeforeEvent.md)*
#### Added *[`PlayerBreakBlockBeforeEventSignal`](PlayerBreakBlockBeforeEventSignal.md)*
#### Added *[`PlayerDimensionChangeAfterEvent`](PlayerDimensionChangeAfterEvent.md)*
#### Added *[`PlayerDimensionChangeAfterEventSignal`](PlayerDimensionChangeAfterEventSignal.md)*
#### Added *[`PlayerPlaceBlockAfterEvent`](PlayerPlaceBlockAfterEvent.md)*
#### Added *[`PlayerPlaceBlockAfterEventSignal`](PlayerPlaceBlockAfterEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added function *[`getMoonPhase`](World.md#getmoonphase)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`entityLoad`](WorldAfterEvents.md#entityload)*
- Added property *[`entityRemove`](WorldAfterEvents.md#entityremove)*
- Added property *[`entitySpawn`](WorldAfterEvents.md#entityspawn)*
- Added property *[`playerBreakBlock`](WorldAfterEvents.md#playerbreakblock)*
- Added property *[`playerDimensionChange`](WorldAfterEvents.md#playerdimensionchange)*
- Added property *[`playerPlaceBlock`](WorldAfterEvents.md#playerplaceblock)*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Added property *[`entityRemove`](WorldBeforeEvents.md#entityremove)*
- Added property *[`playerBreakBlock`](WorldBeforeEvents.md#playerbreakblock)*
#### Added enum [`EasingType`](EasingType.md)
#### Changed enum [`EntityDamageCause`](EntityDamageCause.md)
- Added value `campfire`
- Added value `ramAttack`
- Added value `sonicBoom`
- Added value `soulCampfire`
#### Added enum [`EntityInitializationCause`](EntityInitializationCause.md)
#### Added enum [`MoonPhase`](MoonPhase.md)
#### Added enum [`WeatherType`](WeatherType.md)
#### Added constant `MoonPhaseCount`
## 1.5.0
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`spawnParticle`](Dimension.md#spawnparticle)*
#### Changed *[`Entity`](Entity.md)*
- Added function *[`triggerEvent`](Entity.md#triggerevent)*
#### Added *[`EntityEquippableComponent`](EntityEquippableComponent.md)*
#### Added *[`MolangVariableMap`](MolangVariableMap.md)*
#### Added *[`ProjectileHitBlockAfterEvent`](ProjectileHitBlockAfterEvent.md)*
#### Added *[`ProjectileHitBlockAfterEventSignal`](ProjectileHitBlockAfterEventSignal.md)*
#### Added *[`ProjectileHitEntityAfterEvent`](ProjectileHitEntityAfterEvent.md)*
#### Added *[`ProjectileHitEntityAfterEventSignal`](ProjectileHitEntityAfterEventSignal.md)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`projectileHitBlock`](WorldAfterEvents.md#projectilehitblock)*
- Added property *[`projectileHitEntity`](WorldAfterEvents.md#projectilehitentity)*
#### Added enum [`EquipmentSlot`](EquipmentSlot.md)
## 1.4.0
#### Changed *[`Block`](Block.md)*
- Added function *[`isValid`](Block.md#isvalid)*
#### Changed *[`Component`](Component.md)*
- Added function *[`isValid`](Component.md#isvalid)*
#### Changed *[`Container`](Container.md)*
- Added function *[`isValid`](Container.md#isvalid)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`getBlockFromRay`](Dimension.md#getblockfromray)*
- Added function *[`getEntitiesFromRay`](Dimension.md#getentitiesfromray)*
#### Changed *[`Entity`](Entity.md)*
- Added property *[`scoreboardIdentity`](Entity.md#scoreboardidentity)*
- Added function *[`getBlockFromViewDirection`](Entity.md#getblockfromviewdirection)*
- Added function *[`getEntitiesFromViewDirection`](Entity.md#getentitiesfromviewdirection)*
- Added function *[`isValid`](Entity.md#isvalid)*
#### Added *[`EntityDieAfterEvent`](EntityDieAfterEvent.md)*
#### Added *[`EntityDieAfterEventSignal`](EntityDieAfterEventSignal.md)*
#### Added *[`EntityHealthChangedAfterEvent`](EntityHealthChangedAfterEvent.md)*
#### Added *[`EntityHealthChangedAfterEventSignal`](EntityHealthChangedAfterEventSignal.md)*
#### Added *[`EntityHitBlockAfterEvent`](EntityHitBlockAfterEvent.md)*
#### Added *[`EntityHitBlockAfterEventSignal`](EntityHitBlockAfterEventSignal.md)*
#### Added *[`EntityHitEntityAfterEvent`](EntityHitEntityAfterEvent.md)*
#### Added *[`EntityHitEntityAfterEventSignal`](EntityHitEntityAfterEventSignal.md)*
#### Added *[`EntityHurtAfterEvent`](EntityHurtAfterEvent.md)*
#### Added *[`EntityHurtAfterEventSignal`](EntityHurtAfterEventSignal.md)*
#### Added *[`ItemCompleteUseAfterEvent`](ItemCompleteUseAfterEvent.md)*
#### Added *[`ItemCompleteUseAfterEventSignal`](ItemCompleteUseAfterEventSignal.md)*
#### Added *[`ItemReleaseUseAfterEvent`](ItemReleaseUseAfterEvent.md)*
#### Added *[`ItemReleaseUseAfterEventSignal`](ItemReleaseUseAfterEventSignal.md)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Added function *[`getLore`](ItemStack.md#getlore)*
- Added function *[`setLore`](ItemStack.md#setlore)*
#### Added *[`ItemStartUseAfterEvent`](ItemStartUseAfterEvent.md)*
#### Added *[`ItemStartUseAfterEventSignal`](ItemStartUseAfterEventSignal.md)*
#### Added *[`ItemStartUseOnAfterEvent`](ItemStartUseOnAfterEvent.md)*
#### Added *[`ItemStartUseOnAfterEventSignal`](ItemStartUseOnAfterEventSignal.md)*
#### Added *[`ItemStopUseAfterEvent`](ItemStopUseAfterEvent.md)*
#### Added *[`ItemStopUseAfterEventSignal`](ItemStopUseAfterEventSignal.md)*
#### Added *[`ItemStopUseOnAfterEvent`](ItemStopUseOnAfterEvent.md)*
#### Added *[`ItemStopUseOnAfterEventSignal`](ItemStopUseOnAfterEventSignal.md)*
#### Added *[`ItemUseAfterEvent`](ItemUseAfterEvent.md)*
#### Added *[`ItemUseAfterEventSignal`](ItemUseAfterEventSignal.md)*
#### Added *[`ItemUseBeforeEvent`](ItemUseBeforeEvent.md)*
#### Added *[`ItemUseBeforeEventSignal`](ItemUseBeforeEventSignal.md)*
#### Added *[`ItemUseOnAfterEvent`](ItemUseOnAfterEvent.md)*
#### Added *[`ItemUseOnAfterEventSignal`](ItemUseOnAfterEventSignal.md)*
#### Added *[`ItemUseOnBeforeEvent`](ItemUseOnBeforeEvent.md)*
#### Added *[`ItemUseOnBeforeEventSignal`](ItemUseOnBeforeEventSignal.md)*
#### Changed *[`Player`](Player.md)*
- Added property *[`onScreenDisplay`](Player.md#onscreendisplay)*
- Added function *[`getSpawnPoint`](Player.md#getspawnpoint)*
- Added function *[`setSpawnPoint`](Player.md#setspawnpoint)*
#### Added *[`PressurePlatePopAfterEvent`](PressurePlatePopAfterEvent.md)*
#### Added *[`PressurePlatePopAfterEventSignal`](PressurePlatePopAfterEventSignal.md)*
#### Added *[`PressurePlatePushAfterEvent`](PressurePlatePushAfterEvent.md)*
#### Added *[`PressurePlatePushAfterEventSignal`](PressurePlatePushAfterEventSignal.md)*
#### Added *[`Scoreboard`](Scoreboard.md)*
#### Added *[`ScoreboardIdentity`](ScoreboardIdentity.md)*
#### Added *[`ScoreboardObjective`](ScoreboardObjective.md)*
#### Added *[`ScoreboardScoreInfo`](ScoreboardScoreInfo.md)*
#### Added *[`ScreenDisplay`](ScreenDisplay.md)*
#### Added *[`ScriptEventCommandMessageAfterEvent`](ScriptEventCommandMessageAfterEvent.md)*
#### Added *[`ScriptEventCommandMessageAfterEventSignal`](ScriptEventCommandMessageAfterEventSignal.md)*
#### Changed *[`System`](System.md)*
- Added property *[`afterEvents`](System.md#afterevents)*
#### Added *[`SystemAfterEvents`](SystemAfterEvents.md)*
#### Added *[`TargetBlockHitAfterEvent`](TargetBlockHitAfterEvent.md)*
#### Added *[`TargetBlockHitAfterEventSignal`](TargetBlockHitAfterEventSignal.md)*
#### Added *[`TripWireTripAfterEvent`](TripWireTripAfterEvent.md)*
#### Added *[`TripWireTripAfterEventSignal`](TripWireTripAfterEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added property *[`afterEvents`](World.md#afterevents)*
- Added property *[`beforeEvents`](World.md#beforeevents)*
- Added property *[`scoreboard`](World.md#scoreboard)*
- Added function *[`getAbsoluteTime`](World.md#getabsolutetime)*
- Added function *[`getDay`](World.md#getday)*
- Added function *[`getDefaultSpawnLocation`](World.md#getdefaultspawnlocation)*
- Added function *[`getTimeOfDay`](World.md#gettimeofday)*
- Added function *[`setAbsoluteTime`](World.md#setabsolutetime)*
- Added function *[`setDefaultSpawnLocation`](World.md#setdefaultspawnlocation)*
- Added function *[`setTimeOfDay`](World.md#settimeofday)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`entityDie`](WorldAfterEvents.md#entitydie)*
- Added property *[`entityHealthChanged`](WorldAfterEvents.md#entityhealthchanged)*
- Added property *[`entityHitBlock`](WorldAfterEvents.md#entityhitblock)*
- Added property *[`entityHitEntity`](WorldAfterEvents.md#entityhitentity)*
- Added property *[`entityHurt`](WorldAfterEvents.md#entityhurt)*
- Added property *[`itemCompleteUse`](WorldAfterEvents.md#itemcompleteuse)*
- Added property *[`itemReleaseUse`](WorldAfterEvents.md#itemreleaseuse)*
- Added property *[`itemStartUse`](WorldAfterEvents.md#itemstartuse)*
- Added property *[`itemStartUseOn`](WorldAfterEvents.md#itemstartuseon)*
- Added property *[`itemStopUse`](WorldAfterEvents.md#itemstopuse)*
- Added property *[`itemStopUseOn`](WorldAfterEvents.md#itemstopuseon)*
- Added property *[`itemUse`](WorldAfterEvents.md#itemuse)*
- Added property *[`itemUseOn`](WorldAfterEvents.md#itemuseon)*
- Added property *[`pressurePlatePop`](WorldAfterEvents.md#pressureplatepop)*
- Added property *[`pressurePlatePush`](WorldAfterEvents.md#pressureplatepush)*
- Added property *[`targetBlockHit`](WorldAfterEvents.md#targetblockhit)*
- Added property *[`tripWireTrip`](WorldAfterEvents.md#tripwiretrip)*
#### Added *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
#### Added enum [`Direction`](Direction.md)
#### Added enum [`DisplaySlotId`](DisplaySlotId.md)
#### Added enum [`ObjectiveSortOrder`](ObjectiveSortOrder.md)
#### Added enum [`ScoreboardIdentityType`](ScoreboardIdentityType.md)
#### Added enum [`ScriptEventSource`](ScriptEventSource.md)
#### Added enum [`TimeOfDay`](TimeOfDay.md)
## 1.3.0
#### Changed *[`Block`](Block.md)*
- Added function *[`getComponent`](Block.md#getcomponent)*
#### Changed *[`BlockComponent`](BlockComponent.md)*
- Added property *[`block`](BlockComponent.md#block)*
#### Added *[`BlockEvent`](BlockEvent.md)*
#### Added *[`ButtonPushAfterEvent`](ButtonPushAfterEvent.md)*
#### Added *[`ButtonPushAfterEventSignal`](ButtonPushAfterEventSignal.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`spawnEntity`](Dimension.md#spawnentity)*
- Added function *[`spawnItem`](Dimension.md#spawnitem)*
#### Added *[`Effect`](Effect.md)*
#### Added *[`EffectType`](EffectType.md)*
#### Changed *[`Entity`](Entity.md)*
- Added function *[`addEffect`](Entity.md#addeffect)*
- Added function *[`getEffect`](Entity.md#geteffect)*
- Added function *[`getEffects`](Entity.md#geteffects)*
- Added function *[`removeEffect`](Entity.md#removeeffect)*
- Added function *[`teleport`](Entity.md#teleport)*
- Added function *[`tryTeleport`](Entity.md#tryteleport)*
#### Added *[`EntityAttributeComponent`](EntityAttributeComponent.md)*
#### Added *[`EntityHealableComponent`](EntityHealableComponent.md)*
#### Added *[`EntityHealthComponent`](EntityHealthComponent.md)*
#### Added *[`FeedItem`](FeedItem.md)*
#### Added *[`FeedItemEffect`](FeedItemEffect.md)*
#### Added *[`IButtonPushAfterEventSignal`](IButtonPushAfterEventSignal.md)*
#### Added *[`ILeverActionAfterEventSignal`](ILeverActionAfterEventSignal.md)*
#### Added *[`IPlayerJoinAfterEventSignal`](IPlayerJoinAfterEventSignal.md)*
#### Added *[`IPlayerLeaveAfterEventSignal`](IPlayerLeaveAfterEventSignal.md)*
#### Added *[`IPlayerSpawnAfterEventSignal`](IPlayerSpawnAfterEventSignal.md)*
#### Added *[`LeverActionAfterEvent`](LeverActionAfterEvent.md)*
#### Added *[`LeverActionAfterEventSignal`](LeverActionAfterEventSignal.md)*
#### Added *[`PlayerJoinAfterEvent`](PlayerJoinAfterEvent.md)*
#### Added *[`PlayerJoinAfterEventSignal`](PlayerJoinAfterEventSignal.md)*
#### Added *[`PlayerLeaveAfterEvent`](PlayerLeaveAfterEvent.md)*
#### Added *[`PlayerLeaveAfterEventSignal`](PlayerLeaveAfterEventSignal.md)*
#### Added *[`PlayerSpawnAfterEvent`](PlayerSpawnAfterEvent.md)*
#### Added *[`PlayerSpawnAfterEventSignal`](PlayerSpawnAfterEventSignal.md)*
#### Added *[`WorldAfterEvents`](WorldAfterEvents.md)*
## 1.2.0
#### Added *[`BlockComponent`](BlockComponent.md)*
#### Added *[`BlockInventoryComponent`](BlockInventoryComponent.md)*
#### Added *[`Component`](Component.md)*
#### Added *[`Container`](Container.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`runCommand`](Dimension.md#runcommand)*
#### Changed *[`Entity`](Entity.md)*
- Added function *[`addTag`](Entity.md#addtag)*
- Added function *[`applyDamage`](Entity.md#applydamage)*
- Added function *[`applyImpulse`](Entity.md#applyimpulse)*
- Added function *[`applyKnockback`](Entity.md#applyknockback)*
- Added function *[`clearVelocity`](Entity.md#clearvelocity)*
- Added function *[`getComponent`](Entity.md#getcomponent)*
- Added function *[`getComponents`](Entity.md#getcomponents)*
- Added function *[`getTags`](Entity.md#gettags)*
- Added function *[`hasComponent`](Entity.md#hascomponent)*
- Added function *[`hasTag`](Entity.md#hastag)*
- Added function *[`kill`](Entity.md#kill)*
- Added function *[`removeTag`](Entity.md#removetag)*
- Added function *[`runCommand`](Entity.md#runcommand)*
#### Added *[`EntityBaseMovementComponent`](EntityBaseMovementComponent.md)*
#### Added *[`EntityCanClimbComponent`](EntityCanClimbComponent.md)*
#### Added *[`EntityCanFlyComponent`](EntityCanFlyComponent.md)*
#### Added *[`EntityCanPowerJumpComponent`](EntityCanPowerJumpComponent.md)*
#### Added *[`EntityColorComponent`](EntityColorComponent.md)*
#### Added *[`EntityComponent`](EntityComponent.md)*
#### Added *[`EntityFireImmuneComponent`](EntityFireImmuneComponent.md)*
#### Added *[`EntityFloatsInLiquidComponent`](EntityFloatsInLiquidComponent.md)*
#### Added *[`EntityFlyingSpeedComponent`](EntityFlyingSpeedComponent.md)*
#### Added *[`EntityFrictionModifierComponent`](EntityFrictionModifierComponent.md)*
#### Added *[`EntityGroundOffsetComponent`](EntityGroundOffsetComponent.md)*
#### Added *[`EntityInventoryComponent`](EntityInventoryComponent.md)*
#### Added *[`EntityIsBabyComponent`](EntityIsBabyComponent.md)*
#### Added *[`EntityIsChargedComponent`](EntityIsChargedComponent.md)*
#### Added *[`EntityIsChestedComponent`](EntityIsChestedComponent.md)*
#### Added *[`EntityIsDyeableComponent`](EntityIsDyeableComponent.md)*
#### Added *[`EntityIsHiddenWhenInvisibleComponent`](EntityIsHiddenWhenInvisibleComponent.md)*
#### Added *[`EntityIsIgnitedComponent`](EntityIsIgnitedComponent.md)*
#### Added *[`EntityIsIllagerCaptainComponent`](EntityIsIllagerCaptainComponent.md)*
#### Added *[`EntityIsSaddledComponent`](EntityIsSaddledComponent.md)*
#### Added *[`EntityIsShakingComponent`](EntityIsShakingComponent.md)*
#### Added *[`EntityIsShearedComponent`](EntityIsShearedComponent.md)*
#### Added *[`EntityIsStackableComponent`](EntityIsStackableComponent.md)*
#### Added *[`EntityIsStunnedComponent`](EntityIsStunnedComponent.md)*
#### Added *[`EntityIsTamedComponent`](EntityIsTamedComponent.md)*
#### Added *[`EntityItemComponent`](EntityItemComponent.md)*
#### Added *[`EntityMarkVariantComponent`](EntityMarkVariantComponent.md)*
#### Added *[`EntityMovementAmphibiousComponent`](EntityMovementAmphibiousComponent.md)*
#### Added *[`EntityMovementBasicComponent`](EntityMovementBasicComponent.md)*
#### Added *[`EntityMovementFlyComponent`](EntityMovementFlyComponent.md)*
#### Added *[`EntityMovementGenericComponent`](EntityMovementGenericComponent.md)*
#### Added *[`EntityMovementHoverComponent`](EntityMovementHoverComponent.md)*
#### Added *[`EntityMovementJumpComponent`](EntityMovementJumpComponent.md)*
#### Added *[`EntityMovementSkipComponent`](EntityMovementSkipComponent.md)*
#### Added *[`EntityPushThroughComponent`](EntityPushThroughComponent.md)*
#### Added *[`EntityScaleComponent`](EntityScaleComponent.md)*
#### Added *[`EntitySkinIdComponent`](EntitySkinIdComponent.md)*
#### Added *[`EntityVariantComponent`](EntityVariantComponent.md)*
#### Added *[`EntityWantsJockeyComponent`](EntityWantsJockeyComponent.md)*
#### Added *[`ItemComponent`](ItemComponent.md)*
#### Added *[`ItemStack`](ItemStack.md)*
#### Added *[`ItemType`](ItemType.md)*
#### Changed *[`Player`](Player.md)*
- Added function *[`playSound`](Player.md#playsound)*
#### Changed *[`World`](World.md)*
- Added function *[`playMusic`](World.md#playmusic)*
- Added function *[`playSound`](World.md#playsound)*
- Added function *[`queueMusic`](World.md#queuemusic)*
- Added function *[`stopMusic`](World.md#stopmusic)*
#### Added enum [`EntityDamageCause`](EntityDamageCause.md)
#### Added enum [`ItemLockMode`](ItemLockMode.md)
## 1.1.0
#### Added *[`Block`](Block.md)*
#### Added *[`BlockPermutation`](BlockPermutation.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`getBlock`](Dimension.md#getblock)*
- Added function *[`getEntities`](Dimension.md#getentities)*
- Added function *[`getEntitiesAtBlockLocation`](Dimension.md#getentitiesatblocklocation)*
- Added function *[`getPlayers`](Dimension.md#getplayers)*
#### Changed *[`Entity`](Entity.md)*
- Added property *[`dimension`](Entity.md#dimension)*
- Added property *[`location`](Entity.md#location)*
- Added property *[`nameTag`](Entity.md#nametag)*
- Added function *[`getHeadLocation`](Entity.md#getheadlocation)*
- Added function *[`getVelocity`](Entity.md#getvelocity)*
- Added function *[`getViewDirection`](Entity.md#getviewdirection)*
#### Changed *[`Player`](Player.md)*
- Added function *[`sendMessage`](Player.md#sendmessage)*
#### Changed *[`System`](System.md)*
- Added property *[`currentTick`](System.md#currenttick)*
- Added function *[`clearRun`](System.md#clearrun)*
- Added function *[`runInterval`](System.md#runinterval)*
- Added function *[`runTimeout`](System.md#runtimeout)*
#### Changed *[`World`](World.md)*
- Added function *[`getPlayers`](World.md#getplayers)*
- Added function *[`sendMessage`](World.md#sendmessage)*
#### Added enum [`GameMode`](GameMode.md)
## 1.0.0
#### Added `@minecraft/server` Module
