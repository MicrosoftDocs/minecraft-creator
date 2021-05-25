---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.World Class
description: Contents of the Minecraft.World class.
---
# World Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.A class that wraps the state of a dimension (such as the overworld, the nether, or the end)

## Properties
### **events** - `Events`




## Methods
- [getDimension](#getdimension)
- [addEventListener](#addeventlistener)
  
### **getDimension**
`
getDimension(dimensionName: ('overworld'|'nether'|'the end')): Dimension
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **dimensionName** | `'overworld'`, `'nether'`, `'the end'` | The name of the Dimension |

Returns [*Dimension*](Dimension.md)

The requested dimension

> [!WARNING]
> Throws if the given dimension name is invalid

### **addEventListener**
`
addEventListener(eventName: string, callback: (arg0: Entity) => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **eventName** | *string* | - |
| **callback** | (arg0: Entity) => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

