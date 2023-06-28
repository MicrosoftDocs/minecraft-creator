---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.SystemBeforeEvents Class
description: Contents of the @minecraft/server.SystemBeforeEvents class.
---
# SystemBeforeEvents Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Used for tacking system-level before events.

## Properties

### **watchdogTerminate**
`read-only watchdogTerminate: WatchdogTerminateBeforeEventSignal;`

The watchdog is about to terminate a script runtime because it has fallen outside of the normal performance parameters.

Type: [*WatchdogTerminateBeforeEventSignal*](WatchdogTerminateBeforeEventSignal.md)
