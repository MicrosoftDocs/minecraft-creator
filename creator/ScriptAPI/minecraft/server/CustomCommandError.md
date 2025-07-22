---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CustomCommandError Class
description: Contents of the @minecraft/server.CustomCommandError class.
---
# CustomCommandError Class

## Extends
- *Error*

Error object thrown when CustomCommandRegistry errors occur.

## Properties

### **reason**
`read-only reason: CustomCommandErrorReason;`

Reason for the error.

Type: [*CustomCommandErrorReason*](CustomCommandErrorReason.md)

Notes:
  - This property can be read in early-execution mode.
