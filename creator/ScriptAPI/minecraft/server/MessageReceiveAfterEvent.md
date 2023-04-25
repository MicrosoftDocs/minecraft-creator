---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.MessageReceiveAfterEvent Class
description: Contents of the @minecraft/server.MessageReceiveAfterEvent class.
---
# MessageReceiveAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

A specific currently-internal event used for passing messages from client to server.

## Properties

### **id**
`read-only id: string;`

Type: *string*

### **message**
`read-only message: string;`

Type: *string*

### **player**
`read-only player: Player;`

Type: [*Player*](Player.md)

### **sourceType**
`read-only sourceType: MessageSourceType;`

Type: [*MessageSourceType*](MessageSourceType.md)
