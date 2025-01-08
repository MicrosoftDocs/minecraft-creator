---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ModeChangeAfterEventSignal Class
description: Contents of the @minecraft/server-editor.ModeChangeAfterEventSignal class.
---
# ModeChangeAfterEventSignal Class

Manages callbacks that are connected to when a player editor mode changes.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ModeChangeAfterEvent) => void): (arg0: ModeChangeAfterEvent) => void
`

Subscribes the specified callback to an editor mode change after event.

#### **Parameters**
- **callback**: (arg0: [*ModeChangeAfterEvent*](ModeChangeAfterEvent.md)) => *void*

**Returns** (arg0: [*ModeChangeAfterEvent*](ModeChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ModeChangeAfterEvent) => void): void
`

Removes the specified callback from an editor mode change after event.

#### **Parameters**
- **callback**: (arg0: [*ModeChangeAfterEvent*](ModeChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
