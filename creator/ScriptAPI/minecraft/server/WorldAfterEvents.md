---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.WorldAfterEvents Class
description: Contents of the @minecraft/server.WorldAfterEvents class.
---
# WorldAfterEvents Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains a set of events that are available across the scope of the World.

## Properties

### **blockBreak**
`read-only blockBreak: BlockBreakAfterEventSignal;`

This event fires for a block that is broken by a player.

Type: [*BlockBreakAfterEventSignal*](BlockBreakAfterEventSignal.md)

### **blockExplode**
`read-only blockExplode: BlockExplodeAfterEventSignal;`

This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.

Type: [*BlockExplodeAfterEventSignal*](BlockExplodeAfterEventSignal.md)

### **blockPlace**
`read-only blockPlace: BlockPlaceAfterEventSignal;`

This event fires for a block that is placed by a player.

Type: [*BlockPlaceAfterEventSignal*](BlockPlaceAfterEventSignal.md)

### **buttonPush**
`read-only buttonPush: ButtonPushAfterEventSignal;`

This event fires when a button is pushed.

Type: [*ButtonPushAfterEventSignal*](ButtonPushAfterEventSignal.md)

### **chatSend**
`read-only chatSend: ChatSendAfterEventSignal;`

This event is triggered after a chat message has been broadcast or sent to players.

Type: [*ChatSendAfterEventSignal*](ChatSendAfterEventSignal.md)

### **dataDrivenEntityTriggerEvent**
`read-only dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerAfterEventSignal;`

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

Type: [*EntityHealthChangedAfterEventSignal*](EntityHealthChangedAfterEventSignal.md)

### **entityHit**
`read-only entityHit: EntityHitAfterEventSignal;`

This event fires when an entity hits (makes a melee attack) and potentially impacts another entity or block.

Type: [*EntityHitAfterEventSignal*](EntityHitAfterEventSignal.md)

### **entityHurt**
`read-only entityHurt: EntityHurtAfterEventSignal;`

This event fires when an entity is hurt (takes damage).

Type: [*EntityHurtAfterEventSignal*](EntityHurtAfterEventSignal.md)

### **entityRemoved**
`read-only entityRemoved: EntityRemovedAfterEventSignal;`

Type: [*EntityRemovedAfterEventSignal*](EntityRemovedAfterEventSignal.md)

### **entitySpawn**
`read-only entitySpawn: EntitySpawnAfterEventSignal;`

This event fires when an entity is spawned.

Type: [*EntitySpawnAfterEventSignal*](EntitySpawnAfterEventSignal.md)

### **explosion**
`read-only explosion: ExplosionAfterEventSignal;`

This event is fired after an explosion occurs.

Type: [*ExplosionAfterEventSignal*](ExplosionAfterEventSignal.md)

### **itemCompleteUse**
`read-only itemCompleteUse: ItemCompleteUseAfterEventSignal;`

Type: [*ItemCompleteUseAfterEventSignal*](ItemCompleteUseAfterEventSignal.md)

### **itemDefinitionEvent**
`read-only itemDefinitionEvent: ItemDefinitionAfterEventSignal;`

For custom items, this event is triggered when the fundamental set of defined components for the item change.  Note that this event is only fired for custom data-driven items.

Type: [*ItemDefinitionAfterEventSignal*](ItemDefinitionAfterEventSignal.md)

### **itemReleaseUse**
`read-only itemReleaseUse: ItemReleaseUseAfterEventSignal;`

Type: [*ItemReleaseUseAfterEventSignal*](ItemReleaseUseAfterEventSignal.md)

### **itemStartUse**
`read-only itemStartUse: ItemStartUseAfterEventSignal;`

Type: [*ItemStartUseAfterEventSignal*](ItemStartUseAfterEventSignal.md)

### **itemStartUseOn**
`read-only itemStartUseOn: ItemStartUseOnAfterEventSignal;`

This event fires when a player successfully uses an item or places a block by pressing the Use Item / Place Block button. If multiple blocks are placed, this event will only occur once at the beginning of the block placement. Note: This event cannot be used with Hoe or Axe items.

Type: [*ItemStartUseOnAfterEventSignal*](ItemStartUseOnAfterEventSignal.md)

### **itemStopUse**
`read-only itemStopUse: ItemStopUseAfterEventSignal;`

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

### **leverActivate**
`read-only leverActivate: LeverActionAfterEventSignal;`

This event fires when a lever activates or is deactivated.

Type: [*LeverActionAfterEventSignal*](LeverActionAfterEventSignal.md)

### **messageReceive**
`read-only messageReceive: ServerMessageAfterEventSignal;`

This event is an internal implementation detail, and is otherwise not currently functional.

Type: [*ServerMessageAfterEventSignal*](ServerMessageAfterEventSignal.md)

### **pistonActivate**
`read-only pistonActivate: PistonActivateAfterEventSignal;`

This event fires when a piston expands or retracts.

Type: [*PistonActivateAfterEventSignal*](PistonActivateAfterEventSignal.md)

### **playerJoin**
`read-only playerJoin: PlayerJoinAfterEventSignal;`

This event fires when a player joins a world.  See also playerSpawn for another related event you can trap for when a player is spawned the first time within a world.

Type: [*PlayerJoinAfterEventSignal*](PlayerJoinAfterEventSignal.md)

### **playerLeave**
`read-only playerLeave: PlayerLeaveAfterEventSignal;`

This event fires when a player leaves a world.

Type: [*PlayerLeaveAfterEventSignal*](PlayerLeaveAfterEventSignal.md)

### **playerSpawn**
`read-only playerSpawn: PlayerSpawnAfterEventSignal;`

This event fires when a player spawns or respawns. Note that an additional flag within this event will tell you whether the player is spawning right after join vs. a respawn.

Type: [*PlayerSpawnAfterEventSignal*](PlayerSpawnAfterEventSignal.md)

### **pressurePlatePop**
`read-only pressurePlatePop: PressurePlatePopAfterEventSignal;`

Type: [*PressurePlatePopAfterEventSignal*](PressurePlatePopAfterEventSignal.md)

### **pressurePlatePush**
`read-only pressurePlatePush: PressurePlatePushAfterEventSignal;`

Type: [*PressurePlatePushAfterEventSignal*](PressurePlatePushAfterEventSignal.md)

### **projectileHit**
`read-only projectileHit: ProjectileHitAfterEventSignal;`

This event fires when a projectile hits an entity or block.

Type: [*ProjectileHitAfterEventSignal*](ProjectileHitAfterEventSignal.md)

### **targetBlockHit**
`read-only targetBlockHit: TargetBlockHitAfterEventSignal;`

Type: [*TargetBlockHitAfterEventSignal*](TargetBlockHitAfterEventSignal.md)

### **tripWireTrip**
`read-only tripWireTrip: TripWireTripAfterEventSignal;`

Type: [*TripWireTripAfterEventSignal*](TripWireTripAfterEventSignal.md)

### **weatherChange**
`read-only weatherChange: WeatherChangeAfterEventSignal;`

This event will be triggered when the weather changes within Minecraft.

Type: [*WeatherChangeAfterEventSignal*](WeatherChangeAfterEventSignal.md)

### **worldInitialize**
`read-only worldInitialize: WorldInitializeAfterEventSignal;`

This event fires when the script environment is initialized on a World. In addition, you can register dynamic properties within the scope of a world Initialize event.

Type: [*WorldInitializeAfterEventSignal*](WorldInitializeAfterEventSignal.md)
