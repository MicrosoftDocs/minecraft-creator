---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeWatchdogTerminateEvent Class
description: Contents of the mojang-minecraft.BeforeWatchdogTerminateEvent class.
---
# BeforeWatchdogTerminateEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

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
