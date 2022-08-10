---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ChatEvent Class
description: Contents of the mojang-minecraft.ChatEvent class.
---
# ChatEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

An event that fires as players enter chat messages.

## Properties

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

### **targets**
`targets: Player[];`

List of players that will receive this message.

Type: [*Player*](Player.md)[]
