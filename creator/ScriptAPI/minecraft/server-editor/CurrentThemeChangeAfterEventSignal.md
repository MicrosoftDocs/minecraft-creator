---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.CurrentThemeChangeAfterEventSignal Class
description: Contents of the @minecraft/server-editor.CurrentThemeChangeAfterEventSignal class.
---
# CurrentThemeChangeAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: CurrentThemeChangeAfterEvent) => void): (arg0: CurrentThemeChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg0: [*CurrentThemeChangeAfterEvent*](CurrentThemeChangeAfterEvent.md)) => *void*

**Returns** (arg0: [*CurrentThemeChangeAfterEvent*](CurrentThemeChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: CurrentThemeChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg0: [*CurrentThemeChangeAfterEvent*](CurrentThemeChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
