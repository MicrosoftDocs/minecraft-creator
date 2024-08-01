---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IPropertyPane Interface
description: Contents of the @minecraft/server-editor.IPropertyPane class.
---
# IPropertyPane Interface

Property pane present dynamic content. It can be associated with an object and presented with different kind of controls.

## Properties

### **collapsed**
`collapsed: boolean;`

Pane state for being expanded or collapsed.

Type: *boolean*

### **id**
`read-only id: string;`

Unique ID for the property pane.

Type: *string*

### **onPropertyPaneVisibilityUpdated**
`onPropertyPaneVisibilityUpdated: EventSink<PropertyPaneVisibilityUpdate>;`

Provides visibility change events

Type: *EventSink<PropertyPaneVisibilityUpdate>*

### **parentPaneId**
`read-only parentPaneId: string;`

In case of sub pane this is the id of the parent pane.

Type: *string*

### **title**
`title: string;`

Localized title of the property pane

Type: *string*

### **visible**
`visible: boolean;`

Check visibility of the pane

Type: *boolean*

### **width**
`width: number;`

Width of the panel in rem.

Type: *number*

## Methods
- [addBlockList](#addblocklist)
- [addBool](#addbool)
- [addBool_deprecated](#addbool_deprecated)
- [addButton](#addbutton)
- [addColorPicker](#addcolorpicker)
- [addColorPicker_deprecated](#addcolorpicker_deprecated)
- [addComboBox](#addcombobox)
- [addDivider](#adddivider)
- [addDropdown](#adddropdown)
- [addDropdown_deprecated](#adddropdown_deprecated)
- [addImage](#addimage)
- [addNumber](#addnumber)
- [addNumber_deprecated](#addnumber_deprecated)
- [addString](#addstring)
- [addString_deprecated](#addstring_deprecated)
- [addTable](#addtable)
- [addText](#addtext)
- [addVector3](#addvector3)
- [addVector3_deprecated](#addvector3_deprecated)
- [collapse](#collapse)
- [createPropertyPane](#createpropertypane)
- [expand](#expand)
- [hide](#hide)
- [removePropertyPane](#removepropertypane)
- [show](#show)

### **addBlockList**
`
addBlockList(options: IPropertyItemOptionsBlockList): IBlockListPropertyItem<{
        EMPTY: undefined;
    }, 'EMPTY'>
`

Adds a block list to the pane.

#### **Parameters**
- **options**: *IPropertyItemOptionsBlockList*

**Returns** *IBlockListPropertyItem<{
        EMPTY: undefined;
    }, 'EMPTY'>*

### **addBool**
`
addBool(value: IObservableProp<boolean>, options: IBoolPropertyItemOptions): IBoolPropertyItem
`

#### **Parameters**
- **value**: *IObservableProp<boolean>*
- **options**: *IBoolPropertyItemOptions*

**Returns** *IBoolPropertyItem*

### **addBool_deprecated**
`
addBool_deprecated(obj: T, property: Prop, options: IPropertyItemOptionsBool): IPropertyItem<T, Prop>
`

Adds a boolean item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptionsBool*

**Returns** *IPropertyItem<T, Prop>*

### **addButton**
`
addButton(action: (() => void) | RegisteredAction<NoArgsAction>, options: IButtonPropertyItemOptions): IButtonPropertyItem
`

Adds a button to the pane and binds the specified action to the button activate.

#### **Parameters**
- **action**: *(() => void) | RegisteredAction<NoArgsAction>*
- **options**: *IButtonPropertyItemOptions*

**Returns** *IButtonPropertyItem*

### **addColorPicker**
`
addColorPicker(value: IObservableProp<RGBA>, options: IColorPickerPropertyItemOptions): IColorPickerPropertyItem
`

Adds a color picker item to the pane.

#### **Parameters**
- **value**: *IObservableProp<RGBA>*
- **options**: *IColorPickerPropertyItemOptions*

**Returns** *IColorPickerPropertyItem*

### **addColorPicker_deprecated**
`
addColorPicker_deprecated(obj: T, property: Prop, options: IPropertyItemOptionsColorPicker_deprecated): IPropertyItem<T, Prop>
`

Adds a color picker item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptionsColorPicker_deprecated*

**Returns** *IPropertyItem<T, Prop>*

### **addComboBox**
`
addComboBox(value: IObservableProp<string>, options: IComboBoxPropertyItemOptions): IComboBoxPropertyItem
`

Adds a combo box item to the pane.

#### **Parameters**
- **value**: *IObservableProp<string>*
- **options**: *IComboBoxPropertyItemOptions*

**Returns** *IComboBoxPropertyItem*

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

### **addDropdown_deprecated**
`
addDropdown_deprecated(obj: T, property: Prop, options: IPropertyItemOptionsDropdown): IDropdownPropertyItem_deprecated<T, Prop>
`

Adds an DropDown item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptionsDropdown*

**Returns** *IDropdownPropertyItem_deprecated<T, Prop>*

### **addImage**
`
addImage(value: IObservableProp<string | ImageResourceData>, options: IImagePropertyItemOptions): IImagePropertyItem
`

Adds an image item to the pane.

#### **Parameters**
- **value**: *IObservableProp<string | ImageResourceData>*
- **options**: *IImagePropertyItemOptions*

**Returns** *IImagePropertyItem*

### **addNumber**
`
addNumber(value: IObservableProp<number>, options: INumberPropertyItemOptions): INumberPropertyItem
`

Adds a number item to the pane.

#### **Parameters**
- **value**: *IObservableProp<number>*
- **options**: *INumberPropertyItemOptions*

**Returns** *INumberPropertyItem*

### **addNumber_deprecated**
`
addNumber_deprecated(obj: T, property: Prop, options: IPropertyItemOptionsNumber): IPropertyItem<T, Prop>
`

Adds a number item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptionsNumber*

**Returns** *IPropertyItem<T, Prop>*

### **addString**
`
addString(value: IObservableProp<string>, options: IStringPropertyItemOptions): IStringPropertyItem
`

#### **Parameters**
- **value**: *IObservableProp<string>*
- **options**: *IStringPropertyItemOptions*

**Returns** *IStringPropertyItem*

### **addString_deprecated**
`
addString_deprecated(obj: T, property: Prop, options: IPropertyItemOptions): IPropertyItem<T, Prop>
`

Adds a string item to the pane

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptions*

**Returns** *IPropertyItem<T, Prop>*

### **addTable**
`
addTable(options: IPropertyItemOptionsTable): ITablePropertyItem<{
        EMPTY: undefined;
    }, 'EMPTY'>
`

Adds a table to the pane.

#### **Parameters**
- **options**: *IPropertyItemOptionsTable*

**Returns** *ITablePropertyItem<{
        EMPTY: undefined;
    }, 'EMPTY'>*

### **addText**
`
addText(value: IObservableProp<LocalizedString>, options: ITextPropertyItemOptions): ITextPropertyItem
`

Adds a multiline Text item to the pane.

#### **Parameters**
- **value**: *IObservableProp<LocalizedString>*
- **options**: *ITextPropertyItemOptions*

**Returns** *ITextPropertyItem*

### **addVector3**
`
addVector3(value: IObservableProp<Vector3>, options: IVector3PropertyItemOptions): IVector3PropertyItem
`

Adds a Vec3 item to the pane.

#### **Parameters**
- **value**: *IObservableProp<Vector3>*
- **options**: *IVector3PropertyItemOptions*

**Returns** *IVector3PropertyItem*

### **addVector3_deprecated**
`
addVector3_deprecated(obj: T, property: Prop, options: IPropertyItemOptionsVector3): IVector3PropertyItem_deprecated<T, Prop>
`

Adds a Vec3 item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptionsVector3*

**Returns** *IVector3PropertyItem_deprecated<T, Prop>*

### **collapse**
`
collapse(): void
`

Collapse the pane.

**Returns** *void*

### **createPropertyPane**
`
createPropertyPane(options: IPropertyPaneOptions): IPropertyPane
`

Creates an internal sub panel that is presented inside a extender control.

#### **Parameters**
- **options**: *IPropertyPaneOptions*

**Returns** *IPropertyPane*

### **expand**
`
expand(): void
`

Expand the pane.

**Returns** *void*

### **hide**
`
hide(): void
`

Hide the pane.

**Returns** *void*

### **removePropertyPane**
`
removePropertyPane(paneToRemove: IPropertyPane): boolean
`

Removes a child property pane from the parent pane.

#### **Parameters**
- **paneToRemove**: *IPropertyPane*

**Returns** *boolean*

### **show**
`
show(): void
`

Show the pane and all of its property items.

**Returns** *void*
