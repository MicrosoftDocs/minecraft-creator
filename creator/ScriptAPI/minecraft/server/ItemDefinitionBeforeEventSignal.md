---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemDefinitionBeforeEventSignal Class
description: Contents of the @minecraft/server.ItemDefinitionBeforeEventSignal class.
---
# ItemDefinitionBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to an item's definition and components changing.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void): (arg: ItemDefinitionTriggeredBeforeEvent) => void
`

Adds a callback that will be called when an item's definition and components change.

#### **Parameters**
- **callback**: (arg: [*ItemDefinitionTriggeredBeforeEvent*](ItemDefinitionTriggeredBeforeEvent.md)) => *void*

#### **Returns** (arg: [*ItemDefinitionTriggeredBeforeEvent*](ItemDefinitionTriggeredBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void): void
`

Removes a callback from being called when an item's definition and components change.

#### **Parameters**
- **callback**: (arg: [*ItemDefinitionTriggeredBeforeEvent*](ItemDefinitionTriggeredBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
