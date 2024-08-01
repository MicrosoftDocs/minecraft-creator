---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.WidgetComponentBase Class
description: Contents of the @minecraft/server-editor.WidgetComponentBase class.
---
# WidgetComponentBase Class

## Classes that extend WidgetComponentBase
- [*WidgetComponentEntity*](WidgetComponentEntity.md)
- [*WidgetComponentGizmo*](WidgetComponentGizmo.md)
- [*WidgetComponentGuide*](WidgetComponentGuide.md)
- [*WidgetComponentRenderPrimitive*](WidgetComponentRenderPrimitive.md)
- [*WidgetComponentSpline*](WidgetComponentSpline.md)
- [*WidgetComponentText*](WidgetComponentText.md)

## Properties

### **componentType**
`read-only componentType: WidgetComponentType;`

Type: [*WidgetComponentType*](WidgetComponentType.md)

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

### **location**
`read-only location: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*@minecraft/server.InvalidWidgetComponentError*](../../minecraft/server/InvalidWidgetComponentError.md)

### **name**
`read-only name: string;`

Type: *string*

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

### **offset**
`offset: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **valid**
`read-only valid: boolean;`

Type: *boolean*

### **visible**
`visible: boolean;`

Type: *boolean*

### **widget**
`read-only widget: Widget;`

Type: [*Widget*](Widget.md)

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

## Methods
- [delete](#delete)

### **delete**
`
"delete"(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)
