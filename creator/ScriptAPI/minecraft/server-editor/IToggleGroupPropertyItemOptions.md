---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IToggleGroupPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IToggleGroupPropertyItemOptions class.
---
# IToggleGroupPropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Toggle Group property item

## Properties

### **entries**
`entries?: IToggleGroupPropertyItemEntry[];`

List of toggle button entries associated with the property item. If undefined, list will be empty.

Type: *IToggleGroupPropertyItemEntry*[]

### **hiddenEntryLabels**
`hiddenEntryLabels?: boolean;`

If true toggle buttons will be displayed vertically with their labels. If undefined, labels will be hidden.

Type: *boolean*

### **hiddenLabel**
`hiddenLabel?: boolean;`

If true label text will be hidden. It will be visible by default.

Type: *boolean*

### **onChange**
`onChange?: () => void;`

This callback is called when UI control value is changed.

Type: () => void

### **title**
`title?: LocalizedString;`

Localized title of the property item.

Type: *LocalizedString*

### **tooltip**
`tooltip?: BasicTooltipContent;`

Tooltip description of the property item.

Type: *BasicTooltipContent*
