---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CustomCommandErrorReason Enumeration
description: Contents of the @minecraft/server.CustomCommandErrorReason enumeration.
monikerRange: "=minecraft-bedrock-experimental"
---
# CustomCommandErrorReason Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

Reason why custom command registration failed.

## Constants
### **AlreadyRegistered**
`AlreadyRegistered = "AlreadyRegistered"`

Command name already registered.
### **ParameterLimit**
`ParameterLimit = "ParameterLimit"`

Too many command parameters defined in CustomCommand.
### **RegistryInvalid**
`RegistryInvalid = "RegistryInvalid"`

Custom command registry can not be accessed after world initialized event.
### **RegistryReadOnly**
`RegistryReadOnly = "RegistryReadOnly"`

Command parameters cannot be redefined during reload. Only the script closure itself can be changed.
