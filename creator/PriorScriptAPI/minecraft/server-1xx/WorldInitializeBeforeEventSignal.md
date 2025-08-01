---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.WorldInitializeBeforeEventSignal Class
description: Contents of the @minecraft/server.WorldInitializeBeforeEventSignal class (Version 1.x.x).
---
# WorldInitializeBeforeEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module.

> [!CAUTION]
> This class is deprecated and will be removed in 2.0.0.

Manages callbacks that are run at the initialization of the scripting environment for a World. Do note that this event may run multiple times within a session in the case that the /reload command is used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: WorldInitializeBeforeEvent) => void): (arg0: WorldInitializeBeforeEvent) => void
`

Adds a callback that will be called when the scripting environment is initialized for a World.

#### **Parameters**
- **callback**: (arg0: [*WorldInitializeBeforeEvent*](WorldInitializeBeforeEvent.md)) => *void*

**Returns** (arg0: [*WorldInitializeBeforeEvent*](WorldInitializeBeforeEvent.md)) => *void*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: WorldInitializeBeforeEvent) => void): void
`

Removes a callback from being called the scripting environment is initialized for a World.

#### **Parameters**
- **callback**: (arg0: [*WorldInitializeBeforeEvent*](WorldInitializeBeforeEvent.md)) => *void*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
