---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityEquippableComponent Class
description: Contents of the @minecraft/server.EntityEquippableComponent class.
---
# EntityEquippableComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

## Methods
- [getEquipment](#getequipment)
- [getEquipmentSlot](#getequipmentslot)
- [setEquipment](#setequipment)

### **getEquipment**
`
getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined
`

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)

#### **Returns** [*ItemStack*](ItemStack.md) | *undefined*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getEquipmentSlot**
`
getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot
`

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)

#### **Returns** [*ContainerSlot*](ContainerSlot.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setEquipment**
`
setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean
`

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)
- **itemStack**?: [*ItemStack*](ItemStack.md) = `null`

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:equippable";`

Type: *string*
