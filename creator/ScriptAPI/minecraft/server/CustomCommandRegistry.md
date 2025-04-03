---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CustomCommandRegistry Class
description: Contents of the @minecraft/server.CustomCommandRegistry class.
monikerRange: "=minecraft-bedrock-experimental"
---
# CustomCommandRegistry Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Provides the functionality for registering custom commands.

## Methods
- [registerCommand](#registercommand)

### **registerCommand**
`
registerCommand(customCommand: CustomCommand, callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined): void
`

Registers a custom command that when executed triggers a script callback.

#### **Parameters**
- **customCommand**: *CustomCommand*
- **callback**: *(origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined*
  
  The callback triggered when the command executes.

**Returns** *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
- This function can throw errors.
  - Throws [*CustomCommandError*](CustomCommandError.md), [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*NamespaceNameError*](NamespaceNameError.md)
