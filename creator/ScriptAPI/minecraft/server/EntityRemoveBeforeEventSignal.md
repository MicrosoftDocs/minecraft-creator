---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityRemoveBeforeEventSignal Class
description: Contents of the @minecraft/server.EntityRemoveBeforeEventSignal class.
---
# EntityRemoveBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*EntityRemoveBeforeEvent*](EntityRemoveBeforeEvent.md)) => *void*

#### **Returns** (arg: [*EntityRemoveBeforeEvent*](EntityRemoveBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*EntityRemoveBeforeEvent*](EntityRemoveBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
