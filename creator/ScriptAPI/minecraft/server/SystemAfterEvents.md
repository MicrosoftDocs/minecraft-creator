---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.SystemAfterEvents Class
description: Contents of the @minecraft/server.SystemAfterEvents class.
---
# SystemAfterEvents Class

Provides a set of events that fire within the broader scripting system within Minecraft.

## Properties

### **scriptEventReceive**
`read-only scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;`

An event that fires when a /scriptevent command is set. This provides a way for commands and other systems to trigger behavior within script.

Type: [*ScriptEventCommandMessageAfterEventSignal*](ScriptEventCommandMessageAfterEventSignal.md)
