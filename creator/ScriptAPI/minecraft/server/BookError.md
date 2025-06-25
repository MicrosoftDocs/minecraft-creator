---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BookError Class
description: Contents of the @minecraft/server.BookError class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BookError Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- *Error*

Errors that can be thrown when using [*@minecraft/server.ItemBookComponent*](../../../scriptapi/minecraft/server/ItemBookComponent.md).

## Properties

### **reason**
`read-only reason: BookErrorReason;`

The reason for the error.

Type: [*BookErrorReason*](BookErrorReason.md)

Notes:
  - This property can be read in early-execution mode.
