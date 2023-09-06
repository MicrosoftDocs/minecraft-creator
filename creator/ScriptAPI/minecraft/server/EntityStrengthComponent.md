---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.EntityStrengthComponent Class
description: Contents of the @minecraft/server.EntityStrengthComponent class.
ms.service: minecraft-bedrock-edition
---
# EntityStrengthComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Defines the entity's strength to carry items.

## Properties

### **max**
`read-only max: number;`

Maximum strength of this entity, as defined in the entity type definition.

Type: *number*

### **value**
`read-only value: number;`

Current value of the strength component that has been set for entities.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:strength";`

Type: *string*
