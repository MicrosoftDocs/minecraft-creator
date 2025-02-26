---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.AimAssistPresetSettings Class
description: Contents of the @minecraft/server.AimAssistPresetSettings class.
monikerRange: "=minecraft-bedrock-experimental"
---
# AimAssistPresetSettings Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Settings used with AimAssistRegistry.addPreset for creation of the AimAssistPreset.

## Properties

### **defaultItemSettings**
`defaultItemSettings?: string;`

Optional. Default aim-assist category Id used for items not provided to setItemSettings.

Type: *string*

Notes:
  - This property can't be edited in read-only mode.

### **handSettings**
`handSettings?: string;`

Optional. Aim-assist category Id used for an empty hand.

Type: *string*

Notes:
  - This property can't be edited in read-only mode.

### **identifier**
`read-only identifier: string;`

The unique Id used to register the preset with. Must have a namespace.

Type: *string*

## Methods
- [constructor](#constructor)
- [getExcludedTargets](#getexcludedtargets)
- [getItemSettings](#getitemsettings)
- [getLiquidTargetingItems](#getliquidtargetingitems)
- [setExcludedTargets](#setexcludedtargets)
- [setItemSettings](#setitemsettings)
- [setLiquidTargetingItems](#setliquidtargetingitems)

### **constructor**
`
new AimAssistPresetSettings(identifier: string)
`

Constructor that takes a unique Id to associate with the created AimAssistPreset. Must have a namespace.

#### **Parameters**
- **identifier**: *string*

**Returns** [*AimAssistPresetSettings*](AimAssistPresetSettings.md)

### **getExcludedTargets**
`
getExcludedTargets(): string[] | undefined
`

Gets the list of block/entity Ids to exclude from aim assist targeting.

**Returns** *string*[] | *undefined* - The array of block/entity Ids.

### **getItemSettings**
`
getItemSettings(): Record<string, string>
`

Gets the per-item aim-assist category Ids.

**Returns** Record<*string*, *string*> - The record mapping item Ids to aim-assist category Ids.

### **getLiquidTargetingItems**
`
getLiquidTargetingItems(): string[] | undefined
`

Gets the list of item Ids that will target liquid blocks with aim-assist when being held.

**Returns** *string*[] | *undefined* - The array of item Ids.

### **setExcludedTargets**
`
setExcludedTargets(targets: (keyof typeof minecraftvanilladata.MinecraftBlockTypes | keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]): void
`

Sets the list of block/entity Ids to exclude from aim assist targeting.

#### **Parameters**
- **targets**: *(keyof typeof minecraftvanilladata.MinecraftBlockTypes | keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]*
  
  An array of block/entity Ids.

**Returns** *void*
  
Notes:
- This function can't be called in read-only mode.

### **setItemSettings**
`
setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void
`

Sets the per-item aim-assist category Ids.

#### **Parameters**
- **itemSettings**: *Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>*
  
  A record mapping item Ids to aim-assist category Ids. Category Ids must have a namespace.

**Returns** *void*
  
Notes:
- This function can't be called in read-only mode.

### **setLiquidTargetingItems**
`
setLiquidTargetingItems(items: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void
`

Sets the list of item Ids that will target liquid blocks with aim-assist when being held.

#### **Parameters**
- **items**: *(keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]*
  
  An array of item Ids.

**Returns** *void*
  
Notes:
- This function can't be called in read-only mode.
