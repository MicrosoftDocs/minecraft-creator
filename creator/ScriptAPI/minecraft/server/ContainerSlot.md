---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ContainerSlot Class
description: Contents of the @minecraft/server.ContainerSlot class.
---
# ContainerSlot Class

Represents a slot within a broader container (e.g., entity inventory.)

## Properties

### **amount**
`amount: number;`

Number of the items in the stack. Valid values range between 1-255. The provided value will be clamped to the item's maximum stack size.

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

> [!WARNING]
> This property can throw errors when used.
>
> Throws if the value is outside the range of 1-255.

### **isStackable**
`read-only isStackable: boolean;`

Returns whether the item is stackable. An item is considered stackable if the item's maximum stack size is greater than 1 and the item does not contain any custom data or properties.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **keepOnDeath**
`keepOnDeath: boolean;`

Gets or sets whether the item is kept on death.

Type: *boolean*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

> [!WARNING]
> This property can throw errors when used.
>
> Throws if the slot's container is invalid.

### **lockMode**
`lockMode: ItemLockMode;`

Gets or sets the item's lock mode. The default value is `ItemLockMode.none`.

Type: [*ItemLockMode*](ItemLockMode.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

> [!WARNING]
> This property can throw errors when used.
>
> Throws if the slot's container is invalid.

### **maxAmount**
`read-only maxAmount: number;`

The maximum stack size. This value varies depending on the type of item. For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16.

Type: *number*

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **nameTag**
`nameTag?: string;`

Given name of this stack of items. The name tag is displayed when hovering over the item. Setting the name tag to an empty string or `undefined` will remove the name tag.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

> [!WARNING]
> This property can throw errors when used.
>
> Throws if the slot's container is invalid. Also throws if the length exceeds 255 characters.

### **type**
`read-only type: ItemType;`

The type of the item.

Type: [*ItemType*](ItemType.md)

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **typeId**
`read-only typeId: string;`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.

Type: *string*

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

## Methods
- [clearDynamicProperties](#cleardynamicproperties)
- [getCanDestroy](#getcandestroy)
- [getCanPlaceOn](#getcanplaceon)
- [getDynamicProperty](#getdynamicproperty)
- [getDynamicPropertyIds](#getdynamicpropertyids)
- [getDynamicPropertyTotalByteCount](#getdynamicpropertytotalbytecount)
- [getItem](#getitem)
- [getLore](#getlore)
- [getTags](#gettags)
- [hasItem](#hasitem)
- [hasTag](#hastag)
- [isStackableWith](#isstackablewith)
- [isValid](#isvalid)
- [setCanDestroy](#setcandestroy)
- [setCanPlaceOn](#setcanplaceon)
- [setDynamicProperty](#setdynamicproperty)
- [setItem](#setitem)
- [setLore](#setlore)

### **clearDynamicProperties**
`
clearDynamicProperties(): void
`

Clears all dynamic properties that have been set on this item stack.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getCanDestroy**
`
getCanDestroy(): string[]
`

Returns whether the item within this container slot can be destroyed. 

**Returns** *string*[]

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getCanPlaceOn**
`
getCanPlaceOn(): string[]
`

Returns if the item in this container slot can be placed on.

**Returns** *string*[]

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined
`

Returns a property value.

#### **Parameters**
- **identifier**: *string*
  
  The property identifier.

**Returns** *boolean* | *number* | *string* | [*Vector3*](Vector3.md) | *undefined* - Returns the value for the property, or undefined if the property has not been set.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getDynamicPropertyIds**
`
getDynamicPropertyIds(): string[]
`

Returns the available set of dynamic property identifiers that have been used on this item stack.

**Returns** *string*[] - A string array of the dynamic properties set on this entity.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getDynamicPropertyTotalByteCount**
`
getDynamicPropertyTotalByteCount(): number
`

Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity. This includes the size of both the key and the value.  This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.

**Returns** *number*

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getItem**
`
getItem(): ItemStack | undefined
`

Creates an exact copy of the item stack, including any custom data or properties.

**Returns** [*ItemStack*](ItemStack.md) | *undefined* - Returns a copy of the item in the slot. Returns undefined if the slot is empty.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getLore**
`
getLore(): string[]
`

Returns the lore value - a secondary display string - for an ItemStack.

**Returns** *string*[] - An array of lore strings. If the item does not have lore, returns an empty array.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getTags**
`
getTags(): string[]
`

Returns all tags for the item in the slot.

**Returns** *string*[] - Returns all tags for the item in the slot. Return an empty array if the the slot is empty.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **hasItem**
`
hasItem(): boolean
`

Returns true if this slot has an item.

**Returns** *boolean*

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **hasTag**
`
hasTag(tag: string): boolean
`

Returns whether the item in the slot slot has the given tag.

#### **Parameters**
- **tag**: *string*
  
  The item tag.

**Returns** *boolean* - Returns false when the slot is empty or the item in the slot does not have the given tag.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **isStackableWith**
`
isStackableWith(itemStack: ItemStack): boolean
`

Returns whether this item stack can be stacked with the given `itemStack`. This is determined by comparing the item type and any custom data and properties associated with the item stacks. The amount of each item stack is not taken into consideration.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The ItemStack that is being compared.

**Returns** *boolean* - Returns whether this item stack can be stacked with the given `itemStack`. 

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **isValid**
`
isValid(): boolean
`

Returns whether the ContainerSlot is valid. The container slot is valid if the container exists and is loaded, and the slot index is valid.

**Returns** *boolean*

### **setCanDestroy**
`
setCanDestroy(blockIdentifiers?: string[]): void
`

The list of block types this item can break in Adventure mode. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`
  
  The list of blocks, given by their identifiers.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **setCanPlaceOn**
`
setCanPlaceOn(blockIdentifiers?: string[]): void
`

The list of block types this item can be placed on in Adventure mode. This is only applicable to block items. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`
  
  The list of blocks, given by their identifiers.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **setDynamicProperty**
`
setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void
`

Sets a specified property to a value.

#### **Parameters**
- **identifier**: *string*
  
  The property identifier.
- **value**?: *boolean* | *number* | *string* | [*Vector3*](Vector3.md) = `null`
  
  Data value of the property to set.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **setItem**
`
setItem(itemStack?: ItemStack): void
`

Sets the given ItemStack in the slot, replacing any existing item.

#### **Parameters**
- **itemStack**?: [*ItemStack*](ItemStack.md) = `null`
  
  The ItemStack to be placed in the slot.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **setLore**
`
setLore(loreList?: string[]): void
`

Sets the lore value - a secondary display string - for an ItemStack.

#### **Parameters**
- **loreList**?: *string*[] = `null`
  
  A list of lore strings. Setting this argument to undefined will clear the lore.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidContainerSlotError*](InvalidContainerSlotError.md)
