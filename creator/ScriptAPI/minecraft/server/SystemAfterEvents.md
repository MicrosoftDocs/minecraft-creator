---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.SystemAfterEvents Class
description: Contents of the @minecraft/server.SystemAfterEvents class.
---
# SystemAfterEvents Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Provides a set of events that fire within the broader scripting system within Minecraft.

## Properties

### **scriptEventReceive**
`read-only scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;`

An event that fires when a /scriptevent command is set. This provides a way for commands and other systems to trigger behavior within script.

Type: [*ScriptEventCommandMessageAfterEventSignal*](ScriptEventCommandMessageAfterEventSignal.md)
