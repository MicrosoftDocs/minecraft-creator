---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IColorPickerPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IColorPickerPropertyItemOptions class.
---
# IColorPickerPropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Color Picker property item

## Properties

### **hiddenAlpha**
`hiddenAlpha: boolean;`

If true alpha control will be hidden. If undefined, it will default to false.

Type: *boolean*

### **hiddenLabel**
`hiddenLabel: boolean;`

If true label text will be hidden. It will be visible by default.

Type: *boolean*

### **onChange**
`onChange: (newValue: RGBA, oldValue: RGBA) => void;`

This callback is called when UI control value is changed.

Type: *(newValue: RGBA, oldValue: RGBA) => void*

### **title**
`title: LocalizedString;`

Localized title of the property item.

Type: *LocalizedString*

### **tooltip**
`tooltip: LocalizedString;`

Tooltip description of the property item.

Type: *LocalizedString*

### **variant**
`variant: ColorPickerPropertyItemVariant;`

The variant for the button. By default it is Primary.

Type: *ColorPickerPropertyItemVariant*
