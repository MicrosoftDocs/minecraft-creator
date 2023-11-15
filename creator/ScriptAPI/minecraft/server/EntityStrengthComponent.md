---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityStrengthComponent Class
description: Contents of the @minecraft/server.EntityStrengthComponent class.
monikerRange: "=minecraft-bedrock-experimental"
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
    
> [!WARNING]
> This property can throw errors when used.

### **value**
`read-only value: number;`

Current value of the strength component that has been set for entities.

Type: *number*
    
> [!WARNING]
> This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:strength";`

Type: *string*
