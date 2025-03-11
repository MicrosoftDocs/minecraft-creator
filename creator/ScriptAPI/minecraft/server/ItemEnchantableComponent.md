---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ItemEnchantableComponent Class
description: Contents of the @minecraft/server.ItemEnchantableComponent class.
---
# ItemEnchantableComponent Class

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item can have enchantments applied to it.

## Properties

### **slots**
`read-only slots: EnchantmentSlot[];`

Type: [*EnchantmentSlot*](EnchantmentSlot.md)[]

Notes:
  - This property can throw errors when used.

## Methods
- [addEnchantment](#addenchantment)
- [addEnchantments](#addenchantments)
- [canAddEnchantment](#canaddenchantment)
- [getEnchantment](#getenchantment)
- [getEnchantments](#getenchantments)
- [hasEnchantment](#hasenchantment)
- [removeAllEnchantments](#removeallenchantments)
- [removeEnchantment](#removeenchantment)

### **addEnchantment**
`
addEnchantment(enchantment: Enchantment): void
`

Adds an enchantment to the item stack.

#### **Parameters**
- **enchantment**: [*Enchantment*](Enchantment.md)
  
  The enchantment interface to be added.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*EnchantmentLevelOutOfBoundsError*](EnchantmentLevelOutOfBoundsError.md), [*EnchantmentTypeNotCompatibleError*](EnchantmentTypeNotCompatibleError.md), [*EnchantmentTypeUnknownIdError*](EnchantmentTypeUnknownIdError.md), *Error*

### **addEnchantments**
`
addEnchantments(enchantments: Enchantment[]): void
`

Adds a list of enchantments to the item stack.

#### **Parameters**
- **enchantments**: [*Enchantment*](Enchantment.md)[]
  
  The list of enchantments to be added.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*EnchantmentLevelOutOfBoundsError*](EnchantmentLevelOutOfBoundsError.md), [*EnchantmentTypeNotCompatibleError*](EnchantmentTypeNotCompatibleError.md), [*EnchantmentTypeUnknownIdError*](EnchantmentTypeUnknownIdError.md), *Error*

### **canAddEnchantment**
`
canAddEnchantment(enchantment: Enchantment): boolean
`

Checks whether an enchantment can be added to the item stack.

#### **Parameters**
- **enchantment**: [*Enchantment*](Enchantment.md)
  
  The enchantment interface to be added.

**Returns** *boolean* - Returns true if the enchantment can be added to the item stack.
  
Notes:
- This function can throw errors.
  - Throws [*EnchantmentLevelOutOfBoundsError*](EnchantmentLevelOutOfBoundsError.md), [*EnchantmentTypeUnknownIdError*](EnchantmentTypeUnknownIdError.md)

### **getEnchantment**
`
getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined
`

Gets the enchantment of a given type from the item stack.

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md) | *string*
  
  The enchantment type to get.

**Returns** [*Enchantment*](Enchantment.md) | *undefined* - Returns the enchantment if it exists on the item stack.
  
Notes:
- This function can throw errors.
  - Throws [*EnchantmentTypeUnknownIdError*](EnchantmentTypeUnknownIdError.md)

### **getEnchantments**
`
getEnchantments(): Enchantment[]
`

Gets all enchantments on the item stack.

**Returns** [*Enchantment*](Enchantment.md)[] - Returns a list of enchantments on the item stack.
  
Notes:
- This function can throw errors.

### **hasEnchantment**
`
hasEnchantment(enchantmentType: EnchantmentType | string): boolean
`

Checks whether an item stack has a given enchantment type.

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md) | *string*
  
  The enchantment type to check for.

**Returns** *boolean* - Returns true if the item stack has the enchantment type.
  
Notes:
- This function can throw errors.
  - Throws [*EnchantmentTypeUnknownIdError*](EnchantmentTypeUnknownIdError.md)

### **removeAllEnchantments**
`
removeAllEnchantments(): void
`

Removes all enchantments applied to this item stack.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **removeEnchantment**
`
removeEnchantment(enchantmentType: EnchantmentType | string): void
`

Removes an enchantment of the given type.

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md) | *string*
  
  The enchantment type to remove.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*EnchantmentTypeUnknownIdError*](EnchantmentTypeUnknownIdError.md), *Error*

## Constants

### **componentId**
`static read-only componentId = "minecraft:enchantable";`

Type: *string*
