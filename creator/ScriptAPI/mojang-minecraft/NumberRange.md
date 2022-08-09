---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.NumberRange Class
description: Contents of the mojang-minecraft.NumberRange class.
---
# NumberRange Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Represents a min/max structure for expressing a potential range of numbers.

## Properties

### **max**
`max: number;`

Maximum value within a range.

Type: *number*

### **min**
`min: number;`

Minimum value within a range.

Type: *number*

## Methods
- [next](#next)

### **next**
`
next(): number
`
Returns a random number between the minimum and maximum of the range.

#### **Returns** *number*
