---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IPropertyItem Interface
description: Contents of the @minecraft/server-editor.IPropertyItem class.
---
# IPropertyItem Interface

## Extends
- *IPropertyItemBase*

## Properties

### **obj**
`read-only obj: T;`

The object associated.

Type: *T*

### **property**
`read-only property: Prop;`

The target property of the object associated.

Type: *Prop*

### **value**
`read-only value: T[Prop];`

The value of the property.

Type: *T[Prop]*

## Methods
- [dispose](#dispose)

### **dispose**
`
dispose(): void
`

Destroy the property item.

**Returns** *void*
