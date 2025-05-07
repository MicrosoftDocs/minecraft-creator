---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.InputButton Enumeration
description: Contents of the @minecraft/server.InputButton enumeration (Version 1.x.x).
---
# InputButton Enumeration (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/InputButton.md).

All the different input buttons that are supported. Use with [*@minecraft/server.InputInfo.getButtonState*](../../../priorscriptapi/minecraft/server-1xx/InputInfo.md#getbuttonstate) via [*@minecraft/server.Player.inputInfo*](../../../priorscriptapi/minecraft/server-1xx/Player.md#inputinfo) or [*@minecraft/server.PlayerButtonInputAfterEvent*](../../../priorscriptapi/minecraft/server-1xx/PlayerButtonInputAfterEvent.md) via [*@minecraft/server.WorldAfterEvents.playerButtonInput*](../../../priorscriptapi/minecraft/server-1xx/WorldAfterEvents.md#playerbuttoninput)

## Constants
### **Jump**
`Jump = "Jump"`

This is mapped to the 'Jump' button on controllers, keyboards, and touch interfaces.
### **Sneak**
`Sneak = "Sneak"`

This is mapped to the 'Sneak' button on controllers, keyboards, and touch interfaces. By default, this is shift on a keyboard or B on an Xbox controller. On touch interfaces this will only be pressed for 1 tick or less and then it will be released immediately even if the player holds their finger down. Dismounting a horse or exiting a boat will not send a Sneak button change event.
