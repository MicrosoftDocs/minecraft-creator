---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WorldInitializeAfterEventSignal Class
description: Contents of the @minecraft/server.WorldInitializeAfterEventSignal class.
---
# WorldInitializeAfterEventSignal Class

Manages callbacks that are run on the first tick of the World. Do note that this event may run multiple times within a session in the case that the /reload command is used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: WorldInitializeAfterEvent) => void): (arg0: WorldInitializeAfterEvent) => void
`

Adds a callback that will be called when the scripting environment is initialized for a World.

#### **Parameters**
- **callback**: (arg0: [*WorldInitializeAfterEvent*](WorldInitializeAfterEvent.md)) => *void*

**Returns** (arg0: [*WorldInitializeAfterEvent*](WorldInitializeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: WorldInitializeAfterEvent) => void): void
`

Removes a callback from being called the scripting environment is initialized for a World.

#### **Parameters**
- **callback**: (arg0: [*WorldInitializeAfterEvent*](WorldInitializeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
