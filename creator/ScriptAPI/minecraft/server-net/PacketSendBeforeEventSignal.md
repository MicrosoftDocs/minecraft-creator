---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-net.PacketSendBeforeEventSignal Class
description: Contents of the @minecraft/server-net.PacketSendBeforeEventSignal class.
---
# PacketSendBeforeEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PacketSendBeforeEvent) => void, options?: PacketEventOptions): (arg0: PacketSendBeforeEvent) => void
`

#### **Parameters**
- **callback**: (arg0: [*PacketSendBeforeEvent*](PacketSendBeforeEvent.md)) => *void*
- **options**?: [*PacketEventOptions*](PacketEventOptions.md) = `null`

**Returns** (arg0: [*PacketSendBeforeEvent*](PacketSendBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PacketSendBeforeEvent) => void): void
`

#### **Parameters**
- **callback**: (arg0: [*PacketSendBeforeEvent*](PacketSendBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
