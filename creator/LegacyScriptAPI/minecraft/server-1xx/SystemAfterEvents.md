---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.SystemAfterEvents Class
description: Contents of the @minecraft/server.SystemAfterEvents class (Version 1.x.x).
---
# SystemAfterEvents Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/SystemAfterEvents.md).

Provides a set of events that fire within the broader scripting system within Minecraft.

## Properties

### **scriptEventReceive**
`read-only scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;`

An event that fires when a /scriptevent command is set. This provides a way for commands and other systems to trigger behavior within script.

Type: [*ScriptEventCommandMessageAfterEventSignal*](ScriptEventCommandMessageAfterEventSignal.md)

Notes:
  - This property can be read in early-execution mode.
