---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.SystemEvents Class
description: Contents of the mojang-minecraft.SystemEvents class.
---
# SystemEvents Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains a set of events that are available across the scope of the Minecraft add-on system.

## Properties

### **beforeWatchdogTerminate**
`read-only beforeWatchdogTerminate: BeforeWatchdogTerminateEventSignal;`

This event fires before a the performance watchdog terminates scripting execution due to exceeding a performance boundary. Depending on the configuration of the runtime environment, this event can be canceled. For example, on certain dedicated server environments the ability to override termination events may be disabled.

Type: [*BeforeWatchdogTerminateEventSignal*](BeforeWatchdogTerminateEventSignal.md)
