---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInputPermissions Class
description: Contents of the @minecraft/server.PlayerInputPermissions class.
---
# PlayerInputPermissions Class

Contains APIs to enable/disable player input permissions.

## Properties

### **cameraEnabled**
`cameraEnabled: boolean;`

Camera input permissions for the player. If set to true, input relating to camera movement is enabled for the player.

Type: *boolean*

### **movementEnabled**
`movementEnabled: boolean;`

Movement input permissions for the player. If set to true input relating to movement is enabled for the player.

Type: *boolean*

## Methods
::: moniker range="=minecraft-bedrock-experimental"
- [isPermissionCategoryEnabled](#ispermissioncategoryenabled)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [setPermissionCategory](#setpermissioncategory)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **isPermissionCategoryEnabled**
`
isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean
`

Returns true if an input permission is enabled.

#### **Parameters**
- **permissionCategory**: [*InputPermissionCategory*](InputPermissionCategory.md)

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **setPermissionCategory**
`
setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void
`

Enable or disable an input permission. When enabled the input will work, when disabled will not work.

#### **Parameters**
- **permissionCategory**: [*InputPermissionCategory*](InputPermissionCategory.md)
- **isEnabled**: *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
::: moniker-end
