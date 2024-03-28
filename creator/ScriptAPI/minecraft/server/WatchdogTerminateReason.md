---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .WatchdogTerminateReason Enumeration
description: Contents of the .WatchdogTerminateReason enumeration.
monikerRange: "=minecraft-bedrock-experimental"
---
# WatchdogTerminateReason Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

An enumeration with the reason that a watchdog is deciding to terminate execution of a behavior packs' script.

## Constants
### **Hang**
`Hang = "Hang"`

Script runtime for a behavior pack is terminated due to non-responsiveness from script (a hang or infinite loop).
### **StackOverflow**
`StackOverflow = "StackOverflow"`

Script runtime for a behavior pack is terminated due to a stack overflow (a long, and potentially infinite) chain of function calls.
