---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.Widget Class
description: Contents of the @minecraft/server-editor.Widget class.
---
# Widget Class

## Properties

### **bindPositionToBlockCursor**
`bindPositionToBlockCursor: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **collisionOffset**
`collisionOffset: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

### **collisionRadius**
`collisionRadius: number;`

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **group**
`read-only group: WidgetGroup;`

Type: [*WidgetGroup*](WidgetGroup.md)

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidWidgetError*](InvalidWidgetError.md)

### **location**
`location: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

### **lockPositionToSurface**
`lockPositionToSurface: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **selectable**
`read-only selectable: boolean;`

Type: *boolean*

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidWidgetError*](InvalidWidgetError.md)

### **selected**
`selected: boolean;`

Type: *boolean*

### **showBoundingBox**
`showBoundingBox: boolean;`

Type: *boolean*

### **showCollisionRadius**
`showCollisionRadius: boolean;`

Type: *boolean*

### **snapToBlockLocation**
`snapToBlockLocation: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **visible**
`visible: boolean;`

Type: *boolean*

### **widgetName**
`read-only widgetName: string;`

Type: *string*

## Methods
- [addBoundingBox](#addboundingbox)
- [addClipboardComponent](#addclipboardcomponent)
- [addEntityComponent](#addentitycomponent)
- [addGizmoComponent](#addgizmocomponent)
- [addGuideComponent](#addguidecomponent)
- [addRenderPrimitiveComponent](#addrenderprimitivecomponent)
- [addSplineComponent](#addsplinecomponent)
- [addTextComponent](#addtextcomponent)
- [addVolumeOutline](#addvolumeoutline)
- [delete](#delete)
- [deleteComponent](#deletecomponent)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [setStateChangeEvent](#setstatechangeevent)

### **addBoundingBox**
`
addBoundingBox(componentName: string, size: minecraftserver.Vector3, options?: WidgetComponentBoundingBoxOptions): WidgetComponentBoundingBox
`

#### **Parameters**
- **componentName**: *string*
- **size**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
- **options**?: [*WidgetComponentBoundingBoxOptions*](WidgetComponentBoundingBoxOptions.md) = `null`

**Returns** [*WidgetComponentBoundingBox*](WidgetComponentBoundingBox.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **addClipboardComponent**
`
addClipboardComponent(componentName: string, clipboardItem?: ClipboardItem, options?: WidgetComponentClipboardOptions): WidgetComponentClipboard
`

#### **Parameters**
- **componentName**: *string*
- **clipboardItem**?: [*ClipboardItem*](ClipboardItem.md) = `null`
- **options**?: [*WidgetComponentClipboardOptions*](WidgetComponentClipboardOptions.md) = `null`

**Returns** [*WidgetComponentClipboard*](WidgetComponentClipboard.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **addEntityComponent**
`
addEntityComponent(componentName: string, actorNameId: string, options?: WidgetComponentEntityOptions): WidgetComponentEntity
`

#### **Parameters**
- **componentName**: *string*
- **actorNameId**: *string*
- **options**?: [*WidgetComponentEntityOptions*](WidgetComponentEntityOptions.md) = `null`

**Returns** [*WidgetComponentEntity*](WidgetComponentEntity.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **addGizmoComponent**
`
addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo
`

#### **Parameters**
- **componentName**: *string*
- **options**?: [*WidgetComponentGizmoOptions*](WidgetComponentGizmoOptions.md) = `null`

**Returns** [*WidgetComponentGizmo*](WidgetComponentGizmo.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **addGuideComponent**
`
addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide
`

#### **Parameters**
- **componentName**: *string*
- **options**?: [*WidgetComponentGuideOptions*](WidgetComponentGuideOptions.md) = `null`

**Returns** [*WidgetComponentGuide*](WidgetComponentGuide.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **addRenderPrimitiveComponent**
`
addRenderPrimitiveComponent(componentName: string, primitiveType: WidgetComponentRenderPrimitiveTypeAxialSphere | WidgetComponentRenderPrimitiveTypeBox | WidgetComponentRenderPrimitiveTypeDisc | WidgetComponentRenderPrimitiveTypeLine, options?: WidgetComponentRenderPrimitiveOptions): WidgetComponentRenderPrimitive
`

#### **Parameters**
- **componentName**: *string*
- **primitiveType**: [*WidgetComponentRenderPrimitiveTypeAxialSphere*](WidgetComponentRenderPrimitiveTypeAxialSphere.md) | [*WidgetComponentRenderPrimitiveTypeBox*](WidgetComponentRenderPrimitiveTypeBox.md) | [*WidgetComponentRenderPrimitiveTypeDisc*](WidgetComponentRenderPrimitiveTypeDisc.md) | [*WidgetComponentRenderPrimitiveTypeLine*](WidgetComponentRenderPrimitiveTypeLine.md)
- **options**?: [*WidgetComponentRenderPrimitiveOptions*](WidgetComponentRenderPrimitiveOptions.md) = `null`

**Returns** [*WidgetComponentRenderPrimitive*](WidgetComponentRenderPrimitive.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **addSplineComponent**
`
addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline
`

#### **Parameters**
- **componentName**: *string*
- **options**?: [*WidgetComponentSplineOptions*](WidgetComponentSplineOptions.md) = `null`

**Returns** [*WidgetComponentSpline*](WidgetComponentSpline.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **addTextComponent**
`
addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText
`

#### **Parameters**
- **componentName**: *string*
- **label**: *string*
- **options**?: [*WidgetComponentTextOptions*](WidgetComponentTextOptions.md) = `null`

**Returns** [*WidgetComponentText*](WidgetComponentText.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **addVolumeOutline**
`
addVolumeOutline(componentName: string, volume?: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume, options?: WidgetComponentVolumeOutlineOptions): WidgetComponentVolumeOutline
`

#### **Parameters**
- **componentName**: *string*
- **volume**?: [*@minecraft/server.BlockVolumeBase*](../../../scriptapi/minecraft/server/BlockVolumeBase.md) | [*RelativeVolumeListBlockVolume*](RelativeVolumeListBlockVolume.md) = `null`
- **options**?: [*WidgetComponentVolumeOutlineOptions*](WidgetComponentVolumeOutlineOptions.md) = `null`

**Returns** [*WidgetComponentVolumeOutline*](WidgetComponentVolumeOutline.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **delete**
`
"delete"(): void
`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **deleteComponent**
`
deleteComponent(componentOrName: string | WidgetComponentBase): void
`

#### **Parameters**
- **componentOrName**: *string* | [*WidgetComponentBase*](WidgetComponentBase.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getComponent**
`
getComponent(componentName: string): WidgetComponentBase
`

#### **Parameters**
- **componentName**: *string*

**Returns** [*WidgetComponentBase*](WidgetComponentBase.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getComponents**
`
getComponents(): WidgetComponentBase[]
`

**Returns** [*WidgetComponentBase*](WidgetComponentBase.md)[]
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetError*](InvalidWidgetError.md)

### **setStateChangeEvent**
`
setStateChangeEvent(eventFunction?: (arg0: WidgetStateChangeEventData) => void): void
`

#### **Parameters**
- **eventFunction**?: (arg0: [*WidgetStateChangeEventData*](WidgetStateChangeEventData.md)) => *void* = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetError*](InvalidWidgetError.md)
