---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-net.PacketSendBeforeEventSignal Class
description: Contents of the @minecraft/server-net.PacketSendBeforeEventSignal class.
---
# PacketSendBeforeEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PacketSendBeforeEvent) => void, options?: PacketEventOptions): (arg: PacketSendBeforeEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PacketSendBeforeEvent*](PacketSendBeforeEvent.md)) => *void*
- **options**?: [*PacketEventOptions*](PacketEventOptions.md) = `null`

**Returns** (arg: [*PacketSendBeforeEvent*](PacketSendBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PacketSendBeforeEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*PacketSendBeforeEvent*](PacketSendBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
