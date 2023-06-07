---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server Module
description: Contents of the @minecraft/server module
---
# @minecraft/server Module
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Contains many types related to manipulating a Minecraft world, including entities, blocks, dimensions, and more.

## Manifest Details
```json
{
    "module_name": "@minecraft/server",
    "version": "1.3.0"
}
```

## Available Versions
- `1.4.0-beta`
- `1.3.0`
- `1.3.0-beta`
- `1.2.0`
- `1.1.0`
- `0.1.0`

## Enumerations
- [BlockVolumeIntersection](BlockVolumeIntersection.md)
- [CompoundBlockVolumeAction](CompoundBlockVolumeAction.md)
- [Direction](Direction.md)
- [DisplaySlotId](DisplaySlotId.md)
- [DyeColor](DyeColor.md)
- [EntityDamageCause](EntityDamageCause.md)
- [EntityLifetimeState](EntityLifetimeState.md)
- [EquipmentSlot](EquipmentSlot.md)
- [FluidType](FluidType.md)
- [GameMode](GameMode.md)
- [ItemLockMode](ItemLockMode.md)
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
- [BlockBreakAfterEvent](BlockBreakAfterEvent.md)
- [BlockBreakAfterEventSignal](BlockBreakAfterEventSignal.md)
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
- [BlockPlaceAfterEvent](BlockPlaceAfterEvent.md)
- [BlockPlaceAfterEventSignal](BlockPlaceAfterEventSignal.md)
- [BlockPotionContainerComponent](BlockPotionContainerComponent.md)
- [BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)
- [BlockSignComponent](BlockSignComponent.md)
- [BlockSnowContainerComponent](BlockSnowContainerComponent.md)
- [BlockStates](BlockStates.md)
- [BlockStateType](BlockStateType.md)
- [BlockType](BlockType.md)
- [BlockVolumeUtils](BlockVolumeUtils.md)
- [BlockWaterContainerComponent](BlockWaterContainerComponent.md)
- [BoundingBoxUtils](BoundingBoxUtils.md)
- [ButtonPushAfterEvent](ButtonPushAfterEvent.md)
- [ButtonPushAfterEventSignal](ButtonPushAfterEventSignal.md)
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
- [EntityEquipmentInventoryComponent](EntityEquipmentInventoryComponent.md)
- [EntityFireImmuneComponent](EntityFireImmuneComponent.md)
- [EntityFloatsInLiquidComponent](EntityFloatsInLiquidComponent.md)
- [EntityFlyingSpeedComponent](EntityFlyingSpeedComponent.md)
- [EntityFrictionModifierComponent](EntityFrictionModifierComponent.md)
- [EntityGroundOffsetComponent](EntityGroundOffsetComponent.md)
- [EntityHealableComponent](EntityHealableComponent.md)
- [EntityHealthChangedAfterEvent](EntityHealthChangedAfterEvent.md)
- [EntityHealthChangedAfterEventSignal](EntityHealthChangedAfterEventSignal.md)
- [EntityHealthComponent](EntityHealthComponent.md)
- [EntityHitAfterEvent](EntityHitAfterEvent.md)
- [EntityHitAfterEventSignal](EntityHitAfterEventSignal.md)
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
- [EntityRemovedAfterEvent](EntityRemovedAfterEvent.md)
- [EntityRemovedAfterEventSignal](EntityRemovedAfterEventSignal.md)
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
- [IBlockBreakAfterEventSignal](IBlockBreakAfterEventSignal.md)
- [IBlockExplodeAfterEventSignal](IBlockExplodeAfterEventSignal.md)
- [IBlockPlaceAfterEventSignal](IBlockPlaceAfterEventSignal.md)
- [IButtonPushAfterEventSignal](IButtonPushAfterEventSignal.md)
- [IChatSendAfterEventSignal](IChatSendAfterEventSignal.md)
- [IChatSendBeforeEventSignal](IChatSendBeforeEventSignal.md)
- [IDataDrivenEntityTriggerAfterEventSignal](IDataDrivenEntityTriggerAfterEventSignal.md)
- [IDataDrivenEntityTriggerBeforeEventSignal](IDataDrivenEntityTriggerBeforeEventSignal.md)
- [IEffectAddAfterEventSignal](IEffectAddAfterEventSignal.md)
- [IEntityDieAfterEventSignal](IEntityDieAfterEventSignal.md)
- [IEntityHealthChangedAfterEventSignal](IEntityHealthChangedAfterEventSignal.md)
- [IEntityHitAfterEventSignal](IEntityHitAfterEventSignal.md)
- [IEntityHurtAfterEventSignal](IEntityHurtAfterEventSignal.md)
- [IEntityRemovedAfterEventSignal](IEntityRemovedAfterEventSignal.md)
- [IEntitySpawnAfterEventSignal](IEntitySpawnAfterEventSignal.md)
- [IExplosionAfterEventSignal](IExplosionAfterEventSignal.md)
- [IExplosionBeforeEventSignal](IExplosionBeforeEventSignal.md)
- [IItemCompleteUseAfterEventSignal](IItemCompleteUseAfterEventSignal.md)
- [IItemDefinitionAfterEventSignal](IItemDefinitionAfterEventSignal.md)
- [IItemDefinitionBeforeEventSignal](IItemDefinitionBeforeEventSignal.md)
- [IItemReleaseUseAfterEventSignal](IItemReleaseUseAfterEventSignal.md)
- [IItemStartUseAfterEventSignal](IItemStartUseAfterEventSignal.md)
- [IItemStartUseOnAfterEventSignal](IItemStartUseOnAfterEventSignal.md)
- [IItemStopUseAfterEventSignal](IItemStopUseAfterEventSignal.md)
- [IItemStopUseOnAfterEventSignal](IItemStopUseOnAfterEventSignal.md)
- [IItemUseAfterEventSignal](IItemUseAfterEventSignal.md)
- [IItemUseBeforeEventSignal](IItemUseBeforeEventSignal.md)
- [IItemUseOnAfterEventSignal](IItemUseOnAfterEventSignal.md)
- [IItemUseOnBeforeEventSignal](IItemUseOnBeforeEventSignal.md)
- [ILeverActionAfterEventSignal](ILeverActionAfterEventSignal.md)
- [IPistonActivateAfterEventSignal](IPistonActivateAfterEventSignal.md)
- [IPistonActivateBeforeEventSignal](IPistonActivateBeforeEventSignal.md)
- [IPlayerJoinAfterEventSignal](IPlayerJoinAfterEventSignal.md)
- [IPlayerLeaveAfterEventSignal](IPlayerLeaveAfterEventSignal.md)
- [IPlayerSpawnAfterEventSignal](IPlayerSpawnAfterEventSignal.md)
- [IPressurePlatePopAfterEventSignal](IPressurePlatePopAfterEventSignal.md)
- [IPressurePlatePushAfterEventSignal](IPressurePlatePushAfterEventSignal.md)
- [IProjectileHitAfterEventSignal](IProjectileHitAfterEventSignal.md)
- [IScriptEventCommandMessageAfterEventSignal](IScriptEventCommandMessageAfterEventSignal.md)
- [IServerMessageAfterEventSignal](IServerMessageAfterEventSignal.md)
- [ITargetBlockHitAfterEventSignal](ITargetBlockHitAfterEventSignal.md)
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
- [ItemTypeIterator](ItemTypeIterator.md)
- [ItemTypes](ItemTypes.md)
- [ItemUseAfterEvent](ItemUseAfterEvent.md)
- [ItemUseAfterEventSignal](ItemUseAfterEventSignal.md)
- [ItemUseBeforeEvent](ItemUseBeforeEvent.md)
- [ItemUseBeforeEventSignal](ItemUseBeforeEventSignal.md)
- [ItemUseOnAfterEvent](ItemUseOnAfterEvent.md)
- [ItemUseOnAfterEventSignal](ItemUseOnAfterEventSignal.md)
- [ItemUseOnBeforeEvent](ItemUseOnBeforeEvent.md)
- [ItemUseOnBeforeEventSignal](ItemUseOnBeforeEventSignal.md)
- [ITripWireTripAfterEventSignal](ITripWireTripAfterEventSignal.md)
- [IWatchdogTerminateBeforeEventSignal](IWatchdogTerminateBeforeEventSignal.md)
- [IWeatherChangeAfterEventSignal](IWeatherChangeAfterEventSignal.md)
- [IWorldInitializeAfterEventSignal](IWorldInitializeAfterEventSignal.md)
- [LeverActionAfterEvent](LeverActionAfterEvent.md)
- [LeverActionAfterEventSignal](LeverActionAfterEventSignal.md)
- [MessageReceiveAfterEvent](MessageReceiveAfterEvent.md)
- [MinecraftBlockTypes](MinecraftBlockTypes.md)
- [MinecraftDimensionTypes](MinecraftDimensionTypes.md)
- [MinecraftEntityTypes](MinecraftEntityTypes.md)
- [MinecraftItemTypes](MinecraftItemTypes.md)
- [MolangVariableMap](MolangVariableMap.md)
- [NavigationResult](NavigationResult.md)
- [PistonActivateAfterEvent](PistonActivateAfterEvent.md)
- [PistonActivateAfterEventSignal](PistonActivateAfterEventSignal.md)
- [PistonActivateBeforeEvent](PistonActivateBeforeEvent.md)
- [PistonActivateBeforeEventSignal](PistonActivateBeforeEventSignal.md)
- [Player](Player.md)
- [PlayerIterator](PlayerIterator.md)
- [PlayerJoinAfterEvent](PlayerJoinAfterEvent.md)
- [PlayerJoinAfterEventSignal](PlayerJoinAfterEventSignal.md)
- [PlayerLeaveAfterEvent](PlayerLeaveAfterEvent.md)
- [PlayerLeaveAfterEventSignal](PlayerLeaveAfterEventSignal.md)
- [PlayerSpawnAfterEvent](PlayerSpawnAfterEvent.md)
- [PlayerSpawnAfterEventSignal](PlayerSpawnAfterEventSignal.md)
- [PressurePlatePopAfterEvent](PressurePlatePopAfterEvent.md)
- [PressurePlatePopAfterEventSignal](PressurePlatePopAfterEventSignal.md)
- [PressurePlatePushAfterEvent](PressurePlatePushAfterEvent.md)
- [PressurePlatePushAfterEventSignal](PressurePlatePushAfterEventSignal.md)
- [ProjectileHitAfterEvent](ProjectileHitAfterEvent.md)
- [ProjectileHitAfterEventSignal](ProjectileHitAfterEventSignal.md)
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
- [BlockFillOptions](BlockFillOptions.md)
- [BlockHitInformation](BlockHitInformation.md)
- [BlockRaycastOptions](BlockRaycastOptions.md)
- [BlockVolume](BlockVolume.md)
- [BoundingBox](BoundingBox.md)
- [Color](Color.md)
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
- [EntityRaycastOptions](EntityRaycastOptions.md)
- [ExplosionOptions](ExplosionOptions.md)
- [MusicOptions](MusicOptions.md)
- [NumberRange](NumberRange.md)
- [PlayAnimationOptions](PlayAnimationOptions.md)
- [PlayerSoundOptions](PlayerSoundOptions.md)
- [RawMessage](RawMessage.md)
- [RawMessageScore](RawMessageScore.md)
- [RawText](RawText.md)
- [ScoreboardObjectiveDisplayOptions](ScoreboardObjectiveDisplayOptions.md)
- [ScriptEventMessageFilterOptions](ScriptEventMessageFilterOptions.md)
- [TeleportOptions](TeleportOptions.md)
- [TitleDisplayOptions](TitleDisplayOptions.md)
- [Vector2](Vector2.md)
- [Vector3](Vector3.md)
- [WorldSoundOptions](WorldSoundOptions.md)

## Errors
- [CommandError](CommandError.md)
- [PositionInUnloadedChunkError](PositionInUnloadedChunkError.md)
- [PositionOutOfWorldBoundariesError](PositionOutOfWorldBoundariesError.md)

## Constants

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
## 1.4.0-beta
#### Changed *[Block](Block.md)*
- Added property *[isWaterlogged](Block.md#iswaterlogged)*
- Added property *[type](Block.md#type)*
- Added property *[typeId](Block.md#typeid)*
- Added function *[canPlace](Block.md#canplace)*
- Added function *[getItemStack](Block.md#getitemstack)*
- Added function *[getRedstonePower](Block.md#getredstonepower)*
- Added function *[getTags](Block.md#gettags)*
- Added function *[hasTag](Block.md#hastag)*
- Added function *[isAir](Block.md#isair)*
- Added function *[isLiquid](Block.md#isliquid)*
- Added function *[isSolid](Block.md#issolid)*
- Added function *[isValid](Block.md#isvalid)*
- Added function *[setType](Block.md#settype)*
- Added function *[trySetPermutation](Block.md#trysetpermutation)*
#### Added *[BlockAreaSize](BlockAreaSize.md)*
#### Added *[BlockBreakAfterEvent](BlockBreakAfterEvent.md)*
#### Added *[BlockBreakAfterEventSignal](BlockBreakAfterEventSignal.md)*
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
- Added function *[isValid](Container.md#isvalid)*
#### Added *[ContainerSlot](ContainerSlot.md)*
#### Added *[DataDrivenEntityTriggerAfterEvent](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[DataDrivenEntityTriggerAfterEventSignal](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[DataDrivenEntityTriggerBeforeEvent](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[DataDrivenEntityTriggerBeforeEventSignal](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[DefinitionModifier](DefinitionModifier.md)*
#### Changed *[Dimension](Dimension.md)*
- Added function *[createExplosion](Dimension.md#createexplosion)*
- Added function *[fillBlocks](Dimension.md#fillblocks)*
- Added function *[getBlockFromRay](Dimension.md#getblockfromray)*
- Added function *[getEntitiesFromRay](Dimension.md#getentitiesfromray)*
- Added function *[setWeather](Dimension.md#setweather)*
- Added function *[spawnEntity](Dimension.md#spawnentity)*
- Added function *[spawnItem](Dimension.md#spawnitem)*
- Added function *[spawnParticle](Dimension.md#spawnparticle)*
#### Added *[DynamicPropertiesDefinition](DynamicPropertiesDefinition.md)*
#### Added *[Effect](Effect.md)*
#### Added *[EffectAddAfterEvent](EffectAddAfterEvent.md)*
#### Added *[EffectAddAfterEventSignal](EffectAddAfterEventSignal.md)*
#### Added *[EffectType](EffectType.md)*
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
- Added property *[isSneaking](Entity.md#issneaking)*
- Added property *[isSprinting](Entity.md#issprinting)*
- Added property *[isSwimming](Entity.md#isswimming)*
- Added property *[lifetimeState](Entity.md#lifetimestate)*
- Added property *[scoreboardIdentity](Entity.md#scoreboardidentity)*
- Added property *[target](Entity.md#target)*
- Added function *[addEffect](Entity.md#addeffect)*
- Added function *[extinguishFire](Entity.md#extinguishfire)*
- Added function *[getBlockFromViewDirection](Entity.md#getblockfromviewdirection)*
- Added function *[getDynamicProperty](Entity.md#getdynamicproperty)*
- Added function *[getEffect](Entity.md#geteffect)*
- Added function *[getEffects](Entity.md#geteffects)*
- Added function *[getEntitiesFromViewDirection](Entity.md#getentitiesfromviewdirection)*
- Added function *[getRotation](Entity.md#getrotation)*
- Added function *[playAnimation](Entity.md#playanimation)*
- Added function *[removeDynamicProperty](Entity.md#removedynamicproperty)*
- Added function *[removeEffect](Entity.md#removeeffect)*
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
#### Changed *[EntityHealableComponent](EntityHealableComponent.md)*
- Added property *[filters](EntityHealableComponent.md#filters)*
#### Added *[EntityHealthChangedAfterEvent](EntityHealthChangedAfterEvent.md)*
#### Added *[EntityHealthChangedAfterEventSignal](EntityHealthChangedAfterEventSignal.md)*
#### Added *[EntityHealthComponent](EntityHealthComponent.md)*
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
#### Added *[IButtonPushAfterEventSignal](IButtonPushAfterEventSignal.md)*
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
#### Added *[ILeverActionAfterEventSignal](ILeverActionAfterEventSignal.md)*
#### Added *[IPistonActivateAfterEventSignal](IPistonActivateAfterEventSignal.md)*
#### Added *[IPistonActivateBeforeEventSignal](IPistonActivateBeforeEventSignal.md)*
#### Added *[IPlayerJoinAfterEventSignal](IPlayerJoinAfterEventSignal.md)*
#### Added *[IPlayerLeaveAfterEventSignal](IPlayerLeaveAfterEventSignal.md)*
#### Added *[IPlayerSpawnAfterEventSignal](IPlayerSpawnAfterEventSignal.md)*
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
#### Added *[LeverActionAfterEvent](LeverActionAfterEvent.md)*
#### Added *[LeverActionAfterEventSignal](LeverActionAfterEventSignal.md)*
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
#### Added *[PlayerJoinAfterEventSignal](PlayerJoinAfterEventSignal.md)*
#### Added *[PlayerLeaveAfterEventSignal](PlayerLeaveAfterEventSignal.md)*
#### Added *[PlayerSpawnAfterEventSignal](PlayerSpawnAfterEventSignal.md)*
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
#### Added *[WorldAfterEvents](WorldAfterEvents.md)*
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
- Removed property *type*
- Removed property *typeId*
- Removed function *canPlace*
- Removed function *getItemStack*
- Removed function *getRedstonePower*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *isAir*
- Removed function *isLiquid*
- Removed function *isSolid*
- Removed function *setType*
- Removed function *trySetPermutation*
#### Removed *BlockAreaSize*
#### Removed *BlockBreakAfterEvent*
#### Removed *BlockBreakAfterEventSignal*
#### Removed *BlockEvent*
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
#### Removed *ButtonPushAfterEvent*
#### Removed *ButtonPushAfterEventSignal*
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
- Removed function *createExplosion*
- Removed function *fillBlocks*
- Removed function *getBlockFromRay*
- Removed function *getEntitiesFromRay*
- Removed function *setWeather*
- Removed function *spawnEntity*
- Removed function *spawnItem*
- Removed function *spawnParticle*
#### Removed *DynamicPropertiesDefinition*
#### Removed *Effect*
#### Removed *EffectAddAfterEvent*
#### Removed *EffectAddAfterEventSignal*
#### Removed *EffectType*
#### Removed *EffectTypes*
#### Removed *Enchantment*
#### Removed *EnchantmentList*
#### Removed *EnchantmentSlot*
#### Removed *EnchantmentType*
#### Removed *EnchantmentTypes*
#### Changed *[Entity](Entity.md)*
- Removed property *fallDistance*
- Removed property *isClimbing*
- Removed property *isFalling*
- Removed property *isInWater*
- Removed property *isOnGround*
- Removed property *isSneaking*
- Removed property *isSprinting*
- Removed property *isSwimming*
- Removed property *lifetimeState*
- Removed property *scoreboardIdentity*
- Removed property *target*
- Removed function *addEffect*
- Removed function *extinguishFire*
- Removed function *getBlockFromViewDirection*
- Removed function *getDynamicProperty*
- Removed function *getEffect*
- Removed function *getEffects*
- Removed function *getEntitiesFromViewDirection*
- Removed function *getRotation*
- Removed function *playAnimation*
- Removed function *removeDynamicProperty*
- Removed function *removeEffect*
- Removed function *setDynamicProperty*
- Removed function *setOnFire*
- Removed function *setRotation*
- Removed function *triggerEvent*
#### Removed *EntityAddRiderComponent*
#### Removed *EntityAgeableComponent*
#### Removed *EntityBreathableComponent*
#### Changed *[EntityComponent](EntityComponent.md)*
- Removed property *entity*
#### Removed *EntityDefinitionFeedItem*
#### Removed *EntityDieAfterEvent*
#### Removed *EntityDieAfterEventSignal*
#### Removed *EntityEquipmentInventoryComponent*
#### Removed *EntityHealthComponent*
#### Removed *EntityHitAfterEvent*
#### Removed *EntityHitAfterEventSignal*
#### Removed *EntityHurtAfterEvent*
#### Removed *EntityHurtAfterEventSignal*
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
#### Removed *IButtonPushAfterEventSignal*
#### Removed *IChatSendAfterEventSignal*
#### Removed *IChatSendBeforeEventSignal*
#### Removed *IDataDrivenEntityTriggerAfterEventSignal*
#### Removed *IDataDrivenEntityTriggerBeforeEventSignal*
#### Removed *IEffectAddAfterEventSignal*
#### Removed *IEntityDieAfterEventSignal*
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
#### Removed *ILeverActionAfterEventSignal*
#### Removed *IPistonActivateAfterEventSignal*
#### Removed *IPistonActivateBeforeEventSignal*
#### Removed *IPlayerJoinAfterEventSignal*
#### Removed *IPlayerLeaveAfterEventSignal*
#### Removed *IPlayerSpawnAfterEventSignal*
#### Removed *IProjectileHitAfterEventSignal*
#### Removed *IScriptEventCommandMessageAfterEventSignal*
#### Removed *IServerMessageAfterEventSignal*
#### Removed *ItemCompleteUseAfterEvent*
#### Removed *ItemCompleteUseAfterEventSignal*
#### Removed *ItemCooldownComponent*
#### Removed *ItemDefinitionAfterEventSignal*
#### Removed *ItemDefinitionBeforeEventSignal*
#### Removed *ItemDefinitionTriggeredAfterEvent*
#### Removed *ItemDefinitionTriggeredBeforeEvent*
#### Removed *ItemDurabilityComponent*
#### Removed *ItemEnchantsComponent*
#### Removed *ItemFoodComponent*
#### Removed *ItemReleaseUseAfterEvent*
#### Removed *ItemReleaseUseAfterEventSignal*
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
#### Removed *ItemStartUseAfterEvent*
#### Removed *ItemStartUseAfterEventSignal*
#### Removed *ItemStartUseOnAfterEvent*
#### Removed *ItemStartUseOnAfterEventSignal*
#### Removed *ItemStopUseAfterEvent*
#### Removed *ItemStopUseAfterEventSignal*
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
#### Removed *LeverActionAfterEvent*
#### Removed *LeverActionAfterEventSignal*
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
- Removed property *isFlying*
- Removed property *isGliding*
- Removed property *isJumping*
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
#### Removed *PlayerJoinAfterEventSignal*
#### Removed *PlayerLeaveAfterEventSignal*
#### Removed *PlayerSpawnAfterEventSignal*
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
- Added function *[setType](Block.md#settype)*
- Added function *[trySetPermutation](Block.md#trysetpermutation)*
#### Added *[BlockAreaSize](BlockAreaSize.md)*
#### Added *[BlockBreakAfterEvent](BlockBreakAfterEvent.md)*
#### Added *[BlockBreakAfterEventSignal](BlockBreakAfterEventSignal.md)*
#### Added *[BlockComponent](BlockComponent.md)*
#### Added *[BlockEvent](BlockEvent.md)*
#### Added *[BlockExplodeAfterEvent](BlockExplodeAfterEvent.md)*
#### Added *[BlockExplodeAfterEventSignal](BlockExplodeAfterEventSignal.md)*
#### Changed *[BlockInventoryComponent](BlockInventoryComponent.md)*
- Added base class [*BlockComponent*](BlockComponent.md)
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
- Added function *[createExplosion](Dimension.md#createexplosion)*
- Added function *[fillBlocks](Dimension.md#fillblocks)*
- Added function *[getBlockFromRay](Dimension.md#getblockfromray)*
- Added function *[getEntitiesFromRay](Dimension.md#getentitiesfromray)*
- Added function *[setWeather](Dimension.md#setweather)*
- Added function *[spawnEntity](Dimension.md#spawnentity)*
- Added function *[spawnItem](Dimension.md#spawnitem)*
- Added function *[spawnParticle](Dimension.md#spawnparticle)*
#### Added *[DynamicPropertiesDefinition](DynamicPropertiesDefinition.md)*
#### Added *[Effect](Effect.md)*
#### Added *[EffectAddAfterEvent](EffectAddAfterEvent.md)*
#### Added *[EffectAddAfterEventSignal](EffectAddAfterEventSignal.md)*
#### Added *[EffectType](EffectType.md)*
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
- Added property *[isSneaking](Entity.md#issneaking)*
- Added property *[isSprinting](Entity.md#issprinting)*
- Added property *[isSwimming](Entity.md#isswimming)*
- Added property *[lifetimeState](Entity.md#lifetimestate)*
- Added property *[scoreboardIdentity](Entity.md#scoreboardidentity)*
- Added property *[target](Entity.md#target)*
- Added function *[addEffect](Entity.md#addeffect)*
- Added function *[extinguishFire](Entity.md#extinguishfire)*
- Added function *[getBlockFromViewDirection](Entity.md#getblockfromviewdirection)*
- Added function *[getDynamicProperty](Entity.md#getdynamicproperty)*
- Added function *[getEffect](Entity.md#geteffect)*
- Added function *[getEffects](Entity.md#geteffects)*
- Added function *[getEntitiesFromViewDirection](Entity.md#getentitiesfromviewdirection)*
- Added function *[getRotation](Entity.md#getrotation)*
- Added function *[playAnimation](Entity.md#playanimation)*
- Added function *[removeDynamicProperty](Entity.md#removedynamicproperty)*
- Added function *[removeEffect](Entity.md#removeeffect)*
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
#### Added *[ILeverActionAfterEventSignal](ILeverActionAfterEventSignal.md)*
#### Added *[IPistonActivateAfterEventSignal](IPistonActivateAfterEventSignal.md)*
#### Added *[IPistonActivateBeforeEventSignal](IPistonActivateBeforeEventSignal.md)*
#### Added *[IPlayerJoinAfterEventSignal](IPlayerJoinAfterEventSignal.md)*
#### Added *[IPlayerLeaveAfterEventSignal](IPlayerLeaveAfterEventSignal.md)*
#### Added *[IPlayerSpawnAfterEventSignal](IPlayerSpawnAfterEventSignal.md)*
#### Added *[IProjectileHitAfterEventSignal](IProjectileHitAfterEventSignal.md)*
#### Added *[IScriptEventCommandMessageAfterEventSignal](IScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[IServerMessageAfterEventSignal](IServerMessageAfterEventSignal.md)*
#### Added *[ItemCompleteUseAfterEvent](ItemCompleteUseAfterEvent.md)*
#### Added *[ItemCompleteUseAfterEventSignal](ItemCompleteUseAfterEventSignal.md)*
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
- Added property *[isFlying](Player.md#isflying)*
- Added property *[isGliding](Player.md#isgliding)*
- Added property *[isJumping](Player.md#isjumping)*
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
