---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemStack Class
description: Contents of the mojang-minecraft.ItemStack class.
---
# ItemStack Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Defines a collection of items.

## Properties

### **amount**
`amount: number;`

Number of the items in the stack. Valid values range between 0 and 64.

Type: *number*

### **data**
`data: number;`

A data value used to configure alternate states of the item.

Type: *number*

### **id**
`read-only id: string;`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.

Type: *string*

### **nameTag**
`nameTag: string;`

Given name of this stack of items.

Type: *string*

## Methods
- [constructor](#constructor)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [getLore](#getlore)
- [hasComponent](#hascomponent)
- [setLore](#setlore)
- [triggerEvent](#triggerevent)

### **constructor**
`
new ItemStack(itemType: ItemType, amount?: number, data?: number)
`
Creates a new instance of a stack of items for use in the world.

#### **Parameters**
- **itemType**: [*ItemType*](ItemType.md)
  
  Type of item to create. See the [*mojang-minecraft.MinecraftItemTypes*](../mojang-minecraft/MinecraftItemTypes.md) enumeration for a list of standard item types in Minecraft experiences.
- **amount**?: *number* = `1`
  
  Number of items to place in the stack, between 1 and 64. Note that certain items can only have one item in the stack.
- **data**?: *number* = `0`
  
  Optional data value used for creating the item, or 0 if no data value is specified.

#### **Returns** [*ItemStack*](ItemStack.md)

### **getComponent**
`
getComponent(componentId: string): any
`
Gets a component (that represents additional capabilities) for an item stack.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:food') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the item stack, undefined is returned.

#### **Returns** *any*

### **getComponents**
`
getComponents(): any[]
`
Returns all components that are both present on this item stack and supported by the API.

#### **Returns** *any*[]

### **getLore**
`
getLore(): string[]
`
Returns the lore value - a secondary display string - for an ItemStack.

#### **Returns** *string*[]

### **hasComponent**
`
hasComponent(componentId: string): boolean
`
Returns true if the specified component is present on this item stack.

#### **Parameters**
- **componentId**: *string*
  
  The identifier of the component (e.g., 'minecraft:food') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.

#### **Returns** *boolean*

### **setLore**
`
setLore(loreList: string[]): void
`
Sets the lore value - a secondary display string - for an ItemStack.

#### **Parameters**
- **loreList**: *string*[]

### **triggerEvent**
`
triggerEvent(eventName: string): void
`
Triggers an item type event. For custom items, a number of events are defined in an items' definition for key item behaviors.

#### **Parameters**
- **eventName**: *string*
  
  Name of the item type event to trigger. If a namespace is not specified, minecraft: is assumed.

#### **Examples**
##### *itemStacks.ts*
```javascript
  const oneItemLoc = new mc.BlockLocation(3, 2, 1);
  const fiveItemsLoc = new mc.BlockLocation(1, 2, 1);
  const diamondPickaxeLoc = new mc.BlockLocation(2, 2, 4);
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
