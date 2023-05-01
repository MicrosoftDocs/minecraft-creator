---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Container Class
description: Contents of the @minecraft/server.Container class.
---
# Container Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Represents a container that can hold sets of items. Used with entities such as Players, Chest Minecarts, Llamas, and more.

## Properties

### **emptySlotsCount**
`read-only emptySlotsCount: number;`

Count of the slots in the container that are empty.

Type: *number*

> [!WARNING]
> Throws if the container is invalid.

### **size**
`read-only size: number;`

The number of slots in this container. For example, a standard single-block chest has a size of 27. Note, a player's inventory container contains a total of 36 slots, 9 hotbar slots plus 27 inventory slots.

Type: *number*

> [!WARNING]
> Throws if the container is invalid.

## Methods
- [addItem](#additem)
- [clearAll](#clearall)
- [getItem](#getitem)
- [getSlot](#getslot)
- [moveItem](#moveitem)
- [setItem](#setitem)
- [swapItems](#swapitems)
- [transferItem](#transferitem)

### **addItem**
`
addItem(itemStack: ItemStack): ItemStack
`

Adds an item to the container. The item is placed in the first available slot(s) and can be stacked with existing items of the same type. Note, use [*@minecraft/server.Container.setItem*](../../minecraft/server/Container.md#setitem) if you wish to set the item in a particular slot.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The stack of items to add.

#### **Returns** [*ItemStack*](ItemStack.md)

> [!WARNING]
> This function can throw errors.

### **clearAll**
`
clearAll(): void
`

Clears all inventory items in the container.

> [!WARNING]
> Throws if the container is invalid.

### **getItem**
`
getItem(slot: number): ItemStack | undefined
`

Gets an [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md) of the item at the specified slot. If the slot is empty, returns `undefined`. This method does not change or clear the contents of the specified slot. To get a reference to a particular slot, see [*@minecraft/server.Container.getSlot*](../../minecraft/server/Container.md#getslot).

#### **Parameters**
- **slot**: *number*
  
  Zero-based index of the slot to retrieve items from.

#### **Returns** [*ItemStack*](ItemStack.md) | *undefined*

> [!WARNING]
> Throws if the container is invalid or if the `slot` index is out of bounds.

#### **Examples**
##### *getItem.ts*
```javascript
// Get a copy of the first item in the player's hotbar
const inventory = player.getComponent("inventory") as EntityInventoryComponent;
const itemStack = inventory.container.getItem(0);
```

### **getSlot**
`
getSlot(slot: number): ContainerSlot
`

Returns a container slot. This acts as a reference to a slot at the given index for this container.

#### **Parameters**
- **slot**: *number*
  
  The index of the slot to return. This index must be within the bounds of the container.

#### **Returns** [*ContainerSlot*](ContainerSlot.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> Throws if the container is invalid or if the `slot` index is out of bounds.

### **moveItem**
`
moveItem(fromSlot: number, toSlot: number, toContainer: Container): void
`

Moves an item from one slot to another, potentially across containers.

#### **Parameters**
- **fromSlot**: *number*
  
  Zero-based index of the slot to transfer an item from, on this container.
- **toSlot**: *number*
  
  Zero-based index of the slot to transfer an item to, on `toContainer`.
- **toContainer**: [*Container*](Container.md)
  
  Target container to transfer to. Note this can be the same container as the source.

> [!WARNING]
> Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.

#### **Examples**
##### *moveItem.ts*
```javascript
// Move an item from the first slot of fromPlayer's inventory to the fifth slot of toPlayer's inventory
const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
fromInventory.container.moveItem(0, 4, toInventory.container); 
```

### **setItem**
`
setItem(slot: number, itemStack?: ItemStack): void
`

Sets an item stack within a particular slot.

#### **Parameters**
- **slot**: *number*
  
  Zero-based index of the slot to set an item at.
- **itemStack**?: [*ItemStack*](ItemStack.md) = `null`
  
  Stack of items to place within the specified slot. Setting `itemStack` to undefined will clear the slot.

> [!WARNING]
> Throws if the container is invalid or if the `slot` index is out of bounds.

### **swapItems**
`
swapItems(slot: number, otherSlot: number, otherContainer: Container): void
`

Swaps items between two different slots within containers.

#### **Parameters**
- **slot**: *number*
  
  Zero-based index of the slot to swap from this container.
- **otherSlot**: *number*
  
  Zero-based index of the slot to swap with.
- **otherContainer**: [*Container*](Container.md)
  
  Target container to swap with. Note this can be the same container as this source.

> [!WARNING]
> Throws if either this container or `otherContainer` are invalid or if the `slot` or `otherSlot` are out of bounds.

#### **Examples**
##### *swapItems.ts*
```javascript
// Swaps an item between slots 0 and 4 in the player's inventory
const inventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
inventory.container.swapItems(0, 4, inventory); 
```

### **transferItem**
`
transferItem(fromSlot: number, toContainer: Container): ItemStack
`

Moves an item from one slot to another container, or to the first available slot in the same container.

#### **Parameters**
- **fromSlot**: *number*
  
  Zero-based index of the slot to transfer an item from, on this container.
- **toContainer**: [*Container*](Container.md)
  
  Target container to transfer to. Note this can be the same container as the source.

#### **Returns** [*ItemStack*](ItemStack.md)

> [!WARNING]
> Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.

#### **Examples**
##### *transferItem.ts*
```javascript
// Transfer an item from the first slot of fromPlayer's inventory to toPlayer's inventory
const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
fromInventory.container.transferItem(0, toInventory.container); 
```

#### **Examples**
##### *containers.js*
```javascript
let leftLocation = test.worldLocation({ x: 2, y: 2, z: 2 }); // left chest location
let rightLocation = test.worldLocation({ x: 4, y: 2, z: 2 }); // right chest location
const chestCart = test.spawn("chest_minecart", { x: 6, y: 2, z: 2 });
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
rightChestContainer.setItem(0, new ItemStack(Items.apple, 10, 0));
test.assert(rightChestContainer.getItem(0).id === "apple", "Expected apple in right container slot index 0");
rightChestContainer.setItem(1, new ItemStack(Items.emerald, 10, 0));
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
leftChestContainer.setItem(0, new ItemStack(Items.cake, 10, 0));
rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
test.assert(chestCartContainer.getItem(4).id === "apple", "Expected apple in left container slot index 4");
test.assert(leftChestContainer.getItem(0).id === "emerald", "Expected emerald in left container slot index 0");
test.assert(rightChestContainer.getItem(1).id === "cake", "Expected cake in right container slot index 1");
```
