---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-net.NetworkBeforeEvents Class
description: Contents of the @minecraft/server-net.NetworkBeforeEvents class.
---
# NetworkBeforeEvents Class

## Properties

### **packetReceive**
`read-only packetReceive: PacketReceiveBeforeEventSignal;`

Type: [*PacketReceiveBeforeEventSignal*](PacketReceiveBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **packetSend**
`read-only packetSend: PacketSendBeforeEventSignal;`

Type: [*PacketSendBeforeEventSignal*](PacketSendBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.
