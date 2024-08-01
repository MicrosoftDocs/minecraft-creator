---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IComboBoxPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IComboBoxPropertyItemOptions class.
---
# IComboBoxPropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for ComboBox property item

## Properties

### **dataType**
`dataType: ComboBoxPropertyItemDataType;`

Possible data types supported by combo box. If undefined, it will be Custom by default.

Type: *ComboBoxPropertyItemDataType*

### **defaultValue**
`defaultValue: string;`

Default value to fall back to if entry is not found. If undefined, data type will determine the default value (empty string for Custom data type).

Type: *string*

### **entries**
`entries: string[];`

List of combo box entries. If undefined, data type will determine the default list (empty list for Custom data type).

Type: *string[]*

### **hiddenLabel**
`hiddenLabel: boolean;`

If true label text will be hidden. It will be visible by default.

Type: *boolean*

### **onChange**
`onChange: (newValue: string, oldValue: string) => void;`

This callback is called when UI control value is changed.

Type: *(newValue: string, oldValue: string) => void*

### **showImage**
`showImage: boolean;`

If true the image for the selected value will be displayed (if data type supports it). If undefined, it will default to false.

Type: *boolean*

### **title**
`title: LocalizedString;`

Localized title of the property item.

Type: *LocalizedString*

### **tooltip**
`tooltip: LocalizedString;`

Tooltip description of the property item.

Type: *LocalizedString*
