---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IImagePropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IImagePropertyItemOptions class.
---
# IImagePropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Image property item

## Properties

### **alignment**
`alignment: LayoutAlignment;`

Alignment of the image in the container. If not defined, LayoutAlignment.Left is used.

Type: *LayoutAlignment*

### **imageSize**
`imageSize: number | {
        width: number;
        height: number;
    };`

Size of the image. If undefined, defaults to 10.

Type: *number | {
        width: number;
        height: number;
    }*

### **onClick**
`onClick: (x: number, y: number) => void;`

Called when image is clicked.

Type: *(x: number, y: number) => void*
