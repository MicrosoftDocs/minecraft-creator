---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ExplosionBeforeEventSignal Class
description: Contents of the @minecraft/server.ExplosionBeforeEventSignal class.
---
# ExplosionBeforeEventSignal Class

Manages callbacks that are connected to before an explosion occurs.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void
`

Adds a callback that will be called when before an explosion occurs. The callback can optionally change or cancel explosion behavior.

#### **Parameters**
- **callback**: (arg: [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)) => *void*

**Returns** (arg: [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void
`

Removes a callback from being called from before when an explosion would occur.

#### **Parameters**
- **callback**: (arg: [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
