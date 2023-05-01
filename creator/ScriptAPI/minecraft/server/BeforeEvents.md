---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BeforeEvents Class
description: Contents of the @minecraft/server.BeforeEvents class.
---
# BeforeEvents Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event. Note that in before events any APIs that modify gameplay state will not function and will throw an error. (e.g., dimension.spawnEntity) 

## Properties

### **chatSend**
`read-only chatSend: ChatSendBeforeEventSignal;`

This event is triggered after a chat message has been broadcast or sent to players.

Type: [*ChatSendBeforeEventSignal*](ChatSendBeforeEventSignal.md)

### **dataDrivenEntityTriggerEvent**
`read-only dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerBeforeEventSignal;`

This event is fired when an entity event has been triggered that will update the component definition state of an entity.

Type: [*DataDrivenEntityTriggerBeforeEventSignal*](DataDrivenEntityTriggerBeforeEventSignal.md)

### **explosion**
`read-only explosion: ExplosionBeforeEventSignal;`

This event is fired after an explosion occurs.

Type: [*ExplosionBeforeEventSignal*](ExplosionBeforeEventSignal.md)

### **itemDefinitionEvent**
`read-only itemDefinitionEvent: ItemDefinitionBeforeEventSignal;`

For custom items, this event is triggered when the fundamental set of defined components for the item change.  Note that this event is only fired for custom data-driven items.

Type: [*ItemDefinitionBeforeEventSignal*](ItemDefinitionBeforeEventSignal.md)

### **itemUse**
`read-only itemUse: ItemUseBeforeEventSignal;`

This event fires when an item is successfully used by a player.

Type: [*ItemUseBeforeEventSignal*](ItemUseBeforeEventSignal.md)

### **itemUseOn**
`read-only itemUseOn: ItemUseOnBeforeEventSignal;`

This event fires when an item is used on a block by a player.

Type: [*ItemUseOnBeforeEventSignal*](ItemUseOnBeforeEventSignal.md)

### **pistonActivate**
`read-only pistonActivate: PistonActivateBeforeEventSignal;`

This event fires when a piston expands or retracts.

Type: [*PistonActivateBeforeEventSignal*](PistonActivateBeforeEventSignal.md)
