---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerEmoteAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerEmoteAfterEventSignal class.
---
# PlayerEmoteAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg0: [*PlayerEmoteAfterEvent*](PlayerEmoteAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerEmoteAfterEvent*](PlayerEmoteAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg0: [*PlayerEmoteAfterEvent*](PlayerEmoteAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
