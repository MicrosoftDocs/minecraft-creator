---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.InventoryComponentContainer Class
description: Contents of the Minecraft.InventoryComponentContainer class.
---
# InventoryComponentContainer Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Represents a container that can hold stacks of items. Used for entities like Players, Chest Minecarts, Llamas, and more.

## Properties
### **size** - `number`
Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.


### **emptySlotsCount** - `number`
The number of empty slots in the container.



## Methods
- [setItem](#setitem)
- [getItem](#getitem)
- [addItem](#additem)
- [transferItem](#transferitem)
- [swapItems](#swapitems)
  
### **setItem**
`
setItem(slot: number, itemStack: ItemStack): void
`

Sets an item stack within a particular slot.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **slot** | *number* | Zero-based index of the slot to set an item at. |
| **itemStack** | [*ItemStack*](ItemStack.md) | Stack of items to place within the specified slot. |


> [!WARNING]
> This function can throw errors.

### **getItem**
`
getItem(slot: number): ItemStack
`

Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **slot** | *number* | Zero-based index of the slot to retrieve items from. |

Returns [*ItemStack*](ItemStack.md)

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***getItem.js***
```javascript
const itemStack = rightChestContainer.getItem(0);
test.assert(itemStack.id === "apple", "Expected apple");
test.assert(itemStack.amount === 10, "Expected 10 apples");

```
### **addItem**
`
addItem(itemStack: ItemStack): void
`

Adds an item to the specified container. Items will be placed in the first available empty slot. (Use [*Minecraft.InventoryComponentContainer.setItem*](../Minecraft/InventoryComponentContainer.md#setitem) if you wish to set items in a particular slot.)
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemStack** | [*ItemStack*](ItemStack.md) | The stack of items to add. |


> [!WARNING]
> This function can throw errors.

### **transferItem**
`
transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean
`

Moves an item from one slot to another, potentially across containers.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **fromSlot** | *number* | - |
| **toSlot** | *number* | Zero-based index of the slot to move to. |
| **toContainer** | [*Container*](Container.md) | Target container to transfer to. Note this can be the same container as the source. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***transferItem.js***
```javascript
rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart

```
### **swapItems**
`
swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean
`

Swaps items between two different slots within containers.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **slot** | *number* | Zero-based index of the slot to swap from this container. |
| **otherSlot** | *number* | Zero-based index of the slot to swap with. |
| **otherContainer** | [*Container*](Container.md) | Target container to swap with. Note this can be the same container as this source. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***swapItems.js***
```javascript
rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald

```
