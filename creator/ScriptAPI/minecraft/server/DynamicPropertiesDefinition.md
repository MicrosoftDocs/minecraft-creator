---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.DynamicPropertiesDefinition Class
description: Contents of the @minecraft/server.DynamicPropertiesDefinition class.
ms.service: minecraft-bedrock-edition
---
# DynamicPropertiesDefinition Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Class used in conjunction with [*@minecraft/server.PropertyRegistry*](../../minecraft/server/PropertyRegistry.md) to define dynamic properties that can be used on entities of a specified type or at the global World- level.

## Methods
- [constructor](#constructor)
- [defineBoolean](#defineboolean)
- [defineNumber](#definenumber)
- [defineString](#definestring)
- [defineVector](#definevector)

### **constructor**
`
new DynamicPropertiesDefinition()
`

Creates a new DynamicPropertiesDefinition for use within a WorldInitialize event.

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

### **defineBoolean**
`
defineBoolean(identifier: string, defaultValue?: boolean): DynamicPropertiesDefinition
`

Defines a boolean dynamic property.

#### **Parameters**
- **identifier**: *string*
- **defaultValue**?: *boolean* = `null`

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

> [!WARNING]
> This function can throw errors.

### **defineNumber**
`
defineNumber(identifier: string, defaultValue?: number): DynamicPropertiesDefinition
`

Defines a number dynamic property.

#### **Parameters**
- **identifier**: *string*
- **defaultValue**?: *number* = `null`

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

> [!WARNING]
> This function can throw errors.

### **defineString**
`
defineString(identifier: string, maxLength: number, defaultValue?: string): DynamicPropertiesDefinition
`

Defines a string dynamic property.

#### **Parameters**
- **identifier**: *string*
- **maxLength**: *number*
- **defaultValue**?: *string* = `null`

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

> [!WARNING]
> This function can throw errors.

### **defineVector**
`
defineVector(identifier: string, defaultValue?: Vector3): DynamicPropertiesDefinition
`

Defines a new Vector3-based dynamic property.

#### **Parameters**
- **identifier**: *string*
  
  Identifier of the Vector3 property.
- **defaultValue**?: [*Vector3*](Vector3.md) = `null`
  
  Optional default starting Vector for this property.

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

> [!WARNING]
> This function can throw errors.
