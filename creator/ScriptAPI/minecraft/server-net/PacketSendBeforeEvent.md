---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-net.PacketSendBeforeEvent Class
description: Contents of the @minecraft/server-net.PacketSendBeforeEvent class.
---
# PacketSendBeforeEvent Class

Sent as the server sends a network packet to clients.  If cancelled, the server will not send the network packet to the receiving clients.

## Properties

### **cancel**
`cancel: boolean;`

Type: *boolean*

### **packetId**
`read-only packetId: PacketId;`

The type of network packet.

Type: [*PacketId*](PacketId.md)

### **recipients**
`read-only recipients: (minecraftserver.Player | undefined)[];`

Which clients the network packet is being sent to.

Type: ([*@minecraft/server.Player*](../../../scriptapi/minecraft/server/Player.md) | *undefined*)[]
