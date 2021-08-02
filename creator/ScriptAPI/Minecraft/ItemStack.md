---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ItemStack Class
description: Contents of the Minecraft.ItemStack class.
---
# ItemStack Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Defines a collection of items.

## Properties
### **id** - `string`
Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.


### **amount** - `number`
Number of the items in the stack. Valid values range between 0 and 64.


### **data** - `number`
A data value used to configure alternate states of the item.



## Methods
- [constructor](#constructor)
  
### **constructor**
`
new ItemStack(itemType: ItemType, amount: number, data: number)
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemType** | [*ItemType*](ItemType.md) | - |
| **amount** | *number* | - |
| **data** | *number* | - |

Returns [*ItemStack*](ItemStack.md)


