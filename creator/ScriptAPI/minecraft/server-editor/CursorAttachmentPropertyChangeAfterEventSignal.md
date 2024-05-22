---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.CursorAttachmentPropertyChangeAfterEventSignal Class
description: Contents of the @minecraft/server-editor.CursorAttachmentPropertyChangeAfterEventSignal class.
---
# CursorAttachmentPropertyChangeAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void): (arg: CursorAttachmentPropertiesChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*CursorAttachmentPropertiesChangeAfterEvent*](CursorAttachmentPropertiesChangeAfterEvent.md)) => *void*

**Returns** (arg: [*CursorAttachmentPropertiesChangeAfterEvent*](CursorAttachmentPropertiesChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*CursorAttachmentPropertiesChangeAfterEvent*](CursorAttachmentPropertiesChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
