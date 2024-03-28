---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.GraphicsSettings Class
description: Contents of the @minecraft/server-editor.GraphicsSettings class.
---
# GraphicsSettings Class

Settings category that manages [*@minecraft/server-editor.GraphicsSettingsProperty*](../../minecraft/server-editor/GraphicsSettingsProperty.md) configurations.

## Methods
- [get](#get)
- [getAll](#getall)
- [set](#set)
- [setAll](#setall)

### **get**
`
"get"(property: T): GraphicsSettingsPropertyTypeMap[T] | undefined
`

Retrieves a graphics settings property value.

#### **Parameters**
- **property**: *T*
  
  Property identifier.

**Returns** *GraphicsSettingsPropertyTypeMap[T] | undefined* - Returns the property value if it is found. If the property is not available, it returns undefined.

### **getAll**
`
getAll(): GraphicsSettingsPropertyTypeMap
`

Retrieves all graphics settings properties and their values.

**Returns** *GraphicsSettingsPropertyTypeMap* - Returns a property value map for all available properties.

### **set**
`
"set"(property: T, value: GraphicsSettingsPropertyTypeMap[T]): void
`

Modifies a graphics settings property value.

#### **Parameters**
- **property**: *T*
  
  Property identifier.
- **value**: *GraphicsSettingsPropertyTypeMap[T]*
  
  New property value.

**Returns** *void*

> [!WARNING]
> This function can throw errors.

### **setAll**
`
setAll(properties: GraphicsSettingsPropertyTypeMap): void
`

Modify multiple graphics settings properties.

#### **Parameters**
- **properties**: *GraphicsSettingsPropertyTypeMap*
  
  Property map to set available property values. If the property is not defined in the map, it will not be modified.

**Returns** *void*

> [!WARNING]
> This function can throw errors.
