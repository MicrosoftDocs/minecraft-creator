---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server Module
description: Contents of the @minecraft/server module
ms.service: minecraft-bedrock-edition
---
# @minecraft/server Module

Contains many types related to manipulating a Minecraft world, including entities, blocks, dimensions, and more.

## Manifest Details
```json
{
    "module_name": "@minecraft/server",
    "version": "1.5.0"
}
```

## Available Versions
- `1.6.0-beta`
- `1.5.0`
- `1.4.0`
- `1.3.0`
- `1.2.0`
- `1.1.0`
- `0.1.0`

## Enumerations
- [BlockVolumeIntersection](BlockVolumeIntersection.md)
- [CompoundBlockVolumeAction](CompoundBlockVolumeAction.md)
- [CompoundBlockVolumePositionRelativity](CompoundBlockVolumePositionRelativity.md)
- [Direction](Direction.md)
- [DisplaySlotId](DisplaySlotId.md)
- [DyeColor](DyeColor.md)
- [EasingType](EasingType.md)
- [EntityDamageCause](EntityDamageCause.md)
- [EntityInitializationCause](EntityInitializationCause.md)
- [EntityLifetimeState](EntityLifetimeState.md)
- [EquipmentSlot](EquipmentSlot.md)
- [FluidType](FluidType.md)
- [GameMode](GameMode.md)
- [ItemLockMode](ItemLockMode.md)
- [MoonPhase](MoonPhase.md)
- [ObjectiveSortOrder](ObjectiveSortOrder.md)
- [ScoreboardIdentityType](ScoreboardIdentityType.md)
- [ScriptEventSource](ScriptEventSource.md)
- [SignSide](SignSide.md)
- [TimeOfDay](TimeOfDay.md)
- [WatchdogTerminateReason](WatchdogTerminateReason.md)
- [WeatherType](WeatherType.md)

## Classes
- [Block](Block.md)
- [BlockAreaSize](BlockAreaSize.md)
- [BlockComponent](BlockComponent.md)
- [BlockEvent](BlockEvent.md)
- [BlockExplodeAfterEvent](BlockExplodeAfterEvent.md)
- [BlockExplodeAfterEventSignal](BlockExplodeAfterEventSignal.md)
- [BlockInventoryComponent](BlockInventoryComponent.md)
- [BlockLavaContainerComponent](BlockLavaContainerComponent.md)
- [BlockLiquidContainerComponent](BlockLiquidContainerComponent.md)
- [BlockLocationIterator](BlockLocationIterator.md)
- [BlockPermutation](BlockPermutation.md)
- [BlockPistonComponent](BlockPistonComponent.md)
- [BlockPotionContainerComponent](BlockPotionContainerComponent.md)
- [BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)
- [BlockSignComponent](BlockSignComponent.md)
- [BlockSnowContainerComponent](BlockSnowContainerComponent.md)
- [BlockStates](BlockStates.md)
- [BlockStateType](BlockStateType.md)
- [BlockType](BlockType.md)
- [BlockTypes](BlockTypes.md)
- [BlockVolumeUtils](BlockVolumeUtils.md)
- [BlockWaterContainerComponent](BlockWaterContainerComponent.md)
- [BoundingBoxUtils](BoundingBoxUtils.md)
- [ButtonPushAfterEvent](ButtonPushAfterEvent.md)
- [ButtonPushAfterEventSignal](ButtonPushAfterEventSignal.md)
- [Camera](Camera.md)
- [ChatSendAfterEvent](ChatSendAfterEvent.md)
- [ChatSendAfterEventSignal](ChatSendAfterEventSignal.md)
- [ChatSendBeforeEvent](ChatSendBeforeEvent.md)
- [ChatSendBeforeEventSignal](ChatSendBeforeEventSignal.md)
- [CommandResult](CommandResult.md)
- [Component](Component.md)
- [CompoundBlockVolume](CompoundBlockVolume.md)
- [Container](Container.md)
- [ContainerSlot](ContainerSlot.md)
- [DataDrivenEntityTriggerAfterEvent](DataDrivenEntityTriggerAfterEvent.md)
- [DataDrivenEntityTriggerAfterEventSignal](DataDrivenEntityTriggerAfterEventSignal.md)
- [DataDrivenEntityTriggerBeforeEvent](DataDrivenEntityTriggerBeforeEvent.md)
- [DataDrivenEntityTriggerBeforeEventSignal](DataDrivenEntityTriggerBeforeEventSignal.md)
- [DefinitionModifier](DefinitionModifier.md)
- [Dimension](Dimension.md)
- [DimensionType](DimensionType.md)
- [DimensionTypes](DimensionTypes.md)
- [DynamicPropertiesDefinition](DynamicPropertiesDefinition.md)
- [Effect](Effect.md)
- [EffectAddAfterEvent](EffectAddAfterEvent.md)
- [EffectAddAfterEventSignal](EffectAddAfterEventSignal.md)
- [EffectType](EffectType.md)
- [EffectTypes](EffectTypes.md)
- [Enchantment](Enchantment.md)
- [EnchantmentList](EnchantmentList.md)
- [EnchantmentSlot](EnchantmentSlot.md)
- [EnchantmentType](EnchantmentType.md)
- [EnchantmentTypes](EnchantmentTypes.md)
- [Entity](Entity.md)
- [EntityAddRiderComponent](EntityAddRiderComponent.md)
- [EntityAgeableComponent](EntityAgeableComponent.md)
- [EntityAttributeComponent](EntityAttributeComponent.md)
- [EntityBaseMovementComponent](EntityBaseMovementComponent.md)
- [EntityBreathableComponent](EntityBreathableComponent.md)
- [EntityCanClimbComponent](EntityCanClimbComponent.md)
- [EntityCanFlyComponent](EntityCanFlyComponent.md)
- [EntityCanPowerJumpComponent](EntityCanPowerJumpComponent.md)
- [EntityColorComponent](EntityColorComponent.md)
- [EntityComponent](EntityComponent.md)
- [EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)
- [EntityDieAfterEvent](EntityDieAfterEvent.md)
- [EntityDieAfterEventSignal](EntityDieAfterEventSignal.md)
- [EntityEquippableComponent](EntityEquippableComponent.md)
- [EntityFireImmuneComponent](EntityFireImmuneComponent.md)
- [EntityFloatsInLiquidComponent](EntityFloatsInLiquidComponent.md)
- [EntityFlyingSpeedComponent](EntityFlyingSpeedComponent.md)
- [EntityFrictionModifierComponent](EntityFrictionModifierComponent.md)
- [EntityGroundOffsetComponent](EntityGroundOffsetComponent.md)
- [EntityHealableComponent](EntityHealableComponent.md)
- [EntityHealthChangedAfterEvent](EntityHealthChangedAfterEvent.md)
- [EntityHealthChangedAfterEventSignal](EntityHealthChangedAfterEventSignal.md)
- [EntityHealthComponent](EntityHealthComponent.md)
- [EntityHitBlockAfterEvent](EntityHitBlockAfterEvent.md)
- [EntityHitBlockAfterEventSignal](EntityHitBlockAfterEventSignal.md)
- [EntityHitEntityAfterEvent](EntityHitEntityAfterEvent.md)
- [EntityHitEntityAfterEventSignal](EntityHitEntityAfterEventSignal.md)
- [EntityHurtAfterEvent](EntityHurtAfterEvent.md)
- [EntityHurtAfterEventSignal](EntityHurtAfterEventSignal.md)
- [EntityInventoryComponent](EntityInventoryComponent.md)
- [EntityIsBabyComponent](EntityIsBabyComponent.md)
- [EntityIsChargedComponent](EntityIsChargedComponent.md)
- [EntityIsChestedComponent](EntityIsChestedComponent.md)
- [EntityIsDyeableComponent](EntityIsDyeableComponent.md)
- [EntityIsHiddenWhenInvisibleComponent](EntityIsHiddenWhenInvisibleComponent.md)
- [EntityIsIgnitedComponent](EntityIsIgnitedComponent.md)
- [EntityIsIllagerCaptainComponent](EntityIsIllagerCaptainComponent.md)
- [EntityIsSaddledComponent](EntityIsSaddledComponent.md)
- [EntityIsShakingComponent](EntityIsShakingComponent.md)
- [EntityIsShearedComponent](EntityIsShearedComponent.md)
- [EntityIsStackableComponent](EntityIsStackableComponent.md)
- [EntityIsStunnedComponent](EntityIsStunnedComponent.md)
- [EntityIsTamedComponent](EntityIsTamedComponent.md)
- [EntityItemComponent](EntityItemComponent.md)
- [EntityIterator](EntityIterator.md)
- [EntityLavaMovementComponent](EntityLavaMovementComponent.md)
- [EntityLeashableComponent](EntityLeashableComponent.md)
- [EntityLoadAfterEvent](EntityLoadAfterEvent.md)
- [EntityLoadAfterEventSignal](EntityLoadAfterEventSignal.md)
- [EntityMarkVariantComponent](EntityMarkVariantComponent.md)
- [EntityMountTamingComponent](EntityMountTamingComponent.md)
- [EntityMovementAmphibiousComponent](EntityMovementAmphibiousComponent.md)
- [EntityMovementBasicComponent](EntityMovementBasicComponent.md)
- [EntityMovementComponent](EntityMovementComponent.md)
- [EntityMovementFlyComponent](EntityMovementFlyComponent.md)
- [EntityMovementGenericComponent](EntityMovementGenericComponent.md)
- [EntityMovementGlideComponent](EntityMovementGlideComponent.md)
- [EntityMovementHoverComponent](EntityMovementHoverComponent.md)
- [EntityMovementJumpComponent](EntityMovementJumpComponent.md)
- [EntityMovementSkipComponent](EntityMovementSkipComponent.md)
- [EntityMovementSwayComponent](EntityMovementSwayComponent.md)
- [EntityNavigationClimbComponent](EntityNavigationClimbComponent.md)
- [EntityNavigationComponent](EntityNavigationComponent.md)
- [EntityNavigationFloatComponent](EntityNavigationFloatComponent.md)
- [EntityNavigationFlyComponent](EntityNavigationFlyComponent.md)
- [EntityNavigationGenericComponent](EntityNavigationGenericComponent.md)
- [EntityNavigationHoverComponent](EntityNavigationHoverComponent.md)
- [EntityNavigationWalkComponent](EntityNavigationWalkComponent.md)
- [EntityOnFireComponent](EntityOnFireComponent.md)
- [EntityPushThroughComponent](EntityPushThroughComponent.md)
- [EntityRemoveAfterEvent](EntityRemoveAfterEvent.md)
- [EntityRemoveAfterEventSignal](EntityRemoveAfterEventSignal.md)
- [EntityRemoveBeforeEvent](EntityRemoveBeforeEvent.md)
- [EntityRemoveBeforeEventSignal](EntityRemoveBeforeEventSignal.md)
- [EntityRideableComponent](EntityRideableComponent.md)
- [EntityRidingComponent](EntityRidingComponent.md)
- [EntityScaleComponent](EntityScaleComponent.md)
- [EntitySkinIdComponent](EntitySkinIdComponent.md)
- [EntitySpawnAfterEvent](EntitySpawnAfterEvent.md)
- [EntitySpawnAfterEventSignal](EntitySpawnAfterEventSignal.md)
- [EntityStrengthComponent](EntityStrengthComponent.md)
- [EntityTameableComponent](EntityTameableComponent.md)
- [EntityType](EntityType.md)
- [EntityTypeIterator](EntityTypeIterator.md)
- [EntityTypes](EntityTypes.md)
- [EntityUnderwaterMovementComponent](EntityUnderwaterMovementComponent.md)
- [EntityVariantComponent](EntityVariantComponent.md)
- [EntityWantsJockeyComponent](EntityWantsJockeyComponent.md)
- [ExplosionAfterEvent](ExplosionAfterEvent.md)
- [ExplosionAfterEventSignal](ExplosionAfterEventSignal.md)
- [ExplosionBeforeEvent](ExplosionBeforeEvent.md)
- [ExplosionBeforeEventSignal](ExplosionBeforeEventSignal.md)
- [FeedItem](FeedItem.md)
- [FeedItemEffect](FeedItemEffect.md)
- [FilterGroup](FilterGroup.md)
- [FluidContainer](FluidContainer.md)
- [IButtonPushAfterEventSignal](IButtonPushAfterEventSignal.md)
- [ILeverActionAfterEventSignal](ILeverActionAfterEventSignal.md)
- [IPlayerJoinAfterEventSignal](IPlayerJoinAfterEventSignal.md)
- [IPlayerLeaveAfterEventSignal](IPlayerLeaveAfterEventSignal.md)
- [IPlayerSpawnAfterEventSignal](IPlayerSpawnAfterEventSignal.md)
- [ItemCompleteUseAfterEvent](ItemCompleteUseAfterEvent.md)
- [ItemCompleteUseAfterEventSignal](ItemCompleteUseAfterEventSignal.md)
- [ItemComponent](ItemComponent.md)
- [ItemCooldownComponent](ItemCooldownComponent.md)
- [ItemDefinitionAfterEventSignal](ItemDefinitionAfterEventSignal.md)
- [ItemDefinitionBeforeEventSignal](ItemDefinitionBeforeEventSignal.md)
- [ItemDefinitionTriggeredAfterEvent](ItemDefinitionTriggeredAfterEvent.md)
- [ItemDefinitionTriggeredBeforeEvent](ItemDefinitionTriggeredBeforeEvent.md)
- [ItemDurabilityComponent](ItemDurabilityComponent.md)
- [ItemEnchantsComponent](ItemEnchantsComponent.md)
- [ItemFoodComponent](ItemFoodComponent.md)
- [ItemReleaseUseAfterEvent](ItemReleaseUseAfterEvent.md)
- [ItemReleaseUseAfterEventSignal](ItemReleaseUseAfterEventSignal.md)
- [ItemStack](ItemStack.md)
- [ItemStartUseAfterEvent](ItemStartUseAfterEvent.md)
- [ItemStartUseAfterEventSignal](ItemStartUseAfterEventSignal.md)
- [ItemStartUseOnAfterEvent](ItemStartUseOnAfterEvent.md)
- [ItemStartUseOnAfterEventSignal](ItemStartUseOnAfterEventSignal.md)
- [ItemStopUseAfterEvent](ItemStopUseAfterEvent.md)
- [ItemStopUseAfterEventSignal](ItemStopUseAfterEventSignal.md)
- [ItemStopUseOnAfterEvent](ItemStopUseOnAfterEvent.md)
- [ItemStopUseOnAfterEventSignal](ItemStopUseOnAfterEventSignal.md)
- [ItemType](ItemType.md)
- [ItemTypes](ItemTypes.md)
- [ItemUseAfterEvent](ItemUseAfterEvent.md)
- [ItemUseAfterEventSignal](ItemUseAfterEventSignal.md)
- [ItemUseBeforeEvent](ItemUseBeforeEvent.md)
- [ItemUseBeforeEventSignal](ItemUseBeforeEventSignal.md)
- [ItemUseOnAfterEvent](ItemUseOnAfterEvent.md)
- [ItemUseOnAfterEventSignal](ItemUseOnAfterEventSignal.md)
- [ItemUseOnBeforeEvent](ItemUseOnBeforeEvent.md)
- [ItemUseOnBeforeEventSignal](ItemUseOnBeforeEventSignal.md)
- [LeverActionAfterEvent](LeverActionAfterEvent.md)
- [LeverActionAfterEventSignal](LeverActionAfterEventSignal.md)
- [MessageReceiveAfterEvent](MessageReceiveAfterEvent.md)
- [MinecraftDimensionTypes](MinecraftDimensionTypes.md)
- [MolangVariableMap](MolangVariableMap.md)
- [NavigationResult](NavigationResult.md)
- [PistonActivateAfterEvent](PistonActivateAfterEvent.md)
- [PistonActivateAfterEventSignal](PistonActivateAfterEventSignal.md)
- [PistonActivateBeforeEvent](PistonActivateBeforeEvent.md)
- [PistonActivateBeforeEventSignal](PistonActivateBeforeEventSignal.md)
- [Player](Player.md)
- [PlayerBreakBlockAfterEvent](PlayerBreakBlockAfterEvent.md)
- [PlayerBreakBlockAfterEventSignal](PlayerBreakBlockAfterEventSignal.md)
- [PlayerBreakBlockBeforeEvent](PlayerBreakBlockBeforeEvent.md)
- [PlayerBreakBlockBeforeEventSignal](PlayerBreakBlockBeforeEventSignal.md)
- [PlayerDimensionChangeAfterEvent](PlayerDimensionChangeAfterEvent.md)
- [PlayerDimensionChangeAfterEventSignal](PlayerDimensionChangeAfterEventSignal.md)
- [PlayerDimensionChangeBeforeEvent](PlayerDimensionChangeBeforeEvent.md)
- [PlayerDimensionChangeBeforeEventSignal](PlayerDimensionChangeBeforeEventSignal.md)
- [PlayerIterator](PlayerIterator.md)
- [PlayerJoinAfterEvent](PlayerJoinAfterEvent.md)
- [PlayerJoinAfterEventSignal](PlayerJoinAfterEventSignal.md)
- [PlayerLeaveAfterEvent](PlayerLeaveAfterEvent.md)
- [PlayerLeaveAfterEventSignal](PlayerLeaveAfterEventSignal.md)
- [PlayerPlaceBlockAfterEvent](PlayerPlaceBlockAfterEvent.md)
- [PlayerPlaceBlockAfterEventSignal](PlayerPlaceBlockAfterEventSignal.md)
- [PlayerPlaceBlockBeforeEvent](PlayerPlaceBlockBeforeEvent.md)
- [PlayerPlaceBlockBeforeEventSignal](PlayerPlaceBlockBeforeEventSignal.md)
- [PlayerSpawnAfterEvent](PlayerSpawnAfterEvent.md)
- [PlayerSpawnAfterEventSignal](PlayerSpawnAfterEventSignal.md)
- [PressurePlatePopAfterEvent](PressurePlatePopAfterEvent.md)
- [PressurePlatePopAfterEventSignal](PressurePlatePopAfterEventSignal.md)
- [PressurePlatePushAfterEvent](PressurePlatePushAfterEvent.md)
- [PressurePlatePushAfterEventSignal](PressurePlatePushAfterEventSignal.md)
- [ProjectileHitBlockAfterEvent](ProjectileHitBlockAfterEvent.md)
- [ProjectileHitBlockAfterEventSignal](ProjectileHitBlockAfterEventSignal.md)
- [ProjectileHitEntityAfterEvent](ProjectileHitEntityAfterEvent.md)
- [ProjectileHitEntityAfterEventSignal](ProjectileHitEntityAfterEventSignal.md)
- [PropertyRegistry](PropertyRegistry.md)
- [Scoreboard](Scoreboard.md)
- [ScoreboardIdentity](ScoreboardIdentity.md)
- [ScoreboardObjective](ScoreboardObjective.md)
- [ScoreboardScoreInfo](ScoreboardScoreInfo.md)
- [ScreenDisplay](ScreenDisplay.md)
- [ScriptEventCommandMessageAfterEvent](ScriptEventCommandMessageAfterEvent.md)
- [ScriptEventCommandMessageAfterEventSignal](ScriptEventCommandMessageAfterEventSignal.md)
- [Seat](Seat.md)
- [ServerMessageAfterEventSignal](ServerMessageAfterEventSignal.md)
- [System](System.md)
- [SystemAfterEvents](SystemAfterEvents.md)
- [SystemBeforeEvents](SystemBeforeEvents.md)
- [TargetBlockHitAfterEvent](TargetBlockHitAfterEvent.md)
- [TargetBlockHitAfterEventSignal](TargetBlockHitAfterEventSignal.md)
- [Trigger](Trigger.md)
- [TripWireTripAfterEvent](TripWireTripAfterEvent.md)
- [TripWireTripAfterEventSignal](TripWireTripAfterEventSignal.md)
- [Vector](Vector.md)
- [WatchdogTerminateBeforeEvent](WatchdogTerminateBeforeEvent.md)
- [WatchdogTerminateBeforeEventSignal](WatchdogTerminateBeforeEventSignal.md)
- [WeatherChangeAfterEvent](WeatherChangeAfterEvent.md)
- [WeatherChangeAfterEventSignal](WeatherChangeAfterEventSignal.md)
- [World](World.md)
- [WorldAfterEvents](WorldAfterEvents.md)
- [WorldBeforeEvents](WorldBeforeEvents.md)
- [WorldInitializeAfterEvent](WorldInitializeAfterEvent.md)
- [WorldInitializeAfterEventSignal](WorldInitializeAfterEventSignal.md)

## Interfaces
- [BlockEventOptions](BlockEventOptions.md)
- [BlockFillOptions](BlockFillOptions.md)
- [BlockHitInformation](BlockHitInformation.md)
- [BlockRaycastHit](BlockRaycastHit.md)
- [BlockRaycastOptions](BlockRaycastOptions.md)
- [BlockVolume](BlockVolume.md)
- [BoundingBox](BoundingBox.md)
- [CameraEaseOptions](CameraEaseOptions.md)
- [CameraFadeOptions](CameraFadeOptions.md)
- [CameraFadeTimeOptions](CameraFadeTimeOptions.md)
- [CompoundBlockVolumeItem](CompoundBlockVolumeItem.md)
- [DimensionLocation](DimensionLocation.md)
- [EntityApplyDamageByProjectileOptions](EntityApplyDamageByProjectileOptions.md)
- [EntityApplyDamageOptions](EntityApplyDamageOptions.md)
- [EntityDamageSource](EntityDamageSource.md)
- [EntityDataDrivenTriggerEventOptions](EntityDataDrivenTriggerEventOptions.md)
- [EntityEffectOptions](EntityEffectOptions.md)
- [EntityEventOptions](EntityEventOptions.md)
- [EntityHitInformation](EntityHitInformation.md)
- [EntityQueryOptions](EntityQueryOptions.md)
- [EntityQueryScoreOptions](EntityQueryScoreOptions.md)
- [EntityRaycastHit](EntityRaycastHit.md)
- [EntityRaycastOptions](EntityRaycastOptions.md)
- [ExplosionOptions](ExplosionOptions.md)
- [MusicOptions](MusicOptions.md)
- [NumberRange](NumberRange.md)
- [PlayAnimationOptions](PlayAnimationOptions.md)
- [PlayerSoundOptions](PlayerSoundOptions.md)
- [RawMessage](RawMessage.md)
- [RawMessageScore](RawMessageScore.md)
- [RawText](RawText.md)
- [RGB](RGB.md)
- [RGBA](RGBA.md)
- [ScoreboardObjectiveDisplayOptions](ScoreboardObjectiveDisplayOptions.md)
- [ScriptCameraDefaultOptions](ScriptCameraDefaultOptions.md)
- [ScriptCameraSetFacingOptions](ScriptCameraSetFacingOptions.md)
- [ScriptCameraSetLocationOptions](ScriptCameraSetLocationOptions.md)
- [ScriptCameraSetPosOptions](ScriptCameraSetPosOptions.md)
- [ScriptCameraSetRotOptions](ScriptCameraSetRotOptions.md)
- [ScriptEventMessageFilterOptions](ScriptEventMessageFilterOptions.md)
- [TeleportOptions](TeleportOptions.md)
- [TitleDisplayOptions](TitleDisplayOptions.md)
- [Vector2](Vector2.md)
- [Vector3](Vector3.md)
- [WorldSoundOptions](WorldSoundOptions.md)

## Errors
- [CommandError](CommandError.md)
- [LocationInUnloadedChunkError](LocationInUnloadedChunkError.md)
- [LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError.md)

## Constants

### **MoonPhaseCount**
`static read-only MoonPhaseCount = 8;`

Holds the number of MoonPhases

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **TicksPerDay**
`static read-only TicksPerDay = 24000;`

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **TicksPerSecond**
`static read-only TicksPerSecond = 20;`

How many times the server ticks per second of real time.

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

## Objects
  
### **system**
`static read-only system: System;`

A class that provides system-level events and functions.

Type: [*System*](System.md)
  
### **world**
`static read-only world: World;`

A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.

Type: [*World*](World.md)

## Change Log
## 1.6.0-beta
#### Changed *[Block](Block.md)*
- Added property *[isAir](Block.md#isair)*
- Added property *[isLiquid](Block.md#isliquid)*
- Added property *[isSolid](Block.md#issolid)*
- Added property *[isWaterlogged](Block.md#iswaterlogged)*
- Added property *[type](Block.md#type)*
- Added property *[typeId](Block.md#typeid)*
- Added function *[canPlace](Block.md#canplace)*
- Added function *[getItemStack](Block.md#getitemstack)*
- Added function *[getRedstonePower](Block.md#getredstonepower)*
- Added function *[getTags](Block.md#gettags)*
- Added function *[hasTag](Block.md#hastag)*
- Added function *[setType](Block.md#settype)*
- Added function *[trySetPermutation](Block.md#trysetpermutation)*
#### Added *[BlockAreaSize](BlockAreaSize.md)*
#### Added *[BlockExplodeAfterEvent](BlockExplodeAfterEvent.md)*
#### Added *[BlockExplodeAfterEventSignal](BlockExplodeAfterEventSignal.md)*
#### Added *[BlockLavaContainerComponent](BlockLavaContainerComponent.md)*
#### Added *[BlockLiquidContainerComponent](BlockLiquidContainerComponent.md)*
#### Added *[BlockLocationIterator](BlockLocationIterator.md)*
#### Changed *[BlockPermutation](BlockPermutation.md)*
- Added property *[type](BlockPermutation.md#type)*
- Added function *[clone](BlockPermutation.md#clone)*
- Added function *[getAllStates](BlockPermutation.md#getallstates)*
- Added function *[getItemStack](BlockPermutation.md#getitemstack)*
- Added function *[getState](BlockPermutation.md#getstate)*
- Added function *[getTags](BlockPermutation.md#gettags)*
- Added function *[hasTag](BlockPermutation.md#hastag)*
- Added function *[withState](BlockPermutation.md#withstate)*
#### Added *[BlockPistonComponent](BlockPistonComponent.md)*
#### Added *[BlockPotionContainerComponent](BlockPotionContainerComponent.md)*
#### Added *[BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)*
#### Added *[BlockSignComponent](BlockSignComponent.md)*
#### Added *[BlockSnowContainerComponent](BlockSnowContainerComponent.md)*
#### Added *[BlockStates](BlockStates.md)*
#### Added *[BlockStateType](BlockStateType.md)*
#### Added *[BlockType](BlockType.md)*
#### Added *[BlockTypes](BlockTypes.md)*
#### Added *[BlockVolumeUtils](BlockVolumeUtils.md)*
#### Added *[BlockWaterContainerComponent](BlockWaterContainerComponent.md)*
#### Added *[BoundingBoxUtils](BoundingBoxUtils.md)*
#### Added *[Camera](Camera.md)*
#### Added *[ChatSendAfterEvent](ChatSendAfterEvent.md)*
#### Added *[ChatSendAfterEventSignal](ChatSendAfterEventSignal.md)*
#### Added *[ChatSendBeforeEvent](ChatSendBeforeEvent.md)*
#### Added *[ChatSendBeforeEventSignal](ChatSendBeforeEventSignal.md)*
#### Added *[CompoundBlockVolume](CompoundBlockVolume.md)*
#### Changed *[Container](Container.md)*
- Added function *[getSlot](Container.md#getslot)*
#### Added *[ContainerSlot](ContainerSlot.md)*
#### Added *[DataDrivenEntityTriggerAfterEvent](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[DataDrivenEntityTriggerAfterEventSignal](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[DataDrivenEntityTriggerBeforeEvent](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[DataDrivenEntityTriggerBeforeEventSignal](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[DefinitionModifier](DefinitionModifier.md)*
#### Changed *[Dimension](Dimension.md)*
- Added property *[heightRange](Dimension.md#heightrange)*
- Added function *[createExplosion](Dimension.md#createexplosion)*
- Added function *[fillBlocks](Dimension.md#fillblocks)*
- Added function *[setWeather](Dimension.md#setweather)*
#### Added *[DimensionType](DimensionType.md)*
#### Added *[DimensionTypes](DimensionTypes.md)*
#### Added *[DynamicPropertiesDefinition](DynamicPropertiesDefinition.md)*
#### Added *[EffectAddAfterEvent](EffectAddAfterEvent.md)*
#### Added *[EffectAddAfterEventSignal](EffectAddAfterEventSignal.md)*
#### Added *[EffectTypes](EffectTypes.md)*
#### Added *[Enchantment](Enchantment.md)*
#### Added *[EnchantmentList](EnchantmentList.md)*
#### Added *[EnchantmentSlot](EnchantmentSlot.md)*
#### Added *[EnchantmentType](EnchantmentType.md)*
#### Added *[EnchantmentTypes](EnchantmentTypes.md)*
#### Changed *[Entity](Entity.md)*
- Added property *[fallDistance](Entity.md#falldistance)*
- Added property *[isClimbing](Entity.md#isclimbing)*
- Added property *[isFalling](Entity.md#isfalling)*
- Added property *[isInWater](Entity.md#isinwater)*
- Added property *[isOnGround](Entity.md#isonground)*
- Added property *[isSleeping](Entity.md#issleeping)*
- Added property *[isSneaking](Entity.md#issneaking)*
- Added property *[isSprinting](Entity.md#issprinting)*
- Added property *[isSwimming](Entity.md#isswimming)*
- Added property *[lifetimeState](Entity.md#lifetimestate)*
- Added property *[target](Entity.md#target)*
- Added function *[extinguishFire](Entity.md#extinguishfire)*
- Added function *[getDynamicProperty](Entity.md#getdynamicproperty)*
- Added function *[getProperty](Entity.md#getproperty)*
- Added function *[getRotation](Entity.md#getrotation)*
- Added function *[playAnimation](Entity.md#playanimation)*
- Added function *[remove](Entity.md#remove)*
- Added function *[removeDynamicProperty](Entity.md#removedynamicproperty)*
- Added function *[resetProperty](Entity.md#resetproperty)*
- Added function *[setDynamicProperty](Entity.md#setdynamicproperty)*
- Added function *[setOnFire](Entity.md#setonfire)*
- Added function *[setProperty](Entity.md#setproperty)*
- Added function *[setRotation](Entity.md#setrotation)*
#### Added *[EntityAddRiderComponent](EntityAddRiderComponent.md)*
#### Added *[EntityAgeableComponent](EntityAgeableComponent.md)*
#### Added *[EntityBreathableComponent](EntityBreathableComponent.md)*
#### Changed *[EntityComponent](EntityComponent.md)*
- Added property *[entity](EntityComponent.md#entity)*
#### Added *[EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)*
#### Changed *[EntityEquippableComponent](EntityEquippableComponent.md)*
- Added function *[getEquipmentSlot](EntityEquippableComponent.md#getequipmentslot)*
#### Changed *[EntityHealableComponent](EntityHealableComponent.md)*
- Added property *[filters](EntityHealableComponent.md#filters)*
#### Added *[EntityIterator](EntityIterator.md)*
#### Added *[EntityLavaMovementComponent](EntityLavaMovementComponent.md)*
#### Added *[EntityLeashableComponent](EntityLeashableComponent.md)*
#### Added *[EntityLoadAfterEvent](EntityLoadAfterEvent.md)*
#### Added *[EntityLoadAfterEventSignal](EntityLoadAfterEventSignal.md)*
#### Added *[EntityMountTamingComponent](EntityMountTamingComponent.md)*
#### Added *[EntityMovementComponent](EntityMovementComponent.md)*
#### Added *[EntityMovementGlideComponent](EntityMovementGlideComponent.md)*
#### Added *[EntityMovementSwayComponent](EntityMovementSwayComponent.md)*
#### Added *[EntityNavigationClimbComponent](EntityNavigationClimbComponent.md)*
#### Added *[EntityNavigationComponent](EntityNavigationComponent.md)*
#### Added *[EntityNavigationFloatComponent](EntityNavigationFloatComponent.md)*
#### Added *[EntityNavigationFlyComponent](EntityNavigationFlyComponent.md)*
#### Added *[EntityNavigationGenericComponent](EntityNavigationGenericComponent.md)*
#### Added *[EntityNavigationHoverComponent](EntityNavigationHoverComponent.md)*
#### Added *[EntityNavigationWalkComponent](EntityNavigationWalkComponent.md)*
#### Added *[EntityOnFireComponent](EntityOnFireComponent.md)*
#### Added *[EntityRemoveAfterEvent](EntityRemoveAfterEvent.md)*
#### Added *[EntityRemoveAfterEventSignal](EntityRemoveAfterEventSignal.md)*
#### Added *[EntityRemoveBeforeEvent](EntityRemoveBeforeEvent.md)*
#### Added *[EntityRemoveBeforeEventSignal](EntityRemoveBeforeEventSignal.md)*
#### Added *[EntityRideableComponent](EntityRideableComponent.md)*
#### Added *[EntityRidingComponent](EntityRidingComponent.md)*
#### Added *[EntitySpawnAfterEvent](EntitySpawnAfterEvent.md)*
#### Added *[EntitySpawnAfterEventSignal](EntitySpawnAfterEventSignal.md)*
#### Added *[EntityStrengthComponent](EntityStrengthComponent.md)*
#### Added *[EntityTameableComponent](EntityTameableComponent.md)*
#### Added *[EntityType](EntityType.md)*
#### Added *[EntityTypeIterator](EntityTypeIterator.md)*
#### Added *[EntityTypes](EntityTypes.md)*
#### Added *[EntityUnderwaterMovementComponent](EntityUnderwaterMovementComponent.md)*
#### Added *[ExplosionAfterEvent](ExplosionAfterEvent.md)*
#### Added *[ExplosionAfterEventSignal](ExplosionAfterEventSignal.md)*
#### Added *[ExplosionBeforeEvent](ExplosionBeforeEvent.md)*
#### Added *[ExplosionBeforeEventSignal](ExplosionBeforeEventSignal.md)*
#### Added *[FilterGroup](FilterGroup.md)*
#### Added *[FluidContainer](FluidContainer.md)*
#### Added *[ItemCooldownComponent](ItemCooldownComponent.md)*
#### Added *[ItemDefinitionAfterEventSignal](ItemDefinitionAfterEventSignal.md)*
#### Added *[ItemDefinitionBeforeEventSignal](ItemDefinitionBeforeEventSignal.md)*
#### Added *[ItemDefinitionTriggeredAfterEvent](ItemDefinitionTriggeredAfterEvent.md)*
#### Added *[ItemDefinitionTriggeredBeforeEvent](ItemDefinitionTriggeredBeforeEvent.md)*
#### Added *[ItemDurabilityComponent](ItemDurabilityComponent.md)*
#### Added *[ItemEnchantsComponent](ItemEnchantsComponent.md)*
#### Added *[ItemFoodComponent](ItemFoodComponent.md)*
#### Changed *[ItemStack](ItemStack.md)*
- Added property *[amount](ItemStack.md#amount)*
- Added property *[keepOnDeath](ItemStack.md#keepondeath)*
- Added property *[lockMode](ItemStack.md#lockmode)*
- Added property *[nameTag](ItemStack.md#nametag)*
- Added function *[clone](ItemStack.md#clone)*
- Added function *[getCanDestroy](ItemStack.md#getcandestroy)*
- Added function *[getCanPlaceOn](ItemStack.md#getcanplaceon)*
- Added function *[getTags](ItemStack.md#gettags)*
- Added function *[hasTag](ItemStack.md#hastag)*
- Added function *[setCanDestroy](ItemStack.md#setcandestroy)*
- Added function *[setCanPlaceOn](ItemStack.md#setcanplaceon)*
- Added function *[triggerEvent](ItemStack.md#triggerevent)*
#### Added *[ItemTypes](ItemTypes.md)*
#### Added *[MessageReceiveAfterEvent](MessageReceiveAfterEvent.md)*
#### Added *[NavigationResult](NavigationResult.md)*
#### Added *[PistonActivateAfterEvent](PistonActivateAfterEvent.md)*
#### Added *[PistonActivateAfterEventSignal](PistonActivateAfterEventSignal.md)*
#### Added *[PistonActivateBeforeEvent](PistonActivateBeforeEvent.md)*
#### Added *[PistonActivateBeforeEventSignal](PistonActivateBeforeEventSignal.md)*
#### Changed *[Player](Player.md)*
- Added property *[camera](Player.md#camera)*
- Added property *[isEmoting](Player.md#isemoting)*
- Added property *[isFlying](Player.md#isflying)*
- Added property *[isGliding](Player.md#isgliding)*
- Added property *[isJumping](Player.md#isjumping)*
- Added property *[level](Player.md#level)*
- Added property *[selectedSlot](Player.md#selectedslot)*
- Added property *[totalXpNeededForNextLevel](Player.md#totalxpneededfornextlevel)*
- Added property *[xpEarnedAtCurrentLevel](Player.md#xpearnedatcurrentlevel)*
- Added function *[addExperience](Player.md#addexperience)*
- Added function *[addLevels](Player.md#addlevels)*
- Added function *[getItemCooldown](Player.md#getitemcooldown)*
- Added function *[getTotalXp](Player.md#gettotalxp)*
- Added function *[isOp](Player.md#isop)*
- Added function *[postClientMessage](Player.md#postclientmessage)*
- Added function *[resetLevel](Player.md#resetlevel)*
- Added function *[setOp](Player.md#setop)*
- Added function *[startItemCooldown](Player.md#startitemcooldown)*
#### Added *[PlayerBreakBlockAfterEvent](PlayerBreakBlockAfterEvent.md)*
#### Added *[PlayerBreakBlockAfterEventSignal](PlayerBreakBlockAfterEventSignal.md)*
#### Added *[PlayerBreakBlockBeforeEvent](PlayerBreakBlockBeforeEvent.md)*
#### Added *[PlayerBreakBlockBeforeEventSignal](PlayerBreakBlockBeforeEventSignal.md)*
#### Added *[PlayerDimensionChangeAfterEvent](PlayerDimensionChangeAfterEvent.md)*
#### Added *[PlayerDimensionChangeAfterEventSignal](PlayerDimensionChangeAfterEventSignal.md)*
#### Added *[PlayerDimensionChangeBeforeEvent](PlayerDimensionChangeBeforeEvent.md)*
#### Added *[PlayerDimensionChangeBeforeEventSignal](PlayerDimensionChangeBeforeEventSignal.md)*
#### Added *[PlayerIterator](PlayerIterator.md)*
#### Added *[PlayerPlaceBlockAfterEvent](PlayerPlaceBlockAfterEvent.md)*
#### Added *[PlayerPlaceBlockAfterEventSignal](PlayerPlaceBlockAfterEventSignal.md)*
#### Added *[PlayerPlaceBlockBeforeEvent](PlayerPlaceBlockBeforeEvent.md)*
#### Added *[PlayerPlaceBlockBeforeEventSignal](PlayerPlaceBlockBeforeEventSignal.md)*
#### Added *[PropertyRegistry](PropertyRegistry.md)*
#### Added *[Seat](Seat.md)*
#### Added *[ServerMessageAfterEventSignal](ServerMessageAfterEventSignal.md)*
#### Changed *[System](System.md)*
- Added property *[beforeEvents](System.md#beforeevents)*
#### Added *[SystemBeforeEvents](SystemBeforeEvents.md)*
#### Added *[Trigger](Trigger.md)*
#### Added *[Vector](Vector.md)*
#### Added *[WatchdogTerminateBeforeEvent](WatchdogTerminateBeforeEvent.md)*
#### Added *[WatchdogTerminateBeforeEventSignal](WatchdogTerminateBeforeEventSignal.md)*
#### Added *[WeatherChangeAfterEvent](WeatherChangeAfterEvent.md)*
#### Added *[WeatherChangeAfterEventSignal](WeatherChangeAfterEventSignal.md)*
#### Changed *[World](World.md)*
- Added function *[broadcastClientMessage](World.md#broadcastclientmessage)*
- Added function *[getDynamicProperty](World.md#getdynamicproperty)*
- Added function *[getEntity](World.md#getentity)*
- Added function *[getMoonPhase](World.md#getmoonphase)*
- Added function *[removeDynamicProperty](World.md#removedynamicproperty)*
- Added function *[setDynamicProperty](World.md#setdynamicproperty)*
#### Changed *[WorldAfterEvents](WorldAfterEvents.md)*
- Added property *[blockExplode](WorldAfterEvents.md#blockexplode)*
- Added property *[chatSend](WorldAfterEvents.md#chatsend)*
- Added property *[dataDrivenEntityTriggerEvent](WorldAfterEvents.md#datadrivenentitytriggerevent)*
- Added property *[effectAdd](WorldAfterEvents.md#effectadd)*
- Added property *[entityLoad](WorldAfterEvents.md#entityload)*
- Added property *[entityRemove](WorldAfterEvents.md#entityremove)*
- Added property *[entitySpawn](WorldAfterEvents.md#entityspawn)*
- Added property *[explosion](WorldAfterEvents.md#explosion)*
- Added property *[itemDefinitionEvent](WorldAfterEvents.md#itemdefinitionevent)*
- Added property *[messageReceive](WorldAfterEvents.md#messagereceive)*
- Added property *[pistonActivate](WorldAfterEvents.md#pistonactivate)*
- Added property *[playerBreakBlock](WorldAfterEvents.md#playerbreakblock)*
- Added property *[playerDimensionChange](WorldAfterEvents.md#playerdimensionchange)*
- Added property *[playerPlaceBlock](WorldAfterEvents.md#playerplaceblock)*
- Added property *[weatherChange](WorldAfterEvents.md#weatherchange)*
- Added property *[worldInitialize](WorldAfterEvents.md#worldinitialize)*
#### Changed *[WorldBeforeEvents](WorldBeforeEvents.md)*
- Added property *[chatSend](WorldBeforeEvents.md#chatsend)*
- Added property *[dataDrivenEntityTriggerEvent](WorldBeforeEvents.md#datadrivenentitytriggerevent)*
- Added property *[entityRemove](WorldBeforeEvents.md#entityremove)*
- Added property *[explosion](WorldBeforeEvents.md#explosion)*
- Added property *[itemDefinitionEvent](WorldBeforeEvents.md#itemdefinitionevent)*
- Added property *[pistonActivate](WorldBeforeEvents.md#pistonactivate)*
- Added property *[playerBreakBlock](WorldBeforeEvents.md#playerbreakblock)*
- Added property *[playerDimensionChange](WorldBeforeEvents.md#playerdimensionchange)*
- Added property *[playerPlaceBlock](WorldBeforeEvents.md#playerplaceblock)*
#### Added *[WorldInitializeAfterEvent](WorldInitializeAfterEvent.md)*
#### Added *[WorldInitializeAfterEventSignal](WorldInitializeAfterEventSignal.md)*
#### Added enum [BlockVolumeIntersection](BlockVolumeIntersection.md)
#### Added enum [CompoundBlockVolumeAction](CompoundBlockVolumeAction.md)
#### Added enum [CompoundBlockVolumePositionRelativity](CompoundBlockVolumePositionRelativity.md)
#### Added enum [DyeColor](DyeColor.md)
#### Added enum [EasingType](EasingType.md)
#### Added enum [EntityInitializationCause](EntityInitializationCause.md)
#### Added enum [EntityLifetimeState](EntityLifetimeState.md)
#### Added enum [FluidType](FluidType.md)
#### Added enum [MoonPhase](MoonPhase.md)
#### Added enum [SignSide](SignSide.md)
#### Added enum [WatchdogTerminateReason](WatchdogTerminateReason.md)
#### Added enum [WeatherType](WeatherType.md)
#### Added constant [MoonPhaseCount](#moonphasecount)
#### Added constant [TicksPerDay](#ticksperday)
#### Added constant [TicksPerSecond](#tickspersecond)
## 1.5.0
#### Changed *[Block](Block.md)*
- Removed property *isWaterlogged*
- Changed type for *[permutation](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Removed property *type*
- Removed property *typeId*
- Removed function *canPlace*
- Changed function *[getComponent](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to [*BlockComponent*](BlockComponent.md) (throws exceptions)
- Removed function *getItemStack*
- Removed function *getRedstonePower*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *isAir*
- Removed function *isLiquid*
- Removed function *isSolid*
- Changed function *[setPermutation](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *setType*
- Removed function *trySetPermutation*
#### Removed *BlockAreaSize*
#### Removed *BlockBreakAfterEvent*
#### Removed *BlockBreakAfterEventSignal*
#### Removed *BlockExplodeAfterEvent*
#### Removed *BlockExplodeAfterEventSignal*
#### Removed *BlockLavaContainerComponent*
#### Removed *BlockLiquidContainerComponent*
#### Removed *BlockLocationIterator*
#### Changed *[BlockPermutation](BlockPermutation.md)*
- Removed property *type*
- Removed function *clone*
- Removed function *getAllStates*
- Removed function *getItemStack*
- Removed function *getState*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *withState*
#### Removed *BlockPistonComponent*
#### Removed *BlockPlaceAfterEvent*
#### Removed *BlockPlaceAfterEventSignal*
#### Removed *BlockPotionContainerComponent*
#### Removed *BlockRecordPlayerComponent*
#### Removed *BlockSignComponent*
#### Removed *BlockSnowContainerComponent*
#### Removed *BlockStates*
#### Removed *BlockStateType*
#### Removed *BlockType*
#### Removed *BlockVolumeUtils*
#### Removed *BlockWaterContainerComponent*
#### Removed *BoundingBoxUtils*
#### Removed *ChatSendAfterEvent*
#### Removed *ChatSendAfterEventSignal*
#### Removed *ChatSendBeforeEvent*
#### Removed *ChatSendBeforeEventSignal*
#### Removed *CompoundBlockVolume*
#### Changed *[Container](Container.md)*
- Removed function *getSlot*
#### Removed *ContainerSlot*
#### Removed *DataDrivenEntityTriggerAfterEvent*
#### Removed *DataDrivenEntityTriggerAfterEventSignal*
#### Removed *DataDrivenEntityTriggerBeforeEvent*
#### Removed *DataDrivenEntityTriggerBeforeEventSignal*
#### Removed *DefinitionModifier*
#### Changed *[Dimension](Dimension.md)*
- Changed type for *[id](Dimension.md#id)* from *string* (throws exceptions) to *string*
- Removed function *createExplosion*
- Removed function *fillBlocks*
- Changed function *[getBlock](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Changed function *[runCommand](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setWeather*
- Changed function *[spawnEntity](Dimension.md#spawnentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Changed function *[spawnItem](Dimension.md#spawnitem)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Changed function *[spawnParticle](Dimension.md#spawnparticle)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
  - Changed argument `molangVariables` type from [*MolangVariableMap*](MolangVariableMap.md) to [*MolangVariableMap*](MolangVariableMap.md)
#### Removed *DynamicPropertiesDefinition*
#### Removed *EffectAddAfterEvent*
#### Removed *EffectAddAfterEventSignal*
#### Removed *EffectTypes*
#### Removed *Enchantment*
#### Removed *EnchantmentList*
#### Removed *EnchantmentSlot*
#### Removed *EnchantmentType*
#### Removed *EnchantmentTypes*
#### Changed *[Entity](Entity.md)*
- Removed property *fallDistance*
- Changed type for *[id](Entity.md#id)* from *string* (throws exceptions) to *string*
- Removed property *isClimbing*
- Removed property *isFalling*
- Removed property *isInWater*
- Removed property *isOnGround*
- Removed property *isSneaking*
- Removed property *isSprinting*
- Removed property *isSwimming*
- Removed property *lifetimeState*
- Changed type for *[scoreboardIdentity](Entity.md#scoreboardidentity)* from [*ScoreboardIdentity*](ScoreboardIdentity.md) (throws exceptions) to [*ScoreboardIdentity*](ScoreboardIdentity.md)
- Removed property *target*
- Changed type for *[typeId](Entity.md#typeid)* from *string* (throws exceptions) to *string*
- Removed function *extinguishFire*
- Removed function *getDynamicProperty*
- Removed function *getRotation*
- Removed function *playAnimation*
- Removed function *removeDynamicProperty*
- Changed function *[runCommand](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setDynamicProperty*
- Removed function *setOnFire*
- Removed function *setRotation*
#### Removed *EntityAddRiderComponent*
#### Removed *EntityAgeableComponent*
#### Removed *EntityBreathableComponent*
#### Changed *[EntityComponent](EntityComponent.md)*
- Removed property *entity*
#### Removed *EntityDefinitionFeedItem*
#### Changed *[EntityDieAfterEventSignal](EntityDieAfterEventSignal.md)*
- Removed base class *IEntityDieAfterEventSignal*
- Added function *[subscribe](EntityDieAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](EntityDieAfterEventSignal.md#unsubscribe)*
#### Removed *EntityEquipmentInventoryComponent*
#### Added *[EntityEquippableComponent](EntityEquippableComponent.md)*
#### Changed *[EntityHealableComponent](EntityHealableComponent.md)*
- Removed property *filters*
#### Changed *[EntityHealthChangedAfterEventSignal](EntityHealthChangedAfterEventSignal.md)*
- Removed base class *IEntityHealthChangedAfterEventSignal*
- Added function *[subscribe](EntityHealthChangedAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](EntityHealthChangedAfterEventSignal.md#unsubscribe)*
#### Changed *[EntityHitBlockAfterEventSignal](EntityHitBlockAfterEventSignal.md)*
- Removed base class *IEntityHitBlockAfterEventSignal*
- Added function *[subscribe](EntityHitBlockAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](EntityHitBlockAfterEventSignal.md#unsubscribe)*
#### Changed *[EntityHitEntityAfterEventSignal](EntityHitEntityAfterEventSignal.md)*
- Removed base class *IEntityHitEntityAfterEventSignal*
- Added function *[subscribe](EntityHitEntityAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](EntityHitEntityAfterEventSignal.md#unsubscribe)*
#### Changed *[EntityHurtAfterEventSignal](EntityHurtAfterEventSignal.md)*
- Removed base class *IEntityHurtAfterEventSignal*
- Added function *[subscribe](EntityHurtAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](EntityHurtAfterEventSignal.md#unsubscribe)*
#### Removed *EntityIterator*
#### Removed *EntityLavaMovementComponent*
#### Removed *EntityLeashableComponent*
#### Removed *EntityMountTamingComponent*
#### Removed *EntityMovementComponent*
#### Removed *EntityMovementGlideComponent*
#### Removed *EntityMovementSwayComponent*
#### Removed *EntityNavigationClimbComponent*
#### Removed *EntityNavigationComponent*
#### Removed *EntityNavigationFloatComponent*
#### Removed *EntityNavigationFlyComponent*
#### Removed *EntityNavigationGenericComponent*
#### Removed *EntityNavigationHoverComponent*
#### Removed *EntityNavigationWalkComponent*
#### Removed *EntityOnFireComponent*
#### Removed *EntityRemovedAfterEvent*
#### Removed *EntityRemovedAfterEventSignal*
#### Removed *EntityRideableComponent*
#### Removed *EntityRidingComponent*
#### Removed *EntitySpawnAfterEvent*
#### Removed *EntitySpawnAfterEventSignal*
#### Removed *EntityStrengthComponent*
#### Removed *EntityTameableComponent*
#### Removed *EntityType*
#### Removed *EntityTypeIterator*
#### Removed *EntityTypes*
#### Removed *EntityUnderwaterMovementComponent*
#### Removed *ExplosionAfterEvent*
#### Removed *ExplosionAfterEventSignal*
#### Removed *ExplosionBeforeEvent*
#### Removed *ExplosionBeforeEventSignal*
#### Removed *FilterGroup*
#### Removed *FluidContainer*
#### Removed *IBlockBreakAfterEventSignal*
#### Removed *IBlockExplodeAfterEventSignal*
#### Removed *IBlockPlaceAfterEventSignal*
#### Removed *IChatSendAfterEventSignal*
#### Removed *IChatSendBeforeEventSignal*
#### Removed *IDataDrivenEntityTriggerAfterEventSignal*
#### Removed *IDataDrivenEntityTriggerBeforeEventSignal*
#### Removed *IEffectAddAfterEventSignal*
#### Removed *IEntityDieAfterEventSignal*
#### Removed *IEntityHealthChangedAfterEventSignal*
#### Removed *IEntityHitBlockAfterEventSignal*
#### Removed *IEntityHitEntityAfterEventSignal*
#### Removed *IEntityHurtAfterEventSignal*
#### Removed *IEntityRemovedAfterEventSignal*
#### Removed *IEntitySpawnAfterEventSignal*
#### Removed *IExplosionAfterEventSignal*
#### Removed *IExplosionBeforeEventSignal*
#### Removed *IItemCompleteUseAfterEventSignal*
#### Removed *IItemDefinitionAfterEventSignal*
#### Removed *IItemDefinitionBeforeEventSignal*
#### Removed *IItemReleaseUseAfterEventSignal*
#### Removed *IItemStartUseAfterEventSignal*
#### Removed *IItemStartUseOnAfterEventSignal*
#### Removed *IItemStopUseAfterEventSignal*
#### Removed *IItemStopUseOnAfterEventSignal*
#### Removed *IItemUseAfterEventSignal*
#### Removed *IItemUseBeforeEventSignal*
#### Removed *IItemUseOnAfterEventSignal*
#### Removed *IItemUseOnBeforeEventSignal*
#### Removed *IPistonActivateAfterEventSignal*
#### Removed *IPistonActivateBeforeEventSignal*
#### Removed *IPressurePlatePopAfterEventSignal*
#### Removed *IPressurePlatePushAfterEventSignal*
#### Removed *IProjectileHitAfterEventSignal*
#### Removed *IScriptEventCommandMessageAfterEventSignal*
#### Removed *IServerMessageAfterEventSignal*
#### Removed *ITargetBlockHitAfterEventSignal*
#### Changed *[ItemCompleteUseAfterEvent](ItemCompleteUseAfterEvent.md)*
- Changed type for *[source](ItemCompleteUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemCompleteUseAfterEventSignal](ItemCompleteUseAfterEventSignal.md)*
- Removed base class *IItemCompleteUseAfterEventSignal*
- Added function *[subscribe](ItemCompleteUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemCompleteUseAfterEventSignal.md#unsubscribe)*
#### Removed *ItemCooldownComponent*
#### Removed *ItemDefinitionAfterEventSignal*
#### Removed *ItemDefinitionBeforeEventSignal*
#### Removed *ItemDefinitionTriggeredAfterEvent*
#### Removed *ItemDefinitionTriggeredBeforeEvent*
#### Removed *ItemDurabilityComponent*
#### Removed *ItemEnchantsComponent*
#### Removed *ItemFoodComponent*
#### Changed *[ItemReleaseUseAfterEvent](ItemReleaseUseAfterEvent.md)*
- Changed type for *[source](ItemReleaseUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemReleaseUseAfterEventSignal](ItemReleaseUseAfterEventSignal.md)*
- Removed base class *IItemReleaseUseAfterEventSignal*
- Added function *[subscribe](ItemReleaseUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemReleaseUseAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemStack](ItemStack.md)*
- Removed property *amount*
- Removed property *keepOnDeath*
- Removed property *lockMode*
- Removed property *nameTag*
- Removed function *clone*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *setCanDestroy*
- Removed function *setCanPlaceOn*
- Removed function *triggerEvent*
#### Changed *[ItemStartUseAfterEvent](ItemStartUseAfterEvent.md)*
- Changed type for *[source](ItemStartUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemStartUseAfterEventSignal](ItemStartUseAfterEventSignal.md)*
- Removed base class *IItemStartUseAfterEventSignal*
- Added function *[subscribe](ItemStartUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemStartUseAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemStartUseOnAfterEvent](ItemStartUseOnAfterEvent.md)*
- Changed type for *[source](ItemStartUseOnAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemStartUseOnAfterEventSignal](ItemStartUseOnAfterEventSignal.md)*
- Removed base class *IItemStartUseOnAfterEventSignal*
- Added function *[subscribe](ItemStartUseOnAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemStartUseOnAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemStopUseAfterEvent](ItemStopUseAfterEvent.md)*
- Changed type for *[source](ItemStopUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemStopUseAfterEventSignal](ItemStopUseAfterEventSignal.md)*
- Removed base class *IItemStopUseAfterEventSignal*
- Added function *[subscribe](ItemStopUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemStopUseAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemStopUseOnAfterEvent](ItemStopUseOnAfterEvent.md)*
- Changed type for *[source](ItemStopUseOnAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemStopUseOnAfterEventSignal](ItemStopUseOnAfterEventSignal.md)*
- Removed base class *IItemStopUseOnAfterEventSignal*
- Added function *[subscribe](ItemStopUseOnAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemStopUseOnAfterEventSignal.md#unsubscribe)*
#### Removed *ItemTypeIterator*
#### Removed *ItemTypes*
#### Changed *[ItemUseAfterEvent](ItemUseAfterEvent.md)*
- Changed type for *[source](ItemUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemUseAfterEventSignal](ItemUseAfterEventSignal.md)*
- Removed base class *IItemUseAfterEventSignal*
- Added function *[subscribe](ItemUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemUseAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemUseBeforeEventSignal](ItemUseBeforeEventSignal.md)*
- Removed base class *IItemUseBeforeEventSignal*
- Added function *[subscribe](ItemUseBeforeEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemUseBeforeEventSignal.md#unsubscribe)*
#### Changed *[ItemUseOnAfterEvent](ItemUseOnAfterEvent.md)*
- Changed type for *[source](ItemUseOnAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemUseOnAfterEventSignal](ItemUseOnAfterEventSignal.md)*
- Removed base class *IItemUseOnAfterEventSignal*
- Added function *[subscribe](ItemUseOnAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemUseOnAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemUseOnBeforeEventSignal](ItemUseOnBeforeEventSignal.md)*
- Removed base class *IItemUseOnBeforeEventSignal*
- Added function *[subscribe](ItemUseOnBeforeEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemUseOnBeforeEventSignal.md#unsubscribe)*
#### Removed *ITripWireTripAfterEventSignal*
#### Removed *IWatchdogTerminateBeforeEventSignal*
#### Removed *IWeatherChangeAfterEventSignal*
#### Removed *IWorldInitializeAfterEventSignal*
#### Removed *MessageReceiveAfterEvent*
#### Removed *MinecraftBlockTypes*
#### Removed *MinecraftEntityTypes*
#### Removed *MinecraftItemTypes*
#### Changed *[MolangVariableMap](MolangVariableMap.md)*
- Changed function *[setColorRGB](MolangVariableMap.md#setcolorrgb)*
  - Changed return type from [*MolangVariableMap*](MolangVariableMap.md) to *void* (throws exceptions)
  - Changed argument `color` type from [*Color*](Color.md) to [*RGB*](RGB.md)
- Changed function *[setColorRGBA](MolangVariableMap.md#setcolorrgba)*
  - Changed return type from [*MolangVariableMap*](MolangVariableMap.md) to *void* (throws exceptions)
  - Changed argument `color` type from [*Color*](Color.md) to [*RGBA*](RGBA.md)
- Added function *[setFloat](MolangVariableMap.md#setfloat)*
- Changed function *[setSpeedAndDirection](MolangVariableMap.md#setspeedanddirection)*
  - Changed return type from [*MolangVariableMap*](MolangVariableMap.md) to *void* (throws exceptions)
- Changed function *[setVector3](MolangVariableMap.md#setvector3)*
  - Changed return type from [*MolangVariableMap*](MolangVariableMap.md) to *void* (throws exceptions)
#### Removed *NavigationResult*
#### Removed *PistonActivateAfterEvent*
#### Removed *PistonActivateAfterEventSignal*
#### Removed *PistonActivateBeforeEvent*
#### Removed *PistonActivateBeforeEventSignal*
#### Changed *[Player](Player.md)*
- Removed property *isFlying*
- Removed property *isGliding*
- Removed property *isJumping*
- Removed property *level*
- Removed property *selectedSlot*
- Removed property *totalXpNeededForNextLevel*
- Removed property *xpEarnedAtCurrentLevel*
- Removed function *addExperience*
- Removed function *addLevels*
- Removed function *getItemCooldown*
- Removed function *getTotalXp*
- Removed function *isOp*
- Removed function *postClientMessage*
- Removed function *resetLevel*
- Removed function *setOp*
- Changed function *[setSpawnPoint](Player.md#setspawnpoint)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *startItemCooldown*
#### Removed *PlayerIterator*
#### Changed *[PressurePlatePopAfterEventSignal](PressurePlatePopAfterEventSignal.md)*
- Removed base class *IPressurePlatePopAfterEventSignal*
- Added function *[subscribe](PressurePlatePopAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](PressurePlatePopAfterEventSignal.md#unsubscribe)*
#### Changed *[PressurePlatePushAfterEventSignal](PressurePlatePushAfterEventSignal.md)*
- Removed base class *IPressurePlatePushAfterEventSignal*
- Added function *[subscribe](PressurePlatePushAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](PressurePlatePushAfterEventSignal.md#unsubscribe)*
#### Removed *ProjectileHitAfterEvent*
#### Removed *ProjectileHitAfterEventSignal*
#### Added *[ProjectileHitBlockAfterEvent](ProjectileHitBlockAfterEvent.md)*
#### Added *[ProjectileHitBlockAfterEventSignal](ProjectileHitBlockAfterEventSignal.md)*
#### Added *[ProjectileHitEntityAfterEvent](ProjectileHitEntityAfterEvent.md)*
#### Added *[ProjectileHitEntityAfterEventSignal](ProjectileHitEntityAfterEventSignal.md)*
#### Removed *PropertyRegistry*
#### Changed *[Scoreboard](Scoreboard.md)*
- Changed function *[clearObjectiveAtDisplaySlot](Scoreboard.md#clearobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md)
- Changed function *[getObjective](Scoreboard.md#getobjective)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md)
- Changed function *[getObjectiveAtDisplaySlot](Scoreboard.md#getobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md) (throws exceptions) to [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md)
- Changed function *[getObjectives](Scoreboard.md#getobjectives)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md)[] (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md)[]
- Changed function *[getParticipants](Scoreboard.md#getparticipants)*
  - Changed return type from [*ScoreboardIdentity*](ScoreboardIdentity.md)[] (throws exceptions) to [*ScoreboardIdentity*](ScoreboardIdentity.md)[]
- Changed function *[setObjectiveAtDisplaySlot](Scoreboard.md#setobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions)
#### Changed *[ScoreboardIdentity](ScoreboardIdentity.md)*
- Changed function *[getEntity](ScoreboardIdentity.md#getentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
#### Changed *[ScoreboardObjective](ScoreboardObjective.md)*
- Added function *[addScore](ScoreboardObjective.md#addscore)*
#### Changed *[ScriptEventCommandMessageAfterEvent](ScriptEventCommandMessageAfterEvent.md)*
- Changed type for *[initiator](ScriptEventCommandMessageAfterEvent.md#initiator)* from [*Entity*](Entity.md) to [*Entity*](Entity.md)
- Changed type for *[sourceBlock](ScriptEventCommandMessageAfterEvent.md#sourceblock)* from [*Block*](Block.md) to [*Block*](Block.md)
- Changed type for *[sourceEntity](ScriptEventCommandMessageAfterEvent.md#sourceentity)* from [*Entity*](Entity.md) to [*Entity*](Entity.md)
#### Changed *[ScriptEventCommandMessageAfterEventSignal](ScriptEventCommandMessageAfterEventSignal.md)*
- Removed base class *IScriptEventCommandMessageAfterEventSignal*
- Added function *[subscribe](ScriptEventCommandMessageAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ScriptEventCommandMessageAfterEventSignal.md#unsubscribe)*
#### Removed *Seat*
#### Removed *ServerMessageAfterEventSignal*
#### Changed *[System](System.md)*
- Removed property *beforeEvents*
#### Removed *SystemBeforeEvents*
#### Changed *[TargetBlockHitAfterEventSignal](TargetBlockHitAfterEventSignal.md)*
- Removed base class *ITargetBlockHitAfterEventSignal*
- Added function *[subscribe](TargetBlockHitAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](TargetBlockHitAfterEventSignal.md#unsubscribe)*
#### Removed *Trigger*
#### Changed *[TripWireTripAfterEventSignal](TripWireTripAfterEventSignal.md)*
- Removed base class *ITripWireTripAfterEventSignal*
- Added function *[subscribe](TripWireTripAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](TripWireTripAfterEventSignal.md#unsubscribe)*
#### Removed *Vector*
#### Removed *WatchdogTerminateBeforeEvent*
#### Removed *WatchdogTerminateBeforeEventSignal*
#### Removed *WeatherChangeAfterEvent*
#### Removed *WeatherChangeAfterEventSignal*
#### Changed *[World](World.md)*
- Removed function *broadcastClientMessage*
- Removed function *getDynamicProperty*
- Removed function *getEntity*
- Removed function *removeDynamicProperty*
- Changed function *[setDefaultSpawnLocation](World.md#setdefaultspawnlocation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *setDynamicProperty*
#### Changed *[WorldAfterEvents](WorldAfterEvents.md)*
- Removed property *blockBreak*
- Removed property *blockExplode*
- Removed property *blockPlace*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *effectAdd*
- Removed property *entityRemoved*
- Removed property *entitySpawn*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Removed property *messageReceive*
- Removed property *pistonActivate*
- Removed property *projectileHit*
- Added property *[projectileHitBlock](WorldAfterEvents.md#projectilehitblock)*
- Added property *[projectileHitEntity](WorldAfterEvents.md#projectilehitentity)*
- Removed property *weatherChange*
- Removed property *worldInitialize*
#### Changed *[WorldBeforeEvents](WorldBeforeEvents.md)*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Removed property *pistonActivate*
#### Removed *WorldInitializeAfterEvent*
#### Removed *WorldInitializeAfterEventSignal*
#### Removed enum BlockVolumeIntersection
#### Removed enum CompoundBlockVolumeAction
#### Removed enum DyeColor
#### Removed enum EntityLifetimeState
#### Changed enum EquipmentSlot
- Removed value chest
- Added value Chest
- Removed value feet
- Added value Feet
- Removed value head
- Added value Head
- Removed value legs
- Added value Legs
- Removed value mainhand
- Added value Mainhand
- Removed value offhand
- Added value Offhand
#### Removed enum FluidType
#### Removed enum SignSide
#### Removed enum WatchdogTerminateReason
#### Removed enum WeatherType
#### Removed constant TicksPerDay
#### Removed constant TicksPerSecond
## 1.5.0-beta
#### Changed *[Block](Block.md)*
- Added property *[isWaterlogged](Block.md#iswaterlogged)*
- Changed type for *[permutation](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Added property *[type](Block.md#type)*
- Added property *[typeId](Block.md#typeid)*
- Added function *[canPlace](Block.md#canplace)*
- Changed function *[getComponent](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to [*BlockComponent*](BlockComponent.md) (throws exceptions)
- Added function *[getItemStack](Block.md#getitemstack)*
- Added function *[getRedstonePower](Block.md#getredstonepower)*
- Added function *[getTags](Block.md#gettags)*
- Added function *[hasTag](Block.md#hastag)*
- Added function *[isAir](Block.md#isair)*
- Added function *[isLiquid](Block.md#isliquid)*
- Added function *[isSolid](Block.md#issolid)*
- Changed function *[setPermutation](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Added function *[setType](Block.md#settype)*
- Added function *[trySetPermutation](Block.md#trysetpermutation)*
#### Added *[BlockAreaSize](BlockAreaSize.md)*
#### Added *[BlockBreakAfterEvent](BlockBreakAfterEvent.md)*
#### Added *[BlockBreakAfterEventSignal](BlockBreakAfterEventSignal.md)*
#### Added *[BlockExplodeAfterEvent](BlockExplodeAfterEvent.md)*
#### Added *[BlockExplodeAfterEventSignal](BlockExplodeAfterEventSignal.md)*
#### Added *[BlockLavaContainerComponent](BlockLavaContainerComponent.md)*
#### Added *[BlockLiquidContainerComponent](BlockLiquidContainerComponent.md)*
#### Added *[BlockLocationIterator](BlockLocationIterator.md)*
#### Changed *[BlockPermutation](BlockPermutation.md)*
- Added property *[type](BlockPermutation.md#type)*
- Added function *[clone](BlockPermutation.md#clone)*
- Added function *[getAllStates](BlockPermutation.md#getallstates)*
- Added function *[getItemStack](BlockPermutation.md#getitemstack)*
- Added function *[getState](BlockPermutation.md#getstate)*
- Added function *[getTags](BlockPermutation.md#gettags)*
- Added function *[hasTag](BlockPermutation.md#hastag)*
- Added function *[withState](BlockPermutation.md#withstate)*
#### Added *[BlockPistonComponent](BlockPistonComponent.md)*
#### Added *[BlockPlaceAfterEvent](BlockPlaceAfterEvent.md)*
#### Added *[BlockPlaceAfterEventSignal](BlockPlaceAfterEventSignal.md)*
#### Added *[BlockPotionContainerComponent](BlockPotionContainerComponent.md)*
#### Added *[BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)*
#### Added *[BlockSignComponent](BlockSignComponent.md)*
#### Added *[BlockSnowContainerComponent](BlockSnowContainerComponent.md)*
#### Added *[BlockStates](BlockStates.md)*
#### Added *[BlockStateType](BlockStateType.md)*
#### Added *[BlockType](BlockType.md)*
#### Added *[BlockVolumeUtils](BlockVolumeUtils.md)*
#### Added *[BlockWaterContainerComponent](BlockWaterContainerComponent.md)*
#### Added *[BoundingBoxUtils](BoundingBoxUtils.md)*
#### Added *[ChatSendAfterEvent](ChatSendAfterEvent.md)*
#### Added *[ChatSendAfterEventSignal](ChatSendAfterEventSignal.md)*
#### Added *[ChatSendBeforeEvent](ChatSendBeforeEvent.md)*
#### Added *[ChatSendBeforeEventSignal](ChatSendBeforeEventSignal.md)*
#### Added *[CompoundBlockVolume](CompoundBlockVolume.md)*
#### Changed *[Container](Container.md)*
- Added function *[getSlot](Container.md#getslot)*
#### Added *[ContainerSlot](ContainerSlot.md)*
#### Added *[DataDrivenEntityTriggerAfterEvent](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[DataDrivenEntityTriggerAfterEventSignal](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[DataDrivenEntityTriggerBeforeEvent](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[DataDrivenEntityTriggerBeforeEventSignal](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[DefinitionModifier](DefinitionModifier.md)*
#### Changed *[Dimension](Dimension.md)*
- Changed type for *[id](Dimension.md#id)* from *string* to *string* (throws exceptions)
- Added function *[createExplosion](Dimension.md#createexplosion)*
- Added function *[fillBlocks](Dimension.md#fillblocks)*
- Changed function *[getBlock](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Changed function *[runCommand](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[setWeather](Dimension.md#setweather)*
- Changed function *[spawnEntity](Dimension.md#spawnentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Changed function *[spawnItem](Dimension.md#spawnitem)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Added function *[spawnParticle](Dimension.md#spawnparticle)*
#### Added *[DynamicPropertiesDefinition](DynamicPropertiesDefinition.md)*
#### Added *[EffectAddAfterEvent](EffectAddAfterEvent.md)*
#### Added *[EffectAddAfterEventSignal](EffectAddAfterEventSignal.md)*
#### Added *[EffectTypes](EffectTypes.md)*
#### Added *[Enchantment](Enchantment.md)*
#### Added *[EnchantmentList](EnchantmentList.md)*
#### Added *[EnchantmentSlot](EnchantmentSlot.md)*
#### Added *[EnchantmentType](EnchantmentType.md)*
#### Added *[EnchantmentTypes](EnchantmentTypes.md)*
#### Changed *[Entity](Entity.md)*
- Added property *[fallDistance](Entity.md#falldistance)*
- Changed type for *[id](Entity.md#id)* from *string* to *string* (throws exceptions)
- Added property *[isClimbing](Entity.md#isclimbing)*
- Added property *[isFalling](Entity.md#isfalling)*
- Added property *[isInWater](Entity.md#isinwater)*
- Added property *[isOnGround](Entity.md#isonground)*
- Added property *[isSneaking](Entity.md#issneaking)*
- Added property *[isSprinting](Entity.md#issprinting)*
- Added property *[isSwimming](Entity.md#isswimming)*
- Added property *[lifetimeState](Entity.md#lifetimestate)*
- Changed type for *[scoreboardIdentity](Entity.md#scoreboardidentity)* from [*ScoreboardIdentity*](ScoreboardIdentity.md) to [*ScoreboardIdentity*](ScoreboardIdentity.md) (throws exceptions)
- Added property *[target](Entity.md#target)*
- Changed type for *[typeId](Entity.md#typeid)* from *string* to *string* (throws exceptions)
- Added function *[extinguishFire](Entity.md#extinguishfire)*
- Added function *[getDynamicProperty](Entity.md#getdynamicproperty)*
- Added function *[getRotation](Entity.md#getrotation)*
- Added function *[playAnimation](Entity.md#playanimation)*
- Added function *[removeDynamicProperty](Entity.md#removedynamicproperty)*
- Changed function *[runCommand](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[setDynamicProperty](Entity.md#setdynamicproperty)*
- Added function *[setOnFire](Entity.md#setonfire)*
- Added function *[setRotation](Entity.md#setrotation)*
- Added function *[triggerEvent](Entity.md#triggerevent)*
#### Added *[EntityAddRiderComponent](EntityAddRiderComponent.md)*
#### Added *[EntityAgeableComponent](EntityAgeableComponent.md)*
#### Added *[EntityBreathableComponent](EntityBreathableComponent.md)*
#### Changed *[EntityComponent](EntityComponent.md)*
- Added property *[entity](EntityComponent.md#entity)*
#### Added *[EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)*
#### Changed *[EntityDieAfterEventSignal](EntityDieAfterEventSignal.md)*
- Added base class [*IEntityDieAfterEventSignal*](IEntityDieAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Added *[EntityEquipmentInventoryComponent](EntityEquipmentInventoryComponent.md)*
#### Changed *[EntityHealableComponent](EntityHealableComponent.md)*
- Added property *[filters](EntityHealableComponent.md#filters)*
#### Changed *[EntityHealthChangedAfterEventSignal](EntityHealthChangedAfterEventSignal.md)*
- Added base class [*IEntityHealthChangedAfterEventSignal*](IEntityHealthChangedAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[EntityHitBlockAfterEventSignal](EntityHitBlockAfterEventSignal.md)*
- Added base class [*IEntityHitBlockAfterEventSignal*](IEntityHitBlockAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[EntityHitEntityAfterEventSignal](EntityHitEntityAfterEventSignal.md)*
- Added base class [*IEntityHitEntityAfterEventSignal*](IEntityHitEntityAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[EntityHurtAfterEventSignal](EntityHurtAfterEventSignal.md)*
- Added base class [*IEntityHurtAfterEventSignal*](IEntityHurtAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Added *[EntityIterator](EntityIterator.md)*
#### Added *[EntityLavaMovementComponent](EntityLavaMovementComponent.md)*
#### Added *[EntityLeashableComponent](EntityLeashableComponent.md)*
#### Added *[EntityMountTamingComponent](EntityMountTamingComponent.md)*
#### Added *[EntityMovementComponent](EntityMovementComponent.md)*
#### Added *[EntityMovementGlideComponent](EntityMovementGlideComponent.md)*
#### Added *[EntityMovementSwayComponent](EntityMovementSwayComponent.md)*
#### Added *[EntityNavigationClimbComponent](EntityNavigationClimbComponent.md)*
#### Added *[EntityNavigationComponent](EntityNavigationComponent.md)*
#### Added *[EntityNavigationFloatComponent](EntityNavigationFloatComponent.md)*
#### Added *[EntityNavigationFlyComponent](EntityNavigationFlyComponent.md)*
#### Added *[EntityNavigationGenericComponent](EntityNavigationGenericComponent.md)*
#### Added *[EntityNavigationHoverComponent](EntityNavigationHoverComponent.md)*
#### Added *[EntityNavigationWalkComponent](EntityNavigationWalkComponent.md)*
#### Added *[EntityOnFireComponent](EntityOnFireComponent.md)*
#### Added *[EntityRemovedAfterEvent](EntityRemovedAfterEvent.md)*
#### Added *[EntityRemovedAfterEventSignal](EntityRemovedAfterEventSignal.md)*
#### Added *[EntityRideableComponent](EntityRideableComponent.md)*
#### Added *[EntityRidingComponent](EntityRidingComponent.md)*
#### Added *[EntitySpawnAfterEvent](EntitySpawnAfterEvent.md)*
#### Added *[EntitySpawnAfterEventSignal](EntitySpawnAfterEventSignal.md)*
#### Added *[EntityStrengthComponent](EntityStrengthComponent.md)*
#### Added *[EntityTameableComponent](EntityTameableComponent.md)*
#### Added *[EntityType](EntityType.md)*
#### Added *[EntityTypeIterator](EntityTypeIterator.md)*
#### Added *[EntityTypes](EntityTypes.md)*
#### Added *[EntityUnderwaterMovementComponent](EntityUnderwaterMovementComponent.md)*
#### Added *[ExplosionAfterEvent](ExplosionAfterEvent.md)*
#### Added *[ExplosionAfterEventSignal](ExplosionAfterEventSignal.md)*
#### Added *[ExplosionBeforeEvent](ExplosionBeforeEvent.md)*
#### Added *[ExplosionBeforeEventSignal](ExplosionBeforeEventSignal.md)*
#### Added *[FilterGroup](FilterGroup.md)*
#### Added *[FluidContainer](FluidContainer.md)*
#### Added *[IBlockBreakAfterEventSignal](IBlockBreakAfterEventSignal.md)*
#### Added *[IBlockExplodeAfterEventSignal](IBlockExplodeAfterEventSignal.md)*
#### Added *[IBlockPlaceAfterEventSignal](IBlockPlaceAfterEventSignal.md)*
#### Added *[IChatSendAfterEventSignal](IChatSendAfterEventSignal.md)*
#### Added *[IChatSendBeforeEventSignal](IChatSendBeforeEventSignal.md)*
#### Added *[IDataDrivenEntityTriggerAfterEventSignal](IDataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[IDataDrivenEntityTriggerBeforeEventSignal](IDataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[IEffectAddAfterEventSignal](IEffectAddAfterEventSignal.md)*
#### Added *[IEntityDieAfterEventSignal](IEntityDieAfterEventSignal.md)*
#### Added *[IEntityHealthChangedAfterEventSignal](IEntityHealthChangedAfterEventSignal.md)*
#### Added *[IEntityHitBlockAfterEventSignal](IEntityHitBlockAfterEventSignal.md)*
#### Added *[IEntityHitEntityAfterEventSignal](IEntityHitEntityAfterEventSignal.md)*
#### Added *[IEntityHurtAfterEventSignal](IEntityHurtAfterEventSignal.md)*
#### Added *[IEntityRemovedAfterEventSignal](IEntityRemovedAfterEventSignal.md)*
#### Added *[IEntitySpawnAfterEventSignal](IEntitySpawnAfterEventSignal.md)*
#### Added *[IExplosionAfterEventSignal](IExplosionAfterEventSignal.md)*
#### Added *[IExplosionBeforeEventSignal](IExplosionBeforeEventSignal.md)*
#### Added *[IItemCompleteUseAfterEventSignal](IItemCompleteUseAfterEventSignal.md)*
#### Added *[IItemDefinitionAfterEventSignal](IItemDefinitionAfterEventSignal.md)*
#### Added *[IItemDefinitionBeforeEventSignal](IItemDefinitionBeforeEventSignal.md)*
#### Added *[IItemReleaseUseAfterEventSignal](IItemReleaseUseAfterEventSignal.md)*
#### Added *[IItemStartUseAfterEventSignal](IItemStartUseAfterEventSignal.md)*
#### Added *[IItemStartUseOnAfterEventSignal](IItemStartUseOnAfterEventSignal.md)*
#### Added *[IItemStopUseAfterEventSignal](IItemStopUseAfterEventSignal.md)*
#### Added *[IItemStopUseOnAfterEventSignal](IItemStopUseOnAfterEventSignal.md)*
#### Added *[IItemUseAfterEventSignal](IItemUseAfterEventSignal.md)*
#### Added *[IItemUseBeforeEventSignal](IItemUseBeforeEventSignal.md)*
#### Added *[IItemUseOnAfterEventSignal](IItemUseOnAfterEventSignal.md)*
#### Added *[IItemUseOnBeforeEventSignal](IItemUseOnBeforeEventSignal.md)*
#### Added *[IPistonActivateAfterEventSignal](IPistonActivateAfterEventSignal.md)*
#### Added *[IPistonActivateBeforeEventSignal](IPistonActivateBeforeEventSignal.md)*
#### Added *[IPressurePlatePopAfterEventSignal](IPressurePlatePopAfterEventSignal.md)*
#### Added *[IPressurePlatePushAfterEventSignal](IPressurePlatePushAfterEventSignal.md)*
#### Added *[IProjectileHitAfterEventSignal](IProjectileHitAfterEventSignal.md)*
#### Added *[IScriptEventCommandMessageAfterEventSignal](IScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[IServerMessageAfterEventSignal](IServerMessageAfterEventSignal.md)*
#### Added *[ITargetBlockHitAfterEventSignal](ITargetBlockHitAfterEventSignal.md)*
#### Changed *[ItemCompleteUseAfterEvent](ItemCompleteUseAfterEvent.md)*
- Changed type for *[source](ItemCompleteUseAfterEvent.md#source)* from [*Player*](Player.md) to [*Entity*](Entity.md)
#### Changed *[ItemCompleteUseAfterEventSignal](ItemCompleteUseAfterEventSignal.md)*
- Added base class [*IItemCompleteUseAfterEventSignal*](IItemCompleteUseAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Added *[ItemCooldownComponent](ItemCooldownComponent.md)*
#### Added *[ItemDefinitionAfterEventSignal](ItemDefinitionAfterEventSignal.md)*
#### Added *[ItemDefinitionBeforeEventSignal](ItemDefinitionBeforeEventSignal.md)*
#### Added *[ItemDefinitionTriggeredAfterEvent](ItemDefinitionTriggeredAfterEvent.md)*
#### Added *[ItemDefinitionTriggeredBeforeEvent](ItemDefinitionTriggeredBeforeEvent.md)*
#### Added *[ItemDurabilityComponent](ItemDurabilityComponent.md)*
#### Added *[ItemEnchantsComponent](ItemEnchantsComponent.md)*
#### Added *[ItemFoodComponent](ItemFoodComponent.md)*
#### Changed *[ItemReleaseUseAfterEvent](ItemReleaseUseAfterEvent.md)*
- Changed type for *[source](ItemReleaseUseAfterEvent.md#source)* from [*Player*](Player.md) to [*Entity*](Entity.md)
#### Changed *[ItemReleaseUseAfterEventSignal](ItemReleaseUseAfterEventSignal.md)*
- Added base class [*IItemReleaseUseAfterEventSignal*](IItemReleaseUseAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[ItemStack](ItemStack.md)*
- Added property *[amount](ItemStack.md#amount)*
- Added property *[keepOnDeath](ItemStack.md#keepondeath)*
- Added property *[lockMode](ItemStack.md#lockmode)*
- Added property *[nameTag](ItemStack.md#nametag)*
- Added function *[clone](ItemStack.md#clone)*
- Added function *[getTags](ItemStack.md#gettags)*
- Added function *[hasTag](ItemStack.md#hastag)*
- Added function *[setCanDestroy](ItemStack.md#setcandestroy)*
- Added function *[setCanPlaceOn](ItemStack.md#setcanplaceon)*
- Added function *[triggerEvent](ItemStack.md#triggerevent)*
#### Changed *[ItemStartUseAfterEvent](ItemStartUseAfterEvent.md)*
- Changed type for *[source](ItemStartUseAfterEvent.md#source)* from [*Player*](Player.md) to [*Entity*](Entity.md)
#### Changed *[ItemStartUseAfterEventSignal](ItemStartUseAfterEventSignal.md)*
- Added base class [*IItemStartUseAfterEventSignal*](IItemStartUseAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[ItemStartUseOnAfterEvent](ItemStartUseOnAfterEvent.md)*
- Changed type for *[source](ItemStartUseOnAfterEvent.md#source)* from [*Player*](Player.md) to [*Entity*](Entity.md)
#### Changed *[ItemStartUseOnAfterEventSignal](ItemStartUseOnAfterEventSignal.md)*
- Added base class [*IItemStartUseOnAfterEventSignal*](IItemStartUseOnAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[ItemStopUseAfterEvent](ItemStopUseAfterEvent.md)*
- Changed type for *[source](ItemStopUseAfterEvent.md#source)* from [*Player*](Player.md) to [*Entity*](Entity.md)
#### Changed *[ItemStopUseAfterEventSignal](ItemStopUseAfterEventSignal.md)*
- Added base class [*IItemStopUseAfterEventSignal*](IItemStopUseAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[ItemStopUseOnAfterEvent](ItemStopUseOnAfterEvent.md)*
- Changed type for *[source](ItemStopUseOnAfterEvent.md#source)* from [*Player*](Player.md) to [*Entity*](Entity.md)
#### Changed *[ItemStopUseOnAfterEventSignal](ItemStopUseOnAfterEventSignal.md)*
- Added base class [*IItemStopUseOnAfterEventSignal*](IItemStopUseOnAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Added *[ItemTypeIterator](ItemTypeIterator.md)*
#### Added *[ItemTypes](ItemTypes.md)*
#### Changed *[ItemUseAfterEvent](ItemUseAfterEvent.md)*
- Changed type for *[source](ItemUseAfterEvent.md#source)* from [*Player*](Player.md) to [*Entity*](Entity.md)
#### Changed *[ItemUseAfterEventSignal](ItemUseAfterEventSignal.md)*
- Added base class [*IItemUseAfterEventSignal*](IItemUseAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[ItemUseBeforeEventSignal](ItemUseBeforeEventSignal.md)*
- Added base class [*IItemUseBeforeEventSignal*](IItemUseBeforeEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[ItemUseOnAfterEvent](ItemUseOnAfterEvent.md)*
- Changed type for *[source](ItemUseOnAfterEvent.md#source)* from [*Player*](Player.md) to [*Entity*](Entity.md)
#### Changed *[ItemUseOnAfterEventSignal](ItemUseOnAfterEventSignal.md)*
- Added base class [*IItemUseOnAfterEventSignal*](IItemUseOnAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[ItemUseOnBeforeEventSignal](ItemUseOnBeforeEventSignal.md)*
- Added base class [*IItemUseOnBeforeEventSignal*](IItemUseOnBeforeEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Added *[ITripWireTripAfterEventSignal](ITripWireTripAfterEventSignal.md)*
#### Added *[IWatchdogTerminateBeforeEventSignal](IWatchdogTerminateBeforeEventSignal.md)*
#### Added *[IWeatherChangeAfterEventSignal](IWeatherChangeAfterEventSignal.md)*
#### Added *[IWorldInitializeAfterEventSignal](IWorldInitializeAfterEventSignal.md)*
#### Added *[MessageReceiveAfterEvent](MessageReceiveAfterEvent.md)*
#### Added *[MinecraftBlockTypes](MinecraftBlockTypes.md)*
#### Added *[MinecraftEntityTypes](MinecraftEntityTypes.md)*
#### Added *[MinecraftItemTypes](MinecraftItemTypes.md)*
#### Added *[MolangVariableMap](MolangVariableMap.md)*
#### Added *[NavigationResult](NavigationResult.md)*
#### Added *[PistonActivateAfterEvent](PistonActivateAfterEvent.md)*
#### Added *[PistonActivateAfterEventSignal](PistonActivateAfterEventSignal.md)*
#### Added *[PistonActivateBeforeEvent](PistonActivateBeforeEvent.md)*
#### Added *[PistonActivateBeforeEventSignal](PistonActivateBeforeEventSignal.md)*
#### Changed *[Player](Player.md)*
- Added property *[isFlying](Player.md#isflying)*
- Added property *[isGliding](Player.md#isgliding)*
- Added property *[isJumping](Player.md#isjumping)*
- Added property *[level](Player.md#level)*
- Added property *[selectedSlot](Player.md#selectedslot)*
- Added property *[totalXpNeededForNextLevel](Player.md#totalxpneededfornextlevel)*
- Added property *[xpEarnedAtCurrentLevel](Player.md#xpearnedatcurrentlevel)*
- Added function *[addExperience](Player.md#addexperience)*
- Added function *[addLevels](Player.md#addlevels)*
- Added function *[getItemCooldown](Player.md#getitemcooldown)*
- Added function *[getTotalXp](Player.md#gettotalxp)*
- Added function *[isOp](Player.md#isop)*
- Added function *[postClientMessage](Player.md#postclientmessage)*
- Added function *[resetLevel](Player.md#resetlevel)*
- Added function *[setOp](Player.md#setop)*
- Changed function *[setSpawnPoint](Player.md#setspawnpoint)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Added function *[startItemCooldown](Player.md#startitemcooldown)*
#### Added *[PlayerIterator](PlayerIterator.md)*
#### Changed *[PressurePlatePopAfterEventSignal](PressurePlatePopAfterEventSignal.md)*
- Added base class [*IPressurePlatePopAfterEventSignal*](IPressurePlatePopAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Changed *[PressurePlatePushAfterEventSignal](PressurePlatePushAfterEventSignal.md)*
- Added base class [*IPressurePlatePushAfterEventSignal*](IPressurePlatePushAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Added *[ProjectileHitAfterEvent](ProjectileHitAfterEvent.md)*
#### Added *[ProjectileHitAfterEventSignal](ProjectileHitAfterEventSignal.md)*
#### Added *[PropertyRegistry](PropertyRegistry.md)*
#### Changed *[Scoreboard](Scoreboard.md)*
- Changed function *[clearObjectiveAtDisplaySlot](Scoreboard.md#clearobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) to [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions)
- Changed function *[getObjective](Scoreboard.md#getobjective)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) to [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions)
- Changed function *[getObjectiveAtDisplaySlot](Scoreboard.md#getobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md) to [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md) (throws exceptions)
- Changed function *[getObjectives](Scoreboard.md#getobjectives)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md)[] to [*ScoreboardObjective*](ScoreboardObjective.md)[] (throws exceptions)
- Changed function *[getParticipants](Scoreboard.md#getparticipants)*
  - Changed return type from [*ScoreboardIdentity*](ScoreboardIdentity.md)[] to [*ScoreboardIdentity*](ScoreboardIdentity.md)[] (throws exceptions)
- Changed function *[setObjectiveAtDisplaySlot](Scoreboard.md#setobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions)
#### Changed *[ScoreboardIdentity](ScoreboardIdentity.md)*
- Changed function *[getEntity](ScoreboardIdentity.md#getentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
#### Changed *[ScoreboardObjective](ScoreboardObjective.md)*
- Removed function *addScore*
#### Changed *[ScriptEventCommandMessageAfterEvent](ScriptEventCommandMessageAfterEvent.md)*
- Changed type for *[initiator](ScriptEventCommandMessageAfterEvent.md#initiator)* from [*Entity*](Entity.md) to [*Entity*](Entity.md)
- Changed type for *[sourceBlock](ScriptEventCommandMessageAfterEvent.md#sourceblock)* from [*Block*](Block.md) to [*Block*](Block.md)
- Changed type for *[sourceEntity](ScriptEventCommandMessageAfterEvent.md#sourceentity)* from [*Entity*](Entity.md) to [*Entity*](Entity.md)
#### Changed *[ScriptEventCommandMessageAfterEventSignal](ScriptEventCommandMessageAfterEventSignal.md)*
- Added base class [*IScriptEventCommandMessageAfterEventSignal*](IScriptEventCommandMessageAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Added *[Seat](Seat.md)*
#### Added *[ServerMessageAfterEventSignal](ServerMessageAfterEventSignal.md)*
#### Changed *[System](System.md)*
- Added property *[beforeEvents](System.md#beforeevents)*
#### Added *[SystemBeforeEvents](SystemBeforeEvents.md)*
#### Changed *[TargetBlockHitAfterEventSignal](TargetBlockHitAfterEventSignal.md)*
- Added base class [*ITargetBlockHitAfterEventSignal*](ITargetBlockHitAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Added *[Trigger](Trigger.md)*
#### Changed *[TripWireTripAfterEventSignal](TripWireTripAfterEventSignal.md)*
- Added base class [*ITripWireTripAfterEventSignal*](ITripWireTripAfterEventSignal.md)
- Removed function *subscribe*
- Removed function *unsubscribe*
#### Added *[Vector](Vector.md)*
#### Added *[WatchdogTerminateBeforeEvent](WatchdogTerminateBeforeEvent.md)*
#### Added *[WatchdogTerminateBeforeEventSignal](WatchdogTerminateBeforeEventSignal.md)*
#### Added *[WeatherChangeAfterEvent](WeatherChangeAfterEvent.md)*
#### Added *[WeatherChangeAfterEventSignal](WeatherChangeAfterEventSignal.md)*
#### Changed *[World](World.md)*
- Added function *[broadcastClientMessage](World.md#broadcastclientmessage)*
- Added function *[getDynamicProperty](World.md#getdynamicproperty)*
- Added function *[getEntity](World.md#getentity)*
- Added function *[removeDynamicProperty](World.md#removedynamicproperty)*
- Changed function *[setDefaultSpawnLocation](World.md#setdefaultspawnlocation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Added function *[setDynamicProperty](World.md#setdynamicproperty)*
#### Changed *[WorldAfterEvents](WorldAfterEvents.md)*
- Added property *[blockBreak](WorldAfterEvents.md#blockbreak)*
- Added property *[blockExplode](WorldAfterEvents.md#blockexplode)*
- Added property *[blockPlace](WorldAfterEvents.md#blockplace)*
- Added property *[chatSend](WorldAfterEvents.md#chatsend)*
- Added property *[dataDrivenEntityTriggerEvent](WorldAfterEvents.md#datadrivenentitytriggerevent)*
- Added property *[effectAdd](WorldAfterEvents.md#effectadd)*
- Added property *[entityRemoved](WorldAfterEvents.md#entityremoved)*
- Added property *[entitySpawn](WorldAfterEvents.md#entityspawn)*
- Added property *[explosion](WorldAfterEvents.md#explosion)*
- Added property *[itemDefinitionEvent](WorldAfterEvents.md#itemdefinitionevent)*
- Added property *[messageReceive](WorldAfterEvents.md#messagereceive)*
- Added property *[pistonActivate](WorldAfterEvents.md#pistonactivate)*
- Added property *[projectileHit](WorldAfterEvents.md#projectilehit)*
- Added property *[weatherChange](WorldAfterEvents.md#weatherchange)*
- Added property *[worldInitialize](WorldAfterEvents.md#worldinitialize)*
#### Changed *[WorldBeforeEvents](WorldBeforeEvents.md)*
- Added property *[chatSend](WorldBeforeEvents.md#chatsend)*
- Added property *[dataDrivenEntityTriggerEvent](WorldBeforeEvents.md#datadrivenentitytriggerevent)*
- Added property *[explosion](WorldBeforeEvents.md#explosion)*
- Added property *[itemDefinitionEvent](WorldBeforeEvents.md#itemdefinitionevent)*
- Added property *[pistonActivate](WorldBeforeEvents.md#pistonactivate)*
#### Added *[WorldInitializeAfterEvent](WorldInitializeAfterEvent.md)*
#### Added *[WorldInitializeAfterEventSignal](WorldInitializeAfterEventSignal.md)*
#### Added enum [BlockVolumeIntersection](BlockVolumeIntersection.md)
#### Added enum [CompoundBlockVolumeAction](CompoundBlockVolumeAction.md)
#### Added enum [DyeColor](DyeColor.md)
#### Added enum [EntityLifetimeState](EntityLifetimeState.md)
#### Added enum [EquipmentSlot](EquipmentSlot.md)
#### Added enum [FluidType](FluidType.md)
#### Added enum [SignSide](SignSide.md)
#### Added enum [WatchdogTerminateReason](WatchdogTerminateReason.md)
#### Added enum [WeatherType](WeatherType.md)
#### Added constant [TicksPerDay](#ticksperday)
#### Added constant [TicksPerSecond](#tickspersecond)
## 1.4.0
#### Changed *[Block](Block.md)*
- Removed property *isWaterlogged*
- Changed type for *[permutation](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Removed property *type*
- Removed property *typeId*
- Removed function *canPlace*
- Changed function *[getComponent](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to [*BlockComponent*](BlockComponent.md) (throws exceptions)
- Removed function *getItemStack*
- Removed function *getRedstonePower*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *isAir*
- Removed function *isLiquid*
- Removed function *isSolid*
- Changed function *[setPermutation](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *setType*
- Removed function *trySetPermutation*
#### Removed *BlockAreaSize*
#### Removed *BlockBreakAfterEvent*
#### Removed *BlockBreakAfterEventSignal*
#### Removed *BlockExplodeAfterEvent*
#### Removed *BlockExplodeAfterEventSignal*
#### Removed *BlockLavaContainerComponent*
#### Removed *BlockLiquidContainerComponent*
#### Removed *BlockLocationIterator*
#### Changed *[BlockPermutation](BlockPermutation.md)*
- Removed property *type*
- Removed function *clone*
- Removed function *getAllStates*
- Removed function *getItemStack*
- Removed function *getState*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *withState*
#### Removed *BlockPistonComponent*
#### Removed *BlockPlaceAfterEvent*
#### Removed *BlockPlaceAfterEventSignal*
#### Removed *BlockPotionContainerComponent*
#### Removed *BlockRecordPlayerComponent*
#### Removed *BlockSignComponent*
#### Removed *BlockSnowContainerComponent*
#### Removed *BlockStates*
#### Removed *BlockStateType*
#### Removed *BlockType*
#### Removed *BlockVolumeUtils*
#### Removed *BlockWaterContainerComponent*
#### Removed *BoundingBoxUtils*
#### Removed *ChatSendAfterEvent*
#### Removed *ChatSendAfterEventSignal*
#### Removed *ChatSendBeforeEvent*
#### Removed *ChatSendBeforeEventSignal*
#### Changed *[Component](Component.md)*
- Added function *[isValid](Component.md#isvalid)*
#### Removed *CompoundBlockVolume*
#### Changed *[Container](Container.md)*
- Removed function *getSlot*
#### Removed *ContainerSlot*
#### Removed *DataDrivenEntityTriggerAfterEvent*
#### Removed *DataDrivenEntityTriggerAfterEventSignal*
#### Removed *DataDrivenEntityTriggerBeforeEvent*
#### Removed *DataDrivenEntityTriggerBeforeEventSignal*
#### Removed *DefinitionModifier*
#### Changed *[Dimension](Dimension.md)*
- Changed type for *[id](Dimension.md#id)* from *string* (throws exceptions) to *string*
- Removed function *createExplosion*
- Removed function *fillBlocks*
- Changed function *[getBlock](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Changed function *[getBlockFromRay](Dimension.md#getblockfromray)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*BlockRaycastHit*](BlockRaycastHit.md)
- Changed function *[getEntitiesFromRay](Dimension.md#getentitiesfromray)*
  - Changed return type from [*Entity*](Entity.md)[] (throws exceptions) to [*EntityRaycastHit*](EntityRaycastHit.md)[]
- Changed function *[runCommand](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setWeather*
- Changed function *[spawnEntity](Dimension.md#spawnentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Changed function *[spawnItem](Dimension.md#spawnitem)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Removed function *spawnParticle*
#### Removed *DynamicPropertiesDefinition*
#### Removed *EffectAddAfterEvent*
#### Removed *EffectAddAfterEventSignal*
#### Removed *EffectTypes*
#### Removed *Enchantment*
#### Removed *EnchantmentList*
#### Removed *EnchantmentSlot*
#### Removed *EnchantmentType*
#### Removed *EnchantmentTypes*
#### Changed *[Entity](Entity.md)*
- Removed property *fallDistance*
- Changed type for *[id](Entity.md#id)* from *string* (throws exceptions) to *string*
- Removed property *isClimbing*
- Removed property *isFalling*
- Removed property *isInWater*
- Removed property *isOnGround*
- Removed property *isSneaking*
- Removed property *isSprinting*
- Removed property *isSwimming*
- Removed property *lifetimeState*
- Changed type for *[scoreboardIdentity](Entity.md#scoreboardidentity)* from [*ScoreboardIdentity*](ScoreboardIdentity.md) (throws exceptions) to [*ScoreboardIdentity*](ScoreboardIdentity.md)
- Removed property *target*
- Changed type for *[typeId](Entity.md#typeid)* from *string* (throws exceptions) to *string*
- Removed function *extinguishFire*
- Changed function *[getBlockFromViewDirection](Entity.md#getblockfromviewdirection)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*BlockRaycastHit*](BlockRaycastHit.md) (throws exceptions)
- Removed function *getDynamicProperty*
- Changed function *[getEntitiesFromViewDirection](Entity.md#getentitiesfromviewdirection)*
  - Changed return type from [*Entity*](Entity.md)[] (throws exceptions) to [*EntityRaycastHit*](EntityRaycastHit.md)[] (throws exceptions)
- Removed function *getRotation*
- Added function *[isValid](Entity.md#isvalid)*
- Removed function *playAnimation*
- Removed function *removeDynamicProperty*
- Changed function *[runCommand](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setDynamicProperty*
- Removed function *setOnFire*
- Removed function *setRotation*
- Removed function *triggerEvent*
#### Removed *EntityAddRiderComponent*
#### Removed *EntityAgeableComponent*
#### Removed *EntityBreathableComponent*
#### Changed *[EntityComponent](EntityComponent.md)*
- Removed property *entity*
- Removed function *isValid*
#### Removed *EntityDefinitionFeedItem*
#### Changed *[EntityDieAfterEventSignal](EntityDieAfterEventSignal.md)*
- Removed base class *IEntityDieAfterEventSignal*
- Added function *[subscribe](EntityDieAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](EntityDieAfterEventSignal.md#unsubscribe)*
#### Removed *EntityEquipmentInventoryComponent*
#### Changed *[EntityHealthChangedAfterEventSignal](EntityHealthChangedAfterEventSignal.md)*
- Removed base class *IEntityHealthChangedAfterEventSignal*
- Added function *[subscribe](EntityHealthChangedAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](EntityHealthChangedAfterEventSignal.md#unsubscribe)*
#### Removed *EntityHitAfterEvent*
#### Removed *EntityHitAfterEventSignal*
#### Added *[EntityHitBlockAfterEvent](EntityHitBlockAfterEvent.md)*
#### Added *[EntityHitBlockAfterEventSignal](EntityHitBlockAfterEventSignal.md)*
#### Added *[EntityHitEntityAfterEvent](EntityHitEntityAfterEvent.md)*
#### Added *[EntityHitEntityAfterEventSignal](EntityHitEntityAfterEventSignal.md)*
#### Changed *[EntityHurtAfterEventSignal](EntityHurtAfterEventSignal.md)*
- Removed base class *IEntityHurtAfterEventSignal*
- Added function *[subscribe](EntityHurtAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](EntityHurtAfterEventSignal.md#unsubscribe)*
#### Removed *EntityIterator*
#### Removed *EntityLavaMovementComponent*
#### Removed *EntityLeashableComponent*
#### Removed *EntityMountTamingComponent*
#### Removed *EntityMovementComponent*
#### Removed *EntityMovementGlideComponent*
#### Removed *EntityMovementSwayComponent*
#### Removed *EntityNavigationClimbComponent*
#### Removed *EntityNavigationComponent*
#### Removed *EntityNavigationFloatComponent*
#### Removed *EntityNavigationFlyComponent*
#### Removed *EntityNavigationGenericComponent*
#### Removed *EntityNavigationHoverComponent*
#### Removed *EntityNavigationWalkComponent*
#### Removed *EntityOnFireComponent*
#### Removed *EntityRemovedAfterEvent*
#### Removed *EntityRemovedAfterEventSignal*
#### Removed *EntityRideableComponent*
#### Removed *EntityRidingComponent*
#### Removed *EntitySpawnAfterEvent*
#### Removed *EntitySpawnAfterEventSignal*
#### Removed *EntityStrengthComponent*
#### Removed *EntityTameableComponent*
#### Removed *EntityType*
#### Removed *EntityTypeIterator*
#### Removed *EntityTypes*
#### Removed *EntityUnderwaterMovementComponent*
#### Removed *ExplosionAfterEvent*
#### Removed *ExplosionAfterEventSignal*
#### Removed *ExplosionBeforeEvent*
#### Removed *ExplosionBeforeEventSignal*
#### Removed *FilterGroup*
#### Removed *FluidContainer*
#### Removed *IBlockBreakAfterEventSignal*
#### Removed *IBlockExplodeAfterEventSignal*
#### Removed *IBlockPlaceAfterEventSignal*
#### Removed *IChatSendAfterEventSignal*
#### Removed *IChatSendBeforeEventSignal*
#### Removed *IDataDrivenEntityTriggerAfterEventSignal*
#### Removed *IDataDrivenEntityTriggerBeforeEventSignal*
#### Removed *IEffectAddAfterEventSignal*
#### Removed *IEntityDieAfterEventSignal*
#### Removed *IEntityHealthChangedAfterEventSignal*
#### Removed *IEntityHitAfterEventSignal*
#### Removed *IEntityHurtAfterEventSignal*
#### Removed *IEntityRemovedAfterEventSignal*
#### Removed *IEntitySpawnAfterEventSignal*
#### Removed *IExplosionAfterEventSignal*
#### Removed *IExplosionBeforeEventSignal*
#### Removed *IItemCompleteUseAfterEventSignal*
#### Removed *IItemDefinitionAfterEventSignal*
#### Removed *IItemDefinitionBeforeEventSignal*
#### Removed *IItemReleaseUseAfterEventSignal*
#### Removed *IItemStartUseAfterEventSignal*
#### Removed *IItemStartUseOnAfterEventSignal*
#### Removed *IItemStopUseAfterEventSignal*
#### Removed *IItemStopUseOnAfterEventSignal*
#### Removed *IItemUseAfterEventSignal*
#### Removed *IItemUseBeforeEventSignal*
#### Removed *IItemUseOnAfterEventSignal*
#### Removed *IItemUseOnBeforeEventSignal*
#### Removed *IPistonActivateAfterEventSignal*
#### Removed *IPistonActivateBeforeEventSignal*
#### Removed *IPressurePlatePopAfterEventSignal*
#### Removed *IPressurePlatePushAfterEventSignal*
#### Removed *IProjectileHitAfterEventSignal*
#### Removed *IScriptEventCommandMessageAfterEventSignal*
#### Removed *IServerMessageAfterEventSignal*
#### Removed *ITargetBlockHitAfterEventSignal*
#### Changed *[ItemCompleteUseAfterEvent](ItemCompleteUseAfterEvent.md)*
- Changed type for *[source](ItemCompleteUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemCompleteUseAfterEventSignal](ItemCompleteUseAfterEventSignal.md)*
- Removed base class *IItemCompleteUseAfterEventSignal*
- Added function *[subscribe](ItemCompleteUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemCompleteUseAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemComponent](ItemComponent.md)*
- Removed function *isValid*
#### Removed *ItemCooldownComponent*
#### Removed *ItemDefinitionAfterEventSignal*
#### Removed *ItemDefinitionBeforeEventSignal*
#### Removed *ItemDefinitionTriggeredAfterEvent*
#### Removed *ItemDefinitionTriggeredBeforeEvent*
#### Removed *ItemDurabilityComponent*
#### Removed *ItemEnchantsComponent*
#### Removed *ItemFoodComponent*
#### Changed *[ItemReleaseUseAfterEvent](ItemReleaseUseAfterEvent.md)*
- Changed type for *[source](ItemReleaseUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemReleaseUseAfterEventSignal](ItemReleaseUseAfterEventSignal.md)*
- Removed base class *IItemReleaseUseAfterEventSignal*
- Added function *[subscribe](ItemReleaseUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemReleaseUseAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemStack](ItemStack.md)*
- Removed property *amount*
- Removed property *keepOnDeath*
- Removed property *lockMode*
- Removed property *nameTag*
- Removed function *clone*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *setCanDestroy*
- Removed function *setCanPlaceOn*
- Changed function *[setLore](ItemStack.md#setlore)*
  - Changed return type from *void* to *void* (throws exceptions)
- Removed function *triggerEvent*
#### Changed *[ItemStartUseAfterEvent](ItemStartUseAfterEvent.md)*
- Changed type for *[source](ItemStartUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemStartUseAfterEventSignal](ItemStartUseAfterEventSignal.md)*
- Removed base class *IItemStartUseAfterEventSignal*
- Added function *[subscribe](ItemStartUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemStartUseAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemStartUseOnAfterEvent](ItemStartUseOnAfterEvent.md)*
- Changed type for *[source](ItemStartUseOnAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemStartUseOnAfterEventSignal](ItemStartUseOnAfterEventSignal.md)*
- Removed base class *IItemStartUseOnAfterEventSignal*
- Added function *[subscribe](ItemStartUseOnAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemStartUseOnAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemStopUseAfterEvent](ItemStopUseAfterEvent.md)*
- Changed type for *[source](ItemStopUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemStopUseAfterEventSignal](ItemStopUseAfterEventSignal.md)*
- Removed base class *IItemStopUseAfterEventSignal*
- Added function *[subscribe](ItemStopUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemStopUseAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemStopUseOnAfterEvent](ItemStopUseOnAfterEvent.md)*
- Changed type for *[source](ItemStopUseOnAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemStopUseOnAfterEventSignal](ItemStopUseOnAfterEventSignal.md)*
- Removed base class *IItemStopUseOnAfterEventSignal*
- Added function *[subscribe](ItemStopUseOnAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemStopUseOnAfterEventSignal.md#unsubscribe)*
#### Removed *ItemTypeIterator*
#### Removed *ItemTypes*
#### Changed *[ItemUseAfterEvent](ItemUseAfterEvent.md)*
- Changed type for *[source](ItemUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemUseAfterEventSignal](ItemUseAfterEventSignal.md)*
- Removed base class *IItemUseAfterEventSignal*
- Added function *[subscribe](ItemUseAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemUseAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemUseBeforeEventSignal](ItemUseBeforeEventSignal.md)*
- Removed base class *IItemUseBeforeEventSignal*
- Added function *[subscribe](ItemUseBeforeEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemUseBeforeEventSignal.md#unsubscribe)*
#### Changed *[ItemUseOnAfterEvent](ItemUseOnAfterEvent.md)*
- Changed type for *[source](ItemUseOnAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[ItemUseOnAfterEventSignal](ItemUseOnAfterEventSignal.md)*
- Removed base class *IItemUseOnAfterEventSignal*
- Added function *[subscribe](ItemUseOnAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemUseOnAfterEventSignal.md#unsubscribe)*
#### Changed *[ItemUseOnBeforeEventSignal](ItemUseOnBeforeEventSignal.md)*
- Removed base class *IItemUseOnBeforeEventSignal*
- Added function *[subscribe](ItemUseOnBeforeEventSignal.md#subscribe)*
- Added function *[unsubscribe](ItemUseOnBeforeEventSignal.md#unsubscribe)*
#### Removed *ITripWireTripAfterEventSignal*
#### Removed *IWatchdogTerminateBeforeEventSignal*
#### Removed *IWeatherChangeAfterEventSignal*
#### Removed *IWorldInitializeAfterEventSignal*
#### Removed *MessageReceiveAfterEvent*
#### Removed *MinecraftBlockTypes*
#### Removed *MinecraftEntityTypes*
#### Removed *MinecraftItemTypes*
#### Removed *MolangVariableMap*
#### Removed *NavigationResult*
#### Removed *PistonActivateAfterEvent*
#### Removed *PistonActivateAfterEventSignal*
#### Removed *PistonActivateBeforeEvent*
#### Removed *PistonActivateBeforeEventSignal*
#### Changed *[Player](Player.md)*
- Removed property *isFlying*
- Removed property *isGliding*
- Removed property *isJumping*
- Removed property *level*
- Changed type for *[onScreenDisplay](Player.md#onscreendisplay)* from [*ScreenDisplay*](ScreenDisplay.md) to [*ScreenDisplay*](ScreenDisplay.md) (throws exceptions)
- Removed property *selectedSlot*
- Removed property *totalXpNeededForNextLevel*
- Removed property *xpEarnedAtCurrentLevel*
- Removed function *addExperience*
- Removed function *addLevels*
- Removed function *getItemCooldown*
- Removed function *getTotalXp*
- Removed function *isOp*
- Removed function *postClientMessage*
- Removed function *resetLevel*
- Removed function *setOp*
- Changed function *[setSpawnPoint](Player.md#setspawnpoint)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *startItemCooldown*
#### Removed *PlayerIterator*
#### Changed *[PressurePlatePopAfterEventSignal](PressurePlatePopAfterEventSignal.md)*
- Removed base class *IPressurePlatePopAfterEventSignal*
- Added function *[subscribe](PressurePlatePopAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](PressurePlatePopAfterEventSignal.md#unsubscribe)*
#### Changed *[PressurePlatePushAfterEventSignal](PressurePlatePushAfterEventSignal.md)*
- Removed base class *IPressurePlatePushAfterEventSignal*
- Added function *[subscribe](PressurePlatePushAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](PressurePlatePushAfterEventSignal.md#unsubscribe)*
#### Removed *ProjectileHitAfterEvent*
#### Removed *ProjectileHitAfterEventSignal*
#### Removed *PropertyRegistry*
#### Changed *[Scoreboard](Scoreboard.md)*
- Changed function *[clearObjectiveAtDisplaySlot](Scoreboard.md#clearobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md)
  - Changed argument `displaySlotId` type from *string* to [*DisplaySlotId*](DisplaySlotId.md)
- Changed function *[getObjective](Scoreboard.md#getobjective)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md)
- Changed function *[getObjectiveAtDisplaySlot](Scoreboard.md#getobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md) (throws exceptions) to [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md)
  - Changed argument `displaySlotId` type from *string* to [*DisplaySlotId*](DisplaySlotId.md)
- Changed function *[getObjectives](Scoreboard.md#getobjectives)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md)[] (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md)[]
- Changed function *[getParticipants](Scoreboard.md#getparticipants)*
  - Changed return type from [*ScoreboardIdentity*](ScoreboardIdentity.md)[] (throws exceptions) to [*ScoreboardIdentity*](ScoreboardIdentity.md)[]
- Removed function *getScore*
- Changed function *[setObjectiveAtDisplaySlot](Scoreboard.md#setobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions)
  - Changed argument `displaySlotId` type from *string* to [*DisplaySlotId*](DisplaySlotId.md)
- Removed function *setScore*
#### Changed *[ScoreboardIdentity](ScoreboardIdentity.md)*
- Changed function *[getEntity](ScoreboardIdentity.md#getentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Removed function *getScore*
- Removed function *removeFromObjective*
- Removed function *setScore*
#### Changed *[ScoreboardObjective](ScoreboardObjective.md)*
- Added function *[addScore](ScoreboardObjective.md#addscore)*
- Changed function *[getScore](ScoreboardObjective.md#getscore)*
  - Changed return type from *number* (throws exceptions) to *number* (throws exceptions)
  - Changed argument `participant` type from [*ScoreboardIdentity*](ScoreboardIdentity.md) to [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
- Added function *[hasParticipant](ScoreboardObjective.md#hasparticipant)*
- Changed function *[removeParticipant](ScoreboardObjective.md#removeparticipant)*
  - Changed argument `participant` type from [*ScoreboardIdentity*](ScoreboardIdentity.md) to [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
- Changed function *[setScore](ScoreboardObjective.md#setscore)*
  - Changed return type from *boolean* (throws exceptions) to *void* (throws exceptions)
  - Changed argument `participant` type from [*ScoreboardIdentity*](ScoreboardIdentity.md) to [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
#### Changed *[ScriptEventCommandMessageAfterEvent](ScriptEventCommandMessageAfterEvent.md)*
- Changed type for *[initiator](ScriptEventCommandMessageAfterEvent.md#initiator)* from [*Entity*](Entity.md) to [*Entity*](Entity.md)
- Changed type for *[sourceBlock](ScriptEventCommandMessageAfterEvent.md#sourceblock)* from [*Block*](Block.md) to [*Block*](Block.md)
- Changed type for *[sourceEntity](ScriptEventCommandMessageAfterEvent.md#sourceentity)* from [*Entity*](Entity.md) to [*Entity*](Entity.md)
#### Changed *[ScriptEventCommandMessageAfterEventSignal](ScriptEventCommandMessageAfterEventSignal.md)*
- Removed base class *IScriptEventCommandMessageAfterEventSignal*
- Added function *[subscribe](ScriptEventCommandMessageAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](ScriptEventCommandMessageAfterEventSignal.md#unsubscribe)*
#### Removed *Seat*
#### Removed *ServerMessageAfterEventSignal*
#### Changed *[System](System.md)*
- Removed property *beforeEvents*
#### Removed *SystemBeforeEvents*
#### Changed *[TargetBlockHitAfterEventSignal](TargetBlockHitAfterEventSignal.md)*
- Removed base class *ITargetBlockHitAfterEventSignal*
- Added function *[subscribe](TargetBlockHitAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](TargetBlockHitAfterEventSignal.md#unsubscribe)*
#### Removed *Trigger*
#### Changed *[TripWireTripAfterEventSignal](TripWireTripAfterEventSignal.md)*
- Removed base class *ITripWireTripAfterEventSignal*
- Added function *[subscribe](TripWireTripAfterEventSignal.md#subscribe)*
- Added function *[unsubscribe](TripWireTripAfterEventSignal.md#unsubscribe)*
#### Removed *Vector*
#### Removed *WatchdogTerminateBeforeEvent*
#### Removed *WatchdogTerminateBeforeEventSignal*
#### Removed *WeatherChangeAfterEvent*
#### Removed *WeatherChangeAfterEventSignal*
#### Changed *[World](World.md)*
- Removed function *broadcastClientMessage*
- Changed function *[getAbsoluteTime](World.md#getabsolutetime)*
  - Changed return type from *number* to *number*
- Added function *[getDay](World.md#getday)*
- Removed function *getDynamicProperty*
- Removed function *getEntity*
- Removed function *getTime*
- Added function *[getTimeOfDay](World.md#gettimeofday)*
- Removed function *removeDynamicProperty*
- Added function *[setAbsoluteTime](World.md#setabsolutetime)*
- Changed function *[setDefaultSpawnLocation](World.md#setdefaultspawnlocation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *setDynamicProperty*
- Removed function *setTime*
- Added function *[setTimeOfDay](World.md#settimeofday)*
#### Changed *[WorldAfterEvents](WorldAfterEvents.md)*
- Removed property *blockBreak*
- Removed property *blockExplode*
- Removed property *blockPlace*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *effectAdd*
- Removed property *entityHit*
- Added property *[entityHitBlock](WorldAfterEvents.md#entityhitblock)*
- Added property *[entityHitEntity](WorldAfterEvents.md#entityhitentity)*
- Removed property *entityRemoved*
- Removed property *entitySpawn*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Added property *[leverAction](WorldAfterEvents.md#leveraction)*
- Removed property *leverActivate*
- Removed property *messageReceive*
- Removed property *pistonActivate*
- Removed property *projectileHit*
- Removed property *weatherChange*
- Removed property *worldInitialize*
#### Changed *[WorldBeforeEvents](WorldBeforeEvents.md)*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Removed property *pistonActivate*
#### Removed *WorldInitializeAfterEvent*
#### Removed *WorldInitializeAfterEventSignal*
#### Removed enum BlockVolumeIntersection
#### Removed enum CompoundBlockVolumeAction
#### Changed enum Direction
- Removed value down
- Added value Down
- Removed value east
- Added value East
- Removed value north
- Added value North
- Removed value south
- Added value South
- Removed value up
- Added value Up
- Removed value west
- Added value West
#### Changed enum DisplaySlotId
- Removed value belowname
- Added value BelowName
- Removed value list
- Added value List
- Removed value sidebar
- Added value Sidebar
#### Removed enum DyeColor
#### Removed enum EntityLifetimeState
#### Removed enum EquipmentSlot
#### Removed enum FluidType
#### Changed enum ObjectiveSortOrder
- Removed value ascending
- Added value Ascending
- Removed value descending
- Added value Descending
#### Changed enum ScoreboardIdentityType
- Removed value entity
- Added value Entity
- Removed value fakePlayer
- Added value FakePlayer
- Removed value player
- Added value Player
#### Changed enum ScriptEventSource
- Removed value block
- Added value Block
- Removed value entity
- Added value Entity
- Removed value npcDialogue
- Added value NPCDialogue
- Removed value server
- Added value Server
#### Removed enum SignSide
#### Removed enum WatchdogTerminateReason
#### Removed enum WeatherType
#### Removed constant TicksPerDay
#### Removed constant TicksPerSecond
## 1.4.0-beta
#### Changed *[Block](Block.md)*
- Added property *[isWaterlogged](Block.md#iswaterlogged)*
- Changed type for *[permutation](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Added property *[type](Block.md#type)*
- Added property *[typeId](Block.md#typeid)*
- Added function *[canPlace](Block.md#canplace)*
- Changed function *[getComponent](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to [*BlockComponent*](BlockComponent.md) (throws exceptions)
- Added function *[getItemStack](Block.md#getitemstack)*
- Added function *[getRedstonePower](Block.md#getredstonepower)*
- Added function *[getTags](Block.md#gettags)*
- Added function *[hasTag](Block.md#hastag)*
- Added function *[isAir](Block.md#isair)*
- Added function *[isLiquid](Block.md#isliquid)*
- Added function *[isSolid](Block.md#issolid)*
- Added function *[isValid](Block.md#isvalid)*
- Changed function *[setPermutation](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Added function *[setType](Block.md#settype)*
- Added function *[trySetPermutation](Block.md#trysetpermutation)*
#### Added *[BlockAreaSize](BlockAreaSize.md)*
#### Added *[BlockBreakAfterEvent](BlockBreakAfterEvent.md)*
#### Added *[BlockBreakAfterEventSignal](BlockBreakAfterEventSignal.md)*
#### Added *[BlockExplodeAfterEvent](BlockExplodeAfterEvent.md)*
#### Added *[BlockExplodeAfterEventSignal](BlockExplodeAfterEventSignal.md)*
#### Added *[BlockLavaContainerComponent](BlockLavaContainerComponent.md)*
#### Added *[BlockLiquidContainerComponent](BlockLiquidContainerComponent.md)*
#### Added *[BlockLocationIterator](BlockLocationIterator.md)*
#### Changed *[BlockPermutation](BlockPermutation.md)*
- Added property *[type](BlockPermutation.md#type)*
- Added function *[clone](BlockPermutation.md#clone)*
- Added function *[getAllStates](BlockPermutation.md#getallstates)*
- Added function *[getItemStack](BlockPermutation.md#getitemstack)*
- Added function *[getState](BlockPermutation.md#getstate)*
- Added function *[getTags](BlockPermutation.md#gettags)*
- Added function *[hasTag](BlockPermutation.md#hastag)*
- Added function *[withState](BlockPermutation.md#withstate)*
#### Added *[BlockPistonComponent](BlockPistonComponent.md)*
#### Added *[BlockPlaceAfterEvent](BlockPlaceAfterEvent.md)*
#### Added *[BlockPlaceAfterEventSignal](BlockPlaceAfterEventSignal.md)*
#### Added *[BlockPotionContainerComponent](BlockPotionContainerComponent.md)*
#### Added *[BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)*
#### Added *[BlockSignComponent](BlockSignComponent.md)*
#### Added *[BlockSnowContainerComponent](BlockSnowContainerComponent.md)*
#### Added *[BlockStates](BlockStates.md)*
#### Added *[BlockStateType](BlockStateType.md)*
#### Added *[BlockType](BlockType.md)*
#### Added *[BlockVolumeUtils](BlockVolumeUtils.md)*
#### Added *[BlockWaterContainerComponent](BlockWaterContainerComponent.md)*
#### Added *[BoundingBoxUtils](BoundingBoxUtils.md)*
#### Added *[ChatSendAfterEvent](ChatSendAfterEvent.md)*
#### Added *[ChatSendAfterEventSignal](ChatSendAfterEventSignal.md)*
#### Added *[ChatSendBeforeEvent](ChatSendBeforeEvent.md)*
#### Added *[ChatSendBeforeEventSignal](ChatSendBeforeEventSignal.md)*
#### Added *[CompoundBlockVolume](CompoundBlockVolume.md)*
#### Changed *[Container](Container.md)*
- Added function *[getSlot](Container.md#getslot)*
- Added function *[isValid](Container.md#isvalid)*
#### Added *[ContainerSlot](ContainerSlot.md)*
#### Added *[DataDrivenEntityTriggerAfterEvent](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[DataDrivenEntityTriggerAfterEventSignal](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[DataDrivenEntityTriggerBeforeEvent](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[DataDrivenEntityTriggerBeforeEventSignal](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[DefinitionModifier](DefinitionModifier.md)*
#### Changed *[Dimension](Dimension.md)*
- Changed type for *[id](Dimension.md#id)* from *string* to *string* (throws exceptions)
- Added function *[createExplosion](Dimension.md#createexplosion)*
- Added function *[fillBlocks](Dimension.md#fillblocks)*
- Changed function *[getBlock](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Added function *[getBlockFromRay](Dimension.md#getblockfromray)*
- Added function *[getEntitiesFromRay](Dimension.md#getentitiesfromray)*
- Changed function *[runCommand](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[setWeather](Dimension.md#setweather)*
- Changed function *[spawnEntity](Dimension.md#spawnentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Changed function *[spawnItem](Dimension.md#spawnitem)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Added function *[spawnParticle](Dimension.md#spawnparticle)*
#### Added *[DynamicPropertiesDefinition](DynamicPropertiesDefinition.md)*
#### Added *[EffectAddAfterEvent](EffectAddAfterEvent.md)*
#### Added *[EffectAddAfterEventSignal](EffectAddAfterEventSignal.md)*
#### Added *[EffectTypes](EffectTypes.md)*
#### Added *[Enchantment](Enchantment.md)*
#### Added *[EnchantmentList](EnchantmentList.md)*
#### Added *[EnchantmentSlot](EnchantmentSlot.md)*
#### Added *[EnchantmentType](EnchantmentType.md)*
#### Added *[EnchantmentTypes](EnchantmentTypes.md)*
#### Changed *[Entity](Entity.md)*
- Added property *[fallDistance](Entity.md#falldistance)*
- Changed type for *[id](Entity.md#id)* from *string* to *string* (throws exceptions)
- Added property *[isClimbing](Entity.md#isclimbing)*
- Added property *[isFalling](Entity.md#isfalling)*
- Added property *[isInWater](Entity.md#isinwater)*
- Added property *[isOnGround](Entity.md#isonground)*
- Added property *[isSneaking](Entity.md#issneaking)*
- Added property *[isSprinting](Entity.md#issprinting)*
- Added property *[isSwimming](Entity.md#isswimming)*
- Added property *[lifetimeState](Entity.md#lifetimestate)*
- Added property *[scoreboardIdentity](Entity.md#scoreboardidentity)*
- Added property *[target](Entity.md#target)*
- Changed type for *[typeId](Entity.md#typeid)* from *string* to *string* (throws exceptions)
- Added function *[extinguishFire](Entity.md#extinguishfire)*
- Added function *[getBlockFromViewDirection](Entity.md#getblockfromviewdirection)*
- Added function *[getDynamicProperty](Entity.md#getdynamicproperty)*
- Added function *[getEntitiesFromViewDirection](Entity.md#getentitiesfromviewdirection)*
- Added function *[getRotation](Entity.md#getrotation)*
- Added function *[playAnimation](Entity.md#playanimation)*
- Added function *[removeDynamicProperty](Entity.md#removedynamicproperty)*
- Changed function *[runCommand](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[setDynamicProperty](Entity.md#setdynamicproperty)*
- Added function *[setOnFire](Entity.md#setonfire)*
- Added function *[setRotation](Entity.md#setrotation)*
- Added function *[triggerEvent](Entity.md#triggerevent)*
#### Added *[EntityAddRiderComponent](EntityAddRiderComponent.md)*
#### Added *[EntityAgeableComponent](EntityAgeableComponent.md)*
#### Added *[EntityBreathableComponent](EntityBreathableComponent.md)*
#### Changed *[EntityComponent](EntityComponent.md)*
- Added property *[entity](EntityComponent.md#entity)*
- Added function *[isValid](EntityComponent.md#isvalid)*
#### Added *[EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)*
#### Added *[EntityDieAfterEvent](EntityDieAfterEvent.md)*
#### Added *[EntityDieAfterEventSignal](EntityDieAfterEventSignal.md)*
#### Added *[EntityEquipmentInventoryComponent](EntityEquipmentInventoryComponent.md)*
#### Added *[EntityHealthChangedAfterEvent](EntityHealthChangedAfterEvent.md)*
#### Added *[EntityHealthChangedAfterEventSignal](EntityHealthChangedAfterEventSignal.md)*
#### Added *[EntityHitAfterEvent](EntityHitAfterEvent.md)*
#### Added *[EntityHitAfterEventSignal](EntityHitAfterEventSignal.md)*
#### Added *[EntityHurtAfterEvent](EntityHurtAfterEvent.md)*
#### Added *[EntityHurtAfterEventSignal](EntityHurtAfterEventSignal.md)*
#### Added *[EntityIterator](EntityIterator.md)*
#### Added *[EntityLavaMovementComponent](EntityLavaMovementComponent.md)*
#### Added *[EntityLeashableComponent](EntityLeashableComponent.md)*
#### Added *[EntityMountTamingComponent](EntityMountTamingComponent.md)*
#### Added *[EntityMovementComponent](EntityMovementComponent.md)*
#### Added *[EntityMovementGlideComponent](EntityMovementGlideComponent.md)*
#### Added *[EntityMovementSwayComponent](EntityMovementSwayComponent.md)*
#### Added *[EntityNavigationClimbComponent](EntityNavigationClimbComponent.md)*
#### Added *[EntityNavigationComponent](EntityNavigationComponent.md)*
#### Added *[EntityNavigationFloatComponent](EntityNavigationFloatComponent.md)*
#### Added *[EntityNavigationFlyComponent](EntityNavigationFlyComponent.md)*
#### Added *[EntityNavigationGenericComponent](EntityNavigationGenericComponent.md)*
#### Added *[EntityNavigationHoverComponent](EntityNavigationHoverComponent.md)*
#### Added *[EntityNavigationWalkComponent](EntityNavigationWalkComponent.md)*
#### Added *[EntityOnFireComponent](EntityOnFireComponent.md)*
#### Added *[EntityRemovedAfterEvent](EntityRemovedAfterEvent.md)*
#### Added *[EntityRemovedAfterEventSignal](EntityRemovedAfterEventSignal.md)*
#### Added *[EntityRideableComponent](EntityRideableComponent.md)*
#### Added *[EntityRidingComponent](EntityRidingComponent.md)*
#### Added *[EntitySpawnAfterEvent](EntitySpawnAfterEvent.md)*
#### Added *[EntitySpawnAfterEventSignal](EntitySpawnAfterEventSignal.md)*
#### Added *[EntityStrengthComponent](EntityStrengthComponent.md)*
#### Added *[EntityTameableComponent](EntityTameableComponent.md)*
#### Added *[EntityType](EntityType.md)*
#### Added *[EntityTypeIterator](EntityTypeIterator.md)*
#### Added *[EntityTypes](EntityTypes.md)*
#### Added *[EntityUnderwaterMovementComponent](EntityUnderwaterMovementComponent.md)*
#### Added *[ExplosionAfterEvent](ExplosionAfterEvent.md)*
#### Added *[ExplosionAfterEventSignal](ExplosionAfterEventSignal.md)*
#### Added *[ExplosionBeforeEvent](ExplosionBeforeEvent.md)*
#### Added *[ExplosionBeforeEventSignal](ExplosionBeforeEventSignal.md)*
#### Added *[FilterGroup](FilterGroup.md)*
#### Added *[FluidContainer](FluidContainer.md)*
#### Added *[IBlockBreakAfterEventSignal](IBlockBreakAfterEventSignal.md)*
#### Added *[IBlockExplodeAfterEventSignal](IBlockExplodeAfterEventSignal.md)*
#### Added *[IBlockPlaceAfterEventSignal](IBlockPlaceAfterEventSignal.md)*
#### Added *[IChatSendAfterEventSignal](IChatSendAfterEventSignal.md)*
#### Added *[IChatSendBeforeEventSignal](IChatSendBeforeEventSignal.md)*
#### Added *[IDataDrivenEntityTriggerAfterEventSignal](IDataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[IDataDrivenEntityTriggerBeforeEventSignal](IDataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[IEffectAddAfterEventSignal](IEffectAddAfterEventSignal.md)*
#### Added *[IEntityDieAfterEventSignal](IEntityDieAfterEventSignal.md)*
#### Added *[IEntityHealthChangedAfterEventSignal](IEntityHealthChangedAfterEventSignal.md)*
#### Added *[IEntityHitAfterEventSignal](IEntityHitAfterEventSignal.md)*
#### Added *[IEntityHurtAfterEventSignal](IEntityHurtAfterEventSignal.md)*
#### Added *[IEntityRemovedAfterEventSignal](IEntityRemovedAfterEventSignal.md)*
#### Added *[IEntitySpawnAfterEventSignal](IEntitySpawnAfterEventSignal.md)*
#### Added *[IExplosionAfterEventSignal](IExplosionAfterEventSignal.md)*
#### Added *[IExplosionBeforeEventSignal](IExplosionBeforeEventSignal.md)*
#### Added *[IItemCompleteUseAfterEventSignal](IItemCompleteUseAfterEventSignal.md)*
#### Added *[IItemDefinitionAfterEventSignal](IItemDefinitionAfterEventSignal.md)*
#### Added *[IItemDefinitionBeforeEventSignal](IItemDefinitionBeforeEventSignal.md)*
#### Added *[IItemReleaseUseAfterEventSignal](IItemReleaseUseAfterEventSignal.md)*
#### Added *[IItemStartUseAfterEventSignal](IItemStartUseAfterEventSignal.md)*
#### Added *[IItemStartUseOnAfterEventSignal](IItemStartUseOnAfterEventSignal.md)*
#### Added *[IItemStopUseAfterEventSignal](IItemStopUseAfterEventSignal.md)*
#### Added *[IItemStopUseOnAfterEventSignal](IItemStopUseOnAfterEventSignal.md)*
#### Added *[IItemUseAfterEventSignal](IItemUseAfterEventSignal.md)*
#### Added *[IItemUseBeforeEventSignal](IItemUseBeforeEventSignal.md)*
#### Added *[IItemUseOnAfterEventSignal](IItemUseOnAfterEventSignal.md)*
#### Added *[IItemUseOnBeforeEventSignal](IItemUseOnBeforeEventSignal.md)*
#### Added *[IPistonActivateAfterEventSignal](IPistonActivateAfterEventSignal.md)*
#### Added *[IPistonActivateBeforeEventSignal](IPistonActivateBeforeEventSignal.md)*
#### Added *[IPressurePlatePopAfterEventSignal](IPressurePlatePopAfterEventSignal.md)*
#### Added *[IPressurePlatePushAfterEventSignal](IPressurePlatePushAfterEventSignal.md)*
#### Added *[IProjectileHitAfterEventSignal](IProjectileHitAfterEventSignal.md)*
#### Added *[IScriptEventCommandMessageAfterEventSignal](IScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[IServerMessageAfterEventSignal](IServerMessageAfterEventSignal.md)*
#### Added *[ITargetBlockHitAfterEventSignal](ITargetBlockHitAfterEventSignal.md)*
#### Added *[ItemCompleteUseAfterEvent](ItemCompleteUseAfterEvent.md)*
#### Added *[ItemCompleteUseAfterEventSignal](ItemCompleteUseAfterEventSignal.md)*
#### Changed *[ItemComponent](ItemComponent.md)*
- Added function *[isValid](ItemComponent.md#isvalid)*
#### Added *[ItemCooldownComponent](ItemCooldownComponent.md)*
#### Added *[ItemDefinitionAfterEventSignal](ItemDefinitionAfterEventSignal.md)*
#### Added *[ItemDefinitionBeforeEventSignal](ItemDefinitionBeforeEventSignal.md)*
#### Added *[ItemDefinitionTriggeredAfterEvent](ItemDefinitionTriggeredAfterEvent.md)*
#### Added *[ItemDefinitionTriggeredBeforeEvent](ItemDefinitionTriggeredBeforeEvent.md)*
#### Added *[ItemDurabilityComponent](ItemDurabilityComponent.md)*
#### Added *[ItemEnchantsComponent](ItemEnchantsComponent.md)*
#### Added *[ItemFoodComponent](ItemFoodComponent.md)*
#### Added *[ItemReleaseUseAfterEvent](ItemReleaseUseAfterEvent.md)*
#### Added *[ItemReleaseUseAfterEventSignal](ItemReleaseUseAfterEventSignal.md)*
#### Changed *[ItemStack](ItemStack.md)*
- Changed read-only flag for *[amount](ItemStack.md#amount)* from `true` to `false`
- Changed read-only flag for *[keepOnDeath](ItemStack.md#keepondeath)* from `true` to `false`
- Changed read-only flag for *[lockMode](ItemStack.md#lockmode)* from `true` to `false`
- Changed read-only flag for *[nameTag](ItemStack.md#nametag)* from `true` to `false`
- Added function *[clone](ItemStack.md#clone)*
- Added function *[getLore](ItemStack.md#getlore)*
- Added function *[getTags](ItemStack.md#gettags)*
- Added function *[hasTag](ItemStack.md#hastag)*
- Added function *[setCanDestroy](ItemStack.md#setcandestroy)*
- Added function *[setCanPlaceOn](ItemStack.md#setcanplaceon)*
- Added function *[setLore](ItemStack.md#setlore)*
- Added function *[triggerEvent](ItemStack.md#triggerevent)*
#### Added *[ItemStartUseAfterEvent](ItemStartUseAfterEvent.md)*
#### Added *[ItemStartUseAfterEventSignal](ItemStartUseAfterEventSignal.md)*
#### Added *[ItemStartUseOnAfterEvent](ItemStartUseOnAfterEvent.md)*
#### Added *[ItemStartUseOnAfterEventSignal](ItemStartUseOnAfterEventSignal.md)*
#### Added *[ItemStopUseAfterEvent](ItemStopUseAfterEvent.md)*
#### Added *[ItemStopUseAfterEventSignal](ItemStopUseAfterEventSignal.md)*
#### Added *[ItemStopUseOnAfterEvent](ItemStopUseOnAfterEvent.md)*
#### Added *[ItemStopUseOnAfterEventSignal](ItemStopUseOnAfterEventSignal.md)*
#### Added *[ItemTypeIterator](ItemTypeIterator.md)*
#### Added *[ItemTypes](ItemTypes.md)*
#### Added *[ItemUseAfterEvent](ItemUseAfterEvent.md)*
#### Added *[ItemUseAfterEventSignal](ItemUseAfterEventSignal.md)*
#### Added *[ItemUseBeforeEvent](ItemUseBeforeEvent.md)*
#### Added *[ItemUseBeforeEventSignal](ItemUseBeforeEventSignal.md)*
#### Added *[ItemUseOnAfterEvent](ItemUseOnAfterEvent.md)*
#### Added *[ItemUseOnAfterEventSignal](ItemUseOnAfterEventSignal.md)*
#### Added *[ItemUseOnBeforeEvent](ItemUseOnBeforeEvent.md)*
#### Added *[ItemUseOnBeforeEventSignal](ItemUseOnBeforeEventSignal.md)*
#### Added *[ITripWireTripAfterEventSignal](ITripWireTripAfterEventSignal.md)*
#### Added *[IWatchdogTerminateBeforeEventSignal](IWatchdogTerminateBeforeEventSignal.md)*
#### Added *[IWeatherChangeAfterEventSignal](IWeatherChangeAfterEventSignal.md)*
#### Added *[IWorldInitializeAfterEventSignal](IWorldInitializeAfterEventSignal.md)*
#### Added *[MessageReceiveAfterEvent](MessageReceiveAfterEvent.md)*
#### Added *[MinecraftBlockTypes](MinecraftBlockTypes.md)*
#### Added *[MinecraftEntityTypes](MinecraftEntityTypes.md)*
#### Added *[MinecraftItemTypes](MinecraftItemTypes.md)*
#### Added *[MolangVariableMap](MolangVariableMap.md)*
#### Added *[NavigationResult](NavigationResult.md)*
#### Added *[PistonActivateAfterEvent](PistonActivateAfterEvent.md)*
#### Added *[PistonActivateAfterEventSignal](PistonActivateAfterEventSignal.md)*
#### Added *[PistonActivateBeforeEvent](PistonActivateBeforeEvent.md)*
#### Added *[PistonActivateBeforeEventSignal](PistonActivateBeforeEventSignal.md)*
#### Changed *[Player](Player.md)*
- Added property *[isFlying](Player.md#isflying)*
- Added property *[isGliding](Player.md#isgliding)*
- Added property *[isJumping](Player.md#isjumping)*
- Added property *[level](Player.md#level)*
- Added property *[onScreenDisplay](Player.md#onscreendisplay)*
- Added property *[selectedSlot](Player.md#selectedslot)*
- Added property *[totalXpNeededForNextLevel](Player.md#totalxpneededfornextlevel)*
- Added property *[xpEarnedAtCurrentLevel](Player.md#xpearnedatcurrentlevel)*
- Added function *[addExperience](Player.md#addexperience)*
- Added function *[addLevels](Player.md#addlevels)*
- Added function *[getItemCooldown](Player.md#getitemcooldown)*
- Added function *[getSpawnPoint](Player.md#getspawnpoint)*
- Added function *[getTotalXp](Player.md#gettotalxp)*
- Added function *[isOp](Player.md#isop)*
- Added function *[postClientMessage](Player.md#postclientmessage)*
- Added function *[resetLevel](Player.md#resetlevel)*
- Added function *[setOp](Player.md#setop)*
- Added function *[setSpawnPoint](Player.md#setspawnpoint)*
- Added function *[startItemCooldown](Player.md#startitemcooldown)*
#### Added *[PlayerIterator](PlayerIterator.md)*
#### Added *[PressurePlatePopAfterEvent](PressurePlatePopAfterEvent.md)*
#### Added *[PressurePlatePopAfterEventSignal](PressurePlatePopAfterEventSignal.md)*
#### Added *[PressurePlatePushAfterEvent](PressurePlatePushAfterEvent.md)*
#### Added *[PressurePlatePushAfterEventSignal](PressurePlatePushAfterEventSignal.md)*
#### Added *[ProjectileHitAfterEvent](ProjectileHitAfterEvent.md)*
#### Added *[ProjectileHitAfterEventSignal](ProjectileHitAfterEventSignal.md)*
#### Added *[PropertyRegistry](PropertyRegistry.md)*
#### Added *[Scoreboard](Scoreboard.md)*
#### Added *[ScoreboardIdentity](ScoreboardIdentity.md)*
#### Added *[ScoreboardObjective](ScoreboardObjective.md)*
#### Added *[ScoreboardScoreInfo](ScoreboardScoreInfo.md)*
#### Added *[ScreenDisplay](ScreenDisplay.md)*
#### Added *[ScriptEventCommandMessageAfterEvent](ScriptEventCommandMessageAfterEvent.md)*
#### Added *[ScriptEventCommandMessageAfterEventSignal](ScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[Seat](Seat.md)*
#### Added *[ServerMessageAfterEventSignal](ServerMessageAfterEventSignal.md)*
#### Changed *[System](System.md)*
- Added property *[afterEvents](System.md#afterevents)*
- Added property *[beforeEvents](System.md#beforeevents)*
#### Added *[SystemAfterEvents](SystemAfterEvents.md)*
#### Added *[SystemBeforeEvents](SystemBeforeEvents.md)*
#### Added *[TargetBlockHitAfterEvent](TargetBlockHitAfterEvent.md)*
#### Added *[TargetBlockHitAfterEventSignal](TargetBlockHitAfterEventSignal.md)*
#### Added *[Trigger](Trigger.md)*
#### Added *[TripWireTripAfterEvent](TripWireTripAfterEvent.md)*
#### Added *[TripWireTripAfterEventSignal](TripWireTripAfterEventSignal.md)*
#### Added *[Vector](Vector.md)*
#### Added *[WatchdogTerminateBeforeEvent](WatchdogTerminateBeforeEvent.md)*
#### Added *[WatchdogTerminateBeforeEventSignal](WatchdogTerminateBeforeEventSignal.md)*
#### Added *[WeatherChangeAfterEvent](WeatherChangeAfterEvent.md)*
#### Added *[WeatherChangeAfterEventSignal](WeatherChangeAfterEventSignal.md)*
#### Changed *[World](World.md)*
- Added property *[afterEvents](World.md#afterevents)*
- Added property *[beforeEvents](World.md#beforeevents)*
- Added property *[scoreboard](World.md#scoreboard)*
- Added function *[broadcastClientMessage](World.md#broadcastclientmessage)*
- Added function *[getAbsoluteTime](World.md#getabsolutetime)*
- Added function *[getDefaultSpawnLocation](World.md#getdefaultspawnlocation)*
- Added function *[getDynamicProperty](World.md#getdynamicproperty)*
- Added function *[getEntity](World.md#getentity)*
- Added function *[getTime](World.md#gettime)*
- Added function *[removeDynamicProperty](World.md#removedynamicproperty)*
- Added function *[setDefaultSpawnLocation](World.md#setdefaultspawnlocation)*
- Added function *[setDynamicProperty](World.md#setdynamicproperty)*
- Added function *[setTime](World.md#settime)*
#### Changed *[WorldAfterEvents](WorldAfterEvents.md)*
- Added property *[blockBreak](WorldAfterEvents.md#blockbreak)*
- Added property *[blockExplode](WorldAfterEvents.md#blockexplode)*
- Added property *[blockPlace](WorldAfterEvents.md#blockplace)*
- Added property *[chatSend](WorldAfterEvents.md#chatsend)*
- Added property *[dataDrivenEntityTriggerEvent](WorldAfterEvents.md#datadrivenentitytriggerevent)*
- Added property *[effectAdd](WorldAfterEvents.md#effectadd)*
- Added property *[entityDie](WorldAfterEvents.md#entitydie)*
- Added property *[entityHealthChanged](WorldAfterEvents.md#entityhealthchanged)*
- Added property *[entityHit](WorldAfterEvents.md#entityhit)*
- Added property *[entityHurt](WorldAfterEvents.md#entityhurt)*
- Added property *[entityRemoved](WorldAfterEvents.md#entityremoved)*
- Added property *[entitySpawn](WorldAfterEvents.md#entityspawn)*
- Added property *[explosion](WorldAfterEvents.md#explosion)*
- Added property *[itemCompleteUse](WorldAfterEvents.md#itemcompleteuse)*
- Added property *[itemDefinitionEvent](WorldAfterEvents.md#itemdefinitionevent)*
- Added property *[itemReleaseUse](WorldAfterEvents.md#itemreleaseuse)*
- Added property *[itemStartUse](WorldAfterEvents.md#itemstartuse)*
- Added property *[itemStartUseOn](WorldAfterEvents.md#itemstartuseon)*
- Added property *[itemStopUse](WorldAfterEvents.md#itemstopuse)*
- Added property *[itemStopUseOn](WorldAfterEvents.md#itemstopuseon)*
- Added property *[itemUse](WorldAfterEvents.md#itemuse)*
- Added property *[itemUseOn](WorldAfterEvents.md#itemuseon)*
- Removed property *leverAction*
- Added property *[leverActivate](WorldAfterEvents.md#leveractivate)*
- Added property *[messageReceive](WorldAfterEvents.md#messagereceive)*
- Added property *[pistonActivate](WorldAfterEvents.md#pistonactivate)*
- Added property *[pressurePlatePop](WorldAfterEvents.md#pressureplatepop)*
- Added property *[pressurePlatePush](WorldAfterEvents.md#pressureplatepush)*
- Added property *[projectileHit](WorldAfterEvents.md#projectilehit)*
- Added property *[targetBlockHit](WorldAfterEvents.md#targetblockhit)*
- Added property *[tripWireTrip](WorldAfterEvents.md#tripwiretrip)*
- Added property *[weatherChange](WorldAfterEvents.md#weatherchange)*
- Added property *[worldInitialize](WorldAfterEvents.md#worldinitialize)*
#### Added *[WorldBeforeEvents](WorldBeforeEvents.md)*
#### Added *[WorldInitializeAfterEvent](WorldInitializeAfterEvent.md)*
#### Added *[WorldInitializeAfterEventSignal](WorldInitializeAfterEventSignal.md)*
#### Added enum [BlockVolumeIntersection](BlockVolumeIntersection.md)
#### Added enum [CompoundBlockVolumeAction](CompoundBlockVolumeAction.md)
#### Added enum [Direction](Direction.md)
#### Added enum [DisplaySlotId](DisplaySlotId.md)
#### Added enum [DyeColor](DyeColor.md)
#### Added enum [EntityLifetimeState](EntityLifetimeState.md)
#### Added enum [EquipmentSlot](EquipmentSlot.md)
#### Added enum [FluidType](FluidType.md)
#### Added enum [ObjectiveSortOrder](ObjectiveSortOrder.md)
#### Added enum [ScoreboardIdentityType](ScoreboardIdentityType.md)
#### Added enum [ScriptEventSource](ScriptEventSource.md)
#### Added enum [SignSide](SignSide.md)
#### Added enum [TimeOfDay](TimeOfDay.md)
#### Added enum [WatchdogTerminateReason](WatchdogTerminateReason.md)
#### Added enum [WeatherType](WeatherType.md)
#### Added constant [TicksPerDay](#ticksperday)
#### Added constant [TicksPerSecond](#tickspersecond)
## 1.3.0
#### Removed *AfterEvents*
#### Removed *BeforeEvents*
#### Changed *[Block](Block.md)*
- Removed property *isWaterlogged*
- Changed type for *[permutation](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Removed property *type*
- Removed property *typeId*
- Removed function *canPlace*
- Changed function *[getComponent](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to [*BlockComponent*](BlockComponent.md) (throws exceptions)
- Removed function *getItemStack*
- Removed function *getRedstonePower*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *isAir*
- Removed function *isLiquid*
- Removed function *isSolid*
- Changed function *[setPermutation](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *setType*
- Removed function *trySetPermutation*
#### Removed *BlockAreaSize*
#### Removed *BlockBreakAfterEvent*
#### Removed *BlockBreakAfterEventSignal*
#### Removed *BlockExplodeAfterEvent*
#### Removed *BlockExplodeAfterEventSignal*
#### Removed *BlockLavaContainerComponent*
#### Removed *BlockLiquidContainerComponent*
#### Removed *BlockLocationIterator*
#### Changed *[BlockPermutation](BlockPermutation.md)*
- Removed property *type*
- Removed function *clone*
- Removed function *getAllStates*
- Removed function *getItemStack*
- Removed function *getState*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *withState*
#### Removed *BlockPistonComponent*
#### Removed *BlockPlaceAfterEvent*
#### Removed *BlockPlaceAfterEventSignal*
#### Removed *BlockPotionContainerComponent*
#### Removed *BlockRecordPlayerComponent*
#### Removed *BlockSignComponent*
#### Removed *BlockSnowContainerComponent*
#### Removed *BlockStates*
#### Removed *BlockStateType*
#### Removed *BlockType*
#### Removed *BlockVolumeUtils*
#### Removed *BlockWaterContainerComponent*
#### Removed *BoundingBoxUtils*
#### Removed *ChatSendAfterEvent*
#### Removed *ChatSendAfterEventSignal*
#### Removed *ChatSendBeforeEvent*
#### Removed *ChatSendBeforeEventSignal*
#### Removed *CompoundBlockVolume*
#### Changed *[Container](Container.md)*
- Removed function *getSlot*
#### Removed *ContainerSlot*
#### Removed *DataDrivenEntityTriggerAfterEvent*
#### Removed *DataDrivenEntityTriggerAfterEventSignal*
#### Removed *DataDrivenEntityTriggerBeforeEvent*
#### Removed *DataDrivenEntityTriggerBeforeEventSignal*
#### Removed *DefinitionModifier*
#### Changed *[Dimension](Dimension.md)*
- Changed type for *[id](Dimension.md#id)* from *string* (throws exceptions) to *string*
- Removed function *createExplosion*
- Removed function *fillBlocks*
- Changed function *[getBlock](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Removed function *getBlockFromRay*
- Removed function *getEntitiesFromRay*
- Changed function *[runCommand](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setWeather*
- Changed function *[spawnEntity](Dimension.md#spawnentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Changed function *[spawnItem](Dimension.md#spawnitem)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Removed function *spawnParticle*
#### Removed *DynamicPropertiesDefinition*
#### Changed *[Effect](Effect.md)*
- Added property *[typeId](Effect.md#typeid)*
- Added function *[isValid](Effect.md#isvalid)*
#### Removed *EffectAddAfterEvent*
#### Removed *EffectAddAfterEventSignal*
#### Removed *Enchantment*
#### Removed *EnchantmentList*
#### Removed *EnchantmentSlot*
#### Removed *EnchantmentType*
#### Removed *EnchantmentTypes*
#### Changed *[Entity](Entity.md)*
- Changed type for *[id](Entity.md#id)* from *string* (throws exceptions) to *string*
- Removed property *isSneaking*
- Removed property *lifetimeState*
- Removed property *scoreboardIdentity*
- Removed property *target*
- Changed type for *[typeId](Entity.md#typeid)* from *string* (throws exceptions) to *string*
- Changed function *[addEffect](Entity.md#addeffect)*
  - Changed argument `effectType` type from [*EffectType*](EffectType.md) to [*EffectType*](EffectType.md) | *string*
  - Added argument `options`
  - Removed argument `amplifier`
  - Removed argument `showParticles`
- Changed function *[applyDamage](Entity.md#applydamage)*
  - Changed argument `amount` type from *number* to *number*
- Removed function *extinguishFire*
- Removed function *getBlockFromViewDirection*
- Changed function *[getComponent](Entity.md#getcomponent)*
  - Changed return type from [*EntityComponent*](EntityComponent.md) to [*EntityComponent*](EntityComponent.md)
- Removed function *getDynamicProperty*
- Changed function *[getEffect](Entity.md#geteffect)*
  - Changed return type from [*Effect*](Effect.md) (throws exceptions) to [*Effect*](Effect.md) (throws exceptions)
  - Changed argument `effectType` type from [*EffectType*](EffectType.md) to [*EffectType*](EffectType.md) | *string*
- Removed function *getEntitiesFromViewDirection*
- Removed function *getRotation*
- Removed function *playAnimation*
- Removed function *removeDynamicProperty*
- Added function *[removeEffect](Entity.md#removeeffect)*
- Changed function *[runCommand](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setDynamicProperty*
- Removed function *setOnFire*
- Removed function *setRotation*
- Removed function *triggerEvent*
#### Removed *EntityAddRiderComponent*
#### Removed *EntityAgeableComponent*
#### Changed *[EntityAttributeComponent](EntityAttributeComponent.md)*
- Removed property *current*
- Added property *[currentValue](EntityAttributeComponent.md#currentvalue)*
- Added property *[defaultValue](EntityAttributeComponent.md#defaultvalue)*
- Added property *[effectiveMax](EntityAttributeComponent.md#effectivemax)*
- Added property *[effectiveMin](EntityAttributeComponent.md#effectivemin)*
- Removed property *value*
- Removed function *setCurrent*
- Added function *[setCurrentValue](EntityAttributeComponent.md#setcurrentvalue)*
#### Removed *EntityBreathableComponent*
#### Changed *[EntityComponent](EntityComponent.md)*
- Removed property *entity*
#### Removed *EntityDefinitionFeedItem*
#### Removed *EntityDieAfterEvent*
#### Removed *EntityDieAfterEventSignal*
#### Removed *EntityEquipmentInventoryComponent*
#### Changed *[EntityHealableComponent](EntityHealableComponent.md)*
- Removed property *filters*
#### Removed *EntityHitAfterEvent*
#### Removed *EntityHitAfterEventSignal*
#### Removed *EntityHurtAfterEvent*
#### Removed *EntityHurtAfterEventSignal*
#### Removed *EntityIsDyableComponent*
#### Added *[EntityIsDyeableComponent](EntityIsDyeableComponent.md)*
#### Removed *EntityIterator*
#### Removed *EntityLavaMovementComponent*
#### Removed *EntityLeashableComponent*
#### Removed *EntityMountTamingComponent*
#### Changed *[EntityMovementAmphibiousComponent](EntityMovementAmphibiousComponent.md)*
- Added base class [*EntityBaseMovementComponent*](EntityBaseMovementComponent.md)
- Removed base class *EntityComponent*
- Removed property *maxTurn*
#### Changed *[EntityMovementBasicComponent](EntityMovementBasicComponent.md)*
- Added base class [*EntityBaseMovementComponent*](EntityBaseMovementComponent.md)
- Removed base class *EntityComponent*
- Removed property *maxTurn*
#### Removed *EntityMovementComponent*
#### Removed *EntityMovementGlideComponent*
#### Removed *EntityMovementSwayComponent*
#### Removed *EntityNavigationClimbComponent*
#### Removed *EntityNavigationComponent*
#### Removed *EntityNavigationFloatComponent*
#### Removed *EntityNavigationFlyComponent*
#### Removed *EntityNavigationGenericComponent*
#### Removed *EntityNavigationHoverComponent*
#### Removed *EntityNavigationWalkComponent*
#### Removed *EntityOnFireComponent*
#### Removed *EntityRideableComponent*
#### Removed *EntityRidingComponent*
#### Removed *EntitySpawnAfterEvent*
#### Removed *EntitySpawnAfterEventSignal*
#### Removed *EntityStrengthComponent*
#### Removed *EntityTameableComponent*
#### Removed *EntityType*
#### Removed *EntityTypeIterator*
#### Removed *EntityTypes*
#### Removed *EntityUnderwaterMovementComponent*
#### Removed *ExplosionAfterEvent*
#### Removed *ExplosionAfterEventSignal*
#### Removed *ExplosionBeforeEvent*
#### Removed *ExplosionBeforeEventSignal*
#### Removed *FilterGroup*
#### Removed *FluidContainer*
#### Removed *IBlockBreakAfterEventSignal*
#### Removed *IBlockExplodeAfterEventSignal*
#### Removed *IBlockPlaceAfterEventSignal*
#### Removed *IChatSendAfterEventSignal*
#### Removed *IChatSendBeforeEventSignal*
#### Removed *IDataDrivenEntityTriggerAfterEventSignal*
#### Removed *IDataDrivenEntityTriggerBeforeEventSignal*
#### Removed *IEffectAddAfterEventSignal*
#### Removed *IEntityDieAfterEventSignal*
#### Removed *IEntityHitAfterEventSignal*
#### Removed *IEntityHurtAfterEventSignal*
#### Removed *IEntitySpawnAfterEventSignal*
#### Removed *IExplosionAfterEventSignal*
#### Removed *IExplosionBeforeEventSignal*
#### Removed *IItemCompleteChargeAfterEventSignal*
#### Removed *IItemDefinitionAfterEventSignal*
#### Removed *IItemDefinitionBeforeEventSignal*
#### Removed *IItemReleaseChargeAfterEventSignal*
#### Removed *IItemStartChargeAfterEventSignal*
#### Removed *IItemStartUseOnAfterEventSignal*
#### Removed *IItemStopChargeAfterEventSignal*
#### Removed *IItemStopUseOnAfterEventSignal*
#### Removed *IItemUseAfterEventSignal*
#### Removed *IItemUseBeforeEventSignal*
#### Removed *IItemUseOnAfterEventSignal*
#### Removed *IItemUseOnBeforeEventSignal*
#### Removed *IPistonActivateAfterEventSignal*
#### Removed *IPistonActivateBeforeEventSignal*
#### Removed *IProjectileHitAfterEventSignal*
#### Removed *IScriptEventCommandMessageAfterEventSignal*
#### Removed *IServerMessageAfterEventSignal*
#### Removed *ItemCompleteChargeAfterEvent*
#### Removed *ItemCompleteChargeAfterEventSignal*
#### Removed *ItemCooldownComponent*
#### Removed *ItemDefinitionAfterEventSignal*
#### Removed *ItemDefinitionBeforeEventSignal*
#### Removed *ItemDefinitionTriggeredAfterEvent*
#### Removed *ItemDefinitionTriggeredBeforeEvent*
#### Removed *ItemDurabilityComponent*
#### Removed *ItemEnchantsComponent*
#### Removed *ItemFoodComponent*
#### Removed *ItemReleaseChargeAfterEvent*
#### Removed *ItemReleaseChargeAfterEventSignal*
#### Changed *[ItemStack](ItemStack.md)*
- Changed read-only flag for *[amount](ItemStack.md#amount)* from `false` to `true`
- Changed read-only flag for *[keepOnDeath](ItemStack.md#keepondeath)* from `false` to `true`
- Changed read-only flag for *[lockMode](ItemStack.md#lockmode)* from `false` to `true`
- Changed read-only flag for *[nameTag](ItemStack.md#nametag)* from `false` to `true`
- Removed function *clone*
- Removed function *getLore*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *setCanDestroy*
- Removed function *setCanPlaceOn*
- Removed function *setLore*
- Removed function *triggerEvent*
#### Removed *ItemStartChargeAfterEvent*
#### Removed *ItemStartChargeAfterEventSignal*
#### Removed *ItemStartUseOnAfterEvent*
#### Removed *ItemStartUseOnAfterEventSignal*
#### Removed *ItemStopChargeAfterEvent*
#### Removed *ItemStopChargeAfterEventSignal*
#### Removed *ItemStopUseOnAfterEvent*
#### Removed *ItemStopUseOnAfterEventSignal*
#### Removed *ItemTypeIterator*
#### Removed *ItemTypes*
#### Removed *ItemUseAfterEvent*
#### Removed *ItemUseAfterEventSignal*
#### Removed *ItemUseBeforeEvent*
#### Removed *ItemUseBeforeEventSignal*
#### Removed *ItemUseOnAfterEvent*
#### Removed *ItemUseOnAfterEventSignal*
#### Removed *ItemUseOnBeforeEvent*
#### Removed *ItemUseOnBeforeEventSignal*
#### Removed *IWatchdogTerminateBeforeEventSignal*
#### Removed *IWeatherChangeAfterEventSignal*
#### Removed *IWorldInitializeAfterEventSignal*
#### Removed *MessageReceiveAfterEvent*
#### Removed *MinecraftBlockTypes*
#### Removed *MinecraftEffectTypes*
#### Removed *MinecraftEntityTypes*
#### Removed *MinecraftItemTypes*
#### Removed *MolangVariableMap*
#### Removed *NavigationResult*
#### Removed *PistonActivateAfterEvent*
#### Removed *PistonActivateAfterEventSignal*
#### Removed *PistonActivateBeforeEvent*
#### Removed *PistonActivateBeforeEventSignal*
#### Changed *[Player](Player.md)*
- Removed property *level*
- Removed property *onScreenDisplay*
- Removed property *selectedSlot*
- Removed property *spawnDimension*
- Removed property *totalXpNeededForNextLevel*
- Removed property *xpEarnedAtCurrentLevel*
- Removed function *addExperience*
- Removed function *addLevels*
- Removed function *clearSpawn*
- Removed function *getItemCooldown*
- Removed function *getSpawnPosition*
- Removed function *getTotalXp*
- Removed function *isOp*
- Removed function *postClientMessage*
- Removed function *resetLevel*
- Removed function *setOp*
- Removed function *setSpawn*
- Removed function *startItemCooldown*
#### Removed *PlayerIterator*
#### Removed *ProjectileHitAfterEvent*
#### Removed *ProjectileHitAfterEventSignal*
#### Removed *PropertyRegistry*
#### Removed *Scoreboard*
#### Removed *ScoreboardIdentity*
#### Removed *ScoreboardObjective*
#### Removed *ScoreboardScoreInfo*
#### Removed *ScreenDisplay*
#### Removed *ScriptEventCommandMessageAfterEvent*
#### Removed *ScriptEventCommandMessageAfterEventSignal*
#### Removed *Seat*
#### Removed *ServerMessageAfterEventSignal*
#### Changed *[System](System.md)*
- Removed property *events*
#### Removed *SystemEvents*
#### Removed *Trigger*
#### Removed *Vector*
#### Removed *WatchdogTerminateBeforeEvent*
#### Removed *WatchdogTerminateBeforeEventSignal*
#### Removed *WeatherChangeAfterEvent*
#### Removed *WeatherChangeAfterEventSignal*
#### Changed *[World](World.md)*
- Removed property *afterEvents*
- Removed property *beforeEvents*
- Removed property *scoreboard*
- Removed function *broadcastClientMessage*
- Removed function *getAbsoluteTime*
- Removed function *getDefaultSpawnPosition*
- Removed function *getDynamicProperty*
- Removed function *getEntity*
- Removed function *getTime*
- Removed function *removeDynamicProperty*
- Removed function *setDefaultSpawn*
- Removed function *setDynamicProperty*
- Removed function *setTime*
#### Added *[WorldAfterEvents](WorldAfterEvents.md)*
#### Removed *WorldInitializeAfterEvent*
#### Removed *WorldInitializeAfterEventSignal*
#### Removed enum BlockVolumeIntersection
#### Removed enum CompoundBlockVolumeAction
#### Removed enum Direction
#### Removed enum DisplaySlotId
#### Removed enum DyeColor
#### Removed enum EntityLifetimeState
#### Removed enum EquipmentSlot
#### Removed enum FluidType
#### Removed enum MessageSourceType
#### Removed enum ObjectiveSortOrder
#### Removed enum ScoreboardIdentityType
#### Removed enum SignSide
#### Removed enum TimeOfDay
#### Removed enum WatchdogTerminateReason
#### Removed enum WeatherType
#### Removed constant TicksPerDay
#### Removed constant TicksPerSecond
## 1.3.0-beta
#### Added *[AfterEvents](AfterEvents.md)*
#### Added *[BeforeEvents](BeforeEvents.md)*
#### Changed *[Block](Block.md)*
- Added property *[isWaterlogged](Block.md#iswaterlogged)*
- Changed type for *[permutation](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Added property *[type](Block.md#type)*
- Added property *[typeId](Block.md#typeid)*
- Added function *[canPlace](Block.md#canplace)*
- Added function *[getComponent](Block.md#getcomponent)*
- Added function *[getItemStack](Block.md#getitemstack)*
- Added function *[getRedstonePower](Block.md#getredstonepower)*
- Added function *[getTags](Block.md#gettags)*
- Added function *[hasTag](Block.md#hastag)*
- Added function *[isAir](Block.md#isair)*
- Added function *[isLiquid](Block.md#isliquid)*
- Added function *[isSolid](Block.md#issolid)*
- Changed function *[setPermutation](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Added function *[setType](Block.md#settype)*
- Added function *[trySetPermutation](Block.md#trysetpermutation)*
#### Added *[BlockAreaSize](BlockAreaSize.md)*
#### Added *[BlockBreakAfterEvent](BlockBreakAfterEvent.md)*
#### Added *[BlockBreakAfterEventSignal](BlockBreakAfterEventSignal.md)*
#### Changed *[BlockComponent](BlockComponent.md)*
- Added property *[block](BlockComponent.md#block)*
#### Added *[BlockEvent](BlockEvent.md)*
#### Added *[BlockExplodeAfterEvent](BlockExplodeAfterEvent.md)*
#### Added *[BlockExplodeAfterEventSignal](BlockExplodeAfterEventSignal.md)*
#### Added *[BlockLavaContainerComponent](BlockLavaContainerComponent.md)*
#### Added *[BlockLiquidContainerComponent](BlockLiquidContainerComponent.md)*
#### Added *[BlockLocationIterator](BlockLocationIterator.md)*
#### Changed *[BlockPermutation](BlockPermutation.md)*
- Added property *[type](BlockPermutation.md#type)*
- Added function *[clone](BlockPermutation.md#clone)*
- Added function *[getAllStates](BlockPermutation.md#getallstates)*
- Added function *[getItemStack](BlockPermutation.md#getitemstack)*
- Added function *[getState](BlockPermutation.md#getstate)*
- Added function *[getTags](BlockPermutation.md#gettags)*
- Added function *[hasTag](BlockPermutation.md#hastag)*
- Added function *[withState](BlockPermutation.md#withstate)*
#### Added *[BlockPistonComponent](BlockPistonComponent.md)*
#### Added *[BlockPlaceAfterEvent](BlockPlaceAfterEvent.md)*
#### Added *[BlockPlaceAfterEventSignal](BlockPlaceAfterEventSignal.md)*
#### Added *[BlockPotionContainerComponent](BlockPotionContainerComponent.md)*
#### Added *[BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)*
#### Added *[BlockSignComponent](BlockSignComponent.md)*
#### Added *[BlockSnowContainerComponent](BlockSnowContainerComponent.md)*
#### Added *[BlockStates](BlockStates.md)*
#### Added *[BlockStateType](BlockStateType.md)*
#### Added *[BlockType](BlockType.md)*
#### Added *[BlockVolumeUtils](BlockVolumeUtils.md)*
#### Added *[BlockWaterContainerComponent](BlockWaterContainerComponent.md)*
#### Added *[BoundingBoxUtils](BoundingBoxUtils.md)*
#### Added *[ButtonPushAfterEvent](ButtonPushAfterEvent.md)*
#### Added *[ButtonPushAfterEventSignal](ButtonPushAfterEventSignal.md)*
#### Added *[ChatSendAfterEvent](ChatSendAfterEvent.md)*
#### Added *[ChatSendAfterEventSignal](ChatSendAfterEventSignal.md)*
#### Added *[ChatSendBeforeEvent](ChatSendBeforeEvent.md)*
#### Added *[ChatSendBeforeEventSignal](ChatSendBeforeEventSignal.md)*
#### Added *[CompoundBlockVolume](CompoundBlockVolume.md)*
#### Changed *[Container](Container.md)*
- Added function *[getSlot](Container.md#getslot)*
#### Added *[ContainerSlot](ContainerSlot.md)*
#### Added *[DataDrivenEntityTriggerAfterEvent](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[DataDrivenEntityTriggerAfterEventSignal](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[DataDrivenEntityTriggerBeforeEvent](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[DataDrivenEntityTriggerBeforeEventSignal](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[DefinitionModifier](DefinitionModifier.md)*
#### Changed *[Dimension](Dimension.md)*
- Changed type for *[id](Dimension.md#id)* from *string* to *string* (throws exceptions)
- Added function *[createExplosion](Dimension.md#createexplosion)*
- Added function *[fillBlocks](Dimension.md#fillblocks)*
- Changed function *[getBlock](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Added function *[getBlockFromRay](Dimension.md#getblockfromray)*
- Added function *[getEntitiesFromRay](Dimension.md#getentitiesfromray)*
- Changed function *[runCommand](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[setWeather](Dimension.md#setweather)*
- Added function *[spawnEntity](Dimension.md#spawnentity)*
- Added function *[spawnItem](Dimension.md#spawnitem)*
- Added function *[spawnParticle](Dimension.md#spawnparticle)*
#### Added *[DynamicPropertiesDefinition](DynamicPropertiesDefinition.md)*
#### Added *[Effect](Effect.md)*
#### Added *[EffectAddAfterEvent](EffectAddAfterEvent.md)*
#### Added *[EffectAddAfterEventSignal](EffectAddAfterEventSignal.md)*
#### Added *[EffectType](EffectType.md)*
#### Added *[Enchantment](Enchantment.md)*
#### Added *[EnchantmentList](EnchantmentList.md)*
#### Added *[EnchantmentSlot](EnchantmentSlot.md)*
#### Added *[EnchantmentType](EnchantmentType.md)*
#### Added *[EnchantmentTypes](EnchantmentTypes.md)*
#### Changed *[Entity](Entity.md)*
- Changed type for *[id](Entity.md#id)* from *string* to *string* (throws exceptions)
- Added property *[isSneaking](Entity.md#issneaking)*
- Added property *[lifetimeState](Entity.md#lifetimestate)*
- Added property *[scoreboardIdentity](Entity.md#scoreboardidentity)*
- Added property *[target](Entity.md#target)*
- Changed type for *[typeId](Entity.md#typeid)* from *string* to *string* (throws exceptions)
- Added function *[addEffect](Entity.md#addeffect)*
- Changed function *[applyDamage](Entity.md#applydamage)*
  - Changed argument `amount` type from *number* to *number*
- Added function *[extinguishFire](Entity.md#extinguishfire)*
- Added function *[getBlockFromViewDirection](Entity.md#getblockfromviewdirection)*
- Changed function *[getComponent](Entity.md#getcomponent)*
  - Changed return type from [*EntityComponent*](EntityComponent.md) to [*EntityComponent*](EntityComponent.md)
- Added function *[getDynamicProperty](Entity.md#getdynamicproperty)*
- Added function *[getEffect](Entity.md#geteffect)*
- Added function *[getEffects](Entity.md#geteffects)*
- Added function *[getEntitiesFromViewDirection](Entity.md#getentitiesfromviewdirection)*
- Added function *[getRotation](Entity.md#getrotation)*
- Added function *[playAnimation](Entity.md#playanimation)*
- Added function *[removeDynamicProperty](Entity.md#removedynamicproperty)*
- Changed function *[runCommand](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[setDynamicProperty](Entity.md#setdynamicproperty)*
- Added function *[setOnFire](Entity.md#setonfire)*
- Added function *[setRotation](Entity.md#setrotation)*
- Added function *[teleport](Entity.md#teleport)*
- Added function *[triggerEvent](Entity.md#triggerevent)*
- Added function *[tryTeleport](Entity.md#tryteleport)*
#### Added *[EntityAddRiderComponent](EntityAddRiderComponent.md)*
#### Added *[EntityAgeableComponent](EntityAgeableComponent.md)*
#### Added *[EntityAttributeComponent](EntityAttributeComponent.md)*
#### Added *[EntityBreathableComponent](EntityBreathableComponent.md)*
#### Changed *[EntityComponent](EntityComponent.md)*
- Added property *[entity](EntityComponent.md#entity)*
#### Added *[EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)*
#### Added *[EntityDieAfterEvent](EntityDieAfterEvent.md)*
#### Added *[EntityDieAfterEventSignal](EntityDieAfterEventSignal.md)*
#### Added *[EntityEquipmentInventoryComponent](EntityEquipmentInventoryComponent.md)*
#### Added *[EntityHealableComponent](EntityHealableComponent.md)*
#### Added *[EntityHealthComponent](EntityHealthComponent.md)*
#### Added *[EntityHitAfterEvent](EntityHitAfterEvent.md)*
#### Added *[EntityHitAfterEventSignal](EntityHitAfterEventSignal.md)*
#### Added *[EntityHurtAfterEvent](EntityHurtAfterEvent.md)*
#### Added *[EntityHurtAfterEventSignal](EntityHurtAfterEventSignal.md)*
#### Added *[EntityIsDyableComponent](EntityIsDyableComponent.md)*
#### Removed *EntityIsDyeableComponent*
#### Added *[EntityIterator](EntityIterator.md)*
#### Added *[EntityLavaMovementComponent](EntityLavaMovementComponent.md)*
#### Added *[EntityLeashableComponent](EntityLeashableComponent.md)*
#### Added *[EntityMountTamingComponent](EntityMountTamingComponent.md)*
#### Changed *[EntityMovementAmphibiousComponent](EntityMovementAmphibiousComponent.md)*
- Added base class [*EntityComponent*](EntityComponent.md)
- Removed base class *EntityBaseMovementComponent*
- Added property *[maxTurn](EntityMovementAmphibiousComponent.md#maxturn)*
#### Changed *[EntityMovementBasicComponent](EntityMovementBasicComponent.md)*
- Added base class [*EntityComponent*](EntityComponent.md)
- Removed base class *EntityBaseMovementComponent*
- Added property *[maxTurn](EntityMovementBasicComponent.md#maxturn)*
#### Added *[EntityMovementComponent](EntityMovementComponent.md)*
#### Added *[EntityMovementGlideComponent](EntityMovementGlideComponent.md)*
#### Added *[EntityMovementSwayComponent](EntityMovementSwayComponent.md)*
#### Added *[EntityNavigationClimbComponent](EntityNavigationClimbComponent.md)*
#### Added *[EntityNavigationComponent](EntityNavigationComponent.md)*
#### Added *[EntityNavigationFloatComponent](EntityNavigationFloatComponent.md)*
#### Added *[EntityNavigationFlyComponent](EntityNavigationFlyComponent.md)*
#### Added *[EntityNavigationGenericComponent](EntityNavigationGenericComponent.md)*
#### Added *[EntityNavigationHoverComponent](EntityNavigationHoverComponent.md)*
#### Added *[EntityNavigationWalkComponent](EntityNavigationWalkComponent.md)*
#### Added *[EntityOnFireComponent](EntityOnFireComponent.md)*
#### Added *[EntityRideableComponent](EntityRideableComponent.md)*
#### Added *[EntityRidingComponent](EntityRidingComponent.md)*
#### Added *[EntitySpawnAfterEvent](EntitySpawnAfterEvent.md)*
#### Added *[EntitySpawnAfterEventSignal](EntitySpawnAfterEventSignal.md)*
#### Added *[EntityStrengthComponent](EntityStrengthComponent.md)*
#### Added *[EntityTameableComponent](EntityTameableComponent.md)*
#### Added *[EntityType](EntityType.md)*
#### Added *[EntityTypeIterator](EntityTypeIterator.md)*
#### Added *[EntityTypes](EntityTypes.md)*
#### Added *[EntityUnderwaterMovementComponent](EntityUnderwaterMovementComponent.md)*
#### Added *[ExplosionAfterEvent](ExplosionAfterEvent.md)*
#### Added *[ExplosionAfterEventSignal](ExplosionAfterEventSignal.md)*
#### Added *[ExplosionBeforeEvent](ExplosionBeforeEvent.md)*
#### Added *[ExplosionBeforeEventSignal](ExplosionBeforeEventSignal.md)*
#### Added *[FeedItem](FeedItem.md)*
#### Added *[FeedItemEffect](FeedItemEffect.md)*
#### Added *[FilterGroup](FilterGroup.md)*
#### Added *[FluidContainer](FluidContainer.md)*
#### Added *[IBlockBreakAfterEventSignal](IBlockBreakAfterEventSignal.md)*
#### Added *[IBlockExplodeAfterEventSignal](IBlockExplodeAfterEventSignal.md)*
#### Added *[IBlockPlaceAfterEventSignal](IBlockPlaceAfterEventSignal.md)*
#### Added *[IButtonPushAfterEventSignal](IButtonPushAfterEventSignal.md)*
#### Added *[IChatSendAfterEventSignal](IChatSendAfterEventSignal.md)*
#### Added *[IChatSendBeforeEventSignal](IChatSendBeforeEventSignal.md)*
#### Added *[IDataDrivenEntityTriggerAfterEventSignal](IDataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[IDataDrivenEntityTriggerBeforeEventSignal](IDataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[IEffectAddAfterEventSignal](IEffectAddAfterEventSignal.md)*
#### Added *[IEntityDieAfterEventSignal](IEntityDieAfterEventSignal.md)*
#### Added *[IEntityHitAfterEventSignal](IEntityHitAfterEventSignal.md)*
#### Added *[IEntityHurtAfterEventSignal](IEntityHurtAfterEventSignal.md)*
#### Added *[IEntitySpawnAfterEventSignal](IEntitySpawnAfterEventSignal.md)*
#### Added *[IExplosionAfterEventSignal](IExplosionAfterEventSignal.md)*
#### Added *[IExplosionBeforeEventSignal](IExplosionBeforeEventSignal.md)*
#### Added *[IItemCompleteChargeAfterEventSignal](IItemCompleteChargeAfterEventSignal.md)*
#### Added *[IItemDefinitionAfterEventSignal](IItemDefinitionAfterEventSignal.md)*
#### Added *[IItemDefinitionBeforeEventSignal](IItemDefinitionBeforeEventSignal.md)*
#### Added *[IItemReleaseChargeAfterEventSignal](IItemReleaseChargeAfterEventSignal.md)*
#### Added *[IItemStartChargeAfterEventSignal](IItemStartChargeAfterEventSignal.md)*
#### Added *[IItemStartUseOnAfterEventSignal](IItemStartUseOnAfterEventSignal.md)*
#### Added *[IItemStopChargeAfterEventSignal](IItemStopChargeAfterEventSignal.md)*
#### Added *[IItemStopUseOnAfterEventSignal](IItemStopUseOnAfterEventSignal.md)*
#### Added *[IItemUseAfterEventSignal](IItemUseAfterEventSignal.md)*
#### Added *[IItemUseBeforeEventSignal](IItemUseBeforeEventSignal.md)*
#### Added *[IItemUseOnAfterEventSignal](IItemUseOnAfterEventSignal.md)*
#### Added *[IItemUseOnBeforeEventSignal](IItemUseOnBeforeEventSignal.md)*
#### Added *[ILeverActionAfterEventSignal](ILeverActionAfterEventSignal.md)*
#### Added *[IPistonActivateAfterEventSignal](IPistonActivateAfterEventSignal.md)*
#### Added *[IPistonActivateBeforeEventSignal](IPistonActivateBeforeEventSignal.md)*
#### Added *[IPlayerJoinAfterEventSignal](IPlayerJoinAfterEventSignal.md)*
#### Added *[IPlayerLeaveAfterEventSignal](IPlayerLeaveAfterEventSignal.md)*
#### Added *[IPlayerSpawnAfterEventSignal](IPlayerSpawnAfterEventSignal.md)*
#### Added *[IProjectileHitAfterEventSignal](IProjectileHitAfterEventSignal.md)*
#### Added *[IScriptEventCommandMessageAfterEventSignal](IScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[IServerMessageAfterEventSignal](IServerMessageAfterEventSignal.md)*
#### Added *[ItemCompleteChargeAfterEvent](ItemCompleteChargeAfterEvent.md)*
#### Added *[ItemCompleteChargeAfterEventSignal](ItemCompleteChargeAfterEventSignal.md)*
#### Added *[ItemCooldownComponent](ItemCooldownComponent.md)*
#### Added *[ItemDefinitionAfterEventSignal](ItemDefinitionAfterEventSignal.md)*
#### Added *[ItemDefinitionBeforeEventSignal](ItemDefinitionBeforeEventSignal.md)*
#### Added *[ItemDefinitionTriggeredAfterEvent](ItemDefinitionTriggeredAfterEvent.md)*
#### Added *[ItemDefinitionTriggeredBeforeEvent](ItemDefinitionTriggeredBeforeEvent.md)*
#### Added *[ItemDurabilityComponent](ItemDurabilityComponent.md)*
#### Added *[ItemEnchantsComponent](ItemEnchantsComponent.md)*
#### Added *[ItemFoodComponent](ItemFoodComponent.md)*
#### Added *[ItemReleaseChargeAfterEvent](ItemReleaseChargeAfterEvent.md)*
#### Added *[ItemReleaseChargeAfterEventSignal](ItemReleaseChargeAfterEventSignal.md)*
#### Changed *[ItemStack](ItemStack.md)*
- Changed read-only flag for *[amount](ItemStack.md#amount)* from `true` to `false`
- Changed read-only flag for *[keepOnDeath](ItemStack.md#keepondeath)* from `true` to `false`
- Changed read-only flag for *[lockMode](ItemStack.md#lockmode)* from `true` to `false`
- Changed read-only flag for *[nameTag](ItemStack.md#nametag)* from `true` to `false`
- Added function *[clone](ItemStack.md#clone)*
- Added function *[getLore](ItemStack.md#getlore)*
- Added function *[getTags](ItemStack.md#gettags)*
- Added function *[hasTag](ItemStack.md#hastag)*
- Added function *[setCanDestroy](ItemStack.md#setcandestroy)*
- Added function *[setCanPlaceOn](ItemStack.md#setcanplaceon)*
- Added function *[setLore](ItemStack.md#setlore)*
- Added function *[triggerEvent](ItemStack.md#triggerevent)*
#### Added *[ItemStartChargeAfterEvent](ItemStartChargeAfterEvent.md)*
#### Added *[ItemStartChargeAfterEventSignal](ItemStartChargeAfterEventSignal.md)*
#### Added *[ItemStartUseOnAfterEvent](ItemStartUseOnAfterEvent.md)*
#### Added *[ItemStartUseOnAfterEventSignal](ItemStartUseOnAfterEventSignal.md)*
#### Added *[ItemStopChargeAfterEvent](ItemStopChargeAfterEvent.md)*
#### Added *[ItemStopChargeAfterEventSignal](ItemStopChargeAfterEventSignal.md)*
#### Added *[ItemStopUseOnAfterEvent](ItemStopUseOnAfterEvent.md)*
#### Added *[ItemStopUseOnAfterEventSignal](ItemStopUseOnAfterEventSignal.md)*
#### Added *[ItemTypeIterator](ItemTypeIterator.md)*
#### Added *[ItemTypes](ItemTypes.md)*
#### Added *[ItemUseAfterEvent](ItemUseAfterEvent.md)*
#### Added *[ItemUseAfterEventSignal](ItemUseAfterEventSignal.md)*
#### Added *[ItemUseBeforeEvent](ItemUseBeforeEvent.md)*
#### Added *[ItemUseBeforeEventSignal](ItemUseBeforeEventSignal.md)*
#### Added *[ItemUseOnAfterEvent](ItemUseOnAfterEvent.md)*
#### Added *[ItemUseOnAfterEventSignal](ItemUseOnAfterEventSignal.md)*
#### Added *[ItemUseOnBeforeEvent](ItemUseOnBeforeEvent.md)*
#### Added *[ItemUseOnBeforeEventSignal](ItemUseOnBeforeEventSignal.md)*
#### Added *[IWatchdogTerminateBeforeEventSignal](IWatchdogTerminateBeforeEventSignal.md)*
#### Added *[IWeatherChangeAfterEventSignal](IWeatherChangeAfterEventSignal.md)*
#### Added *[IWorldInitializeAfterEventSignal](IWorldInitializeAfterEventSignal.md)*
#### Added *[LeverActionAfterEvent](LeverActionAfterEvent.md)*
#### Added *[LeverActionAfterEventSignal](LeverActionAfterEventSignal.md)*
#### Added *[MessageReceiveAfterEvent](MessageReceiveAfterEvent.md)*
#### Added *[MinecraftBlockTypes](MinecraftBlockTypes.md)*
#### Added *[MinecraftEffectTypes](MinecraftEffectTypes.md)*
#### Added *[MinecraftEntityTypes](MinecraftEntityTypes.md)*
#### Added *[MinecraftItemTypes](MinecraftItemTypes.md)*
#### Added *[MolangVariableMap](MolangVariableMap.md)*
#### Added *[NavigationResult](NavigationResult.md)*
#### Added *[PistonActivateAfterEvent](PistonActivateAfterEvent.md)*
#### Added *[PistonActivateAfterEventSignal](PistonActivateAfterEventSignal.md)*
#### Added *[PistonActivateBeforeEvent](PistonActivateBeforeEvent.md)*
#### Added *[PistonActivateBeforeEventSignal](PistonActivateBeforeEventSignal.md)*
#### Changed *[Player](Player.md)*
- Added property *[level](Player.md#level)*
- Added property *[onScreenDisplay](Player.md#onscreendisplay)*
- Added property *[selectedSlot](Player.md#selectedslot)*
- Added property *[spawnDimension](Player.md#spawndimension)*
- Added property *[totalXpNeededForNextLevel](Player.md#totalxpneededfornextlevel)*
- Added property *[xpEarnedAtCurrentLevel](Player.md#xpearnedatcurrentlevel)*
- Added function *[addExperience](Player.md#addexperience)*
- Added function *[addLevels](Player.md#addlevels)*
- Added function *[clearSpawn](Player.md#clearspawn)*
- Added function *[getItemCooldown](Player.md#getitemcooldown)*
- Added function *[getSpawnPosition](Player.md#getspawnposition)*
- Added function *[getTotalXp](Player.md#gettotalxp)*
- Added function *[isOp](Player.md#isop)*
- Added function *[postClientMessage](Player.md#postclientmessage)*
- Added function *[resetLevel](Player.md#resetlevel)*
- Added function *[setOp](Player.md#setop)*
- Added function *[setSpawn](Player.md#setspawn)*
- Added function *[startItemCooldown](Player.md#startitemcooldown)*
#### Added *[PlayerIterator](PlayerIterator.md)*
#### Added *[PlayerJoinAfterEvent](PlayerJoinAfterEvent.md)*
#### Added *[PlayerJoinAfterEventSignal](PlayerJoinAfterEventSignal.md)*
#### Added *[PlayerLeaveAfterEvent](PlayerLeaveAfterEvent.md)*
#### Added *[PlayerLeaveAfterEventSignal](PlayerLeaveAfterEventSignal.md)*
#### Added *[PlayerSpawnAfterEvent](PlayerSpawnAfterEvent.md)*
#### Added *[PlayerSpawnAfterEventSignal](PlayerSpawnAfterEventSignal.md)*
#### Added *[ProjectileHitAfterEvent](ProjectileHitAfterEvent.md)*
#### Added *[ProjectileHitAfterEventSignal](ProjectileHitAfterEventSignal.md)*
#### Added *[PropertyRegistry](PropertyRegistry.md)*
#### Added *[Scoreboard](Scoreboard.md)*
#### Added *[ScoreboardIdentity](ScoreboardIdentity.md)*
#### Added *[ScoreboardObjective](ScoreboardObjective.md)*
#### Added *[ScoreboardScoreInfo](ScoreboardScoreInfo.md)*
#### Added *[ScreenDisplay](ScreenDisplay.md)*
#### Added *[ScriptEventCommandMessageAfterEvent](ScriptEventCommandMessageAfterEvent.md)*
#### Added *[ScriptEventCommandMessageAfterEventSignal](ScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[Seat](Seat.md)*
#### Added *[ServerMessageAfterEventSignal](ServerMessageAfterEventSignal.md)*
#### Changed *[System](System.md)*
- Added property *[events](System.md#events)*
#### Added *[SystemEvents](SystemEvents.md)*
#### Added *[Trigger](Trigger.md)*
#### Added *[Vector](Vector.md)*
#### Added *[WatchdogTerminateBeforeEvent](WatchdogTerminateBeforeEvent.md)*
#### Added *[WatchdogTerminateBeforeEventSignal](WatchdogTerminateBeforeEventSignal.md)*
#### Added *[WeatherChangeAfterEvent](WeatherChangeAfterEvent.md)*
#### Added *[WeatherChangeAfterEventSignal](WeatherChangeAfterEventSignal.md)*
#### Changed *[World](World.md)*
- Added property *[afterEvents](World.md#afterevents)*
- Added property *[beforeEvents](World.md#beforeevents)*
- Added property *[scoreboard](World.md#scoreboard)*
- Added function *[broadcastClientMessage](World.md#broadcastclientmessage)*
- Added function *[getAbsoluteTime](World.md#getabsolutetime)*
- Added function *[getDefaultSpawnPosition](World.md#getdefaultspawnposition)*
- Added function *[getDynamicProperty](World.md#getdynamicproperty)*
- Added function *[getEntity](World.md#getentity)*
- Added function *[getTime](World.md#gettime)*
- Added function *[removeDynamicProperty](World.md#removedynamicproperty)*
- Added function *[setDefaultSpawn](World.md#setdefaultspawn)*
- Added function *[setDynamicProperty](World.md#setdynamicproperty)*
- Added function *[setTime](World.md#settime)*
#### Added *[WorldInitializeAfterEvent](WorldInitializeAfterEvent.md)*
#### Added *[WorldInitializeAfterEventSignal](WorldInitializeAfterEventSignal.md)*
#### Added enum [BlockVolumeIntersection](BlockVolumeIntersection.md)
#### Added enum [CompoundBlockVolumeAction](CompoundBlockVolumeAction.md)
#### Added enum [Direction](Direction.md)
#### Added enum [DisplaySlotId](DisplaySlotId.md)
#### Added enum [DyeColor](DyeColor.md)
#### Added enum [EntityLifetimeState](EntityLifetimeState.md)
#### Added enum [EquipmentSlot](EquipmentSlot.md)
#### Added enum [FluidType](FluidType.md)
#### Added enum [MessageSourceType](MessageSourceType.md)
#### Added enum [ObjectiveSortOrder](ObjectiveSortOrder.md)
#### Added enum [ScoreboardIdentityType](ScoreboardIdentityType.md)
#### Added enum [SignSide](SignSide.md)
#### Added enum [TimeOfDay](TimeOfDay.md)
#### Added enum [WatchdogTerminateReason](WatchdogTerminateReason.md)
#### Added enum [WeatherType](WeatherType.md)
#### Added constant [TicksPerDay](#ticksperday)
#### Added constant [TicksPerSecond](#tickspersecond)
## 1.2.0
#### Added *[BlockComponent](BlockComponent.md)*
#### Added *[BlockInventoryComponent](BlockInventoryComponent.md)*
#### Added *[Component](Component.md)*
#### Added *[Container](Container.md)*
#### Changed *[Dimension](Dimension.md)*
- Added function *[runCommand](Dimension.md#runcommand)*
#### Changed *[Entity](Entity.md)*
- Added function *[addTag](Entity.md#addtag)*
- Added function *[applyDamage](Entity.md#applydamage)*
- Added function *[applyImpulse](Entity.md#applyimpulse)*
- Added function *[applyKnockback](Entity.md#applyknockback)*
- Added function *[clearVelocity](Entity.md#clearvelocity)*
- Added function *[getComponent](Entity.md#getcomponent)*
- Added function *[getComponents](Entity.md#getcomponents)*
- Added function *[getTags](Entity.md#gettags)*
- Added function *[hasComponent](Entity.md#hascomponent)*
- Added function *[hasTag](Entity.md#hastag)*
- Added function *[kill](Entity.md#kill)*
- Added function *[removeTag](Entity.md#removetag)*
- Added function *[runCommand](Entity.md#runcommand)*
#### Added *[EntityBaseMovementComponent](EntityBaseMovementComponent.md)*
#### Added *[EntityCanClimbComponent](EntityCanClimbComponent.md)*
#### Added *[EntityCanFlyComponent](EntityCanFlyComponent.md)*
#### Added *[EntityCanPowerJumpComponent](EntityCanPowerJumpComponent.md)*
#### Added *[EntityColorComponent](EntityColorComponent.md)*
#### Added *[EntityComponent](EntityComponent.md)*
#### Added *[EntityFireImmuneComponent](EntityFireImmuneComponent.md)*
#### Added *[EntityFloatsInLiquidComponent](EntityFloatsInLiquidComponent.md)*
#### Added *[EntityFlyingSpeedComponent](EntityFlyingSpeedComponent.md)*
#### Added *[EntityFrictionModifierComponent](EntityFrictionModifierComponent.md)*
#### Added *[EntityGroundOffsetComponent](EntityGroundOffsetComponent.md)*
#### Added *[EntityInventoryComponent](EntityInventoryComponent.md)*
#### Added *[EntityIsBabyComponent](EntityIsBabyComponent.md)*
#### Added *[EntityIsChargedComponent](EntityIsChargedComponent.md)*
#### Added *[EntityIsChestedComponent](EntityIsChestedComponent.md)*
#### Added *[EntityIsDyeableComponent](EntityIsDyeableComponent.md)*
#### Added *[EntityIsHiddenWhenInvisibleComponent](EntityIsHiddenWhenInvisibleComponent.md)*
#### Added *[EntityIsIgnitedComponent](EntityIsIgnitedComponent.md)*
#### Added *[EntityIsIllagerCaptainComponent](EntityIsIllagerCaptainComponent.md)*
#### Added *[EntityIsSaddledComponent](EntityIsSaddledComponent.md)*
#### Added *[EntityIsShakingComponent](EntityIsShakingComponent.md)*
#### Added *[EntityIsShearedComponent](EntityIsShearedComponent.md)*
#### Added *[EntityIsStackableComponent](EntityIsStackableComponent.md)*
#### Added *[EntityIsStunnedComponent](EntityIsStunnedComponent.md)*
#### Added *[EntityIsTamedComponent](EntityIsTamedComponent.md)*
#### Added *[EntityItemComponent](EntityItemComponent.md)*
#### Added *[EntityMarkVariantComponent](EntityMarkVariantComponent.md)*
#### Added *[EntityMovementAmphibiousComponent](EntityMovementAmphibiousComponent.md)*
#### Added *[EntityMovementBasicComponent](EntityMovementBasicComponent.md)*
#### Added *[EntityMovementFlyComponent](EntityMovementFlyComponent.md)*
#### Added *[EntityMovementGenericComponent](EntityMovementGenericComponent.md)*
#### Added *[EntityMovementHoverComponent](EntityMovementHoverComponent.md)*
#### Added *[EntityMovementJumpComponent](EntityMovementJumpComponent.md)*
#### Added *[EntityMovementSkipComponent](EntityMovementSkipComponent.md)*
#### Added *[EntityPushThroughComponent](EntityPushThroughComponent.md)*
#### Added *[EntityScaleComponent](EntityScaleComponent.md)*
#### Added *[EntitySkinIdComponent](EntitySkinIdComponent.md)*
#### Added *[EntityVariantComponent](EntityVariantComponent.md)*
#### Added *[EntityWantsJockeyComponent](EntityWantsJockeyComponent.md)*
#### Added *[ItemComponent](ItemComponent.md)*
#### Added *[ItemStack](ItemStack.md)*
#### Added *[ItemType](ItemType.md)*
#### Changed *[Player](Player.md)*
- Added function *[playSound](Player.md#playsound)*
#### Changed *[World](World.md)*
- Added function *[playMusic](World.md#playmusic)*
- Added function *[playSound](World.md#playsound)*
- Added function *[queueMusic](World.md#queuemusic)*
- Added function *[stopMusic](World.md#stopmusic)*
#### Added enum [EntityDamageCause](EntityDamageCause.md)
#### Added enum [ItemLockMode](ItemLockMode.md)
## 1.1.0
#### Added `@minecraft/server` Module
