---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityGroundOffsetComponent Class
description: Contents of the @minecraft/server.EntityGroundOffsetComponent class.
---
# EntityGroundOffsetComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Sets the offset from the ground that the entity is actually at.

## Properties

### **value**
`value: number;`

Value of this particular ground offset. Note that this value is effectively read only; setting the ground offset value will not have an impact on the related entity.

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Constants

### **componentId**
`static read-only componentId = "minecraft:ground_offset";`

Type: *string*
