---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.INumberPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.INumberPropertyItemOptions class.
---
# INumberPropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Number property item

## Properties

### **hiddenLabel**
`hiddenLabel: boolean;`

If true label text will be hidden. If undefined, the label will be visible by default.

Type: *boolean*

### **isInteger**
`isInteger: boolean;`

If we should treat the number as integer. By default is false.

Type: *boolean*

### **max**
`max: number;`

The min possible number. If undefined, Number.MAX_SAFE_INTEGER will be used.

Type: *number*

### **min**
`min: number;`

The min possible number. If undefined, Number.MIN_SAFE_INTEGER will be used.

Type: *number*

### **onChange**
`onChange: (newValue: number, oldValue: number) => void;`

This callback is called when UI control value is changed.

Type: *(newValue: number, oldValue: number) => void*

### **title**
`title: LocalizedString;`

Localized title of the property item.

Type: *LocalizedString*

### **tooltip**
`tooltip: LocalizedString;`

Tooltip description of the property item.

Type: *LocalizedString*

### **variant**
`variant: NumberPropertyItemVariant;`

Determines how we display bool as a UI element. If undefined, it will default to InputField.

Type: *NumberPropertyItemVariant*
