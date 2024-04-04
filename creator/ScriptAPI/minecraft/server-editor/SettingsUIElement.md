---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.SettingsUIElement Class
description: Contents of the @minecraft/server-editor.SettingsUIElement class.
---
# SettingsUIElement Class

## Properties

### **initialValue**
`read-only initialValue: boolean | number;`

Type: *boolean* | *number*

### **max**
`read-only max?: number;`

Type: *number*

### **min**
`read-only min?: number;`

Type: *number*

### **name**
`read-only name: string;`

Type: *string*

### **valueChanged**
`read-only valueChanged?: (arg: variant) => void;`

Type: (arg: *boolean* | *number*) => *void*

## Methods
- [constructor](#constructor)

### **constructor**
`
new SettingsUIElement(name: string, initialValue: boolean | number, min?: number, max?: number, valueChanged?: (arg: variant) => void)
`

#### **Parameters**
- **name**: *string*
- **initialValue**: *boolean* | *number*
- **min**?: *number* = `null`
- **max**?: *number* = `null`
- **valueChanged**?: (arg: *boolean* | *number*) => *void* = `null`

**Returns** [*SettingsUIElement*](SettingsUIElement.md)
