---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityRemoveAfterEventSignal Class
description: Contents of the @minecraft/server.EntityRemoveAfterEventSignal class.
---
# EntityRemoveAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityRemoveAfterEvent) => void, options?: EntityEventOptions): (arg: EntityRemoveAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*EntityRemoveAfterEvent*](EntityRemoveAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

#### **Returns** (arg: [*EntityRemoveAfterEvent*](EntityRemoveAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityRemoveAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*EntityRemoveAfterEvent*](EntityRemoveAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
