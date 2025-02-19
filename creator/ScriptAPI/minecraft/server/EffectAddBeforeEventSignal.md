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
subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void
`

Adds a callback that will be called when an effect is added to an entity.

#### **Parameters**
- **callback**: (arg0: [*EffectAddBeforeEvent*](EffectAddBeforeEvent.md)) => *void*

**Returns** (arg0: [*EffectAddBeforeEvent*](EffectAddBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void
`

Removes a callback from being called when an effect is added to an entity.

#### **Parameters**
- **callback**: (arg0: [*EffectAddBeforeEvent*](EffectAddBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
