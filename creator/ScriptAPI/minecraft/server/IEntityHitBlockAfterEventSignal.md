---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IEntityHitBlockAfterEventSignal Class
description: Contents of the @minecraft/server.IEntityHitBlockAfterEventSignal class.
---
# IEntityHitBlockAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IEntityHitBlockAfterEventSignal
- [*EntityHitBlockAfterEventSignal*](EntityHitBlockAfterEventSignal.md)

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityHitBlockAfterEvent) => void, options?: EntityEventOptions): (arg: EntityHitBlockAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*EntityHitBlockAfterEvent*](EntityHitBlockAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

#### **Returns** (arg: [*EntityHitBlockAfterEvent*](EntityHitBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*EntityHitBlockAfterEvent*](EntityHitBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
