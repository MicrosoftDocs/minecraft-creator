---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.SystemBeforeEvents Class
description: Contents of the @minecraft/server.SystemBeforeEvents class.
monikerRange: "=minecraft-bedrock-experimental"
---
# SystemBeforeEvents Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event. Note that in before events any APIs that modify gameplay state will not function and will throw an error.

## Properties

### **watchdogTerminate**
`read-only watchdogTerminate: WatchdogTerminateBeforeEventSignal;`

Fires when the scripting watchdog shuts down the server. The can be due to using too much memory, or by causing significant slowdown or hang.

To prevent shutdown, set the event's cancel property to true.

Type: [*WatchdogTerminateBeforeEventSignal*](WatchdogTerminateBeforeEventSignal.md)
