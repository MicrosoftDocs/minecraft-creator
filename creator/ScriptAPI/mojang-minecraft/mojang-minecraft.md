---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft Module
description: Contents of the mojang-minecraft module
---
# mojang-minecraft Module
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to changes to a piston expanding or retracting.

#### **Examples**
##### *place_bottom_stone_slab.js*
```javascript
import { world, MinecraftBlockTypes, BlockProperties, BlockLocation } from "mojang-minecraft";
// Create the permutation
let bottomStoneSlab = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();
bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
// Fetch the block
const block = world.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
// Set the permutation
block.setPermutation(bottomStoneSlab);
```

## Manifest Details
```json
{
    // mojang-minecraft
    "uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
    "version": [ 0, 1, 0 ]
}
```

## Enumerations
- [Direction](Direction.md)
- [GameMode](GameMode.md)

## Classes
- [BeforeChatEvent](BeforeChatEvent.md)
- [BeforeChatEventSignal](BeforeChatEventSignal.md)
- [BeforeDataDrivenEntityTriggerEvent](BeforeDataDrivenEntityTriggerEvent.md)
- [BeforeDataDrivenEntityTriggerEventSignal](BeforeDataDrivenEntityTriggerEventSignal.md)
- [BeforeExplosionEvent](BeforeExplosionEvent.md)
- [BeforeExplosionEventSignal](BeforeExplosionEventSignal.md)
- [BeforeItemDefinitionEventSignal](BeforeItemDefinitionEventSignal.md)
- [BeforeItemDefinitionTriggeredEvent](BeforeItemDefinitionTriggeredEvent.md)
- [BeforeItemUseEvent](BeforeItemUseEvent.md)
- [BeforeItemUseEventSignal](BeforeItemUseEventSignal.md)
- [BeforeItemUseOnEvent](BeforeItemUseOnEvent.md)
- [BeforeItemUseOnEventSignal](BeforeItemUseOnEventSignal.md)
- [BeforePistonActivateEvent](BeforePistonActivateEvent.md)
- [BeforePistonActivateEventSignal](BeforePistonActivateEventSignal.md)
- [Block](Block.md)
- [BlockAreaSize](BlockAreaSize.md)
- [BlockBreakEvent](BlockBreakEvent.md)
- [BlockBreakEventSignal](BlockBreakEventSignal.md)
- [BlockComponent](BlockComponent.md)
- [BlockEvent](BlockEvent.md)
- [BlockExplodeEvent](BlockExplodeEvent.md)
- [BlockExplodeEventSignal](BlockExplodeEventSignal.md)
- [BlockHitInformation](BlockHitInformation.md)
- [BlockInventoryComponent](BlockInventoryComponent.md)
- [BlockInventoryComponentContainer](BlockInventoryComponentContainer.md)
- [BlockLavaContainerComponent](BlockLavaContainerComponent.md)
- [BlockLocation](BlockLocation.md)
- [BlockPermutation](BlockPermutation.md)
- [BlockPistonComponent](BlockPistonComponent.md)
- [BlockPlaceEvent](BlockPlaceEvent.md)
- [BlockPlaceEventSignal](BlockPlaceEventSignal.md)
- [BlockPotionContainerComponent](BlockPotionContainerComponent.md)
- [BlockProperties](BlockProperties.md)
- [BlockRaycastOptions](BlockRaycastOptions.md)
- [BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)
- [BlockSnowContainerComponent](BlockSnowContainerComponent.md)
- [BlockType](BlockType.md)
- [BlockWaterContainerComponent](BlockWaterContainerComponent.md)
- [BoolBlockProperty](BoolBlockProperty.md)
- [ChatEvent](ChatEvent.md)
- [ChatEventSignal](ChatEventSignal.md)
- [Color](Color.md)
- [Container](Container.md)
- [DataDrivenEntityTriggerEvent](DataDrivenEntityTriggerEvent.md)
- [DataDrivenEntityTriggerEventSignal](DataDrivenEntityTriggerEventSignal.md)
- [DefinitionModifier](DefinitionModifier.md)
- [Dimension](Dimension.md)
- [DynamicPropertiesDefinition](DynamicPropertiesDefinition.md)
- [Effect](Effect.md)
- [EffectAddEvent](EffectAddEvent.md)
- [EffectAddEventSignal](EffectAddEventSignal.md)
- [EffectType](EffectType.md)
- [Enchantment](Enchantment.md)
- [EnchantmentList](EnchantmentList.md)
- [EnchantmentSlot](EnchantmentSlot.md)
- [EnchantmentType](EnchantmentType.md)
- [Entity](Entity.md)
- [EntityAddRiderComponent](EntityAddRiderComponent.md)
- [EntityAgeableComponent](EntityAgeableComponent.md)
- [EntityBreathableComponent](EntityBreathableComponent.md)
- [EntityCanClimbComponent](EntityCanClimbComponent.md)
- [EntityCanFlyComponent](EntityCanFlyComponent.md)
- [EntityCanPowerJumpComponent](EntityCanPowerJumpComponent.md)
- [EntityColorComponent](EntityColorComponent.md)
- [EntityCreateEvent](EntityCreateEvent.md)
- [EntityCreateEventSignal](EntityCreateEventSignal.md)
- [EntityDataDrivenTriggerEventOptions](EntityDataDrivenTriggerEventOptions.md)
- [EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)
- [EntityEventOptions](EntityEventOptions.md)
- [EntityFireImmuneComponent](EntityFireImmuneComponent.md)
- [EntityFloatsInLiquidComponent](EntityFloatsInLiquidComponent.md)
- [EntityFlyingSpeedComponent](EntityFlyingSpeedComponent.md)
- [EntityFrictionModifierComponent](EntityFrictionModifierComponent.md)
- [EntityGroundOffsetComponent](EntityGroundOffsetComponent.md)
- [EntityHealableComponent](EntityHealableComponent.md)
- [EntityHealthComponent](EntityHealthComponent.md)
- [EntityHitEvent](EntityHitEvent.md)
- [EntityHitEventSignal](EntityHitEventSignal.md)
- [EntityHitInformation](EntityHitInformation.md)
- [EntityHurtEvent](EntityHurtEvent.md)
- [EntityHurtEventSignal](EntityHurtEventSignal.md)
- [EntityInventoryComponent](EntityInventoryComponent.md)
- [EntityIsBabyComponent](EntityIsBabyComponent.md)
- [EntityIsChargedComponent](EntityIsChargedComponent.md)
- [EntityIsChestedComponent](EntityIsChestedComponent.md)
- [EntityIsDyableComponent](EntityIsDyableComponent.md)
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
- [EntityNavigationFloatComponent](EntityNavigationFloatComponent.md)
- [EntityNavigationFlyComponent](EntityNavigationFlyComponent.md)
- [EntityNavigationGenericComponent](EntityNavigationGenericComponent.md)
- [EntityNavigationHoverComponent](EntityNavigationHoverComponent.md)
- [EntityNavigationWalkComponent](EntityNavigationWalkComponent.md)
- [EntityPushThroughComponent](EntityPushThroughComponent.md)
- [EntityQueryOptions](EntityQueryOptions.md)
- [EntityQueryScoreOptions](EntityQueryScoreOptions.md)
- [EntityRaycastOptions](EntityRaycastOptions.md)
- [EntityRideableComponent](EntityRideableComponent.md)
- [EntityScaleComponent](EntityScaleComponent.md)
- [EntitySkinIdComponent](EntitySkinIdComponent.md)
- [EntityStrengthComponent](EntityStrengthComponent.md)
- [EntityTameableComponent](EntityTameableComponent.md)
- [EntityType](EntityType.md)
- [EntityTypeIterator](EntityTypeIterator.md)
- [EntityTypes](EntityTypes.md)
- [EntityUnderwaterMovementComponent](EntityUnderwaterMovementComponent.md)
- [EntityVariantComponent](EntityVariantComponent.md)
- [EntityWantsJockeyComponent](EntityWantsJockeyComponent.md)
- [Events](Events.md)
- [ExplosionEvent](ExplosionEvent.md)
- [ExplosionEventSignal](ExplosionEventSignal.md)
- [ExplosionOptions](ExplosionOptions.md)
- [FeedItem](FeedItem.md)
- [FeedItemEffect](FeedItemEffect.md)
- [FilterGroup](FilterGroup.md)
- [FluidContainer](FluidContainer.md)
- [IBlockProperty](IBlockProperty.md)
- [IEntityComponent](IEntityComponent.md)
- [IntBlockProperty](IntBlockProperty.md)
- [InventoryComponentContainer](InventoryComponentContainer.md)
- [ItemCompleteChargeEvent](ItemCompleteChargeEvent.md)
- [ItemCompleteChargeEventSignal](ItemCompleteChargeEventSignal.md)
- [ItemCooldownComponent](ItemCooldownComponent.md)
- [ItemDefinitionEventSignal](ItemDefinitionEventSignal.md)
- [ItemDefinitionTriggeredEvent](ItemDefinitionTriggeredEvent.md)
- [ItemDurabilityComponent](ItemDurabilityComponent.md)
- [ItemEnchantsComponent](ItemEnchantsComponent.md)
- [ItemFoodComponent](ItemFoodComponent.md)
- [ItemReleaseChargeEvent](ItemReleaseChargeEvent.md)
- [ItemReleaseChargeEventSignal](ItemReleaseChargeEventSignal.md)
- [Items](Items.md)
- [ItemStack](ItemStack.md)
- [ItemStartChargeEvent](ItemStartChargeEvent.md)
- [ItemStartChargeEventSignal](ItemStartChargeEventSignal.md)
- [ItemStartUseOnEvent](ItemStartUseOnEvent.md)
- [ItemStartUseOnEventSignal](ItemStartUseOnEventSignal.md)
- [ItemStopChargeEvent](ItemStopChargeEvent.md)
- [ItemStopChargeEventSignal](ItemStopChargeEventSignal.md)
- [ItemStopUseOnEvent](ItemStopUseOnEvent.md)
- [ItemStopUseOnEventSignal](ItemStopUseOnEventSignal.md)
- [ItemType](ItemType.md)
- [ItemUseEvent](ItemUseEvent.md)
- [ItemUseEventSignal](ItemUseEventSignal.md)
- [ItemUseOnEvent](ItemUseOnEvent.md)
- [ItemUseOnEventSignal](ItemUseOnEventSignal.md)
- [LeverActionEvent](LeverActionEvent.md)
- [LeverActivateEventSignal](LeverActivateEventSignal.md)
- [Location](Location.md)
- [MinecraftBlockTypes](MinecraftBlockTypes.md)
- [MinecraftDimensionTypes](MinecraftDimensionTypes.md)
- [MinecraftEffectTypes](MinecraftEffectTypes.md)
- [MinecraftEnchantmentTypes](MinecraftEnchantmentTypes.md)
- [MinecraftEntityTypes](MinecraftEntityTypes.md)
- [MinecraftItemTypes](MinecraftItemTypes.md)
- [MolangVariableMap](MolangVariableMap.md)
- [MusicOptions](MusicOptions.md)
- [NavigationResult](NavigationResult.md)
- [NumberRange](NumberRange.md)
- [PistonActivateEvent](PistonActivateEvent.md)
- [PistonActivateEventSignal](PistonActivateEventSignal.md)
- [PitchYawRotation](PitchYawRotation.md)
- [Player](Player.md)
- [PlayerInventoryComponentContainer](PlayerInventoryComponentContainer.md)
- [PlayerIterator](PlayerIterator.md)
- [PlayerJoinEvent](PlayerJoinEvent.md)
- [PlayerJoinEventSignal](PlayerJoinEventSignal.md)
- [PlayerLeaveEvent](PlayerLeaveEvent.md)
- [PlayerLeaveEventSignal](PlayerLeaveEventSignal.md)
- [ProjectileHitEvent](ProjectileHitEvent.md)
- [ProjectileHitEventSignal](ProjectileHitEventSignal.md)
- [PropertyRegistry](PropertyRegistry.md)
- [ScreenDisplay](ScreenDisplay.md)
- [SculkSpreader](SculkSpreader.md)
- [Seat](Seat.md)
- [SoundOptions](SoundOptions.md)
- [StringBlockProperty](StringBlockProperty.md)
- [TickEvent](TickEvent.md)
- [TickEventSignal](TickEventSignal.md)
- [TitleDisplayOptions](TitleDisplayOptions.md)
- [Trigger](Trigger.md)
- [Vector](Vector.md)
- [WeatherChangeEvent](WeatherChangeEvent.md)
- [WeatherChangeEventSignal](WeatherChangeEventSignal.md)
- [World](World.md)
- [WorldInitializeEvent](WorldInitializeEvent.md)
- [WorldInitializeEventSignal](WorldInitializeEventSignal.md)

## Constants
### **TicksPerSecond**
`static read-only TicksPerSecond = 20;`

How many times the server ticks per second of real time.

Type: *number*



## Objects
### **world**
`static read-only world: World;`

A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.

Type: [*World*](World.md)


