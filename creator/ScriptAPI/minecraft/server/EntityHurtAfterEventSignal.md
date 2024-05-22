---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityHurtAfterEventSignal Class
description: Contents of the @minecraft/server.EntityHurtAfterEventSignal class.
---
# EntityHurtAfterEventSignal Class

Manages callbacks that are connected to when an entity is hurt.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityHurtAfterEvent) => void, options?: EntityEventOptions): (arg: EntityHurtAfterEvent) => void
`

Adds a callback that will be called when an entity is hurt.

#### **Parameters**
- **callback**: (arg: [*EntityHurtAfterEvent*](EntityHurtAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

**Returns** (arg: [*EntityHurtAfterEvent*](EntityHurtAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void
`

Removes a callback from being called when an entity is hurt.

#### **Parameters**
- **callback**: (arg: [*EntityHurtAfterEvent*](EntityHurtAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
