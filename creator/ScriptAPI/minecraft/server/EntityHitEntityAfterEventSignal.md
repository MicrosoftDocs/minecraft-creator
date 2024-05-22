---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityHitEntityAfterEventSignal Class
description: Contents of the @minecraft/server.EntityHitEntityAfterEventSignal class.
---
# EntityHitEntityAfterEventSignal Class

Manages callbacks that are connected to when an entity makes a melee attack on another entity.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityHitEntityAfterEvent) => void, options?: EntityEventOptions): (arg: EntityHitEntityAfterEvent) => void
`

Adds a callback that will be called when an entity hits another entity.

#### **Parameters**
- **callback**: (arg: [*EntityHitEntityAfterEvent*](EntityHitEntityAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

**Returns** (arg: [*EntityHitEntityAfterEvent*](EntityHitEntityAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void
`

Removes a callback from being called when an entity makes a melee attack on another entity.

#### **Parameters**
- **callback**: (arg: [*EntityHitEntityAfterEvent*](EntityHitEntityAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
