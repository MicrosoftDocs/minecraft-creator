---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerInputPermissions Class
description: Contents of the @minecraft/server.PlayerInputPermissions class.
---
# PlayerInputPermissions Class

Contains APIs to enable/disable player input permissions.

## Methods
- [isPermissionCategoryEnabled](#ispermissioncategoryenabled)
- [setPermissionCategory](#setpermissioncategory)

### **isPermissionCategoryEnabled**
`
isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean
`

Returns true if an input permission is enabled.

#### **Parameters**
- **permissionCategory**: [*InputPermissionCategory*](InputPermissionCategory.md)

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **setPermissionCategory**
`
setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void
`

Enable or disable an input permission. When enabled the input will work, when disabled will not work.

#### **Parameters**
- **permissionCategory**: [*InputPermissionCategory*](InputPermissionCategory.md)
- **isEnabled**: *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
