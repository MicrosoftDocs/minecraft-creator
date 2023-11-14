---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.MessageReceiveAfterEvent Class
description: Contents of the @minecraft/server.MessageReceiveAfterEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# MessageReceiveAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

A specific currently-internal event used for passing messages from client to server.

## Properties

### **id**
`read-only id: string;`

The message identifier.

Type: *string*

### **message**
`read-only message: string;`

The message.

Type: *string*

### **player**
`read-only player: Player;`

The player who sent the message.

Type: [*Player*](Player.md)
