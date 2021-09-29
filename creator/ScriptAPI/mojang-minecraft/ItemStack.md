---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
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
`read-only amount: number;`

Number of the items in the stack. Valid values range between 0 and 64.

Type: *number*


### **data**
`read-only data: number;`

A data value used to configure alternate states of the item.

Type: *number*


### **id**
`read-only id: string;`

Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.

Type: *string*



## Methods
- [constructor](#constructor)
  
### **constructor**
`
new ItemStack(itemType: ItemType, amount: number, data: number)
`

Creates a new instance of a stack of items for use in the world.
#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemType** | [*ItemType*](ItemType.md) | n/a | Type of item to create. See the [*mojang-minecraft.MinecraftItemTypes*](../mojang-minecraft/MinecraftItemTypes.md) enumeration for a list of standard item types in Minecraft experiences. |
| **amount** | *number* | n/a | Number of items to place in the stack, between 1 and 64. Note that certain items can only have one item in the stack. |
| **data** | *number* | n/a | Optional data value used for creating the item, or 0 if no data value is specified. |

Returns [*ItemStack*](ItemStack.md)



