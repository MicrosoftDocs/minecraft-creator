---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IBoolPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IBoolPropertyItemOptions class.
---
# IBoolPropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Bool property item

## Properties

### **hiddenLabel**
`hiddenLabel: boolean;`

If true label text will be hidden. It will be visible by default.

Type: *boolean*

### **onChange**
`onChange: (newValue: boolean, oldValue: boolean) => void;`

This callback is called when UI control value is changed.

Type: *(newValue: boolean, oldValue: boolean) => void*

### **title**
`title: LocalizedString;`

Localized title of the text item.

Type: *LocalizedString*

### **tooltip**
`tooltip: LocalizedString;`

Tooltip description of the property item

Type: *LocalizedString*

### **variant**
`variant: BoolPropertyItemVariant;`

Determines how we display bool as a UI element. If undefined, it will default to Checkbox.

Type: *BoolPropertyItemVariant*
