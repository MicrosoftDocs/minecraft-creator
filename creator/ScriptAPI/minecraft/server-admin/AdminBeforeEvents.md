---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-admin.AdminBeforeEvents Class
description: Contents of the @minecraft/server-admin.AdminBeforeEvents class.
---
# AdminBeforeEvents Class

## Properties

### **asyncPlayerJoin**
`read-only asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal;`

This event is fired before a player joins the world. Unlike other before events, this event is a before event that you can delay several ticks by not resolving the promise returned in the subscribe function. If the promise is rejected, the client is rejected.

Type: [*AsyncPlayerJoinBeforeEventSignal*](AsyncPlayerJoinBeforeEventSignal.md)
