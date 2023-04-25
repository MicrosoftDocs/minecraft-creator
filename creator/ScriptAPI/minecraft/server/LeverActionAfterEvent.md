---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.LeverActionAfterEvent Class
description: Contents of the @minecraft/server.LeverActionAfterEvent class.
---
# LeverActionAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a lever activating or deactivating.

## Properties

### **isPowered**
`read-only isPowered: boolean;`

True if the lever is activated (that is, transmitting power).

Type: *boolean*

### **player**
`read-only player: Player;`

Optional player that triggered the lever activation.

Type: [*Player*](Player.md)
