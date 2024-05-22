---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.SettingsUIElement Class
description: Contents of the @minecraft/server-editor.SettingsUIElement class.
---
# SettingsUIElement Class

## Properties

### **initialValue**
`read-only initialValue: boolean | number | string | minecraftserver.Vector3;`

Type: *boolean* | *number* | *string* | [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

### **name**
`read-only name: string;`

Type: *string*

### **onChange**
`read-only onChange: (arg: boolean | number | string | minecraftserver.Vector3) => void;`

Type: (arg: *boolean* | *number* | *string* | [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)) => *void*

### **options**
`read-only options: SettingsUIElementOptions;`

Type: [*SettingsUIElementOptions*](SettingsUIElementOptions.md)

## Methods
- [constructor](#constructor)

### **constructor**
`
new SettingsUIElement(name: string, initialValue: boolean | number | string | minecraftserver.Vector3, onChange: (arg: boolean | number | string | minecraftserver.Vector3) => void, options?: SettingsUIElementOptions)
`

#### **Parameters**
- **name**: *string*
- **initialValue**: *boolean* | *number* | *string* | [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **onChange**: (arg: *boolean* | *number* | *string* | [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)) => *void*
- **options**?: [*SettingsUIElementOptions*](SettingsUIElementOptions.md) = `null`

**Returns** [*SettingsUIElement*](SettingsUIElement.md)
