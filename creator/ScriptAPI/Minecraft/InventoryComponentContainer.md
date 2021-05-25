---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
title: Minecraft.InventoryComponentContainer Class
description: Contents of the Minecraft.InventoryComponentContainer class.
---
# InventoryComponentContainer Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.
## Properties
### **size** - `number`



### **emptySlotsCount** - `number`




## Methods
- [setItem](#setitem)
- [getItem](#getitem)
- [addItem](#additem)
- [transferItem](#transferitem)
- [swapItems](#swapitems)
  
### **setItem**
`
setItem(slot: number, itemStack: ItemStack): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **slot** | *number* | - |
| **itemStack** | [*ItemStack*](ItemStack.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **getItem**
`
getItem(slot: number): ItemStack
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **slot** | *number* | - |

Returns [*ItemStack*](ItemStack.md)

> [!WARNING]
> This function can throw errors.

### **addItem**
`
addItem(itemStack: ItemStack): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemStack** | [*ItemStack*](ItemStack.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **transferItem**
`
transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **fromSlot** | *number* | - |
| **toSlot** | *number* | - |
| **toContainer** | [*Container*](Container.md) | - |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **swapItems**
`
swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **slot** | *number* | - |
| **otherSlot** | *number* | - |
| **otherContainer** | [*Container*](Container.md) | - |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

