---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IProgressIndicatorPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IProgressIndicatorPropertyItemOptions class.
---
# IProgressIndicatorPropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for progress indicator property item

## Properties

### **hiddenLabel**
`hiddenLabel: boolean;`

If true label text will be hidden. If undefined, the label will be visible by default.

Type: *boolean*

### **progress**
`progress: IObservableProp<number>;`

Normalized loading progress (0 to 1).

Type: *IObservableProp<number>*

### **title**
`title: LocalizedString;`

Localized title of the property item.

Type: *LocalizedString*

### **tooltip**
`tooltip: LocalizedString;`

Tooltip description of the property item.

Type: *LocalizedString*

### **variant**
`variant: ProgressIndicatorPropertyItemVariant;`

Determines how we display progress indicator. If undefined, it will default to Spinner.

Type: *ProgressIndicatorPropertyItemVariant*
