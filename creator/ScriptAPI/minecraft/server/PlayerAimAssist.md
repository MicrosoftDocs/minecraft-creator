---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerAimAssist Class
description: Contents of the @minecraft/server.PlayerAimAssist class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerAimAssist Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

A container for APIs related to player aim-assist.

## Properties

### **settings**
`read-only settings?: PlayerAimAssistSettings;`

The player's currently active aim-assist settings, or undefined if not active.

Type: [*PlayerAimAssistSettings*](PlayerAimAssistSettings.md)

## Methods
- [set](#set)

### **set**
`
"set"(settings?: PlayerAimAssistSettings): void
`

Sets the player's aim-assist settings.

#### **Parameters**
- **settings**?: [*PlayerAimAssistSettings*](PlayerAimAssistSettings.md) = `null`
  
  Aim-assist settings to activate for the player, if undefined aim-assist will be disabled.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../minecraft/common/ArgumentOutOfBoundsError.md), [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), *Error*, [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*InvalidEntityError*](InvalidEntityError.md), [*NamespaceNameError*](NamespaceNameError.md)
