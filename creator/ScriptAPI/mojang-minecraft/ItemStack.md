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
new ItemStack(itemType: ItemType, amount: number, data?: 0)
`

#### Arguments
| Parameter | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **itemType** | [*ItemType*](ItemType.md) | n/a | - |
| **amount** | *number* | n/a | - |
| **data** | *number* | `0` | - |

Returns [*ItemStack*](ItemStack.md)



