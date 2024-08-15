---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.CurrentThemeChangeAfterEventSignal Class
description: Contents of the @minecraft/server-editor.CurrentThemeChangeAfterEventSignal class.
---
# CurrentThemeChangeAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: CurrentThemeChangeAfterEvent) => void): (arg: CurrentThemeChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*CurrentThemeChangeAfterEvent*](CurrentThemeChangeAfterEvent.md)) => *void*

**Returns** (arg: [*CurrentThemeChangeAfterEvent*](CurrentThemeChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: CurrentThemeChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*CurrentThemeChangeAfterEvent*](CurrentThemeChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
