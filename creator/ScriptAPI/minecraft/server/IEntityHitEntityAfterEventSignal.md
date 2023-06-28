---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IEntityHitEntityAfterEventSignal Class
description: Contents of the @minecraft/server.IEntityHitEntityAfterEventSignal class.
---
# IEntityHitEntityAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IEntityHitEntityAfterEventSignal
- [*EntityHitEntityAfterEventSignal*](EntityHitEntityAfterEventSignal.md)

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityHitEntityAfterEvent) => void, options?: EntityEventOptions): (arg: EntityHitEntityAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*EntityHitEntityAfterEvent*](EntityHitEntityAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

#### **Returns** (arg: [*EntityHitEntityAfterEvent*](EntityHitEntityAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*EntityHitEntityAfterEvent*](EntityHitEntityAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
