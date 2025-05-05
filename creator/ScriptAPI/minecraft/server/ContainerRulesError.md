---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ContainerRulesError Class
description: Contents of the @minecraft/server.ContainerRulesError class.
---
# ContainerRulesError Class

## Extends
- *Error*

Error thrown if [*@minecraft/server.ContainerRules*](../../../scriptapi/minecraft/server/ContainerRules.md) are broken on container operations.

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **reason**
`read-only reason: ContainerRulesErrorReason;`

The specific reason the error was thrown.

Type: [*ContainerRulesErrorReason*](ContainerRulesErrorReason.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

Notes:
  - This property can be read in early-execution mode.
::: moniker-end
