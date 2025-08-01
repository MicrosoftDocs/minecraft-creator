---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IVector3PropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IVector3PropertyItemOptions class.
---
# IVector3PropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Vector3 property item

## Properties

### **hiddenLabel**
`hiddenLabel?: boolean;`

If true label text will be hidden. It will be visible by default.

Type: *boolean*

### **isInteger**
`isInteger?: boolean;`

If we should treat the Vector3 properties as integer values. By default is false.

Type: *boolean*

### **max**
`max?: Partial<minecraftserver.Vector3>;`

The min possible limits. If undefined, Number.MAX_SAFE_INTEGER will be used.

Type: *Partial<minecraftserver.Vector3>*

### **min**
`min?: Partial<minecraftserver.Vector3>;`

The min possible limits. If undefined, Number.MIN_SAFE_INTEGER will be used.

Type: *Partial<minecraftserver.Vector3>*

### **onChange**
`onChange?: (arg0: minecraftserver.Vector3, arg1: minecraftserver.Vector3) => void;`

This callback is called when UI control is changed.

Type: (arg0: *minecraftserver.Vector3*, arg1: *minecraftserver.Vector3*) => *void*

### **title**
`title?: LocalizedString;`

Localized title of the property item

Type: *LocalizedString*

### **tooltip**
`tooltip?: BasicTooltipContent;`

Tooltip description of the property item

Type: *BasicTooltipContent*
