---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ExplosionAfterEventSignal Class
description: Contents of the @minecraft/server.ExplosionAfterEventSignal class.
---
# ExplosionAfterEventSignal Class

Manages callbacks that are connected to when an explosion occurs.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void
`

Adds a callback that will be called when an explosion occurs.

#### **Parameters**
- **callback**: (arg: [*ExplosionAfterEvent*](ExplosionAfterEvent.md)) => *void*

**Returns** (arg: [*ExplosionAfterEvent*](ExplosionAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void
`

Removes a callback from being called when an explosion occurs.

#### **Parameters**
- **callback**: (arg: [*ExplosionAfterEvent*](ExplosionAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
