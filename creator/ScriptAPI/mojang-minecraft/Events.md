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
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

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


### **beforePistonActivate**
`beforePistonActivate: BeforePistonActivateEventSignal;`

Fires before a piston is activated.

Type: [*BeforePistonActivateEventSignal*](BeforePistonActivateEventSignal.md)


### **blockExplode**
`blockExplode: BlockExplodeEventSignal;`

This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.

Type: [*BlockExplodeEventSignal*](BlockExplodeEventSignal.md)


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


### **pistonActivate**
`pistonActivate: PistonActivateEventSignal;`

This event fires when a piston expands or retracts.

Type: [*PistonActivateEventSignal*](PistonActivateEventSignal.md)


### **tick**
`tick: TickEventSignal;`

This event fires every tick - which is 20 times per second.

Type: [*TickEventSignal*](TickEventSignal.md)


### **weatherChange**
`weatherChange: WeatherChangeEventSignal;`

This event will be triggered when the weather changes within Minecraft.

Type: [*WeatherChangeEventSignal*](WeatherChangeEventSignal.md)




