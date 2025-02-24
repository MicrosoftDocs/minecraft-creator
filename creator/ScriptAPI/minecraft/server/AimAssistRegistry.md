---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.AimAssistRegistry Class
description: Contents of the @minecraft/server.AimAssistRegistry class.
monikerRange: "=minecraft-bedrock-experimental"
---
# AimAssistRegistry Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

A container for APIs related to the world's aim-assist settings.

## Methods
- [addCategory](#addcategory)
- [addPreset](#addpreset)
- [getCategories](#getcategories)
- [getCategory](#getcategory)
- [getPreset](#getpreset)
- [getPresets](#getpresets)

### **addCategory**
`
addCategory(category: AimAssistCategorySettings): AimAssistCategory
`

Adds an aim-assist category to the registry.

#### **Parameters**
- **category**: [*AimAssistCategorySettings*](AimAssistCategorySettings.md)
  
  The category settings used to create the new category.

**Returns** [*AimAssistCategory*](AimAssistCategory.md) - The created category handle.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), *Error*, [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*NamespaceNameError*](NamespaceNameError.md)

### **addPreset**
`
addPreset(preset: AimAssistPresetSettings): AimAssistPreset
`

Adds an aim-assist preset to the registry.

#### **Parameters**
- **preset**: [*AimAssistPresetSettings*](AimAssistPresetSettings.md)
  
  The preset settings used to create the new preset.

**Returns** [*AimAssistPreset*](AimAssistPreset.md) - The created preset handle.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), *Error*, [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*NamespaceNameError*](NamespaceNameError.md)

### **getCategories**
`
getCategories(): AimAssistCategory[]
`

Gets all available categories in the registry.

**Returns** [*AimAssistCategory*](AimAssistCategory.md)[] - An array of all available category objects.

### **getCategory**
`
getCategory(categoryId: string): AimAssistCategory | undefined
`

Gets the category associated with the provided Id.

#### **Parameters**
- **categoryId**: *string*

**Returns** [*AimAssistCategory*](AimAssistCategory.md) | *undefined* - The category object if it exists, otherwise returns undefined.
  
Notes:
- This function can't be called in read-only mode.

### **getPreset**
`
getPreset(presetId: string): AimAssistPreset | undefined
`

Gets the preset associated with the provided Id.

#### **Parameters**
- **presetId**: *string*
  
  The Id of the preset to retrieve. Must have a namespace.

**Returns** [*AimAssistPreset*](AimAssistPreset.md) | *undefined* - The preset object if it exists, otherwise returns undefined.
  
Notes:
- This function can't be called in read-only mode.

### **getPresets**
`
getPresets(): AimAssistPreset[]
`

Gets all available presets in the registry.

**Returns** [*AimAssistPreset*](AimAssistPreset.md)[] - An array of all available preset objects.

## Constants

### **DefaultPresetId**
`static read-only DefaultPresetId = "minecraft:aim_assist_default";`

The default aim-assist preset Id that is used when not otherwise specified.

Type: *string*
