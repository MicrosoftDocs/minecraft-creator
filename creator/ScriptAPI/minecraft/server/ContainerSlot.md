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

Number of the items in the stack. Valid values range between 1-255. The provided value will be clamped to the item's maximum stack size.

Type: *number*

> [!WARNING]
> Throws if the value is outside the range of 1-255.

### **isStackable**
`read-only isStackable: boolean;`

Returns whether the item is stackable. An item is considered stackable if the item's maximum stack size is greater than 1 and the item does not contain any custom data or properties.

Type: *boolean*

> [!WARNING]
> Throws if the slot's container is invalid.

### **isValid**
`read-only isValid: boolean;`

Type: *boolean*

### **keepOnDeath**
`keepOnDeath: boolean;`

Gets or sets whether the item is kept on death.

Type: *boolean*

> [!WARNING]
> Throws if the slot's container is invalid.

### **lockMode**
`lockMode: ItemLockMode;`

Gets or sets the item's lock mode. The default value is `ItemLockMode.none`.

Type: [*ItemLockMode*](ItemLockMode.md)

> [!WARNING]
> Throws if the slot's container is invalid.

### **maxAmount**
`read-only maxAmount: number;`

The maximum stack size. This value varies depending on the type of item. For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16.

Type: *number*

> [!WARNING]
> Throws if the slot's container is invalid.

### **nameTag**
`nameTag?: string;`

Given name of this stack of items. The name tag is displayed when hovering over the item. Setting the name tag to an empty string or `undefined` will remove the name tag.

Type: *string*

> [!WARNING]
> Throws if the slot's container is invalid. Also throws if the length exceeds 255 characters.

### **type**
`read-only type: ItemType;`

The type of the item.

Type: [*ItemType*](ItemType.md)

> [!WARNING]
> Throws if the slot's container is invalid.

### **typeId**
`read-only typeId?: string;`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.

Type: *string*

> [!WARNING]
> Throws if the slot's container is invalid.

## Methods
- [clone](#clone)
- [getItem](#getitem)
- [getLore](#getlore)
- [getTags](#gettags)
- [hasTag](#hastag)
- [isStackableWith](#isstackablewith)
- [setCanDestroy](#setcandestroy)
- [setCanPlaceOn](#setcanplaceon)
- [setItem](#setitem)
- [setLore](#setlore)

### **clone**
`
clone(): ItemStack
`

Creates an exact copy of the item stack, including any custom data or properties.

#### **Returns** [*ItemStack*](ItemStack.md)

> [!WARNING]
> Throws if the slot's container is invalid.

### **getItem**
`
getItem(): ItemStack | undefined
`

#### **Returns** [*ItemStack*](ItemStack.md) | *undefined*

> [!WARNING]
> This function can throw errors.

### **getLore**
`
getLore(): string[]
`

Returns the lore value - a secondary display string - for an ItemStack.

#### **Returns** *string*[] - An array of lore strings. If the item does not have lore, returns an empty array.

> [!WARNING]
> Throws if the slot's container is invalid.

### **getTags**
`
getTags(): string[]
`

#### **Returns** *string*[]

> [!WARNING]
> This function can throw errors.

### **hasTag**
`
hasTag(tag: string): boolean
`

#### **Parameters**
- **tag**: *string*

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **isStackableWith**
`
isStackableWith(itemStack: ItemStack): boolean
`

Returns whether this item stack can be stacked with the given `itemStack`. This is determined by comparing the item type and any custom data and properties associated with the item stacks. The amount of each item stack is not taken into consideration.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)

#### **Returns** *boolean*

> [!WARNING]
> Throws if the slot's container is invalid.

### **setCanDestroy**
`
setCanDestroy(blockIdentifiers?: string[]): void
`

The list of block types this item can break in Adventure mode. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`

> [!WARNING]
> Throws if the slot's container is invalid. Also throws if any of the provided block identifiers are invalid.

### **setCanPlaceOn**
`
setCanPlaceOn(blockIdentifiers?: string[]): void
`

The list of block types this item can be placed on in Adventure mode. This is only applicable to block items. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`

> [!WARNING]
> Throws if the slot's container is invalid. Also throws if any of the provided block identifiers are invalid.

### **setItem**
`
setItem(itemStack?: ItemStack): void
`

#### **Parameters**
- **itemStack**?: [*ItemStack*](ItemStack.md) = `null`

> [!WARNING]
> This function can throw errors.

### **setLore**
`
setLore(loreList?: string[]): void
`

Sets the lore value - a secondary display string - for an ItemStack.

#### **Parameters**
- **loreList**?: *string*[] = `null`

> [!WARNING]
> Throws if the slot's container is invalid.
