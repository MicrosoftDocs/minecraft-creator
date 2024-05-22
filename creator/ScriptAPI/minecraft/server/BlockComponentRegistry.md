---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockComponentRegistry Class
description: Contents of the @minecraft/server.BlockComponentRegistry class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockComponentRegistry Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [registerCustomComponent](#registercustomcomponent)

### **registerCustomComponent**
`
registerCustomComponent(name: string, customComponent: BlockCustomComponent): void
`

#### **Parameters**
- **name**: *string*
- **customComponent**: [*BlockCustomComponent*](BlockCustomComponent.md)

> [!WARNING]
> This function can throw errors.
>
> Throws [*CustomComponentInvalidRegistryError*](CustomComponentInvalidRegistryError.md), [*CustomComponentNameError*](CustomComponentNameError.md), [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), *Error*
