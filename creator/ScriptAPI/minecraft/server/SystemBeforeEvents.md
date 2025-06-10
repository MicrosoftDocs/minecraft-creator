---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.SystemBeforeEvents Class
description: Contents of the @minecraft/server.SystemBeforeEvents class.
---
# SystemBeforeEvents Class

A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event. Note that in before events any APIs that modify gameplay state will not function and will throw an error.

## Properties

### **shutdown**
`read-only shutdown: ShutdownBeforeEventSignal;`

Type: [*ShutdownBeforeEventSignal*](ShutdownBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

### **startup**
`read-only startup: StartupBeforeEventSignal;`

Type: [*StartupBeforeEventSignal*](StartupBeforeEventSignal.md)

Notes:
  - This property can be read in early-execution mode.

::: moniker range="=minecraft-bedrock-experimental"
### **watchdogTerminate**
`read-only watchdogTerminate: WatchdogTerminateBeforeEventSignal;`

Fires when the scripting watchdog shuts down the server. The can be due to using too much memory, or by causing significant slowdown or hang.

To prevent shutdown, set the event's cancel property to true.

Type: [*WatchdogTerminateBeforeEventSignal*](WatchdogTerminateBeforeEventSignal.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

Notes:
  - This property can be read in early-execution mode.
::: moniker-end
