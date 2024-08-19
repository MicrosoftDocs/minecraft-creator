---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WorldBeforeEvents Class
description: Contents of the @minecraft/server.WorldBeforeEvents class.
---
# WorldBeforeEvents Class

A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event. Note that in before events any APIs that modify gameplay state will not function and will throw an error. (e.g., dimension.spawnEntity) 

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **chatSend**
`read-only chatSend: ChatSendBeforeEventSignal;`

This event is triggered after a chat message has been broadcast or sent to players.

Type: [*ChatSendBeforeEventSignal*](ChatSendBeforeEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **effectAdd**
`read-only effectAdd: EffectAddBeforeEventSignal;`

This event is triggered after an event has been added to an entity.

Type: [*EffectAddBeforeEventSignal*](EffectAddBeforeEventSignal.md)

### **entityRemove**
`read-only entityRemove: EntityRemoveBeforeEventSignal;`

Fires before an entity is removed from the world (for example, unloaded or removed after being killed.)

Type: [*EntityRemoveBeforeEventSignal*](EntityRemoveBeforeEventSignal.md)

### **explosion**
`read-only explosion: ExplosionBeforeEventSignal;`

This event is fired after an explosion occurs.

Type: [*ExplosionBeforeEventSignal*](ExplosionBeforeEventSignal.md)

### **itemUse**
`read-only itemUse: ItemUseBeforeEventSignal;`

This event fires when an item is successfully used by a player.

Type: [*ItemUseBeforeEventSignal*](ItemUseBeforeEventSignal.md)

### **itemUseOn**
`read-only itemUseOn: ItemUseOnBeforeEventSignal;`

This event fires when an item is used on a block by a player.

Type: [*ItemUseOnBeforeEventSignal*](ItemUseOnBeforeEventSignal.md)

### **playerBreakBlock**
`read-only playerBreakBlock: PlayerBreakBlockBeforeEventSignal;`

This event fires before a block is broken by a player.

Type: [*PlayerBreakBlockBeforeEventSignal*](PlayerBreakBlockBeforeEventSignal.md)

### **playerGameModeChange**
`read-only playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;`

Type: [*PlayerGameModeChangeBeforeEventSignal*](PlayerGameModeChangeBeforeEventSignal.md)

::: moniker range="=minecraft-bedrock-experimental"
### **playerInteractWithBlock**
`read-only playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;`

Fires before a player interacts with a block.

Type: [*PlayerInteractWithBlockBeforeEventSignal*](PlayerInteractWithBlockBeforeEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **playerInteractWithEntity**
`read-only playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;`

Fires before a player interacts with an entity.

Type: [*PlayerInteractWithEntityBeforeEventSignal*](PlayerInteractWithEntityBeforeEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **playerLeave**
`read-only playerLeave: PlayerLeaveBeforeEventSignal;`

Fires when a player leaves the game.

Type: [*PlayerLeaveBeforeEventSignal*](PlayerLeaveBeforeEventSignal.md)

::: moniker range="=minecraft-bedrock-experimental"
### **playerPlaceBlock**
`read-only playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;`

This event fires before a block is placed by a player.

Type: [*PlayerPlaceBlockBeforeEventSignal*](PlayerPlaceBlockBeforeEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **weatherChange**
`read-only weatherChange: WeatherChangeBeforeEventSignal;`

Type: [*WeatherChangeBeforeEventSignal*](WeatherChangeBeforeEventSignal.md)

### **worldInitialize**
`read-only worldInitialize: WorldInitializeBeforeEventSignal;`

This event fires immediately when the script environment is initialized on a World. Not all script functionality may be available. For guaranteed access to world state, use the world initialize after event.

Type: [*WorldInitializeBeforeEventSignal*](WorldInitializeBeforeEventSignal.md)
