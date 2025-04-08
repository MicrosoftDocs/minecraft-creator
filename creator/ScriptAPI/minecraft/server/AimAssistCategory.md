---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.AimAssistCategory Class
description: Contents of the @minecraft/server.AimAssistCategory class.
monikerRange: "=minecraft-bedrock-experimental"
---
# AimAssistCategory Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Handle to an aim-assist category that exists in the world.aimAssist registry.

## Properties

### **defaultBlockPriority**
`read-only defaultBlockPriority: number;`

Default targeting priority used for block types not found in getBlockPriorities.

Type: *number*

Notes:
  - This property can throw errors when used.

### **defaultEntityPriority**
`read-only defaultEntityPriority: number;`

Default targeting priority used for entity types not found in getEntityPriorities.

Type: *number*

Notes:
  - This property can throw errors when used.

### **identifier**
`read-only identifier: string;`

The unique Id associated with the category.

Type: *string*

## Methods
- [getBlockPriorities](#getblockpriorities)
- [getEntityPriorities](#getentitypriorities)

### **getBlockPriorities**
`
getBlockPriorities(): Record<string, number>
`

Gets the priority settings used for block targeting.

**Returns** Record<*string*, *number*> - The record mapping block Ids to their priority settings. Larger numbers have greater priority.
  
Notes:
- This function can throw errors.

### **getEntityPriorities**
`
getEntityPriorities(): Record<string, number>
`

Gets the priority settings used for entity targeting.

**Returns** Record<*string*, *number*> - The record mapping entity Ids to their priority settings. Larger numbers have greater priority.
  
Notes:
- This function can throw errors.
