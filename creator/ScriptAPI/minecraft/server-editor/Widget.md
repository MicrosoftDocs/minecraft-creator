---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.Widget Class
description: Contents of the @minecraft/server-editor.Widget class.
---
# Widget Class

## Properties

### **collisionOffset**
`collisionOffset: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **collisionRadius**
`collisionRadius: number;`

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **location**
`location: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **selectable**
`read-only selectable: boolean;`

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*InvalidWidgetError*](InvalidWidgetError.md)

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
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **visible**
`visible: boolean;`

Type: *boolean*

## Methods
- [addEntityComponent](#addentitycomponent)
- [addGizmoComponent](#addgizmocomponent)
- [addGuideComponent](#addguidecomponent)
- [addRenderPrimitiveComponent](#addrenderprimitivecomponent)
- [addSplineComponent](#addsplinecomponent)
- [addTextComponent](#addtextcomponent)
- [delete](#delete)
- [deleteComponent](#deletecomponent)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [setStateChangeEvent](#setstatechangeevent)

### **addEntityComponent**
`
addEntityComponent(componentName: string, actorNameId: string, options?: WidgetComponentEntityOptions): WidgetComponentEntity
`

#### **Parameters**
- **componentName**: *string*
- **actorNameId**: *string*
- **options**?: [*WidgetComponentEntityOptions*](WidgetComponentEntityOptions.md) = `null`

**Returns** [*WidgetComponentEntity*](WidgetComponentEntity.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetError*](InvalidWidgetError.md)

### **addGizmoComponent**
`
addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo
`

#### **Parameters**
- **componentName**: *string*
- **options**?: [*WidgetComponentGizmoOptions*](WidgetComponentGizmoOptions.md) = `null`

**Returns** [*WidgetComponentGizmo*](WidgetComponentGizmo.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetError*](InvalidWidgetError.md)

### **addGuideComponent**
`
addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide
`

#### **Parameters**
- **componentName**: *string*
- **options**?: [*WidgetComponentGuideOptions*](WidgetComponentGuideOptions.md) = `null`

**Returns** [*WidgetComponentGuide*](WidgetComponentGuide.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetError*](InvalidWidgetError.md)

### **addRenderPrimitiveComponent**
`
addRenderPrimitiveComponent(componentName: string, primitiveType: WidgetComponentRenderPrimitiveAxialSphere | WidgetComponentRenderPrimitiveBox | WidgetComponentRenderPrimitiveDisc | WidgetComponentRenderPrimitiveLine, options?: WidgetComponentRenderPrimitiveOptions): WidgetComponentRenderPrimitive
`

#### **Parameters**
- **componentName**: *string*
- **primitiveType**: [*WidgetComponentRenderPrimitiveAxialSphere*](WidgetComponentRenderPrimitiveAxialSphere.md) | [*WidgetComponentRenderPrimitiveBox*](WidgetComponentRenderPrimitiveBox.md) | [*WidgetComponentRenderPrimitiveDisc*](WidgetComponentRenderPrimitiveDisc.md) | [*WidgetComponentRenderPrimitiveLine*](WidgetComponentRenderPrimitiveLine.md)
- **options**?: [*WidgetComponentRenderPrimitiveOptions*](WidgetComponentRenderPrimitiveOptions.md) = `null`

**Returns** [*WidgetComponentRenderPrimitive*](WidgetComponentRenderPrimitive.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetError*](InvalidWidgetError.md)

### **addSplineComponent**
`
addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline
`

#### **Parameters**
- **componentName**: *string*
- **options**?: [*WidgetComponentSplineOptions*](WidgetComponentSplineOptions.md) = `null`

**Returns** [*WidgetComponentSpline*](WidgetComponentSpline.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetError*](InvalidWidgetError.md)

### **addTextComponent**
`
addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText
`

#### **Parameters**
- **componentName**: *string*
- **label**: *string*
- **options**?: [*WidgetComponentTextOptions*](WidgetComponentTextOptions.md) = `null`

**Returns** [*WidgetComponentText*](WidgetComponentText.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetError*](InvalidWidgetError.md)

### **delete**
`
"delete"(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetError*](InvalidWidgetError.md), [*InvalidWidgetGroupError*](InvalidWidgetGroupError.md)

### **deleteComponent**
`
deleteComponent(componentOrName: string | WidgetComponentBase): void
`

#### **Parameters**
- **componentOrName**: *string* | [*WidgetComponentBase*](WidgetComponentBase.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md), [*InvalidWidgetError*](InvalidWidgetError.md)

### **getComponent**
`
getComponent(componentName: string): WidgetComponentBase
`

#### **Parameters**
- **componentName**: *string*

**Returns** [*WidgetComponentBase*](WidgetComponentBase.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetError*](InvalidWidgetError.md)

### **getComponents**
`
getComponents(): WidgetComponentBase[]
`

**Returns** [*WidgetComponentBase*](WidgetComponentBase.md)[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidWidgetError*](InvalidWidgetError.md)

### **setStateChangeEvent**
`
setStateChangeEvent(eventFunction?: (arg: WidgetStateChangeEventData) => void): void
`

#### **Parameters**
- **eventFunction**?: (arg: [*WidgetStateChangeEventData*](WidgetStateChangeEventData.md)) => *void* = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidWidgetError*](InvalidWidgetError.md), [*InvalidWidgetError*](InvalidWidgetError.md)
