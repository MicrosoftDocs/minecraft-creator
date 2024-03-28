---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Container Class
description: Contents of the @minecraft/server.Container class.
---
# Container Class

Represents a container that can hold sets of items. Used with entities such as Players, Chest Minecarts, Llamas, and more.

#### Examples
##### ***containers.js***
```typescript
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

## Properties

### **emptySlotsCount**
`read-only emptySlotsCount: number;`

Count of the slots in the container that are empty.

Type: *number*

> [!WARNING]
> This property can throw errors when used.
>
> Throws if the container is invalid.

### **size**
`read-only size: number;`

The number of slots in this container. For example, a standard single-block chest has a size of 27. Note, a player's inventory container contains a total of 36 slots, 9 hotbar slots plus 27 inventory slots.

Type: *number*

> [!WARNING]
> This property can throw errors when used.
>
> Throws if the container is invalid.

## Methods
- [addItem](#additem)
- [clearAll](#clearall)
- [getItem](#getitem)
- [getSlot](#getslot)
- [isValid](#isvalid)
- [moveItem](#moveitem)
- [setItem](#setitem)
- [swapItems](#swapitems)
- [transferItem](#transferitem)

### **addItem**
`
addItem(itemStack: ItemStack): ItemStack | undefined
`

Adds an item to the container. The item is placed in the first available slot(s) and can be stacked with existing items of the same type. Note, use [*@minecraft/server.Container.setItem*](../../minecraft/server/Container.md#setitem) if you wish to set the item in a particular slot.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The stack of items to add.

**Returns** [*ItemStack*](ItemStack.md) | *undefined*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **clearAll**
`
clearAll(): void
`

Clears all inventory items in the container.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws if the container is invalid.

### **getItem**
`
getItem(slot: number): ItemStack | undefined
`

Gets an [*@minecraft/server.ItemStack*](../../minecraft/server/ItemStack.md) of the item at the specified slot. If the slot is empty, returns `undefined`. This method does not change or clear the contents of the specified slot. To get a reference to a particular slot, see [*@minecraft/server.Container.getSlot*](../../minecraft/server/Container.md#getslot).

#### **Parameters**
- **slot**: *number*
  
  Zero-based index of the slot to retrieve items from.

**Returns** [*ItemStack*](ItemStack.md) | *undefined*

> [!WARNING]
> This function can throw errors.
>
> Throws if the container is invalid or if the `slot` index is out of bounds.

#### Examples
##### ***getItem.ts***
```typescript
// A function that gets a copy of the first item in the player's hotbar
import { Player, EntityInventoryComponent, ItemStack } from '@minecraft/server';

function getFirstHotbarItem(player: Player): ItemStack | undefined {
    const inventory = player.getComponent(EntityInventoryComponent.componentId);
    if (inventory && inventory.container) {
        return inventory.container.getItem(0);
    }
    return undefined;
}
```

### **getSlot**
`
getSlot(slot: number): ContainerSlot
`

Returns a container slot. This acts as a reference to a slot at the given index for this container.

#### **Parameters**
- **slot**: *number*
  
  The index of the slot to return. This index must be within the bounds of the container.

**Returns** [*ContainerSlot*](ContainerSlot.md)

> [!WARNING]
> This function can throw errors.
>
> Throws if the container is invalid or if the `slot` index is out of bounds.

### **isValid**
`
isValid(): boolean
`

Returns whether a container object (or the entity or block that this container is associated with) is still available for use in this context.

**Returns** *boolean*

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.

#### Examples
##### ***moveItem.ts***
```typescript
// A function that moves an item from one slot of the player's inventory to another player's inventory
import { Player, EntityComponentTypes } from '@minecraft/server';

function moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
        fromInventory.container.moveItem(slotId, slotId, toInventory.container);
    }
}
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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws if either this container or `otherContainer` are invalid or if the `slot` or `otherSlot` are out of bounds.

#### Examples
##### ***swapItems.ts***
```typescript
// A function that swaps an item from one slot of the player's inventory to another player's inventory
import { Player, EntityComponentTypes } from '@minecraft/server';

function swapBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
        fromInventory.container.swapItems(slotId, slotId, toInventory.container);
    }
}
```

### **transferItem**
`
transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined
`

Moves an item from one slot to another container, or to the first available slot in the same container.

#### **Parameters**
- **fromSlot**: *number*
  
  Zero-based index of the slot to transfer an item from, on this container.
- **toContainer**: [*Container*](Container.md)
  
  Target container to transfer to. Note this can be the same container as the source.

**Returns** [*ItemStack*](ItemStack.md) | *undefined* - An itemStack with the items that couldn't be transferred. Returns undefined if all items were transferred.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.

#### Examples
##### ***transferItem.ts***
```typescript
// A function that moves an item from one slot of the player's inventory to another player's inventory
import { Player, EntityComponentTypes } from '@minecraft/server';

function moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
        fromInventory.container.transferItem(slotId, toInventory.container);
    }
}
```

#### Examples
##### ***containers.js***
```typescript
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
