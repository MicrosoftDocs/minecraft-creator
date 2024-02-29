---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WorldInitializeBeforeEventSignal Class
description: Contents of the @minecraft/server.WorldInitializeBeforeEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# WorldInitializeBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are run at the initialization of the scripting environment for a World. Do note that this event may run multiple times within a session in the case that the /reload command is used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: WorldInitializeBeforeEvent) => void): (arg: WorldInitializeBeforeEvent) => void
`

Adds a callback that will be called when the scripting environment is initialized for a World.

#### **Parameters**
- **callback**: (arg: [*WorldInitializeBeforeEvent*](WorldInitializeBeforeEvent.md)) => *void*

#### **Returns** (arg: [*WorldInitializeBeforeEvent*](WorldInitializeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: WorldInitializeBeforeEvent) => void): void
`

Removes a callback from being called the scripting environment is initialized for a World.

#### **Parameters**
- **callback**: (arg: [*WorldInitializeBeforeEvent*](WorldInitializeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
