---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockInventoryComponentContainer Class
description: Contents of the mojang-minecraft.BlockInventoryComponentContainer class.
---
# BlockInventoryComponentContainer Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.


Represents the inventory of a [*mojang-minecraft.Block*](../mojang-minecraft/Block.md) in the world. Used with blocks like chests.

## Properties
### **emptySlotsCount**
`read-only emptySlotsCount: number;`

Contains a count of the slots in the container that are empty.

Type: *number*


### **size**
`read-only size: number;`

Type: *number*



## Methods
- [addItem](#additem)
- [getItem](#getitem)
- [setItem](#setitem)
- [swapItems](#swapitems)
- [transferItem](#transferitem)
  
### **addItem**
`
addItem(itemStack: ItemStack): void
`

Adds an item to the specified container. Item will be placed in the first available empty slot. (use .setItem if you wish to set items in a particular slot.)
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemStack** | [*ItemStack*](ItemStack.md) | n/a | The stack of items to add. |


> [!WARNING]
> This function can throw errors.

### **getItem**
`
getItem(slot: number): ItemStack
`

Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **slot** | *number* | n/a | Zero-based index of the slot to retrieve items from. |

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
### **setItem**
`
setItem(slot: number, itemStack: ItemStack): void
`

Sets an item stack within a particular slot.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **slot** | *number* | n/a | Zero-based index of the slot to set an item at. |
| **itemStack** | [*ItemStack*](ItemStack.md) | n/a | Stack of items to place within the specified slot. |


> [!WARNING]
> This function can throw errors.

### **swapItems**
`
swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean
`

Swaps items between two different slots within containers.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **slot** | *number* | n/a | Zero-based index of the slot to swap from this container. |
| **otherSlot** | *number* | n/a | Zero-based index of the slot to swap with. |
| **otherContainer** | [*Container*](Container.md) | n/a | Target container to swap with. Note this can be the same container as this source. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***swapItems.js***
```javascript
rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald

```
### **transferItem**
`
transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean
`

Moves an item from one slot to another, potentially across containers.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **fromSlot** | *number* | n/a | - |
| **toSlot** | *number* | n/a | Zero-based index of the slot to move to. |
| **toContainer** | [*Container*](Container.md) | n/a | Target container to transfer to. Note this can be the same container as the source. |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***transferItem.js***
```javascript
rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart

```

