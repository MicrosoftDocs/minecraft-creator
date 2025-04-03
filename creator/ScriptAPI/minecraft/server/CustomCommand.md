---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CustomCommand Interface
description: Contents of the @minecraft/server.CustomCommand class.
monikerRange: "=minecraft-bedrock-experimental"
---
# CustomCommand Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Define the custom command, including name, permissions, and parameters.

## Properties

### **description**
`description: string;`

Command description as seen on the command line.

Type: *string*

### **mandatoryParameters**
`mandatoryParameters?: CustomCommandParameter[];`

List of mandatory command parameters.

Type: [*CustomCommandParameter*](CustomCommandParameter.md)[]

### **name**
`name: string;`

The name of the command. A namespace is required.

Type: *string*

### **optionalParameters**
`optionalParameters?: CustomCommandParameter[];`

List of optional command parameters.

Type: [*CustomCommandParameter*](CustomCommandParameter.md)[]

### **permissionLevel**
`permissionLevel: CommandPermissionLevel;`

The permission level required to execute the command.

Type: [*CommandPermissionLevel*](CommandPermissionLevel.md)
