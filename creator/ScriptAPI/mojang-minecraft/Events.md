---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
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
`beforeChat: BeforeChatEventSignal;`

This event fires before a chat message is broadcast or delivered. The event can be canceled, and the message can also be updated.

Type: [*BeforeChatEventSignal*](BeforeChatEventSignal.md)


### **beforeExplosion**
`beforeExplosion: BeforeExplosionEventSignal;`

This event is fired before an explosion occurs.

Type: [*BeforeExplosionEventSignal*](BeforeExplosionEventSignal.md)


### **beforeItemDefinitionEvent**
`beforeItemDefinitionEvent: BeforeItemDefinitionEventSignal;`

For custom items, this event is triggered before the set of defined components for the item change in response to a triggered event. Note that this event is only fired for custom data-driven items.

Type: [*BeforeItemDefinitionEventSignal*](BeforeItemDefinitionEventSignal.md)


### **beforeItemUse**
`beforeItemUse: BeforeItemUseEventSignal;`

This event fires before an item is used by an entity or player.

Type: [*BeforeItemUseEventSignal*](BeforeItemUseEventSignal.md)


### **beforeItemUseOn**
`beforeItemUseOn: BeforeItemUseOnEventSignal;`

This event fires before an item is used on a block by an entity or player.

Type: [*BeforeItemUseOnEventSignal*](BeforeItemUseOnEventSignal.md)


### **beforePistonActivate**
`beforePistonActivate: BeforePistonActivateEventSignal;`

Fires before a piston is activated.

Type: [*BeforePistonActivateEventSignal*](BeforePistonActivateEventSignal.md)


### **blockBreak**
`blockBreak: BlockBreakEventSignal;`

This event fires for a block that is broken by a player.

Type: [*BlockBreakEventSignal*](BlockBreakEventSignal.md)


### **blockExplode**
`blockExplode: BlockExplodeEventSignal;`

This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.

Type: [*BlockExplodeEventSignal*](BlockExplodeEventSignal.md)


### **blockPlace**
`blockPlace: BlockPlaceEventSignal;`

This event fires for a block that is placed by a player.

Type: [*BlockPlaceEventSignal*](BlockPlaceEventSignal.md)


### **chat**
`chat: ChatEventSignal;`

This event is triggered after a chat message has been broadcast or sent to players.

Type: [*ChatEventSignal*](ChatEventSignal.md)


### **effectAdd**
`effectAdd: EffectAddEventSignal;`

This event fires when an effect, like poisoning, is added to an entity.

Type: [*EffectAddEventSignal*](EffectAddEventSignal.md)


### **entityCreate**
`entityCreate: EntityCreateEventSignal;`

This event fires when a new entity is created.

Type: [*EntityCreateEventSignal*](EntityCreateEventSignal.md)


### **explosion**
`explosion: ExplosionEventSignal;`

This event is fired after an explosion occurs.

Type: [*ExplosionEventSignal*](ExplosionEventSignal.md)


### **itemDefinitionEvent**
`itemDefinitionEvent: ItemDefinitionEventSignal;`

For custom items, this event is triggered when the fundamental set of defined components for the item change.  Note that this event is only fired for custom data-driven items.

Type: [*ItemDefinitionEventSignal*](ItemDefinitionEventSignal.md)


### **itemUse**
`itemUse: ItemUseEventSignal;`

This event fires when any particular item is used by an entity or player.

Type: [*ItemUseEventSignal*](ItemUseEventSignal.md)


### **itemUseOn**
`itemUseOn: ItemUseOnEventSignal;`

This event fires when any particular item is used on a block by an entity or player.

Type: [*ItemUseOnEventSignal*](ItemUseOnEventSignal.md)


### **pistonActivate**
`pistonActivate: PistonActivateEventSignal;`

This event fires when a piston expands or retracts.

Type: [*PistonActivateEventSignal*](PistonActivateEventSignal.md)


### **playerJoin**
`playerJoin: PlayerJoinEventSignal;`

This event fires when a player joins a world.

Type: [*PlayerJoinEventSignal*](PlayerJoinEventSignal.md)


### **playerLeave**
`playerLeave: PlayerLeaveEventSignal;`

This event fires when a player leaves a world.

Type: [*PlayerLeaveEventSignal*](PlayerLeaveEventSignal.md)


### **tick**
`tick: TickEventSignal;`

This event fires every tick - which is 20 times per second.

Type: [*TickEventSignal*](TickEventSignal.md)


### **weatherChange**
`weatherChange: WeatherChangeEventSignal;`

This event will be triggered when the weather changes within Minecraft.

Type: [*WeatherChangeEventSignal*](WeatherChangeEventSignal.md)




