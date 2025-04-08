---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CustomCommandParamType Enumeration
description: Contents of the @minecraft/server.CustomCommandParamType enumeration.
monikerRange: "=minecraft-bedrock-experimental"
---
# CustomCommandParamType Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

The types of paramaters accepted by a custom command.

## Constants
### **Boolean**
`Boolean = 0`

Command boolean parameter expecting true or false as input.
### **Integer**
`Integer = 1`

Command integer parameter.
### **Float**
`Float = 2`

Command float parameter.
### **String**
`String = 3`

Command string parameter.
### **EntitySelector**
`EntitySelector = 4`

Command entity selector parameter.
### **PlayerSelector**
`PlayerSelector = 5`

Command player selector parameter.
### **Location**
`Location = 6`

Command location parameter.
### **BlockType**
`BlockType = 7`

Command block type parameter expecting a Minecraft block.
### **ItemType**
`ItemType = 8`

Command item name parameter.
### **Enum**
`Enum = 9`

Command enum parameter.
