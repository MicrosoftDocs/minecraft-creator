---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockComponentRegistry Class
description: Contents of the @minecraft/server.BlockComponentRegistry class.
---
# BlockComponentRegistry Class

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
> Throws [*BlockCustomComponentAlreadyRegisteredError*](BlockCustomComponentAlreadyRegisteredError.md), [*BlockCustomComponentReloadNewComponentError*](BlockCustomComponentReloadNewComponentError.md), [*BlockCustomComponentReloadNewEventError*](BlockCustomComponentReloadNewEventError.md), [*BlockCustomComponentReloadVersionError*](BlockCustomComponentReloadVersionError.md), [*CustomComponentInvalidRegistryError*](CustomComponentInvalidRegistryError.md), [*CustomComponentNameError*](CustomComponentNameError.md), [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md)
