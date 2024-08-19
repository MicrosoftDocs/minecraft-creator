---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WorldAfterEvents Class
description: Contents of the @minecraft/server.WorldAfterEvents class.
---
# WorldAfterEvents Class

Contains a set of events that are available across the scope of the World.

## Properties

### **blockExplode**
`read-only blockExplode: BlockExplodeAfterEventSignal;`

This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.

Type: [*BlockExplodeAfterEventSignal*](BlockExplodeAfterEventSignal.md)

### **buttonPush**
`read-only buttonPush: ButtonPushAfterEventSignal;`

This event fires when a button is pushed.

Type: [*ButtonPushAfterEventSignal*](ButtonPushAfterEventSignal.md)

::: moniker range="=minecraft-bedrock-experimental"
### **chatSend**
`read-only chatSend: ChatSendAfterEventSignal;`

This event is triggered after a chat message has been broadcast or sent to players.

Type: [*ChatSendAfterEventSignal*](ChatSendAfterEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **dataDrivenEntityTrigger**
`read-only dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;`

This event is fired when an entity event has been triggered that will update the component definition state of an entity.

Type: [*DataDrivenEntityTriggerAfterEventSignal*](DataDrivenEntityTriggerAfterEventSignal.md)

### **effectAdd**
`read-only effectAdd: EffectAddAfterEventSignal;`

This event fires when an effect, like poisoning, is added to an entity.

Type: [*EffectAddAfterEventSignal*](EffectAddAfterEventSignal.md)

### **entityDie**
`read-only entityDie: EntityDieAfterEventSignal;`

This event fires when an entity dies.

Type: [*EntityDieAfterEventSignal*](EntityDieAfterEventSignal.md)

### **entityHealthChanged**
`read-only entityHealthChanged: EntityHealthChangedAfterEventSignal;`

This event fires when entity health changes in any degree.

Type: [*EntityHealthChangedAfterEventSignal*](EntityHealthChangedAfterEventSignal.md)

### **entityHitBlock**
`read-only entityHitBlock: EntityHitBlockAfterEventSignal;`

This event fires when an entity hits (that is, melee attacks) a block.

Type: [*EntityHitBlockAfterEventSignal*](EntityHitBlockAfterEventSignal.md)

### **entityHitEntity**
`read-only entityHitEntity: EntityHitEntityAfterEventSignal;`

This event fires when an entity hits (that is, melee attacks) another entity.

Type: [*EntityHitEntityAfterEventSignal*](EntityHitEntityAfterEventSignal.md)

### **entityHurt**
`read-only entityHurt: EntityHurtAfterEventSignal;`

This event fires when an entity is hurt (takes damage).

Type: [*EntityHurtAfterEventSignal*](EntityHurtAfterEventSignal.md)

### **entityLoad**
`read-only entityLoad: EntityLoadAfterEventSignal;`

Fires when an entity is loaded.

Type: [*EntityLoadAfterEventSignal*](EntityLoadAfterEventSignal.md)

### **entityRemove**
`read-only entityRemove: EntityRemoveAfterEventSignal;`

Fires when an entity is removed (for example, potentially unloaded, or removed after being killed).

Type: [*EntityRemoveAfterEventSignal*](EntityRemoveAfterEventSignal.md)

### **entitySpawn**
`read-only entitySpawn: EntitySpawnAfterEventSignal;`

This event fires when an entity is spawned.

Type: [*EntitySpawnAfterEventSignal*](EntitySpawnAfterEventSignal.md)

### **explosion**
`read-only explosion: ExplosionAfterEventSignal;`

This event is fired after an explosion occurs.

Type: [*ExplosionAfterEventSignal*](ExplosionAfterEventSignal.md)

### **gameRuleChange**
`read-only gameRuleChange: GameRuleChangeAfterEventSignal;`

This event fires when a world.gameRules property has changed.

Type: [*GameRuleChangeAfterEventSignal*](GameRuleChangeAfterEventSignal.md)

### **itemCompleteUse**
`read-only itemCompleteUse: ItemCompleteUseAfterEventSignal;`

This event fires when a chargeable item completes charging.

Type: [*ItemCompleteUseAfterEventSignal*](ItemCompleteUseAfterEventSignal.md)

### **itemReleaseUse**
`read-only itemReleaseUse: ItemReleaseUseAfterEventSignal;`

This event fires when a chargeable item is released from charging.

Type: [*ItemReleaseUseAfterEventSignal*](ItemReleaseUseAfterEventSignal.md)

### **itemStartUse**
`read-only itemStartUse: ItemStartUseAfterEventSignal;`

This event fires when a chargeable item starts charging.

Type: [*ItemStartUseAfterEventSignal*](ItemStartUseAfterEventSignal.md)

### **itemStartUseOn**
`read-only itemStartUseOn: ItemStartUseOnAfterEventSignal;`

This event fires when a player successfully uses an item or places a block by pressing the Use Item / Place Block button. If multiple blocks are placed, this event will only occur once at the beginning of the block placement. Note: This event cannot be used with Hoe or Axe items.

Type: [*ItemStartUseOnAfterEventSignal*](ItemStartUseOnAfterEventSignal.md)

### **itemStopUse**
`read-only itemStopUse: ItemStopUseAfterEventSignal;`

This event fires when a chargeable item stops charging.

Type: [*ItemStopUseAfterEventSignal*](ItemStopUseAfterEventSignal.md)

### **itemStopUseOn**
`read-only itemStopUseOn: ItemStopUseOnAfterEventSignal;`

This event fires when a player releases the Use Item / Place Block button after successfully using an item. Note: This event cannot be used with Hoe or Axe items.

Type: [*ItemStopUseOnAfterEventSignal*](ItemStopUseOnAfterEventSignal.md)

### **itemUse**
`read-only itemUse: ItemUseAfterEventSignal;`

This event fires when an item is successfully used by a player.

Type: [*ItemUseAfterEventSignal*](ItemUseAfterEventSignal.md)

### **itemUseOn**
`read-only itemUseOn: ItemUseOnAfterEventSignal;`

This event fires when an item is used on a block by a player.

Type: [*ItemUseOnAfterEventSignal*](ItemUseOnAfterEventSignal.md)

### **leverAction**
`read-only leverAction: LeverActionAfterEventSignal;`

A lever has been pulled.

Type: [*LeverActionAfterEventSignal*](LeverActionAfterEventSignal.md)

::: moniker range="=minecraft-bedrock-experimental"
### **messageReceive**
`read-only messageReceive: ServerMessageAfterEventSignal;`

This event is an internal implementation detail, and is otherwise not currently functional.

Type: [*ServerMessageAfterEventSignal*](ServerMessageAfterEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **pistonActivate**
`read-only pistonActivate: PistonActivateAfterEventSignal;`

This event fires when a piston expands or retracts.

Type: [*PistonActivateAfterEventSignal*](PistonActivateAfterEventSignal.md)

### **playerBreakBlock**
`read-only playerBreakBlock: PlayerBreakBlockAfterEventSignal;`

This event fires for a block that is broken by a player.

Type: [*PlayerBreakBlockAfterEventSignal*](PlayerBreakBlockAfterEventSignal.md)

### **playerDimensionChange**
`read-only playerDimensionChange: PlayerDimensionChangeAfterEventSignal;`

Fires when a player moved to a different dimension.

Type: [*PlayerDimensionChangeAfterEventSignal*](PlayerDimensionChangeAfterEventSignal.md)

::: moniker range="=minecraft-bedrock-experimental"
### **playerEmote**
`read-only playerEmote: PlayerEmoteAfterEventSignal;`

Type: [*PlayerEmoteAfterEventSignal*](PlayerEmoteAfterEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **playerGameModeChange**
`read-only playerGameModeChange: PlayerGameModeChangeAfterEventSignal;`

Type: [*PlayerGameModeChangeAfterEventSignal*](PlayerGameModeChangeAfterEventSignal.md)

### **playerInputPermissionCategoryChange**
`read-only playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;`

This event fires when a players input permissions change.

Type: [*PlayerInputPermissionCategoryChangeAfterEventSignal*](PlayerInputPermissionCategoryChangeAfterEventSignal.md)

::: moniker range="=minecraft-bedrock-experimental"
### **playerInteractWithBlock**
`read-only playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;`

An event for when a player interacts with a block.

Type: [*PlayerInteractWithBlockAfterEventSignal*](PlayerInteractWithBlockAfterEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **playerInteractWithEntity**
`read-only playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;`

This event fires when a player interacts with an entity.

Type: [*PlayerInteractWithEntityAfterEventSignal*](PlayerInteractWithEntityAfterEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

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

### **playerSpawn**
`read-only playerSpawn: PlayerSpawnAfterEventSignal;`

This event fires when a player spawns or respawns. Note that an additional flag within this event will tell you whether the player is spawning right after join vs. a respawn.

Type: [*PlayerSpawnAfterEventSignal*](PlayerSpawnAfterEventSignal.md)

### **pressurePlatePop**
`read-only pressurePlatePop: PressurePlatePopAfterEventSignal;`

A pressure plate has popped back up (i.e., there are no entities on the pressure plate.)

Type: [*PressurePlatePopAfterEventSignal*](PressurePlatePopAfterEventSignal.md)

### **pressurePlatePush**
`read-only pressurePlatePush: PressurePlatePushAfterEventSignal;`

A pressure plate has pushed (at least one entity has moved onto a pressure plate.)

Type: [*PressurePlatePushAfterEventSignal*](PressurePlatePushAfterEventSignal.md)

### **projectileHitBlock**
`read-only projectileHitBlock: ProjectileHitBlockAfterEventSignal;`

This event fires when a projectile hits a block.

Type: [*ProjectileHitBlockAfterEventSignal*](ProjectileHitBlockAfterEventSignal.md)

### **projectileHitEntity**
`read-only projectileHitEntity: ProjectileHitEntityAfterEventSignal;`

This event fires when a projectile hits an entity.

Type: [*ProjectileHitEntityAfterEventSignal*](ProjectileHitEntityAfterEventSignal.md)

### **targetBlockHit**
`read-only targetBlockHit: TargetBlockHitAfterEventSignal;`

A target block was hit.

Type: [*TargetBlockHitAfterEventSignal*](TargetBlockHitAfterEventSignal.md)

### **tripWireTrip**
`read-only tripWireTrip: TripWireTripAfterEventSignal;`

A trip wire was tripped.

Type: [*TripWireTripAfterEventSignal*](TripWireTripAfterEventSignal.md)

### **weatherChange**
`read-only weatherChange: WeatherChangeAfterEventSignal;`

This event will be triggered when the weather changes within Minecraft.

Type: [*WeatherChangeAfterEventSignal*](WeatherChangeAfterEventSignal.md)

### **worldInitialize**
`read-only worldInitialize: WorldInitializeAfterEventSignal;`

This event fires when the script environment is initialized on a World.

Type: [*WorldInitializeAfterEventSignal*](WorldInitializeAfterEventSignal.md)
