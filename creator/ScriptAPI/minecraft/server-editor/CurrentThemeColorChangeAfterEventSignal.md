---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.CurrentThemeColorChangeAfterEventSignal Class
description: Contents of the @minecraft/server-editor.CurrentThemeColorChangeAfterEventSignal class.
---
# CurrentThemeColorChangeAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: CurrentThemeColorChangeAfterEvent) => void): (arg: CurrentThemeColorChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*CurrentThemeColorChangeAfterEvent*](CurrentThemeColorChangeAfterEvent.md)) => *void*

**Returns** (arg: [*CurrentThemeColorChangeAfterEvent*](CurrentThemeColorChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: CurrentThemeColorChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*CurrentThemeColorChangeAfterEvent*](CurrentThemeColorChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
