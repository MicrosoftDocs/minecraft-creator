---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.AudioSettings Class
description: Contents of the @minecraft/server-editor.AudioSettings class.
---
# AudioSettings Class

## Methods
- [get](#get)
- [getAll](#getall)
- [set](#set)
- [setAll](#setall)

### **get**
`
"get"(property: T): AudioSettingsPropertyTypeMap[T] | void
`

#### **Parameters**
- **property**: *T*

**Returns** *AudioSettingsPropertyTypeMap[T]* | *void*

### **getAll**
`
getAll(): AudioSettingsPropertyTypeMap
`

**Returns** *AudioSettingsPropertyTypeMap*

### **set**
`
"set"(property: T, value: AudioSettingsPropertyTypeMap[T]): void
`

#### **Parameters**
- **property**: *T*
- **value**: *AudioSettingsPropertyTypeMap[T]*

**Returns** *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setAll**
`
setAll(properties: AudioSettingsPropertyTypeMap): void
`

#### **Parameters**
- **properties**: *AudioSettingsPropertyTypeMap*

**Returns** *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
