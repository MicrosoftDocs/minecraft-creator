---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.EntityComponent Class
description: Contents of the @minecraft/server.EntityComponent class.
---
# EntityComponent Class

## Extends
- [*Component*](Component.md)

## Classes that extend EntityComponent
- [*EntityAddRiderComponent*](EntityAddRiderComponent.md)
- [*EntityAgeableComponent*](EntityAgeableComponent.md)
- [*EntityAttributeComponent*](EntityAttributeComponent.md)
- [*EntityBaseMovementComponent*](EntityBaseMovementComponent.md)
- [*EntityBreathableComponent*](EntityBreathableComponent.md)
- [*EntityCanClimbComponent*](EntityCanClimbComponent.md)
- [*EntityCanFlyComponent*](EntityCanFlyComponent.md)
- [*EntityCanPowerJumpComponent*](EntityCanPowerJumpComponent.md)
- [*EntityColor2Component*](EntityColor2Component.md)
- [*EntityColorComponent*](EntityColorComponent.md)
- [*EntityEquippableComponent*](EntityEquippableComponent.md)
- [*EntityFireImmuneComponent*](EntityFireImmuneComponent.md)
- [*EntityFloatsInLiquidComponent*](EntityFloatsInLiquidComponent.md)
- [*EntityFlyingSpeedComponent*](EntityFlyingSpeedComponent.md)
- [*EntityFrictionModifierComponent*](EntityFrictionModifierComponent.md)
- [*EntityHealableComponent*](EntityHealableComponent.md)
- [*EntityInventoryComponent*](EntityInventoryComponent.md)
- [*EntityIsBabyComponent*](EntityIsBabyComponent.md)
- [*EntityIsChargedComponent*](EntityIsChargedComponent.md)
- [*EntityIsChestedComponent*](EntityIsChestedComponent.md)
- [*EntityIsDyeableComponent*](EntityIsDyeableComponent.md)
- [*EntityIsHiddenWhenInvisibleComponent*](EntityIsHiddenWhenInvisibleComponent.md)
- [*EntityIsIgnitedComponent*](EntityIsIgnitedComponent.md)
- [*EntityIsIllagerCaptainComponent*](EntityIsIllagerCaptainComponent.md)
- [*EntityIsSaddledComponent*](EntityIsSaddledComponent.md)
- [*EntityIsShakingComponent*](EntityIsShakingComponent.md)
- [*EntityIsShearedComponent*](EntityIsShearedComponent.md)
- [*EntityIsStackableComponent*](EntityIsStackableComponent.md)
- [*EntityIsStunnedComponent*](EntityIsStunnedComponent.md)
- [*EntityIsTamedComponent*](EntityIsTamedComponent.md)
- [*EntityItemComponent*](EntityItemComponent.md)
- [*EntityLeashableComponent*](EntityLeashableComponent.md)
- [*EntityMarkVariantComponent*](EntityMarkVariantComponent.md)
- [*EntityNavigationComponent*](EntityNavigationComponent.md)
- [*EntityOnFireComponent*](EntityOnFireComponent.md)
- [*EntityProjectileComponent*](EntityProjectileComponent.md)
- [*EntityPushThroughComponent*](EntityPushThroughComponent.md)
- [*EntityRideableComponent*](EntityRideableComponent.md)
- [*EntityRidingComponent*](EntityRidingComponent.md)
- [*EntityScaleComponent*](EntityScaleComponent.md)
- [*EntitySkinIdComponent*](EntitySkinIdComponent.md)
- [*EntityStrengthComponent*](EntityStrengthComponent.md)
- [*EntityTameableComponent*](EntityTameableComponent.md)
- [*EntityTameMountComponent*](EntityTameMountComponent.md)
- [*EntityTypeFamilyComponent*](EntityTypeFamilyComponent.md)
- [*EntityVariantComponent*](EntityVariantComponent.md)
- [*EntityWantsJockeyComponent*](EntityWantsJockeyComponent.md)
- [*PlayerCursorInventoryComponent*](PlayerCursorInventoryComponent.md)
- [*EntityNpcComponent*](EntityNpcComponent.md)

Base class for downstream entity components.

## Properties

### **entity**
`read-only entity: Entity;`

The entity that owns this component. The entity will be undefined if it has been removed.

Type: [*Entity*](Entity.md)

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidEntityError*](InvalidEntityError.md)
