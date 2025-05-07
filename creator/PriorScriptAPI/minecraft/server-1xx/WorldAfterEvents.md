---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.WorldAfterEvents Class
description: Contents of the @minecraft/server.WorldAfterEvents class (Version 1.x.x).
---
# WorldAfterEvents Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/WorldAfterEvents.md).

Contains a set of events that are available across the scope of the World.

## Properties

### **blockExplode**
`read-only blockExplode: BlockExplodeAfterEventSignal;`

This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.

Type: [*BlockExplodeAfterEventSignal*](BlockExplodeAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **buttonPush**
`read-only buttonPush: ButtonPushAfterEventSignal;`

This event fires when a button is pushed.

Type: [*ButtonPushAfterEventSignal*](ButtonPushAfterEventSignal.md)

### **dataDrivenEntityTrigger**
`read-only dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;`

This event is fired when an entity event has been triggered that will update the component definition state of an entity.

Type: [*DataDrivenEntityTriggerAfterEventSignal*](DataDrivenEntityTriggerAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **effectAdd**
`read-only effectAdd: EffectAddAfterEventSignal;`

This event fires when an effect, like poisoning, is added to an entity.

Type: [*EffectAddAfterEventSignal*](EffectAddAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **entityDie**
`read-only entityDie: EntityDieAfterEventSignal;`

This event fires when an entity dies.

Type: [*EntityDieAfterEventSignal*](EntityDieAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **entityHealthChanged**
`read-only entityHealthChanged: EntityHealthChangedAfterEventSignal;`

This event fires when entity health changes in any degree.

Type: [*EntityHealthChangedAfterEventSignal*](EntityHealthChangedAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **entityHitBlock**
`read-only entityHitBlock: EntityHitBlockAfterEventSignal;`

This event fires when an entity hits (that is, melee attacks) a block.

Type: [*EntityHitBlockAfterEventSignal*](EntityHitBlockAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **entityHitEntity**
`read-only entityHitEntity: EntityHitEntityAfterEventSignal;`

This event fires when an entity hits (that is, melee attacks) another entity.

Type: [*EntityHitEntityAfterEventSignal*](EntityHitEntityAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **entityHurt**
`read-only entityHurt: EntityHurtAfterEventSignal;`

This event fires when an entity is hurt (takes damage).

Type: [*EntityHurtAfterEventSignal*](EntityHurtAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **entityLoad**
`read-only entityLoad: EntityLoadAfterEventSignal;`

Fires when an entity is loaded.

Type: [*EntityLoadAfterEventSignal*](EntityLoadAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **entityRemove**
`read-only entityRemove: EntityRemoveAfterEventSignal;`

Fires when an entity is removed (for example, potentially unloaded, or removed after being killed).

Type: [*EntityRemoveAfterEventSignal*](EntityRemoveAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **entitySpawn**
`read-only entitySpawn: EntitySpawnAfterEventSignal;`

This event fires when an entity is spawned.

Type: [*EntitySpawnAfterEventSignal*](EntitySpawnAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **explosion**
`read-only explosion: ExplosionAfterEventSignal;`

This event is fired after an explosion occurs.

Type: [*ExplosionAfterEventSignal*](ExplosionAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **gameRuleChange**
`read-only gameRuleChange: GameRuleChangeAfterEventSignal;`

This event fires when a world.gameRules property has changed.

Type: [*GameRuleChangeAfterEventSignal*](GameRuleChangeAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemCompleteUse**
`read-only itemCompleteUse: ItemCompleteUseAfterEventSignal;`

This event fires when a chargeable item completes charging.

Type: [*ItemCompleteUseAfterEventSignal*](ItemCompleteUseAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemReleaseUse**
`read-only itemReleaseUse: ItemReleaseUseAfterEventSignal;`

This event fires when a chargeable item is released from charging.

Type: [*ItemReleaseUseAfterEventSignal*](ItemReleaseUseAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemStartUse**
`read-only itemStartUse: ItemStartUseAfterEventSignal;`

This event fires when a chargeable item starts charging.

Type: [*ItemStartUseAfterEventSignal*](ItemStartUseAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemStartUseOn**
`read-only itemStartUseOn: ItemStartUseOnAfterEventSignal;`

This event fires when a player successfully uses an item or places a block by pressing the Use Item / Place Block button. If multiple blocks are placed, this event will only occur once at the beginning of the block placement. Note: This event cannot be used with Hoe or Axe items.

Type: [*ItemStartUseOnAfterEventSignal*](ItemStartUseOnAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemStopUse**
`read-only itemStopUse: ItemStopUseAfterEventSignal;`

This event fires when a chargeable item stops charging.

Type: [*ItemStopUseAfterEventSignal*](ItemStopUseAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemStopUseOn**
`read-only itemStopUseOn: ItemStopUseOnAfterEventSignal;`

This event fires when a player releases the Use Item / Place Block button after successfully using an item. Note: This event cannot be used with Hoe or Axe items.

Type: [*ItemStopUseOnAfterEventSignal*](ItemStopUseOnAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemUse**
`read-only itemUse: ItemUseAfterEventSignal;`

This event fires when an item is successfully used by a player.

Type: [*ItemUseAfterEventSignal*](ItemUseAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **itemUseOn**
`read-only itemUseOn: ItemUseOnAfterEventSignal;`

This event fires when an item is used on a block by a player.

Type: [*ItemUseOnAfterEventSignal*](ItemUseOnAfterEventSignal.md)

> [!CAUTION]
> This property is deprecated and will be removed in 2.0.0.

Notes:
  - This property can be read in early-execution mode.

### **leverAction**
`read-only leverAction: LeverActionAfterEventSignal;`

A lever has been pulled.

Type: [*LeverActionAfterEventSignal*](LeverActionAfterEventSignal.md)

### **pistonActivate**
`read-only pistonActivate: PistonActivateAfterEventSignal;`

This event fires when a piston expands or retracts.

Type: [*PistonActivateAfterEventSignal*](PistonActivateAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerBreakBlock**
`read-only playerBreakBlock: PlayerBreakBlockAfterEventSignal;`

This event fires for a block that is broken by a player.

Type: [*PlayerBreakBlockAfterEventSignal*](PlayerBreakBlockAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerButtonInput**
`read-only playerButtonInput: PlayerButtonInputAfterEventSignal;`

This event fires when an [*@minecraft/server.InputButton*](../../../priorscriptapi/minecraft/server-1xx/InputButton.md) state is changed.

Type: [*PlayerButtonInputAfterEventSignal*](PlayerButtonInputAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerDimensionChange**
`read-only playerDimensionChange: PlayerDimensionChangeAfterEventSignal;`

Fires when a player moved to a different dimension.

Type: [*PlayerDimensionChangeAfterEventSignal*](PlayerDimensionChangeAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerEmote**
`read-only playerEmote: PlayerEmoteAfterEventSignal;`

Type: [*PlayerEmoteAfterEventSignal*](PlayerEmoteAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerGameModeChange**
`read-only playerGameModeChange: PlayerGameModeChangeAfterEventSignal;`

Type: [*PlayerGameModeChangeAfterEventSignal*](PlayerGameModeChangeAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerInputModeChange**
`read-only playerInputModeChange: PlayerInputModeChangeAfterEventSignal;`

This event fires when a player's [*@minecraft/server.InputMode*](../../../priorscriptapi/minecraft/server-1xx/InputMode.md) changes.

Type: [*PlayerInputModeChangeAfterEventSignal*](PlayerInputModeChangeAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerInputPermissionCategoryChange**
`read-only playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;`

This event fires when a players input permissions change.

Type: [*PlayerInputPermissionCategoryChangeAfterEventSignal*](PlayerInputPermissionCategoryChangeAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerInteractWithBlock**
`read-only playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;`

An event for when a player interacts with a block.

Type: [*PlayerInteractWithBlockAfterEventSignal*](PlayerInteractWithBlockAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerInteractWithEntity**
`read-only playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;`

This event fires when a player interacts with an entity.

Type: [*PlayerInteractWithEntityAfterEventSignal*](PlayerInteractWithEntityAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerJoin**
`read-only playerJoin: PlayerJoinAfterEventSignal;`

This event fires when a player joins a world.  See also playerSpawn for another related event you can trap for when a player is spawned the first time within a world.

Type: [*PlayerJoinAfterEventSignal*](PlayerJoinAfterEventSignal.md)

### **playerLeave**
`read-only playerLeave: PlayerLeaveAfterEventSignal;`

This event fires when a player leaves a world.

Type: [*PlayerLeaveAfterEventSignal*](PlayerLeaveAfterEventSignal.md)

### **playerPlaceBlock**
`read-only playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;`

This event fires for a block that is placed by a player.

Type: [*PlayerPlaceBlockAfterEventSignal*](PlayerPlaceBlockAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **playerSpawn**
`read-only playerSpawn: PlayerSpawnAfterEventSignal;`

This event fires when a player spawns or respawns. Note that an additional flag within this event will tell you whether the player is spawning right after join vs. a respawn.

Type: [*PlayerSpawnAfterEventSignal*](PlayerSpawnAfterEventSignal.md)

### **pressurePlatePop**
`read-only pressurePlatePop: PressurePlatePopAfterEventSignal;`

A pressure plate has popped back up (i.e., there are no entities on the pressure plate.)

Type: [*PressurePlatePopAfterEventSignal*](PressurePlatePopAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **pressurePlatePush**
`read-only pressurePlatePush: PressurePlatePushAfterEventSignal;`

A pressure plate has pushed (at least one entity has moved onto a pressure plate.)

Type: [*PressurePlatePushAfterEventSignal*](PressurePlatePushAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **projectileHitBlock**
`read-only projectileHitBlock: ProjectileHitBlockAfterEventSignal;`

This event fires when a projectile hits a block.

Type: [*ProjectileHitBlockAfterEventSignal*](ProjectileHitBlockAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **projectileHitEntity**
`read-only projectileHitEntity: ProjectileHitEntityAfterEventSignal;`

This event fires when a projectile hits an entity.

Type: [*ProjectileHitEntityAfterEventSignal*](ProjectileHitEntityAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **targetBlockHit**
`read-only targetBlockHit: TargetBlockHitAfterEventSignal;`

A target block was hit.

Type: [*TargetBlockHitAfterEventSignal*](TargetBlockHitAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **tripWireTrip**
`read-only tripWireTrip: TripWireTripAfterEventSignal;`

A trip wire was tripped.

Type: [*TripWireTripAfterEventSignal*](TripWireTripAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **weatherChange**
`read-only weatherChange: WeatherChangeAfterEventSignal;`

This event will be triggered when the weather changes within Minecraft.

Type: [*WeatherChangeAfterEventSignal*](WeatherChangeAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **worldInitialize**
`read-only worldInitialize: WorldInitializeAfterEventSignal;`

This event fires when the script environment is initialized on a World.

Type: [*WorldInitializeAfterEventSignal*](WorldInitializeAfterEventSignal.md)

> [!CAUTION]
> This property is deprecated and will be removed in 2.0.0.

Notes:
  - This property can be read in early-execution mode.
