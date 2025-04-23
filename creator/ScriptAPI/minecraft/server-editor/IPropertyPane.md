---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IPropertyPane Interface
description: Contents of the @minecraft/server-editor.IPropertyPane class.
---
# IPropertyPane Interface

## Extends
- *IPane*

Property pane present dynamic content. It can be associated with an object and presented with different kind of controls.

## Properties

### **collapsed**
`collapsed: boolean;`

Pane state for being expanded or collapsed.

Type: *boolean*

### **onPropertyPaneVisibilityUpdated**
`onPropertyPaneVisibilityUpdated: EventSink<PropertyPaneVisibilityUpdate>;`

Provides visibility change events

Type: *EventSink<PropertyPaneVisibilityUpdate>*

## Methods
- [addBlockList](#addblocklist)
- [addBlockTable](#addblocktable)
- [addBool](#addbool)
- [addButton](#addbutton)
- [addButtonPane](#addbuttonpane)
- [addColorPicker](#addcolorpicker)
- [addComboBox](#addcombobox)
- [addDataTable](#adddatatable)
- [addDivider](#adddivider)
- [addDropdown](#adddropdown)
- [addImage](#addimage)
- [addLink](#addlink)
- [addNumber](#addnumber)
- [addProgressIndicator](#addprogressindicator)
- [addString](#addstring)
- [addText](#addtext)
- [addToggleGroup](#addtogglegroup)
- [addVector3](#addvector3)
- [beginConstruct](#beginconstruct)
- [collapse](#collapse)
- [createSubPane](#createsubpane)
- [endConstruct](#endconstruct)
- [getTitle](#gettitle)
- [removeSubPane](#removesubpane)
- [setTitle](#settitle)
- [toggleSubPaneVisibility](#togglesubpanevisibility)

### **addBlockList**
`
addBlockList(value: IObservableProp<string[]>, options: IBlockListPropertyItemOptions): IBlockListPropertyItem
`

Adds a block list to the pane.

#### **Parameters**
- **value**: *IObservableProp<string[]>*
- **options**: *IBlockListPropertyItemOptions*

**Returns** *IBlockListPropertyItem*

### **addBlockTable**
`
addBlockTable(options: IBlockTablePropertyItemOptions): IBlockTablePropertyItem
`

Adds a block table to the pane.

#### **Parameters**
- **options**: *IBlockTablePropertyItemOptions*

**Returns** *IBlockTablePropertyItem*

### **addBool**
`
addBool(value: IObservableProp<boolean>, options: IBoolPropertyItemOptions): IBoolPropertyItem
`

Adds a togglable boolean item to the pane.

#### **Parameters**
- **value**: *IObservableProp<boolean>*
- **options**: *IBoolPropertyItemOptions*

**Returns** *IBoolPropertyItem*

### **addButton**
`
addButton(action: ButtonPropertyItemSupportedActionTypes, options: IButtonPropertyItemOptions): IButtonPropertyItem
`

Adds a button to the pane and binds the specified action to the button interaction.

#### **Parameters**
- **action**: *ButtonPropertyItemSupportedActionTypes*
- **options**: *IButtonPropertyItemOptions*

**Returns** *IButtonPropertyItem*

### **addButtonPane**
`
addButtonPane(options: IButtonPanePropertyItemOptions): IButtonPanePropertyItem
`

Adds a pane for grouped button layout.

#### **Parameters**
- **options**: *IButtonPanePropertyItemOptions*

**Returns** *IButtonPanePropertyItem*

### **addColorPicker**
`
addColorPicker(value: IObservableProp<minecraftserver.RGBA>, options: IColorPickerPropertyItemOptions): IColorPickerPropertyItem
`

Adds a color picker item to the pane.

#### **Parameters**
- **value**: *IObservableProp<minecraftserver.RGBA>*
- **options**: *IColorPickerPropertyItemOptions*

**Returns** *IColorPickerPropertyItem*

### **addComboBox**
`
addComboBox(value: IObservableProp<string>, options: IComboBoxPropertyItemOptions): IComboBoxPropertyItem
`

Adds a combo box item to the pane.

#### **Parameters**
- **value**: *IObservableProp<string>*
- **options**: *IComboBoxPropertyItemOptions*

**Returns** *IComboBoxPropertyItem*

### **addDataTable**
`
addDataTable(options: IDataTablePropertyItemOptions): IDataTablePropertyItem
`

Adds a data table to the pane.

#### **Parameters**
- **options**: *IDataTablePropertyItemOptions*

**Returns** *IDataTablePropertyItem*

### **addDivider**
`
addDivider(): IPropertyItemBase
`

Adds an divider item to the pane.

**Returns** *IPropertyItemBase*

### **addDropdown**
`
addDropdown(value: IObservableProp<number>, options: IDropdownPropertyItemOptions): IDropdownPropertyItem
`

Adds an Dropdown item to the pane.

#### **Parameters**
- **value**: *IObservableProp<number>*
- **options**: *IDropdownPropertyItemOptions*

**Returns** *IDropdownPropertyItem*

### **addImage**
`
addImage(value: IObservableProp<string | ImageResourceData>, options: IImagePropertyItemOptions): IImagePropertyItem
`

Adds an image item to the pane.

#### **Parameters**
- **value**: *IObservableProp<string | ImageResourceData>*
- **options**: *IImagePropertyItemOptions*

**Returns** *IImagePropertyItem*

### **addLink**
`
addLink(value: IObservableProp<string>, options: ILinkPropertyItemOptions): ILinkPropertyItem
`

Adds a Link item to the pane.

#### **Parameters**
- **value**: *IObservableProp<string>*
- **options**: *ILinkPropertyItemOptions*

**Returns** *ILinkPropertyItem*

### **addNumber**
`
addNumber(value: IObservableProp<number>, options: INumberPropertyItemOptions): INumberPropertyItem
`

Adds a number item to the pane.

#### **Parameters**
- **value**: *IObservableProp<number>*
- **options**: *INumberPropertyItemOptions*

**Returns** *INumberPropertyItem*

### **addProgressIndicator**
`
addProgressIndicator(options: IProgressIndicatorPropertyItemOptions): IProgressIndicatorPropertyItem
`

Adds a Progress Indicator item to the pane.

#### **Parameters**
- **options**: *IProgressIndicatorPropertyItemOptions*

**Returns** *IProgressIndicatorPropertyItem*

### **addString**
`
addString(value: IObservableProp<string>, options: IStringPropertyItemOptions): IStringPropertyItem
`

Adds an editable string item to the pane

#### **Parameters**
- **value**: *IObservableProp<string>*
- **options**: *IStringPropertyItemOptions*

**Returns** *IStringPropertyItem*

### **addText**
`
addText(value: IObservableProp<LocalizedString>, options: ITextPropertyItemOptions): ITextPropertyItem
`

Adds a multiline Text item to the pane.

#### **Parameters**
- **value**: *IObservableProp<LocalizedString>*
- **options**: *ITextPropertyItemOptions*

**Returns** *ITextPropertyItem*

### **addToggleGroup**
`
addToggleGroup(value: IObservableProp<number>, options: IToggleGroupPropertyItemOptions): IToggleGroupPropertyItem
`

Adds a toggle button group to the pane.

#### **Parameters**
- **value**: *IObservableProp<number>*
- **options**: *IToggleGroupPropertyItemOptions*

**Returns** *IToggleGroupPropertyItem*

### **addVector3**
`
addVector3(value: IObservableProp<minecraftserver.Vector3>, options: IVector3PropertyItemOptions): IVector3PropertyItem
`

Adds a Vec3 item to the pane.

#### **Parameters**
- **value**: *IObservableProp<minecraftserver.Vector3>*
- **options**: *IVector3PropertyItemOptions*

**Returns** *IVector3PropertyItem*

### **beginConstruct**
`
beginConstruct(): void
`

Begins pane construction for batching property item additions

**Returns** *void*

### **collapse**
`
collapse(): void
`

Collapse the pane.

**Returns** *void*

### **createSubPane**
`
createSubPane(options: ISubPanePropertyItemOptions): ISubPanePropertyItem
`

Creates an sub pane that can store property items.

#### **Parameters**
- **options**: *ISubPanePropertyItemOptions*

**Returns** *ISubPanePropertyItem*

### **endConstruct**
`
endConstruct(): void
`

Finalizes pane construction and synchronizes item data

**Returns** *void*

### **getTitle**
`
getTitle(): LocalizedString | undefined
`

Returns pane title.

**Returns** *LocalizedString | undefined*

### **removeSubPane**
`
removeSubPane(paneToRemove: IPropertyPane): boolean
`

Removes an existing sub pane.

#### **Parameters**
- **paneToRemove**: *IPropertyPane*

**Returns** *boolean*

### **setTitle**
`
setTitle(newTitle: LocalizedString | undefined): void
`

Updates title of pane.

#### **Parameters**
- **newTitle**: *LocalizedString | undefined*
  
  New title

**Returns** *void*

### **toggleSubPaneVisibility**
`
toggleSubPaneVisibility(subPaneId: string | undefined): void
`

Shows only the specified sub-pane, hiding all others

#### **Parameters**
- **subPaneId**: *string | undefined*
  
  Identifier of the sub pane to display.

**Returns** *void*
