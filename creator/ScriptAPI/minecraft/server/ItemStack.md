---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ItemStack Class
description: Contents of the @minecraft/server.ItemStack class.
---
# ItemStack Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Defines a collection of items.

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

### **keepOnDeath**
`keepOnDeath: boolean;`

Gets or sets whether the item is kept on death.

Type: *boolean*

### **lockMode**
`lockMode: ItemLockMode;`

Gets or sets the item's lock mode. The default value is `ItemLockMode.none`.

Type: [*ItemLockMode*](ItemLockMode.md)

### **maxAmount**
`read-only maxAmount: number;`

The maximum stack size. This value varies depending on the type of item. For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16.

Type: *number*

### **nameTag**
`nameTag?: string;`

Given name of this stack of items. The name tag is displayed when hovering over the item. Setting the name tag to an empty string or `undefined` will remove the name tag.

Type: *string*

> [!WARNING]
> Throws if the length exceeds 255 characters.

### **type**
`read-only type: ItemType;`

The type of the item.

Type: [*ItemType*](ItemType.md)

### **typeId**
`read-only typeId: string;`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.

Type: *string*

## Methods
- [constructor](#constructor)
- [clone](#clone)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getLore](#getlore)
- [getTags](#gettags)
- [hasComponent](#hascomponent)
- [hasTag](#hastag)
- [isStackableWith](#isstackablewith)
- [setCanDestroy](#setcandestroy)
- [setCanPlaceOn](#setcanplaceon)
- [setLore](#setlore)
- [triggerEvent](#triggerevent)

### **constructor**
`
new ItemStack(itemType: ItemType | string, amount?: number)
`

Creates a new instance of a stack of items for use in the world.

#### **Parameters**
- **itemType**: [*ItemType*](ItemType.md) | *string*
  
  Type of item to create. See the [*@minecraft/server.MinecraftItemTypes*](../../minecraft/server/MinecraftItemTypes.md) enumeration for a list of standard item types in Minecraft experiences.
- **amount**?: *number* = `1`
  
  Number of items to place in the stack, between 1-255. The provided value will be clamped to the item's maximum stack size. Note that certain items can only have one item in the stack.

#### **Returns** [*ItemStack*](ItemStack.md)

> [!WARNING]
> Throws if `itemType` is invalid, or if `amount` is outside the range of 1-255.

### **clone**
`
clone(): ItemStack
`

Creates an exact copy of the item stack, including any custom data or properties.

#### **Returns** [*ItemStack*](ItemStack.md) - Returns a copy of this item stack.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getComponent**
`
getComponent(componentId: string): ItemComponent | undefined
`

Gets a component (that represents additional capabilities) for an item stack.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:food') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the item stack, undefined is returned.

#### **Returns** [*ItemComponent*](ItemComponent.md) | *undefined*

#### **Examples**
##### *durability.ts*
```javascript
// Get the maximum durability of a custom sword item
const itemStack = new ItemStack("custom:sword");
const durability = itemStack.getComponent("minecraft:durability") as ItemDurabilityComponent;
const maxDurability = durability.maxDurability;
```

### **getComponents**
`
getComponents(): ItemComponent[]
`

Returns all components that are both present on this item stack and supported by the API.

#### **Returns** [*ItemComponent*](ItemComponent.md)[]

### **getLore**
`
getLore(): string[]
`

Returns the lore value - a secondary display string - for an ItemStack.

#### **Returns** *string*[] - An array of lore strings. If the item does not have lore, returns an empty array.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getTags**
`
getTags(): string[]
`

Returns a set of tags associated with this item stack.

#### **Returns** *string*[]

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **hasComponent**
`
hasComponent(componentId: string): boolean
`

Returns true if the specified component is present on this item stack.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:food') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.

#### **Returns** *boolean*

### **hasTag**
`
hasTag(tag: string): boolean
`

Checks whether this item stack has a particular tag associated with it.

#### **Parameters**
- **tag**: *string*
  
  Tag to search for.

#### **Returns** *boolean* - True if the Item Stack has the tag associated with it, else false.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **isStackableWith**
`
isStackableWith(itemStack: ItemStack): boolean
`

Returns whether this item stack can be stacked with the given `itemStack`. This is determined by comparing the item type and any custom data and properties associated with the item stacks. The amount of each item stack is not taken into consideration.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)

#### **Returns** *boolean*

### **setCanDestroy**
`
setCanDestroy(blockIdentifiers?: string[]): void
`

The list of block types this item can break in Adventure mode. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> Throws if any of the provided block identifiers are invalid.

#### **Examples**
##### *example.ts*
```javascript
// Creates a diamond pickaxe that can destroy cobblestone and obsidian
const specialPickaxe = new ItemStack("minecraft:diamond_pickaxe");
specialPickaxe.setCanDestroy(["minecraft:cobblestone", "minecraft:obsidian"]);
```

### **setCanPlaceOn**
`
setCanPlaceOn(blockIdentifiers?: string[]): void
`

The list of block types this item can be placed on in Adventure mode. This is only applicable to block items. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.

#### **Parameters**
- **blockIdentifiers**?: *string*[] = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> Throws if any of the provided block identifiers are invalid.

#### **Examples**
##### *example.ts*
```javascript
// Creates a gold block that can be placed on grass and dirt
const specialGoldBlock = new ItemStack("minecraft:gold_block");
specialPickaxe.setCanPlaceOn(["minecraft:grass", "minecraft:dirt"]);
```

### **setLore**
`
setLore(loreList?: string[]): void
`

Sets the lore value - a secondary display string - for an ItemStack.

#### **Parameters**
- **loreList**?: *string*[] = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

#### **Examples**
##### *multilineLore.ts*
```javascript
// Set the lore of an item to multiple lines of text
const itemStack = new ItemStack("minecraft:diamond_sword");
itemStack.setLore(["Line 1", "Line 2", "Line 3"]);
```

### **triggerEvent**
`
triggerEvent(eventName: string): void
`

Triggers an item type event. For custom items, a number of events are defined in an items' definition for key item behaviors.

#### **Parameters**
- **eventName**: *string*
  
  Name of the item type event to trigger. If a namespace is not specified, minecraft: is assumed.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

#### **Examples**
##### *itemStacks.ts*
```javascript
const oneItemLoc: mc.Vector3 = { x: 3, y: 2, z: 1 };
const fiveItemsLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
const diamondPickaxeLoc: mc.Vector3 = { x: 2, y: 2, z: 4 };
const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1, 0);
const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1, 0);
const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5, 0);
overworld.spawnItem(oneEmerald, oneItemLoc);
overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
```
##### *spawnItem.ts*
```javascript
  const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1, 0);
  overworld.spawnItem(featherItem, targetLocation);
  log("New feather created!");
```
