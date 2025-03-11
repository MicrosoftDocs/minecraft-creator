---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-net.PacketReceivedBeforeEvent Class
description: Contents of the @minecraft/server-net.PacketReceivedBeforeEvent class.
---
# PacketReceivedBeforeEvent Class

Sent as the server receives a network packet from a client.  If cancelled, the server will not parse the network packet and will silently ignore it.

## Properties

### **cancel**
`cancel: boolean;`

Type: *boolean*

### **packetId**
`read-only packetId: PacketId;`

The type of network packet.

Type: [*PacketId*](PacketId.md)

### **packetSize**
`read-only packetSize: number;`

The size of the network packet in bytes.

Type: *number*

### **sender**
`read-only sender?: minecraftserver.Player;`

Which client sent the network packet to the game server.

Type: [*@minecraft/server.Player*](../../../scriptapi/minecraft/server/Player.md)
