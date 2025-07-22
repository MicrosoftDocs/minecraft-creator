---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CommandPermissionLevel Enumeration
description: Contents of the @minecraft/server.CommandPermissionLevel enumeration.
---
# CommandPermissionLevel Enumeration

The required permission level to execute the custom command.

## Constants
### **Any**
`Any = 0`

Anything can run this level.
### **GameDirectors**
`GameDirectors = 1`

Any operator can run this command, including command blocks.
### **Admin**
`Admin = 2`

Any operator can run this command, but NOT command blocks.
### **Host**
`Host = 3`

Any server host can run this command.
### **Owner**
`Owner = 4`

Only dedicated server can run this command.
