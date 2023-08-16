---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
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

### **titleAltText**
`titleAltText: string;`

Fallback display text if no loc ID

Type: *string*

### **titleStringId**
`titleStringId: string;`

Loc ID (resolved on client)

Type: *string*

### **width**
`width: number;`

Width of the panel in rem.

Type: *number*

## Methods
- [addBlockPicker](#addblockpicker)
- [addBool](#addbool)
- [addButton](#addbutton)
- [addDivider](#adddivider)
- [addDropdown](#adddropdown)
- [addNumber](#addnumber)
- [addString](#addstring)
- [addVector3](#addvector3)
- [collapse](#collapse)
- [createPropertyPane](#createpropertypane)
- [expand](#expand)
- [hide](#hide)
- [removePropertyPane](#removepropertypane)
- [show](#show)

### **addBlockPicker**
`
addBlockPicker(obj: T, property: Prop, options: IPropertyItemOptionsBlocks): IPropertyItem<T, Prop>
`

Adds a BlockPicker item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptionsBlocks*

#### **Returns** *IPropertyItem<T, Prop>*

### **addBool**
`
addBool(obj: T, property: Prop, options: IPropertyItemOptions): IPropertyItem<T, Prop>
`

Adds a boolean item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptions*

#### **Returns** *IPropertyItem<T, Prop>*

### **addButton**
`
addButton(action: RegisteredAction<NoArgsAction>, options: IPropertyItemOptionsButton): IActionPropertyItem<{
        EMPTY: undefined;
    }, 'EMPTY'>
`

Adds a button to the pane and binds the specified action to the button activate.

#### **Parameters**
- **action**: *RegisteredAction<NoArgsAction>*
- **options**: *IPropertyItemOptionsButton*

#### **Returns** *IActionPropertyItem<{
        EMPTY: undefined;
    }, 'EMPTY'>*

### **addDivider**
`
addDivider(): IPropertyItem<PropertyBag, string>
`

Adds an divider item to the pane.

#### **Returns** *IPropertyItem<PropertyBag, string>*

### **addDropdown**
`
addDropdown(obj: T, property: Prop, options: IPropertyItemOptionsDropdown): IPropertyItem<T, Prop>
`

Adds an DropDown item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptionsDropdown*

#### **Returns** *IPropertyItem<T, Prop>*

### **addNumber**
`
addNumber(obj: T, property: Prop, options: IPropertyItemOptionsNumber): IPropertyItem<T, Prop>
`

Adds a number item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptionsNumber*

#### **Returns** *IPropertyItem<T, Prop>*

### **addString**
`
addString(obj: T, property: Prop, options: IPropertyItemOptions): IPropertyItem<T, Prop>
`

Adds a string item to the pane

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptions*

#### **Returns** *IPropertyItem<T, Prop>*

### **addVector3**
`
addVector3(obj: T, property: Prop, options: IPropertyItemOptionsVector3): IPropertyItem<T, Prop>
`

Adds a Vec3 item to the pane.

#### **Parameters**
- **obj**: *T*
- **property**: *Prop*
- **options**: *IPropertyItemOptionsVector3*

#### **Returns** *IPropertyItem<T, Prop>*

### **collapse**
`
collapse(): void
`

Collapse the pane.

#### **Returns** *void*

### **createPropertyPane**
`
createPropertyPane(options: IPropertyPaneOptions): IPropertyPane
`

Creates an internal sub panel that is presented inside a extender control.

#### **Parameters**
- **options**: *IPropertyPaneOptions*

#### **Returns** *IPropertyPane*

### **expand**
`
expand(): void
`

Expand the pane.

#### **Returns** *void*

### **hide**
`
hide(): void
`

Hide the pane.

#### **Returns** *void*

### **removePropertyPane**
`
removePropertyPane(paneToRemove: IPropertyPane): boolean
`

Removes a child property pane from the parent pane.

#### **Parameters**
- **paneToRemove**: *IPropertyPane*

#### **Returns** *boolean*

### **show**
`
show(): void
`

Show the pane and all of its property items.

#### **Returns** *void*
