---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityEquipmentInventoryComponent Class
description: Contents of the @minecraft/server.EntityEquipmentInventoryComponent class.
---
# EntityEquipmentInventoryComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!WARNING]
> This function can throw errors.

### **getEquipmentSlot**
`
getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot
`

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)

#### **Returns** [*ContainerSlot*](ContainerSlot.md)

> [!WARNING]
> This function can throw errors.

### **setEquipment**
`
setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): void
`

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)
- **itemStack**?: [*ItemStack*](ItemStack.md) = `null`

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:equipment_inventory";`

Type: *string*
