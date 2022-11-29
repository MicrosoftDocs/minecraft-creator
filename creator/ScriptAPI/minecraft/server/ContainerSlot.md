---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ContainerSlot Class
description: Contents of the @minecraft/server.ContainerSlot class.
---
# ContainerSlot Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Represents a slot within a broader container (e.g., entity inventory.)

## Properties

### **amount**
`amount: number;`

Amount of the specified item within the container slot.

Type: *number*

### **data**
`data: number;`

Modifier value for the item type stored within the slot.

Type: *number*

### **isValid**
`read-only isValid: boolean;`

If true, the state of this container slot is still valid (e.g., the underlying block or entity for this container slot still exists.)

Type: *boolean*

### **nameTag**
`nameTag?: string;`

Returns a name tag for the container slot.

Type: *string*

### **typeId**
`read-only typeId?: string;`

Returns a string identifier of the type if item stored in this slot.

Type: *string*

## Methods
- [clearItem](#clearitem)
- [getItem](#getitem)
- [getLore](#getlore)
- [setItem](#setitem)
- [setLore](#setlore)

### **clearItem**
`
clearItem(): void
`

Empties the item stored at the specified slot.

> [!WARNING]
> This function can throw errors.

### **getItem**
`
getItem(): ItemStack
`

Returns the item stored within the container.

#### **Returns** [*ItemStack*](ItemStack.md)

> [!WARNING]
> This function can throw errors.

### **getLore**
`
getLore(): string[]
`

Returns the lore value for the item stored within this container slot.

#### **Returns** *string*[]

> [!WARNING]
> This function can throw errors.

### **setItem**
`
setItem(itemStack?: ItemStack): void
`

Sets the item within the slot to a new value.

#### **Parameters**
- **itemStack**?: [*ItemStack*](ItemStack.md) = `null`
  
  The item stack to set within this container slot.

> [!WARNING]
> This function can throw errors.

### **setLore**
`
setLore(loreList: string[]): void
`

Sets the lore string for the item at the specified slot.

#### **Parameters**
- **loreList**: *string*[]
  
  An array of strings for lines of text for this lore.

> [!WARNING]
> This function can throw errors.
