---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.CustomWidget Class
description: Contents of the @minecraft/server-editor.CustomWidget class.
---
# CustomWidget Class

## Extends
- [*Widget*](Widget.md)

## Properties

### **location**
`read-only location: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

### **rotation**
`read-only rotation: minecraftserver.Vector2;`

Type: [*@minecraft/server.Vector2*](../../minecraft/server/Vector2.md)

### **showTextOnlyWhenSelected**
`read-only showTextOnlyWhenSelected: boolean;`

Type: *boolean*

## Methods
- [getText](#gettext)
- [moveBy](#moveby)
- [setText](#settext)

### **getText**
`
getText(): string
`

**Returns** *string*

### **moveBy**
`
moveBy(delta: minecraftserver.Vector3): void
`

#### **Parameters**
- **delta**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setText**
`
setText(text: string): void
`

#### **Parameters**
- **text**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.
