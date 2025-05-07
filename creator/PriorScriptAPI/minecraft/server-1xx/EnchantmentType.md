---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EnchantmentType Class
description: Contents of the @minecraft/server.EnchantmentType class (Version 1.x.x).
---
# EnchantmentType Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EnchantmentType.md).

Contains information on a type of enchantment.

## Properties

### **id**
`read-only id: string;`

The name of the enchantment type.

Type: *string*

### **maxLevel**
`read-only maxLevel: number;`

The maximum level this type of enchantment can have.

Type: *number*

## Methods
- [constructor](#constructor)

### **constructor**
`
new EnchantmentType(enchantmentType: string)
`

#### **Parameters**
- **enchantmentType**: *string*

**Returns** [*EnchantmentType*](EnchantmentType.md)
  
Notes:
- This function can throw errors.
