---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.DataStorePayloadAfterEventSignal Class
description: Contents of the @minecraft/server-editor.DataStorePayloadAfterEventSignal class.
---
# DataStorePayloadAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: DataStorePayloadAfterEvent) => void): (arg: DataStorePayloadAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*DataStorePayloadAfterEvent*](DataStorePayloadAfterEvent.md)) => *void*

#### **Returns** (arg: [*DataStorePayloadAfterEvent*](DataStorePayloadAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: DataStorePayloadAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*DataStorePayloadAfterEvent*](DataStorePayloadAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
