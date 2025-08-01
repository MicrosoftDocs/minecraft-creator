---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IImagePropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IImagePropertyItemOptions class.
---
# IImagePropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Image property item

## Properties

### **alignment**
`alignment?: LayoutAlignment;`

Alignment of the image in the container. If not defined, LayoutAlignment.Left is used.

Type: *LayoutAlignment*

### **imageSize**
`imageSize?: number | {
        width: number;
        height: number;
    };`

Size of the image. If undefined, defaults to 10.

Type: *number* | *{
        width: number;
        height: number;
    }*

### **onClick**
`onClick?: (arg0: number, arg1: number) => void;`

Called when image is clicked.

Type: (arg0: *number*, arg1: *number*) => *void*
