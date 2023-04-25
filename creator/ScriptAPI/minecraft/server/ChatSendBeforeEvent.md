---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ChatSendBeforeEvent Class
description: Contents of the @minecraft/server.ChatSendBeforeEvent class.
---
# ChatSendBeforeEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*ChatSendAfterEvent*](ChatSendAfterEvent.md)

An event that fires as players enter chat messages.

## Properties

### **cancel**
`cancel: boolean;`

If set to true in a beforeChat event handler, this message is not broadcast out.

Type: *boolean*

## Methods
- [setTargets](#settargets)

### **setTargets**
`
setTargets(players: Player[]): void
`

Sets an updated list of players that will receive this message.

#### **Parameters**
- **players**: [*Player*](Player.md)[]
  
  Updated array of players that should receive this message.
