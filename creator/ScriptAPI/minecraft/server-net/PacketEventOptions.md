---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-net.PacketEventOptions Interface
description: Contents of the @minecraft/server-net.PacketEventOptions class.
---
# PacketEventOptions Interface

Options for events triggered by network packets.

## Properties

### **ignoredPacketIds**
`ignoredPacketIds?: PacketId[];`

If provided, packet IDs in this list will not trigger the event subscriptions.

Type: [*PacketId*](PacketId.md)[]

### **monitoredPacketIds**
`monitoredPacketIds?: PacketId[];`

If provided only packet IDs in this list will trigger the event subscriptions.

Type: [*PacketId*](PacketId.md)[]
