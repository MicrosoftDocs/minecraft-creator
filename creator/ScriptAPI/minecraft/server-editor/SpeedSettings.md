---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.SpeedSettings Class
description: Contents of the @minecraft/server-editor.SpeedSettings class.
---
# SpeedSettings Class

## Methods
- [get](#get)
- [getAll](#getall)
- [set](#set)
- [setAll](#setall)

### **get**
`
"get"(property: T): SpeedSettingsPropertyTypeMap[T] | void
`

#### **Parameters**
- **property**: *T*

**Returns** *SpeedSettingsPropertyTypeMap[T]* | *void*

### **getAll**
`
getAll(): SpeedSettingsPropertyTypeMap
`

**Returns** *SpeedSettingsPropertyTypeMap*

### **set**
`
"set"(property: T, value: SpeedSettingsPropertyTypeMap[T]): void
`

#### **Parameters**
- **property**: *T*
- **value**: *SpeedSettingsPropertyTypeMap[T]*

**Returns** *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setAll**
`
setAll(properties: SpeedSettingsPropertyTypeMap): void
`

#### **Parameters**
- **properties**: *SpeedSettingsPropertyTypeMap*

**Returns** *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
