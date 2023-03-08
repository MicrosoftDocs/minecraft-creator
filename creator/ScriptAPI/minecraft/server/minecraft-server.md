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
    "version": "1.1.0"
}
```

## Available Versions
- `1.2.0-beta`
- `1.1.0`

## Enumerations
- [Direction](Direction.md)
- [DisplaySlotId](DisplaySlotId.md)
- [DyeColor](DyeColor.md)
- [EntityDamageCause](EntityDamageCause.md)
- [FluidType](FluidType.md)
- [GameMode](GameMode.md)
- [ItemLockMode](ItemLockMode.md)
- [MessageSourceType](MessageSourceType.md)
- [ObjectiveSortOrder](ObjectiveSortOrder.md)
- [ScoreboardIdentityType](ScoreboardIdentityType.md)
- [TimeOfDay](TimeOfDay.md)
- [WatchdogTerminateReason](WatchdogTerminateReason.md)

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
- [BeforeWatchdogTerminateEvent](BeforeWatchdogTerminateEvent.md)
- [BeforeWatchdogTerminateEventSignal](BeforeWatchdogTerminateEventSignal.md)
- [Block](Block.md)
- [BlockAreaSize](BlockAreaSize.md)
- [BlockBreakEvent](BlockBreakEvent.md)
- [BlockBreakEventSignal](BlockBreakEventSignal.md)
- [BlockComponent](BlockComponent.md)
- [BlockEvent](BlockEvent.md)
- [BlockExplodeEvent](BlockExplodeEvent.md)
- [BlockExplodeEventSignal](BlockExplodeEventSignal.md)
- [BlockInventoryComponent](BlockInventoryComponent.md)
- [BlockLavaContainerComponent](BlockLavaContainerComponent.md)
- [BlockLiquidContainerComponent](BlockLiquidContainerComponent.md)
- [BlockPermutation](BlockPermutation.md)
- [BlockPistonComponent](BlockPistonComponent.md)
- [BlockPlaceEvent](BlockPlaceEvent.md)
- [BlockPlaceEventSignal](BlockPlaceEventSignal.md)
- [BlockPotionContainerComponent](BlockPotionContainerComponent.md)
- [BlockProperties](BlockProperties.md)
- [BlockProperty](BlockProperty.md)
- [BlockPropertyType](BlockPropertyType.md)
- [BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)
- [BlockSignComponent](BlockSignComponent.md)
- [BlockSnowContainerComponent](BlockSnowContainerComponent.md)
- [BlockType](BlockType.md)
- [BlockWaterContainerComponent](BlockWaterContainerComponent.md)
- [ButtonPushEvent](ButtonPushEvent.md)
- [ButtonPushEventSignal](ButtonPushEventSignal.md)
- [ChatEvent](ChatEvent.md)
- [ChatEventSignal](ChatEventSignal.md)
- [CommandResult](CommandResult.md)
- [Component](Component.md)
- [Container](Container.md)
- [ContainerSlot](ContainerSlot.md)
- [DataDrivenEntityTriggerEvent](DataDrivenEntityTriggerEvent.md)
- [DataDrivenEntityTriggerEventSignal](DataDrivenEntityTriggerEventSignal.md)
- [DefinitionModifier](DefinitionModifier.md)
- [Dimension](Dimension.md)
- [DirectionBlockProperty](DirectionBlockProperty.md)
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
- [EntityAttributeComponent](EntityAttributeComponent.md)
- [EntityBaseMovementComponent](EntityBaseMovementComponent.md)
- [EntityBreathableComponent](EntityBreathableComponent.md)
- [EntityCanClimbComponent](EntityCanClimbComponent.md)
- [EntityCanFlyComponent](EntityCanFlyComponent.md)
- [EntityCanPowerJumpComponent](EntityCanPowerJumpComponent.md)
- [EntityColorComponent](EntityColorComponent.md)
- [EntityComponent](EntityComponent.md)
- [EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)
- [EntityDieEvent](EntityDieEvent.md)
- [EntityDieEventSignal](EntityDieEventSignal.md)
- [EntityFireImmuneComponent](EntityFireImmuneComponent.md)
- [EntityFloatsInLiquidComponent](EntityFloatsInLiquidComponent.md)
- [EntityFlyingSpeedComponent](EntityFlyingSpeedComponent.md)
- [EntityFrictionModifierComponent](EntityFrictionModifierComponent.md)
- [EntityGroundOffsetComponent](EntityGroundOffsetComponent.md)
- [EntityHealableComponent](EntityHealableComponent.md)
- [EntityHealthComponent](EntityHealthComponent.md)
- [EntityHitEvent](EntityHitEvent.md)
- [EntityHitEventSignal](EntityHitEventSignal.md)
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
- [EntityNavigationComponent](EntityNavigationComponent.md)
- [EntityNavigationFloatComponent](EntityNavigationFloatComponent.md)
- [EntityNavigationFlyComponent](EntityNavigationFlyComponent.md)
- [EntityNavigationGenericComponent](EntityNavigationGenericComponent.md)
- [EntityNavigationHoverComponent](EntityNavigationHoverComponent.md)
- [EntityNavigationWalkComponent](EntityNavigationWalkComponent.md)
- [EntityOnFireComponent](EntityOnFireComponent.md)
- [EntityPushThroughComponent](EntityPushThroughComponent.md)
- [EntityRideableComponent](EntityRideableComponent.md)
- [EntityRidingComponent](EntityRidingComponent.md)
- [EntityScaleComponent](EntityScaleComponent.md)
- [EntitySkinIdComponent](EntitySkinIdComponent.md)
- [EntitySpawnEvent](EntitySpawnEvent.md)
- [EntitySpawnEventSignal](EntitySpawnEventSignal.md)
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
- [FeedItem](FeedItem.md)
- [FeedItemEffect](FeedItemEffect.md)
- [FilterGroup](FilterGroup.md)
- [FluidContainer](FluidContainer.md)
- [ItemCompleteChargeEvent](ItemCompleteChargeEvent.md)
- [ItemCompleteChargeEventSignal](ItemCompleteChargeEventSignal.md)
- [ItemComponent](ItemComponent.md)
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
- [ItemTypeIterator](ItemTypeIterator.md)
- [ItemTypes](ItemTypes.md)
- [ItemUseEvent](ItemUseEvent.md)
- [ItemUseEventSignal](ItemUseEventSignal.md)
- [ItemUseOnEvent](ItemUseOnEvent.md)
- [ItemUseOnEventSignal](ItemUseOnEventSignal.md)
- [LeverActionEvent](LeverActionEvent.md)
- [LeverActionEventSignal](LeverActionEventSignal.md)
- [MessageReceiveEvent](MessageReceiveEvent.md)
- [MinecraftBlockTypes](MinecraftBlockTypes.md)
- [MinecraftDimensionTypes](MinecraftDimensionTypes.md)
- [MinecraftEffectTypes](MinecraftEffectTypes.md)
- [MinecraftEnchantmentTypes](MinecraftEnchantmentTypes.md)
- [MinecraftEntityTypes](MinecraftEntityTypes.md)
- [MinecraftItemTypes](MinecraftItemTypes.md)
- [MolangVariableMap](MolangVariableMap.md)
- [NavigationResult](NavigationResult.md)
- [PistonActivateEvent](PistonActivateEvent.md)
- [PistonActivateEventSignal](PistonActivateEventSignal.md)
- [Player](Player.md)
- [PlayerIterator](PlayerIterator.md)
- [PlayerJoinEvent](PlayerJoinEvent.md)
- [PlayerJoinEventSignal](PlayerJoinEventSignal.md)
- [PlayerLeaveEvent](PlayerLeaveEvent.md)
- [PlayerLeaveEventSignal](PlayerLeaveEventSignal.md)
- [PlayerSpawnEvent](PlayerSpawnEvent.md)
- [PlayerSpawnEventSignal](PlayerSpawnEventSignal.md)
- [ProjectileHitEvent](ProjectileHitEvent.md)
- [ProjectileHitEventSignal](ProjectileHitEventSignal.md)
- [PropertyRegistry](PropertyRegistry.md)
- [Scoreboard](Scoreboard.md)
- [ScoreboardIdentity](ScoreboardIdentity.md)
- [ScoreboardObjective](ScoreboardObjective.md)
- [ScoreboardScoreInfo](ScoreboardScoreInfo.md)
- [ScreenDisplay](ScreenDisplay.md)
- [ScriptEventCommandMessageEvent](ScriptEventCommandMessageEvent.md)
- [ScriptEventCommandMessageSignal](ScriptEventCommandMessageSignal.md)
- [Seat](Seat.md)
- [ServerMessageSignal](ServerMessageSignal.md)
- [System](System.md)
- [SystemEvents](SystemEvents.md)
- [TickEvent](TickEvent.md)
- [TickEventSignal](TickEventSignal.md)
- [Trigger](Trigger.md)
- [Vector](Vector.md)
- [WeatherChangeEvent](WeatherChangeEvent.md)
- [WeatherChangeEventSignal](WeatherChangeEventSignal.md)
- [World](World.md)
- [WorldInitializeEvent](WorldInitializeEvent.md)
- [WorldInitializeEventSignal](WorldInitializeEventSignal.md)
- [XYRotation](XYRotation.md)

## Interfaces
- [BlockFillOptions](BlockFillOptions.md)
- [BlockHitInformation](BlockHitInformation.md)
- [BlockRaycastOptions](BlockRaycastOptions.md)
- [Color](Color.md)
- [EntityDamageSource](EntityDamageSource.md)
- [EntityDataDrivenTriggerEventOptions](EntityDataDrivenTriggerEventOptions.md)
- [EntityEventOptions](EntityEventOptions.md)
- [EntityHitInformation](EntityHitInformation.md)
- [EntityQueryOptions](EntityQueryOptions.md)
- [EntityQueryScoreOptions](EntityQueryScoreOptions.md)
- [EntityRaycastOptions](EntityRaycastOptions.md)
- [ExplosionOptions](ExplosionOptions.md)
- [MusicOptions](MusicOptions.md)
- [NumberRange](NumberRange.md)
- [PlayAnimationOptions](PlayAnimationOptions.md)
- [RawMessage](RawMessage.md)
- [RawMessageScore](RawMessageScore.md)
- [RawText](RawText.md)
- [ScoreboardObjectiveDisplayOptions](ScoreboardObjectiveDisplayOptions.md)
- [ScriptEventMessageFilterOptions](ScriptEventMessageFilterOptions.md)
- [SoundOptions](SoundOptions.md)
- [TitleDisplayOptions](TitleDisplayOptions.md)
- [Vector3](Vector3.md)

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
## 1.2.0-beta
#### Added *[BeforeChatEvent](BeforeChatEvent.md)*
#### Added *[BeforeChatEventSignal](BeforeChatEventSignal.md)*
#### Added *[BeforeDataDrivenEntityTriggerEvent](BeforeDataDrivenEntityTriggerEvent.md)*
#### Added *[BeforeDataDrivenEntityTriggerEventSignal](BeforeDataDrivenEntityTriggerEventSignal.md)*
#### Added *[BeforeExplosionEvent](BeforeExplosionEvent.md)*
#### Added *[BeforeExplosionEventSignal](BeforeExplosionEventSignal.md)*
#### Added *[BeforeItemDefinitionEventSignal](BeforeItemDefinitionEventSignal.md)*
#### Added *[BeforeItemDefinitionTriggeredEvent](BeforeItemDefinitionTriggeredEvent.md)*
#### Added *[BeforeItemUseEvent](BeforeItemUseEvent.md)*
#### Added *[BeforeItemUseEventSignal](BeforeItemUseEventSignal.md)*
#### Added *[BeforeItemUseOnEvent](BeforeItemUseOnEvent.md)*
#### Added *[BeforeItemUseOnEventSignal](BeforeItemUseOnEventSignal.md)*
#### Added *[BeforePistonActivateEvent](BeforePistonActivateEvent.md)*
#### Added *[BeforePistonActivateEventSignal](BeforePistonActivateEventSignal.md)*
#### Added *[BeforeWatchdogTerminateEvent](BeforeWatchdogTerminateEvent.md)*
#### Added *[BeforeWatchdogTerminateEventSignal](BeforeWatchdogTerminateEventSignal.md)*
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
#### Added *[BlockBreakEvent](BlockBreakEvent.md)*
#### Added *[BlockBreakEventSignal](BlockBreakEventSignal.md)*
#### Added *[BlockComponent](BlockComponent.md)*
#### Added *[BlockEvent](BlockEvent.md)*
#### Added *[BlockExplodeEvent](BlockExplodeEvent.md)*
#### Added *[BlockExplodeEventSignal](BlockExplodeEventSignal.md)*
#### Added *[BlockInventoryComponent](BlockInventoryComponent.md)*
#### Added *[BlockLavaContainerComponent](BlockLavaContainerComponent.md)*
#### Added *[BlockLiquidContainerComponent](BlockLiquidContainerComponent.md)*
#### Changed *[BlockPermutation](BlockPermutation.md)*
- Added property *[type](BlockPermutation.md#type)*
- Added function *[clone](BlockPermutation.md#clone)*
- Added function *[getAllProperties](BlockPermutation.md#getallproperties)*
- Added function *[getItemStack](BlockPermutation.md#getitemstack)*
- Added function *[getProperty](BlockPermutation.md#getproperty)*
- Added function *[getTags](BlockPermutation.md#gettags)*
- Added function *[hasTag](BlockPermutation.md#hastag)*
- Added function *[withProperty](BlockPermutation.md#withproperty)*
#### Added *[BlockPistonComponent](BlockPistonComponent.md)*
#### Added *[BlockPlaceEvent](BlockPlaceEvent.md)*
#### Added *[BlockPlaceEventSignal](BlockPlaceEventSignal.md)*
#### Added *[BlockPotionContainerComponent](BlockPotionContainerComponent.md)*
#### Added *[BlockProperties](BlockProperties.md)*
#### Added *[BlockProperty](BlockProperty.md)*
#### Added *[BlockPropertyType](BlockPropertyType.md)*
#### Added *[BlockRecordPlayerComponent](BlockRecordPlayerComponent.md)*
#### Added *[BlockSignComponent](BlockSignComponent.md)*
#### Added *[BlockSnowContainerComponent](BlockSnowContainerComponent.md)*
#### Added *[BlockType](BlockType.md)*
#### Added *[BlockWaterContainerComponent](BlockWaterContainerComponent.md)*
#### Added *[ButtonPushEvent](ButtonPushEvent.md)*
#### Added *[ButtonPushEventSignal](ButtonPushEventSignal.md)*
#### Added *[ChatEvent](ChatEvent.md)*
#### Added *[ChatEventSignal](ChatEventSignal.md)*
#### Added *[Component](Component.md)*
#### Added *[Container](Container.md)*
#### Added *[ContainerSlot](ContainerSlot.md)*
#### Added *[DataDrivenEntityTriggerEvent](DataDrivenEntityTriggerEvent.md)*
#### Added *[DataDrivenEntityTriggerEventSignal](DataDrivenEntityTriggerEventSignal.md)*
#### Added *[DefinitionModifier](DefinitionModifier.md)*
#### Changed *[Dimension](Dimension.md)*
- Added function *[createExplosion](Dimension.md#createexplosion)*
- Added function *[fillBlocks](Dimension.md#fillblocks)*
- Added function *[getBlockFromRay](Dimension.md#getblockfromray)*
- Added function *[getEntities](Dimension.md#getentities)*
- Added function *[getEntitiesAtBlockLocation](Dimension.md#getentitiesatblocklocation)*
- Added function *[getEntitiesFromRay](Dimension.md#getentitiesfromray)*
- Added function *[getPlayers](Dimension.md#getplayers)*
- Added function *[spawnEntity](Dimension.md#spawnentity)*
- Added function *[spawnItem](Dimension.md#spawnitem)*
- Added function *[spawnParticle](Dimension.md#spawnparticle)*
#### Added *[DirectionBlockProperty](DirectionBlockProperty.md)*
#### Added *[DynamicPropertiesDefinition](DynamicPropertiesDefinition.md)*
#### Added *[Effect](Effect.md)*
#### Added *[EffectAddEvent](EffectAddEvent.md)*
#### Added *[EffectAddEventSignal](EffectAddEventSignal.md)*
#### Added *[EffectType](EffectType.md)*
#### Added *[Enchantment](Enchantment.md)*
#### Added *[EnchantmentList](EnchantmentList.md)*
#### Added *[EnchantmentSlot](EnchantmentSlot.md)*
#### Added *[EnchantmentType](EnchantmentType.md)*
#### Changed *[Entity](Entity.md)*
- Added property *[dimension](Entity.md#dimension)*
- Added property *[isSneaking](Entity.md#issneaking)*
- Added property *[location](Entity.md#location)*
- Added property *[nameTag](Entity.md#nametag)*
- Added property *[scoreboard](Entity.md#scoreboard)*
- Added property *[target](Entity.md#target)*
- Added function *[addEffect](Entity.md#addeffect)*
- Added function *[addTag](Entity.md#addtag)*
- Added function *[applyDamage](Entity.md#applydamage)*
- Added function *[applyImpulse](Entity.md#applyimpulse)*
- Added function *[applyKnockback](Entity.md#applyknockback)*
- Added function *[clearVelocity](Entity.md#clearvelocity)*
- Added function *[extinguishFire](Entity.md#extinguishfire)*
- Added function *[getBlockFromViewDirection](Entity.md#getblockfromviewdirection)*
- Added function *[getComponent](Entity.md#getcomponent)*
- Added function *[getComponents](Entity.md#getcomponents)*
- Added function *[getDynamicProperty](Entity.md#getdynamicproperty)*
- Added function *[getEffect](Entity.md#geteffect)*
- Added function *[getEffects](Entity.md#geteffects)*
- Added function *[getEntitiesFromViewDirection](Entity.md#getentitiesfromviewdirection)*
- Added function *[getHeadLocation](Entity.md#getheadlocation)*
- Added function *[getRotation](Entity.md#getrotation)*
- Added function *[getTags](Entity.md#gettags)*
- Added function *[getVelocity](Entity.md#getvelocity)*
- Added function *[getViewDirection](Entity.md#getviewdirection)*
- Added function *[hasComponent](Entity.md#hascomponent)*
- Added function *[hasTag](Entity.md#hastag)*
- Added function *[kill](Entity.md#kill)*
- Added function *[playAnimation](Entity.md#playanimation)*
- Added function *[removeDynamicProperty](Entity.md#removedynamicproperty)*
- Added function *[removeTag](Entity.md#removetag)*
- Added function *[setDynamicProperty](Entity.md#setdynamicproperty)*
- Added function *[setOnFire](Entity.md#setonfire)*
- Added function *[setRotation](Entity.md#setrotation)*
- Added function *[teleport](Entity.md#teleport)*
- Added function *[teleportFacing](Entity.md#teleportfacing)*
- Added function *[triggerEvent](Entity.md#triggerevent)*
#### Added *[EntityAddRiderComponent](EntityAddRiderComponent.md)*
#### Added *[EntityAgeableComponent](EntityAgeableComponent.md)*
#### Added *[EntityAttributeComponent](EntityAttributeComponent.md)*
#### Added *[EntityBaseMovementComponent](EntityBaseMovementComponent.md)*
#### Added *[EntityBreathableComponent](EntityBreathableComponent.md)*
#### Added *[EntityCanClimbComponent](EntityCanClimbComponent.md)*
#### Added *[EntityCanFlyComponent](EntityCanFlyComponent.md)*
#### Added *[EntityCanPowerJumpComponent](EntityCanPowerJumpComponent.md)*
#### Added *[EntityColorComponent](EntityColorComponent.md)*
#### Added *[EntityComponent](EntityComponent.md)*
#### Added *[EntityDefinitionFeedItem](EntityDefinitionFeedItem.md)*
#### Added *[EntityDieEvent](EntityDieEvent.md)*
#### Added *[EntityDieEventSignal](EntityDieEventSignal.md)*
#### Added *[EntityFireImmuneComponent](EntityFireImmuneComponent.md)*
#### Added *[EntityFloatsInLiquidComponent](EntityFloatsInLiquidComponent.md)*
#### Added *[EntityFlyingSpeedComponent](EntityFlyingSpeedComponent.md)*
#### Added *[EntityFrictionModifierComponent](EntityFrictionModifierComponent.md)*
#### Added *[EntityGroundOffsetComponent](EntityGroundOffsetComponent.md)*
#### Added *[EntityHealableComponent](EntityHealableComponent.md)*
#### Added *[EntityHealthComponent](EntityHealthComponent.md)*
#### Added *[EntityHitEvent](EntityHitEvent.md)*
#### Added *[EntityHitEventSignal](EntityHitEventSignal.md)*
#### Added *[EntityHurtEvent](EntityHurtEvent.md)*
#### Added *[EntityHurtEventSignal](EntityHurtEventSignal.md)*
#### Added *[EntityInventoryComponent](EntityInventoryComponent.md)*
#### Added *[EntityIsBabyComponent](EntityIsBabyComponent.md)*
#### Added *[EntityIsChargedComponent](EntityIsChargedComponent.md)*
#### Added *[EntityIsChestedComponent](EntityIsChestedComponent.md)*
#### Added *[EntityIsDyableComponent](EntityIsDyableComponent.md)*
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
#### Added *[EntityIterator](EntityIterator.md)*
#### Added *[EntityLavaMovementComponent](EntityLavaMovementComponent.md)*
#### Added *[EntityLeashableComponent](EntityLeashableComponent.md)*
#### Added *[EntityMarkVariantComponent](EntityMarkVariantComponent.md)*
#### Added *[EntityMountTamingComponent](EntityMountTamingComponent.md)*
#### Added *[EntityMovementAmphibiousComponent](EntityMovementAmphibiousComponent.md)*
#### Added *[EntityMovementBasicComponent](EntityMovementBasicComponent.md)*
#### Added *[EntityMovementComponent](EntityMovementComponent.md)*
#### Added *[EntityMovementFlyComponent](EntityMovementFlyComponent.md)*
#### Added *[EntityMovementGenericComponent](EntityMovementGenericComponent.md)*
#### Added *[EntityMovementGlideComponent](EntityMovementGlideComponent.md)*
#### Added *[EntityMovementHoverComponent](EntityMovementHoverComponent.md)*
#### Added *[EntityMovementJumpComponent](EntityMovementJumpComponent.md)*
#### Added *[EntityMovementSkipComponent](EntityMovementSkipComponent.md)*
#### Added *[EntityMovementSwayComponent](EntityMovementSwayComponent.md)*
#### Added *[EntityNavigationClimbComponent](EntityNavigationClimbComponent.md)*
#### Added *[EntityNavigationComponent](EntityNavigationComponent.md)*
#### Added *[EntityNavigationFloatComponent](EntityNavigationFloatComponent.md)*
#### Added *[EntityNavigationFlyComponent](EntityNavigationFlyComponent.md)*
#### Added *[EntityNavigationGenericComponent](EntityNavigationGenericComponent.md)*
#### Added *[EntityNavigationHoverComponent](EntityNavigationHoverComponent.md)*
#### Added *[EntityNavigationWalkComponent](EntityNavigationWalkComponent.md)*
#### Added *[EntityOnFireComponent](EntityOnFireComponent.md)*
#### Added *[EntityPushThroughComponent](EntityPushThroughComponent.md)*
#### Added *[EntityRideableComponent](EntityRideableComponent.md)*
#### Added *[EntityRidingComponent](EntityRidingComponent.md)*
#### Added *[EntityScaleComponent](EntityScaleComponent.md)*
#### Added *[EntitySkinIdComponent](EntitySkinIdComponent.md)*
#### Added *[EntitySpawnEvent](EntitySpawnEvent.md)*
#### Added *[EntitySpawnEventSignal](EntitySpawnEventSignal.md)*
#### Added *[EntityStrengthComponent](EntityStrengthComponent.md)*
#### Added *[EntityTameableComponent](EntityTameableComponent.md)*
#### Added *[EntityType](EntityType.md)*
#### Added *[EntityTypeIterator](EntityTypeIterator.md)*
#### Added *[EntityTypes](EntityTypes.md)*
#### Added *[EntityUnderwaterMovementComponent](EntityUnderwaterMovementComponent.md)*
#### Added *[EntityVariantComponent](EntityVariantComponent.md)*
#### Added *[EntityWantsJockeyComponent](EntityWantsJockeyComponent.md)*
#### Added *[Events](Events.md)*
#### Added *[ExplosionEvent](ExplosionEvent.md)*
#### Added *[ExplosionEventSignal](ExplosionEventSignal.md)*
#### Added *[FeedItem](FeedItem.md)*
#### Added *[FeedItemEffect](FeedItemEffect.md)*
#### Added *[FilterGroup](FilterGroup.md)*
#### Added *[FluidContainer](FluidContainer.md)*
#### Added *[ItemCompleteChargeEvent](ItemCompleteChargeEvent.md)*
#### Added *[ItemCompleteChargeEventSignal](ItemCompleteChargeEventSignal.md)*
#### Added *[ItemComponent](ItemComponent.md)*
#### Added *[ItemCooldownComponent](ItemCooldownComponent.md)*
#### Added *[ItemDefinitionEventSignal](ItemDefinitionEventSignal.md)*
#### Added *[ItemDefinitionTriggeredEvent](ItemDefinitionTriggeredEvent.md)*
#### Added *[ItemDurabilityComponent](ItemDurabilityComponent.md)*
#### Added *[ItemEnchantsComponent](ItemEnchantsComponent.md)*
#### Added *[ItemFoodComponent](ItemFoodComponent.md)*
#### Added *[ItemReleaseChargeEvent](ItemReleaseChargeEvent.md)*
#### Added *[ItemReleaseChargeEventSignal](ItemReleaseChargeEventSignal.md)*
#### Added *[Items](Items.md)*
#### Added *[ItemStack](ItemStack.md)*
#### Added *[ItemStartChargeEvent](ItemStartChargeEvent.md)*
#### Added *[ItemStartChargeEventSignal](ItemStartChargeEventSignal.md)*
#### Added *[ItemStartUseOnEvent](ItemStartUseOnEvent.md)*
#### Added *[ItemStartUseOnEventSignal](ItemStartUseOnEventSignal.md)*
#### Added *[ItemStopChargeEvent](ItemStopChargeEvent.md)*
#### Added *[ItemStopChargeEventSignal](ItemStopChargeEventSignal.md)*
#### Added *[ItemStopUseOnEvent](ItemStopUseOnEvent.md)*
#### Added *[ItemStopUseOnEventSignal](ItemStopUseOnEventSignal.md)*
#### Added *[ItemType](ItemType.md)*
#### Added *[ItemTypeIterator](ItemTypeIterator.md)*
#### Added *[ItemTypes](ItemTypes.md)*
#### Added *[ItemUseEvent](ItemUseEvent.md)*
#### Added *[ItemUseEventSignal](ItemUseEventSignal.md)*
#### Added *[ItemUseOnEvent](ItemUseOnEvent.md)*
#### Added *[ItemUseOnEventSignal](ItemUseOnEventSignal.md)*
#### Added *[LeverActionEvent](LeverActionEvent.md)*
#### Added *[LeverActionEventSignal](LeverActionEventSignal.md)*
#### Added *[MessageReceiveEvent](MessageReceiveEvent.md)*
#### Added *[MinecraftBlockTypes](MinecraftBlockTypes.md)*
#### Added *[MinecraftEffectTypes](MinecraftEffectTypes.md)*
#### Added *[MinecraftEnchantmentTypes](MinecraftEnchantmentTypes.md)*
#### Added *[MinecraftEntityTypes](MinecraftEntityTypes.md)*
#### Added *[MinecraftItemTypes](MinecraftItemTypes.md)*
#### Added *[MolangVariableMap](MolangVariableMap.md)*
#### Added *[NavigationResult](NavigationResult.md)*
#### Added *[PistonActivateEvent](PistonActivateEvent.md)*
#### Added *[PistonActivateEventSignal](PistonActivateEventSignal.md)*
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
- Added function *[playSound](Player.md#playsound)*
- Added function *[postClientMessage](Player.md#postclientmessage)*
- Added function *[resetLevel](Player.md#resetlevel)*
- Added function *[setOp](Player.md#setop)*
- Added function *[setSpawn](Player.md#setspawn)*
- Added function *[startItemCooldown](Player.md#startitemcooldown)*
#### Added *[PlayerIterator](PlayerIterator.md)*
#### Added *[PlayerJoinEvent](PlayerJoinEvent.md)*
#### Added *[PlayerJoinEventSignal](PlayerJoinEventSignal.md)*
#### Added *[PlayerLeaveEvent](PlayerLeaveEvent.md)*
#### Added *[PlayerLeaveEventSignal](PlayerLeaveEventSignal.md)*
#### Added *[PlayerSpawnEvent](PlayerSpawnEvent.md)*
#### Added *[PlayerSpawnEventSignal](PlayerSpawnEventSignal.md)*
#### Added *[ProjectileHitEvent](ProjectileHitEvent.md)*
#### Added *[ProjectileHitEventSignal](ProjectileHitEventSignal.md)*
#### Added *[PropertyRegistry](PropertyRegistry.md)*
#### Added *[Scoreboard](Scoreboard.md)*
#### Added *[ScoreboardIdentity](ScoreboardIdentity.md)*
#### Added *[ScoreboardObjective](ScoreboardObjective.md)*
#### Added *[ScoreboardScoreInfo](ScoreboardScoreInfo.md)*
#### Added *[ScreenDisplay](ScreenDisplay.md)*
#### Added *[ScriptEventCommandMessageEvent](ScriptEventCommandMessageEvent.md)*
#### Added *[ScriptEventCommandMessageSignal](ScriptEventCommandMessageSignal.md)*
#### Added *[Seat](Seat.md)*
#### Added *[ServerMessageSignal](ServerMessageSignal.md)*
#### Changed *[System](System.md)*
- Added property *[events](System.md#events)*
#### Added *[SystemEvents](SystemEvents.md)*
#### Added *[TickEvent](TickEvent.md)*
#### Added *[TickEventSignal](TickEventSignal.md)*
#### Added *[Trigger](Trigger.md)*
#### Added *[Vector](Vector.md)*
#### Added *[WeatherChangeEvent](WeatherChangeEvent.md)*
#### Added *[WeatherChangeEventSignal](WeatherChangeEventSignal.md)*
#### Changed *[World](World.md)*
- Added property *[events](World.md#events)*
- Added property *[scoreboard](World.md#scoreboard)*
- Added function *[broadcastClientMessage](World.md#broadcastclientmessage)*
- Added function *[getAbsoluteTime](World.md#getabsolutetime)*
- Added function *[getDefaultSpawnPosition](World.md#getdefaultspawnposition)*
- Added function *[getDynamicProperty](World.md#getdynamicproperty)*
- Added function *[getEntity](World.md#getentity)*
- Added function *[getPlayers](World.md#getplayers)*
- Added function *[getTime](World.md#gettime)*
- Added function *[playMusic](World.md#playmusic)*
- Added function *[playSound](World.md#playsound)*
- Added function *[queueMusic](World.md#queuemusic)*
- Added function *[removeDynamicProperty](World.md#removedynamicproperty)*
- Added function *[setDefaultSpawn](World.md#setdefaultspawn)*
- Added function *[setDynamicProperty](World.md#setdynamicproperty)*
- Added function *[setTime](World.md#settime)*
- Added function *[stopMusic](World.md#stopmusic)*
#### Added *[WorldInitializeEvent](WorldInitializeEvent.md)*
#### Added *[WorldInitializeEventSignal](WorldInitializeEventSignal.md)*
#### Added *[XYRotation](XYRotation.md)*
#### Added enum [Direction](Direction.md)
#### Added enum [DisplaySlotId](DisplaySlotId.md)
#### Added enum [DyeColor](DyeColor.md)
#### Added enum [EntityDamageCause](EntityDamageCause.md)
#### Added enum [FluidType](FluidType.md)
#### Added enum [GameMode](GameMode.md)
#### Added enum [ItemLockMode](ItemLockMode.md)
#### Added enum [MessageSourceType](MessageSourceType.md)
#### Added enum [ObjectiveSortOrder](ObjectiveSortOrder.md)
#### Added enum [ScoreboardIdentityType](ScoreboardIdentityType.md)
#### Added enum [TimeOfDay](TimeOfDay.md)
#### Added enum [WatchdogTerminateReason](WatchdogTerminateReason.md)
#### Added constant [TicksPerDay](#ticksperday)
#### Added constant [TicksPerSecond](#tickspersecond)
## 1.1.0
#### Added `@minecraft/server` Module
