---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IRootPropertyPane Interface
description: Contents of the @minecraft/server-editor.IRootPropertyPane class.
---
# IRootPropertyPane Interface

## Extends
- *IPropertyPane*

A root pane that can store property items.

## Methods
- [isHeaderActionVisible](#isheaderactionvisible)
- [setHeaderActionVisibility](#setheaderactionvisibility)

### **isHeaderActionVisible**
`
isHeaderActionVisible(): boolean
`

**Returns** *boolean* - Current visibility state of header action

### **setHeaderActionVisibility**
`
setHeaderActionVisibility(visible: boolean): void
`

If a header action exists, updates visibility of the button.

#### **Parameters**
- **visible**: *boolean*
  
  New visibility state of the action button.

**Returns** *void*
