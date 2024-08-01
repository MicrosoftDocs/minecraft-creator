---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.WidgetComponentSpline Class
description: Contents of the @minecraft/server-editor.WidgetComponentSpline class.
---
# WidgetComponentSpline Class

## Extends
- [*WidgetComponentBase*](WidgetComponentBase.md)

## Properties

### **splineType**
`splineType: SplineType;`

Type: [*SplineType*](SplineType.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [getControlPoints](#getcontrolpoints)
- [getInterpolatedPoints](#getinterpolatedpoints)
- [setControlPoints](#setcontrolpoints)

### **getControlPoints**
`
getControlPoints(): Widget[]
`

**Returns** [*Widget*](Widget.md)[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md), [*InvalidWidgetError*](InvalidWidgetError.md)

### **getInterpolatedPoints**
`
getInterpolatedPoints(maxPointsPerControlSegment?: number): minecraftserver.Vector3[]
`

#### **Parameters**
- **maxPointsPerControlSegment**?: *number* = `null`

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md), [*InvalidWidgetError*](InvalidWidgetError.md)

### **setControlPoints**
`
setControlPoints(widgetList: Widget[]): void
`

#### **Parameters**
- **widgetList**: [*Widget*](Widget.md)[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md), [*InvalidWidgetError*](InvalidWidgetError.md)
