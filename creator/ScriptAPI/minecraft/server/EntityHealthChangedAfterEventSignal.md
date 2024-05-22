---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityHealthChangedAfterEventSignal Class
description: Contents of the @minecraft/server.EntityHealthChangedAfterEventSignal class.
---
# EntityHealthChangedAfterEventSignal Class

Manages callbacks that are connected to when the health of an entity changes.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityHealthChangedAfterEvent) => void, options?: EntityEventOptions): (arg: EntityHealthChangedAfterEvent) => void
`

Adds a callback that will be called when the health of an entity changes.

#### **Parameters**
- **callback**: (arg: [*EntityHealthChangedAfterEvent*](EntityHealthChangedAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

**Returns** (arg: [*EntityHealthChangedAfterEvent*](EntityHealthChangedAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void
`

Removes a callback from being called when the health of an entity changes.

#### **Parameters**
- **callback**: (arg: [*EntityHealthChangedAfterEvent*](EntityHealthChangedAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
