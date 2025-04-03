---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.Container Class
description: Contents of the @minecraft/server.Container class.
---
# Container Class

Represents a container that can hold sets of items. Used with entities such as Players, Chest Minecarts, Llamas, and more.

#### Examples

##### ***containers.ts***

```typescript
import { ItemStack, EntityInventoryComponent, BlockInventoryComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftItemTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function containers(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const xLocation = targetLocation; // left chest location
  const xPlusTwoLocation = { x: targetLocation.x + 2, y: targetLocation.y, z: targetLocation.z }; // right chest

  const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
    x: targetLocation.x + 4,
    y: targetLocation.y,
    z: targetLocation.z,
  });

  const xChestBlock = targetLocation.dimension.getBlock(xLocation);
  const xPlusTwoChestBlock = targetLocation.dimension.getBlock(xPlusTwoLocation);

  if (!xChestBlock || !xPlusTwoChestBlock) {
    log("Could not retrieve chest blocks.");
    return;
  }

  xChestBlock.setType(MinecraftBlockTypes.Chest);
  xPlusTwoChestBlock.setType(MinecraftBlockTypes.Chest);

  const xPlusTwoChestInventoryComp = xPlusTwoChestBlock.getComponent("inventory") as BlockInventoryComponent;
  const xChestInventoryComponent = xChestBlock.getComponent("inventory") as BlockInventoryComponent;
  const chestCartInventoryComp = chestCart.getComponent("inventory") as EntityInventoryComponent;

  const xPlusTwoChestContainer = xPlusTwoChestInventoryComp.container;
  const xChestContainer = xChestInventoryComponent.container;
  const chestCartContainer = chestCartInventoryComp.container;

  if (!xPlusTwoChestContainer || !xChestContainer || !chestCartContainer) {
    log("Could not retrieve chest containers.");
    return;
  }

  xPlusTwoChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
  if (xPlusTwoChestContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
    log("Expected apple in x+2 container slot index 0", -1);
  }

  xPlusTwoChestContainer.setItem(1, new ItemStack(MinecraftItemTypes.Emerald, 10));
  if (xPlusTwoChestContainer.getItem(1)?.typeId !== MinecraftItemTypes.Emerald) {
    log("Expected emerald in x+2 container slot index 1", -1);
  }

  if (xPlusTwoChestContainer.size !== 27) {
    log("Unexpected size: " + xPlusTwoChestContainer.size, -1);
  }

  if (xPlusTwoChestContainer.emptySlotsCount !== 25) {
    log("Unexpected emptySlotsCount: " + xPlusTwoChestContainer.emptySlotsCount, -1);
  }

  xChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Cake, 10));

  xPlusTwoChestContainer.transferItem(0, chestCartContainer); // transfer the apple from the xPlusTwo chest to a chest cart
  xPlusTwoChestContainer.swapItems(1, 0, xChestContainer); // swap the cake from x and the emerald from xPlusTwo

  if (chestCartContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
    log("Expected apple in minecraft chest container slot index 0", -1);
  }

  if (xChestContainer.getItem(0)?.typeId === MinecraftItemTypes.Emerald) {
    log("Expected emerald in x container slot index 0", -1);
  }

  if (xPlusTwoChestContainer.getItem(1)?.typeId === MinecraftItemTypes.Cake) {
    log("Expected cake in x+2 container slot index 1", -1);
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/containers.ts) code sandbox.

## Properties

### **emptySlotsCount**
`read-only emptySlotsCount: number;`

Count of the slots in the container that are empty.

Type: *number*

Notes:
  - This property can throw errors when used.
    - Throws if the container is invalid.

::: moniker range="=minecraft-bedrock-experimental"
### **isValid**
`read-only isValid: boolean;`

Returns whether a container object (or the entity or block that this container is associated with) is still available for use in this context.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **size**
`read-only size: number;`

The number of slots in this container. For example, a standard single-block chest has a size of 27. Note, a player's inventory container contains a total of 36 slots, 9 hotbar slots plus 27 inventory slots.

Type: *number*

Notes:
  - This property can throw errors when used.
    - Throws if the container is invalid.

## Methods
- [addItem](#additem)
- [clearAll](#clearall)
::: moniker range="=minecraft-bedrock-experimental"
- [contains](#contains)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [find](#find)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [firstEmptySlot](#firstemptyslot)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [firstItem](#firstitem)
::: moniker-end
- [getItem](#getitem)
- [getSlot](#getslot)
- [moveItem](#moveitem)
::: moniker range="=minecraft-bedrock-experimental"
- [reverseFind](#reversefind)
::: moniker-end
- [setItem](#setitem)
- [swapItems](#swapitems)
- [transferItem](#transferitem)

### **addItem**
`
addItem(itemStack: ItemStack): ItemStack | undefined
`

Adds an item to the container. The item is placed in the first available slot(s) and can be stacked with existing items of the same type. Note, use [*@minecraft/server.Container.setItem*](../../../scriptapi/minecraft/server/Container.md#setitem) if you wish to set the item in a particular slot.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The stack of items to add.

**Returns** [*ItemStack*](ItemStack.md) | *undefined*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **clearAll**
`
clearAll(): void
`

Clears all inventory items in the container.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws if the container is invalid.

::: moniker range="=minecraft-bedrock-experimental"
### **contains**
`
contains(itemStack: ItemStack): boolean
`

Attempts to find an item inside the container

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The item to find.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerError*](InvalidContainerError.md)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **find**
`
find(itemStack: ItemStack): number
`

Find the index of the first instance of an item inside the container

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The item to find.

**Returns** *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerError*](InvalidContainerError.md)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **firstEmptySlot**
`
firstEmptySlot(): number
`

Finds the index of the first empty slot inside the container

**Returns** *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerError*](InvalidContainerError.md)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **firstItem**
`
firstItem(): number
`

Finds the index of the first item inside the container

**Returns** *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerError*](InvalidContainerError.md)
::: moniker-end

### **getItem**
`
getItem(slot: number): ItemStack | undefined
`

Gets an [*@minecraft/server.ItemStack*](../../../scriptapi/minecraft/server/ItemStack.md) of the item at the specified slot. If the slot is empty, returns `undefined`. This method does not change or clear the contents of the specified slot. To get a reference to a particular slot, see [*@minecraft/server.Container.getSlot*](../../../scriptapi/minecraft/server/Container.md#getslot).

#### **Parameters**
- **slot**: *number*
  
  Zero-based index of the slot to retrieve items from.

**Returns** [*ItemStack*](ItemStack.md) | *undefined*
  
Notes:
- This function can throw errors.
  - Throws if the container is invalid or if the `slot` index is out of bounds.

#### Examples

##### ***getFirstHotbarItem.ts***

```typescript
import { world, EntityInventoryComponent, DimensionLocation } from "@minecraft/server";

function getFirstHotbarItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  for (const player of world.getAllPlayers()) {
    const inventory = player.getComponent(EntityInventoryComponent.componentId) as EntityInventoryComponent;
    if (inventory && inventory.container) {
      const firstItem = inventory.container.getItem(0);

      if (firstItem) {
        log("First item in hotbar is: " + firstItem.typeId);
      }

      return inventory.container.getItem(0);
    }
    return undefined;
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/getFirstHotbarItem.ts) code sandbox.

### **getSlot**
`
getSlot(slot: number): ContainerSlot
`

Returns a container slot. This acts as a reference to a slot at the given index for this container.

#### **Parameters**
- **slot**: *number*
  
  The index of the slot to return. This index must be within the bounds of the container.

**Returns** [*ContainerSlot*](ContainerSlot.md)
  
Notes:
- This function can throw errors.
  - Throws if the container is invalid or if the `slot` index is out of bounds.

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.

#### Examples

##### ***moveBetweenContainers.ts***

```typescript
import { world, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function moveBetweenContainers(
    targetLocation: DimensionLocation
) {
  const players = world.getAllPlayers();

  const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
    x: targetLocation.x + 1,
    y: targetLocation.y,
    z: targetLocation.z,
  });

  if (players.length > 0) {
    const fromPlayer = players[0];

    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    const toInventory = chestCart.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
      fromInventory.container.moveItem(0, 0, toInventory.container);
    }
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/moveBetweenContainers.ts) code sandbox.

::: moniker range="=minecraft-bedrock-experimental"
### **reverseFind**
`
reverseFind(itemStack: ItemStack): number
`

Find the index of the last instance of an item inside the container

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The item to find.

**Returns** *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
  - Throws [*InvalidContainerError*](InvalidContainerError.md)
::: moniker-end

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws if the container is invalid or if the `slot` index is out of bounds.

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws if either this container or `otherContainer` are invalid or if the `slot` or `otherSlot` are out of bounds.

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.

#### Examples

##### ***transferBetweenContainers.ts***

```typescript
import { world, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function transferBetweenContainers(
    targetLocation: DimensionLocation
) {
  const players = world.getAllPlayers();

  const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
    x: targetLocation.x + 1,
    y: targetLocation.y,
    z: targetLocation.z,
  });

  if (players.length > 0) {
    const fromPlayer = players[0];

    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    const toInventory = chestCart.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
      fromInventory.container.transferItem(0, toInventory.container);
    }
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/transferBetweenContainers.ts) code sandbox.

#### Examples

##### ***containers.ts***

```typescript
import { ItemStack, EntityInventoryComponent, BlockInventoryComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftItemTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function containers(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const xLocation = targetLocation; // left chest location
  const xPlusTwoLocation = { x: targetLocation.x + 2, y: targetLocation.y, z: targetLocation.z }; // right chest

  const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
    x: targetLocation.x + 4,
    y: targetLocation.y,
    z: targetLocation.z,
  });

  const xChestBlock = targetLocation.dimension.getBlock(xLocation);
  const xPlusTwoChestBlock = targetLocation.dimension.getBlock(xPlusTwoLocation);

  if (!xChestBlock || !xPlusTwoChestBlock) {
    log("Could not retrieve chest blocks.");
    return;
  }

  xChestBlock.setType(MinecraftBlockTypes.Chest);
  xPlusTwoChestBlock.setType(MinecraftBlockTypes.Chest);

  const xPlusTwoChestInventoryComp = xPlusTwoChestBlock.getComponent("inventory") as BlockInventoryComponent;
  const xChestInventoryComponent = xChestBlock.getComponent("inventory") as BlockInventoryComponent;
  const chestCartInventoryComp = chestCart.getComponent("inventory") as EntityInventoryComponent;

  const xPlusTwoChestContainer = xPlusTwoChestInventoryComp.container;
  const xChestContainer = xChestInventoryComponent.container;
  const chestCartContainer = chestCartInventoryComp.container;

  if (!xPlusTwoChestContainer || !xChestContainer || !chestCartContainer) {
    log("Could not retrieve chest containers.");
    return;
  }

  xPlusTwoChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
  if (xPlusTwoChestContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
    log("Expected apple in x+2 container slot index 0", -1);
  }

  xPlusTwoChestContainer.setItem(1, new ItemStack(MinecraftItemTypes.Emerald, 10));
  if (xPlusTwoChestContainer.getItem(1)?.typeId !== MinecraftItemTypes.Emerald) {
    log("Expected emerald in x+2 container slot index 1", -1);
  }

  if (xPlusTwoChestContainer.size !== 27) {
    log("Unexpected size: " + xPlusTwoChestContainer.size, -1);
  }

  if (xPlusTwoChestContainer.emptySlotsCount !== 25) {
    log("Unexpected emptySlotsCount: " + xPlusTwoChestContainer.emptySlotsCount, -1);
  }

  xChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Cake, 10));

  xPlusTwoChestContainer.transferItem(0, chestCartContainer); // transfer the apple from the xPlusTwo chest to a chest cart
  xPlusTwoChestContainer.swapItems(1, 0, xChestContainer); // swap the cake from x and the emerald from xPlusTwo

  if (chestCartContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
    log("Expected apple in minecraft chest container slot index 0", -1);
  }

  if (xChestContainer.getItem(0)?.typeId === MinecraftItemTypes.Emerald) {
    log("Expected emerald in x container slot index 0", -1);
  }

  if (xPlusTwoChestContainer.getItem(1)?.typeId === MinecraftItemTypes.Cake) {
    log("Expected cake in x+2 container slot index 1", -1);
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/containers.ts) code sandbox.
