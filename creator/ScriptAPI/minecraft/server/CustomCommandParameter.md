---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CustomCommandParameter Interface
description: Contents of the @minecraft/server.CustomCommandParameter class.
monikerRange: "=minecraft-bedrock-experimental"
---
# CustomCommandParameter Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Definition for each parameter expected by the custom command.

## Properties

### **name**
`name: string;`

The name of parameter as it appears on the command line.

Type: *string*

### **type**
`type: CustomCommandParamType;`

The data type of the parameter.

Type: [*CustomCommandParamType*](CustomCommandParamType.md)
