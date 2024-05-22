---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EffectAddAfterEventSignal Class
description: Contents of the @minecraft/server.EffectAddAfterEventSignal class.
---
# EffectAddAfterEventSignal Class

Manages callbacks that are connected to when an effect is added to an entity.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EffectAddAfterEvent) => void, options?: EntityEventOptions): (arg: EffectAddAfterEvent) => void
`

Adds a callback that will be called when an effect is added to an entity.

#### **Parameters**
- **callback**: (arg: [*EffectAddAfterEvent*](EffectAddAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

**Returns** (arg: [*EffectAddAfterEvent*](EffectAddAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EffectAddAfterEvent) => void): void
`

Removes a callback from being called when an effect is added to an entity.

#### **Parameters**
- **callback**: (arg: [*EffectAddAfterEvent*](EffectAddAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
