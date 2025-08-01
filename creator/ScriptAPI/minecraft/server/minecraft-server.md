---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server Module
description: Contents of the @minecraft/server module
---
# `@minecraft/server` Module

Contains many types related to manipulating a Minecraft world, including entities, blocks, dimensions, and more.

## [Changelog](changelog.md)

## Manifest Details
```json
{
    "module_name": "@minecraft/server",
    "version": "2.1.0"
}
```
This is version 2.x.x of this module, which is the latest as of version 1.21.110-beta.22 of Minecraft.

## Available Versions
- `2.3.0-beta`
- `2.1.0`
- `2.0.0`

### Prior Versions

The following API versions are from a major version that is documented here: [*@minecraft/server*](../../../priorscriptapi/minecraft/server-1xx/minecraft-server.md):
- `1.19.0`
- `1.18.0`
- `1.17.0`
- `1.16.0`
- `1.15.0`
- `1.14.0`
- `1.13.0`
- `1.12.0`
- `1.11.0`
- `1.10.0`
- `1.9.0`
- `1.8.0`
- `1.7.0`
- `1.6.0`
- `1.5.0`
- `1.4.0`
- `1.3.0`
- `1.2.0`
- `1.1.0`
- `1.0.0`


## Enumerations
- [AimAssistTargetMode](AimAssistTargetMode.md)
- [BlockComponentTypes](BlockComponentTypes.md)
- [BlockPistonState](BlockPistonState.md)
- [BlockVolumeIntersection](BlockVolumeIntersection.md)
- [BookErrorReason](BookErrorReason.md)
- [ButtonState](ButtonState.md)
- [CommandPermissionLevel](CommandPermissionLevel.md)
- [CompoundBlockVolumeAction](CompoundBlockVolumeAction.md)
- [CompoundBlockVolumePositionRelativity](CompoundBlockVolumePositionRelativity.md)
- [ContainerRulesErrorReason](ContainerRulesErrorReason.md)
- [CustomCommandErrorReason](CustomCommandErrorReason.md)
- [CustomCommandParamType](CustomCommandParamType.md)
- [CustomCommandSource](CustomCommandSource.md)
- [CustomCommandStatus](CustomCommandStatus.md)
- [CustomComponentNameErrorReason](CustomComponentNameErrorReason.md)
- [Difficulty](Difficulty.md)
- [Direction](Direction.md)
- [DisplaySlotId](DisplaySlotId.md)
- [DyeColor](DyeColor.md)
- [EasingType](EasingType.md)
- [EnchantmentSlot](EnchantmentSlot.md)
- [EntityComponentTypes](EntityComponentTypes.md)
- [EntityDamageCause](EntityDamageCause.md)
- [EntityInitializationCause](EntityInitializationCause.md)
- [EquipmentSlot](EquipmentSlot.md)
- [FluidType](FluidType.md)
- [GameMode](GameMode.md)
- [GameRule](GameRule.md)
- [GraphicsMode](GraphicsMode.md)
- [HudElement](HudElement.md)
- [HudVisibility](HudVisibility.md)
- [InputButton](InputButton.md)
- [InputMode](InputMode.md)
- [InputPermissionCategory](InputPermissionCategory.md)
- [ItemComponentTypes](ItemComponentTypes.md)
- [ItemLockMode](ItemLockMode.md)
- [LiquidSettings](LiquidSettings.md)
- [LiquidType](LiquidType.md)
- [MemoryTier](MemoryTier.md)
- [MoonPhase](MoonPhase.md)
- [MovementType](MovementType.md)
- [NamespaceNameErrorReason](NamespaceNameErrorReason.md)
- [ObjectiveSortOrder](ObjectiveSortOrder.md)
- [PaletteColor](PaletteColor.md)
- [PlatformType](PlatformType.md)
- [PlayerInventoryType](PlayerInventoryType.md)
- [PlayerPermissionLevel](PlayerPermissionLevel.md)
- [ScoreboardIdentityType](ScoreboardIdentityType.md)
- [ScriptEventSource](ScriptEventSource.md)
- [SignSide](SignSide.md)
- [StickyType](StickyType.md)
- [StructureAnimationMode](StructureAnimationMode.md)
- [StructureMirrorAxis](StructureMirrorAxis.md)
- [StructureRotation](StructureRotation.md)
- [StructureSaveMode](StructureSaveMode.md)
- [TimeOfDay](TimeOfDay.md)
- [TintMethod](TintMethod.md)
- [WatchdogTerminateReason](WatchdogTerminateReason.md)
- [WeatherType](WeatherType.md)

# Type Aliases
- [BlockComponentReturnType](BlockComponentReturnType.md)
- [BlockComponentTypeMap](BlockComponentTypeMap.md)
- [BlockStateArg](BlockStateArg.md)
- [EntityComponentReturnType](EntityComponentReturnType.md)
- [EntityComponentTypeMap](EntityComponentTypeMap.md)
- [EntityIdentifierType](EntityIdentifierType.md)
- [ItemComponentReturnType](ItemComponentReturnType.md)
- [ItemComponentTypeMap](ItemComponentTypeMap.md)
- [VanillaEntityIdentifier](VanillaEntityIdentifier.md)

## Classes
- [AimAssistCategory](AimAssistCategory.md)
- [AimAssistCategorySettings](AimAssistCategorySettings.md)
- [AimAssistPreset](AimAssistPreset.md)
- [AimAssistPresetSettings](AimAssistPresetSettings.md)
- [AimAssistRegistry](AimAssistRegistry.md)
- [BiomeType](BiomeType.md)
- [BiomeTypes](BiomeTypes.md)
- [Block](Block.md)
- [BlockBoundingBoxUtils](BlockBoundingBoxUtils.md)
- [BlockComponent](BlockComponent.md)
- [BlockComponentEntityFallOnEvent](BlockComponentEntityFallOnEvent.md)
- [BlockComponentOnPlaceEvent](BlockComponentOnPlaceEvent.md)
- [BlockComponentPlayerBreakEvent](BlockComponentPlayerBreakEvent.md)
- [BlockComponentPlayerInteractEvent](BlockComponentPlayerInteractEvent.md)
- [BlockComponentPlayerPlaceBeforeEvent](BlockComponentPlayerPlaceBeforeEvent.md)
- [BlockComponentRandomTickEvent](BlockComponentRandomTickEvent.md)
- [BlockComponentRegistry](BlockComponentRegistry.md)
- [BlockComponentStepOffEvent](BlockComponentStepOffEvent.md)
- [BlockComponentStepOnEvent](BlockComponentStepOnEvent.md)
- [BlockComponentTickEvent](BlockComponentTickEvent.md)
- [BlockCustomComponentInstance](BlockCustomComponentInstance.md)
- [BlockEvent](BlockEvent.md)
- [BlockExplodeAfterEvent](BlockExplodeAfterEvent.md)
- [BlockExplodeAfterEventSignal](BlockExplodeAfterEventSignal.md)
- [BlockFluidContainerComponent](BlockFluidContainerComponent.md)
- [BlockInventoryComponent](BlockInventoryComponent.md)
- [BlockLocationIterator](BlockLocationIterator.md)
- [BlockMapColorComponent](BlockMapColorComponent.md)
- [BlockMovableComponent](BlockMovableComponent.md)
- [BlockPermutation](BlockPermutation.md)
- [BlockPistonComponent](BlockPistonComponent.md)
- [BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)
- [BlockSignComponent](BlockSignComponent.md)
- [BlockStates](BlockStates.md)
- [BlockStateType](BlockStateType.md)
- [BlockType](BlockType.md)
- [BlockTypes](BlockTypes.md)
- [BlockVolume](BlockVolume.md)
- [BlockVolumeBase](BlockVolumeBase.md)
- [ButtonPushAfterEvent](ButtonPushAfterEvent.md)
- [ButtonPushAfterEventSignal](ButtonPushAfterEventSignal.md)
- [Camera](Camera.md)
- [ChatSendAfterEvent](ChatSendAfterEvent.md)
- [ChatSendAfterEventSignal](ChatSendAfterEventSignal.md)
- [ChatSendBeforeEvent](ChatSendBeforeEvent.md)
- [ChatSendBeforeEventSignal](ChatSendBeforeEventSignal.md)
- [ClientSystemInfo](ClientSystemInfo.md)
- [CommandResult](CommandResult.md)
- [Component](Component.md)
- [CompoundBlockVolume](CompoundBlockVolume.md)
- [Container](Container.md)
- [ContainerSlot](ContainerSlot.md)
- [CustomCommandOrigin](CustomCommandOrigin.md)
- [CustomCommandRegistry](CustomCommandRegistry.md)
- [CustomComponentParameters](CustomComponentParameters.md)
- [DataDrivenEntityTriggerAfterEvent](DataDrivenEntityTriggerAfterEvent.md)
- [DataDrivenEntityTriggerAfterEventSignal](DataDrivenEntityTriggerAfterEventSignal.md)
- [Dimension](Dimension.md)
- [DimensionType](DimensionType.md)
- [DimensionTypes](DimensionTypes.md)
- [Effect](Effect.md)
- [EffectAddAfterEvent](EffectAddAfterEvent.md)
- [EffectAddAfterEventSignal](EffectAddAfterEventSignal.md)
- [EffectAddBeforeEvent](EffectAddBeforeEvent.md)
- [EffectAddBeforeEventSignal](EffectAddBeforeEventSignal.md)
- [EffectType](EffectType.md)
- [EffectTypes](EffectTypes.md)
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
- [EntityColor2Component](EntityColor2Component.md)
- [EntityColorComponent](EntityColorComponent.md)
- [EntityComponent](EntityComponent.md)
- [EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)
- [EntityDieAfterEvent](EntityDieAfterEvent.md)
- [EntityDieAfterEventSignal](EntityDieAfterEventSignal.md)
- [EntityEquippableComponent](EntityEquippableComponent.md)
- [EntityExhaustionComponent](EntityExhaustionComponent.md)
- [EntityFireImmuneComponent](EntityFireImmuneComponent.md)
- [EntityFloatsInLiquidComponent](EntityFloatsInLiquidComponent.md)
- [EntityFlyingSpeedComponent](EntityFlyingSpeedComponent.md)
- [EntityFrictionModifierComponent](EntityFrictionModifierComponent.md)
- [EntityHealableComponent](EntityHealableComponent.md)
- [EntityHealthChangedAfterEvent](EntityHealthChangedAfterEvent.md)
- [EntityHealthChangedAfterEventSignal](EntityHealthChangedAfterEventSignal.md)
- [EntityHealthComponent](EntityHealthComponent.md)
- [EntityHitBlockAfterEvent](EntityHitBlockAfterEvent.md)
- [EntityHitBlockAfterEventSignal](EntityHitBlockAfterEventSignal.md)
- [EntityHitEntityAfterEvent](EntityHitEntityAfterEvent.md)
- [EntityHitEntityAfterEventSignal](EntityHitEntityAfterEventSignal.md)
- [EntityHungerComponent](EntityHungerComponent.md)
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
- [EntityLavaMovementComponent](EntityLavaMovementComponent.md)
- [EntityLeashableComponent](EntityLeashableComponent.md)
- [EntityLoadAfterEvent](EntityLoadAfterEvent.md)
- [EntityLoadAfterEventSignal](EntityLoadAfterEventSignal.md)
- [EntityMarkVariantComponent](EntityMarkVariantComponent.md)
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
- [EntityNpcComponent](EntityNpcComponent.md)
- [EntityOnFireComponent](EntityOnFireComponent.md)
- [EntityProjectileComponent](EntityProjectileComponent.md)
- [EntityPushThroughComponent](EntityPushThroughComponent.md)
- [EntityRemoveAfterEvent](EntityRemoveAfterEvent.md)
- [EntityRemoveAfterEventSignal](EntityRemoveAfterEventSignal.md)
- [EntityRemoveBeforeEvent](EntityRemoveBeforeEvent.md)
- [EntityRemoveBeforeEventSignal](EntityRemoveBeforeEventSignal.md)
- [EntityRideableComponent](EntityRideableComponent.md)
- [EntityRidingComponent](EntityRidingComponent.md)
- [EntitySaturationComponent](EntitySaturationComponent.md)
- [EntityScaleComponent](EntityScaleComponent.md)
- [EntitySkinIdComponent](EntitySkinIdComponent.md)
- [EntitySpawnAfterEvent](EntitySpawnAfterEvent.md)
- [EntitySpawnAfterEventSignal](EntitySpawnAfterEventSignal.md)
- [EntityStrengthComponent](EntityStrengthComponent.md)
- [EntityTameableComponent](EntityTameableComponent.md)
- [EntityTameMountComponent](EntityTameMountComponent.md)
- [EntityType](EntityType.md)
- [EntityTypeFamilyComponent](EntityTypeFamilyComponent.md)
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
- [FluidContainer](FluidContainer.md)
- [GameRuleChangeAfterEvent](GameRuleChangeAfterEvent.md)
- [GameRuleChangeAfterEventSignal](GameRuleChangeAfterEventSignal.md)
- [GameRules](GameRules.md)
- [InputInfo](InputInfo.md)
- [ItemBookComponent](ItemBookComponent.md)
- [ItemCompleteUseAfterEvent](ItemCompleteUseAfterEvent.md)
- [ItemCompleteUseAfterEventSignal](ItemCompleteUseAfterEventSignal.md)
- [ItemCompleteUseEvent](ItemCompleteUseEvent.md)
- [ItemComponent](ItemComponent.md)
- [ItemComponentBeforeDurabilityDamageEvent](ItemComponentBeforeDurabilityDamageEvent.md)
- [ItemComponentCompleteUseEvent](ItemComponentCompleteUseEvent.md)
- [ItemComponentConsumeEvent](ItemComponentConsumeEvent.md)
- [ItemComponentHitEntityEvent](ItemComponentHitEntityEvent.md)
- [ItemComponentMineBlockEvent](ItemComponentMineBlockEvent.md)
- [ItemComponentRegistry](ItemComponentRegistry.md)
- [ItemComponentUseEvent](ItemComponentUseEvent.md)
- [ItemComponentUseOnEvent](ItemComponentUseOnEvent.md)
- [ItemCompostableComponent](ItemCompostableComponent.md)
- [ItemCooldownComponent](ItemCooldownComponent.md)
- [ItemCustomComponentInstance](ItemCustomComponentInstance.md)
- [ItemDurabilityComponent](ItemDurabilityComponent.md)
- [ItemDyeableComponent](ItemDyeableComponent.md)
- [ItemEnchantableComponent](ItemEnchantableComponent.md)
- [ItemFoodComponent](ItemFoodComponent.md)
- [ItemInventoryComponent](ItemInventoryComponent.md)
- [ItemPotionComponent](ItemPotionComponent.md)
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
- [ItemUseOnEvent](ItemUseOnEvent.md)
- [LeverActionAfterEvent](LeverActionAfterEvent.md)
- [LeverActionAfterEventSignal](LeverActionAfterEventSignal.md)
- [ListBlockVolume](ListBlockVolume.md)
- [LootTableManager](LootTableManager.md)
- [MessageReceiveAfterEvent](MessageReceiveAfterEvent.md)
- [MolangVariableMap](MolangVariableMap.md)
- [PackSettingChangeAfterEvent](PackSettingChangeAfterEvent.md)
- [PackSettingChangeAfterEventSignal](PackSettingChangeAfterEventSignal.md)
- [PistonActivateAfterEvent](PistonActivateAfterEvent.md)
- [PistonActivateAfterEventSignal](PistonActivateAfterEventSignal.md)
- [Player](Player.md)
- [PlayerAimAssist](PlayerAimAssist.md)
- [PlayerBreakBlockAfterEvent](PlayerBreakBlockAfterEvent.md)
- [PlayerBreakBlockAfterEventSignal](PlayerBreakBlockAfterEventSignal.md)
- [PlayerBreakBlockBeforeEvent](PlayerBreakBlockBeforeEvent.md)
- [PlayerBreakBlockBeforeEventSignal](PlayerBreakBlockBeforeEventSignal.md)
- [PlayerButtonInputAfterEvent](PlayerButtonInputAfterEvent.md)
- [PlayerButtonInputAfterEventSignal](PlayerButtonInputAfterEventSignal.md)
- [PlayerCursorInventoryComponent](PlayerCursorInventoryComponent.md)
- [PlayerDimensionChangeAfterEvent](PlayerDimensionChangeAfterEvent.md)
- [PlayerDimensionChangeAfterEventSignal](PlayerDimensionChangeAfterEventSignal.md)
- [PlayerEmoteAfterEvent](PlayerEmoteAfterEvent.md)
- [PlayerEmoteAfterEventSignal](PlayerEmoteAfterEventSignal.md)
- [PlayerGameModeChangeAfterEvent](PlayerGameModeChangeAfterEvent.md)
- [PlayerGameModeChangeAfterEventSignal](PlayerGameModeChangeAfterEventSignal.md)
- [PlayerGameModeChangeBeforeEvent](PlayerGameModeChangeBeforeEvent.md)
- [PlayerGameModeChangeBeforeEventSignal](PlayerGameModeChangeBeforeEventSignal.md)
- [PlayerHotbarSelectedSlotChangeAfterEvent](PlayerHotbarSelectedSlotChangeAfterEvent.md)
- [PlayerHotbarSelectedSlotChangeAfterEventSignal](PlayerHotbarSelectedSlotChangeAfterEventSignal.md)
- [PlayerInputModeChangeAfterEvent](PlayerInputModeChangeAfterEvent.md)
- [PlayerInputModeChangeAfterEventSignal](PlayerInputModeChangeAfterEventSignal.md)
- [PlayerInputPermissionCategoryChangeAfterEvent](PlayerInputPermissionCategoryChangeAfterEvent.md)
- [PlayerInputPermissionCategoryChangeAfterEventSignal](PlayerInputPermissionCategoryChangeAfterEventSignal.md)
- [PlayerInputPermissions](PlayerInputPermissions.md)
- [PlayerInteractWithBlockAfterEvent](PlayerInteractWithBlockAfterEvent.md)
- [PlayerInteractWithBlockAfterEventSignal](PlayerInteractWithBlockAfterEventSignal.md)
- [PlayerInteractWithBlockBeforeEvent](PlayerInteractWithBlockBeforeEvent.md)
- [PlayerInteractWithBlockBeforeEventSignal](PlayerInteractWithBlockBeforeEventSignal.md)
- [PlayerInteractWithEntityAfterEvent](PlayerInteractWithEntityAfterEvent.md)
- [PlayerInteractWithEntityAfterEventSignal](PlayerInteractWithEntityAfterEventSignal.md)
- [PlayerInteractWithEntityBeforeEvent](PlayerInteractWithEntityBeforeEvent.md)
- [PlayerInteractWithEntityBeforeEventSignal](PlayerInteractWithEntityBeforeEventSignal.md)
- [PlayerInventoryItemChangeAfterEvent](PlayerInventoryItemChangeAfterEvent.md)
- [PlayerInventoryItemChangeAfterEventSignal](PlayerInventoryItemChangeAfterEventSignal.md)
- [PlayerJoinAfterEvent](PlayerJoinAfterEvent.md)
- [PlayerJoinAfterEventSignal](PlayerJoinAfterEventSignal.md)
- [PlayerLeaveAfterEvent](PlayerLeaveAfterEvent.md)
- [PlayerLeaveAfterEventSignal](PlayerLeaveAfterEventSignal.md)
- [PlayerLeaveBeforeEvent](PlayerLeaveBeforeEvent.md)
- [PlayerLeaveBeforeEventSignal](PlayerLeaveBeforeEventSignal.md)
- [PlayerPlaceBlockAfterEvent](PlayerPlaceBlockAfterEvent.md)
- [PlayerPlaceBlockAfterEventSignal](PlayerPlaceBlockAfterEventSignal.md)
- [PlayerPlaceBlockBeforeEvent](PlayerPlaceBlockBeforeEvent.md)
- [PlayerPlaceBlockBeforeEventSignal](PlayerPlaceBlockBeforeEventSignal.md)
- [PlayerSpawnAfterEvent](PlayerSpawnAfterEvent.md)
- [PlayerSpawnAfterEventSignal](PlayerSpawnAfterEventSignal.md)
- [PotionEffectType](PotionEffectType.md)
- [PotionLiquidType](PotionLiquidType.md)
- [PotionModifierType](PotionModifierType.md)
- [Potions](Potions.md)
- [PressurePlatePopAfterEvent](PressurePlatePopAfterEvent.md)
- [PressurePlatePopAfterEventSignal](PressurePlatePopAfterEventSignal.md)
- [PressurePlatePushAfterEvent](PressurePlatePushAfterEvent.md)
- [PressurePlatePushAfterEventSignal](PressurePlatePushAfterEventSignal.md)
- [ProjectileHitBlockAfterEvent](ProjectileHitBlockAfterEvent.md)
- [ProjectileHitBlockAfterEventSignal](ProjectileHitBlockAfterEventSignal.md)
- [ProjectileHitEntityAfterEvent](ProjectileHitEntityAfterEvent.md)
- [ProjectileHitEntityAfterEventSignal](ProjectileHitEntityAfterEventSignal.md)
- [Scoreboard](Scoreboard.md)
- [ScoreboardIdentity](ScoreboardIdentity.md)
- [ScoreboardObjective](ScoreboardObjective.md)
- [ScoreboardScoreInfo](ScoreboardScoreInfo.md)
- [ScreenDisplay](ScreenDisplay.md)
- [ScriptEventCommandMessageAfterEvent](ScriptEventCommandMessageAfterEvent.md)
- [ScriptEventCommandMessageAfterEventSignal](ScriptEventCommandMessageAfterEventSignal.md)
- [Seat](Seat.md)
- [ServerMessageAfterEventSignal](ServerMessageAfterEventSignal.md)
- [ShutdownBeforeEventSignal](ShutdownBeforeEventSignal.md)
- [ShutdownEvent](ShutdownEvent.md)
- [StartupBeforeEventSignal](StartupBeforeEventSignal.md)
- [StartupEvent](StartupEvent.md)
- [Structure](Structure.md)
- [StructureManager](StructureManager.md)
- [System](System.md)
- [SystemAfterEvents](SystemAfterEvents.md)
- [SystemBeforeEvents](SystemBeforeEvents.md)
- [SystemInfo](SystemInfo.md)
- [TargetBlockHitAfterEvent](TargetBlockHitAfterEvent.md)
- [TargetBlockHitAfterEventSignal](TargetBlockHitAfterEventSignal.md)
- [Trigger](Trigger.md)
- [TripWireTripAfterEvent](TripWireTripAfterEvent.md)
- [TripWireTripAfterEventSignal](TripWireTripAfterEventSignal.md)
- [WatchdogTerminateBeforeEvent](WatchdogTerminateBeforeEvent.md)
- [WatchdogTerminateBeforeEventSignal](WatchdogTerminateBeforeEventSignal.md)
- [WeatherChangeAfterEvent](WeatherChangeAfterEvent.md)
- [WeatherChangeAfterEventSignal](WeatherChangeAfterEventSignal.md)
- [WeatherChangeBeforeEvent](WeatherChangeBeforeEvent.md)
- [WeatherChangeBeforeEventSignal](WeatherChangeBeforeEventSignal.md)
- [World](World.md)
- [WorldAfterEvents](WorldAfterEvents.md)
- [WorldBeforeEvents](WorldBeforeEvents.md)
- [WorldLoadAfterEvent](WorldLoadAfterEvent.md)
- [WorldLoadAfterEventSignal](WorldLoadAfterEventSignal.md)

## Interfaces
- [BiomeSearchOptions](BiomeSearchOptions.md)
- [BlockBoundingBox](BlockBoundingBox.md)
- [BlockCustomComponent](BlockCustomComponent.md)
- [BlockEventOptions](BlockEventOptions.md)
- [BlockFillOptions](BlockFillOptions.md)
- [BlockFilter](BlockFilter.md)
- [BlockHitInformation](BlockHitInformation.md)
- [BlockRaycastHit](BlockRaycastHit.md)
- [BlockRaycastOptions](BlockRaycastOptions.md)
- [CameraFadeOptions](CameraFadeOptions.md)
- [CameraFadeTimeOptions](CameraFadeTimeOptions.md)
- [CameraFixedBoomOptions](CameraFixedBoomOptions.md)
- [CameraFovOptions](CameraFovOptions.md)
- [CameraSetFacingOptions](CameraSetFacingOptions.md)
- [CameraSetLocationOptions](CameraSetLocationOptions.md)
- [CameraSetPosOptions](CameraSetPosOptions.md)
- [CameraSetRotOptions](CameraSetRotOptions.md)
- [CameraTargetOptions](CameraTargetOptions.md)
- [CompoundBlockVolumeItem](CompoundBlockVolumeItem.md)
- [ContainerRules](ContainerRules.md)
- [CustomCommand](CustomCommand.md)
- [CustomCommandParameter](CustomCommandParameter.md)
- [CustomCommandResult](CustomCommandResult.md)
- [DefinitionModifier](DefinitionModifier.md)
- [DimensionLocation](DimensionLocation.md)
- [EaseOptions](EaseOptions.md)
- [Enchantment](Enchantment.md)
- [EntityApplyDamageByProjectileOptions](EntityApplyDamageByProjectileOptions.md)
- [EntityApplyDamageOptions](EntityApplyDamageOptions.md)
- [EntityDamageSource](EntityDamageSource.md)
- [EntityDataDrivenTriggerEventOptions](EntityDataDrivenTriggerEventOptions.md)
- [EntityEffectOptions](EntityEffectOptions.md)
- [EntityEventOptions](EntityEventOptions.md)
- [EntityFilter](EntityFilter.md)
- [EntityHitInformation](EntityHitInformation.md)
- [EntityQueryOptions](EntityQueryOptions.md)
- [EntityQueryPropertyOptions](EntityQueryPropertyOptions.md)
- [EntityQueryScoreOptions](EntityQueryScoreOptions.md)
- [EntityRaycastHit](EntityRaycastHit.md)
- [EntityRaycastOptions](EntityRaycastOptions.md)
- [EqualsComparison](EqualsComparison.md)
- [ExplosionOptions](ExplosionOptions.md)
- [GreaterThanComparison](GreaterThanComparison.md)
- [GreaterThanOrEqualsComparison](GreaterThanOrEqualsComparison.md)
- [HotbarEventOptions](HotbarEventOptions.md)
- [InputEventOptions](InputEventOptions.md)
- [InventoryItemEventOptions](InventoryItemEventOptions.md)
- [ItemCustomComponent](ItemCustomComponent.md)
- [JigsawPlaceOptions](JigsawPlaceOptions.md)
- [JigsawStructurePlaceOptions](JigsawStructurePlaceOptions.md)
- [LessThanComparison](LessThanComparison.md)
- [LessThanOrEqualsComparison](LessThanOrEqualsComparison.md)
- [MusicOptions](MusicOptions.md)
- [NotEqualsComparison](NotEqualsComparison.md)
- [PlayAnimationOptions](PlayAnimationOptions.md)
- [PlayerAimAssistSettings](PlayerAimAssistSettings.md)
- [PlayerSoundOptions](PlayerSoundOptions.md)
- [PotionOptions](PotionOptions.md)
- [ProjectileShootOptions](ProjectileShootOptions.md)
- [RangeComparison](RangeComparison.md)
- [RawMessage](RawMessage.md)
- [RawMessageScore](RawMessageScore.md)
- [RawText](RawText.md)
- [RGB](RGB.md)
- [RGBA](RGBA.md)
- [ScoreboardObjectiveDisplayOptions](ScoreboardObjectiveDisplayOptions.md)
- [ScriptEventMessageFilterOptions](ScriptEventMessageFilterOptions.md)
- [SpawnEntityOptions](SpawnEntityOptions.md)
- [StructureCreateOptions](StructureCreateOptions.md)
- [StructurePlaceOptions](StructurePlaceOptions.md)
- [TeleportOptions](TeleportOptions.md)
- [TitleDisplayOptions](TitleDisplayOptions.md)
- [Vector2](Vector2.md)
- [Vector3](Vector3.md)
- [VectorXZ](VectorXZ.md)
- [WorldSoundOptions](WorldSoundOptions.md)

## Errors
- [BlockCustomComponentAlreadyRegisteredError](BlockCustomComponentAlreadyRegisteredError.md)
- [BlockCustomComponentReloadNewComponentError](BlockCustomComponentReloadNewComponentError.md)
- [BlockCustomComponentReloadNewEventError](BlockCustomComponentReloadNewEventError.md)
- [BlockCustomComponentReloadVersionError](BlockCustomComponentReloadVersionError.md)
- [BookError](BookError.md)
- [BookPageContentError](BookPageContentError.md)
- [CommandError](CommandError.md)
- [ContainerRulesError](ContainerRulesError.md)
- [CustomCommandError](CustomCommandError.md)
- [CustomComponentInvalidRegistryError](CustomComponentInvalidRegistryError.md)
- [CustomComponentNameError](CustomComponentNameError.md)
- [EnchantmentLevelOutOfBoundsError](EnchantmentLevelOutOfBoundsError.md)
- [EnchantmentTypeNotCompatibleError](EnchantmentTypeNotCompatibleError.md)
- [EnchantmentTypeUnknownIdError](EnchantmentTypeUnknownIdError.md)
- [EntitySpawnError](EntitySpawnError.md)
- [InvalidContainerError](InvalidContainerError.md)
- [InvalidContainerSlotError](InvalidContainerSlotError.md)
- [InvalidEntityError](InvalidEntityError.md)
- [InvalidItemStackError](InvalidItemStackError.md)
- [InvalidIteratorError](InvalidIteratorError.md)
- [InvalidStructureError](InvalidStructureError.md)
- [ItemCustomComponentAlreadyRegisteredError](ItemCustomComponentAlreadyRegisteredError.md)
- [ItemCustomComponentReloadNewComponentError](ItemCustomComponentReloadNewComponentError.md)
- [ItemCustomComponentReloadNewEventError](ItemCustomComponentReloadNewEventError.md)
- [ItemCustomComponentReloadVersionError](ItemCustomComponentReloadVersionError.md)
- [LocationInUnloadedChunkError](LocationInUnloadedChunkError.md)
- [LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError.md)
- [NamespaceNameError](NamespaceNameError.md)
- [PlaceJigsawError](PlaceJigsawError.md)
- [RawMessageError](RawMessageError.md)
- [UnloadedChunksError](UnloadedChunksError.md)

## Constants

### **HudElementsCount**
`static read-only HudElementsCount = 13;`

Type: *number*

### **HudVisibilityCount**
`static read-only HudVisibilityCount = 2;`

Type: *number*

### **MoonPhaseCount**
`static read-only MoonPhaseCount = 8;`

Holds the number of MoonPhases

Type: *number*

### **TicksPerDay**
`static read-only TicksPerDay = 24000;`

How many times the server ticks in one in-game day.

Type: *number*

### **TicksPerSecond**
`static read-only TicksPerSecond = 20;`

How many times the server ticks per second of real time.

Type: *number*

## Objects
  
### **system**
`static read-only system: System;`

A class that provides system-level events and functions.

Type: [*System*](System.md)
  
### **world**
`static read-only world: World;`

A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.

Type: [*World*](World.md)

## Peer Dependencies
- [`@minecraft/common`](../../../scriptapi/minecraft/common/minecraft-common.md)
- `@minecraft/vanilla-data`
