---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IColorTimelinePropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IColorTimelinePropertyItemOptions class.
---
# IColorTimelinePropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Color Timeline property item

## Properties

### **decimalPrecision**
`decimalPrecision?: number;`

Custom precision for the calculations

Type: *number*

### **disableAddRemoveNodes**
`disableAddRemoveNodes?: boolean;`

If true, nodes cannot be added or removed

Type: *boolean*

### **entries**
`entries?: IColorTimelinePropertyItemEntry[];`

List of nodes entries in the color timeline.

Type: *IColorTimelinePropertyItemEntry*[]

### **isGraphReadOnly**
`isGraphReadOnly?: boolean;`

True means nodes cannot be dragged or modified

Type: *boolean*

### **onNodeAdded**
`onNodeAdded?: () => void;`

Callback triggered when a new RGBA node is added to the timeline.

Type: () => void

### **onNodeChanged**
`onNodeChanged?: () => void;`

Callback triggered when a timeline node's RGBA value changes.

Type: () => void

### **onNodeRemoved**
`onNodeRemoved?: () => void;`

Callback triggered when an RGBA node is removed from the timeline. *

Type: () => void

### **onTimeChanged**
`onTimeChanged?: () => void;`

This callback is called when UI control time is changed.

Type: () => void

### **title**
`title?: LocalizedString;`

Localized title of the property item

Type: *LocalizedString*
