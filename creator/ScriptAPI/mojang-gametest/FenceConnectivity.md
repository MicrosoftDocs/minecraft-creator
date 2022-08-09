---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-gametest.FenceConnectivity Class
description: Contents of the mojang-gametest.FenceConnectivity class.
---
# FenceConnectivity Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Returns information about whether this fence is connected to other fences in several directions.

## Properties

### **east**
`read-only east: boolean;`

Represents whether this fence block is connected to another fence to the east (x + 1).

Type: *boolean*

### **north**
`read-only north: boolean;`

Represents whether this fence block is connected to another fence to the north (z - 1).

Type: *boolean*

### **south**
`read-only south: boolean;`

Represents whether this fence block is connected to another fence to the south (z + 1).

Type: *boolean*

### **west**
`read-only west: boolean;`

Represents whether this fence block is connected to another fence to the west (x - 1).

Type: *boolean*
