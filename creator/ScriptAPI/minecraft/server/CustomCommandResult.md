---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CustomCommandResult Interface
description: Contents of the @minecraft/server.CustomCommandResult class.
---
# CustomCommandResult Interface

Interface returned from custom command callback function.

## Properties

### **message**
`message?: string;`

Message displayed to chat after command execution.

Type: *string*

### **status**
`status: CustomCommandStatus;`

Command execution Success or Failure. Determines how the status message is displayed.

Type: [*CustomCommandStatus*](CustomCommandStatus.md)
