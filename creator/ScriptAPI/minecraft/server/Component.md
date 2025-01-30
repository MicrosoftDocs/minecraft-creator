---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Component Class
description: Contents of the @minecraft/server.Component class.
---
# Component Class

## Classes that extend Component
- [*BlockComponent*](BlockComponent.md)
- [*EntityComponent*](EntityComponent.md)
- [*ItemComponent*](ItemComponent.md)

Base class for downstream Component implementations.

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **isValid**
`read-only isValid: boolean;`

Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **typeId**
`read-only typeId: string;`

Identifier of the component.

Type: *string*
