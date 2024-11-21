---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerButtonInputAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerButtonInputAfterEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerButtonInputAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to player inputs.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerButtonInputAfterEvent) => void, options?: InputEventOptions): (arg: PlayerButtonInputAfterEvent) => void
`

Adds a callback that will be called after the player performs an input.

#### **Parameters**
- **callback**: (arg: [*PlayerButtonInputAfterEvent*](PlayerButtonInputAfterEvent.md)) => *void*
- **options**?: [*InputEventOptions*](InputEventOptions.md) = `null`

**Returns** (arg: [*PlayerButtonInputAfterEvent*](PlayerButtonInputAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerButtonInputAfterEvent) => void): void
`

Removes a callback from being called after the player performs an input.

#### **Parameters**
- **callback**: (arg: [*PlayerButtonInputAfterEvent*](PlayerButtonInputAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.