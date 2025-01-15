---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.AimAssistCategorySettings Class
description: Contents of the @minecraft/server.AimAssistCategorySettings class.
monikerRange: "=minecraft-bedrock-experimental"
---
# AimAssistCategorySettings Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.
 
## Required Experiments
- Camera Aim Assist


Settings used with AimAssistRegistry.addCategory for creation of the AimAssistCategory.

## Properties

### **defaultBlockPriority**
`defaultBlockPriority: number;`

Optional. Default targeting priority used for block types not provided to setBlockPriorities.

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **defaultEntityPriority**
`defaultEntityPriority: number;`

Optional. Default targeting priority used for entity types not provided to setEntityPriorities.

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **identifier**
`read-only identifier: string;`

The unique Id used to register the category with. Must have a namespace.

Type: *string*

## Methods
- [constructor](#constructor)
- [getBlockPriorities](#getblockpriorities)
- [getEntityPriorities](#getentitypriorities)
- [setBlockPriorities](#setblockpriorities)
- [setEntityPriorities](#setentitypriorities)

### **constructor**
`
new AimAssistCategorySettings(identifier: string)
`

Constructor that takes a unique Id to associate with the created AimAssistCategory. Must have a namespace.

#### **Parameters**
- **identifier**: *string*

**Returns** [*AimAssistCategorySettings*](AimAssistCategorySettings.md)

### **getBlockPriorities**
`
getBlockPriorities(): Record<string, number>
`

Gets the priority settings used for block targeting.

**Returns** Record<*string*, *number*> - The record mapping block Ids to their priority settings. Larger numbers have greater priority.

### **getEntityPriorities**
`
getEntityPriorities(): Record<string, number>
`

Gets the priority settings used for entity targeting.

**Returns** Record<*string*, *number*> - The record mapping entity Ids to their priority settings. Larger numbers have greater priority.

### **setBlockPriorities**
`
setBlockPriorities(blockPriorities: Record<keyof typeof minecraftvanilladata.MinecraftBlockTypes | string, number>): void
`

Sets the priority settings used for block targeting.

#### **Parameters**
- **blockPriorities**: *Record<keyof typeof minecraftvanilladata.MinecraftBlockTypes | string, number>*
  
  A record mapping block Ids to their priority settings. Larger numbers have greater priority.

**Returns** *void*

### **setEntityPriorities**
`
setEntityPriorities(entityPriorities: Record<keyof typeof minecraftvanilladata.MinecraftEntityTypes | string, number>): void
`

Sets the priority settings used for entity targeting.

#### **Parameters**
- **entityPriorities**: *Record<keyof typeof minecraftvanilladata.MinecraftEntityTypes | string, number>*
  
  A record mapping entity Ids to their priority settings. Larger numbers have greater priority.

**Returns** *void*