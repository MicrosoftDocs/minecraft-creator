---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ModeChangeAfterEventSignal Class
description: Contents of the @minecraft/server-editor.ModeChangeAfterEventSignal class.
---
# ModeChangeAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ModeChangeAfterEvent) => void): (arg: ModeChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ModeChangeAfterEvent*](ModeChangeAfterEvent.md)) => *void*

#### **Returns** (arg: [*ModeChangeAfterEvent*](ModeChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ModeChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ModeChangeAfterEvent*](ModeChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
