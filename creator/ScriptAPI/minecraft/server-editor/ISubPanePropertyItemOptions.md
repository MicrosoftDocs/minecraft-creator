---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ISubPanePropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.ISubPanePropertyItemOptions class.
---
# ISubPanePropertyItemOptions Interface

## Extends
- *IPropertyPaneOptions*

Optional properties for Sub Pane property item

## Properties

### **alignment**
`alignment: LayoutAlignment;`

Alignment of property items within the pane of the property pane. If undefined, it will default to Left.

Type: *LayoutAlignment*

### **collapsed**
`collapsed: boolean;`

Initial expander state of sub pane. If undefined, it will default to false.

Type: *boolean*

### **direction**
`direction: LayoutDirection;`

Determines layout direction of sub pane property items. If undefined, it will default to Vertical.

Type: *LayoutDirection*

### **hasExpander**
`hasExpander: boolean;`

Determines if sub pane should have an expander. If undefined, it will default to true.

Type: *boolean*

### **hasMargins**
`hasMargins: boolean;`

Adds additional margins to sub pane. If undefined, it will default to true.

Type: *boolean*
