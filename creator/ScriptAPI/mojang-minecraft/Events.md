---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Events Class
description: Contents of the mojang-minecraft.Events class.
---
# Events Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains a set of events that are available across the scope of the World.

## Properties

### **beforeChat**
`read-only beforeChat: BeforeChatEventSignal;`

This event fires before a chat message is broadcast or delivered. The event can be canceled, and the message can also be updated.

Type: [*BeforeChatEventSignal*](BeforeChatEventSignal.md)

### **beforeDataDrivenEntityTriggerEvent**
`read-only beforeDataDrivenEntityTriggerEvent: BeforeDataDrivenEntityTriggerEventSignal;`

This event is fired before the triggering of an entity event that updates the component definition state of an entity. Within this event, you can cancel or shape the impacted components and event triggers.

Type: [*BeforeDataDrivenEntityTriggerEventSignal*](BeforeDataDrivenEntityTriggerEventSignal.md)

### **beforeExplosion**
`read-only beforeExplosion: BeforeExplosionEventSignal;`

This event is fired before an explosion occurs.

Type: [*BeforeExplosionEventSignal*](BeforeExplosionEventSignal.md)

### **beforeItemDefinitionEvent**
`read-only beforeItemDefinitionEvent: BeforeItemDefinitionEventSignal;`

For custom items, this event is triggered before the set of defined components for the item change in response to a triggered event. Note that this event is only fired for custom data-driven items.

Type: [*BeforeItemDefinitionEventSignal*](BeforeItemDefinitionEventSignal.md)

### **beforeItemUse**
`read-only beforeItemUse: BeforeItemUseEventSignal;`

This event fires before an item is used by an entity or player.

Type: [*BeforeItemUseEventSignal*](BeforeItemUseEventSignal.md)

### **beforeItemUseOn**
`read-only beforeItemUseOn: BeforeItemUseOnEventSignal;`

This event fires before an item is used on a block by an entity or player.

Type: [*BeforeItemUseOnEventSignal*](BeforeItemUseOnEventSignal.md)

### **beforePistonActivate**
`read-only beforePistonActivate: BeforePistonActivateEventSignal;`

Fires before a piston is activated.

Type: [*BeforePistonActivateEventSignal*](BeforePistonActivateEventSignal.md)

### **blockBreak**
`read-only blockBreak: BlockBreakEventSignal;`

This event fires for a block that is broken by a player.

Type: [*BlockBreakEventSignal*](BlockBreakEventSignal.md)

### **blockExplode**
`read-only blockExplode: BlockExplodeEventSignal;`

This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.

Type: [*BlockExplodeEventSignal*](BlockExplodeEventSignal.md)

### **blockPlace**
`read-only blockPlace: BlockPlaceEventSignal;`

This event fires for a block that is placed by a player.

Type: [*BlockPlaceEventSignal*](BlockPlaceEventSignal.md)

### **buttonPush**
`read-only buttonPush: ButtonPushEventSignal;`

This event fires when a button is pushed.

Type: [*ButtonPushEventSignal*](ButtonPushEventSignal.md)

### **chat**
`read-only chat: ChatEventSignal;`

This event is triggered after a chat message has been broadcast or sent to players.

Type: [*ChatEventSignal*](ChatEventSignal.md)

### **dataDrivenEntityTriggerEvent**
`read-only dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerEventSignal;`

This event is fired when an entity event has been triggered that will update the component definition state of an entity.

Type: [*DataDrivenEntityTriggerEventSignal*](DataDrivenEntityTriggerEventSignal.md)

### **effectAdd**
`read-only effectAdd: EffectAddEventSignal;`

This event fires when an effect, like poisoning, is added to an entity.

Type: [*EffectAddEventSignal*](EffectAddEventSignal.md)

### **entityCreate**
`read-only entityCreate: EntityCreateEventSignal;`

This event fires when a new entity is created.

Type: [*EntityCreateEventSignal*](EntityCreateEventSignal.md)

### **entityHit**
`read-only entityHit: EntityHitEventSignal;`

This event fires when an entity hits (makes a melee attack) and potentially impacts another entity or block.

Type: [*EntityHitEventSignal*](EntityHitEventSignal.md)

### **entityHurt**
`read-only entityHurt: EntityHurtEventSignal;`

This event fires when an entity is hurt (takes damage).

Type: [*EntityHurtEventSignal*](EntityHurtEventSignal.md)

### **explosion**
`read-only explosion: ExplosionEventSignal;`

This event is fired after an explosion occurs.

Type: [*ExplosionEventSignal*](ExplosionEventSignal.md)

### **itemCompleteCharge**
`read-only itemCompleteCharge: ItemCompleteChargeEventSignal;`

This event fires when a chargeable item completes charging.

Type: [*ItemCompleteChargeEventSignal*](ItemCompleteChargeEventSignal.md)

### **itemDefinitionEvent**
`read-only itemDefinitionEvent: ItemDefinitionEventSignal;`

For custom items, this event is triggered when the fundamental set of defined components for the item change.  Note that this event is only fired for custom data-driven items.

Type: [*ItemDefinitionEventSignal*](ItemDefinitionEventSignal.md)

### **itemReleaseCharge**
`read-only itemReleaseCharge: ItemReleaseChargeEventSignal;`

This event fires when a chargeable item is released from charging.

Type: [*ItemReleaseChargeEventSignal*](ItemReleaseChargeEventSignal.md)

### **itemStartCharge**
`read-only itemStartCharge: ItemStartChargeEventSignal;`

This event fires when a chargeable item starts charging.

Type: [*ItemStartChargeEventSignal*](ItemStartChargeEventSignal.md)

### **itemStartUseOn**
`read-only itemStartUseOn: ItemStartUseOnEventSignal;`

This event fires when any particular item is starting to be used by an entity or player.

Type: [*ItemStartUseOnEventSignal*](ItemStartUseOnEventSignal.md)

### **itemStopCharge**
`read-only itemStopCharge: ItemStopChargeEventSignal;`

This event fires when a chargeable item stops charging.

Type: [*ItemStopChargeEventSignal*](ItemStopChargeEventSignal.md)

### **itemStopUseOn**
`read-only itemStopUseOn: ItemStopUseOnEventSignal;`

This event fires when any particular item is ending being used by an entity or player.

Type: [*ItemStopUseOnEventSignal*](ItemStopUseOnEventSignal.md)

### **itemUse**
`read-only itemUse: ItemUseEventSignal;`

This event fires when any particular item is used by an entity or player.

Type: [*ItemUseEventSignal*](ItemUseEventSignal.md)

### **itemUseOn**
`read-only itemUseOn: ItemUseOnEventSignal;`

This event fires when any particular item is used on a block by an entity or player.

Type: [*ItemUseOnEventSignal*](ItemUseOnEventSignal.md)

### **leverActivate**
`read-only leverActivate: LeverActionEventSignal;`

This event fires when a lever activates or is deactivated.

Type: [*LeverActionEventSignal*](LeverActionEventSignal.md)

### **pistonActivate**
`read-only pistonActivate: PistonActivateEventSignal;`

This event fires when a piston expands or retracts.

Type: [*PistonActivateEventSignal*](PistonActivateEventSignal.md)

### **playerJoin**
`read-only playerJoin: PlayerJoinEventSignal;`

This event fires when a player joins a world.

Type: [*PlayerJoinEventSignal*](PlayerJoinEventSignal.md)

### **playerLeave**
`read-only playerLeave: PlayerLeaveEventSignal;`

This event fires when a player leaves a world.

Type: [*PlayerLeaveEventSignal*](PlayerLeaveEventSignal.md)

### **projectileHit**
`projectileHit: ProjectileHitEventSignal;`

This event fires when a projectile hits an entity or block.

Type: [*ProjectileHitEventSignal*](ProjectileHitEventSignal.md)

### **tick**
`read-only tick: TickEventSignal;`

This event fires every tick - which is 20 times per second.

Type: [*TickEventSignal*](TickEventSignal.md)

### **weatherChange**
`read-only weatherChange: WeatherChangeEventSignal;`

This event will be triggered when the weather changes within Minecraft.

Type: [*WeatherChangeEventSignal*](WeatherChangeEventSignal.md)

### **worldInitialize**
`read-only worldInitialize: WorldInitializeEventSignal;`

This event fires when the script environment is initialized on a World. In addition, you can register dynamic properties within the scope of a world Initialize event.

Type: [*WorldInitializeEventSignal*](WorldInitializeEventSignal.md)
