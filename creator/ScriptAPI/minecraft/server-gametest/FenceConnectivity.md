---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-gametest.FenceConnectivity Class
description: Contents of the @minecraft/server-gametest.FenceConnectivity class.
---
# FenceConnectivity Class

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
