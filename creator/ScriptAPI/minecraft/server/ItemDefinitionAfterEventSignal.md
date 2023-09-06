---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.ItemDefinitionAfterEventSignal Class
description: Contents of the @minecraft/server.ItemDefinitionAfterEventSignal class.
ms.service: minecraft-bedrock-edition
---
# ItemDefinitionAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to an item's definition and components changing.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemDefinitionTriggeredAfterEvent) => void): (arg: ItemDefinitionTriggeredAfterEvent) => void
`

Adds a callback that will be called when an item's definition and components change.

#### **Parameters**
- **callback**: (arg: [*ItemDefinitionTriggeredAfterEvent*](ItemDefinitionTriggeredAfterEvent.md)) => *void*

#### **Returns** (arg: [*ItemDefinitionTriggeredAfterEvent*](ItemDefinitionTriggeredAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemDefinitionTriggeredAfterEvent) => void): void
`

Removes a callback from being called when an item's definition and components change.

#### **Parameters**
- **callback**: (arg: [*ItemDefinitionTriggeredAfterEvent*](ItemDefinitionTriggeredAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
