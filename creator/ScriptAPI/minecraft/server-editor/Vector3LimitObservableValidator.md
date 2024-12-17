---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.Vector3LimitObservableValidator Class
description: Contents of the @minecraft/server-editor.Vector3LimitObservableValidator class.
---
# Vector3LimitObservableValidator Class

Validates min/max limits of observable objects that support Vector3

## Properties

### **_isInteger**
`_isInteger: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **_max**
`_max: Partial<minecraftserver.Vector3>;`

Type: *Partial<minecraftserver.Vector3>*

Notes:
  - This property can't be edited in read-only mode.

### **_min**
`_min: Partial<minecraftserver.Vector3>;`

Type: *Partial<minecraftserver.Vector3>*

Notes:
  - This property can't be edited in read-only mode.

## Methods
- [constructor](#(constructor))
- [updateLimits](#updatelimits)
- [validate](#validate)

### **constructor**
`
new Vector3LimitObservableValidator(min: Partial<minecraftserver.Vector3>, max: Partial<minecraftserver.Vector3>, isInteger: boolean)
`

Constructs a new instance of the `Vector3LimitObservableValidator` class

#### **Parameters**
- **min**: *Partial<minecraftserver.Vector3>*
- **max**: *Partial<minecraftserver.Vector3>*
- **isInteger**: *boolean*

**Returns** *Vector3LimitObservableValidator*

### **updateLimits**
`
updateLimits(min: Partial<minecraftserver.Vector3>, max: Partial<minecraftserver.Vector3>): void
`

#### **Parameters**
- **min**: *Partial<minecraftserver.Vector3>*
- **max**: *Partial<minecraftserver.Vector3>*

**Returns** *void*

### **validate**
`
validate(newValue: minecraftserver.Vector3): minecraftserver.Vector3
`

#### **Parameters**
- **newValue**: *minecraftserver.Vector3*

**Returns** *minecraftserver.Vector3*
