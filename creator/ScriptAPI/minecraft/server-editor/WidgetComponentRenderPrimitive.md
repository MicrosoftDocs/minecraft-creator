---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.WidgetComponentRenderPrimitive Class
description: Contents of the @minecraft/server-editor.WidgetComponentRenderPrimitive class.
---
# WidgetComponentRenderPrimitive Class

## Extends
- [*WidgetComponentBase*](WidgetComponentBase.md)

## Properties

### **primitiveType**
`read-only primitiveType: PrimitiveType;`

Type: [*PrimitiveType*](PrimitiveType.md)

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md), [*InvalidWidgetError*](InvalidWidgetError.md)

## Methods
- [setPrimitive](#setprimitive)

### **setPrimitive**
`
setPrimitive(primitive: WidgetComponentRenderPrimitiveTypeAxialSphere | WidgetComponentRenderPrimitiveTypeBox | WidgetComponentRenderPrimitiveTypeDisc | WidgetComponentRenderPrimitiveTypeLine): void
`

#### **Parameters**
- **primitive**: [*WidgetComponentRenderPrimitiveTypeAxialSphere*](WidgetComponentRenderPrimitiveTypeAxialSphere.md) | [*WidgetComponentRenderPrimitiveTypeBox*](WidgetComponentRenderPrimitiveTypeBox.md) | [*WidgetComponentRenderPrimitiveTypeDisc*](WidgetComponentRenderPrimitiveTypeDisc.md) | [*WidgetComponentRenderPrimitiveTypeLine*](WidgetComponentRenderPrimitiveTypeLine.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md), [*InvalidWidgetError*](InvalidWidgetError.md)
