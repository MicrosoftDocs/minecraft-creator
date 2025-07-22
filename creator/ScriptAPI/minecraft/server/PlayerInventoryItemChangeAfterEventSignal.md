---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerInventoryItemChangeAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerInventoryItemChangeAfterEventSignal class.
---
# PlayerInventoryItemChangeAfterEventSignal Class

Manages callbacks that are connected after a player's inventory item is changed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void, options?: InventoryItemEventOptions): (arg0: PlayerInventoryItemChangeAfterEvent) => void
`

Adds a callback that will be called after a player's inventory item is changed.

#### **Parameters**
- **callback**: (arg0: [*PlayerInventoryItemChangeAfterEvent*](PlayerInventoryItemChangeAfterEvent.md)) => *void*
  
  Function callback that is called when this event fires.
- **options**?: [*InventoryItemEventOptions*](InventoryItemEventOptions.md) = `null`
  
  Additional filtering options for the event subscription.

**Returns** (arg0: [*PlayerInventoryItemChangeAfterEvent*](PlayerInventoryItemChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void
`

Removes a callback from being called after a player's inventory item is changed.

#### **Parameters**
- **callback**: (arg0: [*PlayerInventoryItemChangeAfterEvent*](PlayerInventoryItemChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
