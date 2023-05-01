---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.DynamicPropertiesDefinition Class
description: Contents of the @minecraft/server.DynamicPropertiesDefinition class.
---
# DynamicPropertiesDefinition Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Class used in conjunction with [*@minecraft/server.PropertyRegistry*](../../minecraft/server/PropertyRegistry.md) to define dynamic properties that can be used on entities of a specified type or at the global World- level.

## Methods
- [constructor](#constructor)
- [defineBoolean](#defineboolean)
- [defineNumber](#definenumber)
- [defineString](#definestring)

### **constructor**
`
new DynamicPropertiesDefinition()
`

Creates a new DynamicPropertiesDefinition for use within a WorldInitialize event.

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

### **defineBoolean**
`
defineBoolean(identifier: string): DynamicPropertiesDefinition
`

Defines a boolean dynamic property.

#### **Parameters**
- **identifier**: *string*

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

> [!WARNING]
> This function can throw errors.

### **defineNumber**
`
defineNumber(identifier: string): DynamicPropertiesDefinition
`

Defines a number dynamic property.

#### **Parameters**
- **identifier**: *string*

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

> [!WARNING]
> This function can throw errors.

### **defineString**
`
defineString(identifier: string, maxLength: number): DynamicPropertiesDefinition
`

Defines a string dynamic property.

#### **Parameters**
- **identifier**: *string*
- **maxLength**: *number*

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

> [!WARNING]
> This function can throw errors.
