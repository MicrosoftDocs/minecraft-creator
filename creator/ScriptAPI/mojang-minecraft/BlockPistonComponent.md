---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockPistonComponent Class
description: Contents of the mojang-minecraft.BlockPistonComponent class.
---
# BlockPistonComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.


Represents the inventory of a block in the world. Used with blocks like chests.

## Properties
### **attachedBlocks**
`read-only attachedBlocks: BlockLocation[];`

A set of locations for blocks that are impacted by the activation of this piston.

Type: [*BlockLocation*](BlockLocation.md)[]


### **isExpanded**
`read-only isExpanded: boolean;`

Whether the piston is fully expanded.

Type: *boolean*


### **isExpanding**
`read-only isExpanding: boolean;`

Whether the piston is in the process of expanding.

Type: *boolean*


### **isMoving**
`read-only isMoving: boolean;`

Whether the piston is in the process of expanding or retracting.

Type: *boolean*


### **isRetracted**
`read-only isRetracted: boolean;`

Whether the piston is fully retracted.

Type: *boolean*


### **isRetracting**
`read-only isRetracting: boolean;`

Whether the piston is in the process of retracting.

Type: *boolean*


### **location**
`read-only location: BlockLocation;`

Source location of the block.

Type: [*BlockLocation*](BlockLocation.md)




