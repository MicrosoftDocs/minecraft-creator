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
- [1.8.0-beta](#180-beta)
- [1.7.0](#170)
- [1.7.0-beta](#170-beta)
- [1.6.0](#160)
- [1.6.0-beta](#160-beta)
- [1.5.0](#150)
- [1.4.0](#140)
- [1.4.0-beta](#140-beta)
- [1.3.0](#130)
- [1.3.0-beta](#130-beta)
- [1.2.0](#120)
- [1.1.0](#110)

## 1.8.0-beta
#### Changed *[`Block`](Block.md)*
- Added property *[`isSolid`](Block.md#issolid)*
- Added property *[`isWaterlogged`](Block.md#iswaterlogged)*
- Added property *[`type`](Block.md#type)*
- Added property *[`typeId`](Block.md#typeid)*
- Added function *[`above`](Block.md#above)*
- Added function *[`below`](Block.md#below)*
- Added function *[`bottomCenter`](Block.md#bottomcenter)*
- Added function *[`canPlace`](Block.md#canplace)*
- Added function *[`center`](Block.md#center)*
- Added function *[`east`](Block.md#east)*
- Changed function *[`getComponent`](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to *BlockComponentTypeMap[T] | undefined* (throws exceptions)
  - Changed argument `componentId` type from *string* to *T*
- Added function *[`getItemStack`](Block.md#getitemstack)*
- Added function *[`getRedstonePower`](Block.md#getredstonepower)*
- Added function *[`getTags`](Block.md#gettags)*
- Added function *[`hasTag`](Block.md#hastag)*
- Added function *[`north`](Block.md#north)*
- Added function *[`offset`](Block.md#offset)*
- Added function *[`setType`](Block.md#settype)*
- Added function *[`south`](Block.md#south)*
- Added function *[`trySetPermutation`](Block.md#trysetpermutation)*
- Added function *[`west`](Block.md#west)*
#### Added *[`BlockAreaSize`](BlockAreaSize.md)*
#### Added *[`BlockExplodeAfterEvent`](BlockExplodeAfterEvent.md)*
#### Added *[`BlockExplodeAfterEventSignal`](BlockExplodeAfterEventSignal.md)*
#### Added *[`BlockLavaContainerComponent`](BlockLavaContainerComponent.md)*
#### Added *[`BlockLiquidContainerComponent`](BlockLiquidContainerComponent.md)*
#### Added *[`BlockLocationIterator`](BlockLocationIterator.md)*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added property *[`type`](BlockPermutation.md#type)*
- Added function *[`clone`](BlockPermutation.md#clone)*
- Added function *[`getAllStates`](BlockPermutation.md#getallstates)*
- Added function *[`getItemStack`](BlockPermutation.md#getitemstack)*
- Added function *[`getState`](BlockPermutation.md#getstate)*
- Added function *[`getTags`](BlockPermutation.md#gettags)*
- Added function *[`hasTag`](BlockPermutation.md#hastag)*
- Added function *[`withState`](BlockPermutation.md#withstate)*
#### Added *[`BlockPistonComponent`](BlockPistonComponent.md)*
#### Added *[`BlockPotionContainerComponent`](BlockPotionContainerComponent.md)*
#### Added *[`BlockRecordPlayerComponent`](BlockRecordPlayerComponent.md)*
#### Added *[`BlockSignComponent`](BlockSignComponent.md)*
#### Added *[`BlockSnowContainerComponent`](BlockSnowContainerComponent.md)*
#### Added *[`BlockStates`](BlockStates.md)*
#### Added *[`BlockStateType`](BlockStateType.md)*
#### Added *[`BlockType`](BlockType.md)*
#### Added *[`BlockTypes`](BlockTypes.md)*
#### Added *[`BlockVolumeUtils`](BlockVolumeUtils.md)*
#### Added *[`BlockWaterContainerComponent`](BlockWaterContainerComponent.md)*
#### Added *[`BoundingBoxUtils`](BoundingBoxUtils.md)*
#### Added *[`ChatSendAfterEvent`](ChatSendAfterEvent.md)*
#### Added *[`ChatSendAfterEventSignal`](ChatSendAfterEventSignal.md)*
#### Added *[`ChatSendBeforeEvent`](ChatSendBeforeEvent.md)*
#### Added *[`ChatSendBeforeEventSignal`](ChatSendBeforeEventSignal.md)*
#### Added *[`CompoundBlockVolume`](CompoundBlockVolume.md)*
#### Changed *[`Container`](Container.md)*
- Added function *[`getSlot`](Container.md#getslot)*
#### Added *[`ContainerSlot`](ContainerSlot.md)*
#### Added *[`DataDrivenEntityTriggerAfterEvent`](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[`DataDrivenEntityTriggerAfterEventSignal`](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEvent`](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEventSignal`](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[`DefinitionModifier`](DefinitionModifier.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added property *[`heightRange`](Dimension.md#heightrange)*
- Added function *[`createExplosion`](Dimension.md#createexplosion)*
- Added function *[`fillBlocks`](Dimension.md#fillblocks)*
- Added function *[`getWeather`](Dimension.md#getweather)*
#### Added *[`DimensionType`](DimensionType.md)*
#### Added *[`DimensionTypes`](DimensionTypes.md)*
#### Added *[`EffectAddAfterEvent`](EffectAddAfterEvent.md)*
#### Added *[`EffectAddAfterEventSignal`](EffectAddAfterEventSignal.md)*
#### Added *[`EffectAddBeforeEvent`](EffectAddBeforeEvent.md)*
#### Added *[`EffectAddBeforeEventSignal`](EffectAddBeforeEventSignal.md)*
#### Added *[`EffectTypes`](EffectTypes.md)*
#### Added *[`Enchantment`](Enchantment.md)*
#### Added *[`EnchantmentList`](EnchantmentList.md)*
#### Added *[`EnchantmentSlot`](EnchantmentSlot.md)*
#### Added *[`EnchantmentType`](EnchantmentType.md)*
#### Added *[`EnchantmentTypes`](EnchantmentTypes.md)*
#### Changed *[`Entity`](Entity.md)*
- Added property *[`fallDistance`](Entity.md#falldistance)*
- Added property *[`lifetimeState`](Entity.md#lifetimestate)*
- Added property *[`target`](Entity.md#target)*
- Added function *[`clearDynamicProperties`](Entity.md#cleardynamicproperties)*
- Added function *[`extinguishFire`](Entity.md#extinguishfire)*
- Changed function *[`getComponent`](Entity.md#getcomponent)*
  - Changed return type from [*EntityComponent*](EntityComponent.md) to *EntityComponentTypeMap[T] | undefined*
  - Changed argument `componentId` type from *string* to *T*
- Added function *[`getDynamicProperty`](Entity.md#getdynamicproperty)*
- Added function *[`getDynamicPropertyIds`](Entity.md#getdynamicpropertyids)*
- Added function *[`getDynamicPropertyTotalByteCount`](Entity.md#getdynamicpropertytotalbytecount)*
- Added function *[`matches`](Entity.md#matches)*
- Added function *[`playAnimation`](Entity.md#playanimation)*
- Added function *[`remove`](Entity.md#remove)*
- Added function *[`setDynamicProperty`](Entity.md#setdynamicproperty)*
- Added function *[`setOnFire`](Entity.md#setonfire)*
#### Added *[`EntityAddRiderComponent`](EntityAddRiderComponent.md)*
#### Added *[`EntityAgeableComponent`](EntityAgeableComponent.md)*
#### Added *[`EntityBreathableComponent`](EntityBreathableComponent.md)*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Added property *[`entity`](EntityComponent.md#entity)*
#### Added *[`EntityDefinitionFeedItem`](EntityDefinitionFeedItem.md)*
#### Changed *[`EntityEquippableComponent`](EntityEquippableComponent.md)*
- Added function *[`getEquipmentSlot`](EntityEquippableComponent.md#getequipmentslot)*
#### Changed *[`EntityHealableComponent`](EntityHealableComponent.md)*
- Added property *[`filters`](EntityHealableComponent.md#filters)*
#### Added *[`EntityIterator`](EntityIterator.md)*
#### Added *[`EntityLavaMovementComponent`](EntityLavaMovementComponent.md)*
#### Added *[`EntityLeashableComponent`](EntityLeashableComponent.md)*
#### Added *[`EntityMountTamingComponent`](EntityMountTamingComponent.md)*
#### Added *[`EntityMovementComponent`](EntityMovementComponent.md)*
#### Added *[`EntityMovementGlideComponent`](EntityMovementGlideComponent.md)*
#### Added *[`EntityMovementSwayComponent`](EntityMovementSwayComponent.md)*
#### Added *[`EntityNavigationClimbComponent`](EntityNavigationClimbComponent.md)*
#### Added *[`EntityNavigationComponent`](EntityNavigationComponent.md)*
#### Added *[`EntityNavigationFloatComponent`](EntityNavigationFloatComponent.md)*
#### Added *[`EntityNavigationFlyComponent`](EntityNavigationFlyComponent.md)*
#### Added *[`EntityNavigationGenericComponent`](EntityNavigationGenericComponent.md)*
#### Added *[`EntityNavigationHoverComponent`](EntityNavigationHoverComponent.md)*
#### Added *[`EntityNavigationWalkComponent`](EntityNavigationWalkComponent.md)*
#### Added *[`EntityOnFireComponent`](EntityOnFireComponent.md)*
#### Added *[`EntityRideableComponent`](EntityRideableComponent.md)*
#### Added *[`EntityRidingComponent`](EntityRidingComponent.md)*
#### Added *[`EntityStrengthComponent`](EntityStrengthComponent.md)*
#### Added *[`EntityTameableComponent`](EntityTameableComponent.md)*
#### Added *[`EntityType`](EntityType.md)*
#### Added *[`EntityTypeIterator`](EntityTypeIterator.md)*
#### Added *[`EntityTypes`](EntityTypes.md)*
#### Added *[`EntityUnderwaterMovementComponent`](EntityUnderwaterMovementComponent.md)*
#### Added *[`ExplosionAfterEvent`](ExplosionAfterEvent.md)*
#### Added *[`ExplosionAfterEventSignal`](ExplosionAfterEventSignal.md)*
#### Added *[`ExplosionBeforeEvent`](ExplosionBeforeEvent.md)*
#### Added *[`ExplosionBeforeEventSignal`](ExplosionBeforeEventSignal.md)*
#### Added *[`FilterGroup`](FilterGroup.md)*
#### Added *[`FluidContainer`](FluidContainer.md)*
#### Added *[`ItemCooldownComponent`](ItemCooldownComponent.md)*
#### Added *[`ItemDefinitionAfterEventSignal`](ItemDefinitionAfterEventSignal.md)*
#### Added *[`ItemDefinitionBeforeEventSignal`](ItemDefinitionBeforeEventSignal.md)*
#### Added *[`ItemDefinitionTriggeredAfterEvent`](ItemDefinitionTriggeredAfterEvent.md)*
#### Added *[`ItemDefinitionTriggeredBeforeEvent`](ItemDefinitionTriggeredBeforeEvent.md)*
#### Added *[`ItemDurabilityComponent`](ItemDurabilityComponent.md)*
#### Added *[`ItemEnchantsComponent`](ItemEnchantsComponent.md)*
#### Added *[`ItemFoodComponent`](ItemFoodComponent.md)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Changed function *[`getComponent`](ItemStack.md#getcomponent)*
  - Changed return type from [*ItemComponent*](ItemComponent.md) to *ItemComponentTypeMap[T] | undefined*
  - Changed argument `componentId` type from *string* to *T*
- Added function *[`triggerEvent`](ItemStack.md#triggerevent)*
#### Added *[`ItemTypes`](ItemTypes.md)*
#### Added *[`MessageReceiveAfterEvent`](MessageReceiveAfterEvent.md)*
#### Added *[`NavigationResult`](NavigationResult.md)*
#### Added *[`PistonActivateAfterEvent`](PistonActivateAfterEvent.md)*
#### Added *[`PistonActivateAfterEventSignal`](PistonActivateAfterEventSignal.md)*
#### Added *[`PistonActivateBeforeEvent`](PistonActivateBeforeEvent.md)*
#### Added *[`PistonActivateBeforeEventSignal`](PistonActivateBeforeEventSignal.md)*
#### Changed *[`Player`](Player.md)*
- Added property *[`selectedSlot`](Player.md#selectedslot)*
- Added function *[`getItemCooldown`](Player.md#getitemcooldown)*
- Added function *[`isOp`](Player.md#isop)*
- Added function *[`playMusic`](Player.md#playmusic)*
- Added function *[`postClientMessage`](Player.md#postclientmessage)*
- Added function *[`queueMusic`](Player.md#queuemusic)*
- Added function *[`setOp`](Player.md#setop)*
- Added function *[`startItemCooldown`](Player.md#startitemcooldown)*
- Added function *[`stopMusic`](Player.md#stopmusic)*
#### Added *[`PlayerInteractWithBlockAfterEvent`](PlayerInteractWithBlockAfterEvent.md)*
#### Added *[`PlayerInteractWithBlockAfterEventSignal`](PlayerInteractWithBlockAfterEventSignal.md)*
#### Added *[`PlayerInteractWithBlockBeforeEvent`](PlayerInteractWithBlockBeforeEvent.md)*
#### Added *[`PlayerInteractWithBlockBeforeEventSignal`](PlayerInteractWithBlockBeforeEventSignal.md)*
#### Added *[`PlayerInteractWithEntityAfterEvent`](PlayerInteractWithEntityAfterEvent.md)*
#### Added *[`PlayerInteractWithEntityAfterEventSignal`](PlayerInteractWithEntityAfterEventSignal.md)*
#### Added *[`PlayerInteractWithEntityBeforeEvent`](PlayerInteractWithEntityBeforeEvent.md)*
#### Added *[`PlayerInteractWithEntityBeforeEventSignal`](PlayerInteractWithEntityBeforeEventSignal.md)*
#### Added *[`PlayerIterator`](PlayerIterator.md)*
#### Added *[`PlayerLeaveBeforeEvent`](PlayerLeaveBeforeEvent.md)*
#### Added *[`PlayerLeaveBeforeEventSignal`](PlayerLeaveBeforeEventSignal.md)*
#### Added *[`PlayerPlaceBlockBeforeEvent`](PlayerPlaceBlockBeforeEvent.md)*
#### Added *[`PlayerPlaceBlockBeforeEventSignal`](PlayerPlaceBlockBeforeEventSignal.md)*
#### Added *[`Seat`](Seat.md)*
#### Added *[`ServerMessageAfterEventSignal`](ServerMessageAfterEventSignal.md)*
#### Changed *[`System`](System.md)*
- Added property *[`beforeEvents`](System.md#beforeevents)*
#### Added *[`SystemBeforeEvents`](SystemBeforeEvents.md)*
#### Added *[`Trigger`](Trigger.md)*
#### Added *[`Vector`](Vector.md)*
#### Added *[`WatchdogTerminateBeforeEvent`](WatchdogTerminateBeforeEvent.md)*
#### Added *[`WatchdogTerminateBeforeEventSignal`](WatchdogTerminateBeforeEventSignal.md)*
#### Added *[`WeatherChangeAfterEvent`](WeatherChangeAfterEvent.md)*
#### Added *[`WeatherChangeAfterEventSignal`](WeatherChangeAfterEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added function *[`broadcastClientMessage`](World.md#broadcastclientmessage)*
- Added function *[`clearDynamicProperties`](World.md#cleardynamicproperties)*
- Added function *[`getDynamicProperty`](World.md#getdynamicproperty)*
- Added function *[`getDynamicPropertyIds`](World.md#getdynamicpropertyids)*
- Added function *[`getDynamicPropertyTotalByteCount`](World.md#getdynamicpropertytotalbytecount)*
- Added function *[`getEntity`](World.md#getentity)*
- Added function *[`setDynamicProperty`](World.md#setdynamicproperty)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`blockExplode`](WorldAfterEvents.md#blockexplode)*
- Added property *[`chatSend`](WorldAfterEvents.md#chatsend)*
- Added property *[`dataDrivenEntityTriggerEvent`](WorldAfterEvents.md#datadrivenentitytriggerevent)*
- Added property *[`effectAdd`](WorldAfterEvents.md#effectadd)*
- Added property *[`explosion`](WorldAfterEvents.md#explosion)*
- Added property *[`itemDefinitionEvent`](WorldAfterEvents.md#itemdefinitionevent)*
- Added property *[`messageReceive`](WorldAfterEvents.md#messagereceive)*
- Added property *[`pistonActivate`](WorldAfterEvents.md#pistonactivate)*
- Added property *[`playerInteractWithBlock`](WorldAfterEvents.md#playerinteractwithblock)*
- Added property *[`playerInteractWithEntity`](WorldAfterEvents.md#playerinteractwithentity)*
- Added property *[`weatherChange`](WorldAfterEvents.md#weatherchange)*
- Added property *[`worldInitialize`](WorldAfterEvents.md#worldinitialize)*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Added property *[`chatSend`](WorldBeforeEvents.md#chatsend)*
- Added property *[`dataDrivenEntityTriggerEvent`](WorldBeforeEvents.md#datadrivenentitytriggerevent)*
- Added property *[`effectAdd`](WorldBeforeEvents.md#effectadd)*
- Added property *[`explosion`](WorldBeforeEvents.md#explosion)*
- Added property *[`itemDefinitionEvent`](WorldBeforeEvents.md#itemdefinitionevent)*
- Added property *[`pistonActivate`](WorldBeforeEvents.md#pistonactivate)*
- Added property *[`playerInteractWithBlock`](WorldBeforeEvents.md#playerinteractwithblock)*
- Added property *[`playerInteractWithEntity`](WorldBeforeEvents.md#playerinteractwithentity)*
- Added property *[`playerLeave`](WorldBeforeEvents.md#playerleave)*
- Added property *[`playerPlaceBlock`](WorldBeforeEvents.md#playerplaceblock)*
#### Added *[`WorldInitializeAfterEvent`](WorldInitializeAfterEvent.md)*
#### Added *[`WorldInitializeAfterEventSignal`](WorldInitializeAfterEventSignal.md)*
#### Added enum [`BlockComponentTypes`](BlockComponentTypes.md)
#### Added enum [`BlockVolumeIntersection`](BlockVolumeIntersection.md)
#### Added enum [`CompoundBlockVolumeAction`](CompoundBlockVolumeAction.md)
#### Added enum [`CompoundBlockVolumePositionRelativity`](CompoundBlockVolumePositionRelativity.md)
#### Added enum [`Difficulty`](Difficulty.md)
#### Added enum [`DyeColor`](DyeColor.md)
#### Added enum [`EntityComponentTypes`](EntityComponentTypes.md)
#### Added enum [`EntityLifetimeState`](EntityLifetimeState.md)
#### Added enum [`FluidType`](FluidType.md)
#### Added enum [`ItemComponentTypes`](ItemComponentTypes.md)
#### Added enum [`SignSide`](SignSide.md)
#### Added enum [`WatchdogTerminateReason`](WatchdogTerminateReason.md)
#### Added constant `TicksPerDay`
#### Added constant `TicksPerSecond`
## 1.7.0
#### Changed *[`Block`](Block.md)*
- Removed property *isSolid*
- Removed property *isWaterlogged*
- Removed property *type*
- Removed property *typeId*
- Removed function *above*
- Removed function *below*
- Removed function *bottomCenter*
- Removed function *canPlace*
- Removed function *center*
- Removed function *east*
- Changed function *[`getComponent`](Block.md#getcomponent)*
  - Added argument `componentId`
  - Removed argument `componentName`
- Removed function *getItemStack*
- Removed function *getRedstonePower*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *north*
- Removed function *offset*
- Removed function *setType*
- Removed function *south*
- Removed function *trySetPermutation*
- Removed function *west*
#### Removed *BlockAreaSize*
#### Removed *BlockExplodeAfterEvent*
#### Removed *BlockExplodeAfterEventSignal*
#### Removed *BlockLavaContainerComponent*
#### Removed *BlockLiquidContainerComponent*
#### Removed *BlockLocationIterator*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Removed property *type*
- Removed function *clone*
- Removed function *getAllStates*
- Removed function *getItemStack*
- Removed function *getState*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *withState*
#### Removed *BlockPistonComponent*
#### Removed *BlockPotionContainerComponent*
#### Removed *BlockRecordPlayerComponent*
#### Removed *BlockSignComponent*
#### Removed *BlockSnowContainerComponent*
#### Removed *BlockStates*
#### Removed *BlockStateType*
#### Removed *BlockType*
#### Removed *BlockTypes*
#### Removed *BlockVolumeUtils*
#### Removed *BlockWaterContainerComponent*
#### Removed *BoundingBoxUtils*
#### Removed *ChatSendAfterEvent*
#### Removed *ChatSendAfterEventSignal*
#### Removed *ChatSendBeforeEvent*
#### Removed *ChatSendBeforeEventSignal*
#### Removed *CompoundBlockVolume*
#### Changed *[`Container`](Container.md)*
- Changed function *[`addItem`](Container.md#additem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
- Removed function *getSlot*
- Changed function *[`transferItem`](Container.md#transferitem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
#### Removed *ContainerSlot*
#### Removed *DataDrivenEntityTriggerAfterEvent*
#### Removed *DataDrivenEntityTriggerAfterEventSignal*
#### Removed *DataDrivenEntityTriggerBeforeEvent*
#### Removed *DataDrivenEntityTriggerBeforeEventSignal*
#### Removed *DefinitionModifier*
#### Changed *[`Dimension`](Dimension.md)*
- Removed property *heightRange*
- Removed function *createExplosion*
- Removed function *fillBlocks*
- Removed function *getWeather*
#### Removed *DimensionType*
#### Removed *DimensionTypes*
#### Removed *EffectAddAfterEvent*
#### Removed *EffectAddAfterEventSignal*
#### Removed *EffectTypes*
#### Removed *Enchantment*
#### Removed *EnchantmentList*
#### Removed *EnchantmentSlot*
#### Removed *EnchantmentType*
#### Removed *EnchantmentTypes*
#### Changed *[`Entity`](Entity.md)*
- Removed property *fallDistance*
- Removed property *lifetimeState*
- Removed property *target*
- Removed function *clearDynamicProperties*
- Removed function *extinguishFire*
- Removed function *getDynamicProperty*
- Removed function *getDynamicPropertyIds*
- Removed function *getDynamicPropertyTotalByteCount*
- Removed function *playAnimation*
- Removed function *remove*
- Changed function *[`resetProperty`](Entity.md#resetproperty)*
  - Changed return type from *boolean* | *number* | *string* (throws exceptions) to *boolean* | *number* | *string* (throws exceptions)
- Removed function *setDynamicProperty*
- Removed function *setOnFire*
#### Removed *EntityAddRiderComponent*
#### Removed *EntityAgeableComponent*
#### Removed *EntityBreathableComponent*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Removed property *entity*
#### Removed *EntityDefinitionFeedItem*
#### Changed *[`EntityEquippableComponent`](EntityEquippableComponent.md)*
- Removed function *getEquipmentSlot*
#### Changed *[`EntityHealableComponent`](EntityHealableComponent.md)*
- Removed property *filters*
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
#### Removed *EntityRideableComponent*
#### Removed *EntityRidingComponent*
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
#### Removed *ItemCooldownComponent*
#### Removed *ItemDefinitionAfterEventSignal*
#### Removed *ItemDefinitionBeforeEventSignal*
#### Removed *ItemDefinitionTriggeredAfterEvent*
#### Removed *ItemDefinitionTriggeredBeforeEvent*
#### Removed *ItemDurabilityComponent*
#### Removed *ItemEnchantsComponent*
#### Removed *ItemFoodComponent*
#### Changed *[`ItemStack`](ItemStack.md)*
- Removed function *triggerEvent*
#### Removed *ItemTypes*
#### Removed *MessageReceiveAfterEvent*
#### Removed *NavigationResult*
#### Removed *PistonActivateAfterEvent*
#### Removed *PistonActivateAfterEventSignal*
#### Removed *PistonActivateBeforeEvent*
#### Removed *PistonActivateBeforeEventSignal*
#### Changed *[`Player`](Player.md)*
- Removed property *selectedSlot*
- Removed function *getItemCooldown*
- Removed function *isOp*
- Removed function *playMusic*
- Removed function *postClientMessage*
- Removed function *queueMusic*
- Removed function *setOp*
- Removed function *startItemCooldown*
- Removed function *stopMusic*
#### Removed *PlayerDimensionChangeBeforeEvent*
#### Removed *PlayerDimensionChangeBeforeEventSignal*
#### Removed *PlayerInteractWithBlockAfterEvent*
#### Removed *PlayerInteractWithBlockAfterEventSignal*
#### Removed *PlayerInteractWithBlockBeforeEvent*
#### Removed *PlayerInteractWithBlockBeforeEventSignal*
#### Removed *PlayerInteractWithEntityAfterEvent*
#### Removed *PlayerInteractWithEntityAfterEventSignal*
#### Removed *PlayerInteractWithEntityBeforeEvent*
#### Removed *PlayerInteractWithEntityBeforeEventSignal*
#### Removed *PlayerIterator*
#### Removed *PlayerPlaceBlockBeforeEvent*
#### Removed *PlayerPlaceBlockBeforeEventSignal*
#### Removed *Seat*
#### Removed *ServerMessageAfterEventSignal*
#### Changed *[`System`](System.md)*
- Removed property *beforeEvents*
#### Removed *SystemBeforeEvents*
#### Removed *Trigger*
#### Removed *Vector*
#### Removed *WatchdogTerminateBeforeEvent*
#### Removed *WatchdogTerminateBeforeEventSignal*
#### Removed *WeatherChangeAfterEvent*
#### Removed *WeatherChangeAfterEventSignal*
#### Changed *[`World`](World.md)*
- Removed function *broadcastClientMessage*
- Removed function *clearDynamicProperties*
- Removed function *getDynamicProperty*
- Removed function *getDynamicPropertyIds*
- Removed function *getDynamicPropertyTotalByteCount*
- Removed function *getEntity*
- Removed function *setDynamicProperty*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Removed property *blockExplode*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *effectAdd*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Removed property *messageReceive*
- Removed property *pistonActivate*
- Removed property *playerInteractWithBlock*
- Removed property *playerInteractWithEntity*
- Removed property *weatherChange*
- Removed property *worldInitialize*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Removed property *pistonActivate*
- Removed property *playerDimensionChange*
- Removed property *playerInteractWithBlock*
- Removed property *playerInteractWithEntity*
- Removed property *playerPlaceBlock*
#### Removed *WorldInitializeAfterEvent*
#### Removed *WorldInitializeAfterEventSignal*
#### Removed enum `BlockVolumeIntersection`
#### Removed enum `CompoundBlockVolumeAction`
#### Removed enum `CompoundBlockVolumePositionRelativity`
#### Removed enum `Difficulty`
#### Removed enum `DyeColor`
#### Removed enum `EntityLifetimeState`
#### Removed enum `FluidType`
#### Removed enum `SignSide`
#### Removed enum `WatchdogTerminateReason`
#### Removed constant `TicksPerDay`
#### Removed constant `TicksPerSecond`
## 1.7.0-beta
#### Changed *[`Block`](Block.md)*
- Added property *[`isSolid`](Block.md#issolid)*
- Added property *[`isWaterlogged`](Block.md#iswaterlogged)*
- Added property *[`type`](Block.md#type)*
- Added property *[`typeId`](Block.md#typeid)*
- Added function *[`above`](Block.md#above)*
- Added function *[`below`](Block.md#below)*
- Added function *[`bottomCenter`](Block.md#bottomcenter)*
- Added function *[`canPlace`](Block.md#canplace)*
- Added function *[`center`](Block.md#center)*
- Added function *[`east`](Block.md#east)*
- Changed function *[`getComponent`](Block.md#getcomponent)*
  - Added argument `componentName`
  - Removed argument `componentId`
- Added function *[`getItemStack`](Block.md#getitemstack)*
- Added function *[`getRedstonePower`](Block.md#getredstonepower)*
- Added function *[`getTags`](Block.md#gettags)*
- Added function *[`hasTag`](Block.md#hastag)*
- Added function *[`north`](Block.md#north)*
- Added function *[`offset`](Block.md#offset)*
- Added function *[`setType`](Block.md#settype)*
- Added function *[`south`](Block.md#south)*
- Added function *[`trySetPermutation`](Block.md#trysetpermutation)*
- Added function *[`west`](Block.md#west)*
#### Added *[`BlockAreaSize`](BlockAreaSize.md)*
#### Added *[`BlockExplodeAfterEvent`](BlockExplodeAfterEvent.md)*
#### Added *[`BlockExplodeAfterEventSignal`](BlockExplodeAfterEventSignal.md)*
#### Added *[`BlockLavaContainerComponent`](BlockLavaContainerComponent.md)*
#### Added *[`BlockLiquidContainerComponent`](BlockLiquidContainerComponent.md)*
#### Added *[`BlockLocationIterator`](BlockLocationIterator.md)*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added property *[`type`](BlockPermutation.md#type)*
- Added function *[`clone`](BlockPermutation.md#clone)*
- Added function *[`getAllStates`](BlockPermutation.md#getallstates)*
- Added function *[`getItemStack`](BlockPermutation.md#getitemstack)*
- Added function *[`getState`](BlockPermutation.md#getstate)*
- Added function *[`getTags`](BlockPermutation.md#gettags)*
- Added function *[`hasTag`](BlockPermutation.md#hastag)*
- Added function *[`withState`](BlockPermutation.md#withstate)*
#### Added *[`BlockPistonComponent`](BlockPistonComponent.md)*
#### Added *[`BlockPotionContainerComponent`](BlockPotionContainerComponent.md)*
#### Added *[`BlockRecordPlayerComponent`](BlockRecordPlayerComponent.md)*
#### Added *[`BlockSignComponent`](BlockSignComponent.md)*
#### Added *[`BlockSnowContainerComponent`](BlockSnowContainerComponent.md)*
#### Added *[`BlockStates`](BlockStates.md)*
#### Added *[`BlockStateType`](BlockStateType.md)*
#### Added *[`BlockType`](BlockType.md)*
#### Added *[`BlockTypes`](BlockTypes.md)*
#### Added *[`BlockVolumeUtils`](BlockVolumeUtils.md)*
#### Added *[`BlockWaterContainerComponent`](BlockWaterContainerComponent.md)*
#### Added *[`BoundingBoxUtils`](BoundingBoxUtils.md)*
#### Added *[`ChatSendAfterEvent`](ChatSendAfterEvent.md)*
#### Added *[`ChatSendAfterEventSignal`](ChatSendAfterEventSignal.md)*
#### Added *[`ChatSendBeforeEvent`](ChatSendBeforeEvent.md)*
#### Added *[`ChatSendBeforeEventSignal`](ChatSendBeforeEventSignal.md)*
#### Added *[`CompoundBlockVolume`](CompoundBlockVolume.md)*
#### Changed *[`Container`](Container.md)*
- Changed function *[`addItem`](Container.md#additem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
- Added function *[`getSlot`](Container.md#getslot)*
- Changed function *[`transferItem`](Container.md#transferitem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
#### Added *[`ContainerSlot`](ContainerSlot.md)*
#### Added *[`DataDrivenEntityTriggerAfterEvent`](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[`DataDrivenEntityTriggerAfterEventSignal`](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEvent`](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEventSignal`](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[`DefinitionModifier`](DefinitionModifier.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added property *[`heightRange`](Dimension.md#heightrange)*
- Added function *[`createExplosion`](Dimension.md#createexplosion)*
- Added function *[`fillBlocks`](Dimension.md#fillblocks)*
- Added function *[`getWeather`](Dimension.md#getweather)*
#### Added *[`DimensionType`](DimensionType.md)*
#### Added *[`DimensionTypes`](DimensionTypes.md)*
#### Added *[`EffectAddAfterEvent`](EffectAddAfterEvent.md)*
#### Added *[`EffectAddAfterEventSignal`](EffectAddAfterEventSignal.md)*
#### Added *[`EffectTypes`](EffectTypes.md)*
#### Added *[`Enchantment`](Enchantment.md)*
#### Added *[`EnchantmentList`](EnchantmentList.md)*
#### Added *[`EnchantmentSlot`](EnchantmentSlot.md)*
#### Added *[`EnchantmentType`](EnchantmentType.md)*
#### Added *[`EnchantmentTypes`](EnchantmentTypes.md)*
#### Changed *[`Entity`](Entity.md)*
- Added property *[`fallDistance`](Entity.md#falldistance)*
- Added property *[`lifetimeState`](Entity.md#lifetimestate)*
- Added property *[`target`](Entity.md#target)*
- Added function *[`clearDynamicProperties`](Entity.md#cleardynamicproperties)*
- Added function *[`extinguishFire`](Entity.md#extinguishfire)*
- Added function *[`getDynamicProperty`](Entity.md#getdynamicproperty)*
- Added function *[`getDynamicPropertyIds`](Entity.md#getdynamicpropertyids)*
- Added function *[`getDynamicPropertyTotalByteCount`](Entity.md#getdynamicpropertytotalbytecount)*
- Added function *[`playAnimation`](Entity.md#playanimation)*
- Added function *[`remove`](Entity.md#remove)*
- Changed function *[`resetProperty`](Entity.md#resetproperty)*
  - Changed return type from *boolean* | *number* | *string* (throws exceptions) to *boolean* | *number* | *string* (throws exceptions)
- Added function *[`setDynamicProperty`](Entity.md#setdynamicproperty)*
- Added function *[`setOnFire`](Entity.md#setonfire)*
#### Added *[`EntityAddRiderComponent`](EntityAddRiderComponent.md)*
#### Added *[`EntityAgeableComponent`](EntityAgeableComponent.md)*
#### Added *[`EntityBreathableComponent`](EntityBreathableComponent.md)*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Added property *[`entity`](EntityComponent.md#entity)*
#### Added *[`EntityDefinitionFeedItem`](EntityDefinitionFeedItem.md)*
#### Changed *[`EntityEquippableComponent`](EntityEquippableComponent.md)*
- Added function *[`getEquipmentSlot`](EntityEquippableComponent.md#getequipmentslot)*
#### Changed *[`EntityHealableComponent`](EntityHealableComponent.md)*
- Added property *[`filters`](EntityHealableComponent.md#filters)*
#### Added *[`EntityIterator`](EntityIterator.md)*
#### Added *[`EntityLavaMovementComponent`](EntityLavaMovementComponent.md)*
#### Added *[`EntityLeashableComponent`](EntityLeashableComponent.md)*
#### Added *[`EntityMountTamingComponent`](EntityMountTamingComponent.md)*
#### Added *[`EntityMovementComponent`](EntityMovementComponent.md)*
#### Added *[`EntityMovementGlideComponent`](EntityMovementGlideComponent.md)*
#### Added *[`EntityMovementSwayComponent`](EntityMovementSwayComponent.md)*
#### Added *[`EntityNavigationClimbComponent`](EntityNavigationClimbComponent.md)*
#### Added *[`EntityNavigationComponent`](EntityNavigationComponent.md)*
#### Added *[`EntityNavigationFloatComponent`](EntityNavigationFloatComponent.md)*
#### Added *[`EntityNavigationFlyComponent`](EntityNavigationFlyComponent.md)*
#### Added *[`EntityNavigationGenericComponent`](EntityNavigationGenericComponent.md)*
#### Added *[`EntityNavigationHoverComponent`](EntityNavigationHoverComponent.md)*
#### Added *[`EntityNavigationWalkComponent`](EntityNavigationWalkComponent.md)*
#### Added *[`EntityOnFireComponent`](EntityOnFireComponent.md)*
#### Added *[`EntityRideableComponent`](EntityRideableComponent.md)*
#### Added *[`EntityRidingComponent`](EntityRidingComponent.md)*
#### Added *[`EntityStrengthComponent`](EntityStrengthComponent.md)*
#### Added *[`EntityTameableComponent`](EntityTameableComponent.md)*
#### Added *[`EntityType`](EntityType.md)*
#### Added *[`EntityTypeIterator`](EntityTypeIterator.md)*
#### Added *[`EntityTypes`](EntityTypes.md)*
#### Added *[`EntityUnderwaterMovementComponent`](EntityUnderwaterMovementComponent.md)*
#### Added *[`ExplosionAfterEvent`](ExplosionAfterEvent.md)*
#### Added *[`ExplosionAfterEventSignal`](ExplosionAfterEventSignal.md)*
#### Added *[`ExplosionBeforeEvent`](ExplosionBeforeEvent.md)*
#### Added *[`ExplosionBeforeEventSignal`](ExplosionBeforeEventSignal.md)*
#### Added *[`FilterGroup`](FilterGroup.md)*
#### Added *[`FluidContainer`](FluidContainer.md)*
#### Added *[`ItemCooldownComponent`](ItemCooldownComponent.md)*
#### Added *[`ItemDefinitionAfterEventSignal`](ItemDefinitionAfterEventSignal.md)*
#### Added *[`ItemDefinitionBeforeEventSignal`](ItemDefinitionBeforeEventSignal.md)*
#### Added *[`ItemDefinitionTriggeredAfterEvent`](ItemDefinitionTriggeredAfterEvent.md)*
#### Added *[`ItemDefinitionTriggeredBeforeEvent`](ItemDefinitionTriggeredBeforeEvent.md)*
#### Added *[`ItemDurabilityComponent`](ItemDurabilityComponent.md)*
#### Added *[`ItemEnchantsComponent`](ItemEnchantsComponent.md)*
#### Added *[`ItemFoodComponent`](ItemFoodComponent.md)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Added function *[`triggerEvent`](ItemStack.md#triggerevent)*
#### Added *[`ItemTypes`](ItemTypes.md)*
#### Added *[`MessageReceiveAfterEvent`](MessageReceiveAfterEvent.md)*
#### Added *[`NavigationResult`](NavigationResult.md)*
#### Added *[`PistonActivateAfterEvent`](PistonActivateAfterEvent.md)*
#### Added *[`PistonActivateAfterEventSignal`](PistonActivateAfterEventSignal.md)*
#### Added *[`PistonActivateBeforeEvent`](PistonActivateBeforeEvent.md)*
#### Added *[`PistonActivateBeforeEventSignal`](PistonActivateBeforeEventSignal.md)*
#### Changed *[`Player`](Player.md)*
- Added property *[`selectedSlot`](Player.md#selectedslot)*
- Added function *[`getItemCooldown`](Player.md#getitemcooldown)*
- Added function *[`isOp`](Player.md#isop)*
- Added function *[`playMusic`](Player.md#playmusic)*
- Added function *[`postClientMessage`](Player.md#postclientmessage)*
- Added function *[`queueMusic`](Player.md#queuemusic)*
- Added function *[`setOp`](Player.md#setop)*
- Added function *[`startItemCooldown`](Player.md#startitemcooldown)*
- Added function *[`stopMusic`](Player.md#stopmusic)*
#### Added *[`PlayerDimensionChangeBeforeEvent`](PlayerDimensionChangeBeforeEvent.md)*
#### Added *[`PlayerDimensionChangeBeforeEventSignal`](PlayerDimensionChangeBeforeEventSignal.md)*
#### Added *[`PlayerInteractWithBlockAfterEvent`](PlayerInteractWithBlockAfterEvent.md)*
#### Added *[`PlayerInteractWithBlockAfterEventSignal`](PlayerInteractWithBlockAfterEventSignal.md)*
#### Added *[`PlayerInteractWithBlockBeforeEvent`](PlayerInteractWithBlockBeforeEvent.md)*
#### Added *[`PlayerInteractWithBlockBeforeEventSignal`](PlayerInteractWithBlockBeforeEventSignal.md)*
#### Added *[`PlayerInteractWithEntityAfterEvent`](PlayerInteractWithEntityAfterEvent.md)*
#### Added *[`PlayerInteractWithEntityAfterEventSignal`](PlayerInteractWithEntityAfterEventSignal.md)*
#### Added *[`PlayerInteractWithEntityBeforeEvent`](PlayerInteractWithEntityBeforeEvent.md)*
#### Added *[`PlayerInteractWithEntityBeforeEventSignal`](PlayerInteractWithEntityBeforeEventSignal.md)*
#### Added *[`PlayerIterator`](PlayerIterator.md)*
#### Added *[`PlayerPlaceBlockBeforeEvent`](PlayerPlaceBlockBeforeEvent.md)*
#### Added *[`PlayerPlaceBlockBeforeEventSignal`](PlayerPlaceBlockBeforeEventSignal.md)*
#### Added *[`Seat`](Seat.md)*
#### Added *[`ServerMessageAfterEventSignal`](ServerMessageAfterEventSignal.md)*
#### Changed *[`System`](System.md)*
- Added property *[`beforeEvents`](System.md#beforeevents)*
#### Added *[`SystemBeforeEvents`](SystemBeforeEvents.md)*
#### Added *[`Trigger`](Trigger.md)*
#### Added *[`Vector`](Vector.md)*
#### Added *[`WatchdogTerminateBeforeEvent`](WatchdogTerminateBeforeEvent.md)*
#### Added *[`WatchdogTerminateBeforeEventSignal`](WatchdogTerminateBeforeEventSignal.md)*
#### Added *[`WeatherChangeAfterEvent`](WeatherChangeAfterEvent.md)*
#### Added *[`WeatherChangeAfterEventSignal`](WeatherChangeAfterEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added function *[`broadcastClientMessage`](World.md#broadcastclientmessage)*
- Added function *[`clearDynamicProperties`](World.md#cleardynamicproperties)*
- Added function *[`getDynamicProperty`](World.md#getdynamicproperty)*
- Added function *[`getDynamicPropertyIds`](World.md#getdynamicpropertyids)*
- Added function *[`getDynamicPropertyTotalByteCount`](World.md#getdynamicpropertytotalbytecount)*
- Added function *[`getEntity`](World.md#getentity)*
- Added function *[`setDynamicProperty`](World.md#setdynamicproperty)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`blockExplode`](WorldAfterEvents.md#blockexplode)*
- Added property *[`chatSend`](WorldAfterEvents.md#chatsend)*
- Added property *[`dataDrivenEntityTriggerEvent`](WorldAfterEvents.md#datadrivenentitytriggerevent)*
- Added property *[`effectAdd`](WorldAfterEvents.md#effectadd)*
- Added property *[`explosion`](WorldAfterEvents.md#explosion)*
- Added property *[`itemDefinitionEvent`](WorldAfterEvents.md#itemdefinitionevent)*
- Added property *[`messageReceive`](WorldAfterEvents.md#messagereceive)*
- Added property *[`pistonActivate`](WorldAfterEvents.md#pistonactivate)*
- Added property *[`playerInteractWithBlock`](WorldAfterEvents.md#playerinteractwithblock)*
- Added property *[`playerInteractWithEntity`](WorldAfterEvents.md#playerinteractwithentity)*
- Added property *[`weatherChange`](WorldAfterEvents.md#weatherchange)*
- Added property *[`worldInitialize`](WorldAfterEvents.md#worldinitialize)*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Added property *[`chatSend`](WorldBeforeEvents.md#chatsend)*
- Added property *[`dataDrivenEntityTriggerEvent`](WorldBeforeEvents.md#datadrivenentitytriggerevent)*
- Added property *[`explosion`](WorldBeforeEvents.md#explosion)*
- Added property *[`itemDefinitionEvent`](WorldBeforeEvents.md#itemdefinitionevent)*
- Added property *[`pistonActivate`](WorldBeforeEvents.md#pistonactivate)*
- Added property *[`playerDimensionChange`](WorldBeforeEvents.md#playerdimensionchange)*
- Added property *[`playerInteractWithBlock`](WorldBeforeEvents.md#playerinteractwithblock)*
- Added property *[`playerInteractWithEntity`](WorldBeforeEvents.md#playerinteractwithentity)*
- Added property *[`playerPlaceBlock`](WorldBeforeEvents.md#playerplaceblock)*
#### Added *[`WorldInitializeAfterEvent`](WorldInitializeAfterEvent.md)*
#### Added *[`WorldInitializeAfterEventSignal`](WorldInitializeAfterEventSignal.md)*
#### Added enum [`BlockVolumeIntersection`](BlockVolumeIntersection.md)
#### Added enum [`CompoundBlockVolumeAction`](CompoundBlockVolumeAction.md)
#### Added enum [`CompoundBlockVolumePositionRelativity`](CompoundBlockVolumePositionRelativity.md)
#### Added enum [`Difficulty`](Difficulty.md)
#### Added enum [`DyeColor`](DyeColor.md)
#### Added enum [`EntityLifetimeState`](EntityLifetimeState.md)
#### Added enum [`FluidType`](FluidType.md)
#### Added enum [`SignSide`](SignSide.md)
#### Added enum [`WatchdogTerminateReason`](WatchdogTerminateReason.md)
#### Added constant `TicksPerDay`
#### Added constant `TicksPerSecond`
## 1.6.0
#### Changed *[`Block`](Block.md)*
- Removed property *isSolid*
- Removed property *isWaterlogged*
- Removed property *type*
- Removed property *typeId*
- Removed function *canPlace*
- Changed function *[`getComponent`](Block.md#getcomponent)*
  - Added argument `componentId`
  - Removed argument `componentName`
- Removed function *getItemStack*
- Removed function *getRedstonePower*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *setType*
- Removed function *trySetPermutation*
#### Removed *BlockAreaSize*
#### Removed *BlockBreakAfterEvent*
#### Removed *BlockBreakAfterEventSignal*
#### Removed *BlockExplodeAfterEvent*
#### Removed *BlockExplodeAfterEventSignal*
#### Changed *[`BlockInventoryComponent`](BlockInventoryComponent.md)*
- Changed type for *[`container`](BlockInventoryComponent.md#container)* from [*Container*](Container.md) (throws exceptions) to [*Container*](Container.md) (throws exceptions)
#### Removed *BlockLavaContainerComponent*
#### Removed *BlockLiquidContainerComponent*
#### Removed *BlockLocationIterator*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
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
#### Removed *BlockTypes*
#### Removed *BlockVolumeUtils*
#### Removed *BlockWaterContainerComponent*
#### Removed *BoundingBoxUtils*
#### Changed *[`Camera`](Camera.md)*
- Changed function *[`setCamera`](Camera.md#setcamera)*
  - Changed argument `setOptions` type from [*ScriptCameraDefaultOptions*](ScriptCameraDefaultOptions.md) | [*ScriptCameraSetFacingOptions*](ScriptCameraSetFacingOptions.md) | [*ScriptCameraSetLocationOptions*](ScriptCameraSetLocationOptions.md) | [*ScriptCameraSetPosOptions*](ScriptCameraSetPosOptions.md) | [*ScriptCameraSetRotOptions*](ScriptCameraSetRotOptions.md) to [*CameraDefaultOptions*](CameraDefaultOptions.md) | [*CameraSetFacingOptions*](CameraSetFacingOptions.md) | [*CameraSetLocationOptions*](CameraSetLocationOptions.md) | [*CameraSetPosOptions*](CameraSetPosOptions.md) | [*CameraSetRotOptions*](CameraSetRotOptions.md)
#### Removed *ChatSendAfterEvent*
#### Removed *ChatSendAfterEventSignal*
#### Removed *ChatSendBeforeEvent*
#### Removed *ChatSendBeforeEventSignal*
#### Removed *CompoundBlockVolume*
#### Changed *[`Container`](Container.md)*
- Changed function *[`addItem`](Container.md#additem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
- Removed function *getSlot*
- Changed function *[`transferItem`](Container.md#transferitem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
#### Removed *ContainerSlot*
#### Removed *DataDrivenEntityTriggerAfterEvent*
#### Removed *DataDrivenEntityTriggerAfterEventSignal*
#### Removed *DataDrivenEntityTriggerBeforeEvent*
#### Removed *DataDrivenEntityTriggerBeforeEventSignal*
#### Removed *DefinitionModifier*
#### Changed *[`Dimension`](Dimension.md)*
- Removed function *createExplosion*
- Removed function *fillBlocks*
#### Removed *DimensionType*
#### Removed *DimensionTypes*
#### Removed *DynamicPropertiesDefinition*
#### Removed *EffectAddAfterEvent*
#### Removed *EffectAddAfterEventSignal*
#### Removed *EffectTypes*
#### Removed *Enchantment*
#### Removed *EnchantmentList*
#### Removed *EnchantmentSlot*
#### Removed *EnchantmentType*
#### Removed *EnchantmentTypes*
#### Changed *[`Entity`](Entity.md)*
- Removed property *fallDistance*
- Removed property *lifetimeState*
- Changed type for *[`scoreboardIdentity`](Entity.md#scoreboardidentity)* from [*ScoreboardIdentity*](ScoreboardIdentity.md) (throws exceptions) to [*ScoreboardIdentity*](ScoreboardIdentity.md)
- Removed property *target*
- Removed function *extinguishFire*
- Removed function *getDynamicProperty*
- Removed function *playAnimation*
- Removed function *remove*
- Removed function *removeDynamicProperty*
- Changed function *[`resetProperty`](Entity.md#resetproperty)*
  - Changed return type from *boolean* | *number* | *string* (throws exceptions) to *boolean* | *number* | *string* (throws exceptions)
- Removed function *setDynamicProperty*
- Removed function *setOnFire*
#### Removed *EntityAddRiderComponent*
#### Removed *EntityAgeableComponent*
#### Removed *EntityBreathableComponent*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Removed property *entity*
#### Removed *EntityDefinitionFeedItem*
#### Changed *[`EntityEquippableComponent`](EntityEquippableComponent.md)*
- Removed function *getEquipmentSlot*
#### Changed *[`EntityHealableComponent`](EntityHealableComponent.md)*
- Removed property *filters*
#### Removed *EntityIterator*
#### Removed *EntityLavaMovementComponent*
#### Removed *EntityLeashableComponent*
#### Added *[`EntityLoadAfterEvent`](EntityLoadAfterEvent.md)*
#### Added *[`EntityLoadAfterEventSignal`](EntityLoadAfterEventSignal.md)*
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
#### Removed *EntityRideableComponent*
#### Removed *EntityRidingComponent*
#### Changed *[`EntitySpawnAfterEvent`](EntitySpawnAfterEvent.md)*
- Added property *[`cause`](EntitySpawnAfterEvent.md#cause)*
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
#### Removed *ItemCooldownComponent*
#### Removed *ItemDefinitionAfterEventSignal*
#### Removed *ItemDefinitionBeforeEventSignal*
#### Removed *ItemDefinitionTriggeredAfterEvent*
#### Removed *ItemDefinitionTriggeredBeforeEvent*
#### Removed *ItemDurabilityComponent*
#### Removed *ItemEnchantsComponent*
#### Removed *ItemFoodComponent*
#### Changed *[`ItemStack`](ItemStack.md)*
- Removed function *triggerEvent*
#### Removed *ItemTypes*
#### Removed *MessageReceiveAfterEvent*
#### Removed *NavigationResult*
#### Removed *PistonActivateAfterEvent*
#### Removed *PistonActivateAfterEventSignal*
#### Removed *PistonActivateBeforeEvent*
#### Removed *PistonActivateBeforeEventSignal*
#### Changed *[`Player`](Player.md)*
- Removed property *selectedSlot*
- Removed function *getItemCooldown*
- Removed function *isOp*
- Changed function *[`playSound`](Player.md#playsound)*
  - Added argument `soundId`
  - Removed argument `soundID`
- Removed function *postClientMessage*
- Removed function *setOp*
- Removed function *startItemCooldown*
#### Added *[`PlayerBreakBlockAfterEvent`](PlayerBreakBlockAfterEvent.md)*
#### Added *[`PlayerBreakBlockAfterEventSignal`](PlayerBreakBlockAfterEventSignal.md)*
#### Added *[`PlayerBreakBlockBeforeEvent`](PlayerBreakBlockBeforeEvent.md)*
#### Added *[`PlayerBreakBlockBeforeEventSignal`](PlayerBreakBlockBeforeEventSignal.md)*
#### Added *[`PlayerDimensionChangeAfterEvent`](PlayerDimensionChangeAfterEvent.md)*
#### Added *[`PlayerDimensionChangeAfterEventSignal`](PlayerDimensionChangeAfterEventSignal.md)*
#### Removed *PlayerIterator*
#### Added *[`PlayerPlaceBlockAfterEvent`](PlayerPlaceBlockAfterEvent.md)*
#### Added *[`PlayerPlaceBlockAfterEventSignal`](PlayerPlaceBlockAfterEventSignal.md)*
#### Removed *PropertyRegistry*
#### Removed *Seat*
#### Removed *ServerMessageAfterEventSignal*
#### Changed *[`System`](System.md)*
- Removed property *beforeEvents*
#### Removed *SystemBeforeEvents*
#### Removed *Trigger*
#### Removed *Vector*
#### Removed *WatchdogTerminateBeforeEvent*
#### Removed *WatchdogTerminateBeforeEventSignal*
#### Removed *WeatherChangeAfterEvent*
#### Removed *WeatherChangeAfterEventSignal*
#### Changed *[`World`](World.md)*
- Removed function *broadcastClientMessage*
- Removed function *getDynamicProperty*
- Removed function *getEntity*
- Changed function *[`playMusic`](World.md#playmusic)*
  - Added argument `trackId`
  - Removed argument `trackID`
- Changed function *[`playSound`](World.md#playsound)*
  - Added argument `soundId`
  - Removed argument `soundID`
- Changed function *[`queueMusic`](World.md#queuemusic)*
  - Added argument `trackId`
  - Removed argument `trackID`
- Removed function *removeDynamicProperty*
- Removed function *setDynamicProperty*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Removed property *blockBreak*
- Removed property *blockExplode*
- Removed property *blockPlace*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *effectAdd*
- Added property *[`entityLoad`](WorldAfterEvents.md#entityload)*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Removed property *messageReceive*
- Removed property *pistonActivate*
- Added property *[`playerBreakBlock`](WorldAfterEvents.md#playerbreakblock)*
- Added property *[`playerDimensionChange`](WorldAfterEvents.md#playerdimensionchange)*
- Added property *[`playerPlaceBlock`](WorldAfterEvents.md#playerplaceblock)*
- Removed property *weatherChange*
- Removed property *worldInitialize*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Removed property *pistonActivate*
- Added property *[`playerBreakBlock`](WorldBeforeEvents.md#playerbreakblock)*
#### Removed *WorldInitializeAfterEvent*
#### Removed *WorldInitializeAfterEventSignal*
#### Removed enum `BlockVolumeIntersection`
#### Removed enum `CompoundBlockVolumeAction`
#### Removed enum `CompoundBlockVolumePositionRelativity`
#### Removed enum `DyeColor`
#### Changed enum [`EntityDamageCause`](EntityDamageCause.md)
- Added value `campfire`
- Added value `ramAttack`
- Added value `sonicBoom`
- Added value `soulCampfire`
#### Added enum [`EntityInitializationCause`](EntityInitializationCause.md)
#### Removed enum `EntityLifetimeState`
#### Removed enum `FluidType`
#### Removed enum `SignSide`
#### Removed enum `WatchdogTerminateReason`
#### Removed constant `TicksPerDay`
#### Removed constant `TicksPerSecond`
## 1.6.0-beta
#### Changed *[`Block`](Block.md)*
- Added property *[`isAir`](Block.md#isair)*
- Added property *[`isLiquid`](Block.md#isliquid)*
- Added property *[`isSolid`](Block.md#issolid)*
- Added property *[`isWaterlogged`](Block.md#iswaterlogged)*
- Added property *[`type`](Block.md#type)*
- Added property *[`typeId`](Block.md#typeid)*
- Added function *[`canPlace`](Block.md#canplace)*
- Changed function *[`getComponent`](Block.md#getcomponent)*
  - Added argument `componentName`
  - Removed argument `componentId`
- Added function *[`getItemStack`](Block.md#getitemstack)*
- Added function *[`getRedstonePower`](Block.md#getredstonepower)*
- Added function *[`getTags`](Block.md#gettags)*
- Added function *[`hasTag`](Block.md#hastag)*
- Added function *[`setType`](Block.md#settype)*
- Added function *[`trySetPermutation`](Block.md#trysetpermutation)*
#### Added *[`BlockAreaSize`](BlockAreaSize.md)*
#### Added *[`BlockBreakAfterEvent`](BlockBreakAfterEvent.md)*
#### Added *[`BlockBreakAfterEventSignal`](BlockBreakAfterEventSignal.md)*
#### Added *[`BlockExplodeAfterEvent`](BlockExplodeAfterEvent.md)*
#### Added *[`BlockExplodeAfterEventSignal`](BlockExplodeAfterEventSignal.md)*
#### Changed *[`BlockInventoryComponent`](BlockInventoryComponent.md)*
- Changed type for *[`container`](BlockInventoryComponent.md#container)* from [*Container*](Container.md) (throws exceptions) to [*Container*](Container.md) (throws exceptions)
#### Added *[`BlockLavaContainerComponent`](BlockLavaContainerComponent.md)*
#### Added *[`BlockLiquidContainerComponent`](BlockLiquidContainerComponent.md)*
#### Added *[`BlockLocationIterator`](BlockLocationIterator.md)*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added property *[`type`](BlockPermutation.md#type)*
- Added function *[`clone`](BlockPermutation.md#clone)*
- Added function *[`getAllStates`](BlockPermutation.md#getallstates)*
- Added function *[`getItemStack`](BlockPermutation.md#getitemstack)*
- Added function *[`getState`](BlockPermutation.md#getstate)*
- Added function *[`getTags`](BlockPermutation.md#gettags)*
- Added function *[`hasTag`](BlockPermutation.md#hastag)*
- Added function *[`withState`](BlockPermutation.md#withstate)*
#### Added *[`BlockPistonComponent`](BlockPistonComponent.md)*
#### Added *[`BlockPlaceAfterEvent`](BlockPlaceAfterEvent.md)*
#### Added *[`BlockPlaceAfterEventSignal`](BlockPlaceAfterEventSignal.md)*
#### Added *[`BlockPotionContainerComponent`](BlockPotionContainerComponent.md)*
#### Added *[`BlockRecordPlayerComponent`](BlockRecordPlayerComponent.md)*
#### Added *[`BlockSignComponent`](BlockSignComponent.md)*
#### Added *[`BlockSnowContainerComponent`](BlockSnowContainerComponent.md)*
#### Added *[`BlockStates`](BlockStates.md)*
#### Added *[`BlockStateType`](BlockStateType.md)*
#### Added *[`BlockType`](BlockType.md)*
#### Added *[`BlockTypes`](BlockTypes.md)*
#### Added *[`BlockVolumeUtils`](BlockVolumeUtils.md)*
#### Added *[`BlockWaterContainerComponent`](BlockWaterContainerComponent.md)*
#### Added *[`BoundingBoxUtils`](BoundingBoxUtils.md)*
#### Added *[`Camera`](Camera.md)*
#### Added *[`ChatSendAfterEvent`](ChatSendAfterEvent.md)*
#### Added *[`ChatSendAfterEventSignal`](ChatSendAfterEventSignal.md)*
#### Added *[`ChatSendBeforeEvent`](ChatSendBeforeEvent.md)*
#### Added *[`ChatSendBeforeEventSignal`](ChatSendBeforeEventSignal.md)*
#### Added *[`CompoundBlockVolume`](CompoundBlockVolume.md)*
#### Changed *[`Container`](Container.md)*
- Changed function *[`addItem`](Container.md#additem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
- Added function *[`getSlot`](Container.md#getslot)*
- Changed function *[`transferItem`](Container.md#transferitem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
#### Added *[`ContainerSlot`](ContainerSlot.md)*
#### Added *[`DataDrivenEntityTriggerAfterEvent`](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[`DataDrivenEntityTriggerAfterEventSignal`](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEvent`](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEventSignal`](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[`DefinitionModifier`](DefinitionModifier.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Added function *[`createExplosion`](Dimension.md#createexplosion)*
- Added function *[`fillBlocks`](Dimension.md#fillblocks)*
- Added function *[`setWeather`](Dimension.md#setweather)*
#### Added *[`DimensionType`](DimensionType.md)*
#### Added *[`DimensionTypes`](DimensionTypes.md)*
#### Added *[`DynamicPropertiesDefinition`](DynamicPropertiesDefinition.md)*
#### Added *[`EffectAddAfterEvent`](EffectAddAfterEvent.md)*
#### Added *[`EffectAddAfterEventSignal`](EffectAddAfterEventSignal.md)*
#### Added *[`EffectTypes`](EffectTypes.md)*
#### Added *[`Enchantment`](Enchantment.md)*
#### Added *[`EnchantmentList`](EnchantmentList.md)*
#### Added *[`EnchantmentSlot`](EnchantmentSlot.md)*
#### Added *[`EnchantmentType`](EnchantmentType.md)*
#### Added *[`EnchantmentTypes`](EnchantmentTypes.md)*
#### Changed *[`Entity`](Entity.md)*
- Added property *[`fallDistance`](Entity.md#falldistance)*
- Added property *[`isClimbing`](Entity.md#isclimbing)*
- Added property *[`isFalling`](Entity.md#isfalling)*
- Added property *[`isInWater`](Entity.md#isinwater)*
- Added property *[`isOnGround`](Entity.md#isonground)*
- Added property *[`isSleeping`](Entity.md#issleeping)*
- Added property *[`isSneaking`](Entity.md#issneaking)*
- Added property *[`isSprinting`](Entity.md#issprinting)*
- Added property *[`isSwimming`](Entity.md#isswimming)*
- Added property *[`lifetimeState`](Entity.md#lifetimestate)*
- Changed type for *[`scoreboardIdentity`](Entity.md#scoreboardidentity)* from [*ScoreboardIdentity*](ScoreboardIdentity.md) to [*ScoreboardIdentity*](ScoreboardIdentity.md) (throws exceptions)
- Added property *[`target`](Entity.md#target)*
- Added function *[`extinguishFire`](Entity.md#extinguishfire)*
- Added function *[`getDynamicProperty`](Entity.md#getdynamicproperty)*
- Added function *[`getProperty`](Entity.md#getproperty)*
- Added function *[`getRotation`](Entity.md#getrotation)*
- Added function *[`playAnimation`](Entity.md#playanimation)*
- Added function *[`remove`](Entity.md#remove)*
- Added function *[`removeDynamicProperty`](Entity.md#removedynamicproperty)*
- Added function *[`resetProperty`](Entity.md#resetproperty)*
- Added function *[`setDynamicProperty`](Entity.md#setdynamicproperty)*
- Added function *[`setOnFire`](Entity.md#setonfire)*
- Added function *[`setProperty`](Entity.md#setproperty)*
- Added function *[`setRotation`](Entity.md#setrotation)*
#### Added *[`EntityAddRiderComponent`](EntityAddRiderComponent.md)*
#### Added *[`EntityAgeableComponent`](EntityAgeableComponent.md)*
#### Added *[`EntityBreathableComponent`](EntityBreathableComponent.md)*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Added property *[`entity`](EntityComponent.md#entity)*
#### Added *[`EntityDefinitionFeedItem`](EntityDefinitionFeedItem.md)*
#### Changed *[`EntityEquippableComponent`](EntityEquippableComponent.md)*
- Added function *[`getEquipmentSlot`](EntityEquippableComponent.md#getequipmentslot)*
#### Changed *[`EntityHealableComponent`](EntityHealableComponent.md)*
- Added property *[`filters`](EntityHealableComponent.md#filters)*
#### Added *[`EntityIterator`](EntityIterator.md)*
#### Added *[`EntityLavaMovementComponent`](EntityLavaMovementComponent.md)*
#### Added *[`EntityLeashableComponent`](EntityLeashableComponent.md)*
#### Added *[`EntityMountTamingComponent`](EntityMountTamingComponent.md)*
#### Added *[`EntityMovementComponent`](EntityMovementComponent.md)*
#### Added *[`EntityMovementGlideComponent`](EntityMovementGlideComponent.md)*
#### Added *[`EntityMovementSwayComponent`](EntityMovementSwayComponent.md)*
#### Added *[`EntityNavigationClimbComponent`](EntityNavigationClimbComponent.md)*
#### Added *[`EntityNavigationComponent`](EntityNavigationComponent.md)*
#### Added *[`EntityNavigationFloatComponent`](EntityNavigationFloatComponent.md)*
#### Added *[`EntityNavigationFlyComponent`](EntityNavigationFlyComponent.md)*
#### Added *[`EntityNavigationGenericComponent`](EntityNavigationGenericComponent.md)*
#### Added *[`EntityNavigationHoverComponent`](EntityNavigationHoverComponent.md)*
#### Added *[`EntityNavigationWalkComponent`](EntityNavigationWalkComponent.md)*
#### Added *[`EntityOnFireComponent`](EntityOnFireComponent.md)*
#### Added *[`EntityRemoveAfterEvent`](EntityRemoveAfterEvent.md)*
#### Added *[`EntityRemoveAfterEventSignal`](EntityRemoveAfterEventSignal.md)*
#### Added *[`EntityRemoveBeforeEvent`](EntityRemoveBeforeEvent.md)*
#### Added *[`EntityRemoveBeforeEventSignal`](EntityRemoveBeforeEventSignal.md)*
#### Added *[`EntityRideableComponent`](EntityRideableComponent.md)*
#### Added *[`EntityRidingComponent`](EntityRidingComponent.md)*
#### Added *[`EntitySpawnAfterEvent`](EntitySpawnAfterEvent.md)*
#### Added *[`EntitySpawnAfterEventSignal`](EntitySpawnAfterEventSignal.md)*
#### Added *[`EntityStrengthComponent`](EntityStrengthComponent.md)*
#### Added *[`EntityTameableComponent`](EntityTameableComponent.md)*
#### Added *[`EntityType`](EntityType.md)*
#### Added *[`EntityTypeIterator`](EntityTypeIterator.md)*
#### Added *[`EntityTypes`](EntityTypes.md)*
#### Added *[`EntityUnderwaterMovementComponent`](EntityUnderwaterMovementComponent.md)*
#### Added *[`ExplosionAfterEvent`](ExplosionAfterEvent.md)*
#### Added *[`ExplosionAfterEventSignal`](ExplosionAfterEventSignal.md)*
#### Added *[`ExplosionBeforeEvent`](ExplosionBeforeEvent.md)*
#### Added *[`ExplosionBeforeEventSignal`](ExplosionBeforeEventSignal.md)*
#### Added *[`FilterGroup`](FilterGroup.md)*
#### Added *[`FluidContainer`](FluidContainer.md)*
#### Added *[`ItemCooldownComponent`](ItemCooldownComponent.md)*
#### Added *[`ItemDefinitionAfterEventSignal`](ItemDefinitionAfterEventSignal.md)*
#### Added *[`ItemDefinitionBeforeEventSignal`](ItemDefinitionBeforeEventSignal.md)*
#### Added *[`ItemDefinitionTriggeredAfterEvent`](ItemDefinitionTriggeredAfterEvent.md)*
#### Added *[`ItemDefinitionTriggeredBeforeEvent`](ItemDefinitionTriggeredBeforeEvent.md)*
#### Added *[`ItemDurabilityComponent`](ItemDurabilityComponent.md)*
#### Added *[`ItemEnchantsComponent`](ItemEnchantsComponent.md)*
#### Added *[`ItemFoodComponent`](ItemFoodComponent.md)*
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
- Added function *[`triggerEvent`](ItemStack.md#triggerevent)*
#### Added *[`ItemTypes`](ItemTypes.md)*
#### Added *[`MessageReceiveAfterEvent`](MessageReceiveAfterEvent.md)*
#### Added *[`NavigationResult`](NavigationResult.md)*
#### Added *[`PistonActivateAfterEvent`](PistonActivateAfterEvent.md)*
#### Added *[`PistonActivateAfterEventSignal`](PistonActivateAfterEventSignal.md)*
#### Added *[`PistonActivateBeforeEvent`](PistonActivateBeforeEvent.md)*
#### Added *[`PistonActivateBeforeEventSignal`](PistonActivateBeforeEventSignal.md)*
#### Changed *[`Player`](Player.md)*
- Added property *[`camera`](Player.md#camera)*
- Added property *[`isEmoting`](Player.md#isemoting)*
- Added property *[`isFlying`](Player.md#isflying)*
- Added property *[`isGliding`](Player.md#isgliding)*
- Added property *[`isJumping`](Player.md#isjumping)*
- Added property *[`level`](Player.md#level)*
- Added property *[`selectedSlot`](Player.md#selectedslot)*
- Added property *[`totalXpNeededForNextLevel`](Player.md#totalxpneededfornextlevel)*
- Added property *[`xpEarnedAtCurrentLevel`](Player.md#xpearnedatcurrentlevel)*
- Added function *[`addExperience`](Player.md#addexperience)*
- Added function *[`addLevels`](Player.md#addlevels)*
- Added function *[`getItemCooldown`](Player.md#getitemcooldown)*
- Added function *[`getTotalXp`](Player.md#gettotalxp)*
- Added function *[`isOp`](Player.md#isop)*
- Changed function *[`playSound`](Player.md#playsound)*
  - Added argument `soundID`
  - Removed argument `soundId`
- Added function *[`postClientMessage`](Player.md#postclientmessage)*
- Added function *[`resetLevel`](Player.md#resetlevel)*
- Added function *[`setOp`](Player.md#setop)*
- Added function *[`startItemCooldown`](Player.md#startitemcooldown)*
#### Added *[`PlayerIterator`](PlayerIterator.md)*
#### Added *[`PropertyRegistry`](PropertyRegistry.md)*
#### Added *[`Seat`](Seat.md)*
#### Added *[`ServerMessageAfterEventSignal`](ServerMessageAfterEventSignal.md)*
#### Changed *[`System`](System.md)*
- Added property *[`beforeEvents`](System.md#beforeevents)*
#### Added *[`SystemBeforeEvents`](SystemBeforeEvents.md)*
#### Added *[`Trigger`](Trigger.md)*
#### Added *[`Vector`](Vector.md)*
#### Added *[`WatchdogTerminateBeforeEvent`](WatchdogTerminateBeforeEvent.md)*
#### Added *[`WatchdogTerminateBeforeEventSignal`](WatchdogTerminateBeforeEventSignal.md)*
#### Added *[`WeatherChangeAfterEvent`](WeatherChangeAfterEvent.md)*
#### Added *[`WeatherChangeAfterEventSignal`](WeatherChangeAfterEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added function *[`broadcastClientMessage`](World.md#broadcastclientmessage)*
- Added function *[`getDynamicProperty`](World.md#getdynamicproperty)*
- Added function *[`getEntity`](World.md#getentity)*
- Added function *[`getMoonPhase`](World.md#getmoonphase)*
- Changed function *[`playMusic`](World.md#playmusic)*
  - Added argument `trackID`
  - Removed argument `trackId`
- Changed function *[`playSound`](World.md#playsound)*
  - Added argument `soundID`
  - Removed argument `soundId`
- Changed function *[`queueMusic`](World.md#queuemusic)*
  - Added argument `trackID`
  - Removed argument `trackId`
- Added function *[`removeDynamicProperty`](World.md#removedynamicproperty)*
- Added function *[`setDynamicProperty`](World.md#setdynamicproperty)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`blockBreak`](WorldAfterEvents.md#blockbreak)*
- Added property *[`blockExplode`](WorldAfterEvents.md#blockexplode)*
- Added property *[`blockPlace`](WorldAfterEvents.md#blockplace)*
- Added property *[`chatSend`](WorldAfterEvents.md#chatsend)*
- Added property *[`dataDrivenEntityTriggerEvent`](WorldAfterEvents.md#datadrivenentitytriggerevent)*
- Added property *[`effectAdd`](WorldAfterEvents.md#effectadd)*
- Added property *[`entityRemove`](WorldAfterEvents.md#entityremove)*
- Added property *[`entitySpawn`](WorldAfterEvents.md#entityspawn)*
- Added property *[`explosion`](WorldAfterEvents.md#explosion)*
- Added property *[`itemDefinitionEvent`](WorldAfterEvents.md#itemdefinitionevent)*
- Added property *[`messageReceive`](WorldAfterEvents.md#messagereceive)*
- Added property *[`pistonActivate`](WorldAfterEvents.md#pistonactivate)*
- Added property *[`weatherChange`](WorldAfterEvents.md#weatherchange)*
- Added property *[`worldInitialize`](WorldAfterEvents.md#worldinitialize)*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Added property *[`chatSend`](WorldBeforeEvents.md#chatsend)*
- Added property *[`dataDrivenEntityTriggerEvent`](WorldBeforeEvents.md#datadrivenentitytriggerevent)*
- Added property *[`entityRemove`](WorldBeforeEvents.md#entityremove)*
- Added property *[`explosion`](WorldBeforeEvents.md#explosion)*
- Added property *[`itemDefinitionEvent`](WorldBeforeEvents.md#itemdefinitionevent)*
- Added property *[`pistonActivate`](WorldBeforeEvents.md#pistonactivate)*
#### Added *[`WorldInitializeAfterEvent`](WorldInitializeAfterEvent.md)*
#### Added *[`WorldInitializeAfterEventSignal`](WorldInitializeAfterEventSignal.md)*
#### Added enum [`BlockVolumeIntersection`](BlockVolumeIntersection.md)
#### Added enum [`CompoundBlockVolumeAction`](CompoundBlockVolumeAction.md)
#### Added enum [`CompoundBlockVolumePositionRelativity`](CompoundBlockVolumePositionRelativity.md)
#### Added enum [`DyeColor`](DyeColor.md)
#### Added enum [`EasingType`](EasingType.md)
#### Added enum [`EntityLifetimeState`](EntityLifetimeState.md)
#### Added enum [`FluidType`](FluidType.md)
#### Added enum [`MoonPhase`](MoonPhase.md)
#### Added enum [`SignSide`](SignSide.md)
#### Added enum [`WatchdogTerminateReason`](WatchdogTerminateReason.md)
#### Added enum [`WeatherType`](WeatherType.md)
#### Added constant `MoonPhaseCount`
#### Added constant `TicksPerDay`
#### Added constant `TicksPerSecond`
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
- Removed property *isWaterlogged*
- Changed type for *[`permutation`](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Removed property *type*
- Removed property *typeId*
- Removed function *canPlace*
- Changed function *[`getComponent`](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to [*BlockComponent*](BlockComponent.md) (throws exceptions)
  - Added argument `componentId`
  - Removed argument `componentName`
- Removed function *getItemStack*
- Removed function *getRedstonePower*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *isAir*
- Removed function *isLiquid*
- Removed function *isSolid*
- Changed function *[`setPermutation`](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *setType*
- Removed function *trySetPermutation*
#### Removed *BlockAreaSize*
#### Removed *BlockBreakAfterEvent*
#### Removed *BlockBreakAfterEventSignal*
#### Removed *BlockExplodeAfterEvent*
#### Removed *BlockExplodeAfterEventSignal*
#### Changed *[`BlockInventoryComponent`](BlockInventoryComponent.md)*
- Changed type for *[`container`](BlockInventoryComponent.md#container)* from [*Container*](Container.md) (throws exceptions) to [*Container*](Container.md) (throws exceptions)
#### Removed *BlockLavaContainerComponent*
#### Removed *BlockLiquidContainerComponent*
#### Removed *BlockLocationIterator*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
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
#### Changed *[`Component`](Component.md)*
- Added function *[`isValid`](Component.md#isvalid)*
#### Removed *CompoundBlockVolume*
#### Changed *[`Container`](Container.md)*
- Changed function *[`addItem`](Container.md#additem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
- Removed function *getSlot*
- Changed function *[`transferItem`](Container.md#transferitem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
#### Removed *ContainerSlot*
#### Removed *DataDrivenEntityTriggerAfterEvent*
#### Removed *DataDrivenEntityTriggerAfterEventSignal*
#### Removed *DataDrivenEntityTriggerBeforeEvent*
#### Removed *DataDrivenEntityTriggerBeforeEventSignal*
#### Removed *DefinitionModifier*
#### Changed *[`Dimension`](Dimension.md)*
- Changed type for *[`id`](Dimension.md#id)* from *string* (throws exceptions) to *string*
- Removed function *createExplosion*
- Removed function *fillBlocks*
- Changed function *[`getBlock`](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Changed function *[`getBlockFromRay`](Dimension.md#getblockfromray)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*BlockRaycastHit*](BlockRaycastHit.md)
- Changed function *[`getEntitiesFromRay`](Dimension.md#getentitiesfromray)*
  - Changed return type from [*Entity*](Entity.md)[] (throws exceptions) to [*EntityRaycastHit*](EntityRaycastHit.md)[]
- Changed function *[`runCommand`](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setWeather*
- Changed function *[`spawnEntity`](Dimension.md#spawnentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Changed function *[`spawnItem`](Dimension.md#spawnitem)*
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
#### Changed *[`Entity`](Entity.md)*
- Removed property *fallDistance*
- Changed type for *[`id`](Entity.md#id)* from *string* (throws exceptions) to *string*
- Removed property *isClimbing*
- Removed property *isFalling*
- Removed property *isInWater*
- Removed property *isOnGround*
- Removed property *isSneaking*
- Removed property *isSprinting*
- Removed property *isSwimming*
- Removed property *lifetimeState*
- Changed type for *[`scoreboardIdentity`](Entity.md#scoreboardidentity)* from [*ScoreboardIdentity*](ScoreboardIdentity.md) (throws exceptions) to [*ScoreboardIdentity*](ScoreboardIdentity.md)
- Removed property *target*
- Changed type for *[`typeId`](Entity.md#typeid)* from *string* (throws exceptions) to *string*
- Removed function *extinguishFire*
- Changed function *[`getBlockFromViewDirection`](Entity.md#getblockfromviewdirection)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*BlockRaycastHit*](BlockRaycastHit.md) (throws exceptions)
- Removed function *getDynamicProperty*
- Changed function *[`getEntitiesFromViewDirection`](Entity.md#getentitiesfromviewdirection)*
  - Changed return type from [*Entity*](Entity.md)[] (throws exceptions) to [*EntityRaycastHit*](EntityRaycastHit.md)[] (throws exceptions)
- Removed function *getRotation*
- Added function *[`isValid`](Entity.md#isvalid)*
- Removed function *playAnimation*
- Removed function *removeDynamicProperty*
- Changed function *[`runCommand`](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setDynamicProperty*
- Removed function *setOnFire*
- Removed function *setRotation*
- Removed function *triggerEvent*
#### Removed *EntityAddRiderComponent*
#### Removed *EntityAgeableComponent*
#### Removed *EntityBreathableComponent*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Removed property *entity*
- Removed function *isValid*
#### Removed *EntityDefinitionFeedItem*
#### Changed *[`EntityDieAfterEventSignal`](EntityDieAfterEventSignal.md)*
- Removed base class *IEntityDieAfterEventSignal*
- Added function *[`subscribe`](EntityDieAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](EntityDieAfterEventSignal.md#unsubscribe)*
#### Removed *EntityEquipmentInventoryComponent*
#### Changed *[`EntityHealableComponent`](EntityHealableComponent.md)*
- Removed property *filters*
#### Changed *[`EntityHealthChangedAfterEventSignal`](EntityHealthChangedAfterEventSignal.md)*
- Removed base class *IEntityHealthChangedAfterEventSignal*
- Added function *[`subscribe`](EntityHealthChangedAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](EntityHealthChangedAfterEventSignal.md#unsubscribe)*
#### Removed *EntityHitAfterEvent*
#### Removed *EntityHitAfterEventSignal*
#### Added *[`EntityHitBlockAfterEvent`](EntityHitBlockAfterEvent.md)*
#### Added *[`EntityHitBlockAfterEventSignal`](EntityHitBlockAfterEventSignal.md)*
#### Added *[`EntityHitEntityAfterEvent`](EntityHitEntityAfterEvent.md)*
#### Added *[`EntityHitEntityAfterEventSignal`](EntityHitEntityAfterEventSignal.md)*
#### Changed *[`EntityHurtAfterEventSignal`](EntityHurtAfterEventSignal.md)*
- Removed base class *IEntityHurtAfterEventSignal*
- Added function *[`subscribe`](EntityHurtAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](EntityHurtAfterEventSignal.md#unsubscribe)*
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
#### Changed *[`ItemCompleteUseAfterEvent`](ItemCompleteUseAfterEvent.md)*
- Changed type for *[`source`](ItemCompleteUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[`ItemCompleteUseAfterEventSignal`](ItemCompleteUseAfterEventSignal.md)*
- Removed base class *IItemCompleteUseAfterEventSignal*
- Added function *[`subscribe`](ItemCompleteUseAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemCompleteUseAfterEventSignal.md#unsubscribe)*
#### Changed *[`ItemComponent`](ItemComponent.md)*
- Removed function *isValid*
#### Removed *ItemCooldownComponent*
#### Removed *ItemDefinitionAfterEventSignal*
#### Removed *ItemDefinitionBeforeEventSignal*
#### Removed *ItemDefinitionTriggeredAfterEvent*
#### Removed *ItemDefinitionTriggeredBeforeEvent*
#### Removed *ItemDurabilityComponent*
#### Removed *ItemEnchantsComponent*
#### Removed *ItemFoodComponent*
#### Changed *[`ItemReleaseUseAfterEvent`](ItemReleaseUseAfterEvent.md)*
- Changed type for *[`source`](ItemReleaseUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[`ItemReleaseUseAfterEventSignal`](ItemReleaseUseAfterEventSignal.md)*
- Removed base class *IItemReleaseUseAfterEventSignal*
- Added function *[`subscribe`](ItemReleaseUseAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemReleaseUseAfterEventSignal.md#unsubscribe)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Changed read-only flag for *[`amount`](ItemStack.md#amount)* from `false` to `true`
- Changed read-only flag for *[`keepOnDeath`](ItemStack.md#keepondeath)* from `false` to `true`
- Changed read-only flag for *[`lockMode`](ItemStack.md#lockmode)* from `false` to `true`
- Changed read-only flag for *[`nameTag`](ItemStack.md#nametag)* from `false` to `true`
- Removed function *clone*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *setCanDestroy*
- Removed function *setCanPlaceOn*
- Changed function *[`setLore`](ItemStack.md#setlore)*
  - Changed return type from *void* to *void* (throws exceptions)
- Removed function *triggerEvent*
#### Changed *[`ItemStartUseAfterEvent`](ItemStartUseAfterEvent.md)*
- Changed type for *[`source`](ItemStartUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[`ItemStartUseAfterEventSignal`](ItemStartUseAfterEventSignal.md)*
- Removed base class *IItemStartUseAfterEventSignal*
- Added function *[`subscribe`](ItemStartUseAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemStartUseAfterEventSignal.md#unsubscribe)*
#### Changed *[`ItemStartUseOnAfterEvent`](ItemStartUseOnAfterEvent.md)*
- Changed type for *[`source`](ItemStartUseOnAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[`ItemStartUseOnAfterEventSignal`](ItemStartUseOnAfterEventSignal.md)*
- Removed base class *IItemStartUseOnAfterEventSignal*
- Added function *[`subscribe`](ItemStartUseOnAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemStartUseOnAfterEventSignal.md#unsubscribe)*
#### Changed *[`ItemStopUseAfterEvent`](ItemStopUseAfterEvent.md)*
- Changed type for *[`source`](ItemStopUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[`ItemStopUseAfterEventSignal`](ItemStopUseAfterEventSignal.md)*
- Removed base class *IItemStopUseAfterEventSignal*
- Added function *[`subscribe`](ItemStopUseAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemStopUseAfterEventSignal.md#unsubscribe)*
#### Changed *[`ItemStopUseOnAfterEvent`](ItemStopUseOnAfterEvent.md)*
- Changed type for *[`source`](ItemStopUseOnAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[`ItemStopUseOnAfterEventSignal`](ItemStopUseOnAfterEventSignal.md)*
- Removed base class *IItemStopUseOnAfterEventSignal*
- Added function *[`subscribe`](ItemStopUseOnAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemStopUseOnAfterEventSignal.md#unsubscribe)*
#### Removed *ItemTypeIterator*
#### Removed *ItemTypes*
#### Changed *[`ItemUseAfterEvent`](ItemUseAfterEvent.md)*
- Changed type for *[`source`](ItemUseAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[`ItemUseAfterEventSignal`](ItemUseAfterEventSignal.md)*
- Removed base class *IItemUseAfterEventSignal*
- Added function *[`subscribe`](ItemUseAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemUseAfterEventSignal.md#unsubscribe)*
#### Changed *[`ItemUseBeforeEventSignal`](ItemUseBeforeEventSignal.md)*
- Removed base class *IItemUseBeforeEventSignal*
- Added function *[`subscribe`](ItemUseBeforeEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemUseBeforeEventSignal.md#unsubscribe)*
#### Changed *[`ItemUseOnAfterEvent`](ItemUseOnAfterEvent.md)*
- Changed type for *[`source`](ItemUseOnAfterEvent.md#source)* from [*Entity*](Entity.md) to [*Player*](Player.md)
#### Changed *[`ItemUseOnAfterEventSignal`](ItemUseOnAfterEventSignal.md)*
- Removed base class *IItemUseOnAfterEventSignal*
- Added function *[`subscribe`](ItemUseOnAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemUseOnAfterEventSignal.md#unsubscribe)*
#### Changed *[`ItemUseOnBeforeEventSignal`](ItemUseOnBeforeEventSignal.md)*
- Removed base class *IItemUseOnBeforeEventSignal*
- Added function *[`subscribe`](ItemUseOnBeforeEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ItemUseOnBeforeEventSignal.md#unsubscribe)*
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
#### Changed *[`Player`](Player.md)*
- Removed property *isFlying*
- Removed property *isGliding*
- Removed property *isJumping*
- Removed property *level*
- Changed type for *[`onScreenDisplay`](Player.md#onscreendisplay)* from [*ScreenDisplay*](ScreenDisplay.md) to [*ScreenDisplay*](ScreenDisplay.md) (throws exceptions)
- Removed property *selectedSlot*
- Removed property *totalXpNeededForNextLevel*
- Removed property *xpEarnedAtCurrentLevel*
- Removed function *addExperience*
- Removed function *addLevels*
- Removed function *getItemCooldown*
- Removed function *getTotalXp*
- Removed function *isOp*
- Changed function *[`playSound`](Player.md#playsound)*
  - Added argument `soundId`
  - Removed argument `soundID`
- Removed function *postClientMessage*
- Removed function *resetLevel*
- Removed function *setOp*
- Changed function *[`setSpawnPoint`](Player.md#setspawnpoint)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *startItemCooldown*
#### Removed *PlayerIterator*
#### Changed *[`PressurePlatePopAfterEventSignal`](PressurePlatePopAfterEventSignal.md)*
- Removed base class *IPressurePlatePopAfterEventSignal*
- Added function *[`subscribe`](PressurePlatePopAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](PressurePlatePopAfterEventSignal.md#unsubscribe)*
#### Changed *[`PressurePlatePushAfterEventSignal`](PressurePlatePushAfterEventSignal.md)*
- Removed base class *IPressurePlatePushAfterEventSignal*
- Added function *[`subscribe`](PressurePlatePushAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](PressurePlatePushAfterEventSignal.md#unsubscribe)*
#### Removed *ProjectileHitAfterEvent*
#### Removed *ProjectileHitAfterEventSignal*
#### Removed *PropertyRegistry*
#### Changed *[`Scoreboard`](Scoreboard.md)*
- Changed function *[`clearObjectiveAtDisplaySlot`](Scoreboard.md#clearobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md)
  - Changed argument `displaySlotId` type from *string* to [*DisplaySlotId*](DisplaySlotId.md)
- Changed function *[`getObjective`](Scoreboard.md#getobjective)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md)
- Changed function *[`getObjectiveAtDisplaySlot`](Scoreboard.md#getobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md) (throws exceptions) to [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md)
  - Changed argument `displaySlotId` type from *string* to [*DisplaySlotId*](DisplaySlotId.md)
- Changed function *[`getObjectives`](Scoreboard.md#getobjectives)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md)[] (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md)[]
- Changed function *[`getParticipants`](Scoreboard.md#getparticipants)*
  - Changed return type from [*ScoreboardIdentity*](ScoreboardIdentity.md)[] (throws exceptions) to [*ScoreboardIdentity*](ScoreboardIdentity.md)[]
- Changed function *[`setObjectiveAtDisplaySlot`](Scoreboard.md#setobjectiveatdisplayslot)*
  - Changed return type from [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions) to [*ScoreboardObjective*](ScoreboardObjective.md) (throws exceptions)
  - Changed argument `displaySlotId` type from *string* to [*DisplaySlotId*](DisplaySlotId.md)
#### Changed *[`ScoreboardIdentity`](ScoreboardIdentity.md)*
- Changed function *[`getEntity`](ScoreboardIdentity.md#getentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
#### Changed *[`ScoreboardObjective`](ScoreboardObjective.md)*
- Added function *[`addScore`](ScoreboardObjective.md#addscore)*
#### Changed *[`ScriptEventCommandMessageAfterEvent`](ScriptEventCommandMessageAfterEvent.md)*
- Changed type for *[`initiator`](ScriptEventCommandMessageAfterEvent.md#initiator)* from [*Entity*](Entity.md) to [*Entity*](Entity.md)
- Changed type for *[`sourceBlock`](ScriptEventCommandMessageAfterEvent.md#sourceblock)* from [*Block*](Block.md) to [*Block*](Block.md)
- Changed type for *[`sourceEntity`](ScriptEventCommandMessageAfterEvent.md#sourceentity)* from [*Entity*](Entity.md) to [*Entity*](Entity.md)
#### Changed *[`ScriptEventCommandMessageAfterEventSignal`](ScriptEventCommandMessageAfterEventSignal.md)*
- Removed base class *IScriptEventCommandMessageAfterEventSignal*
- Added function *[`subscribe`](ScriptEventCommandMessageAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](ScriptEventCommandMessageAfterEventSignal.md#unsubscribe)*
#### Removed *Seat*
#### Removed *ServerMessageAfterEventSignal*
#### Changed *[`System`](System.md)*
- Removed property *beforeEvents*
#### Removed *SystemBeforeEvents*
#### Changed *[`TargetBlockHitAfterEventSignal`](TargetBlockHitAfterEventSignal.md)*
- Removed base class *ITargetBlockHitAfterEventSignal*
- Added function *[`subscribe`](TargetBlockHitAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](TargetBlockHitAfterEventSignal.md#unsubscribe)*
#### Removed *Trigger*
#### Changed *[`TripWireTripAfterEventSignal`](TripWireTripAfterEventSignal.md)*
- Removed base class *ITripWireTripAfterEventSignal*
- Added function *[`subscribe`](TripWireTripAfterEventSignal.md#subscribe)*
- Added function *[`unsubscribe`](TripWireTripAfterEventSignal.md#unsubscribe)*
#### Removed *Vector*
#### Removed *WatchdogTerminateBeforeEvent*
#### Removed *WatchdogTerminateBeforeEventSignal*
#### Removed *WeatherChangeAfterEvent*
#### Removed *WeatherChangeAfterEventSignal*
#### Changed *[`World`](World.md)*
- Removed function *broadcastClientMessage*
- Changed function *[`getAbsoluteTime`](World.md#getabsolutetime)*
  - Changed return type from *number* to *number*
- Added function *[`getDay`](World.md#getday)*
- Removed function *getDynamicProperty*
- Removed function *getEntity*
- Removed function *getTime*
- Added function *[`getTimeOfDay`](World.md#gettimeofday)*
- Changed function *[`playMusic`](World.md#playmusic)*
  - Added argument `trackId`
  - Removed argument `trackID`
- Changed function *[`playSound`](World.md#playsound)*
  - Added argument `soundId`
  - Removed argument `soundID`
- Changed function *[`queueMusic`](World.md#queuemusic)*
  - Added argument `trackId`
  - Removed argument `trackID`
- Removed function *removeDynamicProperty*
- Added function *[`setAbsoluteTime`](World.md#setabsolutetime)*
- Changed function *[`setDefaultSpawnLocation`](World.md#setdefaultspawnlocation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *setDynamicProperty*
- Removed function *setTime*
- Added function *[`setTimeOfDay`](World.md#settimeofday)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Removed property *blockBreak*
- Removed property *blockExplode*
- Removed property *blockPlace*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *effectAdd*
- Removed property *entityHit*
- Added property *[`entityHitBlock`](WorldAfterEvents.md#entityhitblock)*
- Added property *[`entityHitEntity`](WorldAfterEvents.md#entityhitentity)*
- Removed property *entityRemoved*
- Removed property *entitySpawn*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Added property *[`leverAction`](WorldAfterEvents.md#leveraction)*
- Removed property *leverActivate*
- Removed property *messageReceive*
- Removed property *pistonActivate*
- Removed property *projectileHit*
- Removed property *weatherChange*
- Removed property *worldInitialize*
#### Changed *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
- Removed property *chatSend*
- Removed property *dataDrivenEntityTriggerEvent*
- Removed property *explosion*
- Removed property *itemDefinitionEvent*
- Removed property *pistonActivate*
#### Removed *WorldInitializeAfterEvent*
#### Removed *WorldInitializeAfterEventSignal*
#### Removed enum `BlockVolumeIntersection`
#### Removed enum `CompoundBlockVolumeAction`
#### Changed enum [`Direction`](Direction.md)
- Removed value `down`
- Added value `Down`
- Removed value `east`
- Added value `East`
- Removed value `north`
- Added value `North`
- Removed value `south`
- Added value `South`
- Removed value `up`
- Added value `Up`
- Removed value `west`
- Added value `West`
#### Changed enum [`DisplaySlotId`](DisplaySlotId.md)
- Removed value `belowname`
- Added value `BelowName`
- Removed value `list`
- Added value `List`
- Removed value `sidebar`
- Added value `Sidebar`
#### Removed enum `DyeColor`
#### Removed enum `EntityLifetimeState`
#### Removed enum `EquipmentSlot`
#### Removed enum `FluidType`
#### Changed enum [`ObjectiveSortOrder`](ObjectiveSortOrder.md)
- Removed value `ascending`
- Added value `Ascending`
- Removed value `descending`
- Added value `Descending`
#### Changed enum [`ScoreboardIdentityType`](ScoreboardIdentityType.md)
- Removed value `entity`
- Added value `Entity`
- Removed value `fakePlayer`
- Added value `FakePlayer`
- Removed value `player`
- Added value `Player`
#### Changed enum [`ScriptEventSource`](ScriptEventSource.md)
- Removed value `block`
- Added value `Block`
- Removed value `entity`
- Added value `Entity`
- Removed value `npcDialogue`
- Added value `NPCDialogue`
- Removed value `server`
- Added value `Server`
#### Removed enum `SignSide`
#### Removed enum `WatchdogTerminateReason`
#### Removed enum `WeatherType`
#### Removed constant `TicksPerDay`
#### Removed constant `TicksPerSecond`
## 1.4.0-beta
#### Changed *[`Block`](Block.md)*
- Added property *[`isWaterlogged`](Block.md#iswaterlogged)*
- Changed type for *[`permutation`](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Added property *[`type`](Block.md#type)*
- Added property *[`typeId`](Block.md#typeid)*
- Added function *[`canPlace`](Block.md#canplace)*
- Changed function *[`getComponent`](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to [*BlockComponent*](BlockComponent.md) (throws exceptions)
  - Added argument `componentName`
  - Removed argument `componentId`
- Added function *[`getItemStack`](Block.md#getitemstack)*
- Added function *[`getRedstonePower`](Block.md#getredstonepower)*
- Added function *[`getTags`](Block.md#gettags)*
- Added function *[`hasTag`](Block.md#hastag)*
- Added function *[`isAir`](Block.md#isair)*
- Added function *[`isLiquid`](Block.md#isliquid)*
- Added function *[`isSolid`](Block.md#issolid)*
- Added function *[`isValid`](Block.md#isvalid)*
- Changed function *[`setPermutation`](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Added function *[`setType`](Block.md#settype)*
- Added function *[`trySetPermutation`](Block.md#trysetpermutation)*
#### Added *[`BlockAreaSize`](BlockAreaSize.md)*
#### Added *[`BlockBreakAfterEvent`](BlockBreakAfterEvent.md)*
#### Added *[`BlockBreakAfterEventSignal`](BlockBreakAfterEventSignal.md)*
#### Added *[`BlockExplodeAfterEvent`](BlockExplodeAfterEvent.md)*
#### Added *[`BlockExplodeAfterEventSignal`](BlockExplodeAfterEventSignal.md)*
#### Changed *[`BlockInventoryComponent`](BlockInventoryComponent.md)*
- Changed type for *[`container`](BlockInventoryComponent.md#container)* from [*Container*](Container.md) (throws exceptions) to [*Container*](Container.md) (throws exceptions)
#### Added *[`BlockLavaContainerComponent`](BlockLavaContainerComponent.md)*
#### Added *[`BlockLiquidContainerComponent`](BlockLiquidContainerComponent.md)*
#### Added *[`BlockLocationIterator`](BlockLocationIterator.md)*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added property *[`type`](BlockPermutation.md#type)*
- Added function *[`clone`](BlockPermutation.md#clone)*
- Added function *[`getAllStates`](BlockPermutation.md#getallstates)*
- Added function *[`getItemStack`](BlockPermutation.md#getitemstack)*
- Added function *[`getState`](BlockPermutation.md#getstate)*
- Added function *[`getTags`](BlockPermutation.md#gettags)*
- Added function *[`hasTag`](BlockPermutation.md#hastag)*
- Added function *[`withState`](BlockPermutation.md#withstate)*
#### Added *[`BlockPistonComponent`](BlockPistonComponent.md)*
#### Added *[`BlockPlaceAfterEvent`](BlockPlaceAfterEvent.md)*
#### Added *[`BlockPlaceAfterEventSignal`](BlockPlaceAfterEventSignal.md)*
#### Added *[`BlockPotionContainerComponent`](BlockPotionContainerComponent.md)*
#### Added *[`BlockRecordPlayerComponent`](BlockRecordPlayerComponent.md)*
#### Added *[`BlockSignComponent`](BlockSignComponent.md)*
#### Added *[`BlockSnowContainerComponent`](BlockSnowContainerComponent.md)*
#### Added *[`BlockStates`](BlockStates.md)*
#### Added *[`BlockStateType`](BlockStateType.md)*
#### Added *[`BlockType`](BlockType.md)*
#### Added *[`BlockVolumeUtils`](BlockVolumeUtils.md)*
#### Added *[`BlockWaterContainerComponent`](BlockWaterContainerComponent.md)*
#### Added *[`BoundingBoxUtils`](BoundingBoxUtils.md)*
#### Added *[`ChatSendAfterEvent`](ChatSendAfterEvent.md)*
#### Added *[`ChatSendAfterEventSignal`](ChatSendAfterEventSignal.md)*
#### Added *[`ChatSendBeforeEvent`](ChatSendBeforeEvent.md)*
#### Added *[`ChatSendBeforeEventSignal`](ChatSendBeforeEventSignal.md)*
#### Added *[`CompoundBlockVolume`](CompoundBlockVolume.md)*
#### Changed *[`Container`](Container.md)*
- Changed function *[`addItem`](Container.md#additem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
- Added function *[`getSlot`](Container.md#getslot)*
- Added function *[`isValid`](Container.md#isvalid)*
- Changed function *[`transferItem`](Container.md#transferitem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
#### Added *[`ContainerSlot`](ContainerSlot.md)*
#### Added *[`DataDrivenEntityTriggerAfterEvent`](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[`DataDrivenEntityTriggerAfterEventSignal`](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEvent`](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEventSignal`](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[`DefinitionModifier`](DefinitionModifier.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Changed type for *[`id`](Dimension.md#id)* from *string* to *string* (throws exceptions)
- Added function *[`createExplosion`](Dimension.md#createexplosion)*
- Added function *[`fillBlocks`](Dimension.md#fillblocks)*
- Changed function *[`getBlock`](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Added function *[`getBlockFromRay`](Dimension.md#getblockfromray)*
- Added function *[`getEntitiesFromRay`](Dimension.md#getentitiesfromray)*
- Changed function *[`runCommand`](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[`setWeather`](Dimension.md#setweather)*
- Changed function *[`spawnEntity`](Dimension.md#spawnentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Changed function *[`spawnItem`](Dimension.md#spawnitem)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Added function *[`spawnParticle`](Dimension.md#spawnparticle)*
#### Added *[`DynamicPropertiesDefinition`](DynamicPropertiesDefinition.md)*
#### Added *[`EffectAddAfterEvent`](EffectAddAfterEvent.md)*
#### Added *[`EffectAddAfterEventSignal`](EffectAddAfterEventSignal.md)*
#### Added *[`EffectTypes`](EffectTypes.md)*
#### Added *[`Enchantment`](Enchantment.md)*
#### Added *[`EnchantmentList`](EnchantmentList.md)*
#### Added *[`EnchantmentSlot`](EnchantmentSlot.md)*
#### Added *[`EnchantmentType`](EnchantmentType.md)*
#### Added *[`EnchantmentTypes`](EnchantmentTypes.md)*
#### Changed *[`Entity`](Entity.md)*
- Added property *[`fallDistance`](Entity.md#falldistance)*
- Changed type for *[`id`](Entity.md#id)* from *string* to *string* (throws exceptions)
- Added property *[`isClimbing`](Entity.md#isclimbing)*
- Added property *[`isFalling`](Entity.md#isfalling)*
- Added property *[`isInWater`](Entity.md#isinwater)*
- Added property *[`isOnGround`](Entity.md#isonground)*
- Added property *[`isSneaking`](Entity.md#issneaking)*
- Added property *[`isSprinting`](Entity.md#issprinting)*
- Added property *[`isSwimming`](Entity.md#isswimming)*
- Added property *[`lifetimeState`](Entity.md#lifetimestate)*
- Added property *[`scoreboardIdentity`](Entity.md#scoreboardidentity)*
- Added property *[`target`](Entity.md#target)*
- Changed type for *[`typeId`](Entity.md#typeid)* from *string* to *string* (throws exceptions)
- Added function *[`extinguishFire`](Entity.md#extinguishfire)*
- Added function *[`getBlockFromViewDirection`](Entity.md#getblockfromviewdirection)*
- Added function *[`getDynamicProperty`](Entity.md#getdynamicproperty)*
- Added function *[`getEntitiesFromViewDirection`](Entity.md#getentitiesfromviewdirection)*
- Added function *[`getRotation`](Entity.md#getrotation)*
- Added function *[`playAnimation`](Entity.md#playanimation)*
- Added function *[`removeDynamicProperty`](Entity.md#removedynamicproperty)*
- Changed function *[`runCommand`](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[`setDynamicProperty`](Entity.md#setdynamicproperty)*
- Added function *[`setOnFire`](Entity.md#setonfire)*
- Added function *[`setRotation`](Entity.md#setrotation)*
- Added function *[`triggerEvent`](Entity.md#triggerevent)*
#### Added *[`EntityAddRiderComponent`](EntityAddRiderComponent.md)*
#### Added *[`EntityAgeableComponent`](EntityAgeableComponent.md)*
#### Added *[`EntityBreathableComponent`](EntityBreathableComponent.md)*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Added property *[`entity`](EntityComponent.md#entity)*
- Added function *[`isValid`](EntityComponent.md#isvalid)*
#### Added *[`EntityDefinitionFeedItem`](EntityDefinitionFeedItem.md)*
#### Added *[`EntityDieAfterEvent`](EntityDieAfterEvent.md)*
#### Added *[`EntityDieAfterEventSignal`](EntityDieAfterEventSignal.md)*
#### Added *[`EntityEquipmentInventoryComponent`](EntityEquipmentInventoryComponent.md)*
#### Changed *[`EntityHealableComponent`](EntityHealableComponent.md)*
- Added property *[`filters`](EntityHealableComponent.md#filters)*
#### Added *[`EntityHealthChangedAfterEvent`](EntityHealthChangedAfterEvent.md)*
#### Added *[`EntityHealthChangedAfterEventSignal`](EntityHealthChangedAfterEventSignal.md)*
#### Added *[`EntityHitAfterEvent`](EntityHitAfterEvent.md)*
#### Added *[`EntityHitAfterEventSignal`](EntityHitAfterEventSignal.md)*
#### Added *[`EntityHurtAfterEvent`](EntityHurtAfterEvent.md)*
#### Added *[`EntityHurtAfterEventSignal`](EntityHurtAfterEventSignal.md)*
#### Added *[`EntityIterator`](EntityIterator.md)*
#### Added *[`EntityLavaMovementComponent`](EntityLavaMovementComponent.md)*
#### Added *[`EntityLeashableComponent`](EntityLeashableComponent.md)*
#### Added *[`EntityMountTamingComponent`](EntityMountTamingComponent.md)*
#### Added *[`EntityMovementComponent`](EntityMovementComponent.md)*
#### Added *[`EntityMovementGlideComponent`](EntityMovementGlideComponent.md)*
#### Added *[`EntityMovementSwayComponent`](EntityMovementSwayComponent.md)*
#### Added *[`EntityNavigationClimbComponent`](EntityNavigationClimbComponent.md)*
#### Added *[`EntityNavigationComponent`](EntityNavigationComponent.md)*
#### Added *[`EntityNavigationFloatComponent`](EntityNavigationFloatComponent.md)*
#### Added *[`EntityNavigationFlyComponent`](EntityNavigationFlyComponent.md)*
#### Added *[`EntityNavigationGenericComponent`](EntityNavigationGenericComponent.md)*
#### Added *[`EntityNavigationHoverComponent`](EntityNavigationHoverComponent.md)*
#### Added *[`EntityNavigationWalkComponent`](EntityNavigationWalkComponent.md)*
#### Added *[`EntityOnFireComponent`](EntityOnFireComponent.md)*
#### Added *[`EntityRemovedAfterEvent`](EntityRemovedAfterEvent.md)*
#### Added *[`EntityRemovedAfterEventSignal`](EntityRemovedAfterEventSignal.md)*
#### Added *[`EntityRideableComponent`](EntityRideableComponent.md)*
#### Added *[`EntityRidingComponent`](EntityRidingComponent.md)*
#### Added *[`EntitySpawnAfterEvent`](EntitySpawnAfterEvent.md)*
#### Added *[`EntitySpawnAfterEventSignal`](EntitySpawnAfterEventSignal.md)*
#### Added *[`EntityStrengthComponent`](EntityStrengthComponent.md)*
#### Added *[`EntityTameableComponent`](EntityTameableComponent.md)*
#### Added *[`EntityType`](EntityType.md)*
#### Added *[`EntityTypeIterator`](EntityTypeIterator.md)*
#### Added *[`EntityTypes`](EntityTypes.md)*
#### Added *[`EntityUnderwaterMovementComponent`](EntityUnderwaterMovementComponent.md)*
#### Added *[`ExplosionAfterEvent`](ExplosionAfterEvent.md)*
#### Added *[`ExplosionAfterEventSignal`](ExplosionAfterEventSignal.md)*
#### Added *[`ExplosionBeforeEvent`](ExplosionBeforeEvent.md)*
#### Added *[`ExplosionBeforeEventSignal`](ExplosionBeforeEventSignal.md)*
#### Added *[`FilterGroup`](FilterGroup.md)*
#### Added *[`FluidContainer`](FluidContainer.md)*
#### Added *[`IBlockBreakAfterEventSignal`](IBlockBreakAfterEventSignal.md)*
#### Added *[`IBlockExplodeAfterEventSignal`](IBlockExplodeAfterEventSignal.md)*
#### Added *[`IBlockPlaceAfterEventSignal`](IBlockPlaceAfterEventSignal.md)*
#### Added *[`IChatSendAfterEventSignal`](IChatSendAfterEventSignal.md)*
#### Added *[`IChatSendBeforeEventSignal`](IChatSendBeforeEventSignal.md)*
#### Added *[`IDataDrivenEntityTriggerAfterEventSignal`](IDataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[`IDataDrivenEntityTriggerBeforeEventSignal`](IDataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[`IEffectAddAfterEventSignal`](IEffectAddAfterEventSignal.md)*
#### Added *[`IEntityDieAfterEventSignal`](IEntityDieAfterEventSignal.md)*
#### Added *[`IEntityHealthChangedAfterEventSignal`](IEntityHealthChangedAfterEventSignal.md)*
#### Added *[`IEntityHitAfterEventSignal`](IEntityHitAfterEventSignal.md)*
#### Added *[`IEntityHurtAfterEventSignal`](IEntityHurtAfterEventSignal.md)*
#### Added *[`IEntityRemovedAfterEventSignal`](IEntityRemovedAfterEventSignal.md)*
#### Added *[`IEntitySpawnAfterEventSignal`](IEntitySpawnAfterEventSignal.md)*
#### Added *[`IExplosionAfterEventSignal`](IExplosionAfterEventSignal.md)*
#### Added *[`IExplosionBeforeEventSignal`](IExplosionBeforeEventSignal.md)*
#### Added *[`IItemCompleteUseAfterEventSignal`](IItemCompleteUseAfterEventSignal.md)*
#### Added *[`IItemDefinitionAfterEventSignal`](IItemDefinitionAfterEventSignal.md)*
#### Added *[`IItemDefinitionBeforeEventSignal`](IItemDefinitionBeforeEventSignal.md)*
#### Added *[`IItemReleaseUseAfterEventSignal`](IItemReleaseUseAfterEventSignal.md)*
#### Added *[`IItemStartUseAfterEventSignal`](IItemStartUseAfterEventSignal.md)*
#### Added *[`IItemStartUseOnAfterEventSignal`](IItemStartUseOnAfterEventSignal.md)*
#### Added *[`IItemStopUseAfterEventSignal`](IItemStopUseAfterEventSignal.md)*
#### Added *[`IItemStopUseOnAfterEventSignal`](IItemStopUseOnAfterEventSignal.md)*
#### Added *[`IItemUseAfterEventSignal`](IItemUseAfterEventSignal.md)*
#### Added *[`IItemUseBeforeEventSignal`](IItemUseBeforeEventSignal.md)*
#### Added *[`IItemUseOnAfterEventSignal`](IItemUseOnAfterEventSignal.md)*
#### Added *[`IItemUseOnBeforeEventSignal`](IItemUseOnBeforeEventSignal.md)*
#### Added *[`IPistonActivateAfterEventSignal`](IPistonActivateAfterEventSignal.md)*
#### Added *[`IPistonActivateBeforeEventSignal`](IPistonActivateBeforeEventSignal.md)*
#### Added *[`IPressurePlatePopAfterEventSignal`](IPressurePlatePopAfterEventSignal.md)*
#### Added *[`IPressurePlatePushAfterEventSignal`](IPressurePlatePushAfterEventSignal.md)*
#### Added *[`IProjectileHitAfterEventSignal`](IProjectileHitAfterEventSignal.md)*
#### Added *[`IScriptEventCommandMessageAfterEventSignal`](IScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[`IServerMessageAfterEventSignal`](IServerMessageAfterEventSignal.md)*
#### Added *[`ITargetBlockHitAfterEventSignal`](ITargetBlockHitAfterEventSignal.md)*
#### Added *[`ItemCompleteUseAfterEvent`](ItemCompleteUseAfterEvent.md)*
#### Added *[`ItemCompleteUseAfterEventSignal`](ItemCompleteUseAfterEventSignal.md)*
#### Changed *[`ItemComponent`](ItemComponent.md)*
- Added function *[`isValid`](ItemComponent.md#isvalid)*
#### Added *[`ItemCooldownComponent`](ItemCooldownComponent.md)*
#### Added *[`ItemDefinitionAfterEventSignal`](ItemDefinitionAfterEventSignal.md)*
#### Added *[`ItemDefinitionBeforeEventSignal`](ItemDefinitionBeforeEventSignal.md)*
#### Added *[`ItemDefinitionTriggeredAfterEvent`](ItemDefinitionTriggeredAfterEvent.md)*
#### Added *[`ItemDefinitionTriggeredBeforeEvent`](ItemDefinitionTriggeredBeforeEvent.md)*
#### Added *[`ItemDurabilityComponent`](ItemDurabilityComponent.md)*
#### Added *[`ItemEnchantsComponent`](ItemEnchantsComponent.md)*
#### Added *[`ItemFoodComponent`](ItemFoodComponent.md)*
#### Added *[`ItemReleaseUseAfterEvent`](ItemReleaseUseAfterEvent.md)*
#### Added *[`ItemReleaseUseAfterEventSignal`](ItemReleaseUseAfterEventSignal.md)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Changed read-only flag for *[`amount`](ItemStack.md#amount)* from `true` to `false`
- Changed read-only flag for *[`keepOnDeath`](ItemStack.md#keepondeath)* from `true` to `false`
- Changed read-only flag for *[`lockMode`](ItemStack.md#lockmode)* from `true` to `false`
- Changed read-only flag for *[`nameTag`](ItemStack.md#nametag)* from `true` to `false`
- Added function *[`clone`](ItemStack.md#clone)*
- Added function *[`getLore`](ItemStack.md#getlore)*
- Added function *[`getTags`](ItemStack.md#gettags)*
- Added function *[`hasTag`](ItemStack.md#hastag)*
- Added function *[`setCanDestroy`](ItemStack.md#setcandestroy)*
- Added function *[`setCanPlaceOn`](ItemStack.md#setcanplaceon)*
- Added function *[`setLore`](ItemStack.md#setlore)*
- Added function *[`triggerEvent`](ItemStack.md#triggerevent)*
#### Added *[`ItemStartUseAfterEvent`](ItemStartUseAfterEvent.md)*
#### Added *[`ItemStartUseAfterEventSignal`](ItemStartUseAfterEventSignal.md)*
#### Added *[`ItemStartUseOnAfterEvent`](ItemStartUseOnAfterEvent.md)*
#### Added *[`ItemStartUseOnAfterEventSignal`](ItemStartUseOnAfterEventSignal.md)*
#### Added *[`ItemStopUseAfterEvent`](ItemStopUseAfterEvent.md)*
#### Added *[`ItemStopUseAfterEventSignal`](ItemStopUseAfterEventSignal.md)*
#### Added *[`ItemStopUseOnAfterEvent`](ItemStopUseOnAfterEvent.md)*
#### Added *[`ItemStopUseOnAfterEventSignal`](ItemStopUseOnAfterEventSignal.md)*
#### Added *[`ItemTypeIterator`](ItemTypeIterator.md)*
#### Added *[`ItemTypes`](ItemTypes.md)*
#### Added *[`ItemUseAfterEvent`](ItemUseAfterEvent.md)*
#### Added *[`ItemUseAfterEventSignal`](ItemUseAfterEventSignal.md)*
#### Added *[`ItemUseBeforeEvent`](ItemUseBeforeEvent.md)*
#### Added *[`ItemUseBeforeEventSignal`](ItemUseBeforeEventSignal.md)*
#### Added *[`ItemUseOnAfterEvent`](ItemUseOnAfterEvent.md)*
#### Added *[`ItemUseOnAfterEventSignal`](ItemUseOnAfterEventSignal.md)*
#### Added *[`ItemUseOnBeforeEvent`](ItemUseOnBeforeEvent.md)*
#### Added *[`ItemUseOnBeforeEventSignal`](ItemUseOnBeforeEventSignal.md)*
#### Added *[`ITripWireTripAfterEventSignal`](ITripWireTripAfterEventSignal.md)*
#### Added *[`IWatchdogTerminateBeforeEventSignal`](IWatchdogTerminateBeforeEventSignal.md)*
#### Added *[`IWeatherChangeAfterEventSignal`](IWeatherChangeAfterEventSignal.md)*
#### Added *[`IWorldInitializeAfterEventSignal`](IWorldInitializeAfterEventSignal.md)*
#### Added *[`MessageReceiveAfterEvent`](MessageReceiveAfterEvent.md)*
#### Added *[`MinecraftBlockTypes`](MinecraftBlockTypes.md)*
#### Added *[`MinecraftEntityTypes`](MinecraftEntityTypes.md)*
#### Added *[`MinecraftItemTypes`](MinecraftItemTypes.md)*
#### Added *[`MolangVariableMap`](MolangVariableMap.md)*
#### Added *[`NavigationResult`](NavigationResult.md)*
#### Added *[`PistonActivateAfterEvent`](PistonActivateAfterEvent.md)*
#### Added *[`PistonActivateAfterEventSignal`](PistonActivateAfterEventSignal.md)*
#### Added *[`PistonActivateBeforeEvent`](PistonActivateBeforeEvent.md)*
#### Added *[`PistonActivateBeforeEventSignal`](PistonActivateBeforeEventSignal.md)*
#### Changed *[`Player`](Player.md)*
- Added property *[`isFlying`](Player.md#isflying)*
- Added property *[`isGliding`](Player.md#isgliding)*
- Added property *[`isJumping`](Player.md#isjumping)*
- Added property *[`level`](Player.md#level)*
- Added property *[`onScreenDisplay`](Player.md#onscreendisplay)*
- Added property *[`selectedSlot`](Player.md#selectedslot)*
- Added property *[`totalXpNeededForNextLevel`](Player.md#totalxpneededfornextlevel)*
- Added property *[`xpEarnedAtCurrentLevel`](Player.md#xpearnedatcurrentlevel)*
- Added function *[`addExperience`](Player.md#addexperience)*
- Added function *[`addLevels`](Player.md#addlevels)*
- Added function *[`getItemCooldown`](Player.md#getitemcooldown)*
- Added function *[`getSpawnPoint`](Player.md#getspawnpoint)*
- Added function *[`getTotalXp`](Player.md#gettotalxp)*
- Added function *[`isOp`](Player.md#isop)*
- Changed function *[`playSound`](Player.md#playsound)*
  - Added argument `soundID`
  - Removed argument `soundId`
- Added function *[`postClientMessage`](Player.md#postclientmessage)*
- Added function *[`resetLevel`](Player.md#resetlevel)*
- Added function *[`setOp`](Player.md#setop)*
- Added function *[`setSpawnPoint`](Player.md#setspawnpoint)*
- Added function *[`startItemCooldown`](Player.md#startitemcooldown)*
#### Added *[`PlayerIterator`](PlayerIterator.md)*
#### Added *[`PressurePlatePopAfterEvent`](PressurePlatePopAfterEvent.md)*
#### Added *[`PressurePlatePopAfterEventSignal`](PressurePlatePopAfterEventSignal.md)*
#### Added *[`PressurePlatePushAfterEvent`](PressurePlatePushAfterEvent.md)*
#### Added *[`PressurePlatePushAfterEventSignal`](PressurePlatePushAfterEventSignal.md)*
#### Added *[`ProjectileHitAfterEvent`](ProjectileHitAfterEvent.md)*
#### Added *[`ProjectileHitAfterEventSignal`](ProjectileHitAfterEventSignal.md)*
#### Added *[`PropertyRegistry`](PropertyRegistry.md)*
#### Added *[`Scoreboard`](Scoreboard.md)*
#### Added *[`ScoreboardIdentity`](ScoreboardIdentity.md)*
#### Added *[`ScoreboardObjective`](ScoreboardObjective.md)*
#### Added *[`ScoreboardScoreInfo`](ScoreboardScoreInfo.md)*
#### Added *[`ScreenDisplay`](ScreenDisplay.md)*
#### Added *[`ScriptEventCommandMessageAfterEvent`](ScriptEventCommandMessageAfterEvent.md)*
#### Added *[`ScriptEventCommandMessageAfterEventSignal`](ScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[`Seat`](Seat.md)*
#### Added *[`ServerMessageAfterEventSignal`](ServerMessageAfterEventSignal.md)*
#### Changed *[`System`](System.md)*
- Added property *[`afterEvents`](System.md#afterevents)*
- Added property *[`beforeEvents`](System.md#beforeevents)*
#### Added *[`SystemAfterEvents`](SystemAfterEvents.md)*
#### Added *[`SystemBeforeEvents`](SystemBeforeEvents.md)*
#### Added *[`TargetBlockHitAfterEvent`](TargetBlockHitAfterEvent.md)*
#### Added *[`TargetBlockHitAfterEventSignal`](TargetBlockHitAfterEventSignal.md)*
#### Added *[`Trigger`](Trigger.md)*
#### Added *[`TripWireTripAfterEvent`](TripWireTripAfterEvent.md)*
#### Added *[`TripWireTripAfterEventSignal`](TripWireTripAfterEventSignal.md)*
#### Added *[`Vector`](Vector.md)*
#### Added *[`WatchdogTerminateBeforeEvent`](WatchdogTerminateBeforeEvent.md)*
#### Added *[`WatchdogTerminateBeforeEventSignal`](WatchdogTerminateBeforeEventSignal.md)*
#### Added *[`WeatherChangeAfterEvent`](WeatherChangeAfterEvent.md)*
#### Added *[`WeatherChangeAfterEventSignal`](WeatherChangeAfterEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added property *[`afterEvents`](World.md#afterevents)*
- Added property *[`beforeEvents`](World.md#beforeevents)*
- Added property *[`scoreboard`](World.md#scoreboard)*
- Added function *[`broadcastClientMessage`](World.md#broadcastclientmessage)*
- Added function *[`getAbsoluteTime`](World.md#getabsolutetime)*
- Added function *[`getDefaultSpawnLocation`](World.md#getdefaultspawnlocation)*
- Added function *[`getDynamicProperty`](World.md#getdynamicproperty)*
- Added function *[`getEntity`](World.md#getentity)*
- Added function *[`getTime`](World.md#gettime)*
- Changed function *[`playMusic`](World.md#playmusic)*
  - Added argument `trackID`
  - Removed argument `trackId`
- Changed function *[`playSound`](World.md#playsound)*
  - Added argument `soundID`
  - Removed argument `soundId`
- Changed function *[`queueMusic`](World.md#queuemusic)*
  - Added argument `trackID`
  - Removed argument `trackId`
- Added function *[`removeDynamicProperty`](World.md#removedynamicproperty)*
- Added function *[`setDefaultSpawnLocation`](World.md#setdefaultspawnlocation)*
- Added function *[`setDynamicProperty`](World.md#setdynamicproperty)*
- Added function *[`setTime`](World.md#settime)*
#### Changed *[`WorldAfterEvents`](WorldAfterEvents.md)*
- Added property *[`blockBreak`](WorldAfterEvents.md#blockbreak)*
- Added property *[`blockExplode`](WorldAfterEvents.md#blockexplode)*
- Added property *[`blockPlace`](WorldAfterEvents.md#blockplace)*
- Added property *[`chatSend`](WorldAfterEvents.md#chatsend)*
- Added property *[`dataDrivenEntityTriggerEvent`](WorldAfterEvents.md#datadrivenentitytriggerevent)*
- Added property *[`effectAdd`](WorldAfterEvents.md#effectadd)*
- Added property *[`entityDie`](WorldAfterEvents.md#entitydie)*
- Added property *[`entityHealthChanged`](WorldAfterEvents.md#entityhealthchanged)*
- Added property *[`entityHit`](WorldAfterEvents.md#entityhit)*
- Added property *[`entityHurt`](WorldAfterEvents.md#entityhurt)*
- Added property *[`entityRemoved`](WorldAfterEvents.md#entityremoved)*
- Added property *[`entitySpawn`](WorldAfterEvents.md#entityspawn)*
- Added property *[`explosion`](WorldAfterEvents.md#explosion)*
- Added property *[`itemCompleteUse`](WorldAfterEvents.md#itemcompleteuse)*
- Added property *[`itemDefinitionEvent`](WorldAfterEvents.md#itemdefinitionevent)*
- Added property *[`itemReleaseUse`](WorldAfterEvents.md#itemreleaseuse)*
- Added property *[`itemStartUse`](WorldAfterEvents.md#itemstartuse)*
- Added property *[`itemStartUseOn`](WorldAfterEvents.md#itemstartuseon)*
- Added property *[`itemStopUse`](WorldAfterEvents.md#itemstopuse)*
- Added property *[`itemStopUseOn`](WorldAfterEvents.md#itemstopuseon)*
- Added property *[`itemUse`](WorldAfterEvents.md#itemuse)*
- Added property *[`itemUseOn`](WorldAfterEvents.md#itemuseon)*
- Removed property *leverAction*
- Added property *[`leverActivate`](WorldAfterEvents.md#leveractivate)*
- Added property *[`messageReceive`](WorldAfterEvents.md#messagereceive)*
- Added property *[`pistonActivate`](WorldAfterEvents.md#pistonactivate)*
- Added property *[`pressurePlatePop`](WorldAfterEvents.md#pressureplatepop)*
- Added property *[`pressurePlatePush`](WorldAfterEvents.md#pressureplatepush)*
- Added property *[`projectileHit`](WorldAfterEvents.md#projectilehit)*
- Added property *[`targetBlockHit`](WorldAfterEvents.md#targetblockhit)*
- Added property *[`tripWireTrip`](WorldAfterEvents.md#tripwiretrip)*
- Added property *[`weatherChange`](WorldAfterEvents.md#weatherchange)*
- Added property *[`worldInitialize`](WorldAfterEvents.md#worldinitialize)*
#### Added *[`WorldBeforeEvents`](WorldBeforeEvents.md)*
#### Added *[`WorldInitializeAfterEvent`](WorldInitializeAfterEvent.md)*
#### Added *[`WorldInitializeAfterEventSignal`](WorldInitializeAfterEventSignal.md)*
#### Added enum [`BlockVolumeIntersection`](BlockVolumeIntersection.md)
#### Added enum [`CompoundBlockVolumeAction`](CompoundBlockVolumeAction.md)
#### Added enum [`Direction`](Direction.md)
#### Added enum [`DisplaySlotId`](DisplaySlotId.md)
#### Added enum [`DyeColor`](DyeColor.md)
#### Added enum [`EntityLifetimeState`](EntityLifetimeState.md)
#### Added enum [`EquipmentSlot`](EquipmentSlot.md)
#### Added enum [`FluidType`](FluidType.md)
#### Added enum [`ObjectiveSortOrder`](ObjectiveSortOrder.md)
#### Added enum [`ScoreboardIdentityType`](ScoreboardIdentityType.md)
#### Added enum [`ScriptEventSource`](ScriptEventSource.md)
#### Added enum [`SignSide`](SignSide.md)
#### Added enum [`TimeOfDay`](TimeOfDay.md)
#### Added enum [`WatchdogTerminateReason`](WatchdogTerminateReason.md)
#### Added enum [`WeatherType`](WeatherType.md)
#### Added constant `TicksPerDay`
#### Added constant `TicksPerSecond`
## 1.3.0
#### Removed *AfterEvents*
#### Removed *BeforeEvents*
#### Changed *[`Block`](Block.md)*
- Removed property *isWaterlogged*
- Changed type for *[`permutation`](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Removed property *type*
- Removed property *typeId*
- Removed function *canPlace*
- Changed function *[`getComponent`](Block.md#getcomponent)*
  - Changed return type from [*BlockComponent*](BlockComponent.md) (throws exceptions) to [*BlockComponent*](BlockComponent.md) (throws exceptions)
  - Added argument `componentId`
  - Removed argument `componentName`
- Removed function *getItemStack*
- Removed function *getRedstonePower*
- Removed function *getTags*
- Removed function *hasTag*
- Removed function *isAir*
- Removed function *isLiquid*
- Removed function *isSolid*
- Changed function *[`setPermutation`](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Removed function *setType*
- Removed function *trySetPermutation*
#### Removed *BlockAreaSize*
#### Removed *BlockBreakAfterEvent*
#### Removed *BlockBreakAfterEventSignal*
#### Removed *BlockExplodeAfterEvent*
#### Removed *BlockExplodeAfterEventSignal*
#### Changed *[`BlockInventoryComponent`](BlockInventoryComponent.md)*
- Changed type for *[`container`](BlockInventoryComponent.md#container)* from [*Container*](Container.md) (throws exceptions) to [*Container*](Container.md) (throws exceptions)
#### Removed *BlockLavaContainerComponent*
#### Removed *BlockLiquidContainerComponent*
#### Removed *BlockLocationIterator*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
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
#### Changed *[`Container`](Container.md)*
- Changed function *[`addItem`](Container.md#additem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
- Removed function *getSlot*
- Changed function *[`transferItem`](Container.md#transferitem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
#### Removed *ContainerSlot*
#### Removed *DataDrivenEntityTriggerAfterEvent*
#### Removed *DataDrivenEntityTriggerAfterEventSignal*
#### Removed *DataDrivenEntityTriggerBeforeEvent*
#### Removed *DataDrivenEntityTriggerBeforeEventSignal*
#### Removed *DefinitionModifier*
#### Changed *[`Dimension`](Dimension.md)*
- Changed type for *[`id`](Dimension.md#id)* from *string* (throws exceptions) to *string*
- Removed function *createExplosion*
- Removed function *fillBlocks*
- Changed function *[`getBlock`](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Removed function *getBlockFromRay*
- Removed function *getEntitiesFromRay*
- Changed function *[`runCommand`](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setWeather*
- Changed function *[`spawnEntity`](Dimension.md#spawnentity)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Changed function *[`spawnItem`](Dimension.md#spawnitem)*
  - Changed return type from [*Entity*](Entity.md) (throws exceptions) to [*Entity*](Entity.md) (throws exceptions)
- Removed function *spawnParticle*
#### Removed *DynamicPropertiesDefinition*
#### Changed *[`Effect`](Effect.md)*
- Added function *[`isValid`](Effect.md#isvalid)*
#### Removed *EffectAddAfterEvent*
#### Removed *EffectAddAfterEventSignal*
#### Removed *EffectTypes*
#### Removed *Enchantment*
#### Removed *EnchantmentList*
#### Removed *EnchantmentSlot*
#### Removed *EnchantmentType*
#### Removed *EnchantmentTypes*
#### Changed *[`Entity`](Entity.md)*
- Removed property *fallDistance*
- Changed type for *[`id`](Entity.md#id)* from *string* (throws exceptions) to *string*
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
- Changed type for *[`typeId`](Entity.md#typeid)* from *string* (throws exceptions) to *string*
- Changed function *[`addEffect`](Entity.md#addeffect)*
  - Changed return type from *boolean* (throws exceptions) to *void* (throws exceptions)
- Removed function *extinguishFire*
- Removed function *getBlockFromViewDirection*
- Removed function *getDynamicProperty*
- Removed function *getEntitiesFromViewDirection*
- Removed function *getRotation*
- Removed function *playAnimation*
- Removed function *removeDynamicProperty*
- Changed function *[`runCommand`](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Removed function *setDynamicProperty*
- Removed function *setOnFire*
- Removed function *setRotation*
- Removed function *triggerEvent*
#### Removed *EntityAddRiderComponent*
#### Removed *EntityAgeableComponent*
#### Removed *EntityBreathableComponent*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Removed property *entity*
#### Removed *EntityDefinitionFeedItem*
#### Removed *EntityDieAfterEvent*
#### Removed *EntityDieAfterEventSignal*
#### Removed *EntityEquipmentInventoryComponent*
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
#### Removed *IPistonActivateAfterEventSignal*
#### Removed *IPistonActivateBeforeEventSignal*
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
#### Changed *[`ItemStack`](ItemStack.md)*
- Changed read-only flag for *[`amount`](ItemStack.md#amount)* from `false` to `true`
- Changed read-only flag for *[`keepOnDeath`](ItemStack.md#keepondeath)* from `false` to `true`
- Changed read-only flag for *[`lockMode`](ItemStack.md#lockmode)* from `false` to `true`
- Changed read-only flag for *[`nameTag`](ItemStack.md#nametag)* from `false` to `true`
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
#### Changed *[`Player`](Player.md)*
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
- Changed function *[`playSound`](Player.md#playsound)*
  - Added argument `soundId`
  - Removed argument `soundID`
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
#### Changed *[`System`](System.md)*
- Removed property *events*
#### Removed *SystemEvents*
#### Removed *Trigger*
#### Removed *Vector*
#### Removed *WatchdogTerminateBeforeEvent*
#### Removed *WatchdogTerminateBeforeEventSignal*
#### Removed *WeatherChangeAfterEvent*
#### Removed *WeatherChangeAfterEventSignal*
#### Changed *[`World`](World.md)*
- Removed property *afterEvents*
- Removed property *beforeEvents*
- Removed property *scoreboard*
- Removed function *broadcastClientMessage*
- Removed function *getAbsoluteTime*
- Removed function *getDefaultSpawnPosition*
- Removed function *getDynamicProperty*
- Removed function *getEntity*
- Removed function *getTime*
- Changed function *[`playMusic`](World.md#playmusic)*
  - Added argument `trackId`
  - Removed argument `trackID`
- Changed function *[`playSound`](World.md#playsound)*
  - Added argument `soundId`
  - Removed argument `soundID`
- Changed function *[`queueMusic`](World.md#queuemusic)*
  - Added argument `trackId`
  - Removed argument `trackID`
- Removed function *removeDynamicProperty*
- Removed function *setDefaultSpawn*
- Removed function *setDynamicProperty*
- Removed function *setTime*
#### Added *[`WorldAfterEvents`](WorldAfterEvents.md)*
#### Removed *WorldInitializeAfterEvent*
#### Removed *WorldInitializeAfterEventSignal*
#### Removed enum `BlockVolumeIntersection`
#### Removed enum `CompoundBlockVolumeAction`
#### Removed enum `Direction`
#### Removed enum `DisplaySlotId`
#### Removed enum `DyeColor`
#### Removed enum `EntityLifetimeState`
#### Removed enum `EquipmentSlot`
#### Removed enum `FluidType`
#### Removed enum `MessageSourceType`
#### Removed enum `ObjectiveSortOrder`
#### Removed enum `ScoreboardIdentityType`
#### Removed enum `SignSide`
#### Removed enum `TimeOfDay`
#### Removed enum `WatchdogTerminateReason`
#### Removed enum `WeatherType`
#### Removed constant `TicksPerDay`
#### Removed constant `TicksPerSecond`
## 1.3.0-beta
#### Added *[`AfterEvents`](AfterEvents.md)*
#### Added *[`BeforeEvents`](BeforeEvents.md)*
#### Changed *[`Block`](Block.md)*
- Added property *[`isWaterlogged`](Block.md#iswaterlogged)*
- Changed type for *[`permutation`](Block.md#permutation)* from [*BlockPermutation*](BlockPermutation.md) (throws exceptions) to [*BlockPermutation*](BlockPermutation.md) (throws exceptions)
- Added property *[`type`](Block.md#type)*
- Added property *[`typeId`](Block.md#typeid)*
- Added function *[`canPlace`](Block.md#canplace)*
- Added function *[`getComponent`](Block.md#getcomponent)*
- Added function *[`getItemStack`](Block.md#getitemstack)*
- Added function *[`getRedstonePower`](Block.md#getredstonepower)*
- Added function *[`getTags`](Block.md#gettags)*
- Added function *[`hasTag`](Block.md#hastag)*
- Added function *[`isAir`](Block.md#isair)*
- Added function *[`isLiquid`](Block.md#isliquid)*
- Added function *[`isSolid`](Block.md#issolid)*
- Changed function *[`setPermutation`](Block.md#setpermutation)*
  - Changed return type from *void* (throws exceptions) to *void* (throws exceptions)
- Added function *[`setType`](Block.md#settype)*
- Added function *[`trySetPermutation`](Block.md#trysetpermutation)*
#### Added *[`BlockAreaSize`](BlockAreaSize.md)*
#### Added *[`BlockBreakAfterEvent`](BlockBreakAfterEvent.md)*
#### Added *[`BlockBreakAfterEventSignal`](BlockBreakAfterEventSignal.md)*
#### Changed *[`BlockComponent`](BlockComponent.md)*
- Added property *[`block`](BlockComponent.md#block)*
#### Added *[`BlockEvent`](BlockEvent.md)*
#### Added *[`BlockExplodeAfterEvent`](BlockExplodeAfterEvent.md)*
#### Added *[`BlockExplodeAfterEventSignal`](BlockExplodeAfterEventSignal.md)*
#### Changed *[`BlockInventoryComponent`](BlockInventoryComponent.md)*
- Changed type for *[`container`](BlockInventoryComponent.md#container)* from [*Container*](Container.md) (throws exceptions) to [*Container*](Container.md) (throws exceptions)
#### Added *[`BlockLavaContainerComponent`](BlockLavaContainerComponent.md)*
#### Added *[`BlockLiquidContainerComponent`](BlockLiquidContainerComponent.md)*
#### Added *[`BlockLocationIterator`](BlockLocationIterator.md)*
#### Changed *[`BlockPermutation`](BlockPermutation.md)*
- Added property *[`type`](BlockPermutation.md#type)*
- Added function *[`clone`](BlockPermutation.md#clone)*
- Added function *[`getAllStates`](BlockPermutation.md#getallstates)*
- Added function *[`getItemStack`](BlockPermutation.md#getitemstack)*
- Added function *[`getState`](BlockPermutation.md#getstate)*
- Added function *[`getTags`](BlockPermutation.md#gettags)*
- Added function *[`hasTag`](BlockPermutation.md#hastag)*
- Added function *[`withState`](BlockPermutation.md#withstate)*
#### Added *[`BlockPistonComponent`](BlockPistonComponent.md)*
#### Added *[`BlockPlaceAfterEvent`](BlockPlaceAfterEvent.md)*
#### Added *[`BlockPlaceAfterEventSignal`](BlockPlaceAfterEventSignal.md)*
#### Added *[`BlockPotionContainerComponent`](BlockPotionContainerComponent.md)*
#### Added *[`BlockRecordPlayerComponent`](BlockRecordPlayerComponent.md)*
#### Added *[`BlockSignComponent`](BlockSignComponent.md)*
#### Added *[`BlockSnowContainerComponent`](BlockSnowContainerComponent.md)*
#### Added *[`BlockStates`](BlockStates.md)*
#### Added *[`BlockStateType`](BlockStateType.md)*
#### Added *[`BlockType`](BlockType.md)*
#### Added *[`BlockVolumeUtils`](BlockVolumeUtils.md)*
#### Added *[`BlockWaterContainerComponent`](BlockWaterContainerComponent.md)*
#### Added *[`BoundingBoxUtils`](BoundingBoxUtils.md)*
#### Added *[`ButtonPushAfterEvent`](ButtonPushAfterEvent.md)*
#### Added *[`ButtonPushAfterEventSignal`](ButtonPushAfterEventSignal.md)*
#### Added *[`ChatSendAfterEvent`](ChatSendAfterEvent.md)*
#### Added *[`ChatSendAfterEventSignal`](ChatSendAfterEventSignal.md)*
#### Added *[`ChatSendBeforeEvent`](ChatSendBeforeEvent.md)*
#### Added *[`ChatSendBeforeEventSignal`](ChatSendBeforeEventSignal.md)*
#### Added *[`CompoundBlockVolume`](CompoundBlockVolume.md)*
#### Changed *[`Container`](Container.md)*
- Changed function *[`addItem`](Container.md#additem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
- Added function *[`getSlot`](Container.md#getslot)*
- Changed function *[`transferItem`](Container.md#transferitem)*
  - Changed return type from [*ItemStack*](ItemStack.md) (throws exceptions) to [*ItemStack*](ItemStack.md) (throws exceptions)
#### Added *[`ContainerSlot`](ContainerSlot.md)*
#### Added *[`DataDrivenEntityTriggerAfterEvent`](DataDrivenEntityTriggerAfterEvent.md)*
#### Added *[`DataDrivenEntityTriggerAfterEventSignal`](DataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEvent`](DataDrivenEntityTriggerBeforeEvent.md)*
#### Added *[`DataDrivenEntityTriggerBeforeEventSignal`](DataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[`DefinitionModifier`](DefinitionModifier.md)*
#### Changed *[`Dimension`](Dimension.md)*
- Changed type for *[`id`](Dimension.md#id)* from *string* to *string* (throws exceptions)
- Added function *[`createExplosion`](Dimension.md#createexplosion)*
- Added function *[`fillBlocks`](Dimension.md#fillblocks)*
- Changed function *[`getBlock`](Dimension.md#getblock)*
  - Changed return type from [*Block*](Block.md) (throws exceptions) to [*Block*](Block.md) (throws exceptions)
- Added function *[`getBlockFromRay`](Dimension.md#getblockfromray)*
- Added function *[`getEntitiesFromRay`](Dimension.md#getentitiesfromray)*
- Changed function *[`runCommand`](Dimension.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[`setWeather`](Dimension.md#setweather)*
- Added function *[`spawnEntity`](Dimension.md#spawnentity)*
- Added function *[`spawnItem`](Dimension.md#spawnitem)*
- Added function *[`spawnParticle`](Dimension.md#spawnparticle)*
#### Added *[`DynamicPropertiesDefinition`](DynamicPropertiesDefinition.md)*
#### Added *[`Effect`](Effect.md)*
#### Added *[`EffectAddAfterEvent`](EffectAddAfterEvent.md)*
#### Added *[`EffectAddAfterEventSignal`](EffectAddAfterEventSignal.md)*
#### Added *[`EffectType`](EffectType.md)*
#### Added *[`EffectTypes`](EffectTypes.md)*
#### Added *[`Enchantment`](Enchantment.md)*
#### Added *[`EnchantmentList`](EnchantmentList.md)*
#### Added *[`EnchantmentSlot`](EnchantmentSlot.md)*
#### Added *[`EnchantmentType`](EnchantmentType.md)*
#### Added *[`EnchantmentTypes`](EnchantmentTypes.md)*
#### Changed *[`Entity`](Entity.md)*
- Added property *[`fallDistance`](Entity.md#falldistance)*
- Changed type for *[`id`](Entity.md#id)* from *string* to *string* (throws exceptions)
- Added property *[`isClimbing`](Entity.md#isclimbing)*
- Added property *[`isFalling`](Entity.md#isfalling)*
- Added property *[`isInWater`](Entity.md#isinwater)*
- Added property *[`isOnGround`](Entity.md#isonground)*
- Added property *[`isSneaking`](Entity.md#issneaking)*
- Added property *[`isSprinting`](Entity.md#issprinting)*
- Added property *[`isSwimming`](Entity.md#isswimming)*
- Added property *[`lifetimeState`](Entity.md#lifetimestate)*
- Added property *[`scoreboardIdentity`](Entity.md#scoreboardidentity)*
- Added property *[`target`](Entity.md#target)*
- Changed type for *[`typeId`](Entity.md#typeid)* from *string* to *string* (throws exceptions)
- Added function *[`addEffect`](Entity.md#addeffect)*
- Added function *[`extinguishFire`](Entity.md#extinguishfire)*
- Added function *[`getBlockFromViewDirection`](Entity.md#getblockfromviewdirection)*
- Added function *[`getDynamicProperty`](Entity.md#getdynamicproperty)*
- Added function *[`getEffect`](Entity.md#geteffect)*
- Added function *[`getEffects`](Entity.md#geteffects)*
- Added function *[`getEntitiesFromViewDirection`](Entity.md#getentitiesfromviewdirection)*
- Added function *[`getRotation`](Entity.md#getrotation)*
- Added function *[`playAnimation`](Entity.md#playanimation)*
- Added function *[`removeDynamicProperty`](Entity.md#removedynamicproperty)*
- Added function *[`removeEffect`](Entity.md#removeeffect)*
- Changed function *[`runCommand`](Entity.md#runcommand)*
  - Changed return type from [*CommandResult*](CommandResult.md) (throws exceptions) to [*CommandResult*](CommandResult.md) (throws exceptions)
- Added function *[`setDynamicProperty`](Entity.md#setdynamicproperty)*
- Added function *[`setOnFire`](Entity.md#setonfire)*
- Added function *[`setRotation`](Entity.md#setrotation)*
- Added function *[`teleport`](Entity.md#teleport)*
- Added function *[`triggerEvent`](Entity.md#triggerevent)*
- Added function *[`tryTeleport`](Entity.md#tryteleport)*
#### Added *[`EntityAddRiderComponent`](EntityAddRiderComponent.md)*
#### Added *[`EntityAgeableComponent`](EntityAgeableComponent.md)*
#### Added *[`EntityAttributeComponent`](EntityAttributeComponent.md)*
#### Added *[`EntityBreathableComponent`](EntityBreathableComponent.md)*
#### Changed *[`EntityComponent`](EntityComponent.md)*
- Added property *[`entity`](EntityComponent.md#entity)*
#### Added *[`EntityDefinitionFeedItem`](EntityDefinitionFeedItem.md)*
#### Added *[`EntityDieAfterEvent`](EntityDieAfterEvent.md)*
#### Added *[`EntityDieAfterEventSignal`](EntityDieAfterEventSignal.md)*
#### Added *[`EntityEquipmentInventoryComponent`](EntityEquipmentInventoryComponent.md)*
#### Added *[`EntityHealableComponent`](EntityHealableComponent.md)*
#### Added *[`EntityHealthComponent`](EntityHealthComponent.md)*
#### Added *[`EntityHitAfterEvent`](EntityHitAfterEvent.md)*
#### Added *[`EntityHitAfterEventSignal`](EntityHitAfterEventSignal.md)*
#### Added *[`EntityHurtAfterEvent`](EntityHurtAfterEvent.md)*
#### Added *[`EntityHurtAfterEventSignal`](EntityHurtAfterEventSignal.md)*
#### Added *[`EntityIterator`](EntityIterator.md)*
#### Added *[`EntityLavaMovementComponent`](EntityLavaMovementComponent.md)*
#### Added *[`EntityLeashableComponent`](EntityLeashableComponent.md)*
#### Added *[`EntityMountTamingComponent`](EntityMountTamingComponent.md)*
#### Added *[`EntityMovementComponent`](EntityMovementComponent.md)*
#### Added *[`EntityMovementGlideComponent`](EntityMovementGlideComponent.md)*
#### Added *[`EntityMovementSwayComponent`](EntityMovementSwayComponent.md)*
#### Added *[`EntityNavigationClimbComponent`](EntityNavigationClimbComponent.md)*
#### Added *[`EntityNavigationComponent`](EntityNavigationComponent.md)*
#### Added *[`EntityNavigationFloatComponent`](EntityNavigationFloatComponent.md)*
#### Added *[`EntityNavigationFlyComponent`](EntityNavigationFlyComponent.md)*
#### Added *[`EntityNavigationGenericComponent`](EntityNavigationGenericComponent.md)*
#### Added *[`EntityNavigationHoverComponent`](EntityNavigationHoverComponent.md)*
#### Added *[`EntityNavigationWalkComponent`](EntityNavigationWalkComponent.md)*
#### Added *[`EntityOnFireComponent`](EntityOnFireComponent.md)*
#### Added *[`EntityRemovedAfterEvent`](EntityRemovedAfterEvent.md)*
#### Added *[`EntityRemovedAfterEventSignal`](EntityRemovedAfterEventSignal.md)*
#### Added *[`EntityRideableComponent`](EntityRideableComponent.md)*
#### Added *[`EntityRidingComponent`](EntityRidingComponent.md)*
#### Added *[`EntitySpawnAfterEvent`](EntitySpawnAfterEvent.md)*
#### Added *[`EntitySpawnAfterEventSignal`](EntitySpawnAfterEventSignal.md)*
#### Added *[`EntityStrengthComponent`](EntityStrengthComponent.md)*
#### Added *[`EntityTameableComponent`](EntityTameableComponent.md)*
#### Added *[`EntityType`](EntityType.md)*
#### Added *[`EntityTypeIterator`](EntityTypeIterator.md)*
#### Added *[`EntityTypes`](EntityTypes.md)*
#### Added *[`EntityUnderwaterMovementComponent`](EntityUnderwaterMovementComponent.md)*
#### Added *[`ExplosionAfterEvent`](ExplosionAfterEvent.md)*
#### Added *[`ExplosionAfterEventSignal`](ExplosionAfterEventSignal.md)*
#### Added *[`ExplosionBeforeEvent`](ExplosionBeforeEvent.md)*
#### Added *[`ExplosionBeforeEventSignal`](ExplosionBeforeEventSignal.md)*
#### Added *[`FeedItem`](FeedItem.md)*
#### Added *[`FeedItemEffect`](FeedItemEffect.md)*
#### Added *[`FilterGroup`](FilterGroup.md)*
#### Added *[`FluidContainer`](FluidContainer.md)*
#### Added *[`IBlockBreakAfterEventSignal`](IBlockBreakAfterEventSignal.md)*
#### Added *[`IBlockExplodeAfterEventSignal`](IBlockExplodeAfterEventSignal.md)*
#### Added *[`IBlockPlaceAfterEventSignal`](IBlockPlaceAfterEventSignal.md)*
#### Added *[`IButtonPushAfterEventSignal`](IButtonPushAfterEventSignal.md)*
#### Added *[`IChatSendAfterEventSignal`](IChatSendAfterEventSignal.md)*
#### Added *[`IChatSendBeforeEventSignal`](IChatSendBeforeEventSignal.md)*
#### Added *[`IDataDrivenEntityTriggerAfterEventSignal`](IDataDrivenEntityTriggerAfterEventSignal.md)*
#### Added *[`IDataDrivenEntityTriggerBeforeEventSignal`](IDataDrivenEntityTriggerBeforeEventSignal.md)*
#### Added *[`IEffectAddAfterEventSignal`](IEffectAddAfterEventSignal.md)*
#### Added *[`IEntityDieAfterEventSignal`](IEntityDieAfterEventSignal.md)*
#### Added *[`IEntityHitAfterEventSignal`](IEntityHitAfterEventSignal.md)*
#### Added *[`IEntityHurtAfterEventSignal`](IEntityHurtAfterEventSignal.md)*
#### Added *[`IEntityRemovedAfterEventSignal`](IEntityRemovedAfterEventSignal.md)*
#### Added *[`IEntitySpawnAfterEventSignal`](IEntitySpawnAfterEventSignal.md)*
#### Added *[`IExplosionAfterEventSignal`](IExplosionAfterEventSignal.md)*
#### Added *[`IExplosionBeforeEventSignal`](IExplosionBeforeEventSignal.md)*
#### Added *[`IItemCompleteUseAfterEventSignal`](IItemCompleteUseAfterEventSignal.md)*
#### Added *[`IItemDefinitionAfterEventSignal`](IItemDefinitionAfterEventSignal.md)*
#### Added *[`IItemDefinitionBeforeEventSignal`](IItemDefinitionBeforeEventSignal.md)*
#### Added *[`IItemReleaseUseAfterEventSignal`](IItemReleaseUseAfterEventSignal.md)*
#### Added *[`IItemStartUseAfterEventSignal`](IItemStartUseAfterEventSignal.md)*
#### Added *[`IItemStartUseOnAfterEventSignal`](IItemStartUseOnAfterEventSignal.md)*
#### Added *[`IItemStopUseAfterEventSignal`](IItemStopUseAfterEventSignal.md)*
#### Added *[`IItemStopUseOnAfterEventSignal`](IItemStopUseOnAfterEventSignal.md)*
#### Added *[`IItemUseAfterEventSignal`](IItemUseAfterEventSignal.md)*
#### Added *[`IItemUseBeforeEventSignal`](IItemUseBeforeEventSignal.md)*
#### Added *[`IItemUseOnAfterEventSignal`](IItemUseOnAfterEventSignal.md)*
#### Added *[`IItemUseOnBeforeEventSignal`](IItemUseOnBeforeEventSignal.md)*
#### Added *[`ILeverActionAfterEventSignal`](ILeverActionAfterEventSignal.md)*
#### Added *[`IPistonActivateAfterEventSignal`](IPistonActivateAfterEventSignal.md)*
#### Added *[`IPistonActivateBeforeEventSignal`](IPistonActivateBeforeEventSignal.md)*
#### Added *[`IPlayerJoinAfterEventSignal`](IPlayerJoinAfterEventSignal.md)*
#### Added *[`IPlayerLeaveAfterEventSignal`](IPlayerLeaveAfterEventSignal.md)*
#### Added *[`IPlayerSpawnAfterEventSignal`](IPlayerSpawnAfterEventSignal.md)*
#### Added *[`IProjectileHitAfterEventSignal`](IProjectileHitAfterEventSignal.md)*
#### Added *[`IScriptEventCommandMessageAfterEventSignal`](IScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[`IServerMessageAfterEventSignal`](IServerMessageAfterEventSignal.md)*
#### Added *[`ItemCompleteUseAfterEvent`](ItemCompleteUseAfterEvent.md)*
#### Added *[`ItemCompleteUseAfterEventSignal`](ItemCompleteUseAfterEventSignal.md)*
#### Added *[`ItemCooldownComponent`](ItemCooldownComponent.md)*
#### Added *[`ItemDefinitionAfterEventSignal`](ItemDefinitionAfterEventSignal.md)*
#### Added *[`ItemDefinitionBeforeEventSignal`](ItemDefinitionBeforeEventSignal.md)*
#### Added *[`ItemDefinitionTriggeredAfterEvent`](ItemDefinitionTriggeredAfterEvent.md)*
#### Added *[`ItemDefinitionTriggeredBeforeEvent`](ItemDefinitionTriggeredBeforeEvent.md)*
#### Added *[`ItemDurabilityComponent`](ItemDurabilityComponent.md)*
#### Added *[`ItemEnchantsComponent`](ItemEnchantsComponent.md)*
#### Added *[`ItemFoodComponent`](ItemFoodComponent.md)*
#### Added *[`ItemReleaseUseAfterEvent`](ItemReleaseUseAfterEvent.md)*
#### Added *[`ItemReleaseUseAfterEventSignal`](ItemReleaseUseAfterEventSignal.md)*
#### Changed *[`ItemStack`](ItemStack.md)*
- Changed read-only flag for *[`amount`](ItemStack.md#amount)* from `true` to `false`
- Changed read-only flag for *[`keepOnDeath`](ItemStack.md#keepondeath)* from `true` to `false`
- Changed read-only flag for *[`lockMode`](ItemStack.md#lockmode)* from `true` to `false`
- Changed read-only flag for *[`nameTag`](ItemStack.md#nametag)* from `true` to `false`
- Added function *[`clone`](ItemStack.md#clone)*
- Added function *[`getLore`](ItemStack.md#getlore)*
- Added function *[`getTags`](ItemStack.md#gettags)*
- Added function *[`hasTag`](ItemStack.md#hastag)*
- Added function *[`setCanDestroy`](ItemStack.md#setcandestroy)*
- Added function *[`setCanPlaceOn`](ItemStack.md#setcanplaceon)*
- Added function *[`setLore`](ItemStack.md#setlore)*
- Added function *[`triggerEvent`](ItemStack.md#triggerevent)*
#### Added *[`ItemStartUseAfterEvent`](ItemStartUseAfterEvent.md)*
#### Added *[`ItemStartUseAfterEventSignal`](ItemStartUseAfterEventSignal.md)*
#### Added *[`ItemStartUseOnAfterEvent`](ItemStartUseOnAfterEvent.md)*
#### Added *[`ItemStartUseOnAfterEventSignal`](ItemStartUseOnAfterEventSignal.md)*
#### Added *[`ItemStopUseAfterEvent`](ItemStopUseAfterEvent.md)*
#### Added *[`ItemStopUseAfterEventSignal`](ItemStopUseAfterEventSignal.md)*
#### Added *[`ItemStopUseOnAfterEvent`](ItemStopUseOnAfterEvent.md)*
#### Added *[`ItemStopUseOnAfterEventSignal`](ItemStopUseOnAfterEventSignal.md)*
#### Added *[`ItemTypeIterator`](ItemTypeIterator.md)*
#### Added *[`ItemTypes`](ItemTypes.md)*
#### Added *[`ItemUseAfterEvent`](ItemUseAfterEvent.md)*
#### Added *[`ItemUseAfterEventSignal`](ItemUseAfterEventSignal.md)*
#### Added *[`ItemUseBeforeEvent`](ItemUseBeforeEvent.md)*
#### Added *[`ItemUseBeforeEventSignal`](ItemUseBeforeEventSignal.md)*
#### Added *[`ItemUseOnAfterEvent`](ItemUseOnAfterEvent.md)*
#### Added *[`ItemUseOnAfterEventSignal`](ItemUseOnAfterEventSignal.md)*
#### Added *[`ItemUseOnBeforeEvent`](ItemUseOnBeforeEvent.md)*
#### Added *[`ItemUseOnBeforeEventSignal`](ItemUseOnBeforeEventSignal.md)*
#### Added *[`IWatchdogTerminateBeforeEventSignal`](IWatchdogTerminateBeforeEventSignal.md)*
#### Added *[`IWeatherChangeAfterEventSignal`](IWeatherChangeAfterEventSignal.md)*
#### Added *[`IWorldInitializeAfterEventSignal`](IWorldInitializeAfterEventSignal.md)*
#### Added *[`LeverActionAfterEvent`](LeverActionAfterEvent.md)*
#### Added *[`LeverActionAfterEventSignal`](LeverActionAfterEventSignal.md)*
#### Added *[`MessageReceiveAfterEvent`](MessageReceiveAfterEvent.md)*
#### Added *[`MinecraftBlockTypes`](MinecraftBlockTypes.md)*
#### Added *[`MinecraftEffectTypes`](MinecraftEffectTypes.md)*
#### Added *[`MinecraftEntityTypes`](MinecraftEntityTypes.md)*
#### Added *[`MinecraftItemTypes`](MinecraftItemTypes.md)*
#### Added *[`MolangVariableMap`](MolangVariableMap.md)*
#### Added *[`NavigationResult`](NavigationResult.md)*
#### Added *[`PistonActivateAfterEvent`](PistonActivateAfterEvent.md)*
#### Added *[`PistonActivateAfterEventSignal`](PistonActivateAfterEventSignal.md)*
#### Added *[`PistonActivateBeforeEvent`](PistonActivateBeforeEvent.md)*
#### Added *[`PistonActivateBeforeEventSignal`](PistonActivateBeforeEventSignal.md)*
#### Changed *[`Player`](Player.md)*
- Added property *[`isFlying`](Player.md#isflying)*
- Added property *[`isGliding`](Player.md#isgliding)*
- Added property *[`isJumping`](Player.md#isjumping)*
- Added property *[`level`](Player.md#level)*
- Added property *[`onScreenDisplay`](Player.md#onscreendisplay)*
- Added property *[`selectedSlot`](Player.md#selectedslot)*
- Added property *[`spawnDimension`](Player.md#spawndimension)*
- Added property *[`totalXpNeededForNextLevel`](Player.md#totalxpneededfornextlevel)*
- Added property *[`xpEarnedAtCurrentLevel`](Player.md#xpearnedatcurrentlevel)*
- Added function *[`addExperience`](Player.md#addexperience)*
- Added function *[`addLevels`](Player.md#addlevels)*
- Added function *[`clearSpawn`](Player.md#clearspawn)*
- Added function *[`getItemCooldown`](Player.md#getitemcooldown)*
- Added function *[`getSpawnPosition`](Player.md#getspawnposition)*
- Added function *[`getTotalXp`](Player.md#gettotalxp)*
- Added function *[`isOp`](Player.md#isop)*
- Changed function *[`playSound`](Player.md#playsound)*
  - Added argument `soundID`
  - Removed argument `soundId`
- Added function *[`postClientMessage`](Player.md#postclientmessage)*
- Added function *[`resetLevel`](Player.md#resetlevel)*
- Added function *[`setOp`](Player.md#setop)*
- Added function *[`setSpawn`](Player.md#setspawn)*
- Added function *[`startItemCooldown`](Player.md#startitemcooldown)*
#### Added *[`PlayerIterator`](PlayerIterator.md)*
#### Added *[`PlayerJoinAfterEvent`](PlayerJoinAfterEvent.md)*
#### Added *[`PlayerJoinAfterEventSignal`](PlayerJoinAfterEventSignal.md)*
#### Added *[`PlayerLeaveAfterEvent`](PlayerLeaveAfterEvent.md)*
#### Added *[`PlayerLeaveAfterEventSignal`](PlayerLeaveAfterEventSignal.md)*
#### Added *[`PlayerSpawnAfterEvent`](PlayerSpawnAfterEvent.md)*
#### Added *[`PlayerSpawnAfterEventSignal`](PlayerSpawnAfterEventSignal.md)*
#### Added *[`ProjectileHitAfterEvent`](ProjectileHitAfterEvent.md)*
#### Added *[`ProjectileHitAfterEventSignal`](ProjectileHitAfterEventSignal.md)*
#### Added *[`PropertyRegistry`](PropertyRegistry.md)*
#### Added *[`Scoreboard`](Scoreboard.md)*
#### Added *[`ScoreboardIdentity`](ScoreboardIdentity.md)*
#### Added *[`ScoreboardObjective`](ScoreboardObjective.md)*
#### Added *[`ScoreboardScoreInfo`](ScoreboardScoreInfo.md)*
#### Added *[`ScreenDisplay`](ScreenDisplay.md)*
#### Added *[`ScriptEventCommandMessageAfterEvent`](ScriptEventCommandMessageAfterEvent.md)*
#### Added *[`ScriptEventCommandMessageAfterEventSignal`](ScriptEventCommandMessageAfterEventSignal.md)*
#### Added *[`Seat`](Seat.md)*
#### Added *[`ServerMessageAfterEventSignal`](ServerMessageAfterEventSignal.md)*
#### Changed *[`System`](System.md)*
- Added property *[`events`](System.md#events)*
#### Added *[`SystemEvents`](SystemEvents.md)*
#### Added *[`Trigger`](Trigger.md)*
#### Added *[`Vector`](Vector.md)*
#### Added *[`WatchdogTerminateBeforeEvent`](WatchdogTerminateBeforeEvent.md)*
#### Added *[`WatchdogTerminateBeforeEventSignal`](WatchdogTerminateBeforeEventSignal.md)*
#### Added *[`WeatherChangeAfterEvent`](WeatherChangeAfterEvent.md)*
#### Added *[`WeatherChangeAfterEventSignal`](WeatherChangeAfterEventSignal.md)*
#### Changed *[`World`](World.md)*
- Added property *[`afterEvents`](World.md#afterevents)*
- Added property *[`beforeEvents`](World.md#beforeevents)*
- Added property *[`scoreboard`](World.md#scoreboard)*
- Added function *[`broadcastClientMessage`](World.md#broadcastclientmessage)*
- Added function *[`getAbsoluteTime`](World.md#getabsolutetime)*
- Added function *[`getDefaultSpawnPosition`](World.md#getdefaultspawnposition)*
- Added function *[`getDynamicProperty`](World.md#getdynamicproperty)*
- Added function *[`getEntity`](World.md#getentity)*
- Added function *[`getTime`](World.md#gettime)*
- Changed function *[`playMusic`](World.md#playmusic)*
  - Added argument `trackID`
  - Removed argument `trackId`
- Changed function *[`playSound`](World.md#playsound)*
  - Added argument `soundID`
  - Removed argument `soundId`
- Changed function *[`queueMusic`](World.md#queuemusic)*
  - Added argument `trackID`
  - Removed argument `trackId`
- Added function *[`removeDynamicProperty`](World.md#removedynamicproperty)*
- Added function *[`setDefaultSpawn`](World.md#setdefaultspawn)*
- Added function *[`setDynamicProperty`](World.md#setdynamicproperty)*
- Added function *[`setTime`](World.md#settime)*
#### Added *[`WorldInitializeAfterEvent`](WorldInitializeAfterEvent.md)*
#### Added *[`WorldInitializeAfterEventSignal`](WorldInitializeAfterEventSignal.md)*
#### Added enum [`BlockVolumeIntersection`](BlockVolumeIntersection.md)
#### Added enum [`CompoundBlockVolumeAction`](CompoundBlockVolumeAction.md)
#### Added enum [`Direction`](Direction.md)
#### Added enum [`DisplaySlotId`](DisplaySlotId.md)
#### Added enum [`DyeColor`](DyeColor.md)
#### Added enum [`EntityLifetimeState`](EntityLifetimeState.md)
#### Added enum [`EquipmentSlot`](EquipmentSlot.md)
#### Added enum [`FluidType`](FluidType.md)
#### Added enum [`MessageSourceType`](MessageSourceType.md)
#### Added enum [`ObjectiveSortOrder`](ObjectiveSortOrder.md)
#### Added enum [`ScoreboardIdentityType`](ScoreboardIdentityType.md)
#### Added enum [`SignSide`](SignSide.md)
#### Added enum [`TimeOfDay`](TimeOfDay.md)
#### Added enum [`WatchdogTerminateReason`](WatchdogTerminateReason.md)
#### Added enum [`WeatherType`](WeatherType.md)
#### Added constant `TicksPerDay`
#### Added constant `TicksPerSecond`
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
#### Added `@minecraft/server` Module
