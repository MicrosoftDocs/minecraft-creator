---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerPermissionLevel Enumeration
description: Contents of the @minecraft/server.PlayerPermissionLevel enumeration.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerPermissionLevel Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

The player permission level.

## Constants
### **Visitor**
`Visitor = 0`

Visitors can only observe the world, not interact with it.
### **Member**
`Member = 1`

Members can build and mine, attack players and mobs, and interact with items and entities.
### **Operator**
`Operator = 2`

Operators can teleport and use commands, in addition to everything Members can do.
### **Custom**
`Custom = 3`
