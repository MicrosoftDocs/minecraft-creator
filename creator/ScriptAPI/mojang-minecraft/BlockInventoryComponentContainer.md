---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockInventoryComponentContainer Class
description: Contents of the mojang-minecraft.BlockInventoryComponentContainer class.
---
# BlockInventoryComponentContainer Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*Container*](Container.md)

Represents the inventory of a [*mojang-minecraft.Block*](../mojang-minecraft/Block.md) in the world. Used with blocks like chests.

## Properties

### **emptySlotsCount**
`read-only emptySlotsCount: number;`

Contains a count of the slots in the container that are empty.

Type: *number*

### **size**
`read-only size: number;`

Returns the size capacity of the inventory container on this block.

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

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The stack of items to add.
> [!WARNING]
> This function can throw errors.

### **getItem**
`
getItem(slot: number): ItemStack
`
Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.

#### **Parameters**
- **slot**: *number*
  
  Zero-based index of the slot to retrieve items from.

#### **Returns** [*ItemStack*](ItemStack.md)
> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *getItem.js*
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

#### **Parameters**
- **slot**: *number*
  
  Zero-based index of the slot to set an item at.
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  Stack of items to place within the specified slot.
> [!WARNING]
> This function can throw errors.

### **swapItems**
`
swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean
`
Swaps items between two different slots within containers.

#### **Parameters**
- **slot**: *number*
  
  Zero-based index of the slot to swap from this container.
- **otherSlot**: *number*
  
  Zero-based index of the slot to swap with.
- **otherContainer**: [*Container*](Container.md)
  
  Target container to swap with. Note this can be the same container as this source.

#### **Returns** *boolean*
> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *swapItems.js*
```javascript
rightChestContainer.swapItems(1, 0, leftChestContainer); // swap item in slot 1 of rightChestContainer with item in slot 0 of leftChestContainer
```

### **transferItem**
`
transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean
`
Moves an item from one slot to another, potentially across containers.

#### **Parameters**
- **fromSlot**: *number*
- **toSlot**: *number*
  
  Zero-based index of the slot to move to.
- **toContainer**: [*Container*](Container.md)
  
  Target container to transfer to. Note this can be the same container as the source.

#### **Returns** *boolean*
> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *transferItem.js*
```javascript
rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
```

#### **Examples**
##### *containers.js*
```javascript
let leftLocation = test.worldLocation(new BlockLocation(2, 2, 2)); // left chest location
let rightLocation = test.worldLocation(new BlockLocation(4, 2, 2)); // right chest location
const chestCart = test.spawn("chest_minecart", new BlockLocation(6, 2, 2));
let leftChestBlock = defaultDimension.getBlock(leftLocation);
let rightChestBlock = defaultDimension.getBlock(rightLocation);
leftChestBlock.setType(MinecraftBlockTypes.chest);
rightChestBlock.setType(MinecraftBlockTypes.chest);
const rightChestInventoryComp = rightChestBlock.getComponent("inventory");
const leftChestInventoryComp = leftChestBlock.getComponent("inventory");
const chestCartInventoryComp = chestCart.getComponent("inventory");
const rightChestContainer = rightChestInventoryComp.container;
const leftChestContainer = leftChestInventoryComp.container;
const chestCartContainer = chestCartInventoryComp.container;
rightChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.apple, 10, 0));
test.assert(rightChestContainer.getItem(0).id === "apple", "Expected apple in right container slot index 0");
rightChestContainer.setItem(1, new ItemStack(MinecraftItemTypes.emerald, 10, 0));
test.assert(rightChestContainer.getItem(1).id === "emerald", "Expected emerald in right container slot index 1");
test.assert(rightChestContainer.size === 27, "Unexpected size: " + rightChestContainer.size);
test.assert(
  rightChestContainer.emptySlotsCount === 25,
  "Unexpected emptySlotsCount: " + rightChestContainer.emptySlotsCount
);
const itemStack = rightChestContainer.getItem(0);
test.assert(itemStack.id === "apple", "Expected apple");
test.assert(itemStack.amount === 10, "Expected 10 apples");
test.assert(itemStack.data === 0, "Expected 0 data");
leftChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.cake, 10, 0));
rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
test.assert(chestCartContainer.getItem(4).id === "apple", "Expected apple in left container slot index 4");
test.assert(leftChestContainer.getItem(0).id === "emerald", "Expected emerald in left container slot index 0");
test.assert(rightChestContainer.getItem(1).id === "cake", "Expected cake in right container slot index 1");
```
