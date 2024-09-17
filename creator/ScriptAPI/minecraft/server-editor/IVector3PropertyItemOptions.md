---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IVector3PropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IVector3PropertyItemOptions class.
---
# IVector3PropertyItemOptions Interface

## Extends
- *IPropertyItemOptionsBase*

Optional properties for Vector3 property item

## Properties

### **hiddenLabel**
`hiddenLabel: boolean;`

If true label text will be hidden. It will be visible by default.

Type: *boolean*

### **isInteger**
`isInteger: boolean;`

If we should treat the Vector3 properties as integer values. By default is false.

Type: *boolean*

### **max**
`max: Partial<Vector3>;`

The min possible limits. If undefined, Number.MAX_SAFE_INTEGER will be used.

Type: *Partial<Vector3>*

### **min**
`min: Partial<Vector3>;`

The min possible limits. If undefined, Number.MIN_SAFE_INTEGER will be used.

Type: *Partial<Vector3>*

### **onChange**
`onChange: (newValue: Vector3, oldValue: Vector3) => void;`

This callback is called when UI control is changed.

Type: *(newValue: Vector3, oldValue: Vector3) => void*

### **title**
`title: LocalizedString;`

Localized title of the property item

Type: *LocalizedString*

### **tooltip**
`tooltip: LocalizedString;`

Tooltip description of the property item

Type: *LocalizedString*
