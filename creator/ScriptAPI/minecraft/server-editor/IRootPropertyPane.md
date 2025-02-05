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
- [createModalOverlayPane](#createmodaloverlaypane)
- [getActiveModalOverlayId](#getactivemodaloverlayid)
- [isHeaderActionVisible](#isheaderactionvisible)
- [setActiveModalOverlay](#setactivemodaloverlay)
- [setHeaderActionVisibility](#setheaderactionvisibility)

### **createModalOverlayPane**
`
createModalOverlayPane(options: IModalOverlayPaneOptions): IModalOverlayPane
`

Register a modal overlay to the root pane. It will be hidden by default, when shown it will display over the root pane content. Only one modal overlay can be shown at a time.

#### **Parameters**
- **options**: *IModalOverlayPaneOptions*
  
  Creation parameters for modal overlay pane.

**Returns** *IModalOverlayPane*

### **getActiveModalOverlayId**
`
getActiveModalOverlayId(): string | undefined
`

**Returns** *string | undefined* - Unique identifier of the active modal overlay

### **isHeaderActionVisible**
`
isHeaderActionVisible(): boolean
`

**Returns** *boolean* - Current visibility state of header action

### **setActiveModalOverlay**
`
setActiveModalOverlay(id: string | undefined): void
`

Sets registered modal overlay as active, if not found it will hide the current.

#### **Parameters**
- **id**: *string | undefined*
  
  Unique id for modal overlay pane.

**Returns** *void*

### **setHeaderActionVisibility**
`
setHeaderActionVisibility(visible: boolean): void
`

If a header action exists, updates visibility of the button.

#### **Parameters**
- **visible**: *boolean*
  
  New visibility state of the action button.

**Returns** *void*
