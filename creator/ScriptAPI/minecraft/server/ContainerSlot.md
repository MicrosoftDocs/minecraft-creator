---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
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

Notes:
  - This property can't be edited in read-only mode.
  - This property can throw errors when used.
    - Throws if the value is outside the range of 1-255.

### **isStackable**
`read-only isStackable: boolean;`

Returns whether the item is stackable. An item is considered stackable if the item's maximum stack size is greater than 1 and the item does not contain any custom data or properties.

Type: *boolean*

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **isValid**
`read-only isValid: boolean;`

Returns whether the ContainerSlot is valid. The container slot is valid if the container exists and is loaded, and the slot index is valid.

Type: *boolean*

### **keepOnDeath**
`keepOnDeath: boolean;`

Gets or sets whether the item is kept on death.

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.
  - This property can throw errors when used.
    - Throws if the slot's container is invalid.

### **lockMode**
`lockMode: ItemLockMode;`

Gets or sets the item's lock mode. The default value is `ItemLockMode.none`.

Type: [*ItemLockMode*](ItemLockMode.md)

Notes:
  - This property can't be edited in read-only mode.
  - This property can throw errors when used.
    - Throws if the slot's container is invalid.

### **maxAmount**
`read-only maxAmount: number;`

The maximum stack size. This value varies depending on the type of item. For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16.

Type: *number*

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **nameTag**
`nameTag?: string;`

Given name of this stack of items. The name tag is displayed when hovering over the item. Setting the name tag to an empty string or `undefined` will remove the name tag.

Type: *string*

Notes:
  - This property can't be edited in read-only mode.
  - This property can throw errors when used.
    - Throws if the slot's container is invalid. Also throws if the length exceeds 255 characters.

### **type**
`read-only type: ItemType;`

The type of the item.

Type: [*ItemType*](ItemType.md)

Notes:
  - This property can throw errors when used.
    - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **typeId**
`read-only typeId: string;`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.

Type: *string*

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

## Methods
- [clearDynamicProperties](#cleardynamicproperties)
- [getCanDestroy](#getcandestroy)
- [getCanPlaceOn](#getcanplaceon)
- [getDynamicProperty](#getdynamicproperty)
- [getDynamicPropertyIds](#getdynamicpropertyids)
- [getDynamicPropertyTotalByteCount](#getdynamicpropertytotalbytecount)
- [getItem](#getitem)
- [getLore](#getlore)
::: moniker range="=minecraft-bedrock-experimental"
- [getRawLore](#getrawlore)
::: moniker-end
- [getTags](#gettags)
- [hasItem](#hasitem)
- [hasTag](#hastag)
- [isStackableWith](#isstackablewith)
- [setCanDestroy](#setcandestroy)
- [setCanPlaceOn](#setcanplaceon)
::: moniker range="=minecraft-bedrock-experimental"
- [setDynamicProperties](#setdynamicproperties)
::: moniker-end
- [setDynamicProperty](#setdynamicproperty)
- [setItem](#setitem)
- [setLore](#setlore)

### **clearDynamicProperties**
`
clearDynamicProperties(): void
`

Clears all dynamic properties that have been set on this item stack.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getCanDestroy**
`
getCanDestroy(): string[]
`

Returns whether the item within this container slot can be destroyed. 

**Returns** *string*[]
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getCanPlaceOn**
`
getCanPlaceOn(): string[]
`

Returns if the item in this container slot can be placed on.

**Returns** *string*[]
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined
`

Returns a property value.

#### **Parameters**
- **identifier**: *string*
  
  The property identifier.

**Returns** *boolean* | *number* | *string* | [*Vector3*](Vector3.md) | *undefined* - Returns the value for the property, or undefined if the property has not been set.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getDynamicPropertyIds**
`
getDynamicPropertyIds(): string[]
`

Returns the available set of dynamic property identifiers that have been used on this item stack.

**Returns** *string*[] - A string array of the dynamic properties set on this entity.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getDynamicPropertyTotalByteCount**
`
getDynamicPropertyTotalByteCount(): number
`

Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity. This includes the size of both the key and the value.  This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.

**Returns** *number*
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getItem**
`
getItem(): ItemStack | undefined
`

Creates an exact copy of the item stack, including any custom data or properties.

**Returns** [*ItemStack*](ItemStack.md) | *undefined* - Returns a copy of the item in the slot. Returns undefined if the slot is empty.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **getLore**
`
getLore(): string[]
`

Returns the lore value - a secondary display string - for an ItemStack.

**Returns** *string*[] - An array of lore strings. If the item does not have lore, returns an empty array.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

::: moniker range="=minecraft-bedrock-experimental"
### **getRawLore**
`
getRawLore(): RawMessage[]
`

Returns the lore value - a secondary display string - for an ItemStack. String lore lines will be converted to a [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) and put under [*@minecraft/server.RawMessage.text*](../../../scriptapi/minecraft/server/RawMessage.md#text).

**Returns** [*RawMessage*](RawMessage.md)[] - An array of lore lines. If the item does not have lore, returns an empty array.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)
::: moniker-end

### **getTags**
`
getTags(): string[]
`

Returns all tags for the item in the slot.

**Returns** *string*[] - Returns all tags for the item in the slot. Return an empty array if the the slot is empty.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **hasItem**
`
hasItem(): boolean
`

Returns true if this slot has an item.

**Returns** *boolean*
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **hasTag**
`
hasTag(tag: string): boolean
`

Returns whether the item in the slot slot has the given tag.

#### **Parameters**
- **tag**: *string*
  
  The item tag.

**Returns** *boolean* - Returns false when the slot is empty or the item in the slot does not have the given tag.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **isStackableWith**
`
isStackableWith(itemStack: ItemStack): boolean
`

Returns whether this item stack can be stacked with the given `itemStack`. This is determined by comparing the item type and any custom data and properties associated with the item stacks. The amount of each item stack is not taken into consideration.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The ItemStack that is being compared.

**Returns** *boolean* - Returns whether this item stack can be stacked with the given `itemStack`. 
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **setCanDestroy**
`
setCanDestroy(blockIdentifiers?: string[]): void
`

The list of block types this item can break in Adventure mode. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`
  
  The list of blocks, given by their identifiers.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **setCanPlaceOn**
`
setCanPlaceOn(blockIdentifiers?: string[]): void
`

The list of block types this item can be placed on in Adventure mode. This is only applicable to block items. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`
  
  The list of blocks, given by their identifiers.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

::: moniker range="=minecraft-bedrock-experimental"
### **setDynamicProperties**
`
setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void
`

Sets multiple dynamic properties with specific values.

#### **Parameters**
- **values**: Record<*string*, *boolean* | *number* | *string* | [*Vector3*](Vector3.md)>
  
  A Record of key value pairs of the dynamic properties to set.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../../scriptapi/minecraft/common/ArgumentOutOfBoundsError.md), [*InvalidContainerSlotError*](InvalidContainerSlotError.md), [*@minecraft/common.UnsupportedFunctionalityError*](../../../scriptapi/minecraft/common/UnsupportedFunctionalityError.md)
::: moniker-end

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
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../../scriptapi/minecraft/common/ArgumentOutOfBoundsError.md), [*InvalidContainerSlotError*](InvalidContainerSlotError.md), [*@minecraft/common.UnsupportedFunctionalityError*](../../../scriptapi/minecraft/common/UnsupportedFunctionalityError.md)

### **setItem**
`
setItem(itemStack?: ItemStack): void
`

Sets the given ItemStack in the slot, replacing any existing item.

#### **Parameters**
- **itemStack**?: [*ItemStack*](ItemStack.md) = `null`
  
  The ItemStack to be placed in the slot.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*ContainerRulesError*](ContainerRulesError.md), [*InvalidContainerSlotError*](InvalidContainerSlotError.md)

### **setLore**
`
setLore(loreList?: (RawMessage | string)[]): void
`

Sets the lore value - a secondary display string - for an ItemStack.

#### **Parameters**
- **loreList**?: ([*RawMessage*](RawMessage.md) | *string*)[] = `null`
  
  A list of lore strings. Setting this argument to undefined will clear the lore.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../../scriptapi/minecraft/common/ArgumentOutOfBoundsError.md), *Error*, [*InvalidContainerSlotError*](InvalidContainerSlotError.md)
