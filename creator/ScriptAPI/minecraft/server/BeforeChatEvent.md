---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BeforeChatEvent Class
description: Contents of the @minecraft/server.BeforeChatEvent class.
---
# BeforeChatEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

An event that fires as players enter chat messages.

## Properties

### **cancel**
`cancel: boolean;`

If set to true in a beforeChat event handler, this message is not broadcast out.

Type: *boolean*

### **message**
`message: string;`

Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.

Type: *string*

### **sender**
`sender: Player;`

Player that sent the chat message.

Type: [*Player*](Player.md)

### **sendToTargets**
`sendToTargets: boolean;`

If true, this message is directly targeted to one or more players (i.e., is not broadcast.)

Type: *boolean*

## Methods
- [getTargets](#gettargets)
- [setTargets](#settargets)

### **getTargets**
`
getTargets(): Player[]
`

Returns a list of players that will receive this message.

#### **Returns** [*Player*](Player.md)[]

### **setTargets**
`
setTargets(players: Player[]): void
`

Updates a list of players that will receive this message.

#### **Parameters**
- **players**: [*Player*](Player.md)[]
