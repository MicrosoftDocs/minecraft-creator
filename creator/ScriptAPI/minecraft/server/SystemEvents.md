---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.SystemEvents Class
description: Contents of the @minecraft/server.SystemEvents class.
---
# SystemEvents Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains a set of events that are available across the scope of the Minecraft add-on system.

## Properties

### **beforeWatchdogTerminate**
`read-only beforeWatchdogTerminate: WatchdogTerminateBeforeEventSignal;`

This event fires before a the performance watchdog terminates scripting execution due to exceeding a performance boundary. Depending on the configuration of the runtime environment, this event can be canceled. For example, on certain dedicated server environments the ability to override termination events may be disabled.

Type: [*WatchdogTerminateBeforeEventSignal*](WatchdogTerminateBeforeEventSignal.md)

### **scriptEventReceive**
`read-only scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;`

This event fires if a /scriptevent command is invoked by a player, NPC, or block.

Type: [*ScriptEventCommandMessageAfterEventSignal*](ScriptEventCommandMessageAfterEventSignal.md)
