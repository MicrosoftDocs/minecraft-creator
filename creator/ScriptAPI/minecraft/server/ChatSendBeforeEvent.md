---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ChatSendBeforeEvent Class
description: Contents of the @minecraft/server.ChatSendBeforeEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ChatSendBeforeEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

An event that fires as players enter chat messages.

## Properties

### **cancel**
`cancel: boolean;`

If set to true in a beforeChat event handler, this message is not broadcast out.

Type: *boolean*

### **message**
`read-only message: string;`

Message that is being broadcast.

Type: *string*

### **sender**
`read-only sender: Player;`

Player that sent the chat message.

Type: [*Player*](Player.md)

### **targets**
`read-only targets?: Player[];`

Optional list of players that will receive this message. If defined, this message is directly targeted to one or more players (i.e., is not broadcast.)

Type: [*Player*](Player.md)[]
