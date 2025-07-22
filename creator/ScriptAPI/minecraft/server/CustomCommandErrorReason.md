---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CustomCommandErrorReason Enumeration
description: Contents of the @minecraft/server.CustomCommandErrorReason enumeration.
---
# CustomCommandErrorReason Enumeration

Reason why custom command registration failed.

## Constants
### **AlreadyRegistered**
`AlreadyRegistered = "AlreadyRegistered"`

Command name already registered.
### **EnumDependencyMissing**
`EnumDependencyMissing = "EnumDependencyMissing"`

Custom Command references an enum that has not been registered.
### **NamespaceMismatch**
`NamespaceMismatch = "NamespaceMismatch"`

Supplied Custom Command namespace does not match previous registrations for this add-on.
### **ParameterLimit**
`ParameterLimit = "ParameterLimit"`

Too many command parameters defined in CustomCommand.
### **RegistryInvalid**
`RegistryInvalid = "RegistryInvalid"`

Custom command registry can not be accessed after world initialized event.
### **RegistryReadOnly**
`RegistryReadOnly = "RegistryReadOnly"`

Command parameters cannot be redefined during reload. Only the script closure itself can be changed.
