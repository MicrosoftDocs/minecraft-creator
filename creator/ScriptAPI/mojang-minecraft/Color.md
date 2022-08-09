---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Color Class
description: Contents of the mojang-minecraft.Color class.
---
# Color Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Represents a fully customizable color within Minecraft.

## Properties

### **alpha**
`alpha: number;`

Determines a color's alpha (opacity) component. Valid values are between 0 (transparent) and 1.0 (opaque).

Type: *number*

### **blue**
`blue: number;`

Determines a color's blue component. Valid values are between 0 and 1.0.

Type: *number*

### **green**
`green: number;`

Determines a color's green component. Valid values are between 0 and 1.0.

Type: *number*

### **red**
`red: number;`

Determines a color's red component. Valid values are between 0 and 1.0.

Type: *number*

## Methods
- [constructor](#constructor)

### **constructor**
`
new Color(red: number, green: number, blue: number, alpha: number)
`
Creates a new color using the specified color values.

#### **Parameters**
- **red**: *number*
- **green**: *number*
- **blue**: *number*
- **alpha**: *number*

#### **Returns** [*Color*](Color.md)
