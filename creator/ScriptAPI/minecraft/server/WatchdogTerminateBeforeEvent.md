---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WatchdogTerminateBeforeEvent Class
description: Contents of the @minecraft/server.WatchdogTerminateBeforeEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# WatchdogTerminateBeforeEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to a script watchdog termination.

## Properties

### **cancel**
`cancel: boolean;`

If set to true, cancels the termination of the script runtime. Note that depending on server configuration settings, cancellation of the termination may not be allowed.

Type: *boolean*

### **terminateReason**
`read-only terminateReason: WatchdogTerminateReason;`

Contains the reason why a script runtime is to be terminated.

Type: [*WatchdogTerminateReason*](WatchdogTerminateReason.md)
