---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.WorldInitializeAfterEventSignal Class
description: Contents of the @minecraft/server.WorldInitializeAfterEventSignal class.
---
# WorldInitializeAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*IWorldInitializeAfterEventSignal*](IWorldInitializeAfterEventSignal.md)

Manages callbacks that are run at the initialization of the scripting environment for a World. Do note that this event may run multiple times within a session in the case that the /reload command is used.
