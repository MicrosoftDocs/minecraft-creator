---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerHotbarSelectedSlotChangeAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerHotbarSelectedSlotChangeAfterEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerHotbarSelectedSlotChangeAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected after a player selected hotbar slot is changed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void, options?: HotbarEventOptions): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void
`

Adds a callback that will be called after a player selected hotbar slot is changed.

#### **Parameters**
- **callback**: (arg0: [*PlayerHotbarSelectedSlotChangeAfterEvent*](PlayerHotbarSelectedSlotChangeAfterEvent.md)) => *void*
  
  Function callback that is called when this event fires.
- **options**?: [*HotbarEventOptions*](HotbarEventOptions.md) = `null`
  
  Additional filtering options for the event subscription.

**Returns** (arg0: [*PlayerHotbarSelectedSlotChangeAfterEvent*](PlayerHotbarSelectedSlotChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void
`

Removes a callback from being called after a player selected hotbar slot is changed.

#### **Parameters**
- **callback**: (arg0: [*PlayerHotbarSelectedSlotChangeAfterEvent*](PlayerHotbarSelectedSlotChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
