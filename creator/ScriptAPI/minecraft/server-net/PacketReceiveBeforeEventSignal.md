---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-net.PacketReceiveBeforeEventSignal Class
description: Contents of the @minecraft/server-net.PacketReceiveBeforeEventSignal class.
---
# PacketReceiveBeforeEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PacketReceivedBeforeEvent) => void, options?: PacketEventOptions): (arg: PacketReceivedBeforeEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PacketReceivedBeforeEvent*](PacketReceivedBeforeEvent.md)) => *void*
- **options**?: [*PacketEventOptions*](PacketEventOptions.md) = `null`

**Returns** (arg: [*PacketReceivedBeforeEvent*](PacketReceivedBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PacketReceivedBeforeEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*PacketReceivedBeforeEvent*](PacketReceivedBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
