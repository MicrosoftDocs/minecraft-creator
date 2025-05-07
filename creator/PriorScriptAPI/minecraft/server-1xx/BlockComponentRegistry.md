---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockComponentRegistry Class
description: Contents of the @minecraft/server.BlockComponentRegistry class (Version 1.x.x).
---
# BlockComponentRegistry Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockComponentRegistry.md).

## Methods
- [registerCustomComponent](#registercustomcomponent)

### **registerCustomComponent**
`
registerCustomComponent(name: string, customComponent: BlockCustomComponent): void
`

#### **Parameters**
- **name**: *string*
- **customComponent**: [*BlockCustomComponent*](BlockCustomComponent.md)
  
Notes:
- This function can throw errors.
  - Throws [*BlockCustomComponentAlreadyRegisteredError*](BlockCustomComponentAlreadyRegisteredError.md), [*BlockCustomComponentReloadNewComponentError*](BlockCustomComponentReloadNewComponentError.md), [*BlockCustomComponentReloadNewEventError*](BlockCustomComponentReloadNewEventError.md), [*BlockCustomComponentReloadVersionError*](BlockCustomComponentReloadVersionError.md), [*CustomComponentInvalidRegistryError*](CustomComponentInvalidRegistryError.md), [*CustomComponentNameError*](CustomComponentNameError.md), [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md)
