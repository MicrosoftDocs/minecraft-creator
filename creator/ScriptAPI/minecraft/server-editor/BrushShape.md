---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.BrushShape Class
description: Contents of the @minecraft/server-editor.BrushShape class.
---
# BrushShape Class

## Properties

### **getSettingsUIElements**
`read-only getSettingsUIElements: () => SettingsUIElement[];`

Type: () => [*SettingsUIElement*](SettingsUIElement.md)[]

### **icon**
`read-only icon: string;`

Type: *string*

### **name**
`read-only name: string;`

Type: *string*

### **rebuild**
`read-only rebuild: () => minecraftserver.CompoundBlockVolume;`

Type: () => [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)

## Methods
- [constructor](#constructor)

### **constructor**
`
new BrushShape(name: string, icon: string, rebuild: () => minecraftserver.CompoundBlockVolume, getSettingsUI: () => SettingsUIElement[])
`

#### **Parameters**
- **name**: *string*
- **icon**: *string*
- **rebuild**: () => [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)
- **getSettingsUI**: () => [*SettingsUIElement*](SettingsUIElement.md)[]

**Returns** [*BrushShape*](BrushShape.md)
