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
"get"(property: AudioSettingsProperty): boolean | number | undefined
`

#### **Parameters**
- **property**: [*AudioSettingsProperty*](AudioSettingsProperty.md)

**Returns** *boolean* | *number* | *undefined*

### **getAll**
`
getAll(): Record<string, boolean | number>
`

**Returns** Record<*string*, *boolean* | *number*>

### **set**
`
"set"(property: AudioSettingsProperty, value: boolean | number): void
`

#### **Parameters**
- **property**: [*AudioSettingsProperty*](AudioSettingsProperty.md)
- **value**: *boolean* | *number*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setAll**
`
setAll(properties: Record<string, boolean | number>): void
`

#### **Parameters**
- **properties**: Record<*string*, *boolean* | *number*>
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
