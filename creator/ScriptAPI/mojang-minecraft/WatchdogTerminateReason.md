---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: .WatchdogTerminateReason Enumeration
description: Contents of the .WatchdogTerminateReason enumeration.
---
# WatchdogTerminateReason Enumeration
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

An enumeration with the reason that a watchdog is deciding to terminate execution of a behavior packs' script.

## Constants
### **hang**
`hang = "hang"`

Script runtime for a behavior pack is terminated due to non-responsiveness from script (a hang or infinite loop).
### **stackOverflow**
`stackOverflow = "stackOverflow"`

Script runtime for a behavior pack is terminated due to a stack overflow (a long, and potentially infinite) chain of function calls.
