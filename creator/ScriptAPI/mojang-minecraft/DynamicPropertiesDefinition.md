---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.DynamicPropertiesDefinition Class
description: Contents of the mojang-minecraft.DynamicPropertiesDefinition class.
---
# DynamicPropertiesDefinition Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Class used in conjunction with [*mojang-minecraft.PropertyRegistry*](../mojang-minecraft/PropertyRegistry.md) to define dynamic properties that can be used on entities of a specified type or at the global World- level.

## Methods
- [constructor](#constructor)
- [defineBoolean](#defineboolean)
- [defineNumber](#definenumber)
- [defineString](#definestring)

### **constructor**
`
new DynamicPropertiesDefinition()
`

#### **Returns** [*DynamicPropertiesDefinition*](DynamicPropertiesDefinition.md)

### **defineBoolean**
`
defineBoolean(identifier: string): void
`
Defines a new boolean dynamic property.

#### **Parameters**
- **identifier**: *string*
> [!WARNING]
> This function can throw errors.

### **defineNumber**
`
defineNumber(identifier: string): void
`
Defines a new number dynamic property.

#### **Parameters**
- **identifier**: *string*
> [!WARNING]
> This function can throw errors.

### **defineString**
`
defineString(identifier: string, maxLength: number): void
`
Defines a new string dynamic property.

#### **Parameters**
- **identifier**: *string*
- **maxLength**: *number*
> [!WARNING]
> This function can throw errors.
