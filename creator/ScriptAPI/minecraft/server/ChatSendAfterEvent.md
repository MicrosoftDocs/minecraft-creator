---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ChatSendAfterEvent Class
description: Contents of the @minecraft/server.ChatSendAfterEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ChatSendAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

An event that fires as players enter chat messages.

## Properties

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
