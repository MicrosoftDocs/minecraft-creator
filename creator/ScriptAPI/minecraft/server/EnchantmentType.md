---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.EnchantmentType Class
description: Contents of the @minecraft/server.EnchantmentType class.
---
# EnchantmentType Class

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
