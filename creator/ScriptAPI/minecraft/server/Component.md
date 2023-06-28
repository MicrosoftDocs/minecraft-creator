---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
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

### **typeId**
`read-only typeId: string;`

Identifier of the component.

Type: *string*

## Methods
- [isValid](#isvalid)

### **isValid**
`
isValid(): boolean
`

Returns true if this component is still active and usable within JavaScript.

#### **Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
