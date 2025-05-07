---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityHitEntityAfterEventSignal Class
description: Contents of the @minecraft/server.EntityHitEntityAfterEventSignal class (Version 1.x.x).
---
# EntityHitEntityAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityHitEntityAfterEventSignal.md).

Manages callbacks that are connected to when an entity makes a melee attack on another entity.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: EntityHitEntityAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHitEntityAfterEvent) => void
`

Adds a callback that will be called when an entity hits another entity.

#### **Parameters**
- **callback**: (arg0: [*EntityHitEntityAfterEvent*](EntityHitEntityAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

**Returns** (arg0: [*EntityHitEntityAfterEvent*](EntityHitEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void
`

Removes a callback from being called when an entity makes a melee attack on another entity.

#### **Parameters**
- **callback**: (arg0: [*EntityHitEntityAfterEvent*](EntityHitEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
