---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.AimAssistPreset Class
description: Contents of the @minecraft/server.AimAssistPreset class.
monikerRange: "=minecraft-bedrock-experimental"
---
# AimAssistPreset Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Handle to an aim-assist preset that exists in the world.aimAssist registry.

## Properties

### **defaultItemSettings**
`read-only defaultItemSettings?: string;`

Optional. Default aim-assist category Id used for items not provided to setItemSettings.

Type: *string*

Notes:
  - This property can throw errors when used.
    - Throws *Error*

### **handSettings**
`read-only handSettings?: string;`

Optional. Aim-assist category Id used for an empty hand.

Type: *string*

Notes:
  - This property can throw errors when used.
    - Throws *Error*

### **identifier**
`read-only identifier: string;`

The unique Id associated with the preset.

Type: *string*

## Methods
- [getExcludedTargets](#getexcludedtargets)
- [getItemSettings](#getitemsettings)
- [getLiquidTargetingItems](#getliquidtargetingitems)

### **getExcludedTargets**
`
getExcludedTargets(): string[]
`

Gets the list of block/entity Ids to exclude from aim assist targeting.

**Returns** *string*[] - The array of block/entity Ids.
  
Notes:
- This function can throw errors.
  - Throws *Error*

### **getItemSettings**
`
getItemSettings(): Record<string, string>
`

Gets the per-item aim-assist category Ids.

**Returns** Record<*string*, *string*> - The record mapping item Ids to aim-assist category Ids.
  
Notes:
- This function can throw errors.
  - Throws *Error*

### **getLiquidTargetingItems**
`
getLiquidTargetingItems(): string[]
`

Gets the list of item Ids that will target liquid blocks with aim-assist when being held.

**Returns** *string*[] - The array of item Ids.
  
Notes:
- This function can throw errors.
  - Throws *Error*
