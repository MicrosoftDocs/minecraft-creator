---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.WatchdogTerminateBeforeEvent Class
description: Contents of the @minecraft/server.WatchdogTerminateBeforeEvent class.
---
# WatchdogTerminateBeforeEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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
