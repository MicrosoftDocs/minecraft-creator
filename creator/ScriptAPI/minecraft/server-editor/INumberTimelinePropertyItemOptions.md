---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.INumberTimelinePropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.INumberTimelinePropertyItemOptions class.
---
# INumberTimelinePropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Number Timeline property item

## Properties

### **bounds**
`bounds: {
        minValue: number;
        maxValue: number;
    };`

The data bounds for the value node property

Type: *{
        minValue: number;
        maxValue: number;
    }*

### **decimalPrecision**
`decimalPrecision: number;`

Custom precision for the calculations

Type: *number*

### **disableAddRemoveNodes**
`disableAddRemoveNodes: boolean;`

If true, nodes cannot be added or removed

Type: *boolean*

### **entries**
`entries: INumberTimelinePropertyItemEntry[];`

List of nodes entries in the color timeline.

Type: *INumberTimelinePropertyItemEntry[]*

### **gridSeparatorSliceCount**
`gridSeparatorSliceCount: minecraftserver.Vector2;`

The separator slice count for the graph thin lines

Type: *minecraftserver.Vector2*

### **gridSeparatorStepCount**
`gridSeparatorStepCount: minecraftserver.Vector2;`

The separator step counts for the graph bold lines

Type: *minecraftserver.Vector2*

### **isGraphReadOnly**
`isGraphReadOnly: boolean;`

True means nodes cannot be dragged or modified

Type: *boolean*

### **onNodeAdded**
`onNodeAdded: (node: INumberTimelinePropertyItemEntry) => void;`

Callback triggered when a new number node is added to the timeline.

Type: *(node: INumberTimelinePropertyItemEntry) => void*

### **onNodeChanged**
`onNodeChanged: (node: INumberTimelinePropertyItemEntry) => void;`

Callback triggered when a timeline node's number value changes.

Type: *(node: INumberTimelinePropertyItemEntry) => void*

### **onNodeRemoved**
`onNodeRemoved: (node: INumberTimelinePropertyItemEntry) => void;`

Callback triggered when an number node is removed from the timeline. *

Type: *(node: INumberTimelinePropertyItemEntry) => void*

### **onTimeChanged**
`onTimeChanged: (current: number, prev: number) => void;`

This callback is called when UI control time is changed.

Type: *(current: number, prev: number) => void*

### **title**
`title: LocalizedString;`

Localized title of the property item

Type: *LocalizedString*
