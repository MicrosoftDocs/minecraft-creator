---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IImagePropertyItem Interface
description: Contents of the @minecraft/server-editor.IImagePropertyItem class.
---
# IImagePropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Image properties

## Properties

### **imageHeight**
`read-only imageHeight: number;`

Height of the image.

Type: *number*

### **imageWidth**
`read-only imageWidth: number;`

Width of the image.

Type: *number*

### **value**
`read-only value: Readonly<string | ImageResourceData>;`

Current value of the property item.

Type: *Readonly<string | ImageResourceData>*

## Methods
- [resizeImage](#resizeimage)

### **resizeImage**
`
resizeImage(width: number, height: number): void
`

Updates the size of the image.

#### **Parameters**
- **width**: *number*
  
  New width of the image.
- **height**: *number*
  
  New height of the image.

**Returns** *void*
