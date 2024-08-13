---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemComponentRegistry Class
description: Contents of the @minecraft/server.ItemComponentRegistry class.
---
# ItemComponentRegistry Class

Provides the functionality for registering custom components for items.

## Methods
- [registerCustomComponent](#registercustomcomponent)

### **registerCustomComponent**
`
registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void
`

Registers an item custom component that can be used in item JSON configuration.

#### **Parameters**
- **name**: *string*
  
  The id that represents this custom component. Must have a namespace. This id can be specified in a item's JSON configuration under the 'minecraft:custom_components' item component.
- **itemCustomComponent**: [*ItemCustomComponent*](ItemCustomComponent.md)
  
  The collection of event functions that will be called when the event occurs on an item using this custom component id.

> [!WARNING]
> This function can throw errors.
>
> Throws [*CustomComponentInvalidRegistryError*](CustomComponentInvalidRegistryError.md), [*CustomComponentNameError*](CustomComponentNameError.md), [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), [*ItemCustomComponentAlreadyRegisteredError*](ItemCustomComponentAlreadyRegisteredError.md), [*ItemCustomComponentReloadNewComponentError*](ItemCustomComponentReloadNewComponentError.md), [*ItemCustomComponentReloadNewEventError*](ItemCustomComponentReloadNewEventError.md), [*ItemCustomComponentReloadVersionError*](ItemCustomComponentReloadVersionError.md)
