---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EffectAddBeforeEventSignal Class
description: Contents of the @minecraft/server.EffectAddBeforeEventSignal class.
---
# EffectAddBeforeEventSignal Class

Manages callbacks that are connected to when an effect is added to an entity.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void
`

Adds a callback that will be called when an effect is added to an entity.

#### **Parameters**
- **callback**: (arg: [*EffectAddBeforeEvent*](EffectAddBeforeEvent.md)) => *void*

**Returns** (arg: [*EffectAddBeforeEvent*](EffectAddBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void
`

Removes a callback from being called when an effect is added to an entity.

#### **Parameters**
- **callback**: (arg: [*EffectAddBeforeEvent*](EffectAddBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
