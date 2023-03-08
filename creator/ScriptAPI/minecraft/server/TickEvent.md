---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.TickEvent Class
description: Contents of the @minecraft/server.TickEvent class.
---
# TickEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

An event for handling updates, that fires 20 times every second.

## Properties

### **currentTick**
`read-only currentTick: number;`

Current tick at the time this event was fired.

Type: *number*

### **deltaTime**
`read-only deltaTime: number;`

Time since the last tick was fired.

Type: *number*
