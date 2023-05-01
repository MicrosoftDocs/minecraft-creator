---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: .WatchdogTerminateReason Enumeration
description: Contents of the .WatchdogTerminateReason enumeration.
---
# WatchdogTerminateReason Enumeration
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

An enumeration with the reason that a watchdog is deciding to terminate execution of a behavior packs' script.

## Constants
### **hang**
`hang = "hang"`

Script runtime for a behavior pack is terminated due to non-responsiveness from script (a hang or infinite loop).
### **stackOverflow**
`stackOverflow = "stackOverflow"`

Script runtime for a behavior pack is terminated due to a stack overflow (a long, and potentially infinite) chain of function calls.
