---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ExplosionBeforeEventSignal Class
description: Contents of the @minecraft/server.ExplosionBeforeEventSignal class (Version 1.x.x).
---
# ExplosionBeforeEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ExplosionBeforeEventSignal.md).

Manages callbacks that are connected to before an explosion occurs.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void
`

Adds a callback that will be called when before an explosion occurs. The callback can optionally change or cancel explosion behavior.

#### **Parameters**
- **callback**: (arg0: [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)) => *void*

**Returns** (arg0: [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void
`

Removes a callback from being called from before when an explosion would occur.

#### **Parameters**
- **callback**: (arg0: [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
