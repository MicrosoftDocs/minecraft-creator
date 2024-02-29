---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockTypeRegistry Class
description: Contents of the @minecraft/server.BlockTypeRegistry class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockTypeRegistry Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Provides the functionality for registering custom components for blocks.

## Methods
- [registerCustomComponent](#registercustomcomponent)

### **registerCustomComponent**
`
registerCustomComponent(name: string, customComponent: BlockCustomComponent): void
`

Registers a block custom component that can be used in block JSON configuration.

#### **Parameters**
- **name**: *string*
  
  The id that represents this custom component. Must have a namespace. This id can be specified in a block's JSON configuration under the 'minecraft:custom_components' block component.
- **customComponent**: [*BlockCustomComponent*](BlockCustomComponent.md)
  
  The collection of event functions that will be called when the event occurs on a block using this custom component id.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), *Error*
